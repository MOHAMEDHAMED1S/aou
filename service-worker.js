const CACHE_NAME = 'game-cache-v1';
const urlsToCache = [
    'game.html',
    'game.css',
    'game.js',
   
];

// تثبيت service worker وتخزين الملفات في الكاش
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// استرجاع الملفات من الكاش عند عدم الاتصال بالإنترنت
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
