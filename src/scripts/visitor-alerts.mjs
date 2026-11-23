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

  const notify = (path, action, ref) => {
    if (doc.visibilityState !== "visible" || win.navigator.globalPrivacyControl === true) return;
    try {
      if (win.localStorage.getItem("heetae-visit-opt-out") === "1") return;
      const now = Date.now();
      const key = action ? `${action}:${path}` : ref ? `${path}?ref=${ref}` : path;
      const seen = JSON.parse(win.sessionStorage.getItem(SEEN_KEY) || "{}");
      if (now - (seen[key] || 0) < WINDOW_MS) return;
      let session = win.sessionStorage.getItem(SESSION_KEY);
      if (!session) {
        session = win.crypto.randomUUID();
        win.sessionStorage.setItem(SESSION_KEY, session);
      }
      // Reserve before the request: uncertain network failures must not cause repeats.
      const recent = Object.fromEntries(Object.entries(seen).filter(([, at]) => now - at < WINDOW_MS));
      recent[key] = now;
      win.sessionStorage.setItem(SEEN_KEY, JSON.stringify(recent));
      void win.fetch(target.href, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session, path, ...(action && { action }), ...(ref && { ref }) }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        keepalive: true,
        signal: AbortSignal.timeout(5000)
      }).catch(() => {});
    } catch {
      // Storage restrictions or notification failures never affect the site.
    }
  };
  const notifyPage = () => {
    const path = win.location.pathname.replace(/\/+$/, "");
    const refs = /^\/(ko|en)\/(?:resume-view|portfolio-view(?:\/submission)?)$/.test(path)
      ? new URLSearchParams(win.location.search).getAll("ref")
      : [];
    const ref = refs.length === 1 && /^[\p{L}\p{N}_-]{1,64}$/u.test(refs[0]) ? refs[0] : undefined;
    notify(path, undefined, ref);
  };
  const notifyClick = (event) => {
    if (event.defaultPrevented || (event.type === "auxclick" && event.button !== 1)) return;
    const link = event.target?.closest?.("a[data-document-action]");
    const action = link?.dataset.documentAction;
    if (action !== "open" && action !== "download") return;
    try {
      const url = new URL(link.href, win.location.href);
      if (url.origin === win.location.origin) notify(url.pathname.replace(/\/+$/, ""), action);
    } catch {
      // Tracking must not interfere with the document link.
    }
  };
  notifyPage();
  doc.addEventListener("visibilitychange", notifyPage);
  doc.addEventListener("click", notifyClick);
  doc.addEventListener("auxclick", notifyClick);
}
