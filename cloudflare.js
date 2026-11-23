export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" && request.method === "GET") {
      return Response.json({ status: "ok", message: "Backend is running on Cloudflare!" });
    }

    if (url.pathname === "/api/hello" && request.method === "GET") {
      return Response.json({ message: "Hello from Cloudflare!", timestamp: new Date().toISOString() });
    }

    return Response.json({ error: "Route not found" }, { status: 404 });
  }
};