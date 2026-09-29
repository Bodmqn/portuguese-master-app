self.addEventListener('install', e=>{
e.waitUntil(
caches.open('pt-lessons-v3').then(cache=>{
return cache.addAll(['index.html','data.js','manifest.json']);
})
);
});
self.addEventListener('activate', e=>{
e.waitUntil(
caches.keys().then(keys=>Promise.all(keys.filter(k=>k!=='pt-lessons-v3').map(k=>caches.delete(k))))
);
});
