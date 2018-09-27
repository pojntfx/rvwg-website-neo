workbox.core.setCacheNameDetails({
  prefix: "rvwg-website",
  suffix: "v1",
  precache: "precache",
  runtime: "runtime-cache"
});

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.routing.registerRoute(/\.html$/, workbox.strategies.networkFirst());
workbox.routing.registerRoute(/img/, workbox.strategies.cacheFirst());
