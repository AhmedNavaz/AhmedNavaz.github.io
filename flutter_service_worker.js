'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d16a3413b638ab2ad36a02cbb2746da6",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "db8c9d4fd4cf431d0b77678abe2d4f84",
"/": "db8c9d4fd4cf431d0b77678abe2d4f84",
"main.dart.js": "f3d8a997e8783cb05f634ff0e977c3b7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "96e6dd2723ef8ed8fce4e63b62ca62e6",
"assets/loading.gif": "0724884440e8ddd0896ff557b75a222a",
"assets/NOTICES": "38f140bc390e3b89666f61b6101ccfe1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "805af519ddcee570cba829439a28ab4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a21bda520c049d4a960534be482c2778",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5890502c4662602ef4b905da832a9922",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "73f147a8e3264309a688a3d7c686623d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b0fc3746fa36aa2437c13b58ddaa1d36",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7c6c32f184a28c151777522da9e8e10e",
"assets/fonts/MaterialIcons-Regular.otf": "eb481549612241d435e965e72030ab2b",
"assets/assets/images/swipe-up.png": "846619300b548b2300c6bbec310d42eb",
"assets/assets/images/mobile.gif": "a9aafa325ea3b4c4f8330a9b30fdf3cb",
"assets/assets/images/flutter.png": "3c2c6c115979778e16d1c02b6ffb9176",
"assets/assets/images/course2.png": "078d8d8677db35940a296a7983648a4a",
"assets/assets/images/course3.jpg": "5a82bbc1ee09127cc4b922d8ee028247",
"assets/assets/images/tap.png": "9766b78217b000c1e15b40c07e84e89d",
"assets/assets/images/course1.png": "09aaa2d3c8b59089677e6553b7921059",
"assets/assets/images/course4.png": "57bcd0defdddcea5c8dbe1809276fc51",
"assets/assets/images/cloud.png": "64e8c6c5bcb6ba268658c59ada740292",
"assets/assets/images/app3.gif": "8788c7ae7b3a3710ce243c9f9d451172",
"assets/assets/images/lessons/layers.png": "6d0cb6a00ba7491b23547b3b8b77b384",
"assets/assets/images/lessons/server.png": "52a01f4d047cac258ac3b8ec4b5c8fa1",
"assets/assets/images/lessons/speed.png": "c06cd3b7a3139e1ad98be001a331b0ef",
"assets/assets/images/lessons/database.png": "b175116ee28d560a64d284d0d644289b",
"assets/assets/images/lessons/research.png": "753b892d71ad1ec4d1784ee3f8af4247",
"assets/assets/images/lessons/wireframe.png": "85bed9734ac22cb3bcffe2688ee33b71",
"assets/assets/images/lessons/java.png": "dd4bb6953884e168b3cbffa23be8379b",
"assets/assets/images/lessons/android.png": "fbc1d3ff6320c94880430ad5b7f5b52e",
"assets/assets/images/lessons/statistics.png": "896ae214cd20cac8e12bfdb14f49a175",
"assets/assets/images/lessons/idea.png": "169ffe0353aaf9f8861c78b16bd1a731",
"assets/assets/images/lessons/task-list.png": "57911f54d2b5e2256db75ee715d49842",
"assets/assets/images/lessons/sun.png": "7392801b6c286b350edf0d71dac35621",
"assets/assets/images/glare.png": "f4dc088091ec445f19e2474baf1921c9",
"assets/assets/images/crown.png": "904a706b8fcf6143cf7cd1eef17e9b78",
"assets/assets/images/faces/4.jpg": "a1136c5ce7a6213edda0ea1504d2b7f2",
"assets/assets/images/faces/5.jpg": "9254c1e735aab5a7e549e9a4de5a9d3f",
"assets/assets/images/faces/6.jpg": "c4148753391cbc4157ab2eb8464783df",
"assets/assets/images/faces/2.jpg": "530fe920556c03150f1f85f192f1f68e",
"assets/assets/images/faces/3.jpg": "f245bd60f1a5adecb006b1e88fc30772",
"assets/assets/images/faces/1.jpg": "9a1d160330208e91596359031060365a",
"assets/assets/images/swipe-left.png": "8796b1ce5fea15a3d646021fe6d19656",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
