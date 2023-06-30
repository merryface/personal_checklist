/// <reference-types="@sveltejs/kit" />
import {build, files, version} from '$service-worker';

const CACHE = `cache-${version}`;
const ASSETS = [
  ...build, // app itself
  ...files, // everything else in static dir
]

self.addEventListener('install', event => {
  // Create new cahce and add all the files to it
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }
  event.waitUntil(addFilesToCache());
})

self.addEventListener('activate', event => {
  // Delete old caches
  async function deleteOldCaches() {
    const keys = await caches.keys();
    for (const key of keys) {
      if (key !== CACHE) await caches.delete(key);
    }
  }
  event.waitUntil(deleteOldCaches());
})

self.addEventListener('fetch', event => {
  // IGNORE POST REQUESTS
  if (event.request.method !== 'GET') return;
  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    if (ASSETS.includes(url.pathname)) {
      // If the request is for an asset, return it from the cache
      return await cache.match(event.request);
    }

    try {
      const response = await fetch(event.request);
      if (response.status === 200) {
        // If the request was successful, cache it
        await cache.put(event.request, response.clone());
      }
      return response
    }
    catch {
      // If the request failed, return it from the cache
      return cache.match(event.request);
    }
  }

  event.respondWith(respond());
})