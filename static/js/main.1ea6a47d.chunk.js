(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(8),i=n.n(r),a=n(4),s=n(29),u=n(32),l=n(28),f=n.n(l);function d(e){return null!==e.match(/^https?:\/\//)}var h=n(2);function b(e){var t=e.title,n=e.children;return n.length?Object(h.jsxs)("div",{id:t,className:"section",children:[t,Object(h.jsx)("div",{children:n})]}):Object(h.jsx)(h.Fragment,{})}function j(e){var t=e.query,n=e.setAction,o=Object(c.useState)(null),r=Object(a.a)(o,2),i=r[0],s=r[1],l=Object(c.useState)([]),j=Object(a.a)(l,2),v=j[0],O=j[1],m=Object(c.useState)(null),w=Object(a.a)(m,2),g=w[0],p=w[1],k=Object(c.useState)(0),y=Object(a.a)(k,2),x=y[0],E=y[1];Object(c.useEffect)((function(){fetch("https://gist.githubusercontent.com/minchingtonak/b60356be980dc4f430fe73b523d1fafb/raw").then((function(e){return e.json()})).then((function(e){s(e),document.documentElement.style.setProperty("--max-links","".concat(Math.max.apply(Math,Object(u.a)(Object.keys(e).map((function(t){return Object.keys(e[t]).length}))))))})).catch((function(e){return console.error(e)}))}),[]);var S=Object(c.useCallback)((function(e){if(null!==i){var c=[],o=0,r=!1;Object.keys(i).forEach((function(a,s){var u=i[a],l=Object.keys(u).filter((function(e){return e.toLowerCase().includes(t)}));l.length&&(r=!0,c.push(Object(h.jsx)(b,{title:a,children:l.map((function(t,c){var r=o++===e;return r&&n(u[t]),Object(h.jsx)("a",{href:"".concat(d(u[t])?"":"//").concat(u[t]),className:r?"selected":"",children:t},c)}))},s)))})),E(o),O(c),p(e),r&&t.length||n(null)}}),[t,i,n]);return Object(c.useEffect)((function(){f.a.isURL(t)?n(t):null===t.match(/^lh\d{3,5}$/)&&null===t.match(/^localhost:\d{3,5}$/)?S(t.length?0:null):n("localhost:".concat(t.match(/\d{3,5}/)[0]))}),[t,n,S]),Object(c.useEffect)((function(){function e(e){var t=g;"ArrowUp"===e.key||"ArrowLeft"===e.key?null!==g&&g>0&&(t=g-1):"ArrowDown"!==e.key&&"ArrowRight"!==e.key||null!==g&&g<x&&(t=g+1),t!==g&&S(t)}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[g,x,S]),Object(h.jsx)("div",{id:"links",children:v})}function v(e){var t=e.text,n=e.setText,o=e.action,r=Object(c.useRef)(null);Object(c.useEffect)((function(){document.querySelector("body").onclick=function(e){r&&r.current&&r.current.focus()}}),[r]);var i=Object(c.useCallback)((function(e){t.length?document.title="".concat(e," - ").concat(t):document.title="\ud83c\udfe0 Home"}),[t]);return Object(c.useEffect)((function(){i("\ud83d\udd0d")}),[t,i]),Object(c.useEffect)((function(){var e=i.bind(null,"\ud83d\udcdd"),t=i.bind(null,"\ud83d\udd0d");return window.addEventListener("blur",e),window.addEventListener("focus",t),function(){window.removeEventListener("blur",e),window.removeEventListener("focus",t)}}),[i]),Object(h.jsx)("form",{id:"action",onSubmit:function(e){e.preventDefault(),window.location.assign(null!==o?"".concat(d(o)?"":"//").concat(o):"".concat("https://google.com/search","?q=").concat(t))},children:Object(h.jsx)("input",{type:"text",value:t,ref:r,autoFocus:!0,autoComplete:"off",onChange:function(e){return n(e.target.value)}})})}function O(){var e=Object(c.useState)(new Date),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){o(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(h.jsx)("span",{id:"clock",children:function(e){function t(e){return e<10?"0".concat(e):e}return"".concat(t(e.getHours()),":").concat(t(e.getMinutes()),":").concat(t(e.getSeconds()))}(n)})}var m=function(){return Object(h.jsxs)("div",{id:"static-links",children:[Object(h.jsx)(O,{}),["Spotify","Slack","Steam"].map((function(e,t){return Object(h.jsx)("a",{href:e.toLowerCase()+":",children:e},t)}))]})};function w(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(null),i=Object(a.a)(r,2),u=i[0],l=i[1],f=Object(s.a)(),d=f.height,b=f.ref;return Object(h.jsx)("div",{id:"main",style:{height:d},children:Object(h.jsxs)("span",{ref:b,style:{display:"block"},children:[Object(h.jsx)(m,{}),Object(h.jsx)(v,{text:n,setText:o,action:u}),Object(h.jsx)(j,{query:n,setAction:l})]})})}function g(){return Object(c.useEffect)((function(){var e,t;document.documentElement.style.setProperty("--base","".concat((e=10,t=360,Math.floor(Math.random()*(t-e+1))+e)))}),[]),Object(h.jsx)(w,{})}n(116);var p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(t,e)}))}}()}},[[117,1,2]]]);
//# sourceMappingURL=main.1ea6a47d.chunk.js.map