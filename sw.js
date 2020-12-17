var cacheName = 'monCache';
var contentToCache = [
    '/',
    '/index.html',
    '/script.js'
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Mise en cache globale: app shell et contenu');
        return cache.addAll(contentToCache);
      })
    );
  });
  

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => {
            console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
        return r || fetch(e.request).then((response) => {
                  return caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });