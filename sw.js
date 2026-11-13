/* My Agent — service worker. Caches the app shell so the app opens offline.
   Only works over http(s). On file:// the registration fails quietly and the app still works. */
var CACHE_NAME = 'my-agent-v1';
self.addEventListener('install', function (e) { e.waitUntil(self.skipWaiting()); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (c) { c.put(e.request, copy); }).catch(function () {});
        return res;
      });
    }).catch(function () { return caches.match(e.request); })
  );
});
