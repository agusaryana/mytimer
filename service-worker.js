self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("my-timer-cache").then((cache) => {
      return cache.addAll([
        "./index.html",
        "./style.css", // kalau ada
        "./script.js", // kalau ada
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
