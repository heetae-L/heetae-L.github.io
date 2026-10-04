import assert from "node:assert/strict";
import { test } from "node:test";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { Miniflare, convertV4MiniflareOptions } from "miniflare";
import { bindVisitorAlertPreference, installVisitorAlerts } from "../src/scripts/visitor-alerts.mjs";
import worker, { VisitGate, pageTitle, messageFor } from "./visitor-alerts.mjs";

const origin = "https://heetae-l.github.io";
const endpoint = "https://heetae-visitor-alerts.example.workers.dev/visit";
const event = (path = "/ko") => ({ session: randomUUID(), path });
const request = (body = event(), headers = {}, method = "POST", url = endpoint) => new Request(url, {
  method, headers: { Origin: origin, "Content-Type": "application/json", "CF-Connecting-IP": "192.0.2.1", ...headers },
  ...(method === "POST" ? { body: typeof body === "string" ? body : JSON.stringify(body) } : {})
});
const config = { NOTIFY_ENABLED: "true", INCLUDE_LOCATION: "true", TELEGRAM_BOT_TOKEN: "test-only-token",
  TELEGRAM_CHAT_ID: "123", VISIT_HASH_SECRET: "test-only-hash-key-32-characters-long" };

function memoryState(entries = []) {
  let queue = Promise.resolve();
  let alarm = null;
  const values = new Map([["attempts", entries]]);
  return {
    values,
    blockConcurrencyWhile(fn) {
      const next = queue.then(fn);
      queue = next.catch(() => {});
      return next;
    },
    storage: {
      async get(key) { return structuredClone(values.get(key)); },
      async put(key, value) { values.set(key, structuredClone(value)); },
      async getAlarm() { return alarm; },
      async setAlarm(value) { alarm = value; },
      async deleteAll() { values.clear(); alarm = null; }
    }
  };
}
const reserve = (gate, ip, visit) => gate.fetch(new Request("https://internal/reserve", {
  method: "POST", body: JSON.stringify({ ip, visit })
}));

test("server route allowlist covers localized site pages only", () => {
  for (const locale of ["ko", "en"]) {
    for (const suffix of ["", "/portfolio", "/projects", "/experience", "/tech-stack",
      ...["partner-order-product-integration", "travel-ai-qa-api", "ai-dlc-knowledge-workflow",
        "kto-hyugashop-quality-reporting", "benepia-service-operations"].map((slug) => `/projects/${slug}`)]) {
      assert.ok(pageTitle(`/${locale}${suffix}`));
    }
  }
  for (const path of ["/", "/ko/", "/ko?email=private", "/ko#private", "/ko/projects/nope",
    "/ko/experience/nope", "/ko/projects/__proto__", "/downloads/resume.pdf", "/fr", null]) assert.equal(pageTitle(path), null);
});

test("notification text excludes identity and handles missing/unsafe geolocation", () => {
  const req = request(event(), { "User-Agent": "Mozilla/5.0 Mobile Safari/123" });
  req.cf = { country: "KR", city: "Seoul\n\u202e" };
  const text = messageFor(event(), req, true, 0);
  assert.match(text, /KR \/ Seoul/);
  assert.match(text, /Mobile \/ Safari/);
  assert.match(text, /KST/);
  assert.doesNotMatch(text, /192\.0\.2|session|\u202e/);
  assert.doesNotMatch(messageFor(event(), req, false), /location|Seoul/);
  assert.match(messageFor(event(), request(), true), /Unknown/);
});

test("concurrent duplicate reservations have a single winner", async () => {
  const gate = new VisitGate(memoryState());
  const responses = await Promise.all(Array.from({ length: 12 }, () => reserve(gate, "ip", "same")));
  assert.equal(responses.filter((response) => response.status === 201).length, 1);
});

test("IP budget does not trust client session identity", async () => {
  const state = memoryState();
  const gate = new VisitGate(state);
  for (let i = 0; i < 9; i++) assert.equal((await reserve(gate, "same-ip", `visit-${i}`)).status, i < 8 ? 201 : 204);
  assert.equal(state.values.get("attempts").length, 8);
});

