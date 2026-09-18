# DESIGN.md — Deutsch Jetzt! Architecture & Spec

## 1. Tech stack
- **Plain HTML + CSS + vanilla JS (ES6, no build step).** Deployable to GitHub Pages by drag-and-drop or `git push`. No backend, no npm, no framework.
- Data shipped as `data/lessons.js` (assigns `window.LESSONS`) so the app works when opened directly from `file://` (no fetch/CORS issues) as well as on a server. A JSON mirror can be generated for future CMS use.
- State persistence: **localStorage** (keys: `dj_srs`, `dj_progress`, `dj_settings`, `dj_dayState`).
- Audio: **Web Speech API** TTS (`de-DE`) with optional per-line MP3 override via `audioFile` field.
- PWA: `manifest.json` + `sw.js` (cache-first app shell + data), `icons/` SVG/PNG.

## 2. Repository structure
```
deutsch-jetzt/
├── index.html              # single-page app shell, 4 views
├── css/style.css           # responsive, accessible, prefers-color-scheme
├── js/
│   ├── app.js              # router, view rendering, daily logic, main loop
│   ├── storage.js          # localStorage wrapper + defaults
│   ├── srs.js              # SM-2 scheduler (grade(card, quality) → next interval)
│   ├── audio.js            # speak(text), voice picker, slow mode, MP3 fallback
│   └── exercises.js        # renderers for 7 exercise types + grading
├── data/
│   └── lessons.js          # window.LESSONS = [30 day objects] (A1.1)
├── icons/                  # PWA icons (SVG + generated PNG)
├── manifest.json
├── sw.js
├── .nojekyll
├── README.md
└── docs/
    ├── RESEARCH.md
    └── DESIGN.md (this file)
```

## 3. Lesson JSON schema (per day)
```js
{
  id: 1, level: "A1.1", act: "Begrüßung",
  title: "Ankunft in Berlin",           // episode title
  goal: "Sich vorstellen und begrüßen.", // communicative goal
  grammar: {
    topic: "Personalpronomen + Präsens (sein/heißen/kommen)",
    note: "Short learner-facing explanation…",
    examples: ["Ich heiße Mia.", "Woher kommst du?"]
  },
  episode: [                             // narrative dialogue (i+1)
    { speaker: "Mia", de: "Hallo! Ich heiße Mia.", en: "Hello! I'm Mia.", audioFile: null },
    ...
  ],
  vocab: [                               // 12–15 items → SRS cards
    { id: "d1_v1", de: "der Tag", en: "the day", type: "noun", article: "der", example: "Guten Tag!" }
  ],
  chunks: [                              // sentence frames, drilled as whole units
    { de: "Ich heiße …", en: "My name is …" }, ...
  ],
  outputTask: {                          // teach-back (Law 4)
    prompt: "Stell dich vor: Name, Herkunft, Hobby. Nimm dich auf oder schreibe es auf.",
    model: "Hallo! Ich heiße Mia. Ich komme aus Spanien. Ich lese gern."
  },
  reviewFrom: [1,2]                      // day ids to interleave for review
}
```

## 4. SRS scheduler (SM-2)
Per card stored: `{ reps, interval (days), ease (start 2.5), due (ISO date), lapses }`.
- `grade(card, q)` where q ∈ {0 fail, 3 hard, 4 good, 5 easy}:
  - q < 3 → reps=0, interval=1 (relearn same day/next), ease=max(1.3, ease−0.2), lapses+1.
  - q ≥ 3 and reps==0 → interval=1; reps==1 → interval=3 (or 1 for hard); else interval=round(interval×ease) (×1.2 hard, ×1 easy bonus, ease+0.15).
  - due = today + interval.
- **Due queue** computed each load: cards with `due ≤ today`. Review queue is shuffled and interleaved with new cards (max 15 new/day).
- FSRS upgrade path: replace `srs.js` internals; the `grade()` signature stays identical.

## 5. Exercise types → 5 Laws mapping
| Type | Law(s) | Generator |
|---|---|---|
| Flashcard (self-rated Again/Hard/Good/Easy) | 1, 2, 5 | from `vocab` + `chunks` |
| Cloze (fill blank) | 1, 5 | from `episode`/`grammar.examples`, blank a target word |
| Matching (DE↔EN pairs) | 1, 3 | from day `vocab`, 6 pairs |
| Listening (play line, pick meaning) | 1, 3 | from `episode` lines + distractors |
| Dictation (type what you hear) | 1, 5 | from `episode` sentences, normalized compare |
| Sentence unscramble | 1, 5 (word order!) | from `episode`/`chunks`, tokens shuffled |
| Teach-back output | 4 | `outputTask`, self-check vs model |

Interleaving: the daily session order is fixed but mixes types — Review queue → Episode (listen+read) → New flashcards → rotate (cloze, matching, listening, dictation, unscramble) → Teach-back → Day complete.

## 6. Views (SPA, hash router: #/today, #/review, #/progress, #/calendar)
- **Today (`#/today`):** hero with day number, episode, goal, grammar card; "Start session" launches the exercise loop; progress bar; output task card.
- **Review (`#/review`):** SRS due queue with count; standalone flashcard review.
- **Progress (`#/progress`):** streak, days completed, cards mastered (interval≥21), level bar, words learned.
- **Calendar (`#/calendar`):** 30-day grid; completed days marked; locked future days; click any unlocked day to revisit.
- Wireframe principle: one column, card-based, max ~600px content width; big tap targets; keyboard-accessible; ARIA labels; high contrast.

## 7. Daily target logic
- `currentDay` = last completed + 1 (stored). A day is "complete" when all exercise blocks done + output task marked done.
- Each day shows: communicative goal, grammar focus, new-word count, estimated time (~60 min), and the output task.
- Streak = consecutive days with ≥1 completed session.

## 8. Accessibility & offline
- Semantic HTML, `lang="de"` on German text, focus management in exercise loop, `aria-live` for feedback.
- `prefers-reduced-motion` respected; no auto-play audio; replay buttons everywhere.
- Service worker caches shell + `data/lessons.js`; works offline after first load (TTS may need OS voices; MP3 overrides cached).

## 9. Content extension path (A1.2 → B2)
- Append day objects to `data/lessons.js` following the schema; the app auto-detects `length`.
- Keep `level` field per day; the calendar groups by module.
- Vocabulary ids must be unique (`d{day}_v{n}`) so SRS state never collides.
- Guidelines: 12–15 new vocab/day, 4–6 chunks, episode 6–10 lines at i+1, grammar one focus per day, output task always present.
