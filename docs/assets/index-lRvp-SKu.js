(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g=75e3,d=19067.39,h=6e3,p=document.getElementById("counter");let l=0;const w=document.getElementById("waveform-svg"),b=document.querySelector("#mask rect");document.getElementById("waveform");const y=document.getElementById("wf-path1"),v=document.getElementById("wf-path2"),A=5,c=50,L=.1;let a=Array(c).fill(0),u=Array(c).fill(0);window.addEventListener("load",()=>{P();const t=document.getElementById("navbar"),o=document.getElementById("logo");window.addEventListener("scroll",function(){window.scrollY>50?(t.classList.add("bg-white/80","backdrop-blur","shadow","border-b","border-white/20","text-slate-700"),t.classList.remove("text-white"),o.classList.remove("hidden")):(t.classList.remove("bg-white/80","backdrop-blur","shadow","border-b","border-white/20","text-slate-700"),t.classList.add("text-white"),o.classList.add("hidden"))})});function E(t){return t.toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2})}function M(t){return 1-Math.pow(1-t,5)}function P(){const t=Date.now();function o(){const n=Date.now()-t,s=Math.min(n/h,1),e=M(s);l=Math.floor(e*d*100)/100,p.textContent=E(l);const r=100/(g/d),i=Math.floor(e*r*100)/100;b.setAttribute("width",`${i*1.02}%`),s<1&&requestAnimationFrame(o)}o()}function m(){const t=Math.random()*.1+.05,o=10;for(let n=0;n<c;n++){let s=Math.sin(n*t)*8+Math.random()*o-o/2+5;u[n]=Math.max(s,.3)}}function B(t){return t.reduce((o,n,s)=>o+`V${25-n}a1.2 1.2 0 0 1 1.2 -1.2a1.2 1.2 0 0 1 1.2 1.2V${25+n}a1.2 1.2 0 0 0 1.2 1.2a1.2 1.2 0 0 0 1.2 -1.2`,"M0 25 H1 a1.2 1.2 0 0 0 1.2 -1.2")}function I(){for(let t=0;t<a.length;t++)a[t]+=(u[t]-a[t])*L}function f(){I();const t=B(a);y.setAttribute("d",t),w.setAttribute("viewBox",`0 0 ${c*A} 50`),v.setAttribute("d",t),requestAnimationFrame(f)}m();setInterval(m,4e3);requestAnimationFrame(f);