test("global hourly cap applies across IPs and visits", async () => {
  const gate = new VisitGate(memoryState());
  for (let i = 0; i < 31; i++) assert.equal((await reserve(gate, `ip-${i}`, `visit-${i}`)).status, i < 30 ? 201 : 204);
});

test("rolling daily cap bounds storage to 100 entries", async () => {
  const state = memoryState(Array.from({ length: 100 }, (_, i) => ({ at: Date.now() - 2 * 60 * 60_000, ip: `ip-${i}`, visit: `visit-${i}` })));
  assert.equal((await reserve(new VisitGate(state), "new", "new")).status, 204);
  assert.equal(state.values.get("attempts").length, 100);
});

test("expired dedup unlocks, alarms purge data even without visits", async () => {
  const state = memoryState([{ at: Date.now() - 31 * 60_000, ip: "ip", visit: "same" }]);
  const gate = new VisitGate(state);
  assert.equal((await reserve(gate, "ip", "same")).status, 201);
  state.values.set("attempts", [{ at: Date.now() - 25 * 60 * 60_000, ip: "old", visit: "old" }]);
  await gate.alarm();
  assert.equal(state.values.size, 0);
  assert.equal(await state.storage.getAlarm(), null);
});

test("active alarm retains only unexpired entries and reschedules", async () => {
  const state = memoryState([{ at: Date.now(), ip: "current", visit: "current" },
    { at: Date.now() - 25 * 60 * 60_000, ip: "old", visit: "old" }]);
  await new VisitGate(state).alarm();
  assert.equal(state.values.get("attempts").length, 1);
  assert.ok(await state.storage.getAlarm());
});

test("public endpoint validates origin, method, config, privacy headers, body", async (t) => {
  const env = { ...config, VISIT_GATE: {} };
  const cases = [
    [request({}, { Origin: "https://evil.example" }), env, 403],
    [request({}, { Origin: "null" }), env, 403],
    [request({}, {}, "GET"), env, 405],
    [request({}, {}, "POST", `${endpoint}?private=1`), env, 404],
    [request(), { ...env, NOTIFY_ENABLED: "false" }, 204],
    [request(), { ...env, TELEGRAM_BOT_TOKEN: "" }, 503],
    [request(), { ...env, TELEGRAM_CHAT_ID: "bad" }, 503],
    [request(), { ...env, VISIT_HASH_SECRET: "short" }, 503],
    [request({}, { DNT: "1" }), env, 400],
    [request({}, { "Sec-GPC": "1" }), env, 204],
    [request({}, { "Content-Type": "text/plain" }), env, 415],
    [request({}, { "CF-Connecting-IP": "" }), env, 400],
    [request("not json"), env, 400],
    [request("x".repeat(1025)), env, 400],
    [request({ ...event(), title: "forged" }), env, 400],
    [request({ ...event(), session: "not-a-uuid" }), env, 400],
    [request(event("/ko?private=1")), env, 400],
    [request(null), env, 400]
  ];
  for (const [req, bindings, expected] of cases) await t.test(`status ${expected}`, async () => {
    const response = await worker.fetch(req, bindings, { waitUntil() { assert.fail("must not deliver"); } });
    assert.equal(response.status, expected);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
  });
  const preflight = await worker.fetch(request({}, { "Access-Control-Request-Method": "POST" }, "OPTIONS"), env, {});
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get("Access-Control-Allow-Origin"), origin);
});

test("reservation hashes metadata and fails closed when storage is unavailable", async () => {
  let saved;
  const env = { ...config, VISIT_GATE: { idFromName() { return "global"; }, get() {
    return { async fetch(req) { saved = await req.json(); return new Response(null, { status: 204 }); } };
  } } };
  assert.equal((await worker.fetch(request(), env, {})).status, 202);
  assert.match(saved.ip, /^[a-f0-9]{64}$/);
  assert.match(saved.visit, /^[a-f0-9]{64}$/);
  assert.doesNotMatch(JSON.stringify(saved), /192\.0\.2|\/ko/);
  env.VISIT_GATE.get = () => { throw new Error("unavailable"); };
  assert.equal((await worker.fetch(request(), env, {})).status, 503);
});

