const COOKIE_NAME = "gambit_session";
const encoder = new TextEncoder();

function base64UrlToBytes(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function sign(value, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}

function readCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const prefix = `${name}=`;
  const item = cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return item ? item.slice(prefix.length) : "";
}

async function isAuthenticated(request, secret) {
  if (!secret) return false;
  const token = readCookie(request, COOKIE_NAME);
  const separator = token.lastIndexOf(".");
  if (separator < 1) return false;

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  let expiresAt;
  try {
    expiresAt = Number(JSON.parse(new TextDecoder().decode(base64UrlToBytes(payload))).exp);
  } catch {
    return false;
  }
  if (!expiresAt || expiresAt <= Date.now()) return false;

  const expected = await sign(payload, secret);
  let actual;
  try {
    actual = base64UrlToBytes(signature);
  } catch {
    return false;
  }
  if (actual.length !== expected.length) return false;

  let difference = 0;
  for (let index = 0; index < actual.length; index += 1) {
    difference |= actual[index] ^ expected[index];
  }
  return difference === 0;
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname === "/login" || url.pathname === "/api/auth/login") {
    return context.next();
  }

  if (await isAuthenticated(context.request, context.env.AUTH_SECRET)) {
    return context.next();
  }

  if (url.pathname.startsWith("/api/")) {
    return Response.json({ error: "Authentication required." }, { status: 401 });
  }

  const loginUrl = new URL("/login", url);
  loginUrl.searchParams.set("next", `${url.pathname}${url.search}`);
  return Response.redirect(loginUrl, 302);
}
