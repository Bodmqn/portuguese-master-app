# My Portuguese Lessons — Progress Tracker

> Old 9-topic log discarded per owner request (2026-09-17). New system: **Lessons 1–18**, one per Tuesday class. Old generic categories (Alphabet, Communicating, Cafe, Restaurant, Home) deleted from runtime — Lessons only.
> Source: e-Tec Brasil PDFs (Aula 01–04 parsed; 05–18 pending). App teaches like an English-speaking teacher. Bold in PDF = must-master (purple-bold, weighted in quiz).

## 1. Lessons Status

- [x] **Lesson 1 — Bem-vindo ao Condomínio Brasil!** (Aula 01) — 8 parts, ~140 phrases
  - 1A Greetings and Farewells (9) | 1B Courtesy (14) | 1C Ser and Pronouns (16) | 1D Alphabet A-Z (27) | 1E Nouns Gender and Number (17) | 1F Nationalities (17) | 1G Numbers 0-100 (34) | 1H Estar and Feelings (9)
  - Dialogues: Marta meets Leo, Marta and Rudinei, Spelling on the phone, Leo and Rasmus
  - Bold must-master: Bom dia! Muito prazer bem-vinda! Desculpa muito obrigada Até logo! Sou De onde você é? Sou brasileiro Quantos anos? Tenho... oitenta e nove estou um pouco cansada
- [x] **Lesson 2 — Fazendo Amigos** (Aula 02) — 6 parts, ~60 phrases
  - 2A Question Words (14) | 2B Formal and Informal You (7) | 2C Possessives (11) | 2D Ter (7) | 2E Morar (9) | 2F Asking for Help (8)
  - Dialogues: Luiza welcomes Marta, Rudinei and Dona Ana, Where do you live?
  - Bold must-master: Onde Quantos Quantos anos voce tem? Tenho 14 anos! dona senhora senhor
- [x] **Lesson 3 — Onde Fica o Mercado?** (Aula 03) — 6 parts, ~80 phrases
  - 3A Ficar vs Estar (9) | 3B Shops and Places (12) | 3C Where Adverbs (9) | 3D Days and Months (12) | 3E Time Adverbs (8) | 3F Daily Routine (12)
  - Dialogues: In the elevator, Thursday routine, Mateus day
  - Bold must-master: fica Onde fica esse mercadinho? Ele fica... aqui perto ali ao lado la quinta-feira Pela manha Amanha routine verbs
- [x] **Lesson 4 — Vamos de Ônibus ou a Pé?** (Aula 04) — 6 parts, ~70 phrases
  - 4A Meios de Transporte (13) | 4B Pegando o Ônibus (12) | 4C Verbo Ir (12) | 4D Verbo Passar (11) | 4E Que Horas São (12) | 4F Relógio 12h e 24h (12)
  - Dialogues: Dona Ana e Tânia — qual ônibus?, Marta Antônio e Paula — bicicleta, A linha 167 passa aqui?
  - Bold must-master: ônibus táxi bicicleta qual ônibus eu pego? passa aqui na rua? vou vai vamos passa passa por Que horas são? São... É... e meia em ponto para as faltam meio-dia meia-noite
  - Visuals: emoji transport per phrase (🚌🚕🚲...) + inline SVG clocks via CLOCK|h|m tokens (03:00 06:00 09:10 11:45 11:55 12:50 16:40 24h pairs)
- [ ] **Lesson 5** — pending
- [ ] **Lesson 6** — pending
- [ ] **Lesson 7** — pending
- [ ] **Lesson 8** — pending
- [ ] **Lesson 9** — pending
- [ ] **Lesson 10** — pending
- [ ] **Lesson 11** — pending
- [ ] **Lesson 12** — pending
- [ ] **Lesson 13** — pending
- [ ] **Lesson 14** — pending
- [ ] **Lesson 15** — pending
- [ ] **Lesson 16** — pending
- [ ] **Lesson 17** — pending
- [ ] **Lesson 18** — pending

## 2. App Structure (static, offline)

- `data.js` — single source: `APP_DB` (26 parts) + `APP_GROUPS` (4 lessons) + `APP_DIALOGS` (13)
- `index.html` — loads `data.js`, overrides old inline DB; Home = Lessons → Parts → Words; Dialogue viewer with Hear/Say; Quiz/Match/Fill/Speak reused per part; tutorTip() English explanations; dashboard aggregates by Lesson; visuals via optional `word[2]` (emoji or `CLOCK|h|m`) rendered by `visualFor()` + `clockSVG()`
- `service-worker.js` — `pt-lessons-v3`
- No backend, pt-BR TTS locked.

## 3. How to Add Lesson N (each Tuesday)

1. Owner drops `Lesson N PDF` in chat.
2. Parse: sections → 5–8 parts (keep each part 8–35 phrases), bold → must-master, dialogues → scripted lines with EN.
3. Append parts to `data.js` APP_DB + register in APP_GROUPS + add dialogues to APP_DIALOGS.
4. Add 8–14 fill-blank entries in `getSampleSentence()` if needed (fallback already generic).
5. Bump `service-worker.js` cache (`pt-lessons-v2`...), check this file: move Lesson N from Todo to Done with parts/dialogues/bold list.
6. Redeploy Netlify (git push). Old lessons stay for revision.

## 4. Verify After Each Lesson

- [ ] Home shows new Lesson card with correct parts/words count
- [ ] Parts open, Next/Prev cycles, 🔊 speaks pt-BR
- [ ] Quiz shows 4 distinct options, +2 mastery
- [ ] Match / Fill / Speak pull from new part
- [ ] Dialogues list + Hear/Say per line
- [ ] Dashboard Lesson bar moves

*Maintained: 2026-09-29 — Lessons 1–4 live (26 parts). Next: Lesson 5 PDF.*