test("Telegram failure never logs a token, request URL or exception", async (t) => {
  const warnings = [];
  let attempts = 0;
  t.mock.method(console, "warn", (...args) => warnings.push(args));
  t.mock.method(globalThis, "fetch", async () => {
    attempts++;
    throw new Error(`https://api.telegram.org/bot${config.TELEGRAM_BOT_TOKEN}/sendMessage`);
  });
  const env = { ...config, VISIT_GATE: { idFromName() { return "global"; }, get() {
    return { async fetch() { return new Response(null, { status: 201 }); } };
  } } };
  let delivery;
  assert.equal((await worker.fetch(request(), env, { waitUntil(promise) { delivery = promise; } })).status, 202);
  await delivery;
  assert.equal(attempts, 1);
  assert.deepEqual(warnings, [["Visitor notification delivery failed"]]);
});

function browser(path = "/ko/") {
  const makeStorage = () => { const map = new Map(); return {
    getItem: (key) => map.get(key) ?? null, setItem: (key, value) => map.set(key, value)
  }; };
  const requests = [];
  const listeners = {};
  const win = { location: { hostname: "heetae-l.github.io", pathname: path }, navigator: {}, crypto: { randomUUID },
    localStorage: makeStorage(), sessionStorage: makeStorage(),
    fetch: async (...args) => { requests.push(args); return new Response(null, { status: 202 }); } };
  const doc = { visibilityState: "visible", addEventListener: (name, fn) => { listeners[name] = fn; } };
  return { win, doc, requests, listeners };
}

test("browser gates disabled/local, opt-out, GPC, unsafe endpoints", () => {
  for (const mode of ["disabled", "development", "localhost", "owner", "gpc", "unsafe", "credentials", "storage"]) {
    const { win, doc, requests } = browser();
    if (mode === "localhost") win.location.hostname = "localhost";
    if (mode === "owner") win.localStorage.setItem("heetae-visit-opt-out", "1");
    if (mode === "gpc") win.navigator.globalPrivacyControl = true;
    if (mode === "storage") win.sessionStorage.getItem = () => { throw new Error("blocked"); };
    const url = mode === "disabled" ? "" : mode === "unsafe" ? "https://evil.example/visit" :
      mode === "credentials" ? "https://user:password@example.workers.dev/visit" : endpoint;
    installVisitorAlerts(win, doc, url, mode !== "development");
    assert.equal(requests.length, 0, mode);
  }
});

test("browser visibility, dedup, navigation, TTL and request minimization", () => {
  const { win, doc, requests, listeners } = browser();
  doc.visibilityState = "hidden";
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 0);
  doc.visibilityState = "visible";
  listeners.visibilitychange();
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 1);
  assert.deepEqual(Object.keys(JSON.parse(requests[0][1].body)).sort(), ["path", "session"]);
  assert.equal(requests[0][1].referrerPolicy, "no-referrer");
  assert.equal(requests[0][1].credentials, "omit");
  win.location.pathname = "/en/projects/";
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 2);
  const firstSession = JSON.parse(requests[0][1].body).session;
  assert.equal(JSON.parse(requests[1][1].body).session, firstSession);
  win.sessionStorage.setItem("heetae-visit-pages", JSON.stringify({ "/en/projects": Date.now() - 31 * 60_000 }));
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 3);
});

test("browser network failures are silent and not retried on refresh", async () => {
  const { win, doc } = browser();
  let attempts = 0;
  win.fetch = () => { attempts++; return Promise.reject(new Error("offline")); };
  installVisitorAlerts(win, doc, endpoint, true);
  await Promise.resolve();
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(attempts, 1);
});

test("footer preference persists opt-out and restore for subsequent visits", () => {
  const { win, doc, requests } = browser();
  win.navigator.doNotTrack = "1";
  let change;
  const input = { dataset: {}, addEventListener(name, fn) { assert.equal(name, "change"); change = fn; } };
  bindVisitorAlertPreference(win, input);
  assert.equal(input.checked, true);
  input.checked = false;
  change();
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 0);
  bindVisitorAlertPreference(win, input);
  assert.equal(input.checked, false);
  input.checked = true;
  change();
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 1);
});

