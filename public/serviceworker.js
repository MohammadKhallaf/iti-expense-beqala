const CACHE_NAME = "version-1"; //name of the cache ( browser storage )
const urlsToCache = ["index.html", "offline.html"]; //when app has no internet connection => to add to the cache
const self = this; // to refer to this service worker
/* 
1. install serviceworker
2. listen for requestes
3. activate the serviceworker
*/
//1
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache); // add all those files to the cache
    })
  );
});

//2
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html")); // if we cannot fetch the data.
    })
  );
});
//3
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName); // delete all caches that are not in the cache name
            
          }else{
            return false;
          }
        })
      )
    )
  );
});
