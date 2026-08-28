# Brazilian Portuguese Master — Progress Log

> **Source folder:** `C:\Users\bodeo\Music\OpenCode-Projects\portuguese-app`  
> **Interface status:** FROZEN — No design/CSS changes. Mobile-friendly layout kept as-is (`index.html` styles 10-601). Only **content** (categories, quiz, practice) evolves.  
> **Language:** **Brazilian Portuguese ONLY (pt-BR)** — European Portuguese (pt-PT) removed. Locked to `pt-BR`.

---

## 1. Stack & Files

| File | Role | Status |
|------|------|--------|
| `index.html` | **Authoritative** app + inline `const database` + UI | Mobile shell preserved |
| `data.js` | Mirror database (cached by PWA) | Synced with `index.html` database |
| `manifest.json` | PWA manifest — branding | Updated to Brazilian |
| `service-worker.js` | Offline cache | Bumped to `br-portuguese-v3` |
| `PROGRESS.md` | This log — living document | Created 2026-08-28 |

**Key code refs:**
- Database: `index.html:607-722` (inline), `data.js:1-803` (mirror)
- State: `index.html:752` `const accent = 'pt-BR'` (locked)
- Speech: `index.html:813-830` `speak()` → `pt-BR` only; `index.html:857` `startListening()` → `R.lang = 'pt-BR'`
- Category rendering: `index.html:1049-1075` `showHome()` via `Object.keys(database)`, `index.html:1087` `showWord()`, `index.html:1133` `showQuiz()`
- Progress: `PROGRESS.md` (this file)

---

## 2. Completed ✅

### 2026-08-28 — Category 01 Rebuild
- **Before:** `Pronouns` (`data.js:2-7` 5 words, `index.html:609-611` 8 words: Eu/Você/Ele/Ela/Nós/Eles/Oi/Um) with emoji `👤` (`index.html:1049`)
- **After:** `Brazilian Portuguese Alphabet` — **26 letters with Brazilian pronunciation alongside**
  - **Label:** `Brazilian Portuguese Alphabet` (kept as 01 to preserve order)
  - **Emoji:** `🔤` (`index.html:1049` changed from `👤`)
  - **Content (both files synced):**
    ```js
    ["A","á [a] — 'ah' as in father — Avião (airplane)"],
    ["B","bê [be] — 'beh' as in boy — Bola (ball)"],
    ["C","cê [se] — 'seh' — Casa (house)"],
    ["D","dê [de] — 'deh' — Dado (dice)"],
    ["E","é [ɛ/e] — 'eh' — Escola (school)"],
    ["F","efe [ɛfi] — 'eh-fee' — Faca (knife)"],
    ["G","gê [ʒe] — 'zheh' — Gato (cat)"],
    ["H","agá [a'ga] — silent — Hotel (hotel)"],
    ["I","i [i] — 'ee' as in see — Igreja (church)"],
    ["J","jota [ʒɔta] — 'zhota' — Janela (window)"],
    ["K","cá [ka] — 'kah' — Kiwi (kiwi)"],
    ["L","ele [ɛli] — 'eh-lee' — Lua (moon)"],
    ["M","eme [ẽmi] — 'em-ee' — Mesa (table)"],
    ["N","ene [ẽni] — 'en-ee' — Navio (ship)"],
    ["O","ó [ɔ/o] — 'aw/oh' — Ovo (egg)"],
    ["P","pê [pe] — 'peh' — Pato (duck)"],
    ["Q","quê [ke] — 'keh' — Queijo (cheese)"],
    ["R","erre [ɛʁi] — 'eh-hee' (guttural R) — Rato (rat)"],
    ["S","esse [ɛsi] — 'eh-see' — Sol (sun)"],
    ["T","tê [te] — 'teh' — Teto (ceiling)"],
    ["U","u [u] — 'oo' — Uva (grape)"],
    ["V","vê [ve] — 'veh' — Vaca (cow)"],
    ["W","dáblio [dablju] — 'dah-blee-oo' — Website"],
    ["X","xis [ʃis] — 'shees' — Xícara (cup)"],
    ["Y","ípsilon [ipsilõ] — 'ee-psee-lon' — Yoga"],
    ["Z","zê [ze] — 'zeh' — Zebra (zebra)"]
    ```
  - **Design rationale:** Pronunciation kept **alongside** letter (name `[IPA]` + simple respelling `'ah'` + pt-BR example word) to fit `word-display:349` / `translation-display:356` + `quiz-opt:368` 2-col (360px `601`) without overflow. Audio via `🔊` (`speak('A')`) always `pt-BR`; tip card now dynamic `Pronunciation Tip` for alphabet (`index.html:1121-1123`).
  - **Why 26 not 38:** Core 26 official letters kept; accented `ÁÂÃÀÉÊÍÓÔÕÚÇ` reserved for future `Category 01B` to avoid quiz fatigue.

