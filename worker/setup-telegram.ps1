$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$PSNativeCommandUseErrorActionPreference = $false
$root = Split-Path -Parent $PSScriptRoot
$wrangler = Join-Path $root 'node_modules/wrangler/bin/wrangler.js'
$config = Join-Path $PSScriptRoot 'wrangler.jsonc'
$token = $null
$secureToken = $null
$pointer = [IntPtr]::Zero
$stage = 'local prerequisites'
$locationPushed = $false

function Get-CloudflareAuthentication {
    $result = & node $wrangler whoami --json --config $config 2>$null
    if ($LASTEXITCODE -ne 0) { return $null }
    try { return ($result -join "`n" | ConvertFrom-Json) } catch { return $null }
}

try {
    if (-not (Test-Path -LiteralPath $wrangler)) {
        throw 'Missing local Wrangler installation.'
    }
    Push-Location -LiteralPath $root
    $locationPushed = $true
    $stage = 'Cloudflare authentication'
    Write-Host 'Checking Cloudflare CLI authentication before asking for your Telegram token...'
    $auth = Get-CloudflareAuthentication
    if (-not $auth -or -not $auth.loggedIn) {
        if ($env:CLOUDFLARE_API_TOKEN -or $env:CLOUDFLARE_API_KEY) {
            Write-Host 'An existing Cloudflare API credential is configured but authentication failed. Check it locally; do not share it here.'
            throw 'Existing Cloudflare credential requires review.'
        }
        Write-Host 'Approve Wrangler login in the browser using the account that owns heetae-visitor-alerts.'
        & node $wrangler login --config $config
        if ($LASTEXITCODE -ne 0) { throw 'Cloudflare login failed.' }
        $auth = Get-CloudflareAuthentication
        if (-not $auth -or -not $auth.loggedIn) { throw 'Cloudflare login was not confirmed.' }
    }
    if (@($auth.accounts).Count -ne 1) {
        Write-Host 'Expected one Cloudflare account. Account selection needs separate review; no Telegram token was requested.'
        throw 'Cloudflare account is ambiguous.'
    }
    $stage = 'Cloudflare existing Worker check'
    $secretList = & node $wrangler secret list --config $config 2>$null
    if ($LASTEXITCODE -ne 0) { throw 'Cannot access the existing Worker.' }
    $secrets = $secretList -join "`n" | ConvertFrom-Json
    if (-not ($secrets | Where-Object { $_.name -ceq 'VISIT_HASH_SECRET' })) {
        Write-Host 'The prepared Worker hash secret was not found. Check the Cloudflare account; no Telegram token was requested.'
        throw 'Prepared Worker was not confirmed.'
    }
    Write-Host 'Cloudflare authentication and the prepared Worker are confirmed.'
    $stage = 'token input'
    $secureToken = Read-Host 'Paste your BotFather token (hidden; never paste it into the AI chat)' -AsSecureString
    $pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
    $token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
    $pointer = [IntPtr]::Zero
    $token = $token.Trim()
    if ($token -notmatch '^\d+:[A-Za-z0-9_-]{20,100}$') {
        throw 'Invalid token format.'
    }

    # Keep API responses in memory: never print the token URL or private updates.
    $api = "https://api.telegram.org/bot$token"
    $stage = 'Telegram bot identity'
    $bot = Invoke-RestMethod -Uri "$api/getMe" -Method Post -TimeoutSec 15
    if (-not $bot.ok -or -not $bot.result.is_bot) { throw 'Telegram API rejected the request.' }
    Write-Host "Bot: @$($bot.result.username)"
    Write-Host "Open this NEW bot chat, not BotFather: https://t.me/$($bot.result.username)"
    $stage = 'Telegram webhook check'
    $webhook = Invoke-RestMethod -Uri "$api/getWebhookInfo" -Method Post -TimeoutSec 15
    if (-not $webhook.ok) { throw 'Webhook check failed.' }
    if ($webhook.result.url) {
        Write-Host 'This bot already has a webhook. Nothing was changed. Use your new portfolio bot token instead.'
        throw 'Existing webhook requires separate review.'
    }
    $challenge = 'connect_' + [Guid]::NewGuid().ToString('N').Substring(0, 16)
    Write-Host 'Send this exact message in that bot private chat (no reply is expected):'
    Write-Host $challenge
    if ((Read-Host 'After sending it, press Enter here (or type CANCEL)') -ieq 'CANCEL') {
        Write-Host 'Cancelled. No secrets changed.'
        return
    }
    $stage = 'Telegram destination lookup'
    $chatIds = @()
    for ($attempt = 0; $attempt -lt 4; $attempt++) {
        $updates = Invoke-RestMethod -Uri "$api/getUpdates" -Method Post -TimeoutSec 15 -Body @{
            limit = '100'
            allowed_updates = '["message"]'
        }
        if (-not $updates.ok) { throw 'Telegram API rejected the request.' }
        $chatIds = @($updates.result | Where-Object {
            $_.message.chat.type -eq 'private' -and $_.message.text -ceq $challenge
        } | ForEach-Object { [string]$_.message.chat.id } | Sort-Object -Unique)
        if ($chatIds.Count -gt 0) { break }
        if ($attempt -lt 3) { Start-Sleep -Seconds 1 }
    }
    if ($chatIds.Count -ne 1) {
        Write-Host "Matching private chats: $($chatIds.Count). No secrets were uploaded."
        Write-Host 'Check the bot name and exact connect message. Another getUpdates consumer or an older queue can also prevent lookup; do not share your token.'
        throw 'Destination requires confirmation.'
    }
    Write-Host "Destination chat ID: $($chatIds[0])"
    if ((Read-Host 'Store these credentials in heetae-visitor-alerts? Type YES') -cne 'YES') {
        Write-Host 'Cancelled. No secrets changed.'
        return
    }
    $stage = 'Cloudflare bot token secret upload'
    $token | & node $wrangler secret put TELEGRAM_BOT_TOKEN --config $config
    if ($LASTEXITCODE -ne 0) { throw 'Bot token secret upload failed.' }
    $stage = 'Cloudflare chat ID secret upload'
    $chatIds[0] | & node $wrangler secret put TELEGRAM_CHAT_ID --config $config
    if ($LASTEXITCODE -ne 0) { throw 'Chat ID secret upload failed.' }
    Write-Host 'Secrets stored. This script does not change notification enablement. Tell Codex setup is complete; do not share the token.'
} catch {
    # Exception URLs can contain the token; deliberately omit exception details.
    Write-Host "Setup failed at: $stage. Raw error details are hidden to protect the token."
    exit 1
} finally {
    if ($pointer -ne [IntPtr]::Zero) { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer) }
    if ($secureToken) { $secureToken.Dispose() }
    $token = $null
    $api = $null
    $updates = $null
    if ($locationPushed) { Pop-Location }
}
