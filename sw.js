self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('airhorner').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/static/css/main.css',
                '/static/js/main.js',
                '/static/media/acura.png',
                '/static/media/audi.png',
                '/static/media/bmw.png',
                '/static/media/buick.png',
                '/static/media/cadillac.png',
                '/static/media/chevrolet.png',
                '/static/media/chrysler.png',
                '/static/media/dodge.png',
                '/static/media/ford.png',
                '/static/media/honda.png',
                '/static/media/hummer.png',
                '/static/media/hyundai.png',
                '/static/media/infiniti.png',
                '/static/media/jaguar.png',
                '/static/media/jeep.png',
                '/static/media/kia.png',
                '/static/media/lexus.png',
                '/static/media/mazda.png',
                '/static/media/mercedes-benz.png',
                '/static/media/mini.png',
                '/static/media/mitsubishi.png',
                '/static/media/nissan.png',
                '/static/media/saab.png',
                '/static/media/subaru.png',
                '/static/media/suzuki.png',
                '/static/media/toyota.png',
                '/static/media/volkswagen.png',
                '/static/media/volvo.png'
            ])
                .then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
