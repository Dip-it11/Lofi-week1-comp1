# Lofistack UI

Reusable, accessible React components for the **90 Day Build Challenge — Track A**.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Output:** fully static export (`out/`) — host on Cloudflare Pages, Netlify, Vercel or GitHub Pages
- Every component lives at its own route: `/components/<slug>/`, with a live preview, props playground and copy-ready code.

## Components

| Component | Route |
| --- | --- |
| Cat Reveal Hero — a cat walks across the hero and reveals the company name behind it | `/components/cat-reveal-hero/` |

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Deploy to GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which builds the site and publishes it on every push to `main`.

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow from the **Actions** tab).
3. The site appears at `https://<user>.github.io/<repo>/` — component pages at `/components/<slug>/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo>` automatically (empty for `<user>.github.io` repos).

## Other hosts

`npm run build` writes a static site to `out/` that also works on Cloudflare Pages, Netlify or Vercel (leave `NEXT_PUBLIC_BASE_PATH` unset).

## Adding a component

1. Build it in `src/components/<slug>/` with typed props.
2. Register it in `src/lib/registry.ts`.
3. Create `src/app/components/<slug>/page.tsx` (preview + playground + code).
