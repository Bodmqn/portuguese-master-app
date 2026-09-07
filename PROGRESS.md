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
| `service-worker.js` | Offline cache | Bumped to `br-portuguese-v7` |
| `PROGRESS.md` | This log — living document | Created 2026-08-28 |

**Key code refs:**
- Database: `index.html:607-778` (inline, 9 cats), `data.js:1-862` (mirror, 30 cats)
- State: `index.html:828` `const accent = 'pt-BR'` (locked)
- Speech: `index.html:841-863` `speak()` → `pt-BR` only; `index.html:868` `startListening()` → `R.lang = 'pt-BR'`
- Category rendering: `index.html:1118-1163` `showHome()` via `Object.keys(database)` + emojis, `index.html:1170` `showWord()`, `index.html:1207` `showQuiz()` + sameCat pool
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
  - **Design rationale:** Pronunciation kept **alongside** letter (name `[IPA]` + simple respelling `'ah'` + pt-BR example word) to fit `word-display:349` / `translation-display:356` + `quiz-opt:368` 2-col (360px `601`) without overflow. **Bold distinguished** `á [a]` first segment via `<span style='font-weight:800;color:var(--rv-pale)'>` — important pronunciation pops. Audio via `🔊` (`speak('A')`) always `pt-BR`; tip card now dynamic `Pronunciation Tip` for alphabet (`index.html:1121-1123`).
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
  - **Design rationale:** Articles must match gender+number. **Expanded** `Masc.`→`Masculine`, `Fem.`→`Feminine`, `Sing.`→`Singular`, `Pl.`→`Plural`, `Masc. despite`→`Masculine despite` etc. for clarity (full words). **Bold distinguished** first segment `Definite Article — Masculine Plural 'the'` via `<span style='font-weight:800;color:var(--rv-pale)'>` — grammar core pops. Kept pronunciation `O=[oo] boot` etc. and example word per entry; **scoped font reduction** for `Articles` (`translation-display:356` `22px`→`19px`, `quiz-opt:368` `14px`→`13px` when `currentCategory==='Articles'` in `showWord:1110`/`showQuiz:1156`) accommodates longer full-word strings without overflow. Tricky rules teach -ema/-ama vs -ção/-dade/-gem and shortened retention without global redesign.
  - **Tip card:** Dynamic `Grammar Tip` for `Articles` (`index.html:1122-1123`): `O=[oo], A=[ah], Os=[oosh], As=[ash] — match gender & number!`
  - **Why 28 not 8:** Core 8 articles + 12 examples + 8 tricky = 28 gives quiz variety (`showQuiz:1133` distinct wrongs) and matches Alphabet 26 granularity; contractions (`no/na/do/da`) reserved for future `02B`.
 - **Files:** `index.html:638` `Greetings` → `Articles` (28, full words + bold, scoped 19px/13px), `data.js:30` `Articles` (2 → 28, sync, full words + bold), `index.html:1049` emoji `📰`, `index.html:752` bold for Alphabet, `service-worker.js:3` `br-portuguese-v3` → `br-portuguese-v4`

