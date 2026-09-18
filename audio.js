/* audio.js — Web Speech API TTS (de-DE) with optional MP3 override.
   Usage: Audio.speak(text, {slow:false}); Audio.preferVoice(voiceURI).
   If a line has .audioFile (path to mp3), that is played instead. */
(function () {
  const synth = window.speechSynthesis;
  let voices = [];
  let deVoice = null;

  function loadVoices() {
    voices = synth ? synth.getVoices() : [];
    const settings = Store.get('settings') || {};
    if (settings.voiceURI) {
      deVoice = voices.find(v => v.voiceURI === settings.voiceURI) || null;
    }
    if (!deVoice) {
      deVoice = voices.find(v => /^de(-|_)?DE/i.test(v.lang)) ||
                voices.find(v => /^de/i.test(v.lang)) || null;
    }
  }
  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }

  function playFile(url) {
    return new Promise(res => {
      const a = new Audio(url);
      a.onended = res; a.onerror = res;
      a.play().catch(res);
    });
  }

  const Audio = {
    available: !!synth,
    async speak(text, opts = {}) {
      if (opts.audioFile) { try { await playFile(opts.audioFile); return; } catch (e) {} }
      if (!synth) return;
      synth.cancel();
      const settings = Store.get('settings') || {};
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      if (deVoice) u.voice = deVoice;
      u.rate = opts.slow ? (settings.slowRate || 0.6) : (settings.rate || 0.9);
      u.pitch = 1;
      synth.speak(u);
      return new Promise(res => { u.onend = res; u.onerror = res; });
    },
    voices() { return voices.filter(v => /^de/i.test(v.lang)); },
    setVoice(uri) {
      Store.update('settings', s => { s.voiceURI = uri; return s; });
      loadVoices();
    },
    cancel() { if (synth) synth.cancel(); }
  };
  window.Audio = Audio;
})();
