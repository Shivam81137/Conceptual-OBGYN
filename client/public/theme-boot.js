// Paint the correct surface before first frame: daylight by default,
// deep slate only when the student has explicitly chosen night mode.
// Kept as an external file so the Content-Security-Policy can forbid inline scripts.
(function bootstrapTheme() {
  var theme = 'light';
  try {
    var raw = localStorage.getItem('conceptual-obgyn:theme-v1');
    if (raw) {
      var parsed = JSON.parse(raw);
      if (parsed && parsed.state && parsed.state.theme === 'dark') theme = 'dark';
    }
  } catch (_) {
    /* light is the safe default */
  }
  var root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  root.style.backgroundColor = theme === 'dark' ? '#0B0F17' : '#F8FAFC';
})();
