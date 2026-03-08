const CACHE_NAME = "tekkabuzz-v2";

const PRECACHE_URLS = [
  "/",
  "/images/tekkabuzz-logo-cropped.png",
  "/images/tekka-buzz-hero.png",
  "/images/games/arcade.png",
  "/images/games/casino.png",
  "/images/games/crash.png",
  "/images/games/fishing.png",
  "/images/games/lottery.png",
  "/images/games/slot.png",
  "/images/games/sport.png",
  "/images/games/table.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache images aggressively (cache-first)
  if (/\.(png|jpg|jpeg|webp|svg|ico|gif)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // Cache fonts aggressively (cache-first)
  if (/\.(woff2?|ttf|otf|eot)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // Cache CSS/JS with stale-while-revalidate
  if (/\.(css|js)$/i.test(url.pathname) && url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) => {
          const fetchPromise = fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // Network first for HTML
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
