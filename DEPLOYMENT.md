# Deploy Gambit Privately

## Architecture

```text
Cloudflare Access login
        |
Cloudflare Pages (static Gambit UI)
        |
Pages Function /api/notion
        |
Notion API
```

GitHub stores the source code. Cloudflare Pages serves the website and runs
the Notion proxy. The Notion token must only exist as a Cloudflare secret.

## 1. Create the Cloudflare Pages project

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages** and create a Pages project.
3. Connect the GitHub repository `huyhoangcva90-lab/Gambit`.
4. Select the production branch.
5. Leave the build command empty.
6. Set the build output directory to `/`.
7. Deploy the project.

Every later push to the production branch will redeploy Gambit automatically.

## 2. Add the Notion secret

In the Pages project, open **Settings > Variables and Secrets** and add:

```text
NOTION_TOKEN
```

Use **Secret** rather than plain text. Redeploy after adding it.

The Function in `functions/api/notion.js` exposes `/api/notion` to the Habit
Tracker while keeping the Notion token server-side.

## 3. Protect Gambit with Cloudflare Access

1. Open **Zero Trust > Access > Applications**.
2. Add a self-hosted web application for the Pages domain.
3. Create an Allow policy containing only the owner's email address.
4. Choose an identity provider such as Google or email one-time PIN.
5. Set a long application session duration for trusted personal devices.

The first visit requires login. Later visits on the same phone reuse the
Cloudflare Access session until it expires or browser data is cleared.

## 4. Install on a phone

Open the deployed URL, sign in, then use **Add to Home Screen**. The root page
includes a web app manifest and service worker, so Gambit opens in standalone
mode like a personal app.

## Security checklist

- Keep the GitHub repository private.
- Never commit `.dev.vars`, API tokens, or passwords.
- Revoke any GitHub or Notion token that was pasted into chat or a remote URL.
- Restrict the Notion integration to only the databases Gambit needs.
