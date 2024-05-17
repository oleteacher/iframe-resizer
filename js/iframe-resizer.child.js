/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/child 5.0.0-RC.2 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-RC.2",t=10,n="data-iframe-size";const o=(e,t,n,o)=>e.addEventListener(t,n,o||!1),i=(e,t,n)=>e.removeEventListener(t,n,!1),a=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."];Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)])));const r=e=>(e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))))(a[e]),l={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},s={height:()=>(ue("Custom height calculation function not defined"),Re.auto()),width:()=>(ue("Custom width calculation function not defined"),Le.auto())},c={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},u=128,d={},m="checkVisibility"in window,f="auto",p={reset:1,resetPage:1,init:1},h="[iFrameSizer]",g=h.length,y={max:1,min:1,bodyScroll:1,documentElementScroll:1},v=["body"],b="scroll";let w,z,$=!0,S="",M=0,j="",O=null,E="",T=!0,P=!1,C=null,I=!0,k=!1,A=1,x=f,N=!0,R="",L={},B=!0,H=!1,q="",D=0,F=!1,W="",U="child",V=null,J=!1,Z=window.parent,Q="*",X=0,Y=!1,G="",K=1,_=b,ee=window,te=()=>{ue("onMessage function not defined")},ne=()=>{},oe=null,ie=null;const ae=e=>e.charAt(0).toUpperCase()+e.slice(1),re=e=>""!=`${e}`&&void 0!==e;function le(e){switch(!0){case!re(e):return"";case re(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case re(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(re(e.className)?`.${e.className}`:"")}}const se=(...e)=>[`[iframe-resizer][${W}]`,...e].join(" "),ce=(...e)=>H&&console?.log(se(...e)),ue=(...e)=>console?.warn(se(...e)),de=(...e)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))(se)(...e)),me=e=>de(e);function fe(){!function(){try{J="iframeParentListener"in window.parent}catch(e){ce("Cross domain iframe detected.")}}(),function(){const e=e=>"true"===e,t=R.slice(g).split(":");W=t[0],M=void 0===t[1]?M:Number(t[1]),P=void 0===t[2]?P:e(t[2]),H=void 0===t[3]?H:e(t[3]),$=void 0===t[6]?$:e(t[6]),j=t[7],x=void 0===t[8]?x:t[8],S=t[9],E=t[10],X=void 0===t[11]?X:Number(t[11]),L.enable=void 0!==t[12]&&e(t[12]),U=void 0===t[13]?U:t[13],_=void 0===t[14]?_:t[14],F=void 0===t[15]?F:e(t[15]),w=void 0===t[16]?w:Number(t[16]),z=void 0===t[17]?z:Number(t[17]),T=void 0===t[18]?T:e(t[18]),q=t[19],G=t[20]||G,D=void 0===t[21]?D:Number(t[21]),ce(`License: ${q}`)}(),ce(`Initialising iFrame v${e} (${window.location.href})`),function(){function e(){const e=window.iFrameResizer;ce(`Reading data from page: ${JSON.stringify(e)}`),te=e?.onMessage||te,ne=e?.onReady||ne,"number"==typeof e?.offset&&(T&&(w=e?.offset),P&&(z=e?.offset)),Q=e?.targetOrigin||Q,x=e?.heightCalculationMethod||x,_=e?.widthCalculationMethod||_}function t(e,t){return"function"==typeof e&&(ce(`Setup custom ${t}CalcMethod`),s[t]=e,e="custom"),e}if(1===D)return;"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),x=t(x,"height"),_=t(_,"width"));ce(`TargetOrigin for parent set to: ${Q}`)}(),function(){void 0===j&&(j=`${M}px`);pe("margin",function(e,t){t.includes("-")&&(ue(`Negative CSS value ignored for ${e}`),t="");return t}("margin",j))}(),pe("background",S),pe("padding",E),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body),ce('HTML & body height set to "auto !important"')}(),ce(`Mode: ${D}`),D<0?me(`${r(D+2)}${r(2)}`):G.codePointAt(0)>4||D<2&&me(r(3)),function(){if(!G||""===G||"false"===G)return void de(`<rb>Legacy version detected on parent page</>\n\nThe version of <i>iframe-resizer</> you are using on the parent page does not match the child page. \n\nWhilst running a differnet version on the parent and child pages will most likely work, it is not a supported configuration and you are reccommend to upgrade the version on the parent page to v${e} to match the child page.\n`);G!==e&&de(`<rb>Version mismatch</>\n\nThe parent and child pages are running different versions of <i>iframe resizer</>.\n\nParent page: ${G} - Child page: ${e}.\n`)}(),be(),we(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.setAttribute(n,null)}));t("data-iframe-height"),t("data-iframe-width"),e&&de("<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>.")}(),document.querySelectorAll(`[${n}]`).length>0&&("auto"===x&&(x="autoOverflow",ce('data-iframe-size attribute found on page, using "autoOverflow" calculation method for height')),"auto"===_&&(_="autoOverflow",ce('data-iframe-size attribute found on page, using "autoOverflow" calculation method for width'))),ye(),function(){if(1===D)return;ee.parentIframe=Object.freeze({autoResize:e=>(!0===e&&!1===$?($=!0,ze()):!1===e&&!0===$&&($=!1,ge("remove"),V?.disconnect(),O?.disconnect()),We(0,0,"autoResize",JSON.stringify($)),$),close(){We(0,0,"close")},getId:()=>W,getPageInfo(e){if("function"==typeof e)return oe=e,We(0,0,"pageInfo"),void de("<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProperties()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n");oe=null,We(0,0,"pageInfoStop")},getParentProperties(e){if("function"!=typeof e)throw new TypeError("parentIFrame.getParentProperties(callback) callback not a function");return ie=e,We(0,0,"parentInfo"),()=>{ie=null,We(0,0,"parentInfoStop")}},moveToAnchor(e){L.findTarget(e)},reset(){Fe("parentIFrame.reset")},scrollTo(e,t){We(t,e,"scrollTo")},scrollToOffset(e,t){We(t,e,"scrollToOffset")},sendMessage(e,t){We(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){x=e,be()},setWidthCalculationMethod(e){_=e,we()},setTargetOrigin(e){ce(`Set targetOrigin: ${e}`),Q=e},resize(e,t){He("size",`parentIFrame.size(${`${e||""}${t?`,${t}`:""}`})`,e,t)},size(e,t){de("<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"),this.resize(e,t)}}),ee.parentIFrame=ee.parentIframe}(),function(){if(!0!==F)return;function e(e){We(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){ce(`Add event listener: ${n}`),o(window.document,t,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}(),ze(),L=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function i(e){function t(e){const t=n(e);ce(`Moving to in page link (#${o}) at x: ${t.x}y: ${t.y}`),We(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?(ce(`In page link (#${o}) not found in iFrame, so sending to parent`),We(0,0,"inPageLink",`#${o}`)):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&o(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function l(){o(window,"hashchange",a)}function s(){setTimeout(a,u)}function c(){ce("Setting up location.hash handlers"),r(),l(),s()}L.enable?1===D?de("In page linking requires a Profesional or Business license. Please see https://iframe-resizer.com/pricing for more details."):c():ce("In page linking not enabled");return{findTarget:i}}(),He("init","Init message from host page"),ne(),B=!1}function pe(e,t){void 0!==t&&""!==t&&"null"!==t&&(document.body.style.setProperty(e,t),ce(`Body ${e} set to "${t}"`))}function he(e){({add(t){function n(){He(e.eventName,e.eventType)}d[t]=n,o(window,t,n,{passive:!0})},remove(e){const t=d[e];delete d[e],i(window,e,t)}})[e.method](e.eventName),ce(`${ae(e.method)} event listener: ${e.eventType}`)}function ge(e){he({method:e,eventType:"After Print",eventName:"afterprint"}),he({method:e,eventType:"Before Print",eventName:"beforeprint"}),he({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function ye(){const e=document.querySelectorAll(`[${n}]`);k=e.length>0,C=k?e:Ce(document)()}function ve(e,t,n,o){return t!==e&&(e in n||(ue(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in c&&de(`<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`),ce(`${o} calculation method set to "${e}"`)),e}function be(){x=ve(x,f,Re,"height")}function we(){_=ve(_,b,Le,"width")}function ze(){!0===$?(ge("add"),O=function(){function e(e){e.forEach(Ee),ye()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return ce("Create <body/> MutationObserver"),t.observe(n,o),t}const n=t();return{disconnect(){ce("Disconnect MutationObserver"),n.disconnect()}}}(),V=new ResizeObserver($e),Oe(window.document)):ce("Auto Resize disabled")}function $e(e){He("resizeObserver",`resizeObserver: ${le(e[0].target)}`)}const Se=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},Me=()=>[...Ce(document)()].filter(Se);function je(e){e&&(V.observe(e),ce(`Attached resizeObserver: ${le(e)}`))}function Oe(e){[...Me(),...v.flatMap((t=>e.querySelector(t)))].forEach(je)}function Ee(e){"childList"===e.type&&Oe(e.target)}function Te(e){const t=ae(e);let n,o=0,i=C.length,a=0,r=performance.now();C.forEach((t=>{if(!k&&m&&!t.checkVisibility(l))return ce(`Skipping non-visable element: ${le(t)}`),void(i-=1);o=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),o>a&&(a=o,n=t)})),r=performance.now()-r;const s=`\nParsed ${i} element${i=""} in ${r.toPrecision(3)}ms\n${t} ${k?"tagged ":""}element found at: ${a}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(n)}`;return r<1.1||B||k?ce(s):de(`<rb>Performance Warning</>\n\nCalculateing the page size took an excessive amount of time. To improve performace add the <b>data-iframe-size</> attribute to the ${e} most element on the page.\n${s}`),a}const Pe=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Ce=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");let Ie=!1;function ke({ceilBoundingSize:e,dimension:t,getDimension:n,isHeight:o,scrollSize:i}){if(!Ie)return Ie=!0,n.taggedElement();const a=o?"bottom":"right";return de(`<rb>Detected content overflowing html element</>\n    \nThis causes <i>iframe-resizer</> to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${a} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the <b><HTML></> element or alternatively you can add the attribute <b>data-iframe-size</> to the elements on the page that you want <i>iframe-resizer</> to use when calculating the dimensions of the iframe. \n  \nWhen present the <i>${a} margin of the ${o?"lowest":"right most"} element</> with a <b>data-iframe-size</> attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${i} > document size: ${e})`),o?(ce(`Switching from ${x} to autoOverflow`),x="autoOverflow"):(ce(`Switching from ${_} to autoOverflow`),_="autoOverflow"),n.taggedElement()}const Ae={height:0,width:0},xe={height:0,width:0};function Ne(e,t){function n(){return xe[i]=a,Ae[i]=s,a}const o=e===Re,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),l=Math.floor(a),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e),c=`HTML: ${a}  Page: ${s}`;switch(!0){case!e.enabled():return s;case!t&&0===xe[i]&&0===Ae[i]:if(ce(`Initial page size values: ${c}`),e.taggedElement(!0)<=r)return n();break;case Y&&a===xe[i]&&s===Ae[i]:return ce(`Size unchanged: ${c}`),Math.max(a,s);case 0===a:return ce(`Page is hidden: ${c}`),s;case!t&&a!==xe[i]&&s<=Ae[i]:return ce(`New HTML bounding size: ${c}`,"Previous bounding size:",xe[i]),n();case!o:return t?e.taggedElement():ke({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:s});case!t&&a<xe[i]:return ce("HTML bounding size decreased:",c),n();case s===l||s===r:return ce("HTML bounding size equals page size:",c),n();case a>s:return ce(`Page size < HTML bounding size: ${c}`),n();case!t:return ce(`Switch to autoOverflow: ${c}`),ke({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:s});default:ce(`Content overflowing HTML element: ${c}`)}return Math.max(e.taggedElement(),n())}const Re={enabled:()=>T,getOffset:()=>w,type:"height",auto:()=>Ne(Re,!1),autoOverflow:()=>Ne(Re,!0),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Re.bodyOffset(),custom:()=>s.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...Pe(Re)),min:()=>Math.min(...Pe(Re)),grow:()=>Re.max(),lowestElement:()=>Te("bottom"),taggedElement:()=>Te("bottom")},Le={enabled:()=>P,getOffset:()=>z,type:"width",auto:()=>Ne(Le,!1),autoOverflow:()=>Ne(Le,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>s.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...Pe(Le)),min:()=>Math.min(...Pe(Le)),rightMostElement:()=>Te("right"),scroll:()=>Math.max(Le.bodyScroll(),Le.documentElementScroll()),taggedElement:()=>Te("right")};function Be(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=X);return i=void 0===n?Re[x]():n,a=void 0===o?Le[_]():o,T&&e(A,i)||P&&e(K,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(T&&x in y||P&&_ in y)&&Fe(t):(qe(),A=i,K=a,We(A,K,e))}function He(e,t,n,o){document.hidden?ce("Page hidden - Ignored resize request"):(e in p||ce(`Trigger event: ${t}`),Be(e,t,n,o))}function qe(){Y||(Y=!0,ce("Trigger event lock on"),requestAnimationFrame((()=>{Y=!1,ce("Trigger event lock off"),ce("--")})))}function De(e){A=Re[x](),K=Le[_](),We(A,K,e)}function Fe(e){const t=x;x=f,ce(`Reset trigger event: ${e}`),qe(),De("reset"),x=t}function We(e,t,n,o,i){D<0||(void 0!==i?ce(`Message targetOrigin: ${i}`):i=Q,function(){const a=`${W}:${`${e+(w||0)}:${t+(z||0)}`}:${n}${void 0===o?"":`:${o}`}`;ce(`Sending message to host page (${a}) via ${J?"sameDomain":"postMessage"}`),J?window.parent.iframeParentListener(h+a):Z.postMessage(h+a,i)}())}function Ue(e){const t={init:function(){R=e.data,Z=e.source,fe(),I=!1,setTimeout((()=>{N=!1}),u)},reset(){N?ce("Page reset ignored by init"):(ce("Page size reset by host page"),De("resetPage"))},resize(){He("resizeParent","Parent window requested size check")},moveToAnchor(){L.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();ce(`PageInfo received from parent: ${e}`),oe?oe(JSON.parse(e)):We(0,0,"pageInfoStop"),ce(" --")},parentInfo(){const e=o();ce(`ParentInfo received from parent: ${e}`),ie?ie(Object.freeze(JSON.parse(e))):We(0,0,"parentInfoStop"),ce(" --")},message(){const e=o();ce(`onMessage called from parent: ${e}`),te(JSON.parse(e)),ce(" --")}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};h===`${e.data}`.slice(0,g)&&(!1!==I?a()?t.init():ce(`Ignored message of type "${n()}". Received before initialization.`):function(){const o=n();o in t?t[o]():i()||a()||ue(`Unexpected message (${e.data})`)}())}function Ve(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function Je(e){return Ue(e),ee}"undefined"!=typeof window&&(window.iframeChildListener=e=>Ue({data:e,sameDomian:!0}),o(window,"message",Ue),o(window,"readystatechange",Ve),Ve());try{top?.document?.getElementById("banner")&&(ee={},window.mockMsgListener=Je,i(window,"message",Ue),define([],(()=>Je)))}catch(e){}}();
