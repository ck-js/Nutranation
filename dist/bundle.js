(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var o=t(601),a=t.n(o),r=t(314),i=t.n(r),c=t(417),s=t.n(c),d=new URL(t(570),t.b),l=i()(a()),p=s()(d);l.push([n.id,`* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'montserat-extra-bold';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 800;\n    font-stretch: 1% 100%;\n}\n@font-face {\n    font-family: 'montserat-extra-thin';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 300;\n    font-stretch: 1% 100%;\n}\n:root {\n\n--desktop-small-spacing: 50px;\n\n--desktop-text-font-size: calc(8px + 0.75vw);;\n\n    --mobile-EXTRA-small-spacing: 25px;\n--mobile-small-spacing: 50px;\n\n    --mobile-anchor-padding: 10px 40px;\n\n--mobile-title-font-size: 1.8rem;\n\n--extra-bold-montserat-font: montserat-extra-bold;\n--extra-thin-montserat-font: montserat-extra-thin;\n\n    --white-font-color: #FFFF;\n    --dark-gray-font-color: #464646;\n    --full-black-font-color: #000000;\n    --turquoise-font-color: #01E8BB;\n    --white-smoke-font-color: #f4f4f4;\n    --light-gray-font-color: #b4b4b4;\n    font-size: 16px;\n\n}\n  \n\n\n@media (max-width:767px) {\nbody {\n    /* background-color: var(--turquoise-font-color); */\n    background-color: var(--white-font-color);\n    \n\n}    \nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    /* margin-bottom: 1rem; */\n    padding-top: 10px;\n    background-color: var(--white-smoke-font-color);\n  }\nnav {\n    width: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-between;\nmargin-bottom: 1rem;\n/* border: 3px solid white; */\n}\n#wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    /* border: 3px solid black; */\n    \n\n}\n#nav-logo-container {\n    margin: 0 auto;\n\n}\n.menu-icon {    \n    padding-right: 10px;\n    /* border: 2px solid black; */\n    border: none;\n    /* background-color: var(--turquoise-font-color); */\n    background-color: var(--white-font-color);\n    cursor: pointer;\n    font-size: var(--mobile-title-font-size);\ndisplay: block;\n}\n.menu-icon img {\n    width: 50px;\n    display: block;\n}\n.nav-items {\n    display: none;\n    flex-direction: column;\n    margin-top: 3rem;\n  }\n.nav-items li {\n    list-style-type: none;\n    /* display: none; */\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n    font-family: var(--extra-thin-montserat-font);\n    color: var(--full-black-font-color);\n}\n.nav-items li a {\n    margin-right: 1rem;\n    text-decoration: none;\n    color: var(--full-black-font-color);\n  }\n.nav-items-open {\ndisplay: block;\n\n}\n#nav-anchor-button {\n    display: none;\n}\n\n.titles {\n    width: 15ch;\n    text-transform: uppercase;\nfont-family: var(--extra-bold-montserat-font);\n}\n.paragraph-text {\n    color: var(--dark-gray-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    width: 30ch;\n}\n.sections-parent {\n    height: auto;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n/* border: 20px solid black; */\nrow-gap: var(--mobile-EXTRA-small-spacing);\nbackground-color: var(--white-smoke-font-color);\npadding-bottom: var(--mobile-small-spacing);\nmargin-bottom: var(--mobile-small-spacing);\n}\n.mobile-image-wrapper {\n    \n    width: 100%;\n    \n}\n.mobile-image-wrapper img {\n    width: 100%;\nheight: auto;\n\n}\n#span-3 {\n    background-color: var(--turquoise-font-color);\n}\n.anchor-buttons {\n    color: var(--white-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    background-color: var(--full-black-font-color);\n    padding: var(--mobile-anchor-padding);\ntext-transform: uppercase;\ncursor: pointer;\n}\n#section-1-mobile-image-wrapper {\n    display: block;\n    \n}\n#section-1-desktop-image-wrapper {\n    display: none;\n}\n\n\n#SECTION-1-PARENT-CONTAINER {\nrow-gap: 200PX;\npadding: 0;\n\n}\n\n\n#section-2-title {\n    width: 18ch;\n    \n}\n\n\n#section-2-paragraph-container {\n    /* border: 3px solid black; */\n    /* width: 80%; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\noverflow: hidden;\n\n}\n.paragraph-titles {\n    background-color: var(--turquoise-font-color);\n    color: var(--full-black-font-color);\n    font-family: var(--extra-bold-montserat-font);\n    text-transform: uppercase;\n    padding:5px 50px;\n    margin-bottom: 2px;\n}\n.paragraph-texts {\n    text-transform: uppercase;\n    font-family: var(--extra-thin-montserat-font);\n    color: var(--full-black-font-color);\n    margin-bottom: 10px;\n}\n#section-3-parent-container {\n\n\n}\n#section-3-title {\n    width: 20ch;\n    margin-bottom: var(--mobile-EXTRA-small-spacing);\n}\n#section-3-cards-container {\n    \n}\n.card-items {\n    /* text-align: left; */\n    background-color: var(--white-smoke-font-color);\n    text-align: left;\n    padding: 10px 20px;\n    margin-bottom: 40px;\n    display: flex;\n    flex-direction: column;\njustify-content: center;\nalign-items: start;\n    flex-shrink: 2;\n    overflow-wrap: break-word;\n    overflow: hidden;\n    row-gap: 4px;\n}\n.card-items img  {\n    width: 100PX;\n}\n.card-titles {\ntext-transform: uppercase;\n}\n.card-paragraphs {\n    color: var(--full-black-font-color);\nfont-family: var(--extra-thin-montserat-font);\nwidth: 35ch;\n}\n#section-4-title {\n    width: 20ch;\n}\nfooter {\n    background-color: var(--full-black-font-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\npadding: 50px 0;\n}\n#nav-2 {\n    /* border: 3px solid white; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--white-font-color);\n    text-align: center;\n    padding: 50px 0;\n}\n#nav-2 h4 {\n    margin-bottom: 5px;\n}\n#nav-items-2 {\n    /* border: 3px solid white; */\n    padding-left: 0;\n}\n\n#nav-items-2 li {\nlist-style-type: none;\nmargin-bottom: 10px;\n}\n\n#nav-items-2 li a {\ntext-decoration: none;\ncolor: var(--white-font-color);\nfont-family: var(--extra-thin-montserat-font);\n\n}\nhr {\ncolor: var(--white-font-color);\nbackground-color: var(--white-font-color);\nwidth: 200px;\nmargin: 20px 0;\n\n}\n\n\nfooter p {\n    color: var(--white-font-color);\n}\n\n\n}\n@media (min-width: 768px) {\n    body {\n        background-color: var(--light-gray-font-color);\n        color: var(--full-black-font-color);\n        font-family: var(--extra-bold-montserat-font);\n        /* font-size: var(--desktop-text-font-size); */\n        font-size: var(--desktop-text-font-size);\n        height: 8000px;\n        \n        }\n        /* #content {\n            \n        } */\n        \n        header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            flex-direction: row;\n            /* margin-bottom: 1rem; */\n            padding-top: 10px;\n            background-color: var(--white-smoke-font-color);\n            padding: 25px 25px 15px;\n          }\n          nav {\n            width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        \n        /* border: 3px solid black; */\n        }\n        #wrapper {\n        /*     \n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center; */\n            /* border: 3px solid black; */\n            \n        \n        }\n        #nav-logo-container {\n            /* margin: 0 auto; */\n        \n        }\n        .menu-icon {    \n            display: none;\n            padding-right: 10px;\n            /* border: 2px solid black; */\n            border: none;\n            /* background-color: var(--turquoise-font-color); */\n            background-color: var(--white-font-color);\n            cursor: pointer;\n            font-size: var(--mobile-title-font-size);\n            \n        }\n        .menu-icon img {\n            width: 50px;\n            display: none;\n        }\n        .nav-items {\n            /* border: 3px solid black; */\n            display: flex;\n            flex-direction: row;\n            /* justify-content: center;\n            align-items: center; */\n            column-gap: 2rem   ;\n            margin:  0 20px 0 auto;\n          }\n        .nav-items li {\n            list-style-type: none;\n            /* display: none; */\n            /* margin-bottom: 1rem; */\n            text-transform: uppercase;\n            font-family: var(--extra-thin-montserat-font);\n            color: var(--full-black-font-color);\n        }\n        .nav-items li a {\n            \n            text-decoration: none;\n            color: var(--full-black-font-color);\n          }\n          #nav-anchor-button {\n            display: block;\n        }\n        .anchor-buttons {\n            color: var(--white-font-color);\n            font-family: var(--extra-thin-montserat-font);\n            background-color: var(--full-black-font-color);\n            padding: var(--mobile-anchor-padding);\n        text-transform: uppercase;\n        cursor: pointer;\n        text-align: center;\n        flex-shrink: 2;\n        }\n        .titles {\n            width: 15ch;\n            text-transform: uppercase;\n        \n        }\n        .paragraph-text {\n            color: var(--dark-gray-font-color);\n            font-family: var(--extra-thin-montserat-font);\n            font-size: var(--desktop-text-font-size);\n            width: 30ch;\n        }\n        .sections-parent {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: start;\n        row-gap: 15px;\n        \n        }\n        #section-1-parent-container {\n        padding: 200px 50px;\n        background-size: cover;\n        background-position: center;\n        \n        }\n#section-1-mobile-image-wrapper {\n            display: none;\n        \n        }\n        #section-1-parent-container h1 {\n            color: var(--white-font-color);\n            width: 18ch;\n            \n        }\n        #span-3 {\n            color: var(--full-black-font-color);\n            background-color: var(--turquoise-font-color);\n        }\n        #section-1-parent-container p {\n            color: var(--white-font-color);\n            width: 40ch;\n        }\n.anchor-buttons {\n    margin-top: 25px;\n}\n\n#section-2-parent-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\npadding: 50px 0;\nborder: 3px solid black;\n}\n\n#section-2-title {\n    width: 40ch;\n    text-align: center;\n    \n}\n#section-2-paragraph-container {\n    /* border: 3px solid black; */\n    /* width: 80%; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    column-gap: 50px;\n}\n.section-2-p-wrapper {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    /* border: 3px solid black; */\n    row-gap: 5px;\n}\n.paragraph-titles {\n    background-color: var(--turquoise-font-color);\n    padding: 2px 20px;\n}\n.paragraph-texts {\n    font-family: var(--extra-thin-montserat-font);\n\n}\n#section-3-parent-container {\n    justify-content: center;\n    align-items: center;\n    padding: 100px 0;\n}\n#section-3-title {\n    width: 40ch;\n}\n#section-3-cards-container {\n    width: 80%;\n    flex-wrap: wrap;\n    \n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    column-gap: 25px;\n    border: 3px solid black;\n}\n.card-items {\n    width: 30%;\n  border: 2px solid black;\n  padding: 50px 0;\n  word-wrap: break-word;\n    \n}\n.card-titles {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    margin-bottom: 20px;\n}\n.card-paragraphs {\n    font-family: var(--extra-thin-montserat-font);\n    /* width: 35ch; */\n    font-size: var(--desktop-text-font-size);\n}\n#section-4-parent-container {\nflex-direction: row;\njustify-content: center;\nalign-items: center;\n}\n#section-4-image-wrapper {\n    order: 2;\n}\n#section-5-parent-container {\n    flex-direction: row;\njustify-content: center;\nalign-items: center ;\n}\n#section-6-parent-container {\n flex-direction: row;   \n justify-content: center;\n align-items: center;\n\n}\n#section-6-text-container {\n    flex-direction: column;\n}\n\n\n\n\n\n\n\n}`,""]);const m=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=a(u,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},570:(n,e,t)=>{n.exports=t.p+"7e687123cd4528224ce5.ttf"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"feb91a5671ab95c1a574.png",e=t.p+"342e36a86dda178cf4e0.png",o=t.p+"e0dc4066654f1119b417.jpg",a=t.p+"b39f95fc6aefa13c2824.png",r=t.p+"93b752f0134a35c4e421.jpg",i=t.p+"c38255faf224be779fef.png",c=t.p+"af13b9181858eb494b80.png",s=t.p+"0e77f87c72fa65548b35.png",d=t.p+"4313dccf19cd400d5c2e.png",l=t.p+"53ec4ca3d603dd3e44d6.png";var p=t(72),m=t.n(p),u=t(825),f=t.n(u),h=t(659),g=t.n(h),x=t(56),v=t.n(x),b=t(540),w=t.n(b),y=t(113),C=t.n(y),E=t(208),k={};k.styleTagTransform=C(),k.setAttributes=v(),k.insert=g().bind(null,"head"),k.domAPI=f(),k.insertStyleElement=w(),m()(E.A,k),E.A&&E.A.locals&&E.A.locals,document.body;const L=document.getElementById("content");L.appendChild(function(){const n=document.createElement("header"),t=document.createElement("nav"),a=document.createElement("div");a.id="wrapper";const r=document.createElement("div");r.id="nav-logo-container";const i=new Image;i.src=e,i.alt="turquoise and black bold Nutra Nation logo in capital letters",r.appendChild(i);const c=document.createElement("button");c.classList.add("menu-icon"),c.ariaLabel="click to open navigation menu";const s=new Image;s.src=o,c.appendChild(s),a.appendChild(r),a.appendChild(c);const d=document.createElement("ul");d.classList.add("nav-items");const l=document.createElement("li"),p=document.createElement("a");p.href="#",p.textContent="process",l.appendChild(p);const m=document.createElement("li"),u=document.createElement("a");u.href="#",u.textContent="about",m.appendChild(u);const f=document.createElement("li"),h=document.createElement("a");h.href="#",h.textContent="team",f.appendChild(h);const g=document.createElement("li"),x=document.createElement("a");x.href="#",x.textContent="contact",g.appendChild(x),d.appendChild(l),d.appendChild(m),d.appendChild(f),d.appendChild(g),c.addEventListener("click",(n=>{const e=document.querySelector(".nav-items");e.classList.toggle("nav-items-open");const t=document.querySelector(".nav-items-open");t&&t.addEventListener("click",(()=>{e.classList.remove("nav-items-open")}))}));const v=document.createElement("a");return v.id="nav-anchor-button",v.classList.add("anchor-buttons"),v.textContent="lets connect",a.appendChild(r),a.appendChild(c),t.appendChild(a),t.appendChild(d),t.appendChild(v),n.appendChild(t),n}()),L.appendChild(function(){const e=document.createElement("div");e.id="section-1-parent-container",e.classList.add("sections-parent");const t=document.createElement("div");t.id="section-1-mobile-image-wrapper",t.classList.add("mobile-image-wrapper");const o=new Image;o.src=r,o.alt="caucasion portrait of a healthy women with blue eyes and blond brunette hair with a big smile";const a=new Image;a.id="section-1-image-2",a.src=n,t.appendChild(o);const i=document.createElement("h1");i.classList.add("titles"),i.textContent="we are igniting innovative brands",function(n,e){const t=e.textContent.split(" ");for(let n=0;n<t.length;n++)if("innovative"===t[n]){const e=document.createElement("span");e.textContent=t[n],e.id="span-"+n,t[n]=e.outerHTML}e.innerHTML=t.join(" ")}(0,i);const c=document.createElement("p");c.classList.add("paragraph-text"),c.textContent="We are shaping the global nutrition market with pioneering solutions.";const s=document.createElement("p");s.classList.add("paragraph-text"),s.textContent="At Nutranation, we're redefining the standard for high-quality direct-to-customers nutrition brands worldwide.";const d=document.createElement("a");return d.classList.add("anchor-buttons"),d.textContent="contact us",e.appendChild(t),e.appendChild(i),e.appendChild(c),e.appendChild(s),e.appendChild(d),e}()),L.appendChild(function(){const n=document.createElement("div");n.id="section-2-parent-container",n.classList.add("sections-parent");const e=document.createElement("h1");e.id="section-2-title",e.classList.add("titles"),e.textContent="we always reach out for the top";const t=document.createElement("div");t.id="section-2-paragraph-container";const o=document.createElement("div");o.classList.add("section-2-p-wrapper");const a=document.createElement("p");a.id="section-2-p1",a.classList.add("paragraph-titles"),a.textContent="> 50 brands";const r=document.createElement("p");r.id="section-2-p2",r.classList.add("paragraph-texts"),r.textContent="launched",o.appendChild(a),o.appendChild(r);const i=document.createElement("div");i.classList.add("section-2-p-wrapper");const c=document.createElement("p");c.id="section-2-p3",c.classList.add("paragraph-titles"),c.textContent="+ 5.000.000";const s=document.createElement("p");s.id="section-2-p4",s.classList.add("paragraph-texts"),s.textContent="customers",i.appendChild(c),i.appendChild(s);const d=document.createElement("div");d.classList.add("section-2-p-wrapper");const l=document.createElement("p");l.id="section-2-p5",l.classList.add("paragraph-titles"),l.textContent="more than 15";const p=document.createElement("p");return p.id="section-2-p6",p.classList.add("paragraph-texts"),p.textContent="countries",d.appendChild(l),d.appendChild(p),t.appendChild(o),t.appendChild(i),t.appendChild(d),n.appendChild(e),n.appendChild(t),n}()),L.appendChild(function(){const n=document.createElement("div");n.id="section-3-parent-container",n.classList.add("sections-parent");const e=document.createElement("h1");e.id="section-3-title",e.classList.add("titles"),e.textContent="holistic product development approach";const t=document.createElement("div");t.id="section-3-cards-container";const o=document.createElement("div");o.classList.add("card-items");const a=new Image;a.src=i,a.alt="blueish green screen icon with settings icon on top right";const r=document.createElement("h2");r.classList.add("card-titles"),r.textContent="product web development";const d=document.createElement("p");d.classList.add("card-paragraphs"),d.textContent="Revolutionizing lifestyles, Nutranation crafts brands from the essence of women's everyday realities. Our real-time development process fosters dynamism, creativity, and personalized solutions.";const l=document.createElement("div");l.classList.add("card-items");const p=new Image;p.src=c,p.alt="blueish green screen icon with settings icon on top right";const m=document.createElement("h2");m.classList.add("card-titles"),m.textContent="branding & design";const u=document.createElement("p");u.classList.add("card-paragraphs"),u.textContent="As our brand evolves, our creative team springs into action, unlocking the latent potential of our products to sculpt captivating brands. From conception to completion, it's all made from us.";const f=document.createElement("div");f.classList.add("card-items");const h=new Image;h.src=s,h.alt="blueish green screen icon with settings icon on top right";const g=document.createElement("h2");g.classList.add("card-titles"),g.textContent="performance marketing";const x=document.createElement("p");return x.classList.add("card-paragraphs"),x.textContent="In anticipation of the product and brand launch, we meticulously craft our marketing strategy. Our continuous process of performance marketing optimisation fuels the creation of impactful advertising campaigns.",o.appendChild(a),o.appendChild(r),o.appendChild(d),l.appendChild(p),l.appendChild(m),l.appendChild(u),f.appendChild(h),f.appendChild(g),f.appendChild(x),t.appendChild(o),t.appendChild(l),t.appendChild(f),n.appendChild(e),n.appendChild(t),n}()),L.appendChild(function(){const n=document.createElement("div");n.id="section-4-parent-container",n.classList.add("sections-parent");const e=document.createElement("div");e.id="section-4-image-wrapper",e.classList.add("mobile-image-wrapper");const t=new Image;t.src=d,t.alt="athletic women working on a laptop",e.appendChild(t);const o=document.createElement("div");o.id="section-4-text-container";const a=document.createElement("h1");a.id="section-4-title",a.classList.add("titles"),a.textContent="holistic product development approach";const r=document.createElement("p");r.classList.add("paragraph-text"),r.textContent="Our triumph stems from enhancing the lives of our customers, a mission driving every facet of our operation.";const i=document.createElement("p");return i.classList.add("paragraph-text"),i.textContent="We relentlessly refine our processes, scrutinizing every detail to deliver unparalleled quality.",o.appendChild(a),o.appendChild(r),o.appendChild(i),n.appendChild(e),n.appendChild(o),n}()),L.appendChild(function(){const n=document.createElement("div");n.id="section-5-parent-container",n.classList.add("sections-parent");const e=document.createElement("div");e.classList.add("mobile-image-wrapper");const t=new Image;t.src=l,t.alt="athletic women working on a laptop",e.appendChild(t);const o=document.createElement("div");o.id="section-5-text-container";const a=document.createElement("h1");a.id="section-5-title",a.classList.add("titles"),a.textContent="we stand as a worldwide force spanning continents";const r=document.createElement("p");r.classList.add("paragraph-text"),r.textContent="Our international company embodies modernity, fostering a diverse and collaborative team environment.";const i=document.createElement("p");return i.classList.add("paragraph-text"),i.textContent="With offices worldwide, we offer unmatched opportunities for professional growth and cross-cultural engagement.",o.appendChild(a),o.appendChild(r),o.appendChild(i),n.appendChild(e),n.appendChild(o),n}()),L.appendChild(function(){const n=document.createElement("div");n.id="section-6-parent-container",n.classList.add("sections-parent");const e=document.createElement("div");e.id="section-6-text-container";const t=document.createElement("h1");t.id="section-6-title",t.classList.add("titles"),t.textContent="we're on the hunt for exceptional talent";const o=document.createElement("p");o.classList.add("paragraph-text"),o.textContent="Are you ready to shine? Are you passionate about solving challenges, driving brand creation from inception to fruition? Join our team of trailblazers. Get in touch today.",e.appendChild(t),e.appendChild(o);const a=document.createElement("a");return a.classList.add("anchor-buttons"),a.textContent="apply now",n.appendChild(e),n.appendChild(a),n}()),L.appendChild(function(){const n=document.createElement("footer"),e=document.createElement("nav");e.id="nav-2";const t=document.createElement("h4");t.textContent="Website";const o=document.createElement("ul");o.id="nav-items-2";const r=document.createElement("li"),i=document.createElement("a");i.href="#",i.textContent="process",r.appendChild(i);const c=document.createElement("li"),s=document.createElement("a");s.href="#",s.textContent="about",c.appendChild(s);const d=document.createElement("li"),l=document.createElement("a");l.href="#",l.textContent="team",d.appendChild(l),o.appendChild(r),o.appendChild(c),o.appendChild(d);const p=document.createElement("h4");p.textContent="Information";const m=document.createElement("ul");m.id="nav-items-2";const u=document.createElement("li"),f=document.createElement("a");f.href="#",f.textContent="process",u.appendChild(f);const h=document.createElement("li"),g=document.createElement("a");g.href="#",g.textContent="about",h.appendChild(g);const x=document.createElement("li"),v=document.createElement("a");v.href="#",v.textContent="team",x.appendChild(v),m.appendChild(u),m.appendChild(h),m.appendChild(x),e.appendChild(t),e.appendChild(o),e.appendChild(p),e.appendChild(m);const b=document.createElement("div");b.id="nav-logo-container";const w=new Image;w.src=a,b.appendChild(w);const y=document.createElement("hr"),C=document.createElement("p");return C.textContent="Copyright 2024 Nutranation LLC",n.appendChild(e),n.appendChild(b),n.appendChild(y),n.appendChild(C),n}());const j=document.getElementById("section-1-parent-container");window.innerWidth<=767?j.style.backgroundImage="none":j.style.backgroundImage=`url(${n})`,window.addEventListener("resize",(()=>{window.innerWidth<=767?j.style.backgroundImage="none":j.style.backgroundImage=`url(${n})`}))})()})();