test("DNT alone permits browser notification and an enabled preference", () => {
  const { win, doc, requests } = browser();
  win.navigator.doNotTrack = "1";
  const input = { disabled: false, dataset: {}, addEventListener() {} };
  const status = { dataset: {} };
  bindVisitorAlertPreference(win, input, status);
  assert.equal(input.checked, true);
  assert.equal(input.disabled, false);
  assert.equal(input.dataset.visitorAlertReason, "allowed");
  assert.equal(status.hidden, true);
  installVisitorAlerts(win, doc, endpoint, true);
  installVisitorAlerts(win, doc, endpoint, true);
  assert.equal(requests.length, 1);
});

test("footer preference fails closed for GPC and storage restrictions", () => {
  for (const mode of ["gpc", "read", "write"]) {
    const { win } = browser();
    if (mode === "gpc") win.navigator.globalPrivacyControl = true;
    if (mode === "read") win.localStorage.getItem = () => { throw new Error("blocked"); };
    if (mode === "write") win.localStorage.setItem = () => { throw new Error("blocked"); };
    let change;
    const input = { dataset: {}, addEventListener(name, fn) { change = fn; } };
    const status = { dataset: { gpc: "gpc", storageRead: "read", storageWrite: "write" } };
    bindVisitorAlertPreference(win, input, status);
    if (mode === "write") change();
    assert.equal(input.checked, false, mode);
    assert.equal(input.disabled, true, mode);
    assert.equal(status.textContent, mode);
    assert.equal(status.hidden, false);
    assert.equal(input.dataset.visitorAlertReason, ({read: "storageRead", write: "storageWrite"}[mode] || mode));
  }
  bindVisitorAlertPreference(browser().win, null);
});

test("actual workerd + SQLite binding: delivery mock, dedup, CORS and failure suppression", async (t) => {
  const calls = [];
  let fail = false;
  const mf = new Miniflare(convertV4MiniflareOptions({
    modules: true, scriptPath: fileURLToPath(new URL("./visitor-alerts.mjs", import.meta.url)),
    compatibilityDate: "2026-10-04", cf: false,
    bindings: config, durableObjects: { VISIT_GATE: { className: "VisitGate", useSQLite: true } },
    outboundService: async (req) => {
      assert.equal(new URL(req.url).hostname, "api.telegram.org");
      const payload = await req.json();
      calls.push(payload);
      return new Response(JSON.stringify({ ok: !fail }), { status: fail ? 500 : 200 });
    }
  }));
  t.after(() => mf.dispose());
  const post = (body, headers = {}) => mf.dispatchFetch(endpoint, {
    method: "POST", headers: { Origin: origin, "Content-Type": "application/json", "CF-Connecting-IP": "192.0.2.1", ...headers },
    body: JSON.stringify(body), cf: { country: "KR", city: "Seoul" }
  });
  const one = event();
  const simultaneous = await Promise.all(Array.from({ length: 12 }, () => post(one, { DNT: "1" })));
  assert.ok(simultaneous.every((response) => response.status === 202));
  await poll(() => calls.length === 1);
  assert.match(calls[0].text, /Home \[KO\]/);
  assert.match(calls[0].text, /KR \/ Seoul/);
  assert.doesNotMatch(calls[0].text, /192\.0\.2/);
  assert.equal(calls[0].parse_mode, undefined);
  assert.equal(calls[0].link_preview_options.is_disabled, true);
  assert.equal((await post(event(), { DNT: "1", "Sec-GPC": "1" })).status, 204);
  assert.equal(calls.length, 1);
  await post(one);
  const gate = await mf.getDurableObjectNamespace("VISIT_GATE");
  assert.equal((await gate.get(gate.idFromName("global")).fetch("https://internal/reserve", {
    method: "POST", body: JSON.stringify({ ip: "local-test", visit: "local-test" })
  })).status, 201);
  fail = true;
  const two = event("/en/projects");
  assert.equal((await post(two)).status, 202);
  await poll(() => calls.length === 2);
  await post(two);
  assert.equal((await post(event(), { Origin: "https://evil.example" })).status, 403);
  // No outbound request can escape the local handler, including failed delivery.
  await new Promise((resolve) => setTimeout(resolve, 50));
  assert.equal(calls.length, 2);
});

async function poll(condition) {
  for (let i = 0; i < 100; i++) {
    if (condition()) return;
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
  assert.fail("timed out waiting for mock delivery");
}
