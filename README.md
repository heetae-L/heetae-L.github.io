# heetae-L.github.io

개인 홈페이지 저장소입니다.

## Website

[https://heetae-l.github.io/](https://heetae-l.github.io/)

## About

경력, 프로젝트, 기술 스택, 연락 정보를 정리하는 웹 레쥬메 및 포트폴리오 사이트

## Contents

- Resume-first homepage
- Project case studies
- Work experience timeline
- Tech stack overview
- Korean / English pages

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript

## Portfolio Files

- 편집 정본: [heetae-lee-portfolio.pptx](public/downloads/heetae-lee-portfolio.pptx) (12장, 기본 URL `/ko/`)
- 일반 PDF: [heetae-lee-portfolio.pdf](public/downloads/heetae-lee-portfolio.pdf) (기본 URL `/ko/`)
- 제출용 PDF: [heetae-lee-portfolio-submission.pdf](public/downloads/heetae-lee-portfolio-submission.pdf) (개인정보 제외 URL `/ko/portfolio/`)
- 이전 버전은 `portfolio/archive/`에 PPTX 한 개만 보관. PDF는 필요한 경우 다시 변환.
- 슬라이드 미리보기: [portfolio-preview.png](portfolio/preview/portfolio-preview.png)

두 PDF는 표지와 마지막 페이지의 URL만 다르며, 사이트 다운로드 버튼은 일반·제출용 화면에 맞는 PDF를 제공. 제출용 PDF는 편집 정본에서 URL만 바꾼 임시 PPTX로 생성하고 임시 파일은 배포하지 않음.
`public/downloads/`의 파일은 배포 후 직접 URL로 접근 가능.

## Resume Files

- 편집 정본: [heetae-lee-resume.html](public/downloads/heetae-lee-resume.html)
- 제출용 PDF: [heetae-lee-resume.pdf](public/downloads/heetae-lee-resume.pdf) (A4 4페이지)
- 2026-09-30 현대오토에버 지원에 사용한 범용 이력서. PDF 제출 시 파일명은 `heetae-lee_Resume.pdf`.
- HTML의 인쇄 스타일을 적용해 PDF를 생성한다. HTML을 수정하면 PDF도 다시 생성해야 한다.
- 헤더·Home의 Resume 메뉴에서 HTML 웹 보기와 PDF 다운로드를 제공한다. EN에서도 파일은 한국어이므로 메뉴 안에 KO로 표시한다.
- Portfolio 메뉴는 기존 PDF의 미리보기(새 탭)와 다운로드를 제공한다. 700px 미만은 상단 이름을 생략하고 페이지 메뉴·햄버거를 한 줄로 고정하며 문서·언어·테마·GitHub를 햄버거 안에 둔다. 700~939px은 문서 아이콘을, 940px 이상은 문서 버튼을 사용한다. 별도 문서 파일이나 PDF 뷰어는 만들지 않는다.
- 개인정보 제외 모드에서는 연락처가 있는 Resume 메뉴를 숨기고 Portfolio 보기·다운로드를 모두 제출용 PDF로 연결한다. 기존 public 파일의 직접 URL 접근까지 차단하는 기능은 아니다.

## Analytics

- GA4 측정 ID: `G-B05RJDTZCM`. 공통 `src/layouts/SiteLayout.astro`에서 KO/EN과 제출용 페이지를 측정한다.
- 운영 빌드의 `heetae-l.github.io`에서만 수집한다. 개발 서버와 로컬 production preview는 수집하지 않는다.
- Google signals와 광고 개인화를 비활성화하고 기본 페이지 조회 URL에서 query/hash를 제외한다. 향상된 측정의 링크 URL 등은 별도 수집 항목이므로 GA4의 이메일 데이터 수정 설정도 확인한다.
- 페이지 조회 및 GA4에서 켠 향상된 측정(스크롤, 외부 링크, PDF 링크 클릭)을 사용한다. 직접 PDF URL을 연 경우와 다운로드 완료는 이 태그로 측정하지 않는다. `public/downloads/`의 독립 레쥬메 HTML에는 태그를 넣지 않는다.
- 내 운영 방문 제외와 데이터 보관·이메일 데이터 수정 설정은 GA4 관리 화면에서 별도로 설정한다. 배포 후 실시간 보고서에서 수신을 확인한다.
- 운영 배포 전 Analytics 쿠키 사용 고지와 방문자 지역에 따른 동의 필요 여부를 점검한다. 광고 개인화 비활성화가 분석 쿠키의 비활성화를 의미하지는 않는다.

## Visitor Notifications

- 구조: 공통 페이지 스크립트 → Cloudflare Worker → Telegram. GA4와 독립적이며 GitHub Pages 호스팅은 유지한다.
- **운영 활성화 설정**: Worker `NOTIFY_ENABLED=true`, GitHub Actions 변수 `PUBLIC_VISITOR_ALERT_URL` = `https://heetae-visitor-alerts.htlee.workers.dev/visit`. Pages 운영 빌드에서만 사용하며 로컬에서는 실행하지 않는다. 중단 시 아래 절차를 따른다.
- 알림: 페이지 구분/KO·EN, 서버 수신 시각(KST), 추정 국가·도시, 대략적인 기기·브라우저. 읽는 중인지·방문자 신원은 알 수 없고 봇/위조 요청도 완전히 구별할 수 없다. 국가·도시는 VPN 등으로 부정확하거나 누락될 수 있다.
- 본문 20페이지 대상. 독립 Resume HTML·PDF 직접 접근은 제외한다. query/hash·referrer·원본 IP·좌표·세션 ID는 Telegram에 보내지 않는다.
- 같은 탭·페이지는 30분간 중복 억제. 서버는 10분/IP당 8회, 전체 1시간 30회·24시간 100회로 **전송 시도**를 제한한다. IP는 사용자 구분이 아니라 남용 방지 기준이므로 같은 회사망에서도 제한될 수 있다.
- SQLite Durable Object에는 최대 100개의 HMAC 해시·시각만 보관하고 24시간 경과 항목을 30분 주기 정리한다. 원본 IP를 애플리케이션 저장소에 보관하지 않는다는 뜻이며 Cloudflare 자체 처리는 별개다. Origin은 인증이 아니다. 공개 엔드포인트 공격·무료 한도 소진 위험은 남는다.
- 페이지가 실제로 표시될 때 전송하며 DNT/GPC·아래 내 브라우저 제외를 존중한다. 오류는 무시하고 재시도하지 않아 누락될 수 있다. GA4의 사용자 수/조회 수와 일치하는 집계가 아니다.
- KO/EN 모든 본문 페이지의 푸터 `방문 정보 안내 / Visitor information`에서 처리 항목·외부 서비스·보관을 알리고 브라우저별 전송 제외/복원을 제공한다(인쇄 제외). 초기값은 허용인 opt-out 설정이며 명시적 opt-in 또는 GA4 쿠키 동의 관리는 아니다. 고지 추가를 지역별 법적 동의 충족으로 단정하지 않는다.
- 미수신 진단: 푸터에서 DNT/GPC·브라우저별 제외·저장소 접근 실패 이유를 표시한다. 이유는 브라우저에만 표시하며 서버로 보내지 않는다. Worker는 고정 로그로 전달 성공·실패·개인정보 설정 제외·한도/중복 억제를 구분하며 메시지·IP·토큰을 애플리케이션 로그에 넣지 않는다. `Visitor notification delivered`는 Telegram API `ok=true` 확인이며 폰 푸시 표시까지 보장하지는 않는다.

### Connection

1. Telegram `@BotFather`에서 `/newbot`으로 봇 생성 → 만든 봇의 채팅에서 `/start`. **토큰은 채팅·Git에 남기지 않는다.**
2. 최초 연결 시 config의 `NOTIFY_ENABLED=false`로 바꾼 뒤 `npx wrangler login`으로 Cloudflare 인증하고 `npm run worker:deploy`로 **비활성 상태**를 배포한다. SQLite Durable Objects는 Workers Free에서 사용 가능하며 무료 한도 초과 시 실패한다([공식 기준](https://developers.cloudflare.com/durable-objects/platform/pricing/)).
3. `VISIT_HASH_SECRET`(무작위 32바이트 이상의 별도 키)은 Cloudflare Secret으로 저장한다. Windows에서 `pwsh -NoProfile -ExecutionPolicy Bypass -File worker/setup-telegram.ps1` 실행(현재 프로세스만 정책 변경) → Cloudflare CLI 인증 확인·필요하면 브라우저 로그인 승인 → 기존 Worker 확인 → 토큰 숨김 입력 → 표시된 봇 개인 채팅에 이번 실행의 `connect_...` 메시지 전송 → 터미널 Enter → Chat ID 확인·`YES`. 대시보드 로그인이나 Codex 환경의 인증이 사용자 PowerShell의 CLI 인증을 보장하지 않는다. 스크립트는 프로젝트 위치에서 실행하고 인증 계정이 하나이며 기존 해시 Secret을 조회할 수 있어야 토큰을 요청한다. `getUpdates`의 이번 확인 메시지로 수신 대상을 확정하고 `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`를 Worker Secret에 저장한다([Telegram 공식 API](https://core.telegram.org/bots/api#getupdates)). 일치하는 개인 채팅이 없거나 여러 개면 저장하지 않고, 기존 webhook도 변경하지 않는다. 토큰·원본 업데이트·오류 URL은 출력/파일 저장하지 않으며, 실패 시 고정 단계 이름만 표시한다. 토큰을 브라우저 URL·채팅·캡처로 공유하지 않는다. 수동 설정은 Cloudflare Worker → Settings → Variables and Secrets에서 세 이름을 **Secret**으로 저장한다.
4. 운영 활성화 전에 방문 정보의 Cloudflare/Telegram 처리·보관 고지와 필요한 동의 범위를 점검한다. 현재 푸터 안내·전송 제외 설정은 명시적 사전 동의 UI가 아니다. 위치가 불필요하면 `INCLUDE_LOCATION=false`로 배포한다.
5. 내 운영 브라우저 콘솔에서 아래 설정 → Worker config의 `NOTIFY_ENABLED`를 `"true"`로 변경하고 재배포한다. 비밀값은 config에 넣지 않는다.
6. GitHub 저장소 Settings → Secrets and variables → Actions → **Variables**에 `PUBLIC_VISITOR_ALERT_URL` = 배포된 `https://heetae-visitor-alerts.<계정>.workers.dev/visit` 설정. Pages workflow 재실행 후 LTE/다른 브라우저로 폰 알림·다른 페이지·새로고침 중복·내 방문 제외를 확인한다. 로컬 production preview도 알림을 보내지 않는다.

```js
// 운영 사이트의 내 브라우저에서 실행. 프로필/기기별로 설정한다.
localStorage.setItem("heetae-visit-opt-out", "1");
// 다시 수신 대상으로 전환: localStorage.removeItem("heetae-visit-opt-out");
```

중단: Worker `NOTIFY_ENABLED=false`로 재배포하거나 Cloudflare에서 변수 변경. 사이트의 `PUBLIC_VISITOR_ALERT_URL`도 제거하고 Pages를 재빌드한다. 토큰 변경/폐기는 BotFather에서 한다. Telegram 메시지는 별도로 남으므로 필요하면 채팅에서 삭제한다.

```bash
npm run test:alerts   # 단위 + 실제 workerd/SQLite, Telegram은 로컬 모의 응답만 사용
npm run worker:check  # 패키징 확인만, 운영 배포 아님
```

## Deployment

`main` 브랜치에 push, GitHub Actions가 정적 사이트를 빌드하고 GitHub Pages로 배포.

## Local Memo

```bash
npm install
npm run dev
npm run build
```
