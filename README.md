# Deutsch Jetzt! 🇩🇪 — A1 → B2 German, one day at a time

A **narrative-driven, static German-learning web app** organised around daily targets. **Full A1 → B2.2 curriculum: 240 days** (8 modules × 30 days, ~3,150 vocabulary cards) of original content. Deployable free on **GitHub Pages**. Works offline (PWA). No backend, no build step, no dependencies.

> **Narrative:** *Mia in Berlin* — Mia moves from Madrid to Berlin for a design internship. Each day = one episode of her story + one communicative goal + one grammar focus + review + an output task.

## ✨ Features

- **Continuing story** — 240 episodes (A1.1 → B2.2), recurring cast (Mia, Jonas, Frau Becker, Leila, Herr Vogt, Prof. Neumann, Kommissar Berger)
- **7 interactive exercise types**: flashcards (self-rated), cloze, matching, listening MCQ, dictation, sentence unscramble, teach-back output
- **Spaced repetition (SM-2)** with `localStorage` — review queue, due badges, mastered count
- **Daily target system** — each day: goal · grammar · new words (~14) · review · output task
- **Embedded audio** — browser TTS (`de-DE`) on every line, word, and sentence; optional MP3 override per line
- **Interleaving** — review + new content mixed every session (the 5 Laws built in)
- **PWA** — installable, works offline after first load
- **Views**: Today · Review · Progress (streak, stats) · Calendar (grouped by 8 modules)
- Responsive, accessible (ARIA, keyboard, reduced-motion, dark mode), free to host

## 🚀 Deploy to GitHub Pages (2 minutes)

1. Create a new repo on GitHub, e.g. `deutsch-jetzt`.
2. Upload **all files** in this folder (keep the folder structure: `css/`, `js/`, `data/`, `icons/`, plus `index.html`, `sw.js`, `manifest.json`, `.nojekyll`).
   ```bash
   git init && git add -A && git commit -m "Deutsch Jetzt! initial"
   git branch -M main && git remote add origin https://github.com/YOU/deutsch-jetzt.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. Wait ~1 minute. Your app is live at `https://YOU.github.io/deutsch-jetzt/`.

> The `.nojekyll` file is required so GitHub serves `_`-prefixed and JSON/JS files raw.

### Run locally
```bash
cd deutsch-jetzt
python3 -m http.server 8000
# open http://localhost:8000
```
(Opening `index.html` directly via `file://` also works — data is shipped as `data/lessons.js`, not fetched JSON.)

## 📂 Structure
```
index.html            # SPA shell (4 views: today/review/progress/calendar)
css/style.css         # responsive, dark-mode, accessible
js/app.js             # router, views, session loop, streaks
js/srs.js             # SM-2 scheduler (swap for FSRS — same API)
js/exercises.js       # 7 exercise renderers + grading
js/audio.js           # TTS wrapper + MP3 fallback
js/storage.js         # localStorage wrapper
data/lessons.js       # window.LESSONS = days 1–30 (A1.1, hand-authored)
data/lessons_2.js     # window.LESSONS_2 = days 31–240 (A1.2→B2.2)
sw.js, manifest.json  # PWA
icons/                # app icons
docs/RESEARCH.md      # sources & evidence (vocab frequency, SRS, audio, CEFR)
docs/DESIGN.md        # architecture, JSON schema, SRS spec, wireframes
gen_lessons.py        # generator for A1.1 (days 1–30)
gen_extend_1.py / gen_extend_2.py  # generators for A1.2→B2.2 (days 31–240)
```

## ➕ Extending content to A1.2 → B2

Append day objects to `data/lessons.js` (or edit `gen_lessons.py` and re-run). Schema per day:
```js
{ id: 31, level: "A1.2", act: "Tagesablauf", title: "…", goal: "…",
  grammar: { topic, note, examples: [...] },
  episode: [{ speaker, de, en, audioFile }],
  vocab:   [{ id: "d31_v1", de, en, article, type, example }],   // unique ids!
  chunks:  [{ de, en }],
  outputTask: { prompt, model } }
```
Guidelines: 12–15 new vocab/day, 4–6 chunks, episode 6–10 lines at i+1 (~95% known words), one grammar focus per day, output task always present. Scope-and-sequence for A1.2→B2 is mapped in `docs/RESEARCH.md` (based on Kapitel Zwei + Goethe/telc syllabi). All content must be original.

### Adding real audio (optional)
By default every German text uses the browser's built-in `de-DE` TTS. To use pre-recorded MP3s: name files `audio/d{day}_{line}.mp3` and set `audioFile: "audio/d1_3.mp3"` on any episode line / vocab item. The app plays the file if present, else falls back to TTS. OER sources: DW, Forvo (check per-word license), self-recorded.

### Swap SM-2 → FSRS (optional)
`js/srs.js` exposes `newCard()`, `grade(card, quality)`, `isDue()`, `dueCount()`. Replace internals with an FSRS implementation (e.g. `ts-fsrs` compiled to JS) keeping the same four methods — nothing else changes.

## 🧠 The 5 Laws — how they map
1. **Retrieval, not review** — every exercise is recall-based; no passive word-list reading.
2. **Space it out** — SM-2 SRS; due cards shown before new cards.
3. **Interleave** — each session mixes review, listening, flashcards, cloze, matching, dictation, unscramble.
4. **Explain with source closed** — daily teach-back output task; compare to model answer.
5. **Build chunks, not facts** — 4–6 sentence frames per day drilled as whole units.

## ⚠️ Notes & limitations
- TTS voice quality depends on OS/browser; Chrome desktop offers "Google Deutsch" (high quality). Pick a voice in **Progress → Settings**.
- Progress is stored only in this browser (`localStorage`). Clearing site data resets it (button in Progress view).
- Full A1→B2.2 curriculum included (240 days, ~3,150 vocab cards). Days 31–240 are generated from curated per-module pools (grammar, vocab, dialogue scenes) — grammatically correct and consistent; for production use, review/refine with a native speaker (edit `gen_extend_2.py`). A1.1 (days 1–30) is fully hand-authored.

## License
Code: MIT. Content (lessons, story, exercises): CC-BY 4.0 — original, no copyrighted textbook material reproduced. Inspired by publicly listed CEFR outlines only.