### 2026-08-28 — Brazilian Lock (pt-BR ONLY)
- Changed `let accent = 'pt-BR'` → `const accent = 'pt-BR'; // Locked` (`index.html:752`)
- Simplified `speak()` voice selection to `pt-BR` only (removed `pt-PT` fallback logic `index.html:822-824`)
- Locked `startListening()`: `R.lang = 'pt-BR'` (`index.html:857`)
- Neutralized `switchAccent()` → toast `Brazilian Portuguese only` (`index.html:945-948`), kept for backward compat
- **Removed all `switchAccent()` UI buttons** (kept `toggleDark()` `🌙` only):
  - Login `index.html:1019-1021` (centered)
  - Home header `index.html:1071-1073` (`header-actions`)
  - Word screen header `index.html:1104-1106` → placeholder `width:42px`
  - Intense Practice header `index.html:1228-1230` → placeholder
  - Profile settings row `index.html:1519-1521` → `🇧🇷 Brazilian Portuguese (pt-BR)` static label
- Branding: `<title>`: `Portuguese Master Pro` → `Brazilian Portuguese Master`; header `🇧🇷 Portuguese Master` → `🇧🇷 Brazilian Portuguese Master` (`index.html:6-1070`); login title; `manifest.json:2-3` → `Brazilian Portuguese Master` / `BRPortuguese` + theme `#32174D`
- Cache bump: `service-worker.js:3` `pt-app` → `br-portuguese-v2` + `activate` cleanup + added `manifest.json` to cache

### 2026-08-28 — Category 02 Rebuild
- **Before:** `Greetings` (`index.html:638-647` 18 words: Olá/Oi/Bom dia...) with emoji `👋` (`index.html:1049` index 1) — generic greetings
- **After:** `Articles` — **28 entries with Brazilian pronunciation + tricky gender alongside**
  - **Label:** `Articles` (kept as 02 to preserve order)
  - **Emoji:** `📰` (`index.html:1049` changed from `👋`)
  - **Content (both files synced, 28):**
    - *Definite 4:* `O`/`Os`/`A`/`As` — `Definite — Masc/Fem Sing/Pl 'the' — o livro/a casa — [oo]/[ah]/[oosh]/[ash]`
    - *Indefinite 4:* `Um`/`Uns`/`Uma`/`Umas` — `Indefinite — Masc/Fem Sing/Pl 'a/an/some' — um carro/uma maçã`
    - *Examples definite 6:* `O gato/Os gatos`, `A cadeira/As cadeiras`, `O telefone`, `O amigo`, `A praia`, `O jornal`
    - *Examples indefinite 6:* `Um cachorro`, `Uma caneta`, `Um relógio`, `Um avião`, `Uma xícara`, `Uma cidade`
    - *Tricky Rules 8:* `O problema` (Greek -ema masc), `O sistema/O clima/O tema` (-ema/-ama), `A nação/A cidade/A viagem` (-ção/-dade/-gem fem), `O dia/O mapa/O planeta` (false friend masc -a), `A foto`/`A moto` (shortened fem), `O pneu` (shortened masc), `O cinema` (masc -a)
  - **Design rationale:** Articles must match gender+number. Kept pronunciation `O=[oo] boot, A=[ah] father, Os=[oosh], As=[ash]` alongside each definite article; example word per entry keeps `translation-display:356` and `quiz-opt:367` distinct; tricky rules teach -ema/-ama vs -ção/-dade/-gem and shortened gender retention without layout change.
  - **Tip card:** Dynamic `Grammar Tip` for `Articles` (`index.html:1122-1123`): `O=[oo], A=[ah], Os=[oosh], As=[ash] — match gender & number!`
  - **Why 28 not 8:** Core 8 articles + 12 examples + 8 tricky = 28 gives quiz variety (`showQuiz:1133` distinct wrongs) and matches Alphabet 26 granularity; contractions (`no/na/do/da`) reserved for future `02B`.
