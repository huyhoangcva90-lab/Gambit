const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const host = "127.0.0.1";
const port = Number(process.env.PORT || 4173);
const notionToken = process.env.NOTION_TOKEN;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
};

function sendJson(response, status, value) {
  response.writeHead(status, { "Content-Type": contentTypes[".json"] });
  response.end(JSON.stringify(value));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

async function proxyNotion(request, response, url) {
  if (!notionToken) {
    sendJson(response, 500, { error: "NOTION_TOKEN is not configured." });
    return;
  }

  const notionPath = url.searchParams.get("path");
  if (!notionPath || !notionPath.startsWith("/v1/")) {
    sendJson(response, 400, { error: "Invalid Notion API path." });
    return;
  }

  try {
    const body = await readBody(request);
    const upstream = await fetch(`https://api.notion.com${notionPath}`, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: body.length ? body : undefined,
    });
    const payload = await upstream.arrayBuffer();
    response.writeHead(upstream.status, {
      "Content-Type": upstream.headers.get("content-type") || contentTypes[".json"],
    });
    response.end(Buffer.from(payload));
  } catch (error) {
    sendJson(response, 502, { error: "Unable to reach Notion.", detail: error.message });
  }
}

function serveFile(response, pathname) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(root, `.${decodeURIComponent(requestedPath)}`);
  if (!filePath.startsWith(root + path.sep)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    const resolvedPath = !statError && stats.isDirectory()
      ? path.join(filePath, "index.html")
      : filePath;
    fs.readFile(resolvedPath, (error, contents) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }
      response.writeHead(200, {
        "Content-Type": contentTypes[path.extname(resolvedPath)] || "application/octet-stream",
      });
      response.end(contents);
    });
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || `${host}:${port}`}`);
  if (url.pathname === "/api/notion") {
    await proxyNotion(request, response, url);
    return;
  }
  serveFile(response, url.pathname);
});

server.listen(port, host, () => {
  console.log(`Gambit running at http://${host}:${port}`);
  if (!notionToken) console.warn("NOTION_TOKEN is missing; Notion sync is disabled.");
});
