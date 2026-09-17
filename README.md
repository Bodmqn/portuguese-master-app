# My Portuguese Lessons — Class Tutor 🇧🇷

**Stack:** Static HTML/CSS/JS — no build, offline PWA. Mobile UI kept, content is your Tuesday class docs.

## What this is
- Your English-speaking tutor for `Aula 01–18` (e-Tec Brasil, Condomínio Brasil story).
- Home shows **Lessons** (not generic categories). Each Lesson splits into small **Parts** (e.g. Lesson 1A–1H) + scripted **Conversations** (role-play with 🔊/🎤).
- Bold purple = must-master from your PDF (bold words/phrases in the doc).
- Brazilian Portuguese ONLY (`pt-BR` locked) — audio + mic via `speak()` / `startListening()`.
- PWA-ready: `manifest.json`, `service-worker.js` (`pt-lessons-v1`).

## Files
- `index.html` — app shell + old DB (history) + loader for `data.js`
- `data.js` — **single source**: `window.APP_DB` (20 parts, ~290 phrases) + `APP_GROUPS` (3 lessons) + `APP_DIALOGS` (10 dialogues)
- `manifest.json` / `service-worker.js` — PWA
- `PROGRESS.md` — 18-lesson tracker: done L1–L3, todo L4–L18, how to add a lesson each Tuesday

## Deploy (Git-connected)
- Netlify: publish `"."`, no build command
- Config: `netlify.toml`

## Progress
See `PROGRESS.md`. Next: add Lesson 4 PDF when class covers it.

## Local preview
Open `index.html` directly (needs `data.js` beside it) or `npx serve .` — no build.
