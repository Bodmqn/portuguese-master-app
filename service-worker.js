self.addEventListener('install', e=>{
e.waitUntil(
caches.open('pt-lessons-v4').then(cache=>{
return cache.addAll(['index.html','data.js','manifest.json','fonts/swis721-blkcn-bt.ttf']);
})
);
});
self.addEventListener('activate', e=>{
e.waitUntil(
caches.keys().then(keys=>Promise.all(keys.filter(k=>k!=='pt-lessons-v4').map(k=>caches.delete(k))))
);
});
