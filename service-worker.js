if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,o)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let s={};const c=e=>r(e,f),d={module:{uri:f},exports:s,require:c};i[f]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(o(...e),s)))}}define(["./workbox-6db16f92"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/418.c189.js",revision:null},{url:"/548.5d37.js",revision:null},{url:"/android-chrome-128x128.png",revision:"a4e62381f7747b25eae9a484981dc510"},{url:"/android-chrome-192x192.png",revision:"4103ff2038d9db47ad113a6785856844"},{url:"/android-chrome-512x512.png",revision:"532fcda01f9f6172bdc7e5a90944fa5d"},{url:"/app.c36b.js",revision:null},{url:"/app.css",revision:"686313c8fc949ad931b85628d5982009"},{url:"/apple-touch-icon.png",revision:"7a18f90af990ee98cd6407d457477794"},{url:"/barlow.woff2",revision:"700ab8c9fe150f2e542f2f90514e0860"},{url:"/core.5451.js",revision:null},{url:"/core.css",revision:"49faac6bbbc2525b7852392ae2fe5476"},{url:"/favicon-32x32.png",revision:"e2c2d4204c5b57bd17d97df0074f7fa9"},{url:"/favicon.ico",revision:"75f6756075454a104f1a6e75459114c8"},{url:"/flight.webp",revision:"682862d70caab3b24d3e3d160677fe2b"},{url:"/icon.svg",revision:"f65874ec85611af876f27cc935139ff4"},{url:"/index.html",revision:"f447adad2250cae583ea8c208d29b93e"},{url:"/insights.js",revision:"a12c0b980880aaec4f0816f7662e8749"},{url:"/level/0.json",revision:"77eb95342a1715daa52e176dfa080300"},{url:"/libs.f2da.js",revision:null},{url:"/manifest.webmanifest",revision:"8106e5a47d64d282edb252018c14c300"},{url:"/night.webp",revision:"9d610d94fbf183f98334f71a10e3d8c3"},{url:"/open.woff2",revision:"e80d0d67f9b2de529f6c54fb23b48e5a"}],{}),e.cleanupOutdatedCaches(),self.__WB_DISABLE_DEV_LOGS=!0}));
