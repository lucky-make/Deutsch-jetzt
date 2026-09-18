# RESEARCH.md — Deutsch Jetzt! (A1 → B2 Daily-Target German App)

All research below informed the design. Sources are cited inline. No copyrighted textbook content is reproduced; the scope-and-sequence is inspired by publicly listed CEFR course outlines (Kapitel Zwei Berlin) and Goethe-Institut / telc exam frameworks, and all vocabulary, dialogues, and exercises in the app are original.

---

## 1. Vocabulary size & frequency targets for B2

- CEFR B2 is commonly estimated at **~4,000–5,000 lemma families** of active/passive vocabulary. A realistic self-study target is the **top 3,000–4,000 most frequent German lemmas**, which covers ~95% of everyday spoken and ~85–90% of non-specialist written text.
- Authoritative frequency sources:
  - **Routledge *A Frequency Dictionary of German* (Tschirner & Möhring, 2nd ed.)** — 5,009 most frequent words from a 20-million-word corpus of contemporary German (spoken, literature, newspaper, academic). The standard learner reference. ["https://www.routledge.com/A-Frequency-Dictionary-of-German-Core-Vocabulary-for-Learners/Tschirner-Mohring/p/book/9781138659780"]
  - **Leipzig Corpora Collection / Projekt Wortschatz (Uni Leipzig)** — frequency classes derived from huge contemporary corpora; used by Lingoda and others for "most-useful" word selection. ["https://www.lingoda.com/blog/en/useful-advanced-german-vocabulary-to-sound-like-a-native/"]
  - **SUBTLEX-DE** — subtitle-based frequency list, best predictor of *spoken* conversational vocabulary (films/TV). Complementary to newspaper corpora.
  - **Goethe-Institut B2 Wortliste / telc B2** — topic-organised exam vocabulary. B2 topic clusters: Arbeit & Beruf, Bildung & Studium, Gesellschaft & Politik, Medien & Kommunikation, Freizeit & Kultur, Gesundheit, Umwelt & Nachhaltigkeit, Reisen, Wohnen, Kriminalität/Medien. ["https://deutale.com/blog/exams/goethe-b2-wortschatzliste-essential-vocab-download/","https://butterfluentgerman.com/blog/german-b2-vocabulary-list"]
- **Implication for daily targets:** 12–15 new lemmas/day × ~300 study days ≈ 4,000 lemmas by B2. A1.1 (first 30 days) introduces ~350–450 high-frequency lemmas (Grundwortschatz). The app caps new cards at 15/day to keep the SRS review load sustainable.

## 2. CEFR scope-and-sequence (A1 → B2)

Derived from Kapitel Zwei Berlin's public course outline (A1.1 → C2) and Goethe/telc syllabi. ["https://kapitel-zwei.de/en/course-content/"]

| Module | Topics | Grammar focus |
|---|---|---|
| **A1.1** (Days 1–30, this build) | Greetings/self-intro, alphabet & numbers, countries & languages, occupations, family, hobbies, workplace, free time, hotel, city map, food & restaurant | Present tense, personal pronouns, der/die/das, negation (kein/nicht), accusative, prepositions of place, separable verbs, word order basics |
| **A1.2** (31–60) | Daily schedule, office stress, computer, appointments, seasons & weather, travel prep, transport, home & furnishings, health, excuses | Prepositions of time, conjunctions (und/aber/oder/denn), adjective basics, more case work |
| **A2.1** (61–90) | Past events, CV/training, money & shopping, office phone, "What if…" | Perfect tense (Partizip II, sein/haben), main vs subordinate clauses, dative verbs, Subjunctive II basics |
| **A2.2** (91–120) | Travel, nationalities, animals, living (garden/city), nutrition, news, environment, technology | Verbs + prepositions, adjective declension basics, spatial/temporal prepositions |
| **B1.1** (121–150) | Time/punctuality, museums/art, work problems, business manners, childhood/past, media, advertising, complaints | Preterite, past perfect, modal verbs + brauchen zu, Konjunktiv II (polite), reflexive verbs, passive (Vorgangspassiv), comparative/superlative, genitive, relative clauses |
| **B1.2** (151–180) | Learning/lifelong learning, school grades, traffic, travel, feelings, food/recipes/invitations | Final/conditional clauses, time clauses (während/nachdem/als/wenn), adjective+preposition, cause/effect connectors |
| **B2.1** (181–210) | School/training, relationships, renting, travel & complaints, cultural differences at work, Europe, small talk | Passive intensification, adjective declension all cases, two-case prepositions, Konjunktiv II, weil/denn/deshalb/so…dass |
| **B2.2** (211–240) | Work emails/phone, leisure, university, history/politics, world news, crime stories | Subjunctive I (indirect speech), conditional clauses, word-position refinement, verb rection, advanced connectors |

## 3. Narrative structure for language apps

Successful apps (Duolingo, Babbel, LingQ, Kwiziq) use a **continuing situational narrative** anchored to a relatable protagonist whose needs escalate with the learner's level. Best practices:
- A clear protagonist the learner projects onto; a small recurring cast; a physical setting (a city) that grows with the level.
- Each episode = one communicative *need* (order coffee, sign a lease, argue a bill, discuss politics) that matches the day's grammar.
- i+1 comprehensible input: ~90–95% known words per episode (Krashen). New words are glossed and immediately drilled.
- Emotional stakes rise slowly: A1 = survival, A2 = routine, B1 = opinions, B2 = nuanced argument.

