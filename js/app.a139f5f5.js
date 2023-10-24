(()=>{"use strict";var e={2308:(e,t,n)=>{var o=n(1957),r=n(1947),a=n(499),i=n(9835);function l(e,t,n,o,r,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const c=(0,i.aZ)({name:"App"});var s=n(1639);const d=(0,s.Z)(c,[["render",l]]),p=d;var h=n(3340),f=n(3746);const m=(0,h.h)((()=>{const e=(0,f.WB)();return e}));var u=n(1249);async function b(e,t){const n=e(p);n.use(r.Z,t);const o="function"===typeof m?await m({}):m;n.use(o);const i=(0,a.Xl)("function"===typeof u.Z?await(0,u.Z)({store:o}):u.Z);return o.use((({store:e})=>{e.router=i})),{app:n,store:o,router:i}}var v=n(6827),g=n(3833),y=n(8126);const P={config:{brand:{primary:"#0073B1",secondary:"#f9fbfc",dark:"#000000",darkPage:"#121212",positive:"#22c55e",negative:"#f75555",textActived:"#3f4d67",textInactived:"#807f7e",info:"#31ccec",warning:"#facc15",footered:"#525f76",primaryHeader:"#ffffff",secondaryHeader:"#525f76",principalBackground:"#e5e5e5"}},plugins:{Notify:v.Z,LocalStorage:g.Z,SessionStorage:y.Z}},w="";async function j({app:e,router:t,store:n},o){let r=!1;const a=e=>{try{return t.resolve(e).href}catch(n){}return Object(e)===e?null:e},i=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let s=0;!1===r&&s<o.length;s++)try{await o[s]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:l,publicPath:w})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&(e.use(t),e.mount("#q-app"))}b(o.ri,P).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,1569))]).then((t=>{const n=o(t).filter((e=>"function"===typeof e));j(e,n)}))}))},1569:(e,t,n)=>{n.r(t),n.d(t,{api:()=>a,axios:()=>r.Z,default:()=>i});var o=n(3340),r=n(7524);const a=r.Z.create({baseURL:"http://50.62.182.38:3333/api"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=r.Z,e.config.globalProperties.$api=a}))},1249:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(3340),r=n(8339);const a=[{path:"/",component:()=>Promise.all([n.e(736),n.e(64),n.e(405)]).then(n.bind(n,5969)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(57)]).then(n.bind(n,2057))}]},{path:"/subcribe",component:()=>Promise.all([n.e(736),n.e(13)]).then(n.bind(n,13)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(64),n.e(242)]).then(n.bind(n,2242))}]},{path:"/paiement",component:()=>Promise.all([n.e(736),n.e(42)]).then(n.bind(n,9042)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(64),n.e(740)]).then(n.bind(n,2740))}]},{path:"/home",component:()=>Promise.all([n.e(736),n.e(64),n.e(321)]).then(n.bind(n,7456)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(64),n.e(448)]).then(n.bind(n,1448))},{path:"/find-job",component:()=>Promise.all([n.e(736),n.e(64),n.e(168)]).then(n.bind(n,9870))},{path:"/search-job",component:()=>Promise.all([n.e(736),n.e(64),n.e(932)]).then(n.bind(n,4529))},{path:"/detail-job",component:()=>Promise.all([n.e(736),n.e(64),n.e(816)]).then(n.bind(n,1816))},{path:"/settings",component:()=>Promise.all([n.e(736),n.e(64),n.e(475)]).then(n.bind(n,6475))},{path:"/settings-company",component:()=>Promise.all([n.e(736),n.e(64),n.e(522)]).then(n.bind(n,6522))},{path:"/company",component:()=>Promise.all([n.e(736),n.e(442)]).then(n.bind(n,2442))},{path:"/invoice",component:()=>Promise.all([n.e(736),n.e(344)]).then(n.bind(n,8344))},{path:"/subscription",component:()=>Promise.all([n.e(736),n.e(64),n.e(708)]).then(n.bind(n,7708))},{path:"/My-job",component:()=>Promise.all([n.e(736),n.e(64),n.e(539)]).then(n.bind(n,3098))},{path:"/applicant-dashboard",component:()=>Promise.all([n.e(736),n.e(64),n.e(3)]).then(n.bind(n,7620))},{path:"/dashboard-HRD",component:()=>Promise.all([n.e(736),n.e(743)]).then(n.bind(n,4743))},{path:"/access-manage",component:()=>Promise.all([n.e(736),n.e(200)]).then(n.bind(n,9200))},{path:"/term-condition",component:()=>n.e(110).then(n.bind(n,2110))},{path:"/construction",component:()=>Promise.all([n.e(736),n.e(64),n.e(829)]).then(n.bind(n,1829))}]},{path:"/sign-in",component:()=>Promise.all([n.e(736),n.e(540)]).then(n.bind(n,8540)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(64),n.e(469)]).then(n.bind(n,1469))}]},{path:"/sign-up",component:()=>Promise.all([n.e(736),n.e(592)]).then(n.bind(n,7592)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(64),n.e(31)]).then(n.bind(n,2031))}]},{path:"/create-cv",component:()=>Promise.all([n.e(736),n.e(64),n.e(533)]).then(n.bind(n,8533))},{path:"/add-job",component:()=>Promise.all([n.e(736),n.e(64),n.e(997)]).then(n.bind(n,5997))},{path:"/forget-password",component:()=>Promise.all([n.e(736),n.e(7)]).then(n.bind(n,7007))},{path:"/Otp",component:()=>Promise.all([n.e(736),n.e(610)]).then(n.bind(n,9610))},{path:"/authOtp",component:()=>Promise.all([n.e(736),n.e(912)]).then(n.bind(n,5912))},{path:"/authLoginOtp",component:()=>Promise.all([n.e(736),n.e(64),n.e(267)]).then(n.bind(n,5267))},{path:"/reset-password",component:()=>Promise.all([n.e(736),n.e(300)]).then(n.bind(n,5300))},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(862)]).then(n.bind(n,1862))}],i=a,l=(0,o.BC)((function(){const e=r.r5,t=(0,r.p7)({scrollBehavior:()=>({left:0,top:0}),routes:i,history:e("")});return t}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,r,a]=e[d],l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{3:"bd572f46",7:"b00f2c1b",13:"0253a8a2",31:"d9861f1a",42:"89c57550",57:"c54da317",64:"167bdd25",110:"ce112b0f",168:"5a994ccb",200:"b3b56920",242:"8dd21b8b",267:"04238509",300:"db94942a",321:"45c56e02",344:"541d2daf",405:"00d2475d",442:"bb37a508",448:"2b5a5df1",469:"2f116bad",475:"3510d37a",522:"62ca4e87",533:"80ab1ef6",539:"9d7ece36",540:"f0dbdab8",592:"617da46c",610:"bf7ae83a",708:"2f1993f7",740:"d1cfaec5",743:"a06330cb",816:"12ba6274",829:"198113a1",862:"08e9deca",912:"01a69227",932:"a4bd7e3a",997:"7b743884"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{3:"70571641",31:"3a2dee1c",57:"b7614989",168:"b6b7e63a",267:"a852853e",321:"907961d2",405:"edc674ef",475:"4005925d",522:"d2dbd42c",533:"2c5d13ea",539:"b783d033",610:"6651ab80",708:"5c20a4e7",740:"fae1b8c8",743:"5fade218",816:"0d5219c9",912:"a852853e",932:"494029dc",997:"2c5d13ea"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="monbarar:";n.l=(o,r,a,i)=>{if(e[o])e[o].push(r);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var p=s[d];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[r];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,o,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=n=>{if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=o=>new Promise(((r,a)=>{var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return r();e(o,l,null,r,a)})),r={143:0};n.f.miniCss=(e,t)=>{var n={3:1,31:1,57:1,168:1,267:1,321:1,405:1,475:1,522:1,533:1,539:1,610:1,708:1,740:1,743:1,816:1,912:1,932:1,997:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else if(932!=t){var a=new Promise(((n,o)=>r=e[t]=[n,o]));o.push(r[2]=a);var i=n.p+n.u(t),l=new Error,c=o=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,r[1](l)}};n.l(i,c,"chunk-"+t,t)}else e[t]=0},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,l,c]=o,s=0;if(i.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var d=c(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=globalThis["webpackChunkmonbarar"]=globalThis["webpackChunkmonbarar"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[736],(()=>n(2308)));o=n.O(o)})();