if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const f=e=>r(e,o),d={module:{uri:o},exports:a,require:f};i[o]=Promise.all(c.map((e=>d[e]||f(e)))).then((e=>(n(...e),a)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/177.3721.js",revision:null},{url:"/473.8886.js",revision:null},{url:"/548.a8d4.js",revision:null},{url:"/android-chrome-144x144.png",revision:"5d6270233a90da121e4441b12fcad729"},{url:"/android-chrome-192x192.png",revision:"893e46184ba1226abdcc7adecb0d59af"},{url:"/android-chrome-36x36.png",revision:"7be244170f4713cca5417cb5b66df686"},{url:"/android-chrome-48x48.png",revision:"57c09b2697de06221dec45ed053618bf"},{url:"/android-chrome-512x512.png",revision:"73fb38f17b142a1fda9674976ef5d963"},{url:"/android-chrome-72x72.png",revision:"94650252672789e7f76423a6c15715f0"},{url:"/android-chrome-96x96.png",revision:"0490b61eb95c360c65ed8eca9397998c"},{url:"/app.css",revision:"251609043855f6339d236991c1249ecc"},{url:"/app.f112.js",revision:null},{url:"/apple-touch-icon-114x114.png",revision:"37133ecb25a8e55eb2fcec18b4b3329f"},{url:"/apple-touch-icon-120x120.png",revision:"bf2befc3cab4db8eeedb5e16322980e6"},{url:"/apple-touch-icon-144x144.png",revision:"a58af98af64cc3178d0ef7b419638fef"},{url:"/apple-touch-icon-152x152.png",revision:"7591779eccc8a5890ca58a4d2a9fd1d0"},{url:"/apple-touch-icon-180x180.png",revision:"9e44b47e778194dbe898388bc7626eac"},{url:"/barlow.woff2",revision:"700ab8c9fe150f2e542f2f90514e0860"},{url:"/browserconfig.xml",revision:"5255e68d0965709cd7e07b7903aecb8f"},{url:"/core.css",revision:"bb9cdb48ed6f50aa74c217cff70681a9"},{url:"/corejs.48bf.js",revision:null},{url:"/favicon-16x16.png",revision:"ad5d4f2484f6e8aabde02066125ce5c4"},{url:"/favicon-194x194.png",revision:"12af4eaa9c1d7329435be7d01b80a9cb"},{url:"/favicon-32x32.png",revision:"a37f1a3b8f6a0b3255b44458a27b2fc6"},{url:"/favicon-96x96.png",revision:"3120e85764c8846691fe4939b29a89b9"},{url:"/favicon.ico",revision:"d86bc3c174afed31422f48f8c4627b5d"},{url:"/index.html",revision:"b9b06853223b7f783e0c08c7b5f061a9"},{url:"/insights.js",revision:"8cdc92cb224274dea71a12e0367feac9"},{url:"/level/17.json",revision:"899a37cdffa552bf80a329bdfcfd4d27"},{url:"/level/18.json",revision:"a7110a860622b8b57d6de39c0ad95933"},{url:"/level/19.json",revision:"d75a169744ff09a7ef688075bcf0ae9e"},{url:"/level/20.json",revision:"b1f54e30d73c0c2b72d75e1d719d23bc"},{url:"/level/21.json",revision:"f27d6a7f52baa86c9ce6db6df609f1c3"},{url:"/level/22.json",revision:"bb20f6daecd137cd6277f83e8e1811d9"},{url:"/logo.svg",revision:"e5f9831ff8bbad40a2c9c3152b226249"},{url:"/manifest.webmanifest",revision:"c95c23bc0783fb44994b1144e0b52698"},{url:"/mstile-150x150.png",revision:"23bbd06e4c2b0f9e677ec5745483a8a7"},{url:"/mstile-310x310.png",revision:"482cd87ac5e4d4353f743fe8b9431a7a"},{url:"/mstile-70x70.png",revision:"143c2d89bebdf3a8d34f4019410859ac"},{url:"/open.woff2",revision:"9b0c6e151c40b34b5a20f95a7df9ba0a"},{url:"/sitemap.xml",revision:"c52b87af5a4d423e38dd8aaabca1e4c5"},{url:"/soodoku-free-offline-sudoku-puzzle-game.jpg",revision:"7f9fa4f5f55c76f3e3ad86317f791442"},{url:"/ubereats.jpg",revision:"01ce15703dda69bb38643dbc3d175268"}],{}),self.__WB_DISABLE_DEV_LOGS=!0}));
