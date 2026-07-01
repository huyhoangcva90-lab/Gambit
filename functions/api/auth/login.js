const COOKIE_NAME = "gambit_session";
const SESSION_SECONDS = 60 * 60 * 24 * 365;
const encoder = new TextEncoder();

function bytesToBase64Url(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function digest(value) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

async function matchesPassword(candidate, expected) {
  const [left, right] = await Promise.all([digest(candidate), digest(expected)]);
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left[index] ^ right[index];
  }
  return difference === 0;
}

async function createSession(secret) {
  const payload = bytesToBase64Url(
    encoder.encode(JSON.stringify({ exp: Date.now() + SESSION_SECONDS * 1000 }))
  );
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = new Uint8Array(
    await crypto.subtle.sign("HMAC", key, encoder.encode(payload))
  );
  return `${payload}.${bytesToBase64Url(signature)}`;
}

export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed." }, { status: 405 });
  }

  if (!env.APP_PASSWORD || !env.AUTH_SECRET) {
    return Response.json({ error: "Login is not configured." }, { status: 500 });
  }

  let password = "";
  try {
    ({ password = "" } = await request.json());
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!(await matchesPassword(password, env.APP_PASSWORD))) {
    return Response.json({ error: "Wrong password." }, { status: 401 });
  }

  const token = await createSession(env.AUTH_SECRET);
  return Response.json(
    { ok: true },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": `${COOKIE_NAME}=${token}; Max-Age=${SESSION_SECONDS}; Path=/; HttpOnly; Secure; SameSite=Lax`,
      },
    }
  );
}
