const ORIGIN = "https://heetae-l.github.io";
const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;
const PROJECTS = {
  "partner-order-product-integration": "Travel & Leisure Integration",
  "travel-ai-qa-api": "Travel AI Q&A API",
  "ai-dlc-knowledge-workflow": "AI-DLC Knowledge Workflow",
  "kto-hyugashop-quality-reporting": "KTO Hyugashop",
  "benepia-service-operations": "Benepia Platform",
  "duo-flex": "Duo Flex"
};

export function pageTitle(path) {
  if (typeof path !== "string" || path.length > 160) return null;
  const match = path.match(/^\/(ko|en)(?:\/(portfolio|projects|experience|tech-stack))?(?:\/([a-z-]+))?$/);
  if (!match) return null;
  const [, locale, section, slug] = match;
  if (slug && (section !== "projects" || !Object.hasOwn(PROJECTS, slug))) return null;
  const name = slug ? PROJECTS[slug] : ({ portfolio: "Home (submission)", projects: "Projects",
    experience: "Experience", "tech-stack": "Tech Stack" }[section] || "Home");
  return `${name} [${locale.toUpperCase()}]`;
}

async function digest(secret, value) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const result = await crypto.subtle.sign("HMAC", key, encoder.encode(value));
  return Array.from(new Uint8Array(result), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function readEvent(request) {
  if (!request.body) throw new Error("body");
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 1024) { await reader.cancel(); throw new Error("size"); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  const event = JSON.parse(new TextDecoder().decode(bytes));
  if (!event || typeof event !== "object" || Array.isArray(event) ||
      Object.keys(event).sort().join(",") !== "path,session" ||
      typeof event.session !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(event.session) ||
      !pageTitle(event.path)) throw new Error("event");
  return event;
}

function coarseClient(ua) {
  const browser = /Edg\//.test(ua) ? "Edge" : /Firefox\//.test(ua) ? "Firefox" :
    /Chrome\/|CriOS\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "Unknown browser";
  const device = /iPad|Tablet/.test(ua) ? "Tablet" : /Mobile|Android|iPhone/.test(ua) ? "Mobile" : "Desktop/Other";
  return `${device} / ${browser}`;
}

function cleanLocation(value) {
  return typeof value === "string" ? value.replace(/[\p{C}\r\n]/gu, "").trim().slice(0, 64) : "";
}

export function messageFor(event, request, includeLocation, now = Date.now()) {
  const time = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul", dateStyle: "short", timeStyle: "medium" }).format(now);
  const region = includeLocation ? [request.cf?.country, request.cf?.city].map(cleanLocation).filter(Boolean).join(" / ") : "";
  return ["Portfolio page opened", pageTitle(event.path), `${time} KST`,
    ...(includeLocation ? [`Approx. location: ${region || "Unknown"}`] : []),
    coarseClient((request.headers.get("User-Agent") || "").slice(0, 512)), `${ORIGIN}${event.path}/`].join("\n");
}

async function sendMessage(env, text) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text,
        link_preview_options: { is_disabled: true }, disable_notification: false }),
      signal: AbortSignal.timeout(5000)
    });
    const result = response.ok ? await response.json() : null;
    if (result?.ok) console.info("Visitor notification delivered");
    else console.warn("Visitor notification delivery failed");
  } catch {
    // Never log exceptions: their URL can contain the bot token.
    console.warn("Visitor notification delivery failed");
  }
}

// A single SQLite-backed object reserves attempts across all Cloudflare locations.
// Only bounded, secret-keyed hashes + timestamps are stored, not IPs or page data.
export class VisitGate {
  constructor(state) { this.state = state; }

  async fetch(request) {
    const { ip, visit } = await request.json();
    const accepted = await this.state.blockConcurrencyWhile(async () => {
      const now = Date.now();
      const entries = (await this.state.storage.get("attempts") || []).filter((entry) => now - entry.at < DAY);
      if (entries.length >= 100 || entries.filter((entry) => now - entry.at < 60 * MINUTE).length >= 30 ||
          entries.some((entry) => entry.visit === visit && now - entry.at < 30 * MINUTE) ||
          entries.filter((entry) => entry.ip === ip && now - entry.at < 10 * MINUTE).length >= 8) return false;
      entries.push({ at: now, ip, visit });
      await this.state.storage.put("attempts", entries);
      if (await this.state.storage.getAlarm() === null) await this.state.storage.setAlarm(now + 30 * MINUTE);
      return true;
    });
    return new Response(null, { status: accepted ? 201 : 204 });
  }

  async alarm() {
    await this.state.blockConcurrencyWhile(async () => {
      const now = Date.now();
      const entries = (await this.state.storage.get("attempts") || []).filter((entry) => now - entry.at < DAY);
      if (entries.length) {
        await this.state.storage.put("attempts", entries);
        await this.state.storage.setAlarm(now + 30 * MINUTE);
      } else { await this.state.storage.deleteAll(); }
    });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const allowed = request.headers.get("Origin") === ORIGIN;
    const headers = { "Cache-Control": "no-store", Vary: "Origin" };
    if (allowed) Object.assign(headers, {
      "Access-Control-Allow-Origin": ORIGIN, "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "600"
    });
    const respond = (status) => new Response(null, { status, headers });
    if (url.pathname !== "/visit" || url.search) return respond(404);
    if (!allowed) return respond(403);
    if (request.method === "OPTIONS") {
      return respond(request.headers.get("Access-Control-Request-Method") === "POST" ? 204 : 405);
    }
    if (request.method !== "POST") return respond(405);
    if (env.NOTIFY_ENABLED !== "true") return respond(204);
    if (!env.TELEGRAM_BOT_TOKEN || !/^-?\d+$/.test(env.TELEGRAM_CHAT_ID || "") ||
        (env.VISIT_HASH_SECRET || "").length < 32 || !env.VISIT_GATE) return respond(503);
    if (request.headers.get("Sec-GPC") === "1") {
      console.info("Visitor notification suppressed: privacy preference");
      return respond(204);
    }
    if (request.headers.get("Content-Type")?.split(";")[0].trim() !== "application/json") return respond(415);
    const ip = request.headers.get("CF-Connecting-IP");
    if (!ip || ip.length > 64) return respond(400);
    let event;
    try { event = await readEvent(request); } catch { return respond(400); }
    try {
      const gate = env.VISIT_GATE.get(env.VISIT_GATE.idFromName("global"));
      const reservation = await gate.fetch(new Request("https://internal/reserve", {
        method: "POST", body: JSON.stringify({
          ip: await digest(env.VISIT_HASH_SECRET, `ip:${ip}`),
          visit: await digest(env.VISIT_HASH_SECRET, `visit:${event.session}:${event.path}`)
        })
      }));
      if (reservation.status === 201) ctx.waitUntil(sendMessage(env, messageFor(event, request, env.INCLUDE_LOCATION === "true")));
      else console.info("Visitor notification suppressed: limits or duplicate");
      return respond(202);
    } catch { return respond(503); }
  }
};
