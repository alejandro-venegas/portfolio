(()=>{var e={592:()=>{const e=document.querySelector("nav"),t=document.querySelector(".empty-spacer"),n=()=>{document.documentElement.style.setProperty("--screenHeight",`${window.innerHeight}px`),t.setAttribute("style",`height: calc(var(--screenHeight) - ${e.clientHeight}px - 10px)`)};window.addEventListener("resize",n),n(),"iOS"===function(){const e=window.navigator.userAgent,t=window.navigator.platform;let n=null;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?n="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(t)?n="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?n="Windows":/Android/.test(e)?n="Android":!n&&/Linux/.test(t)&&(n="Linux"),n}()&&document.querySelectorAll(".parallax .wrapper").forEach((e=>{e.setAttribute("style","position: -webkit-sticky")}))}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(592)})()})();