// Cloudflare Worker: proxy Yahoo Finance chart data for the GOLD AI TRADER PRO website.
// Deploy this as a Worker and bind it to your site's domain as /api/* (or adjust frontend fetch URL).
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/chart") {
      const symbol = url.searchParams.get("symbol") || "XAUUSD=X";
      const interval = url.searchParams.get("interval") || "5m";
      const range = url.searchParams.get("range") || "5d";
      const allowedIntervals = new Set(["5m", "15m"]);
      if (!allowedIntervals.has(interval)) return new Response("Invalid interval", {status:400});
      const yahoo = new URL("https://query1.finance.yahoo.com/v8/finance/chart/" + encodeURIComponent(symbol));
      yahoo.searchParams.set("interval", interval);
      yahoo.searchParams.set("range", range);
      const upstream = await fetch(yahoo.toString(), {
        headers: {"User-Agent":"Mozilla/5.0","Accept":"application/json"}
      });
      const body = await upstream.text();
      return new Response(body, {
        status: upstream.status,
        headers: {
          "Content-Type":"application/json; charset=utf-8",
          "Access-Control-Allow-Origin":"*",
          "Cache-Control":"no-store"
        }
      });
    }
    return new Response("GOLD AI TRADER PRO API is running", {
      headers: {"Content-Type":"text/plain; charset=utf-8"}
    });
  }
};