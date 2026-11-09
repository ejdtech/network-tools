/* EJD Tech theme switcher: Auto (follows the device) / Light / Dark.
   Loaded in <head> so the right theme is applied before the page is drawn (no white flash).
   The only thing stored is the word "light" or "dark" in this browser (localStorage). Nothing is sent anywhere. */
(function () {
  var KEY = 'ejd-theme';
  var root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var LABELS = {
    auto: 'Theme: Auto (follows your device). Click to change.',
    light: 'Theme: Light. Click to change.',
    dark: 'Theme: Dark. Click to change.'
  };

  function getPref() {
    try { var v = localStorage.getItem(KEY); return (v === 'light' || v === 'dark') ? v : 'auto'; }
    catch (e) { return 'auto'; }
  }
  function setPref(p) {
    try { if (p === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, p); }
    catch (e) { /* storage blocked: the choice just lasts for this page view */ }
  }
  function resolve(p) { return p === 'auto' ? (mq && mq.matches ? 'dark' : 'light') : p; }

  function apply(p) {
    var t = resolve(p);
    root.setAttribute('data-theme', t);
    root.setAttribute('data-theme-pref', p);
    var btn = document.getElementById('themeToggle');
    if (btn) { btn.setAttribute('aria-label', LABELS[p]); btn.setAttribute('title', LABELS[p]); }
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: t, pref: p } }));
  }

  var current = getPref();
  apply(current);

  if (mq) {
    var onSystem = function () { if (getPref() === 'auto') apply('auto'); };
    if (mq.addEventListener) mq.addEventListener('change', onSystem);
    else if (mq.addListener) mq.addListener(onSystem);
  }
  window.addEventListener('storage', function (e) { if (e.key === KEY) apply(getPref()); });

  document.addEventListener('DOMContentLoaded', function () {
    apply(getPref());                       // refresh the button label now that it exists
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var order = ['auto', 'light', 'dark'];
      var next = order[(order.indexOf(getPref()) + 1) % order.length];
      setPref(next);
      apply(next);
    });
  });
})();
