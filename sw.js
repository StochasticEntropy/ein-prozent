// Offline-Cache: immer zuerst das Netz; ohne Verbindung die zuletzt geladenen Dateien.
const VERSION = 'ein-prozent-v22';
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap';
const CORE = ['./', 'index.html', 'css/style.css', 'js/calib.js', 'js/difficulty.js', 'js/questions.js', 'js/bank.js', 'js/audio.js', 'js/host.js', 'js/casts.js', 'js/game.js',
  'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(async c => {
    await c.addAll(CORE.map(u => new Request(u, { cache: 'no-cache' }))); // frisch vom Server, nicht aus dem Browser-Cache
    // Schriften gleich mit cachen, damit das Spiel schon beim ersten Offline-Start richtig aussieht.
    try {
      const css = await fetch(FONT_CSS, { mode: 'cors' });
      await c.put(FONT_CSS, css.clone());
      const urls = [...(await css.text()).matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]);
      await Promise.all(urls.map(u => fetch(u, { mode: 'cors' }).then(r => r.ok && c.put(u, r))));
    } catch { /* ohne Netz: Systemschrift als Rückfall */ }
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Netz zuerst (Updates kommen sofort an), Cache nur offline als Rückfall.
  e.respondWith(caches.open(VERSION).then(async cache => {
    try {
      // Eigene Dateien am Browser-Cache vorbei beim Server nachfragen (no-cache = nur bei Änderung neu laden):
      // sonst liefert der Browser nach einem Update bis zu 10 Minuten alte und neue Dateien gemischt.
      const own = new URL(e.request.url).origin === location.origin;
      const res = await fetch(own ? new Request(e.request.url, { cache: 'no-cache', credentials: 'same-origin' }) : e.request);
      const font = /fonts\.(googleapis|gstatic)\.com$/.test(new URL(e.request.url).hostname);
      if ((res.ok && (res.type === 'basic' || res.type === 'cors')) || (font && res.type === 'opaque')) cache.put(e.request, res.clone());
      return res;
    } catch {
      return (await cache.match(e.request, { ignoreSearch: true })) || (await cache.match('index.html'));
    }
  }));
});