### 2026-09-06 — Category 02 Rebuild: Articles → Communicating & Essentials (v0.4.0)
- **Before:** `Articles` (`index.html:638-667` 28 entries: O/Os/A/As + Um/Umas + examples + tricky -ema/-ção, `📰`) — grammar-heavy
- **After:** `Communicating & Essentials` — **36 entries, 4 well-structured topics for true understanding** (kept as 02 to preserve order)
  - **Label:** `Communicating & Essentials` (`index.html:638`, `data.js:30`)
  - **Emoji:** `🗣️` (`index.html:1081` changed from `📰`)
  - **Content (both files synced, 36 — ordered pedagogically T1→T4):**
    - *Topic 1 — Communicating 13:* `Bom dia!` (Formal 6am-12pm), `Boa tarde!` (12-6pm), `Boa noite!` (after 6pm hello & goodbye), `Oi!` (Hi! informal, Brazilian), `Olá!` (Hello neutral), `Adeus!` (Formal farewell final), `Tchau!` (#1 informal), `Até logo!`, `Até mais!` (very common casual), `Muito prazer!` (no gender), `Desculpa!` (informal → formal `Desculpe!`), `Bem-vinda!` (to a woman → `Bem-vindo!`), `Muito obrigada!` (said by woman → `Muito obrigado!`) — each with usage hint `Formal/Informal`, time, frequency
    - *Topic 2 — Polite Expressions 9 new (+3 in T1 =12):* Gendered `Bem-vindo!` (to a man -o), `Obrigado!` (said by man -o), `Obrigada!` (said by woman -a), `Muito obrigado!`, `Prazer em conhecê-lo!` (-lo=him), `Prazer em conhecê-la!` (-la=her) + Neutral `Por favor...`, `Por gentileza...` (more formal), `Com licença...` (to pass/attention) — **gender logic explicit** `-o/-a`, `-lo/-la` for understanding
    - *Topic 3 — Personal Pronouns 8 (corrected orthography):* `Eu` (I), `Você` (You, #1 in Brazil, Tu regional), `Ela` (She), `Ele` (He, added to complete set), `Nós` (We), `Vocês` (You pl, corrected from `Vóces`), `Eles` (They masc/mixed), `Elas` (They fem) — fixes `Voce`→`Você`, `Vóces`→`Vocês`, adds `Ele`
    - *Topic 4 — Verb Ser Present 6:* `Eu sou` — Eu sou brasileiro./Sou brasileiro., `Tu és` — Tu és estrangeira./És estrangeira. (regional), `Ele é / Ela é` — Ela é estudante./É estudante., `Nós somos` — Nós somos amigos./Somos amigos., `Vós sois` — Vós sois competentes./Sois competentes. (very formal/archaic rare in Brazil), `Eles são / Elas são` — Eles são brasileiros./São brasileiros. — each with pt example + English
  - **Design rationale (well-structured & informative):** Flat list ordered T1→T4 so `showWord:1127` Next/Prev feels like 4 lessons; **bold distinguished** English core via `<span style='font-weight:800;color:var(--rv-pale)'>Good morning!</span>` etc. Gender hints inline prevent confusion; time/register notes (`6am-12pm`, `#1 in Brazil`) give real-world when-to-use. **Deduplicated** `Muito prazer!/Bem-vinda!/Muito obrigada!` cross-referenced (`→ Bem-vindo!`) instead of duplicate cards → quiz distinctness preserved (`showQuiz:1165` needs distinct `w[1]`). Scoped font `Communicating & Essentials` `18px` (`translation-display:1145`) + `13px` (`quiz-opt:1189`) keeps mobile 430px `index.html:601` readable for longer gendered strings (vs Articles `19px`/`13px`). Tip card dynamic `Communication Tip` (`index.html:1154`) now 5 branches: Ser → identity verb tip, Gendered → `-o/-a` tip, Greeting → time tip, Neutral → universal tip, Pronoun → `Você` tip. `getSampleSentence:1352` expanded to 36 entries (`Bom dia! → _____! Como você está?` ... `Eles são → _____ brasileiros.`) for meaningful FillBlank. Quiz well-structured: same-category distractors first (`sameCat` pool `index.html:1169`) → `Obrigado!` wrongs include `Obrigada!`/`Muito obrigado!` (forces gender learning) fallback to global pool for variety; scoring `+2` mastery retained `checkAnswer:1197`.
  - **Files:** `index.html:607` header comment, `index.html:638-672` Articles 28→Communicating 36, `data.js:30-66` mirror 36, `index.html:1081` emoji `🗣️`, `index.html:1145,1154,1189,1382` scoped font/tip/speak, `index.html:1169` quiz same-cat pool, `index.html:1352` `getSampleSentence` 36, `service-worker.js:3` `v4`→`v5`

### 2026-09-07 — Category 03 Rebuild: Articles & Gender (v0.5.0)
- **Before:** `Order at a Cafe (Section 1)` at `03` (`index.html:680` 30 words: até logo/tudo bem/ela...) — placeholder cafe
- **After:** `Articles & Gender` — **36 entries, 5 well-arranged explanatory topics for true understanding** (inserted as 03 via Option A, shift 03→04 etc., total 8→9)
  - **Label:** `Articles & Gender` (`index.html:680`, `data.js:72`) — well-arranged Category 03
  - **Emoji:** `📰` (`index.html:1124` inserted at index 2, shifted `☕`→04)
  - **Content (both files synced, 36 — ordered pedagogically T1→T5):**
    - *Topic 1 — Foundation 2:* `Noun Inflection (Flexão Nominal)` — Gender & Number, `What is an Article?` — word before noun, definite/indefinite + gender/number must match — your intro paragraph theory
    - *Topic 2 — Definite vs Indefinite 8:* `o [oo]` (Definite Masc Sing 'the'), `a [ah]` (Fem Sing), `um [ũ]` (Indef Masc 'a/an'), `uma [ˈũmɐ]` (Fem 'a/an') — with pronunciation — `Definite vs Indefinite` contrast `o livro vs um livro` — plus Table Singular `o porteiro/um porteiro` (masc) and `a síndica/uma síndica` (fem) — your Gender/Definite/Indefinite/Example table verbatim
    - *Topic 3 — Gender Distinction 8:* Rules `-o → Masculine (o/um) — o livro` & `-a → Feminine (a/uma) — a casa` + Fixed `o lápis` (only masc, never *a lápis) / `a caneta` (only fem) + Variable `o garoto/a garota`, `o aluno/a aluna`, `o professor/a professora` (biforme -o→-a) + Common of Two `o/a estudante`, `o/a artista` (noun unchanged, article shows gender) — your `o lápis/a caneta/o garoto/a garota` examples expanded
    - *Topic 4 — Plural Forms 8:* `os [oosh]` (Def Masc Pl 'the'), `as [ash]` (Def Fem Pl), `uns [ũs]` (Indef Masc Pl 'some'), `umas [ˈũmɐs]` (Indef Fem Pl) — add `-s` to singular — plus `os livros/as casas` (definite), `uns livros/umas casas` (indefinite), `os porteiros/as síndicas` & `uns porteiros/umas síndicas` (pluralized table), `os garotos/as garotas` (agreement), `os lápis/as canetas` (invariable lápis, article shows plural)
    - *Topic 5 — Tricky & Agreement 6:* `o dia/o mapa/o planeta` (masc despite -a), `o problema/o sistema/o clima` (Greek -ema/-ama masc), `a cidade/a nação/a viagem` (-dade/-ção/-gem fem), `a foto/a moto` (shortened fem fotografia/motocicleta) + `Agreement Rule: Article+Noun Must Agree!` & `Complete Table: o/um→os/uns | a/uma→as/umas` — summary of all 8 articles
  - **Design rationale (well-arranged & explanatory, quiz proper arrangement):** Flat list ordered T1→T5 so `showWord:1170` Next/Prev feels like 5 lessons (foundation → singular → gender → plural → tricky/summary); **bold distinguished** English core via `<span style='font-weight:800;color:var(--rv-pale)'>` — e.g., `Definite Masculine Singular 'the'` pops first segment, example `o livro` stays plain for scan. **Explanatory** each entry has `— definition — example` triple; pronunciation `[oo]/[ah]/[ũ]` kept alongside. Scoped font `Articles & Gender` `18px` (`translation-display:1188`) + `13px` (`quiz-opt:1235`) keeps mobile 430px `index.html:601` readable for longer table strings (same as Communicating `18px/13px`). Tip card dynamic `Grammar Tip` (`index.html:1197-1198`) now **12 branches** for Noun Inflection: Foundation → Flexão tip, Article → before-noun tip, Definite/Indefinite → the vs a/an tip, Core article → memorize tip, Table → masc vs fem tip, Gender Rule → -o/-a tip, Fixed → invariable tip, Variable → biforme tip, Common → uniform tip, Plural → add -s tip, Tricky -a/-ema/-ção → exception tip, Agreement → golden rule tip, Complete Table → full 8-article summary. `getSampleSentence:1395` expanded to **36 new entries** (`o — _____ livro está na mesa.` … `Complete Table → _____ porteiro/_____ porteiro → _____/_____`) for meaningful FillBlank. **Quiz proper arrangement:** `showQuiz:1212` same-category distractor pool first (`sameCat` → global fallback) → for Noun Inflection, `o lápis` wrongs are `a caneta`/`os lápis`/`o garoto` (forces gender/number learning), `o porteiro` wrongs include `a síndica`/`um porteiro` (forces definite/indefinite), fallback to global for variety; scoring `+2` mastery retained `checkAnswer:1243`; quiz-opt styled `13px` prevents overflow for long table translations. Well-arranged = pedagogical progression + quiz contrast + tip explanatory.
  - **Files:** `index.html:607` header comment, `index.html:680-716` new Articles & Gender 36, `data.js:72-108` mirror 36, `index.html:1124` emoji `📰`, `index.html:1188,1197,1235,1461,1395` scoped font/tip/quiz/speak/sample 36, `service-worker.js:3` `v5`→`v7` (v6 rename)

---

## 3. Current Database Overview

**Authoritative (index.html inline) — 9 categories after 2026-09-07:**
1. `Brazilian Portuguese Alphabet` (26) — **DONE, Brazilian + pronunciation**
2. `Communicating & Essentials` (36) — **DONE, 4 topics: Communicating 13 + Polite 9 + Pronouns 8 + Ser 6 — well-structured, informative**
3. `Articles & Gender` (36) — **DONE, 5 topics: Foundation 2 + Definite/Indefinite 8 + Gender 8 + Plural 8 + Tricky/Agreement 6 — well-arranged, explanatory, quiz proper**
4. `Order at a Cafe (Section 1)` (30)
5. `Order at a Cafe (Section 2)` (15)
6. `Order at a Restaurant (Section 1)` (43)
7. `Order at a Restaurant (Section 2)` (38)
8. `Home (Section 1)` (19)
9. `Home (Section 2)` (16)

**Mirror (data.js) — 30 categories (needs sync on each rebuild):**
`Brazilian Portuguese Alphabet` (26), `Communicating & Essentials` (36), `Articles & Gender` (36), `Greetings & Politeness` (17), `Question Words` (6), `Essential Verbs` (53), `Common Adjectives` (33), `Basic Nouns` (15), `Numbers` (30), `Days & Months` (29), `Colors` (20), `Family Members` (28), `Body Parts` (30), `Food & Drinks` (39), `Animals` (30), `House & Home` (30), `Clothing` (30), `Transportation` (30), `Nature` (28), `Common Adverbs & Prepositions` (30), `More Question Words` (20), `City & Places` (29), `School & Education` (25), `Health & Body` (29), `Technology & Communication` (28), `Emotions & Feelings` (27), `Work & Professions` (25), `Shopping` (23), `Weather & Seasons` (26), `Sports & Leisure` (26)

> Legacy: `Articles` (28) retired 2026-09-06 — replaced by `Communicating & Essentials`; content archived in git history.

> **Note:** `data.js` richer taxonomy synced for 01-03; `index.html` inline is runtime source. Future rebuilds must sync both (`index.html` 9 cats + `data.js` 30 cats).

---

## 4. Next Up — Roadmap (Content ONLY, interface frozen)

Work sequentially, one category per sprint, syncing `index.html` + `data.js` + `PROGRESS.md`:

- [x] **Category 02** — `Articles` (28) — **DONE 2026-08-28** — see Completed above (retired)
- [x] **Category 02** — `Communicating & Essentials` (36) — **DONE 2026-09-06** — well-structured 4 topics, informative hints + well-structured quiz (same-cat distractors)
- [x] **Category 03** — `Articles & Gender` (36) — **DONE 2026-09-07** — well-arranged 5 topics (Foundation 2 + Definite/Indefinite 8 + Gender 8 + Plural 8 + Tricky/Agreement 6), explanatory, quiz proper arrangement (Option A insert, 8→9 cats)
- [ ] **Category 04** — `Order at a Cafe (Section 1)` (30) → **Brazilian Café & Padaria** (pt-BR specific: `pão de queijo, coxinha, suco natural, pingado`)
- [ ] **Category 05** — `Order at a Cafe (Section 2)` (15) → continue Café phrases (sentences)
- [ ] **Category 06-07** — Restaurant → **Brazilian Restaurant (Feijoada, churrasco, self-service)** (43+38)
- [ ] **Category 08-09** — Home → **Brazilian Home & Daily Life** (19+16)
- [ ] **Backfill data.js taxonomy** — Align `data.js` 30 categories to Brazilian reality (e.g., `Numbers`, `Colors`, `Family` already usable but need pt-BR review; `Technology`, `Slang` add `gírias` like `legal, massa, mano`)
- [x] **Quiz hardening** — `showQuiz:1212` now same-category pool first (`sameCat` → global fallback) for Communicating & Articles & Gender learning; proper arrangement with `13px` scoped for table strings; scoring `+2` retained `checkAnswer:1243`
- [x] **Practice modes** — `getSampleSentence:1395` expanded to 36 Noun Inflection + 36 Communicating entries (72 total tailored); `Matching:1318`, `FillBlank:1380`, `Pronunciation:1455` validated
- [x] **Tip cards** — Dynamic `Communication Tip` 5 branches + `Grammar Tip` 12 branches (`index.html:1197-1198`: Noun Inflection foundation/definite/gender/plural/tricky/agreement) + Pronunciation Tip
- [x] **PWA** — `service-worker.js:3` bumped `v5`→`v7` (v6 rename to `Articles & Gender`)

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
| 2026-09-06 | Category 02 = Communicating & Essentials 36 (well-structured 4 topics, informative) | User directive — 4 topics in place of Articles, well-arranged for understanding; deduplicated overlaps, corrected Você/Vocês, added Ele, detailed usage hints (time/gender/register) + well-structured quiz same-cat distractors; Articles retired |
| 2026-09-07 | Category 03 = Articles & Gender 36 (well-arranged 5 topics, explanatory, quiz proper) | User directive Option A — insert as 03 via well-arranged pedagogy (Foundation → Definite/Indefinite→Gender→Plural→Tricky/Agreement), includes all user theory + table porteiro/síndica + lápis/caneta/garoto/garota, pronunciation [oo]/[ah]/[ũ], bold core, 18px/13px scoped, Grammar Tip 12 branches, quiz sameCat proper arrangement; preserve Café 04-09 |

---

## 6. Changelog

- **v0.5.0 — 2026-09-07: Articles & Gender — Well-Arranged & Explanatory, Quiz Proper Arrangement**
  - Category 03: Inserted as `Articles & Gender` (36, `📰`, Option A 8→9 cats): T1 Foundation 2 (Noun Inflection definition + What is Article? — article before noun, definite/indefinite + gender/number must match) — T2 Definite vs Indefinite 8 (`o [oo]`/`a [ah]`/`um [ũ]`/`uma [ˈũmɐ]` with pronunciation, `Definite vs Indefinite` contrast `o livro vs um livro`, Table Singular `o porteiro/um porteiro` (masc) & `a síndica/uma síndica` (fem) verbatim) — T3 Gender 8 (`-o→masc` `o livro`, `-a→fem` `a casa`, Fixed `o lápis`/`a caneta` never *crossed*, Variable `o garoto/a garota`, `o aluno/a aluna`, `o professor/a professora` biforme, Common `o/a estudante`, `o/a artista` uniform) — T4 Plural 8 (`os [oosh]`/`as [ash]`/`uns [ũs]`/`umas [ˈũmɐs]` add -s, `os livros/as casas`, `uns livros/umas casas`, `os porteiros/as síndicas` & `uns porteiros/umas síndicas` pluralized table, `os garotos/as garotas` agreement, `os lápis/as canetas` invariable trick) — T5 Tricky/Agreement 6 (`o dia/mapa/planeta` masc despite -a, `o problema/sistema/clima` Greek -ema masc, `a cidade/nação/viagem` -dade/-ção/-gem fem, `a foto/moto` shortened fem, `Agreement Rule` & `Complete Table o/um→os/uns | a/uma→as/umas` summary) — ordered T1→T5 explanatory with bold English core `<span style='font-weight:800;color:var(--rv-pale)'>`, `18px/13px` scoped for grammar strings
  - Quiz proper arrangement: `showQuiz:1212` same-category pool first ensures `o lápis` distractors are `a caneta`/`os lápis`/`o garoto` (gender/number contrast) & `o porteiro` vs `a síndica` (definite/indefinite), fallback global for variety; `13px` scoped prevents overflow for long table translations; scoring `+2` retained
  - Tip & Practice: `Grammar Tip` 12 branches (`index.html:1197-1198`: foundation/definite/gender/plural/tricky/agreement), `getSampleSentence:1395` 36 new sentences (`o — _____ livro está na mesa.` … `Complete Table → _____ porteiro...`), `Matching:1318`/`FillBlank:1380`/`Speak:1455` validated with `18px` translation-display
  - Emoji 03 `📰` inserted at `index.html:1124` (`🔤,🗣️,📰,☕...`), PWA `v5`→`v7` (`service-worker.js:3` v6 rename `Articles & Gender`), sync `index.html:680-716` + `data.js:72-108` (both 36)
  - Files: `index.html:607,680,1124,1188,1197,1235,1395,1461` + `data.js:72` (sync) + `service-worker.js` + `PROGRESS.md`

- **v0.5.1 — 2026-09-07: Rename `Noun Inflection & Articles` → `Articles & Gender`**
  - User preference: shorter, focus on gender — applied via `replaceAll` across `index.html:607,680,1188,1197,1235,1461` + `data.js:72` + `PROGRESS.md` (11 occurrences) + PWA `v6`→`v7` (`service-worker.js:3`)
  - Files: `index.html`, `data.js`, `service-worker.js`, `PROGRESS.md`

- **v0.4.0 — 2026-09-06: Communicating & Essentials — Well-Structured & Informative**
  - Category 02: `Articles` (28) → `Communicating & Essentials` (36): T1 Communicating 13 (Formal `Bom dia!/Boa tarde!/Boa noite!` + Informal `Oi!/Olá!` + Farewells `Adeus!/Tchau!/Até logo!/Até mais!` with time/register hints), T2 Polite 9+3 (Gendered `Bem-vindo!/Obrigado!/Obrigada!/Muito obrigado!/Prazer em conhecê-lo/la` with -o/-a/-lo/-la + Neutral `Por favor.../Por gentileza.../Com licença...`), T3 Pronouns 8 (`Eu/Você` corrected, `Ele` added, `Vocês` corrected, `Eles/Elas`), T4 Ser 6 (`Eu sou` … `Eles são` with pt examples + en) — ordered T1→T4, deduplicated overlaps, bold English core, `18px/13px` scoped for gendered strings
  - Well-structured quiz: `showQuiz:1165` same-category pool first (`sameCat` → global fallback) so `Obrigado!` distractors are `Obrigada!`/`Muito obrigado!` (gender learning), fallback variety retained
  - Practice hardening: `getSampleSentence:1352` 36 entries, tip card `Communication Tip` 5 branches (`index.html:1154`: Ser/Gendered/Greeting/Neutral/Pronoun), `Matching:1245`/`FillBlank:1336`/`Speak:1376` validated
  - Emoji 02 `📰`→`🗣️` (`index.html:1081`), PWA `v4`→`v5` (`service-worker.js:3`)
  - Files: `index.html:607,638,1081,1145,1154,1169,1189,1352,1382` + `data.js:30` (sync) + `service-worker.js` + `PROGRESS.md`

- **v0.3.1 — 2026-08-28: Articles Full Words + Bold + Scoped Font**
  - Expand `Masc.`/`Fem.`/`Sing.`/`Pl.` → `Masculine`/`Feminine`/`Singular`/`Plural` (full words) for all 28 Articles + tricky rules; bold distinguished via `<span style='font-weight:800;color:var(--rv-pale)'>` — Alphabet: `á [a]` (first segment) pops, Articles core 8: `Definite Article — Masculine Singular 'the'` (first two segments) pops for explanatory clarity
  - Scoped font reduction for `Articles` only: `translation-display` `22px`→`19px`, `quiz-opt` `14px`→`13px` via `currentCategory==='Articles'` in `showWord`/`showQuiz` — accommodates longer strings, keeps mobile-friendly
  - Files: `index.html:638,752,1110,1156` (Alphabet+Articles bold, font), `data.js:30` (sync), `service-worker.js:3` `v3`→`v4`, `PROGRESS.md`

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

*Maintained by: Bodeo — 2026-09-07 — ✅ Category 03 renamed: `Articles & Gender` 36 (ex `Noun Inflection & Articles`) — Alphabet 26 + Communicating 36 retained — 9 categories total — Next: Category 04 Brazilian Café & Padaria — paused after v0.5.1, will continue next session. Record kept as requested.*
