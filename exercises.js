/* exercises.js — 7 exercise renderers.
   Each: Exercises.create(type, data) -> { title, render(containerEl, done(result)) }
   result: { correct: bool, quality: 0|3|4|5, cardId?: string }
   Types: flashcard, cloze, matching, listening, dictation, unscramble, teachback */
(function () {
  const E = {};

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function norm(s) {
    return (s || '').toLowerCase().trim()
      .replace(/[.,!?;:"'()]/g, '')
      .replace(/ß/g, 'ss').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
      .replace(/\s+/g, ' ');
  }
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function playBtn(text, audioFile) {
    const b = el('button', 'play-btn', '&#9658;');
    b.setAttribute('aria-label', 'Play audio');
    b.onclick = (ev) => { ev.stopPropagation(); Audio.speak(text, { audioFile }); };
    return b;
  }

  /* ---------- FLASHCARD ---------- */
  E.flashcard = {
    title: 'Flashcard',
    create(data) {
      return {
        title: 'Flashcard',
        render(box, done) {
          let revealed = false;
          const card = el('div', 'flashcard');
          const front = el('div', 'front', '');
          const back = el('div', 'back', '');
          const hint = el('div', 'hint', 'Tap card to reveal');
          const article = data.article ? `<span class="article">${data.article}</span> ` : '';
          front.innerHTML = `${article}<span lang="de">${data.de}</span>`;
          back.innerHTML = `<strong>${data.en}</strong>${data.example ? `<br><span class="muted" lang="de">${data.example}</span>` : ''}`;
          card.appendChild(playBtn(data.de, data.audioFile));
          card.appendChild(front); card.appendChild(back); card.appendChild(hint);
          back.style.display = 'none';
          card.onclick = () => {
            revealed = true;
            back.style.display = ''; hint.style.display = 'none';
            Audio.speak(data.de, { audioFile: data.audioFile });
          };
          box.appendChild(card);
          const actions = el('div', 'btn-row');
          [['Again', 0, 'bad'], ['Hard', 3], ['Good', 4], ['Easy', 5]].forEach(([lbl, q]) => {
            const b = el('button', 'btn ' + (lbl === 'Again' ? 'secondary' : ''), lbl);
            b.disabled = true;
            b.onclick = () => done({ correct: q >= 3, quality: q, cardId: data.id });
            actions.appendChild(b);
          });
          // enable after reveal
          const iv = setInterval(() => {
            if (revealed) { actions.querySelectorAll('button').forEach(b => b.disabled = false); clearInterval(iv); }
          }, 100);
          box.appendChild(actions);
        }
      };
    }
  };

  /* ---------- CLOZE ---------- */
  E.cloze = {
    title: 'Cloze — fill the gap',
    create(data) {
      return {
        title: 'Cloze',
        render(box, done) {
          const wrap = el('div');
          wrap.innerHTML = `<p style="margin-bottom:12px;font-size:16px" lang="de">${data.before} <strong>_____</strong> ${data.after || ''}</p>`;
          if (data.hint) wrap.appendChild(el('p', 'muted', `Hint: ${data.hint}`));
          const input = el('input'); input.type = 'text'; input.placeholder = 'Type the missing word…';
          wrap.appendChild(input);
          const actions = el('div', 'btn-row');
          const check = el('button', 'btn', 'Check');
          actions.appendChild(check);
          wrap.appendChild(actions);
          const fb = document.getElementById('sessionFeedback');
          let checked = false;
          check.onclick = () => {
            if (checked) { done({ correct: norm(input.value) === norm(data.answer), quality: 4, cardId: data.cardId }); return; }
            const ok = norm(input.value) === norm(data.answer);
            checked = true;
            fb.className = 'session-feedback ' + (ok ? 'good' : 'bad');
            fb.textContent = ok ? 'Richtig! Correct.' : `Not quite — the answer: "${data.answer}"`;
            check.textContent = 'Continue';
            input.disabled = true;
          };
          input.addEventListener('keydown', e => { if (e.key === 'Enter') check.click(); });
          box.appendChild(wrap);
          setTimeout(() => input.focus(), 50);
        }
      };
    }
  };

  /* ---------- MATCHING ---------- */
  E.matching = {
    title: 'Matching — pair German with meaning',
    create(data) {
      // data.pairs = [{de, en}]
      return {
        title: 'Matching',
        render(box, done) {
          const pairs = data.pairs;
          const grid = el('div', 'match-grid');
          const left = shuffle(pairs.map((p, i) => ({ side: 'de', text: p.de, id: i })));
          const right = shuffle(pairs.map((p, i) => ({ side: 'en', text: p.en, id: i })));
          const items = [];
          const all = left.concat(right);
          let sel = null, matched = 0;
          all.forEach(it => {
            const m = el('div', 'match-item', it.side === 'de' ? `<span lang="de">${it.text}</span>` : it.text);
            m.dataset.side = it.side; m.dataset.pid = it.id;
            m.onclick = () => {
              if (m.classList.contains('matched')) return;
              if (!sel) { sel = m; m.classList.add('selected'); return; }
              if (sel === m) { sel.classList.remove('selected'); sel = null; return; }
              if (sel.dataset.side === m.dataset.side) {
                sel.classList.remove('selected'); sel = m; m.classList.add('selected'); return;
              }
              if (sel.dataset.pid === m.dataset.pid) {
                sel.classList.remove('selected'); sel.classList.add('matched'); m.classList.add('matched');
                matched++; sel = null;
                if (matched === pairs.length) setTimeout(() => done({ correct: true, quality: 4 }), 400);
              } else {
                const a = sel, b = m;
                a.style.borderColor = 'var(--bad)'; b.style.borderColor = 'var(--bad)';
                setTimeout(() => { a.style.borderColor = ''; b.style.borderColor = ''; a.classList.remove('selected'); }, 500);
                sel = null;
              }
            };
            grid.appendChild(m);
          });
          box.appendChild(grid);
        }
      };
    }
  };

  /* ---------- LISTENING (multiple choice meaning) ---------- */
  E.listening = {
    title: 'Listening — what did you hear?',
    create(data) {
      // data.text (de), data.options [en], data.correct index
      return {
        title: 'Listening',
        render(box, done) {
          const wrap = el('div');
          const top = el('div', 'btn-row');
          const play = el('button', 'btn secondary', '&#9658; Play sentence');
          const slow = el('button', 'btn secondary', 'Play slowly');
          play.onclick = () => Audio.speak(data.text, { audioFile: data.audioFile });
          slow.onclick = () => Audio.speak(data.text, { slow: true, audioFile: data.audioFile });
          top.appendChild(play); top.appendChild(slow);
          wrap.appendChild(top);
          const opts = el('div', ''); opts.style.marginTop = '14px';
          let answered = false;
          data.options.forEach((opt, i) => {
            const b = el('button', 'option-btn', opt);
            b.onclick = () => {
              if (answered) return; answered = true;
              const ok = i === data.correct;
              b.classList.add(ok ? 'correct' : 'wrong');
              if (!ok) opts.children[data.correct].classList.add('correct');
              const fb = document.getElementById('sessionFeedback');
              fb.className = 'session-feedback ' + (ok ? 'good' : 'bad');
              fb.innerHTML = ok ? 'Gut! You understood it.' : `Heard: <span lang="de">${data.text}</span>`;
              setTimeout(() => done({ correct: ok, quality: ok ? 4 : 0, cardId: data.cardId }), 1100);
            };
            opts.appendChild(b);
          });
          wrap.appendChild(opts);
          box.appendChild(wrap);
          setTimeout(() => Audio.speak(data.text, { audioFile: data.audioFile }), 300);
        }
      };
    }
  };

  /* ---------- DICTATION ---------- */
  E.dictation = {
    title: 'Dictation — write what you hear',
    create(data) {
      return {
        title: 'Dictation',
        render(box, done) {
          const wrap = el('div');
          const top = el('div', 'btn-row');
          const play = el('button', 'btn secondary', '&#9658; Play');
          const slow = el('button', 'btn secondary', 'Slow');
          play.onclick = () => Audio.speak(data.text, { audioFile: data.audioFile });
          slow.onclick = () => Audio.speak(data.text, { slow: true, audioFile: data.audioFile });
          top.appendChild(play); top.appendChild(slow);
          wrap.appendChild(top);
          const ta = el('textarea'); ta.rows = 2; ta.placeholder = 'Write the German sentence you hear…';
          ta.style.marginTop = '12px';
          wrap.appendChild(ta);
          const actions = el('div', 'btn-row');
          const check = el('button', 'btn', 'Check');
          actions.appendChild(check); wrap.appendChild(actions);
          let checked = false;
          check.onclick = () => {
            const fb = document.getElementById('sessionFeedback');
            if (!checked) {
              const ok = norm(ta.value) === norm(data.text);
              checked = true;
              fb.className = 'session-feedback ' + (ok ? 'good' : 'bad');
              fb.innerHTML = ok ? 'Perfekt! Exact match.' : `Answer: <span lang="de">${data.text}</span>`;
              check.textContent = 'Continue';
              ta.disabled = true;
            } else {
              const ok = norm(ta.value) === norm(data.text);
              done({ correct: ok, quality: ok ? 4 : 3, cardId: data.cardId });
            }
          };
          box.appendChild(wrap);
          setTimeout(() => Audio.speak(data.text, { audioFile: data.audioFile }), 300);
        }
      };
    }
  };

  /* ---------- SENTENCE UNSCRAMBLE ---------- */
  E.unscramble = {
    title: 'Unscramble — build the sentence',
    create(data) {
      // data.tokens = ['Ich', 'heiße', 'Mia']
      return {
        title: 'Unscramble',
        render(box, done) {
          const answer = data.tokens.join(' ');
          const slots = el('div', 'tokens'); slots.style.borderBottom = '2px dashed var(--border)';
          const pool = el('div', 'tokens');
          const chosen = [];
          const toks = shuffle(data.tokens);
          const fb = document.getElementById('sessionFeedback');
          function render() {
            slots.innerHTML = '';
            chosen.forEach((t, i) => {
              const s = el('span', 'token slot', t);
              s.onclick = () => { chosen.splice(i, 1); render(); };
              slots.appendChild(s);
            });
            pool.innerHTML = '';
            toks.forEach(t => {
              const used = chosen.filter(c => c === t).length >= toks.filter(x => x === t).length && chosen.includes(t);
              // simpler: count occurrences
              const inChosen = chosen.filter(c => c === t).length;
              const total = toks.filter(x => x === t).length;
              const btn = el('span', 'token' + (inChosen >= total ? ' used' : ''), t);
              btn.onclick = () => {
                if (inChosen >= total) return;
                chosen.push(t); render();
              };
              pool.appendChild(btn);
            });
          }
          render();
          const hint = el('p', 'muted', 'Tap words to build the sentence. Tap a placed word to remove it.');
          const actions = el('div', 'btn-row');
          const check = el('button', 'btn', 'Check');
          const play = el('button', 'btn secondary', '&#9658;');
          play.onclick = () => Audio.speak(answer, { audioFile: data.audioFile });
          actions.appendChild(play); actions.appendChild(check);
          check.onclick = () => {
            const ok = norm(chosen.join(' ')) === norm(answer);
            fb.className = 'session-feedback ' + (ok ? 'good' : 'bad');
            fb.innerHTML = ok ? 'Korrekte Wortstellung!' : `Try again — or <a href="#" id="showAns">show answer</a>`;
            const sa = fb.querySelector('#showAns');
            if (sa) sa.onclick = (e) => { e.preventDefault(); fb.innerHTML = `Answer: <span lang="de">${answer}</span>`; };
            if (ok) setTimeout(() => done({ correct: true, quality: 4, cardId: data.cardId }), 700);
          };
          box.appendChild(slots); box.appendChild(pool); box.appendChild(hint); box.appendChild(actions);
        }
      };
    }
  };

  /* ---------- TEACH-BACK (output task, Law 4) ---------- */
  E.teachback = {
    title: 'Teach-back — say it from memory',
    create(data) {
      // data.prompt, data.model
      return {
        title: 'Teach-back',
        render(box, done) {
          const wrap = el('div');
          wrap.innerHTML = `<p style="margin-bottom:10px"><strong>Output task:</strong> ${data.prompt}</p>
            <p class="muted">Record yourself speaking (or write it). Source closed — no peeking. Then compare with the model.</p>`;
          const ta = el('textarea'); ta.rows = 3; ta.placeholder = 'Write your attempt here (optional)…';
          ta.style.marginTop = '10px';
          wrap.appendChild(ta);
          const actions = el('div', 'btn-row');
          const show = el('button', 'btn secondary', 'Show model answer');
          const doneBtn = el('button', 'btn amber', 'I did it — complete day');
          let shown = false;
          const modelBox = el('div', 'grammar-box');
          show.onclick = () => {
            shown = true;
            modelBox.innerHTML = `<strong>Model:</strong> <span lang="de">${data.model}</span>`;
            if (!wrap.contains(modelBox)) wrap.insertBefore(modelBox, actions);
          };
          doneBtn.onclick = () => done({ correct: true, quality: 5, teachback: true });
          actions.appendChild(show); actions.appendChild(doneBtn);
          wrap.appendChild(actions);
          box.appendChild(wrap);
        }
      };
    }
  };

  window.Exercises = { create(type, data) { return E[type].create(data); }, norm, shuffle };
})();
