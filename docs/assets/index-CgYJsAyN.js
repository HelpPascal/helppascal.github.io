(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const g=75e3,m=17067.39,w=6e3,b=document.getElementById("counter");let d=0;const l=document.getElementById("waveform-svg"),v=document.querySelector("#mask rect"),u=document.getElementById("waveform"),y=5,a=50,A=.1;let i=Array(a).fill(0),f=Array(a).fill(0);window.addEventListener("load",()=>{const e=l.clientWidth,o=e/parseFloat(l.getAttribute("viewBox").split(" ")[2]);v.setAttribute("width",e/(g/m)/o),F();const t=document.getElementById("navbar");window.addEventListener("scroll",function(){window.scrollY>50?(t.classList.add("bg-white/80","backdrop-blur","shadow","border-b","border-white/20"),t.classList.remove("text-white")):(t.classList.remove("bg-white/80","backdrop-blur","shadow","border-b","border-white/20"),t.classList.add("text-white"))})});function L(e){return e.toLocaleString("nl-BE",{minimumFractionDigits:2,maximumFractionDigits:2})}function E(e){return 1-Math.pow(1-e,5)}function F(){const e=Date.now();function o(){const t=Date.now()-e,s=Math.min(t/w,1),r=E(s);d=Math.floor(r*m*100)/100,b.textContent=L(d),s<1&&requestAnimationFrame(o)}o()}function p(){const e=Math.random()*.1+.05,o=10;for(let t=0;t<a;t++){let s=Math.sin(t*e)*8+Math.random()*o-o/2+5;f[t]=Math.max(s,.3)}}function M(e){return e.reduce((o,t,s)=>o+`V${25-t}a1.2 1.2 0 0 1 1.2 -1.2a1.2 1.2 0 0 1 1.2 1.2V${25+t}a1.2 1.2 0 0 0 1.2 1.2a1.2 1.2 0 0 0 1.2 -1.2`,"M0 25 H1 a1.2 1.2 0 0 0 1.2 -1.2")}function P(){for(let e=0;e<i.length;e++)i[e]+=(f[e]-i[e])*A}function h(){P();const e=M(i);u.innerHTML="";const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",e),l.setAttribute("viewBox",`0 0 ${a*y} 50`),u.appendChild(o);const t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",e),t.setAttribute("stroke","#558c82"),t.setAttribute("stroke-width","1.5"),t.setAttribute("fill","none"),t.setAttribute("mask","url(#mask)"),u.appendChild(t),requestAnimationFrame(h)}p();setInterval(p,4e3);requestAnimationFrame(h);