- **Files:** `index.html:638` `Greetings` → `Articles` (28), `data.js:30` `Articles` (2 → 28, sync), `index.html:1049` emoji `📰`, `service-worker.js:3` `br-portuguese-v2` → `br-portuguese-v3`

---

## 3. Current Database Overview

**Authoritative (index.html inline) — 8 categories after 2026-08-28:**
1. `Brazilian Portuguese Alphabet` (26) — **DONE, Brazilian + pronunciation**
2. `Articles` (28) — **DONE, Brazilian + pronunciation + tricky gender**
3. `Order at a Cafe (Section 1)` (30)
4. `Order at a Cafe (Section 2)` (15)
5. `Order at a Restaurant (Section 1)` (38)
6. `Order at a Restaurant (Section 2)` (38)
7. `Home (Section 1)` (19)
8. `Home (Section 2)` (16)

**Mirror (data.js) — 30+ categories (needs sync on each rebuild):**
`Brazilian Portuguese Alphabet`, `Articles`, `Greetings & Politeness`, `Question Words`, `Essential Verbs`, `Common Adjectives`, `Basic Nouns`, `Numbers`, `Days & Months`, `Colors`, `Family Members`, `Body Parts`, `Food & Drinks`, `Animals`, `House & Home`, `Clothing`, `Transportation`, `Nature`, `Common Adverbs & Prepositions`, `More Question Words`, `City & Places`, `School & Education`, `Health & Body`, `Technology & Communication`, `Emotions & Feelings`, `Work & Professions`, `Shopping`, `Weather & Seasons`, `Sports & Leisure`

> **Note:** `data.js` has richer taxonomy; `index.html` inline is the runtime source. They are now synced for Category 01. Future rebuilds must sync both.

---

## 4. Next Up — Roadmap (Content ONLY, interface frozen)

Work sequentially, one category per sprint, syncing `index.html` + `data.js` + `PROGRESS.md`:

- [x] **Category 02** — `Articles` (28) — **DONE** — see Completed above
- [ ] **Category 02B (future)** — Article Contractions (`no/na/do/da = em/de + o/a`, `num/numa`) — reserved
- [ ] **Category 03** — `Order at a Cafe (Section 1)` → **Brazilian Café & Padaria** (pt-BR specific: `pão de queijo, coxinha, suco natural, pingado`)
- [ ] **Category 04** — `Order at a Cafe (Section 2)` → continue Café phrases (sentences)
- [ ] **Category 05-06** — Restaurant → **Brazilian Restaurant (Feijoada, churrasco, self-service)**
- [ ] **Category 07-08** — Home → **Brazilian Home & Daily Life**
- [ ] **Backfill data.js taxonomy** — Align `data.js` 30 categories to Brazilian reality (e.g., `Numbers`, `Colors`, `Family` already usable but need pt-BR review; `Technology`, `Slang` add `gírias` like `legal, massa, mano`)
- [ ] **Quiz hardening** — Review `showQuiz:1133` wrong-answer pool (`Object.values(database).flat()`) for pt-BR uniqueness; ensure `CheckAnswer:1165` scoring still `+2` mastery
- [ ] **Practice modes** — Validate `Matching:1245`, `FillBlank:1303`, `Pronunciation:1345` with new pt-BR content; add `getSampleSentence` pt-BR sentences per category
- [ ] **Tip cards** — Make category-specific tips (like alphabet pronunciation tip) without CSS change
- [ ] **PWA** — Keep `service-worker.js` version bump per release

