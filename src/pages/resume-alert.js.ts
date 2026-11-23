import visitorAlerts from "../scripts/visitor-alerts.mjs?raw";

export function GET() {
  const endpoint = JSON.stringify(import.meta.env.PUBLIC_VISITOR_ALERT_URL || "");
  return new Response(
    `${visitorAlerts}\nif (window === window.top) installVisitorAlerts(window, document, ${endpoint}, ${import.meta.env.PROD});\n`,
    { headers: { "Content-Type": "text/javascript; charset=utf-8" } }
  );
}
