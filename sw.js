const CACHE_NAME = 'nase-calc-v2';
const assets = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/mathjs/12.3.0/math.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
  'https://cdn-icons-png.flaticon.com/512/2344/2344132.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('nase Calc: Caching Assets...');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
