(()=>{"use strict";var e,r,t={8548:(e,r,t)=>{t(3948);const o=(e,r)=>9*e+r,n=e=>3*Math.floor(e/3),l=(e,r,t)=>{let{row:l,col:f}=(e=>({row:Math.floor(e/9),col:e%9}))(r);for(let r=0;r<9;++r)if(e[o(r,f)]==t)return!1;for(let r=0;r<9;++r)if(e[o(l,r)]==t)return!1;let i=n(l),s=n(f);for(let r=i;r<i+3;++r)for(let n=s;n<s+3;++n)if(e[o(r,n)]==t)return!1;return!0},f=(e,r)=>{let t=[];for(let o=1;o<=9;++o)l(e,r,o)&&t.push(o);return t},i=(e,r)=>{if(Date.now()-r>1e4)return!1;let{index:t,moves:o}=(e=>{let r,t,o=100;for(let n=0;n<81;++n)if(e&&!e[n]){let l=f(e,n);if(l.length<o&&(o=l.length,t=l,r=n,0==o))break}return{index:r,moves:t}})(e);if(null==t)return e;if(null!=o&&o.length)for(let n of o)if(e[t]=n,i(e,r))return e;return e[t]=0,!1};onmessage=e=>{let{data:r}=e;if(Array.isArray(r)&&81===r.length){const e=i(r,Date.now());postMessage(e)}else postMessage("Wrong puzzle")}}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,n.x=()=>{var e=n.O(void 0,[948],(()=>n(8548)));return n.O(e)},e=[],n.O=(r,t,o,l)=>{if(!t){var f=1/0;for(a=0;a<e.length;a++){for(var[t,o,l]=e[a],i=!0,s=0;s<t.length;s++)(!1&l||f>=l)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(i=!1,l<f&&(f=l));if(i){e.splice(a--,1);var u=o();void 0!==u&&(r=u)}}return r}l=l||0;for(var a=e.length;a>0&&e[a-1][2]>l;a--)e[a]=e[a-1];e[a]=[t,o,l]},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".51f1.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.p="/",(()=>{var e={548:1};n.f.i=(r,t)=>{e[r]||importScripts(n.p+n.u(r))};var r=self.webpackChunksudoku=self.webpackChunksudoku||[],t=r.push.bind(r);r.push=r=>{var[o,l,f]=r;for(var i in l)n.o(l,i)&&(n.m[i]=l[i]);for(f&&f(n);o.length;)e[o.pop()]=1;t(r)}})(),r=n.x,n.x=()=>n.e(948).then(r),n.x()})();