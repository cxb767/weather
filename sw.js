const CACHE = 'weather-v14';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {
  // 항상 서버에서 새로 받아오고, 오프라인일 때만 캐시로 대체 (HTTP 캐시 완전 무시)
  e.respondWith(
    fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request))
  );
});
