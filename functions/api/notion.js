const NOTION_API_ORIGIN = "https://api.notion.com";
const NOTION_VERSION = "2022-06-28";
const ALLOWED_METHODS = new Set(["GET", "POST", "PATCH"]);

function jsonResponse(value, status = 200) {
  return Response.json(value, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function onRequest({ request, env }) {
  if (!env.NOTION_TOKEN) {
    return jsonResponse({ error: "NOTION_TOKEN is not configured." }, 500);
  }

  if (!ALLOWED_METHODS.has(request.method)) {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const requestUrl = new URL(request.url);
  const notionPath = requestUrl.searchParams.get("path");
  if (!notionPath || !notionPath.startsWith("/v1/")) {
    return jsonResponse({ error: "Invalid Notion API path." }, 400);
  }

  try {
    const body = request.method === "GET" ? undefined : await request.arrayBuffer();
    const upstream = await fetch(`${NOTION_API_ORIGIN}${notionPath}`, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": NOTION_VERSION,
      },
      body: body && body.byteLength ? body : undefined,
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
      },
    });
  } catch (error) {
    return jsonResponse({ error: "Unable to reach Notion.", detail: error.message }, 502);
  }
}
