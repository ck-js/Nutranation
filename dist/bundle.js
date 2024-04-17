(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>m});var o=e(601),a=e.n(o),r=e(314),i=e.n(r),c=e(417),d=e.n(c),s=new URL(e(570),e.b),l=i()(a()),p=d()(s);l.push([n.id,`* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n\n@font-face {\n    font-family: 'montserat-extra-bold';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 800;\n    font-stretch: 1% 100%;\n}\n@font-face {\n    font-family: 'montserat-extra-thin';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 300;\n    font-stretch: 1% 100%;\n}\n:root {\n--mobile-small-spacing: 50px;\n\n    --mobile-anchor-padding: 10px 40px;\n\n--mobile-title-font-size: 1.8rem;\n\n--extra-bold-montserat-font: montserat-extra-bold;\n--extra-thin-montserat-font: montserat-extra-thin;\n\n    --white-font-color: #FFFF;\n    --dark-gray-font-color: #464646;\n    --full-black-font-color: #000000;\n    --turquoise-font-color: #01E8BB;\n    --white-smoke-font-color: #f4f4f4;\n    --light-gray-font-color: #b4b4b4;\n    font-size: 16px;\n\n}\n\nbody {\nbackground-color: var(--light-gray-font-color);\ncolor: var(--full-black-font-color);\nfont-family: var(--extra-bold-montserat-font);\npadding: 0;\nmargin: 0;\nbox-sizing: border-box;\n\n\n}\n/* #content {\n    \n} */\n\n\n\n@media (max-width:760px) {\nbody {\n    background-color: var(--turquoise-font-color);\n    height: 8000px;\n\n}    \nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    /* margin-bottom: 1rem; */\n    padding-top: 10px;\n    background-color: var(--white-smoke-font-color);\n  }\nnav {\n    width: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-between;\nmargin-bottom: 1rem;\n/* border: 3px solid white; */\n}\n#wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    /* border: 3px solid black; */\n    \n\n}\n#nav-logo-container {\n    margin: 0 auto;\n\n}\n.menu-icon {\n    \n    padding-right: 20px;\n    border: none;\n    background-color: var(--turquoise-font-color);\n    cursor: pointer;\n    font-size: var(--mobile-title-font-size);\n\n}\n.nav-items {\n    display: none;\n    flex-direction: column;\n    margin-top: 3rem;\n  }\n.nav-items li {\n    list-style-type: none;\n    /* display: none; */\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n    font-family: var(--extra-thin-montserat-font);\n    color: var(--full-black-font-color);\n}\n.nav-items li a {\n    margin-right: 1rem;\n    text-decoration: none;\n    color: var(--full-black-font-color);\n  }\n.nav-items-open {\ndisplay: block;\n\n}\n.titles {\n    width: 15ch;\n    text-transform: uppercase;\n\n}\n.paragraph-text {\n    color: var(--dark-gray-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    width: 30ch;\n}\n\n.sections-parent {\n    height: auto;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n/* border: 20px solid black; */\nbackground-color: var(--white-smoke-font-color);\npadding-bottom: var(--mobile-small-spacing);\n}\n.mobile-image-wrapper {\n    \n    width: 100%;\n    \n}\n.mobile-image-wrapper img {\n    width: 100%;\nheight: auto;\n\n}\n#span-3 {\n    background-color: var(--turquoise-font-color);\n}\n.anchor-buttons {\n    color: var(--white-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    background-color: var(--full-black-font-color);\n    padding: var(--mobile-anchor-padding);\n\n}\n#section-2-parent-container {\n\n\n}\n#section-2-title {\n    width: 18ch;\n    \n}\n\n\n#section-2-paragraph-container {\n    /* border: 3px solid black; */\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\noverflow: hidden;\n\n}\n.paragraph-titles {\n    background-color: var(--turquoise-font-color);\n    color: var(--full-black-font-color);\n    font-family: var(--extra-bold-montserat-font);\n    text-transform: uppercase;\n    padding:5px 50px;\n    margin-bottom: -10px;\n}\n.paragraph-texts {\n    text-transform: uppercase;\n    font-family: var(--extra-thin-montserat-font);\n    color: var(--full-black-font-color);\n}\n#section-3-title {\n    width: 20ch;\n    margin-bottom: 50px;\n}\n#section-3-cards-container {\n    \n}\n.card-items {\n    /* text-align: left; */\n    background-color: var(--white-smoke-font-color);\n    text-align: left;\n    padding: 10px 20px;\n    margin-bottom: 40px;\n    flex-shrink: 2;\n    overflow-wrap: break-word;\n    overflow: hidden;\n}\n.card-titles {\ntext-transform: uppercase;\n}\n.card-paragraphs {\n    color: var(--full-black-font-color);\nfont-family: var(--extra-thin-montserat-font);\nwidth: 35ch;\n}\n#section-4-title {\n    width: 20ch;\n}\nfooter {\n    background-color: var(--full-black-font-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n}\n#nav-2 {\n    /* border: 3px solid white; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--white-font-color);\n    text-align: center;\n    padding: 50px 0;\n}\n#nav-2 h4 {\n    margin-bottom: 5px;\n}\n#nav-items-2 {\n    /* border: 3px solid white; */\n    padding-left: 0;\n}\n\n#nav-items-2 li {\nlist-style-type: none;\nmargin-bottom: 10px;\n}\n\n#nav-items-2 li a {\ntext-decoration: none;\ncolor: var(--white-font-color);\nfont-family: var(--extra-thin-montserat-font);\n\n}\nhr {\ncolor: var(--white-font-color);\nbackground-color: var(--white-font-color);\nwidth: 200px;\n\n}\n\n\nfooter p {\n    color: var(--white-font-color);\n}\n\n\n}\n@media (max-width:360px) {\nbody {\n    background-color: var(--full-black-font-color);\n}\n\n.titles {\n    width: 10ch;\n    text-transform: uppercase;\n\n}\n.paragraph-text {\n    color: var(--dark-gray-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    width: 25ch;\n}\n\n\n#section-2-title {\n    width: 12ch;\n}\n#section-3-title {\n    width: 12ch;\n}\n.card-titles {\n    width: 10ch;\n}\n.card-paragraphs {\n    width: 20ch;\n}\n\n\n\n}`,""]);const m=l},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var m=e(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=e(r[i]);t[c].references--}for(var d=o(n,a),s=0;s<r.length;s++){var l=e(r[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},570:(n,t,e)=>{n.exports=e.p+"7e687123cd4528224ce5.ttf"}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{const n=e.p+"342e36a86dda178cf4e0.png",t=e.p+"b39f95fc6aefa13c2824.png",o=e.p+"93b752f0134a35c4e421.jpg",a=e.p+"c38255faf224be779fef.png",r=e.p+"af13b9181858eb494b80.png",i=e.p+"0e77f87c72fa65548b35.png",c=e.p+"4313dccf19cd400d5c2e.png",d=e.p+"53ec4ca3d603dd3e44d6.png";var s=e(72),l=e.n(s),p=e(825),m=e.n(p),u=e(659),h=e.n(u),f=e(56),g=e.n(f),v=e(540),x=e.n(v),b=e(113),C=e.n(b),w=e(208),y={};y.styleTagTransform=C(),y.setAttributes=g(),y.insert=h().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=x(),l()(w.A,y),w.A&&w.A.locals&&w.A.locals,document.body;const E=document.getElementById("content");E.appendChild(function(){const t=document.createElement("header"),e=document.createElement("nav"),o=document.createElement("div");o.id="wrapper";const a=document.createElement("div");a.id="nav-logo-container";const r=new Image;r.src=n,r.alt="turquoise and black bold Nutra Nation logo in capital letters",a.appendChild(r);const i=document.createElement("button");i.classList.add("menu-icon"),i.textContent="menu",o.appendChild(a),o.appendChild(i);const c=document.createElement("ul");c.classList.add("nav-items");const d=document.createElement("li"),s=document.createElement("a");s.href="#",s.textContent="process",d.appendChild(s);const l=document.createElement("li"),p=document.createElement("a");p.href="#",p.textContent="about",l.appendChild(p);const m=document.createElement("li"),u=document.createElement("a");u.href="#",u.textContent="team",m.appendChild(u);const h=document.createElement("li"),f=document.createElement("a");return f.href="#",f.textContent="contact",h.appendChild(f),c.appendChild(d),c.appendChild(l),c.appendChild(m),c.appendChild(h),i.addEventListener("click",(n=>{const t=document.querySelector(".nav-items");t.classList.toggle("nav-items-open");const e=document.querySelector(".nav-items-open");e&&e.addEventListener("click",(()=>{t.classList.remove("nav-items-open")}))})),o.appendChild(a),o.appendChild(i),e.appendChild(o),e.appendChild(c),t.appendChild(e),t}()),E.appendChild(function(){const n=document.createElement("div");n.id="section-1-parent-container",n.classList.add("sections-parent");const t=document.createElement("div");t.classList.add("mobile-image-wrapper");const e=new Image;e.src=o,e.alt="caucasion portrait of a healthy women with blue eyes and blond brunette hair with a big smile",t.appendChild(e);const a=document.createElement("h1");a.classList.add("titles"),a.textContent="we are igniting innovative brands",function(n,t){const e=t.textContent.split(" ");for(let n=0;n<e.length;n++)if("innovative"===e[n]){const t=document.createElement("span");t.textContent=e[n],t.id="span-"+n,e[n]=t.outerHTML}t.innerHTML=e.join(" ")}(0,a);const r=document.createElement("p");r.classList.add("paragraph-text"),r.textContent="We are shaping the global nutrition market with pioneering solutions.";const i=document.createElement("p");i.classList.add("paragraph-text"),i.textContent="At Nutranation, we're redefining the standard for high-quality direct-to-customers nutrition brands worldwide.";const c=document.createElement("a");return c.classList.add("anchor-buttons"),c.textContent="contact us",n.appendChild(t),n.appendChild(a),n.appendChild(r),n.appendChild(i),n.appendChild(c),n}()),E.appendChild(function(){const n=document.createElement("div");n.id="section-2-parent-container",n.classList.add("sections-parent");const t=document.createElement("h1");t.id="section-2-title",t.classList.add("titles"),t.textContent="we always reach out for the top";const e=document.createElement("div");e.id="section-2-paragraph-container";const o=document.createElement("p");o.id="section-2-p1",o.classList.add("paragraph-titles"),o.textContent="> 50 brands";const a=document.createElement("p");a.id="section-2-p2",a.classList.add("paragraph-texts"),a.textContent="launched";const r=document.createElement("p");r.id="section-2-p3",r.classList.add("paragraph-titles"),r.textContent="+ 5.000.000";const i=document.createElement("p");i.id="section-2-p4",i.classList.add("paragraph-texts"),i.textContent="customers";const c=document.createElement("p");c.id="section-2-p5",c.classList.add("paragraph-titles"),c.textContent="more than 15";const d=document.createElement("p");return d.id="section-2-p6",d.classList.add("paragraph-texts"),d.textContent="countries",e.appendChild(o),e.appendChild(a),e.appendChild(r),e.appendChild(i),e.appendChild(c),e.appendChild(d),n.appendChild(t),n.appendChild(e),n}()),E.appendChild(function(){const n=document.createElement("div");n.id="section-3-parent-container",n.classList.add("sections-parent");const t=document.createElement("h1");t.id="section-3-title",t.classList.add("titles"),t.textContent="holistic product development approach";const e=document.createElement("div");e.id="section-3-cards-container";const o=document.createElement("div");o.classList.add("card-items");const c=new Image;c.src=a,c.alt="blueish green screen icon with settings icon on top right";const d=document.createElement("h2");d.classList.add("card-titles"),d.textContent="product web development";const s=document.createElement("p");s.classList.add("card-paragraphs"),s.textContent="Revolutionizing lifestyles, Nutranation crafts brands from the essence of women's everyday realities. Our real-time development process fosters dynamism, creativity, and personalized solutions.";const l=document.createElement("div");l.classList.add("card-items");const p=new Image;p.src=r,p.alt="blueish green screen icon with settings icon on top right";const m=document.createElement("h2");m.classList.add("card-titles"),m.textContent="branding & design";const u=document.createElement("p");u.classList.add("card-paragraphs"),u.textContent="As our brand evolves, our creative team springs into action, unlocking the latent potential of our products to sculpt captivating brands. From conception to completion, it's all made from us.";const h=document.createElement("div");h.classList.add("card-items");const f=new Image;f.src=i,f.alt="blueish green screen icon with settings icon on top right";const g=document.createElement("h2");g.classList.add("card-titles"),g.textContent="performance marketing";const v=document.createElement("p");return v.classList.add("card-paragraphs"),v.textContent="In anticipation of the product and brand launch, we meticulously craft our marketing strategy. Our continuous process of performance marketing optimisation fuels the creation of impactful advertising campaigns.",o.appendChild(c),o.appendChild(d),o.appendChild(s),l.appendChild(p),l.appendChild(m),l.appendChild(u),h.appendChild(f),h.appendChild(g),h.appendChild(v),e.appendChild(o),e.appendChild(l),e.appendChild(h),n.appendChild(t),n.appendChild(e),n}()),E.appendChild(function(){const n=document.createElement("div");n.id="section-4-parent-container",n.classList.add("sections-parent");const t=document.createElement("div");t.classList.add("mobile-image-wrapper");const e=new Image;e.src=c,e.alt="athletic women working on a laptop",t.appendChild(e);const o=document.createElement("h1");o.id="section-4-title",o.classList.add("titles"),o.textContent="holistic product development approach";const a=document.createElement("p");a.classList.add("paragraph-text"),a.textContent="Our triumph stems from enhancing the lives of our customers, a mission driving every facet of our operation.";const r=document.createElement("p");return r.classList.add("paragraph-text"),r.textContent="We relentlessly refine our processes, scrutinizing every detail to deliver unparalleled quality.",n.appendChild(t),n.appendChild(o),n.appendChild(a),n.appendChild(r),n}()),E.appendChild(function(){const n=document.createElement("div");n.id="section-5-parent-container",n.classList.add("sections-parent");const t=document.createElement("div");t.classList.add("mobile-image-wrapper");const e=new Image;e.src=d,e.alt="athletic women working on a laptop",t.appendChild(e);const o=document.createElement("h1");o.id="section-5-title",o.classList.add("titles"),o.textContent="we stand as a worldwide force spanning continents";const a=document.createElement("p");a.classList.add("paragraph-text"),a.textContent="Our international company embodies modernity, fostering a diverse and collaborative team environment.";const r=document.createElement("p");return r.classList.add("paragraph-text"),r.textContent="With offices worldwide, we offer unmatched opportunities for professional growth and cross-cultural engagement.",n.appendChild(t),n.appendChild(o),n.appendChild(a),n.appendChild(r),n}()),E.appendChild(function(){const n=document.createElement("div");n.id="section-6-parent-container",n.classList.add("sections-parent");const t=document.createElement("h1");t.id="section-6-title",t.classList.add("titles"),t.textContent="we're on the hunt for exceptional talent";const e=document.createElement("p");e.classList.add("paragraph-text"),e.textContent="Are you ready to shine? Are you passionate about solving challenges, driving brand creation from inception to fruition? Join our team of trailblazers. Get in touch today.";const o=document.createElement("a");return o.classList.add("anchor-buttons"),o.textContent="apply now",n.appendChild(t),n.appendChild(e),n.appendChild(o),n}()),E.appendChild(function(){const n=document.createElement("footer"),e=document.createElement("nav");e.id="nav-2";const o=document.createElement("h4");o.textContent="Website";const a=document.createElement("ul");a.id="nav-items-2";const r=document.createElement("li"),i=document.createElement("a");i.href="#",i.textContent="process",r.appendChild(i);const c=document.createElement("li"),d=document.createElement("a");d.href="#",d.textContent="about",c.appendChild(d);const s=document.createElement("li"),l=document.createElement("a");l.href="#",l.textContent="team",s.appendChild(l),a.appendChild(r),a.appendChild(c),a.appendChild(s);const p=document.createElement("h4");p.textContent="Information";const m=document.createElement("ul");m.id="nav-items-2";const u=document.createElement("li"),h=document.createElement("a");h.href="#",h.textContent="process",u.appendChild(h);const f=document.createElement("li"),g=document.createElement("a");g.href="#",g.textContent="about",f.appendChild(g);const v=document.createElement("li"),x=document.createElement("a");x.href="#",x.textContent="team",v.appendChild(x),m.appendChild(u),m.appendChild(f),m.appendChild(v),e.appendChild(o),e.appendChild(a),e.appendChild(p),e.appendChild(m);const b=document.createElement("div");b.id="nav-logo-container";const C=new Image;C.src=t,b.appendChild(C);const w=document.createElement("hr"),y=document.createElement("p");return y.textContent="Copyright 2024 Nutranation LLC",n.appendChild(e),n.appendChild(b),n.appendChild(w),n.appendChild(y),n}())})()})();