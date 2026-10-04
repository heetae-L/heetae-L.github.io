const SITE_HOST = "heetae-l.github.io";
const WINDOW_MS = 30 * 60 * 1000;
const SESSION_KEY = "heetae-visit-session";
const SEEN_KEY = "heetae-visit-pages";

export function bindVisitorAlertPreference(win, input, status) {
  if (!input) return;
  const explain = (reason) => {
    input.dataset.visitorAlertReason = reason;
    if (status) {
      status.textContent = status.dataset[reason] || "";
      status.hidden = !status.textContent;
    }
  };
  try {
    input.checked = win.localStorage.getItem("heetae-visit-opt-out") !== "1";
    if (win.navigator.globalPrivacyControl === true) {
      input.checked = false;
      input.disabled = true;
      explain("gpc");
      return;
    }
    explain(input.checked ? "allowed" : "owner");
    input.addEventListener("change", () => {
      try {
        win.localStorage.setItem("heetae-visit-opt-out", input.checked ? "0" : "1");
        explain(input.checked ? "allowed" : "owner");
      } catch { input.checked = false; input.disabled = true; explain("storageWrite"); }
    });
  } catch { input.checked = false; input.disabled = true; explain("storageRead"); }
}

export function installVisitorAlerts(win, doc, endpoint, production) {
  if (!production || win.location.hostname !== SITE_HOST || !endpoint) return;
  let target;
  try {
    target = new URL(endpoint);
    if (target.protocol !== "https:" || !target.hostname.endsWith(".workers.dev") ||
        target.pathname !== "/visit" || target.search || target.hash ||
        target.username || target.password || target.port) return;
  } catch { return; }

  const notify = () => {
    if (doc.visibilityState !== "visible" || win.navigator.globalPrivacyControl === true) return;
    try {
      if (win.localStorage.getItem("heetae-visit-opt-out") === "1") return;
      const now = Date.now();
      const path = win.location.pathname.replace(/\/+$/, "");
      const seen = JSON.parse(win.sessionStorage.getItem(SEEN_KEY) || "{}");
      if (now - (seen[path] || 0) < WINDOW_MS) return;
      let session = win.sessionStorage.getItem(SESSION_KEY);
      if (!session) {
        session = win.crypto.randomUUID();
        win.sessionStorage.setItem(SESSION_KEY, session);
      }
      // Reserve before the request: uncertain network failures must not cause repeats.
      const recent = Object.fromEntries(Object.entries(seen).filter(([, at]) => now - at < WINDOW_MS));
      recent[path] = now;
      win.sessionStorage.setItem(SEEN_KEY, JSON.stringify(recent));
      void win.fetch(target.href, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session, path }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        keepalive: true,
        signal: AbortSignal.timeout(5000)
      }).catch(() => {});
    } catch {
      // Storage restrictions or notification failures never affect the site.
    }
  };
  notify();
  doc.addEventListener("visibilitychange", notify);
}