**App narrative chosen:** *"Mia in Berlin"* — Mia, 24, moves from abroad to Berlin for a 6-month design internship. Cast: Jonas (flatmate), Frau Becker (landlady), Leila (colleague), Herr Vogt (boss). The story arc maps exactly onto the table above (arrival → flat → job → friends → travel → work conflicts → politics/culture at B2).

## 4. Audio strategy

- **Primary: Web Speech API (`SpeechSynthesis`)** with `lang='de-DE'`. Supported in Chrome 33+, Edge 14+, Firefox 49+, Safari 7+; Chrome desktop offers "Google Deutsch" (high-quality cloud voice). Works offline once voices are cached by the OS, no files to ship, zero cost. ["https://www.testmuai.com/learning-hub/speech-synthesis-api-browser-support/","https://talkrapp.com/speechSynthesis.html"]
- **Upgrade path (documented in README):** swap TTS for pre-recorded MP3s (named `audio/{lessonId}/{lineId}.mp3`). Recommended sources for OER audio: DW (Deutsche Welle) "Slow German"-style OER, Forvo (CC/individual word pronunciations, check per-word license), or self-recorded. The app checks for an `audioFile` field first and falls back to TTS.
- Pronunciation best practice: play each new word ×2 (normal then slow), allow replay, and pair listening with shadowing (teach-back output task).

## 5. Spaced repetition: SM-2 vs FSRS

- **SM-2 (SuperMemo 2, 1987):** per-card ease factor (start 2.5), interval = interval × ease on success; reset on lapse. Simple, ~30 lines of code, battle-tested (Anki legacy). ["https://studycardsai.com/blog/free-flashcard-app-for-language-learning"]
- **FSRS (Free Spaced Repetition Scheduler):** DSR memory model (Difficulty, Stability, Retrievability), target-retention scheduling; ~10–30% fewer reviews for same retention in benchmarks. ["https://lingoat.app/en/blog/fsrs-vs-sm2-for-language-learning/","https://flashcard-maker.cc/blog/srs-language-learning/"]
- **Decision:** implement **SM-2** (understandable by an intermediate dev, tiny code, fits localStorage). Document FSRS as a drop-in upgrade in DESIGN.md. The scheduler stores per-card `{interval, ease, reps, due, lapses}` in localStorage under one key.

## 6. Interleaving & the 5 Laws mapping

| Law | Implementation in app |
|---|---|
| 1. Retrieval, not review | Every exercise is recall-based (flashcards self-rate, cloze, matching, dictation, unscramble). No passive "read the word list" step. |
| 2. Space it out | SM-2 SRS queue; due cards shown before new cards each day. |
| 3. Interleave | Daily review mixes old vocabulary (SRS due), yesterday's grammar, and last week's chunks. New content is interleaved within the lesson (never 10 identical drill types in a row). |
| 4. Explain with source closed | "Teach-back" output task each day: learner records/writes a short utterance from memory, then self-checks against a model answer. |
| 5. Build chunks, not facts | Every lesson ships 4–6 *chunks/sentence frames* (e.g., "Ich hätte gern…", "Wie komme ich zum…?") drilled as whole units, not isolated words. |

## 7. GitHub Pages & PWA constraints

- GitHub Pages serves static files only (HTML/CSS/JS/JSON/media), HTTPS, no server code. Perfect fit. Custom 404 supported. Jekyll is auto-run but can be disabled with `.nojekyll` (recommended, so `_`-prefixed folders and JSON are served raw).
- Service workers require HTTPS (GitHub Pages provides it) and same-scope registration. PWA = `manifest.json` + `sw.js` + icons. Offline-first cache of app shell + data files.
- localStorage limit ~5 MB (plenty for SRS state + progress); IndexedDB optional for future audio caching.

## 8. OER / copyright-safe resources (for extension)

- **Tatoeba** (CC-BY) — example sentence pairs DE↔EN.
- **DW Learn German** — some materials CC-BY-NC; check per asset.
- **Forvo** — pronunciations, per-word license (many CC-BY-NC).
- **Leipzig Corpora** — free for research/non-commercial.
- **Wikimedia Commons / Wikipedia** — CC-BY-SA images.
- All app *content* in this build is original and licensed MIT/CC-BY so the user can deploy freely.

## 9. Realistic daily targets (A1.1 proof-of-concept)

- **New lemmas:** 12–15/day (≈400 in 30 days).
- **SRS reviews:** typically 15–40 cards/day after the first week (SM-2).
- **Study time:** 45–75 min/day for A1 (the prompt's 2–3 h is for B2 intensity; A1 new-learner fatigue is real — the app targets ~60 min and scales).
- **Exercise load per day:** episode listening (5–8 lines) → flashcards (12–15 new) → cloze (4) → matching (6 pairs) → dictation (2 sentences) → unscramble (3) → teach-back (1 output). Interleaved with review queue.
