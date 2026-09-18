/* app.js — Deutsch Jetzt! main controller: router, views, daily session loop, SRS integration. */
(function () {
  const LESSONS = (window.LESSONS || []).concat(window.LESSONS_2 || []);
  const $ = (s) => document.querySelector(s);
  const app = $('#app');
  const overlay = $('#sessionOverlay');
  const sessionBody = $('#sessionBody');
  const sessionActions = $('#sessionActions');
  const sessionFb = $('#sessionFeedback');
  const sessionTitle = $('#sessionTitle');
  const sessionBar = $('#sessionBar');

  function todayISO() { return new Date().toISOString().slice(0, 10); }
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 2200);
  }

  /* ---------- progress helpers ---------- */
  function getProgress() { return Store.get('progress') || { currentDay: 1, streak: 0, lastStudyDate: null, totalCards: 0 }; }
  function isDayComplete(dayId) {
    const p = getProgress();
    return !!(p[dayId] && p[dayId].complete);
  }
  function currentDayId() {
    const p = getProgress();
    // first incomplete day
    for (let i = 1; i <= LESSONS.length; i++) if (!isDayComplete(i)) return i;
    return LESSONS.length;
  }
  function updateStreakOnComplete() {
    Store.update('progress', p => {
      const today = todayISO();
      if (p.lastStudyDate === today) return p;
      const y = new Date(); y.setDate(y.getDate() - 1);
      const yest = y.toISOString().slice(0, 10);
      p.streak = (p.lastStudyDate === yest) ? (p.streak || 0) + 1 : 1;
      p.lastStudyDate = today;
      return p;
    });
  }

  /* ---------- build exercise queue for a day (interleaved) ---------- */
  function buildQueue(day) {
    const q = [];
    const srs = Store.get('srs') || {};
    const settings = Store.get('settings') || {};
    const newPerDay = settings.newPerDay || 15;

    // 1. SRS review due cards (flashcards) — Law 2 (space), interleaved
    const dueCards = Object.entries(srs).filter(([id, c]) => SRS.isDue(c));
    const vocabById = {};
    LESSONS.forEach(l => (l.vocab || []).forEach(v => { vocabById[v.id] = v; }));
    dueCards.slice(0, 30).forEach(([id]) => {
      const v = vocabById[id];
      if (v) q.push({ type: 'flashcard', data: { id: v.id, de: v.de.replace(/^(der|die|das)\s+/, ''), article: v.article, en: v.en, example: v.example }, review: true });
    });

    // 2. Episode listening (2 lines)
    const epLines = Exercises.shuffle(day.episode).slice(0, 2);
    epLines.forEach(line => {
      const distractors = Exercises.shuffle(day.episode.filter(l => l !== line).map(l => l.en)).slice(0, 3);
      const options = Exercises.shuffle([line.en, ...distractors]);
      q.push({ type: 'listening', data: { text: line.de, options, correct: options.indexOf(line.en), audioFile: line.audioFile } });
    });

    // 3. New vocab flashcards
    const newVocab = (day.vocab || []).slice(0, newPerDay);
    newVocab.forEach(v => {
      if (!srs[v.id]) q.push({ type: 'flashcard', data: { id: v.id, de: v.de.replace(/^(der|die|das)\s+/, ''), article: v.article, en: v.en, example: v.example } });
    });

    // 4. Cloze from grammar examples + vocab examples (3)
    const clozeSources = [...(day.grammar.examples || []), ...(day.vocab || []).slice(0, 4).map(v => v.example).filter(Boolean)];
    Exercises.shuffle(clozeSources).slice(0, 3).forEach(sent => {
      const words = sent.split(' ');
      const idx = Math.floor(Math.random() * words.length);
      const answer = words[idx].replace(/[.,!?]/g, '');
      q.push({
        type: 'cloze',
        data: { before: words.slice(0, idx).join(' '), after: words.slice(idx + 1).join(' '), answer, hint: day.vocab.find(v => v.de.includes(answer)) ? 'from today\'s vocabulary' : undefined }
      });
    });

    // 5. Matching — 6 vocab pairs
    if (day.vocab && day.vocab.length >= 4) {
      q.push({ type: 'matching', data: { pairs: Exercises.shuffle(day.vocab).slice(0, Math.min(6, day.vocab.length)).map(v => ({ de: v.de, en: v.en })) } });
    }

    // 6. Dictation — 1 episode sentence
    const dictLine = day.episode[Math.floor(Math.random() * day.episode.length)];
    q.push({ type: 'dictation', data: { text: dictLine.de, audioFile: dictLine.audioFile } });

    // 7. Unscramble — 2 chunks/episode lines
    const unscrambleSrc = Exercises.shuffle([...(day.chunks || []).map(c => c.de.replace(/\s*…\s*/, ' ... ')), ...day.episode.map(l => l.de)]).slice(0, 2);
    unscrambleSrc.forEach(s => q.push({ type: 'unscramble', data: { tokens: s.split(' ') } }));

    // 8. Teach-back output task (Law 4)
    q.push({ type: 'teachback', data: { prompt: day.outputTask.prompt, model: day.outputTask.model } });

    return q;
  }

  /* ---------- session runner ---------- */
  function runQueue(queue, dayId) {
    let idx = 0;
    function next() {
      sessionFb.className = 'session-feedback'; sessionFb.textContent = '';
      sessionActions.innerHTML = ''; sessionBody.innerHTML = '';
      if (idx >= queue.length) { finishSession(dayId); return; }
      const item = queue[idx];
      sessionBar.style.width = `${Math.round((idx / queue.length) * 100)}%`;
      const ex = Exercises.create(item.type, item.data);
      sessionTitle.textContent = ex.title + (item.review ? ' · Review' : '');
      ex.render(sessionBody, (result) => {
        // grade SRS if cardId present
        if (result.cardId) {
          Store.update('srs', s => {
            const card = s[result.cardId] || SRS.newCard();
            s[result.cardId] = SRS.grade(card, result.quality);
            return s;
          });
          Store.update('progress', p => { p.totalCards = (p.totalCards || 0) + 1; return p; });
        }
        idx++; next();
      });
    }
    next();
  }

  function finishSession(dayId) {
    overlay.classList.add('hidden');
    Store.update('progress', p => {
      p[dayId] = { complete: true, date: todayISO() };
      return p;
    });
    updateStreakOnComplete();
    toast('Tag ' + dayId + ' abgeschlossen! Well done.');
    render();
    updateBadges();
  }

  function startSession(dayId) {
    const day = LESSONS.find(l => l.id === dayId);
    if (!day) return;
    overlay.classList.remove('hidden');
    const queue = buildQueue(day);
    if (queue.length === 0) { finishSession(dayId); return; }
    runQueue(queue, dayId);
  }

  $('#quitSession').onclick = () => { overlay.classList.add('hidden'); Audio.cancel(); render(); };

  /* ---------- views ---------- */
  function renderToday() {
    const dayId = currentDayId();
    const day = LESSONS.find(l => l.id === dayId);
    if (!day) { app.innerHTML = '<div class="complete-banner">Alle Lektionen geschafft! You finished all available content — check README for how to extend to A1.2 and beyond.</div>'; return; }
    const done = isDayComplete(dayId);
    const srs = Store.get('srs') || {};
    const due = SRS.dueCount(srs);
    const newCount = (day.vocab || []).filter(v => !srs[v.id]).length;

    let html = `
      <div class="hero">
        <div class="day-num">Tag ${day.id} · ${day.level} · ${day.act}</div>
        <h2 lang="de">${day.title}</h2>
        <div class="goal"><strong>Ziel:</strong> ${day.goal}</div>
      </div>
      <div class="card">
        <span class="pill">${newCount} new words</span>
        <span class="pill amber">${due} due for review</span>
        <span class="pill">~60 min</span>
      </div>
      <div class="card">
        <h2>Heute: Episode</h2>
        <p class="muted">Listen and read the story. Tap play to hear native-speed German.</p>
        <div style="margin-top:10px">`;
    day.episode.forEach(line => {
      html += `<div class="dialogue-line">
        <button class="play-btn" data-say="${encodeURIComponent(line.de)}" ${line.audioFile ? `data-file="${line.audioFile}"` : ''} aria-label="Play">&#9658;</button>
        <div class="line-text"><span class="speaker">${line.speaker}</span>
          <div class="de" lang="de">${line.de}</div>
          <div class="en">${line.en}</div>
        </div></div>`;
    });
    html += `</div></div>
      <div class="card">
        <h2>Grammatik: ${day.grammar.topic}</h2>
        <div class="grammar-box">${day.grammar.note}
          ${day.grammar.examples.map(e => `<span class="ex" lang="de">→ ${e}</span>`).join('')}
        </div>
      </div>
      <div class="card">
        <h2>Wortschatz & Chunks</h2>
        <div class="vocab-grid">`;
    (day.vocab || []).forEach(v => {
      html += `<div class="vocab-item"><span class="de" lang="de"><span class="article">${v.article || ''}</span> ${v.de.replace(/^(der|die|das)\s+/, '')}</span>${v.en}</div>`;
    });
    (day.chunks || []).forEach(c => {
      html += `<div class="vocab-item" style="background:var(--accent-soft)"><span class="de" lang="de">${c.de}</span>${c.en}</div>`;
    });
    html += `</div></div>
      <div class="card">
        <h2>Output task (teach-back)</h2>
        <p>${day.outputTask.prompt}</p>
      </div>
      <button class="btn ${done ? 'secondary' : ''}" id="startBtn">${done ? 'Redo this day\'s session' : 'Start today\'s session'}</button>
      <p style="text-align:center;margin-top:10px" class="muted">Session: review → listening → flashcards → cloze → matching → dictation → unscramble → teach-back</p>`;
    app.innerHTML = html;
    // wire play buttons
    app.querySelectorAll('.play-btn[data-say]').forEach(b => {
      b.onclick = () => Audio.speak(decodeURIComponent(b.dataset.say), { audioFile: b.dataset.file });
    });
    $('#startBtn').onclick = () => startSession(dayId);
  }

  function renderReview() {
    const srs = Store.get('srs') || {};
    const due = Object.entries(srs).filter(([id, c]) => SRS.isDue(c));
    const vocabById = {};
    LESSONS.forEach(l => (l.vocab || []).forEach(v => { vocabById[v.id] = v; }));
    const html = `
      <div class="card"><h2>Review queue</h2>
      <p class="muted">${due.length} card(s) due. Spaced repetition (SM-2) brings cards back just before you forget them.</p>
      <div class="stat-grid" style="margin-top:12px">
        <div class="stat"><span class="num">${due.length}</span><span class="lbl">Due</span></div>
        <div class="stat"><span class="num">${Object.keys(srs).length}</span><span class="lbl">Total cards</span></div>
        <div class="stat"><span class="num">${SRS.masteredCount(srs)}</span><span class="lbl">Mastered</span></div>
      </div>
      <div class="btn-row"><button class="btn" id="reviewNow" ${due.length ? '' : 'disabled'}>Review now</button></div>
      </div>`;
    app.innerHTML = html;
    const btn = $('#reviewNow');
    if (btn) btn.onclick = () => {
      overlay.classList.remove('hidden');
      const queue = due.slice(0, 30).map(([id]) => {
        const v = vocabById[id];
        return { type: 'flashcard', review: true, data: { id: v.id, de: v.de.replace(/^(der|die|das)\s+/, ''), article: v.article, en: v.en, example: v.example } };
      });
      if (queue.length === 0) { overlay.classList.add('hidden'); toast('Nothing due — come back tomorrow!'); return; }
      runQueue(queue, currentDayId());
    };
  }

  function renderProgress() {
    const p = getProgress();
    const srs = Store.get('srs') || {};
    const doneDays = LESSONS.filter(l => isDayComplete(l.id)).length;
    const pct = Math.round((doneDays / LESSONS.length) * 100);
    const html = `
      <div class="card"><h2>Your progress</h2>
        <div class="stat-grid" style="margin:12px 0">
          <div class="stat"><span class="num">${p.streak || 0}</span><span class="lbl">Day streak</span></div>
          <div class="stat"><span class="num">${doneDays}</span><span class="lbl">Days done</span></div>
          <div class="stat"><span class="num">${Object.keys(srs).length}</span><span class="lbl">Words in SRS</span></div>
          <div class="stat"><span class="num">${SRS.masteredCount(srs)}</span><span class="lbl">Mastered</span></div>
          <div class="stat"><span class="num">${SRS.dueCount(srs)}</span><span class="lbl">Due now</span></div>
          <div class="stat"><span class="num">${pct}%</span><span class="lbl">of course</span></div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <p class="muted" style="margin-top:6px">A1.1 → A1.2 → A2.1 → A2.2 → B1.1 → B1.2 → B2.1 → B2.2 (240 Tage). Keep the streak alive!</p>
      </div>
      <div class="card"><h2>Settings</h2>
        <p class="muted">Audio voice (German):</p>
        <div id="voiceList" style="margin:8px 0;display:flex;flex-wrap:wrap;gap:6px"></div>
        <div class="btn-row"><button class="btn secondary" id="resetBtn">Reset all progress</button></div>
      </div>`;
    app.innerHTML = html;
    const vl = $('#voiceList');
    const voices = Audio.voices();
    const settings = Store.get('settings') || {};
    if (voices.length === 0) vl.innerHTML = '<span class="muted">No German voices detected — install a German language pack in your OS, or use Chrome for "Google Deutsch".</span>';
    voices.forEach(v => {
      const b = document.createElement('button');
      b.className = 'option-btn' + (settings.voiceURI === v.voiceURI ? ' correct' : '');
      b.style.width = 'auto'; b.textContent = v.name;
      b.onclick = () => { Audio.setVoice(v.voiceURI); Audio.speak('Hallo! Ich lerne Deutsch.', {}); renderProgress(); };
      vl.appendChild(b);
    });
    $('#resetBtn').onclick = () => {
      if (confirm('Reset ALL progress and SRS data? This cannot be undone.')) { Store.reset(); toast('Reset complete.'); render(); updateBadges(); }
    };
  }

  function renderCalendar() {
    const cur = currentDayId();
    const modules = [];
    LESSONS.forEach(l => {
      let m = modules.find(x => x.level === l.level);
      if (!m) { m = { level: l.level, days: [] }; modules.push(m); }
      m.days.push(l);
    });
    let html = `<div class="card"><h2>Course calendar — full curriculum (${LESSONS.length} Tage)</h2>
      <p class="muted">A1.1 → B2.2 · 8 modules × 30 days. Completed days are teal. Tap any unlocked day to revisit it.</p></div>`;
    modules.forEach(m => {
      const doneCount = m.days.filter(l => isDayComplete(l.id)).length;
      html += `<div class="card"><h3>${m.level} <span class="muted" style="font-weight:400">(${doneCount}/${m.days.length} done)</span></h3><div class="calendar-grid">`;
      m.days.forEach(l => {
        const done = isDayComplete(l.id);
        const locked = l.id > cur + 1;
        const cls = 'cal-day' + (done ? ' done' : '') + (l.id === cur ? ' current' : '') + (locked ? ' locked' : '');
        html += `<div class="${cls}" data-day="${l.id}" title="${l.title}">${l.id}</div>`;
      });
      html += `</div></div>`;
    });
    html += `<div id="dayDetail"></div>`;
    app.innerHTML = html;
    app.querySelectorAll('.cal-day').forEach(d => {
      d.onclick = () => {
        const id = +d.dataset.day;
        if (id > cur + 1) { toast('Complete earlier days first.'); return; }
        const day = LESSONS.find(l => l.id === id);
        $('#dayDetail').innerHTML = `
          <div class="card" style="margin:0">
            <h3>Tag ${day.id} (${day.level}): <span lang="de">${day.title}</span></h3>
            <p class="muted">${day.act} · Ziel: ${day.goal}</p>
            <p><strong>Grammar:</strong> ${day.grammar.topic}</p>
            <div class="btn-row"><button class="btn" id="revisit">${isDayComplete(id) ? 'Redo session' : 'Start this day'}</button></div>
          </div>`;
        $('#revisit').onclick = () => startSession(id);
      };
    });
  }

  /* ---------- router ---------- */
  function render() {
    const hash = (location.hash || '#/today').replace('#/', '');
    document.querySelectorAll('.tab').forEach(t => {
      const active = t.dataset.view === hash;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active);
    });
    if (hash === 'review') renderReview();
    else if (hash === 'progress') renderProgress();
    else if (hash === 'calendar') renderCalendar();
    else renderToday();
  }
  function updateBadges() {
    const srs = Store.get('srs') || {};
    const due = SRS.dueCount(srs);
    const b = $('#dueBadge');
    b.textContent = due; b.dataset.zero = due === 0;
    $('#streakCount').textContent = (getProgress().streak) || 0;
  }
  document.querySelectorAll('.tab').forEach(t => {
    t.onclick = () => { location.hash = '#/' + t.dataset.view; };
  });
  window.addEventListener('hashchange', render);
  render(); updateBadges();
  setInterval(updateBadges, 30000);
})();
