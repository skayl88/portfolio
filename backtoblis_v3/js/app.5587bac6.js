!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=new tingle.modal({footer:!1,stickyFooter:!1,closeMethods:["button"],closeLabel:"Закрыть",cssClass:["custom-class-1","custom-class-2"],beforeOpen:function(){}});document.querySelectorAll("[data-modal]").forEach((e,t)=>{console.dir(e),e.addEventListener("click",t=>{t.preventDefault();let n=e.dataset.modal,r=document.querySelector(`#${n}`).content,c=r.cloneNode(!0);console.dir(r),e.classList.contains("modal-close")?(modal2.setContent(c),modal2.open()):(o.setContent(c),o.open())})}),function e(){const t=document.querySelector("._3");t.querySelectorAll("[data-pacient]").forEach(n=>{n.addEventListener("click",o=>{console.dir("asd");let r=n.dataset.pacient,c=document.querySelector(`#${r}`).content.cloneNode(!0),l=document.querySelectorAll("[data-section]"),a=t.innerHTML;t.innerHTML="",t.append(c),t.classList.add(r),l.forEach(n=>{if(n.dataset.section==r){n.classList.add("_active"),n.classList.add(r);let o=n.querySelector(".change-case");o&&o.addEventListener("click",n=>{l.forEach(n=>{n.classList.remove("_active"),n.classList.remove(r),t.innerHTML="",t.classList.remove(r),t.innerHTML=a,e()})})}})})})}()},function(e,t,n){}]);
//# sourceMappingURL=app.5587bac6.js.map