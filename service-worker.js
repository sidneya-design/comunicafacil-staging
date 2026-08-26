const CACHE_NAME = 'comunica-pwa-v80';
const urlsToCache = [
  './',
  './app.html',
  './style.css',
  './app.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  self.skipWaiting(); // ativa a versão nova assim que instalada, sem esperar todas as abas fecharem
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Limpa caches antigos quando atualiza a versão
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // passa a controlar as abas já abertas imediatamente
  );
});

// Intercepta as requisições para retornar os arquivos do cache (Offline Mode).
// Só GET passa pelo cache — POST/PUT/PATCH/DELETE (uploads, updates, RLS
// writes) vão direto pra rede sem passar pelo Cache API, que só sabe lidar
// com GET mesmo (match() de um POST sempre retorna undefined, mas o
// fetch(event.request) de repasse de uma request com corpo binário grande,
// tipo upload de livro, pode falhar silenciosamente como "Failed to fetch"
// nesse relay). Também deixa passar direto qualquer origem que não seja a
// do próprio app (Supabase e afins) — cache offline só faz sentido pros
// arquivos estáticos do PWA.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) {
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se encontrar
        if (response) {
          return response;
        }
        // Faz a requisição se não tiver no cache
        return fetch(event.request);
      })
  );
});
