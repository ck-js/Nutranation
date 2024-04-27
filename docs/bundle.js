(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>m});var o=e(601),a=e.n(o),r=e(314),i=e.n(r),c=e(417),s=e.n(c),l=new URL(e(570),e.b),d=i()(a()),p=s()(l);d.push([n.id,`* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'montserat-extra-bold';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 800;\n    font-stretch: 1% 100%;\n}\n@font-face {\n    font-family: 'montserat-regular';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 500;\n    font-stretch: 1% 100%;\n}\n\n@font-face {\n    font-family: 'montserat-extra-thin';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 300;\n    font-stretch: 1% 100%;\n}\n@font-face {\n    font-family: 'montserat-variable-weight';\n    src: url(${p}) format('truetype'),\n    url(${p}) format('truetype');\n    font-weight: 100 900;\n    font-stretch: 1% 100%;\n}\n\n\n:root {\n\n--desktop-small-spacing: 50px;\n--desktop-extra-small-font-size: calc(4px + 0.75vw);\n--desktop-text-font-size: 18px;\n--desktop-title-font-size: 36px;\n\n    --mobile-EXTRA-small-spacing: 25px;\n--mobile-small-spacing: 50px;\n\n    --mobile-anchor-padding: 10px 40px;\n\n--mobile-title-font-size: 1.8rem;\n\n--extra-bold-montserat-font: montserat-extra-bold;\n--regular-montserat-font: montserat-regular;;\n--extra-thin-montserat-font: montserat-extra-thin;\n\n    --white-font-color: #FFFF;\n    --dark-gray-font-color: #464646;\n    --full-black-font-color: #000000;\n    --turquoise-font-color: #01E8BB;\n    --white-smoke-font-color: #f4f4f4;\n    --light-gray-font-color: #b4b4b4;\n    font-size: 16px;\n\n}\n  \n\n\n@media (max-width: 761px) {\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n:root {\n    max-width: 761px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n\n}\n\nbody {\n    max-width: 761px;\n    background-color: var(--white-font-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\ntext-align: center;    \n\n}    \n#content {\n    max-width: 761px;\n    \n    }\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column;\n    /* margin-bottom: 1rem; */\n    padding-top: 10px;\n    background-color: var(--white-smoke-font-color);\n    \n  }\nnav {\n    width: 100%;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-between;\nmargin-bottom: 1rem;\n\n}\n#wrapper {\n    \nwidth: 100%;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n\n}\n#nav-logo-container {\n/* border: 3px solid black;     */\njustify-self: center;\ntext-align: center;\n\n}\n.menu-icon {    \n    justify-self: end;\n    border: none;\n    \n    background-color: var(--white-font-color);\n    cursor: pointer;\n    font-size: var(--mobile-title-font-size);\ndisplay: block;\n\n\n}\n.menu-icon img {\n    width: 50px;\n    display: block;\n    \n}\n.nav-items {\n    display: none;\n    flex-direction: column;\n    margin-top: 3rem;\n  }\n.nav-items li {\n    list-style-type: none;\n    /* display: none; */\n    margin-bottom: 1rem;\n    text-transform: uppercase;\n    font-family: var(--extra-thin-montserat-font);\n    color: var(--full-black-font-color);\n}\n.nav-items li a {\n    margin-right: 1rem;\n    text-decoration: none;\n    color: var(--full-black-font-color);\n  }\n.nav-items-open {\ndisplay: block;\n\n}\n#nav-anchor-button {\n    display: none;\n}\n\n.titles {\n    /* width: 15ch; */\n    text-transform: uppercase;\nfont-family: var(--extra-bold-montserat-font);\n}\n.paragraph-text {\n    color: var(--full-black-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    /* width: 30ch; */\n    font-size: 14px;\n}\n.sections-parent {\n    height: auto;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n/* border: 20px solid black; */\nrow-gap: var(--mobile-EXTRA-small-spacing);\nbackground-color: var(--white-smoke-font-color);\npadding-bottom: var(--mobile-small-spacing);\nmargin-bottom: var(--mobile-small-spacing);\n}\n.mobile-image-wrapper {\n    \n    width: 100%;\n    \n}\n.mobile-image-wrapper img {\n    width: 100%;\nheight: auto;\n\n}\n#span-3 {\n    background-color: var(--turquoise-font-color);\n}\n#span-1 {\n    font-family: var(--extra-bold-montserat-font);\n}\n\n\n.anchor-buttons {\n    color: var(--white-font-color);\n    font-family: var(--regular-montserat-font);\n    background-color: var(--full-black-font-color);\n    padding: var(--mobile-anchor-padding);\ntext-transform: uppercase;\ncursor: pointer;\nfont-size: 16px;\ntext-align: center;\n}\n#section-1-mobile-image-wrapper {\n    display: block;\n    \n}\n#section-1-desktop-image-wrapper {\n    display: none;\n}\n\n\n#SECTION-1-PARENT-CONTAINER {\n    /* border: 4px solid black; */\n    width: 100%;\nrow-gap: 200PX;\nword-wrap: break-word;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n}\n#section-1-parent-container h1 {\n    font-size: 35px;\n    word-wrap: break-word;\n    text-align: center;\n    padding: 0 50px;\n\n    margin-left: auto;\n    margin-right: auto;\n}\n#section-1-parent-container p {\nwidth: 40ch;\n    font-size: 14px;\n    word-wrap: break-word;\n    text-align: center;\n    font-family: var(--regular-montserat-font);\nmargin-left: auto;\nmargin-right: auto;\n\n}\n.anchor-buttons {\n    font-size: 16px;\n}\n\n#section-2-title {\n    width: 21ch;\n    font-size: 26px;\nword-wrap: break-word;\nmargin-left: auto;\nmargin-right: auto;\n    \n}\n#section-2-parent-container {\n\n\n}\n\n#section-2-paragraph-container {\n    \n    /* width: 80%; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\noverflow: hidden;\n\n\n}\n.paragraph-titles {\n    background-color: var(--turquoise-font-color);\n    color: var(--full-black-font-color);\n    font-family: var(--extra-bold-montserat-font);\n    text-transform: uppercase;\n    padding:5px 50px;\n    margin-bottom: 2px;\n    font-size: 18px;\n}\n.paragraph-texts {\n    text-transform: uppercase;\n    font-family: var(--regular-montserat-font);\n    color: var(--full-black-font-color);\n    margin-bottom: 10px;\n    font-size: 16px;\n}\n#section-3-parent-container {\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin-left: auto;\n}\n#section-3-title {\n    width: 20ch;\n    margin-bottom: var(--mobile-EXTRA-small-spacing);\n    font-size: 26px;\n}\n#section-3-cards-container {\n    \n    margin-left: auto;\n    margin-right: auto;\n}\n.card-items {\n    max-width: 100%;\n    \n    background-color: var(--white-smoke-font-color);\n    text-align: left;\n    \n    padding: 30px;\n    margin-bottom: 40px;\n    display: flex;\n    flex-direction: column;\njustify-content: center;\nalign-items: start;\n    \n    word-wrap: break-word;\n    \n    row-gap: 20px;\n\n}\n.card-items img  {\n    width: 100PX;\n    \n}\n.card-titles {\ntext-transform: uppercase;\nfont-family: var(--extra-bold-montserat-font);\nfont-size: 18px;\n}\n.card-paragraphs {\n    color: var(--full-black-font-color);\nfont-family: var(--regular-montserat-font);\nfont-size: 14px;\nword-wrap: break-word;\n\nline-height: 1.2;\n\n}\n\n\n\n#section-4-title {\n    font-size: 26px;\n    width: 20ch;\n    margin-bottom: 25px;\n}\n#section-4-text-container {\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n    word-wrap: break-word;\n    padding: 0 10px;\n}\n\n\n#section-4-text-container p {\nline-height: 1;\nfont-family: var(--regular-montserat-font);\nfont-size: 14px;\nmargin-bottom: 20px;\n\n\n}\n/* #section-5-parent-container {\nwidth: 100%;\n\n\n} */\n\n#section-5-text-container {\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    word-wrap: break-word;\n    padding: 0 10px;\n    /* border: 4px solid black; */\n}\n\n\n#section-5-title {\n    font-size: 26px;\n    width: 15ch;\n    margin-bottom: 25px;\n}\n#section-5-text-container p {\n    line-height: 1;\n    font-family: var(--regular-montserat-font);\n    font-size: 14px;\n    margin-bottom: 20px;\n    \n    \n    }\n#section-6-parent-container {\n    background-color: #f8f8f8;\n    /* border: 3px solid black; */\n    width: 100%;\n}\n#section-6-text-container {\n    /* border: 3px solid black; */\n    word-wrap: break-word;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#section-6-title {\n    margin-bottom: 25px;\n    width: 18ch;\n    font-size: 26px;\n}\n\n#section-6-text-container p {\nfont-family: var(--regular-montserat-font);\nfont-size: 14px;\ntext-align: center;\nmargin-bottom: 20px;\npadding: 0 10px;\n}\n\n\nfooter {\n    width: 100%;\n    background-color: var(--full-black-font-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\npadding: 50px 0;\n}\n#nav-2 {\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--white-font-color);\n    text-align: center;\n    padding: 50px 0;\n}\n#nav-2 h4 {\n    margin-bottom: 5px;\n}\n#nav-items-2 {\n    \n    padding-left: 0;\n}\n\n#nav-items-2 li {\nlist-style-type: none;\nmargin-bottom: 10px;\n}\n\n#nav-items-2 li a {\ntext-decoration: none;\ncolor: var(--white-font-color);\nfont-family: var(--regular-montserat-font);\nfont-size: 14px;\ntext-transform:capitalize;\n\n}\nhr {\ncolor: var(--white-font-color);\nbackground-color: var(--white-font-color);\nwidth: 200px;\nmargin: 20px 0;\n\n}\n\n\nfooter p {\n    color: var(--white-font-color);\n}\nfooter h4 {\n    font-size: 16px;\n    margin-bottom: 25px;\n\n}\n.nav-2-item-containers {\nmargin-bottom: 25px;\n\n}\n\n\n\n\n}\n\n\n\n\n\n@media (min-width: 762px) {\n\n:root {\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n}\nbody {\n    max-width: 1920px;\n        background-color: var(--white-font-color);\n        color: var(--full-black-font-color);\n        font-family: var(--extra-bold-montserat-font);\n    font-size: var(--desktop-text-font-size);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    /* border: 3px solid black;     */\n    \n        }\n#content {\nmax-width: 90%;\n\n}\n    \n        header {\n            /* max-width: 1599px; */\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            flex-direction: row;\n        padding-left: 100px;    \n        padding-right: 50px;\n            padding-top: 15px;\n            padding-bottom: 10px;\n            \n    overflow: hidden;\n          }\n          nav {\n            width: 100%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        \n        /* border: 3px solid black; */\n        }\n        #wrapper {\n            \n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* border: 3px solid black; */\n            \n        \n        }\n        #nav-logo-container {\n            /* margin: 0 auto; */\n        \n        }\n        .menu-icon {    \n            display: none;\n            padding-right: 10px;\n            /* border: 2px solid black; */\n            border: none;\n            background-color: var(--white-font-color);\n            cursor: pointer;\n            font-size: var(--mobile-title-font-size);\n            \n        }\n        .menu-icon img {\n            width: 50px;\n            display: none;\n        }\n        .nav-items {\n            /* border: 3px solid black; */\n            display: flex;\n            flex-direction: row;\n            /* justify-content: center;\n            align-items: center; */\n            column-gap: 2rem   ;\n            margin:  0 20px 0 auto;\n          }\n        .nav-items li {\n            list-style-type: none;\n            text-transform: uppercase;\n            font-family: var(--extra-thin-montserat-font);\n            color: var(--full-black-font-color);\n        }\n        .nav-items li a {\n            \n            text-decoration: none;\n            color: var(--full-black-font-color);\n            font-size: 16px;\n          }\n    \n        .anchor-buttons {\n            color: var(--white-font-color);\n            font-family: var(--extra-thin-montserat-font);\n            background-color: var(--full-black-font-color);\n            padding: var(--mobile-anchor-padding);\n        text-transform: uppercase;\n        cursor: pointer;\n        text-align: center;\n        flex-shrink: 2;\n\n        \n        }\n        #nav-anchor-button {\n            display: block;\n            font-size: 18px;\n        }\n\n\n        .titles {\n            width: 15ch;\n            text-transform: uppercase;\n        font-size: var(--desktop-title-font-size);\n        }\n        .paragraph-text {\n            color: var(--full-black-font-color);\n            font-family: var(--extra-thin-montserat-font);\n            font-size: var(--desktop-text-font-size);\n            width: 30ch;\n        }\n        .sections-parent {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        row-gap: 15px;\n        \n        }\n        #section-1-parent-container {\n            /* border: 5px solid yellowgreen; */\n            max-width: 100%;    \n        padding: 200px 100px;\n        background-size: cover;\n        background-position: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: start;\n        }\n#section-1-mobile-image-wrapper {\n            display: none;\n        \n        }\n        #section-1-parent-container h1 {\n            color: var(--white-font-color);\n            width: 18ch;\n        font-size: 55px;\n        \n        }\n        #span-3 {\n            color: var(--full-black-font-color);\n            background-color: var(--turquoise-font-color);\n        }\n        #section-1-parent-container p {\n            color: var(--white-font-color);\n            width: 60ch;\n            font-size: 18px;\n        }\n        #span-1 {\nfont-family: montserat-variable-weight;\nfont-weight: 600;\n            \n        }\n        #section-1-paragraph-2 {\n            margin-bottom: 20px;\n        }\n#section-1-parent-container a {\nfont-family: var(--regular-montserat-font);\nfont-weight: normal;\nfont-size: 18px;\ntext-align: center;\n}\n\n#section-2-parent-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\npadding: 50px 0;\n/* border: 3px solid black; */\n}\n\n#section-2-title {\n    width: 40ch;\n    text-align: center;\n    margin-bottom: 25px;\n    \n}\n#section-2-paragraph-container {\n    /* border: 3px solid black; */\ndisplay: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    column-gap: 50px;\n}\n.section-2-p-wrapper {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    /* border: 3px solid black; */\n    row-gap: 5px;\n}\n.paragraph-titles {\n    background-color: var(--turquoise-font-color);\n    padding: 2px 45px;\n    text-transform: uppercase;\n    font-size: 22px;\n}\n.paragraph-texts {\n    font-family: var(--regular-montserat-font);\n    \ntext-transform: uppercase;\nfont-size: var(--desktop-text-font-size);\n}\n#section-3-parent-container {\n    justify-content: center;\n    align-items: center;\n    padding: 50px 0;\n    margin-bottom: 25px;\n}\n#section-3-title {\n    width: 40ch;\n    text-align: center;\n}\n#section-3-cards-container {    \n    flex-wrap: wrap;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    /* border: 3px solid black; */\n}\n.card-items {\n    background-color: var(--white-smoke-font-color);\n    width: 33.3%;\n  /* border: 2px solid black; */\n  padding: 40px;\n  word-wrap: break-word;\n    \n}\n.card-titles {\n    text-transform: uppercase;\n    font-size: 24px;\n    margin-bottom: 20px;\n}\n.card-paragraphs {\n    font-family: var(--regular-montserat-font);\n    font-size: 15px;\n    /* width: 35ch; */\n\n}\n#section-4-parent-container {\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\n/* border: 5px solid black; */\npadding-left: 100px;\nmargin-bottom: 100px;\n}\n#section-4-image-wrapper {\n    overflow: hidden;\n    order: 2;\n    width: 45%;\n    \n}\n#section-4-image-wrapper img {\n    width: 100%;\n    height: 100%;\n}\n#section-4-title {\n    width: 20ch;\n    margin-bottom: 25px;\n}\n#section-4-text-container p {\n    margin-bottom: 20px;\n    font-family: var(--regular-montserat-font);\n    width: 50ch;\n}\n\n\n#section-5-parent-container {\n    flex-direction: row;\njustify-content: space-between;\nalign-items: center ;\n/* padding-right: 95px; */\nmargin-bottom: 100px;\n}\n#section-5-image-wrapper {\n    width: 45%;\n}\n#section-5-image-wrapper img {\nwidth: 100%;\n\n}\n#section-5-text-container {\n    /* border: 3px solid black; */\n}\n#section-5-title {\n    width: 23ch;\n    margin-bottom: 25px;\n}\n#section-5-text-container p{\nfont-family: var(--regular-montserat-font);\nmargin-bottom: 20px;\nwidth: 50ch;\n}\n#section-6-parent-container {\n flex-direction: row;   \n justify-content: space-around;\n align-items: center;\n padding: 63px 0;\n padding-left: 100px;\n padding-right: 50px;\nbackground-color: #f8f8f8;\n\n\n}\n#section-6-title {\n    width: 40ch;\n    margin-bottom: 10px;\n    \n    \n}\n#section-6-text-container {\n    flex-direction: column;\n    /* border: 3px solid black; */\n}\n#section-6-text-container p {\nwidth: 65ch;\n\n}\nfooter {\nwidth: 100%;\n\n    background-color: var(--full-black-font-color);\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 50px 0;\npadding-left: 145px;\n    \n    \n}\n#nav-2 {\n    order: 2;\n    flex-direction: row;\n    align-items: center;\n    justify-content: start;\n    color: var(--white-font-color);\n    /* border: 3px solid white; */\n    column-gap: 100px;\n    \n}\n.nav-2-item-containers h4{\n    font-family: montserat-variable-weight;\n    font-weight: 700;\n    font-size: 20px;\n    margin-bottom: 15px;\n}\n#nav-items-2 li {\nlist-style-type: none;\nmargin-bottom: 10px;\n}\n#nav-items-2 a {\n    text-decoration: none;\n    color: var(--white-font-color);\n    font-family: var(--extra-thin-montserat-font);\n    font-size: var(--desktop-text-font-size);\n    }\n#nav-2-text-container-2 {\n /* border: 3px solid white;    */\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: flex-start;\ntext-align: left;\npadding: 0 0 0 100px;\n}\n#nav-2-text-container-2 hr {\ncolor: var(--dark-gray-font-color);\nwidth: 175px;\nmargin:  20px 0;\n}\n\n#nav-2-text-container-2 p {\ncolor: var(--white-font-color);\nfont-family: var(--extra-thin-montserat-font);\nwidth: 40ch;\nfont-size: 14px;\n}\n}\n\n\n\n@media (max-width: 1200px) {\n\n#section-1-parent-container h1 {\nfont-size: 40px;\n\n}\n\n.titles {\n    font-size: 36px;\n}\n\n\n\n\n#section-5-parent-container {\ndisplay: flex;\njustify-content: space-around;\nalign-items: center;\n\n}\n#section-5-image-wrapper {\nwidth: 100%;\n\n\n}\n#section-5-text-container {\n    \n    padding-left: 50px;\ntext-align: left;\n\nword-wrap: break-word;\nmargin-left: auto;\nmargin-right: auto;\n}\n#section-4-title {\n    font-size: 28px;\n    word-wrap: break-word;\n}\n\n#section-5-title {\n    font-size: 28px;\n    word-wrap: break-word;\n}\n#section-5-text-container p {\n    \n\nword-wrap: break-word;\n\n}\n\n\n\n#section-6-parent-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    word-wrap: break-word;\n\n\n}\n    #section-6-title {\n        word-wrap: break-word;\n        font-size: 24px;\n        text-align: center;\n    }\n #section-6-text-container {\n\n    word-wrap: break-word;\n\n }\n #section-6-text-container p {\nword-wrap: break-word;\nmargin-bottom: 25px;\n\n    \n\n\n\n}\n\n\n}\n\n\n `,""]);const m=d},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var m=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var u=a(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:u,references:1})}i.push(p)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=e(r[i]);t[c].references--}for(var s=o(n,a),l=0;l<r.length;l++){var d=e(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},570:(n,t,e)=>{n.exports=e.p+"7e687123cd4528224ce5.ttf"}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{const n=e.p+"feb91a5671ab95c1a574.png",t=e.p+"342e36a86dda178cf4e0.png",o=e.p+"e0dc4066654f1119b417.jpg",a=e.p+"b39f95fc6aefa13c2824.png",r=e.p+"90f74c9560dc7a0f7df2.jpg",i=e.p+"c38255faf224be779fef.png",c=e.p+"af13b9181858eb494b80.png",s=e.p+"0e77f87c72fa65548b35.png",l=e.p+"4313dccf19cd400d5c2e.png",d=e.p+"53ec4ca3d603dd3e44d6.png";function p(n,t){const e=t.textContent.split(" ");for(let t=0;t<e.length;t++)if(e[t]===n){const n=document.createElement("span");n.textContent=e[t],n.id="span-"+t,e[t]=n.outerHTML}t.innerHTML=e.join(" ")}var m=e(72),f=e.n(m),u=e(825),h=e.n(u),g=e(659),x=e.n(g),b=e(56),w=e.n(b),v=e(540),y=e.n(v),C=e(113),k=e.n(C),E=e(208),z={};z.styleTagTransform=k(),z.setAttributes=w(),z.insert=x().bind(null,"head"),z.domAPI=h(),z.insertStyleElement=y(),f()(E.A,z),E.A&&E.A.locals&&E.A.locals;const L=document.body,j=document.getElementById("content");j.appendChild(function(){const n=document.createElement("header"),e=document.createElement("nav"),a=document.createElement("div");a.id="wrapper";const r=document.createElement("div");r.id="nav-logo-container";const i=new Image;i.src=t,i.alt="turquoise and black bold Nutra Nation logo in capital letters",r.appendChild(i);const c=document.createElement("button");c.classList.add("menu-icon"),c.ariaLabel="click to open navigation menu";const s=new Image;s.src=o,c.appendChild(s),a.appendChild(r),a.appendChild(c);const l=document.createElement("ul");l.classList.add("nav-items");const d=document.createElement("li"),p=document.createElement("a");p.href="#section-2-parent-container",p.textContent="process",d.appendChild(p);const m=document.createElement("li"),f=document.createElement("a");f.href="#section-3-parent-container",f.textContent="about",m.appendChild(f);const u=document.createElement("li"),h=document.createElement("a");h.href="#section-4-parent-container",h.textContent="team",u.appendChild(h);const g=document.createElement("li"),x=document.createElement("a");x.href="#section-6-parent-container",x.textContent="contact",g.appendChild(x),l.appendChild(d),l.appendChild(m),l.appendChild(u),l.appendChild(g),c.addEventListener("click",(n=>{const t=document.querySelector(".nav-items");t.classList.toggle("nav-items-open");const e=document.querySelector(".nav-items-open");e&&e.addEventListener("click",(()=>{t.classList.remove("nav-items-open")}))}));const b=document.createElement("a");return b.id="nav-anchor-button",b.classList.add("anchor-buttons"),b.textContent="lets connect",a.appendChild(r),a.appendChild(c),e.appendChild(a),e.appendChild(l),e.appendChild(b),n.appendChild(e),n}()),j.appendChild(function(){const t=document.createElement("div");t.id="section-1-parent-container",t.classList.add("sections-parent");const e=document.createElement("div");e.id="section-1-mobile-image-wrapper",e.classList.add("mobile-image-wrapper");const o=new Image;o.src=r,o.alt="caucasion portrait of a healthy women with blue eyes and blond brunette hair with a big smile";const a=new Image;a.id="section-1-image-2",a.src=n,e.appendChild(o);const i=document.createElement("h1");i.classList.add("titles"),i.textContent="we are igniting innovative brands",p("innovative",i);const c=document.createElement("p");c.classList.add("paragraph-text"),c.textContent="We are shaping the global nutrition market with pioneering solutions.";const s=document.createElement("p");s.id="section-1-paragraph-2",s.classList.add("paragraph-text"),s.textContent="At Nutranation we're redefining the standard for high-quality direct-to-customers nutrition brands worldwide.",p("Nutranation",s);const l=document.createElement("a");return l.classList.add("anchor-buttons"),l.textContent="contact us",t.appendChild(e),t.appendChild(i),t.appendChild(c),t.appendChild(s),t.appendChild(l),t}()),j.appendChild(function(){const n=document.createElement("div");n.id="section-2-parent-container",n.classList.add("sections-parent");const t=document.createElement("h1");t.id="section-2-title",t.classList.add("titles"),t.textContent="we always reach out for the top";const e=document.createElement("div");e.id="section-2-paragraph-container";const o=document.createElement("div");o.classList.add("section-2-p-wrapper");const a=document.createElement("p");a.id="section-2-p1",a.classList.add("paragraph-titles"),a.textContent="> 50 brands";const r=document.createElement("p");r.id="section-2-p2",r.classList.add("paragraph-texts"),r.textContent="launched",o.appendChild(a),o.appendChild(r);const i=document.createElement("div");i.classList.add("section-2-p-wrapper");const c=document.createElement("p");c.id="section-2-p3",c.classList.add("paragraph-titles"),c.textContent="+ 5.000.000";const s=document.createElement("p");s.id="section-2-p4",s.classList.add("paragraph-texts"),s.textContent="customers",i.appendChild(c),i.appendChild(s);const l=document.createElement("div");l.classList.add("section-2-p-wrapper");const d=document.createElement("p");d.id="section-2-p5",d.classList.add("paragraph-titles"),d.textContent="more than 15";const p=document.createElement("p");return p.id="section-2-p6",p.classList.add("paragraph-texts"),p.textContent="countries",l.appendChild(d),l.appendChild(p),e.appendChild(o),e.appendChild(i),e.appendChild(l),n.appendChild(t),n.appendChild(e),n}()),j.appendChild(function(){const n=document.createElement("div");n.id="section-3-parent-container",n.classList.add("sections-parent");const t=document.createElement("h1");t.id="section-3-title",t.classList.add("titles"),t.textContent="holistic product development approach";const e=document.createElement("div");e.id="section-3-cards-container";const o=document.createElement("div");o.classList.add("card-items");const a=new Image;a.src=i,a.alt="blueish green screen icon with settings icon on top right";const r=document.createElement("h2");r.classList.add("card-titles"),r.textContent="product web development";const l=document.createElement("p");l.classList.add("card-paragraphs"),l.textContent="Revolutionizing lifestyles, Nutranation crafts brands from the essence of women's everyday realities. Our real-time development process fosters dynamism, creativity, and personalized solutions.";const d=document.createElement("div");d.classList.add("card-items");const p=new Image;p.src=c,p.alt="blueish green screen icon with settings icon on top right";const m=document.createElement("h2");m.classList.add("card-titles"),m.textContent="branding & design";const f=document.createElement("p");f.classList.add("card-paragraphs"),f.textContent="As our brand evolves, our creative team springs into action, unlocking the latent potential of our products to sculpt captivating brands. From conception to completion, it's all made from us.";const u=document.createElement("div");u.classList.add("card-items");const h=new Image;h.src=s,h.alt="blueish green screen icon with settings icon on top right";const g=document.createElement("h2");g.classList.add("card-titles"),g.textContent="performance marketing";const x=document.createElement("p");return x.classList.add("card-paragraphs"),x.textContent="In anticipation of the product and brand launch, we meticulously craft our marketing strategy. Our continuous process of performance marketing optimisation fuels the creation of impactful advertising campaigns.",o.appendChild(a),o.appendChild(r),o.appendChild(l),d.appendChild(p),d.appendChild(m),d.appendChild(f),u.appendChild(h),u.appendChild(g),u.appendChild(x),e.appendChild(o),e.appendChild(d),e.appendChild(u),n.appendChild(t),n.appendChild(e),n}()),j.appendChild(function(){const n=document.createElement("div");n.id="section-4-parent-container",n.classList.add("sections-parent");const t=document.createElement("div");t.id="section-4-image-wrapper",t.classList.add("mobile-image-wrapper");const e=new Image;e.src=l,e.alt="athletic women working on a laptop",t.appendChild(e);const o=document.createElement("div");o.id="section-4-text-container";const a=document.createElement("h1");a.id="section-4-title",a.classList.add("titles"),a.textContent="holistic product development approach";const r=document.createElement("p");r.classList.add("paragraph-text"),r.textContent="Our triumph stems from enhancing the lives of our customers, a mission driving every facet of our operation.";const i=document.createElement("p");return i.classList.add("paragraph-text"),i.textContent="We relentlessly refine our processes, scrutinizing every detail to deliver unparalleled quality.",o.appendChild(a),o.appendChild(r),o.appendChild(i),n.appendChild(t),n.appendChild(o),n}()),j.appendChild(function(){const n=document.createElement("div");n.id="section-5-parent-container",n.classList.add("sections-parent");const t=document.createElement("div");t.id="section-5-image-wrapper",t.classList.add("mobile-image-wrapper");const e=new Image;e.src=d,e.alt="athletic women working on a laptop",t.appendChild(e);const o=document.createElement("div");o.id="section-5-text-container";const a=document.createElement("h1");a.id="section-5-title",a.classList.add("titles"),a.textContent="we stand as a worldwide force spanning continents";const r=document.createElement("p");r.classList.add("paragraph-text"),r.textContent="Our international company embodies modernity, fostering a diverse and collaborative team environment.";const i=document.createElement("p");return i.classList.add("paragraph-text"),i.textContent="With offices worldwide, we offer unmatched opportunities for professional growth and cross-cultural engagement.",o.appendChild(a),o.appendChild(r),o.appendChild(i),n.appendChild(t),n.appendChild(o),n}()),j.appendChild(function(){const n=document.createElement("div");n.id="section-6-parent-container",n.classList.add("sections-parent");const t=document.createElement("div");t.id="section-6-text-container";const e=document.createElement("h1");e.id="section-6-title",e.classList.add("titles"),e.textContent="we're on the hunt for exceptional talent";const o=document.createElement("p");o.classList.add("paragraph-text"),o.textContent="Are you ready to shine? Are you passionate about solving challenges, driving brand creation from inception to fruition? Join our team of trailblazers. Get in touch today.",t.appendChild(e),t.appendChild(o);const a=document.createElement("a");return a.classList.add("anchor-buttons"),a.textContent="apply now",n.appendChild(t),n.appendChild(a),n}()),L.appendChild(function(){const n=document.createElement("footer"),t=document.createElement("nav");t.id="nav-2";const e=document.createElement("div");e.classList.add("nav-2-item-containers");const o=document.createElement("h4");o.textContent="Website";const r=document.createElement("ul");r.id="nav-items-2";const i=document.createElement("li"),c=document.createElement("a");c.href="#section-2-parent-container",c.textContent="process",i.appendChild(c);const s=document.createElement("li"),l=document.createElement("a");l.href="#section-3-parent-container",l.textContent="about",s.appendChild(l);const d=document.createElement("li"),p=document.createElement("a");p.href="#section-4-parent-container",p.textContent="team",d.appendChild(p),r.appendChild(i),r.appendChild(s),r.appendChild(d),e.appendChild(o),e.appendChild(r);const m=document.createElement("div");m.classList.add("nav-2-item-containers");const f=document.createElement("h4");f.textContent="Information";const u=document.createElement("ul");u.id="nav-items-2";const h=document.createElement("li"),g=document.createElement("a");g.href="#section-1-parent-container",g.textContent="Contact",h.appendChild(g);const x=document.createElement("li"),b=document.createElement("a");b.href="#section-3-parent-container",b.textContent="Imprint",x.appendChild(b);const w=document.createElement("li"),v=document.createElement("a");v.href="#section-5-parent-container",v.textContent="Privacy Policy",w.appendChild(v),u.appendChild(h),u.appendChild(x),u.appendChild(w),m.appendChild(f),m.appendChild(u),t.appendChild(e),t.appendChild(m);const y=document.createElement("div");y.id="nav-2-text-container-2";const C=document.createElement("div");C.id="nav-logo-container";const k=new Image;k.src=a,C.appendChild(k);const E=document.createElement("hr"),z=document.createElement("p");z.textContent="Copyright © 2024 Nutranation LLC";const L=document.createElement("p");return L.textContent="All rights reserved",y.appendChild(C),y.appendChild(E),y.appendChild(z),y.appendChild(L),n.appendChild(t),n.appendChild(y),n}());const I=document.getElementById("section-1-parent-container");window.innerWidth<=767?I.style.backgroundImage="none":I.style.backgroundImage=`url(${n})`,window.addEventListener("resize",(()=>{window.innerWidth<=767?I.style.backgroundImage="none":I.style.backgroundImage=`url(${n})`}))})()})();