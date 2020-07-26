if ('function' === typeof importScripts) {
  // this will import workbox var
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  // Global workbox
  if (workbox) {
    // Disable logging
    workbox.setConfig({ debug: true });
    workbox.core.setCacheNameDetails({
      prefix: 'weather-app-v1',
      precache: 'precache',
      runtime: 'runtime',
    });
    const { registerRoute, NavigationRoute } = workbox.routing;
    const { precacheAndRoute } = workbox.precaching;
    const { CacheFirst, StaleWhileRevalidate, NetworkOnly } = workbox.strategies;
    const { ExpirationPlugin } = workbox.expiration;

    //`generateSW` and `generateSWString` provide the option
    // to force update an exiting service worker.
    // Since we're using `injectManifest` to build SW,
    // manually overriding the skipWaiting();
    self.addEventListener('install', event => {
      event.waitUntil(caches.open('offline').then(cache => cache.add('/index.html')));
      self.skipWaiting();
    });

    // Manual injection point for manifest files.
    // All assets under build/ and 5MB sizes are precached.
    precacheAndRoute(self.__WB_MANIFEST);

    // Font caching
    registerRoute(
      /https:\/\/fonts.(?:.googlepis|gstatic).com\/(.*)'/,
      new CacheFirst({
        cacheName: 'googleapis',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 30,
          }),
        ],
      })
    );

    // Image caching, perfect for weather icons.
    registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new CacheFirst({
        cacheName: 'images',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 60,
          }),
        ],
      })
    );

    // JS, CSS caching
    registerRoute(
      /\.(?:js|css)$/,
      new CacheFirst({
        cacheName: 'static-resources',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 20 * 24 * 60 * 60, // 20 Days
          }),
        ],
      })
    );

    // Cache weather for just 15 minutes
    registerRoute(
      new RegExp('.*api.openweathermap.org/data/2.5/.*'),
      new CacheFirst({
        cacheName: 'weather',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 60 * 15,
          }),
        ],
      })
    );

    const networkOnly = new NetworkOnly();
    const navigationHandler = async params => {
      try {
        // Attempt a network request.
        return await networkOnly.handle(params);
      } catch (error) {
        // If it fails, return the cached HTML. Which is just our Weather AppShell.
        return caches.match('/index.html', {
          cacheName: 'offline',
        });
      }
    };

    // Register this strategy to handle all navigations.
    registerRoute(new NavigationRoute(navigationHandler));
  } else {
    console.error('Workbox could not be loaded. No offline support.');
  }
}
