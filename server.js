const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const page = fs.readFileSync(path.join(__dirname, "channel", "index.html"));
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  if (pathname === "/health") { res.writeHead(200, {"Content-Type":"text/plain"}); res.end("ok"); return; }
  if (pathname !== "/" && pathname !== "/index.html") { res.writeHead(404); res.end("Not found"); return; }
  res.writeHead(200, {"Content-Type":"text/html; charset=utf-8", "Cache-Control":"no-cache"});
  res.end(page);
}).listen(port, "0.0.0.0", () => console.log("Channel Dispatch preview listening on "+port));