**Future idea (not now):** Add `Category 01B: Acentos & Ç` (`ÁÂÃÀÉÊÍÓÔÕÚÇ`) after alphabet is validated with users.

---

## 5. Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| 2026-08-28 | App = Brazilian Portuguese ONLY | User directive — remove pt-PT |
| 2026-08-28 | Freeze UI/CSS | Mobile-friendly design already works (max-width 430px, grid 2-col) — keep |
| 2026-08-28 | Category 01 = Alphabet with pronunciation alongside | Best pedagogy: name `[IPA]` + respelling + example + audio `speak()` — no layout change |
| 2026-08-28 | Keep 26 letters, not 38 | Core alphabet first; accents as separate future category |
| 2026-08-28 | Single PROGRESS.md log | Keep record of all improvements + next steps in repo root |
| 2026-08-28 | Category 02 = Articles 28 with pronunciation + tricky gender | Articles must match gender/number; pronunciation O/A/Os/As + -ema/-ama vs -ção/-dade/-gem + shortened retention; 28 gives quiz depth; contractions reserved for 02B |

---

## 6. Changelog

- **v0.3.0 — 2026-08-28: Articles Foundations**
  - Category 02: `Greetings` (18) → `Articles` (28: 8 articles + 12 examples + 8 tricky, `📰`, pronunciation O/A/Os/As, -ema/-ama vs -ção/-dade/-gem, shortened retention)
  - Tip card dynamic `Grammar Tip` for Articles, emoji 02 `📰`, PWA cache `br-portuguese-v3`
  - Files: `index.html:638`, `data.js:30` (sync), `service-worker.js`, `PROGRESS.md`

- **v0.2.0 — 2026-08-28: Brazilian Foundations**
  - Category 01: `Pronouns` → `Brazilian Portuguese Alphabet` (26 + pronunciation, `🔤`, pt-BR examples)
  - Locked accent to `pt-BR`, removed `switchAccent` UI (5 buttons), kept `toggleDark`
  - Branding → `Brazilian Portuguese Master`, `manifest.json` theme `#32174D`
  - PWA cache `br-portuguese-v2` + `PROGRESS.md` created
  - Files: `index.html`, `data.js`, `manifest.json`, `service-worker.js`, `PROGRESS.md`

- **v0.1.0 — Initial**
  - Original `Pronouns` / `Greetings` / cafe/restaurant/home categories (pre-Brazilian)

---

## 7. How to Update This Log

1. After each category rebuild: add entry under `## 2. Completed` with date, before/after, emoji, pronunciation note, file lines.
2. Move item from `## 4. Next Up` unchecked `[ ]` → completed, add new next category.
3. Bump version in `## 6. Changelog` + `service-worker.js` cache name.
4. Sync `index.html` **and** `data.js` — never update only one (PWA cache would serve stale `data.js`).

---

## 8. Quick Verify Checklist (after each category)

- [ ] `showHome()` shows correct `01` card `🔤` `26 words` with progress bar
- [ ] `showWord()` → `Next/Prev` cycles, `translation-display` shows pronunciation, `🔊` speaks pt-BR
- [ ] `Quiz Me` generates 4 distinct options (`quiz-opt`)
- [ ] `Word Matching` / `Fill Blank` / `Speak & Learn` pull from new `categoryWords`
- [ ] No `switchAccent` buttons remain (`onclick="switchAccent()"` count 0 except stub function)
- [ ] `manifest.json` name = Brazilian

---

*Maintained by: Bodeo — 2026-08-28 — Next sprint: Category 03 Brazilian Café & Padaria*
