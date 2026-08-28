# Brazilian Portuguese Master 🇧🇷

**Live:** `https://portuguese-master.netlify.app` (after deploy)  
**Stack:** Static HTML/CSS/JS — no build. Mobile-friendly UI frozen, content evolving.

## What this is
- Brazilian Portuguese ONLY (`pt-BR` locked) — `index.html:752` `const accent = 'pt-BR'`
- Category 01: **Brazilian Portuguese Alphabet (26 letters with pronunciation)** — `á [a] — 'ah' — Avião` + audio `🔊`
- PWA-ready: `manifest.json`, `service-worker.js` (`br-portuguese-v2`)

## Files
- `index.html` — app shell + inline `database` (authoritative)
- `data.js` — mirror database (PWA cache)
- `manifest.json` / `service-worker.js` — PWA
- `PROGRESS.md` — living log: completed, next up, decisions, changelog (kept in git, also published at `/PROGRESS.md` — not linked from UI, harmless docs transparency)

## Deploy (Git-connected)
- Repo: `portuguese-master-app` (GitHub)
- Netlify: `portuguese-master.netlify.app` → Git-connected, publish `"."` , no build command
- Config: `netlify.toml`

## Progress
See `PROGRESS.md` for full roadmap. Next: Category 02 Brazilian Greetings.

## Local preview
Open `index.html` directly or `npx serve .` — no build.
