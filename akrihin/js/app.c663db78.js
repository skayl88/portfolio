!function(e){function t(t){for(var r,l,s=t[0],a=t[1],c=t[2],d=0,p=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=a;i.push([0,1]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(2);let r=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(r=!0);const o=document.querySelector("#game"),i=document.querySelector("#final"),l=document.querySelector("#start");if(l&&r){l.querySelector("#instruction").innerHTML="Успевайте кликать на&nbsp;вирусы,"}if((o||l)&&function(e,t){for(var n=t.querySelectorAll(".section").length,r=[],o=1;o<=n;o++)r.push(""+o);$("#fullpage").fullpage({scrollingSpeed:500,anchors:r,responsiveWidth:375,afterLoad:function(e,t,n){}}),$.fn.fullpage.setAllowScrolling(!1)}(window,document),o){window.addEventListener("load",e=>{s()});const e=[{points:100,width:50,height:50},{points:50,width:80,height:80},{points:25,width:100,height:100}],t=o.querySelector("#gameContainer"),n=o.querySelector("#count"),i=o.querySelectorAll(".mistake"),l=document.querySelector("#best-result");let b,y=0,v=2,w=2e3,S=!1;const x=t.clientHeight,A=t.clientWidth,L=t.getBoundingClientRect().left;function s(){let e;e=h(1,r?3:15);let n=h(1,4);b=new Array,function(e){for(var t=0;t<e;t++)c()}(e),function(){const e=document.createElement("img"),t=u();e.src="public/bomb.png",t.style.width="100px",t.style.height="100px",e.setAttribute("data-point","life"),t.firstChild.appendChild(e),b.push(t)}(),1==n&&function(){const e=document.createElement("img"),t=u();e.src="public/pack.png",t.style.width="100px",t.style.height="100px",e.setAttribute("data-point","akrihin"),t.firstChild.appendChild(e),b.push(t)}(),b.forEach(e=>{t.appendChild(e)}),function(){const e=document.querySelectorAll(".parent"),t=document.querySelectorAll(".parent .inner");let n=Math.trunc(A-L);e.forEach(e=>{let t=h(3*x/4,x);a({duration:w,timing:function(e){return e},draw:function(n){if(e.style.transform=`translateY(${-t*n}px)`,1==n){let n=parseInt(getComputedStyle(e).transform.split(",")[5]);e.style.transform=`translateY(${n}px)`,a({duration:w,timing:function(e){return e},draw:function(r){e.style.transform=`translateY(${n+r*t}px)`,1==r&&(S=!0)}})}}})}),t.forEach(e=>{let t;t=h(r?0:L,n),e.style.transform=`translateX(${t}px)`})}(),r?(console.log("mobile"),function(){let e;document.querySelectorAll("[data-point]").forEach(t=>{new Hammer(t).on("panleft panright tap press",(function(n){console.log(t);let r=t.dataset.point;e!=t&&(e=t,"life"!=r&&"akrihin"!=r?d(t):"life"==r?p(t):"akrihin"==r&&f(),setTimeout(()=>{m(t)},1e3))}))})}()):(console.log("desktop"),function(){let e;document.querySelectorAll("[data-point]").forEach(t=>{t.addEventListener("mouseover",(function(t){let n=this.dataset.point;e!=this&&(e=this,"life"!=n&&"akrihin"!=n?d(this):"life"==n?p(this):"akrihin"==n&&f(),setTimeout(()=>{m(this)},1e3))}))})}()),function(){let e=0,t=setInterval(()=>{e++,180==e&&(clearInterval(t),g("time"))},1e3)}()}function a(e){var t=performance.now();requestAnimationFrame((function n(r){var o=(r-t)/e.duration;o>1&&(o=1);var i=e.timing(o);e.draw(i),o<1&&requestAnimationFrame(n)}))}function c(){const t=u(),n=document.createElement("img"),r=e[h(0,2)];n.src=`public/microb_${h(1,5)}.png`,t.style.width=r.width+"px",t.style.height=r.height+"px",n.setAttribute("data-point",r.points),n.classList.add("microb"),t.firstChild.appendChild(n),b.push(t)}function u(){const e=document.createElement("div"),t=document.createElement("div");return t.classList.add("inner"),e.classList.add("parent"),e.appendChild(t),e}function d(e){let t=e.dataset.point;y=+t+y,e.classList.add("_destroy"),n.innerHTML=y}function p(e){i[v].src="public/cross_2.png",v-=1,o.classList.add("_quake"),setTimeout(()=>o.classList.remove("_quake"),2e3),e.src="public/explosion.png",v<0&&g("lifes")}function f(){o.classList.add("_freezing"),w=5e3,setTimeout(()=>{o.classList.remove("_freezing"),w=2e3},3e3)}function m(e){e.remove()}function h(e,t){let n=e+Math.random()*(t-e);return Math.round(n)}function g(e){document.location.href="final.html",localStorage.setItem("currentResult",y),+localStorage.getItem("bestResult")<+y&&localStorage.setItem("bestResult",+y),ga("oselt.send","event","end_game",e)}l.innerHTML=+localStorage.getItem("bestResult"),setInterval(()=>{S&&(S=!1,console.log("new"),t.innerHTML="",s(),console.log("finish"))},1e3)}if(i){const e=document.querySelector("#result"),t=document.querySelector("#record p");let n=+localStorage.getItem("currentResult"),r=+localStorage.getItem("bestResult");e.innerHTML=localStorage.getItem("currentResult"),n>r?t.innerHTML="новый рекорд!":n<r&&(t.innerHTML="Ваш результат!"),$(".carousel").on("slide.bs.carousel",(function(e){ga("oselt.send","event","slide",e.from)}));var b=new tingle.modal({footer:!1,stickyFooter:!1,closeMethods:["overlay","button","escape"],closeLabel:"Close",cssClass:["custom-class-1","custom-class-2"],onOpen:function(){console.log("modal open")},onClose:function(){console.log("modal closed")},beforeClose:function(){return!0}});document.querySelectorAll(".literature").forEach(e=>{e.addEventListener("click",e=>{b.setContent("\n        \n        <p class=\"title _md text-bold  text-transform text-grey\">\n        АКРИХИН \n      </p>\n      <p class='text-margin text-transform' style='font-size: 18px'>лидирующий российский производитель препаратов по доступной цене<sup>11</sup></p>\n      <p class=\"text-grey text-margin\">\n        * По данным за 2017 г., гриппом переболело 50 000 человек (34,8 случая на 100 000 человек населения)<sup>3</sup>.<br>\n        **Во всем мире, данные ВОЗ<sup>4</sup>.<br>\n        *** https://www.who.int/ru/news-room/detail/14-12-2017-up-to-650-000-people-die-of-respiratory-diseases-linked-to-seasonal-flu-each-year\n        <br><br>\n        1. Острая респираторная вирусная инфекция (ОРВИ) у детей. Клинические рекомендации. Москва, 2018. – 33\n        с. С. 7.<br>\n        2. Викулов Г.Х. ОРВИ, грипп и герпес: что общего и в чем разница при диагностике и терапии. Взгляд\n        клинического иммунолога и инфекциониста // Русский медицинский журнал, 2015. № 17. С. 1032–1037.<br>\n        3. Российский статистический ежегодник. 2018: Стат. сб. / Росстат. – М., 2018. – 694 с. С. 214.<br>\n        4. Грипп у взрослых. Клинические рекомендации. Москва, 2017. – 57 с. С. 10, 11, 56.<br>\n        5. Грипп у детей. Клинические рекомендации. Москва, 2017. – 43 с. С. 8.<br>\n        6. Лазарева Н.Б., Журавлева М.В., Пантелеева Л.Р. Клинико-фармакологические подходы к современной\n        противовирусной терапии гриппа // Медицинский совет, 2018. № 6. С. 50–54.<br>\n        7. Грипп у детей. Клинические рекомендации. Москва, 2017. – 43 с. 3.<br>\n        8. Сологуб Т.В., Токин И.И. Тактика ведения больных гриппом на современном этапе // Эффективная\n        фармакотерапия, 2017. № 10. С. 14–18.<br>\n        9. Инструкция по медицинскому применению лекарственного препарата Осельтамивир-Акрихин. РУ ЛП-005146.<br>\n        10. На основании сравнения со средневзвешенной ценой Тамифлю 75 мг № 10 по данным IQVIA Russia, Retail\n        MATm08 2020. Препараты, входящие в портфель «МНН-Акрихин», дешевле оригинальных ЛС с аналогичной\n        формой выпуска, количеством единиц лекформ и концентрацией действующего вещества<br>\n        11. АО «АКРИХИН» занимает 1-е место по продажам в упаковках по 10 МНН в розничном канале среди всех\n        компаний, по данным IQVIA, Russia, Retail channel, MATm08 2020.<br>\n        12. По данным IQVIA MATm05 2019, оптовые цены дистрибьюторов. Препараты, входящие в портфель\n        «МНН-Акрихин», дешевле оригинальных ЛС с аналогичной формой выпуска, количеством единиц лек. форм и\n        концентрацией действующего вещества.<br>\n        13. 19 октября 1936 года была получена первая промышленная партия Акрихина.<br>\n        14. Все производственные площадки, осуществляющие продукцию препаратов МНН-Акрихин, сертифицированы по\n        стандартам Надлежащей производственной практики GMP.<br>\n        15. АО «АКРИХИН» входит в топ-10 производителей с наиболее узнаваемыми препаратами среди провизоров\n        первого стола, по данным Ipsos Healthcare, Pharma-Q, Spring, 2018.<br>\n        16. Доля продаж АО «АКРИХИН» в рублях в сегменте CBG + МНН препаратов. Анализ произ- веден по\n        следующим МНН: ацикловир, диклофенак, клотримазол, бромгексин, ибупрофен, лоперамид, лоратадин,\n        метопролол, омепразол, флуоцинолона ацетонид. IQVIA, Russia, Retail channel, CBG/INN market, MATm08\n        2020.\n\n      </p>\n        "),b.open()})})}if(!r){const e=document.querySelector("#footer_container");let t=!1;e.addEventListener("click",n=>{t?(e.classList.remove("_hidden"),t=!1):(e.classList.add("_hidden"),t=!0)})}},function(e,t,n){}]);
//# sourceMappingURL=app.c663db78.js.map