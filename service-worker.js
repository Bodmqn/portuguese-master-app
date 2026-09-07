self.addEventListener('install', e=>{
e.waitUntil(
caches.open('br-portuguese-v7').then(cache=>{
return cache.addAll(['index.html','data.js','manifest.json']);
})
);
});
self.addEventListener('activate', e=>{
e.waitUntil(
caches.keys().then(keys=>Promise.all(keys.filter(k=>k!=='br-portuguese-v7').map(k=>caches.delete(k))))
);
});
