/* srs.js — SM-2 spaced repetition scheduler.
   grade(card, quality): quality 0=Again, 3=Hard, 4=Good, 5=Easy.
   Returns updated card. FSRS can replace internals; keep same signature. */
(function () {
  const DAY = 86400000;
  function todayISO() { return new Date().toISOString().slice(0, 10); }
  function addDays(iso, n) {
    const d = new Date(iso + 'T00:00:00');
    d.setDate(d.getDate() + Math.round(n));
    return d.toISOString().slice(0, 10);
  }
  const SRS = {
    newCard() {
      return { reps: 0, interval: 0, ease: 2.5, due: todayISO(), lapses: 0, last: null };
    },
    grade(card, quality) {
      card = card || this.newCard();
      const q = quality;
      if (q < 3) {
        // lapse: relearn
        card.reps = 0;
        card.interval = 1;
        card.ease = Math.max(1.3, card.ease - 0.2);
        card.lapses = (card.lapses || 0) + 1;
      } else {
        if (card.reps === 0) {
          card.interval = (q === 3) ? 1 : 1; // first success: 1 day
        } else if (card.reps === 1) {
          card.interval = (q === 3) ? 2 : 3;
        } else {
          let mult = card.ease;
          if (q === 3) mult = card.ease * 1.2;
          if (q === 5) mult = card.ease * 1.3;
          card.interval = Math.max(card.interval + 1, Math.round(card.interval * mult));
        }
        card.reps += 1;
        if (q === 5) card.ease = Math.min(3.0, card.ease + 0.15);
        if (q === 3) card.ease = Math.max(1.3, card.ease - 0.15);
      }
      card.due = addDays(todayISO(), card.interval);
      card.last = todayISO();
      return card;
    },
    isDue(card) { return card && card.due <= todayISO(); },
    dueCount(srs) {
      return Object.values(srs || {}).filter(c => this.isDue(c)).length;
    },
    masteredCount(srs) {
      return Object.values(srs || {}).filter(c => (c.interval || 0) >= 21).length;
    }
  };
  window.SRS = SRS;
})();
