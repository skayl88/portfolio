!function(e){function n(n){for(var o,c,a=n[0],l=n[1],u=n[2],d=0,f=[];d<a.length;d++)c=a[d],r[c]&&f.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(s&&s(n);f.length;)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var l=t[a];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={0:0},i=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var s=l;i.push([31,1]),t()}({31:function(e,n,t){"use strict";t.r(n);t(32),t(56),t(57),t(59),t(61),t(68),t(70);(t(71),function(e,n){for(var t=n.querySelectorAll(".section").length,o=[],r=1;r<=t;r++)o.push(""+r);console.dir(o),$("#fullpage").fullpage({anchors:o,afterLoad:function(e,n,t){console.dir(e),ga("aerius_d.send","event","slide",e)}})}(window,document),/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))&&(document.querySelector(".graph").src="public/graph_1_mob.png");var o=document.querySelector(".navigation");o.addEventListener("click",function(e){var n;(e.preventDefault(),o.classList.contains("active"))?(o.classList.remove("active"),o.querySelector("img").src="public/minus.png",(n=document.querySelector(".changing-text.on")).classList.remove("on"),n.nextElementSibling.classList.add("on")):(o.classList.add("active"),o.querySelector("img").src="public/plus.png",(n=document.querySelector(".changing-text.on")).classList.remove("on"),n.previousElementSibling.classList.add("on"))}),document.querySelector(".form img").addEventListener("click",function(e){e.preventDefault();var n=document.getElementById("textForm").value;console.dir(n),ga("aerius_d.send","event","form",n)}),window.addEventListener("load",function(){var e=new IntersectionObserver(function(e){e.forEach(function(e){var n=e.isIntersecting,t=e.target;n&&(console.dir(t),t.classList.add("_visible"))})},{threshold:.2}),n=document.querySelectorAll(".section");console.dir(n),n.forEach(function(n){return e.observe(n)})}),window.addEventListener("load",function(){document.querySelectorAll(".animation").forEach(function(e){var n=e.dataset,t=n.duration,o=void 0===t?"0":t,r=n.delay,i=void 0===r?"0":r;o=o.split(", ").map(function(e){return"".concat(e,"s")}).join(","),i=i.split(", ").map(function(e){return"".concat(e,"s")}).join(","),e.style.animationDuration="".concat(o),e.style.animationDelay="".concat(i)})}),document.querySelectorAll(".question .button").forEach(function(e){e.addEventListener("click",function(n){n.preventDefault();var t=e.closest(".question");t.classList.remove("active"),t.nextElementSibling.classList.add("active")})})},70:function(e,n,t){}});
//# sourceMappingURL=app.0e7fe62c.js.map