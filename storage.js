/* storage.js — localStorage wrapper with safe defaults. */
(function () {
  const PREFIX = 'dj_';
  const DEFAULTS = {
    srs: {},            // cardId -> {reps, interval, ease, due, lapses, last}
    progress: {         // dayId -> {complete: bool, date, score}
      currentDay: 1, streak: 0, lastStudyDate: null, totalCards: 0
    },
    settings: { voiceURI: null, rate: 0.9, slowRate: 0.6, newPerDay: 15 },
    dayState: {}        // dayId -> {blocksDone: [...]}
  };
  const Store = {
    get(key) {
      try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULTS[key] || null));
      } catch (e) { return JSON.parse(JSON.stringify(DEFAULTS[key] || null)); }
    },
    set(key, val) {
      try { localStorage.setItem(PREFIX + key, JSON.stringify(val)); } catch (e) {}
    },
    update(key, fn) {
      const cur = this.get(key) || JSON.parse(JSON.stringify(DEFAULTS[key] || {}));
      const next = fn(cur);
      this.set(key, next);
      return next;
    },
    reset() { Object.keys(DEFAULTS).forEach(k => localStorage.removeItem(PREFIX + k)); }
  };
  window.Store = Store;
})();
