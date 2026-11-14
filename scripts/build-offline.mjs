import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? walk(`${dir}/${e.name}`) : `${dir}/${e.name}`,
      ),
    )
  ).flat();
}
const files = (await walk("dist")).filter((f) => !f.endsWith("sw.js"));
const hash = createHash("sha256");
for (const file of files) hash.update(await readFile(file));
const cache = `raizes-${hash.digest("hex").slice(0, 12)}`;
const urls = files.map((f) => "/" + f.slice(5));
urls.push("/");
await writeFile(
  "dist/sw.js",
  `const CACHE=${JSON.stringify(cache)};const URLS=${JSON.stringify(urls)};
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raizes-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request,{cacheName:CACHE,ignoreSearch:true,ignoreVary:true}).then(hit=>hit||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match('/index.html',{cacheName:CACHE,ignoreVary:true}):Response.error())))});
`,
);
console.log(`Offline: ${urls.length} recursos incluídos em ${cache}`);
