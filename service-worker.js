const CACHE_NAME = 'avent-eloine-v1';

// On définit les fichiers de base
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './main.css',
    './main.js',
    './manifest.json',
    './images/icon-192x192.png',
    './images/icon-512x512.png'
];

// MODIFICATION : On ajoute les images 1.jpg à 24.jpg automatiquement via une boucle
for (let i = 1; i <= 24; i++) {
    ASSETS_TO_CACHE.push(`./images/${i}.jpg`);
}

// Installation et mise en cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Fichiers mis en cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Interception des requêtes (Mode Hors Ligne)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Retourne le cache si trouvé, sinon fait la requête réseau
                return response || fetch(event.request);
            })
    );
});