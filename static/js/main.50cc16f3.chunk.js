(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{202:function(t,n,e){},203:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(15),c=e.n(o),i=e(8),s=e(9),l=e(93),d=e(25),u=e(92),f=e.n(u),b=e(55),h=e(7),j=e(238),x=e(96),g=e(234),p=e(235),v=e(17),m=e(236),O=e(86),k=e(4);function w(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.apply(void 0,e.concat(r))}}function y(t){return null!==/^https?:\/\//.test(t)?t:"//".concat(t)}var C=window.localStorage;function E(t,n){var e=Object(r.useState)((function(){var e=C.getItem(t);return null!==e?JSON.parse(e):n})),a=Object(i.a)(e,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){C.setItem(t,JSON.stringify(o))}),[o,t]),[o,c]}var I=Object(h.a)({root:{color:"var(--txt)","&$checked":{color:"var(--txt)"}},checked:{}},{index:1})((function(t){return Object(k.jsx)(j.a,Object(b.a)({color:"default"},t))})),S=function(t,n){return{root:{color:"".concat(t," !important")},underline:{"&:before":{borderBottom:"1px solid ".concat(n," !important")},"&:hover:not($disabled):not($focused):not($error):before":{borderBottom:"2px solid ".concat(n," !important")},"&:after":{borderBottom:"3px solid ".concat(n," !important")}},disabled:{},focused:{},error:{"&:before":{borderBottom:"1px solid red !important"},"&:after":{borderBottom:"3px solid red !important"}}}},T=Object(x.a)({overrides:{MuiInput:S("var(--htx)","var(--htx)"),MuiPaper:{root:{border:"3px solid var(--frg) !important"},rounded:{borderRadius:"0 !important",backgroundColor:"var(--frg) !important"}},MuiPickersToolbar:{toolbar:{backgroundColor:"var(--hdr) !important"}},MuiPickersCalendarHeader:{iconButton:{color:"var(--txt) !important",backgroundColor:"var(--hdr) !important",margin:"0 5px !important"},switchHeader:{color:"var(--txt) !important",backgroundColor:"var(--frg) !important"},daysHeader:{color:"var(--txt) !important",backgroundColor:"var(--frg) !important"},dayLabel:{color:"var(--txt) !important"}},MuiPickersDay:{day:{color:"var(--txt) !important",backgroundColor:"var(--frg) !important","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1) !important"}},daySelected:{color:"var(--txt) !important",backgroundColor:"var(--hdr) !important","&:hover":{backgroundColor:"var(--bkg) !important"}},dayDisabled:{color:"var(--htx) !important"},current:{color:"var(--txt) !important"}},MuiPickersClock:{clock:{backgroundColor:"var(--hdr) !important"},pin:{backgroundColor:"var(--frg) !important"}},MuiPickersClockNumber:{clockNumber:{color:"var(--txt) !important"},clockNumberSelected:{backgroundColor:"var(--frg) !important"}},MuiPickersClockPointer:{pointer:{backgroundColor:"var(--frg) !important"},thumb:{borderColor:"#00000000 !important",backgroundColor:"var(--frg) !important"},noPoint:{backgroundColor:"#00000000 !important"}},MuiPickersYear:{root:{color:"var(--htx) !important"},yearSelected:{color:"var(--txt) !important"}}}}),A=Object(h.a)(S("var(--txt)","var(--txt)"),{index:1})((function(t){return Object(k.jsx)(g.a,Object(b.a)({},t))}));function L(t){return Object(k.jsx)(v.a,{utils:O.a,children:Object(k.jsx)(p.a,{theme:T,children:Object(k.jsx)(m.a,Object(b.a)({},t))})})}var M=Object(r.createContext)({loggedIn:!1,setLoggedIn:function(){}});function D(t){var n=t.children,e=Object(r.useState)(!1),a=Object(i.a)(e,2),o=a[0],c=a[1];return Object(k.jsx)(M.Provider,{value:{loggedIn:o,setLoggedIn:c},children:n})}var P=Object(r.createContext)({addTask:function(t){},setAddTask:function(){}});function $(t){var n=t.children,e=Object(r.useReducer)((function(t,n){return n}),(function(t){})),a=Object(i.a)(e,2),o=a[0],c=a[1];return Object(k.jsx)(P.Provider,{value:{addTask:o,setAddTask:c},children:n})}var N,F,B,R=function(){return Object(r.useContext)(P)},z=e(10),K=z.a.div(N||(N=Object(s.a)(["\n  vertical-align: top;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  box-sizing: border-box;\n  margin: 2px;\n  height: var(--section-height);\n  width: var(--section-width);\n\n  background-color: var(--hdr);\n\n  text-align: left;\n  color: var(--htx);\n\n  &:before {\n    content: '';\n    margin-left: 5px;\n  }\n"]))),H=z.a.div(F||(F=Object(s.a)(["\n  padding: 10px 15px 15px 10px;\n\n  height: 100%;\n\n  background-color: var(--frg);\n"])));function J(t){var n=t.title,e=t.children;return e.length?Object(k.jsxs)(K,{id:n,children:[n,Object(k.jsx)(H,{children:e})]}):Object(k.jsx)(k.Fragment,{})}var U=z.a.a(B||(B=Object(s.a)(["\n  margin-bottom: var(--link-margin);\n  padding-left: 5px;\n\n  display: block;\n\n  color: var(--txt);\n  text-decoration: none;\n\n  &:hover,\n  &.selected {\n    background-color: rgba(255, 255, 255, 0.05);\n\n    color: var(--hgl);\n  }\n"])));function q(t){var n=t.query,e=t.setAction,a=E("sites",null),o=Object(i.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),b=u[0],h=u[1],j=Object(r.useState)(null),x=Object(i.a)(j,2),g=x[0],p=x[1],v=Object(r.useState)(0),m=Object(i.a)(v,2),O=m[0],w=m[1];Object(r.useEffect)((function(){fetch("https://gist.githubusercontent.com/minchingtonak/b60356be980dc4f430fe73b523d1fafb/raw").then((function(t){return t.json()})).then((function(t){return s(t)})).catch((function(t){return console.error(t)}))}),[s]),Object(r.useEffect)((function(){null!==c&&document.documentElement.style.setProperty("--max-links","".concat(Math.max.apply(Math,Object(d.a)(Object.keys(c).map((function(t){return Object.keys(c[t]).length}))))))}),[c]);var C=Object(r.useCallback)((function(t){if(null!==c){var r=[],a=0,o=!1;Object.keys(c).forEach((function(i,s){var l=c[i],d=Object.keys(l).filter((function(t){return t.toLowerCase().includes(n)}));d.length&&(o=!0,r.push(Object(k.jsx)(J,{title:i,children:d.map((function(n,r){var o=a++===t;return o&&e(l[n]),Object(k.jsx)(U,{href:y(l[n]),className:o?"selected":"",children:n},r)}))},s)))})),w(a),h(r),p(t),o&&n.length||e(null)}}),[n,c,e]);return Object(r.useEffect)((function(){f.a.isURL(n)?e(n):null===n.match(/^lh\d{3,5}$/)&&null===n.match(/^localhost:\d{3,5}$/)?C(n.length?0:null):e("http://localhost:".concat(n.match(/\d{3,5}/)[0]))}),[n,e,C]),Object(r.useEffect)((function(){function t(t){var n=g;"ArrowUp"===t.key||"ArrowLeft"===t.key?null!==g&&g>0&&(n=g-1):"ArrowDown"!==t.key&&"ArrowRight"!==t.key||null!==g&&g<O&&(n=g+1),n!==g&&C(n)}return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[g,O,C]),Object(k.jsx)("div",{id:"links",children:b})}var X,G,Y=e(28),Z=["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"],Q=!1;function V(){var t=Object(r.useContext)(M),n=t.loggedIn,e=t.setLoggedIn,a=Object(r.useState)(!1),o=Object(i.a)(a,2),c=o[0],s=o[1],l=E("offlineaccess",!1),d=Object(i.a)(l,2),u=d[0],f=d[1];Object(r.useEffect)((function(){n||Y.a.load("client:auth2",(function(){var t;t=function(t){e(t),console.log("loggedin status",t)},Q||(Q=!0,Y.a.client.init({apiKey:"AIzaSyBZJJOMt3MkTKNiTgX8lRAkRx8Nd0A8lTc",clientId:"529992368744-omh87l4imgosp83f9l67toav9rgl2bru.apps.googleusercontent.com",discoveryDocs:Z,scope:"https://www.googleapis.com/auth/tasks"}).then((function(){Y.a.auth2.getAuthInstance().isSignedIn.listen(t),t(Y.a.auth2.getAuthInstance().isSignedIn.get())})).catch((function(t){console.error("Auth init error: ",t)}))),s(!0)}))}),[n,e,u,f]),Object(r.useEffect)((function(){console.log(n)}),[n]);var b=c?Y.a.auth2.getAuthInstance():{signIn:function(){},signOut:function(){}};return{loggedIn:n,setLoggedIn:e,logIn:b.signIn,logOut:b.signOut,username:n?Y.a.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName():null}}var W=z.a.input(X||(X=Object(s.a)(["\n  margin: 0px 2px 2px 2px;\n  padding-left: 5px;\n  box-sizing: border-box;\n\n  border: none;\n  width: var(--lwidth);\n  height: 50px;\n\n  font-size: 40px;\n  background-color: var(--frg);\n  color: var(--txt);\n  font-family: Terminus, Montserrat;\n\n  &:focus {\n    outline: none;\n  }\n\n  @media screen and (max-width: 912px) {\n    & {\n      width: var(--mwidth);\n    }\n  }\n\n  @media screen and (max-width: 608px) {\n    & {\n      width: var(--swidth);\n    }\n  }\n"]))),_=Object(z.a)(L)(G||(G=Object(s.a)(["\n  display: none !important;\n"])));function tt(t){var n=t.text,e=t.setText,a=t.action,o=Object(r.useRef)(null),c=Object(r.useState)(!1),s=Object(i.a)(c,2),l=s[0],d=s[1],u=Object(r.useState)(null),f=Object(i.a)(u,2),b=f[0],h=f[1],j=R().addTask,x=V(),g=x.loggedIn,p=x.logOut,v=x.logIn,m=Object(r.useCallback)((function(t){n.length?document.title="".concat(t," - ").concat(n):document.title="\ud83c\udfe0 Home"}),[n]);return Object(r.useEffect)((function(){m("\ud83d\udd0d")}),[n,m]),Object(r.useEffect)((function(){var t=m.bind(null,"\ud83d\udcdd"),n=m.bind(null,"\ud83d\udd0d");return window.addEventListener("blur",t),window.addEventListener("focus",n),function(){window.removeEventListener("blur",t),window.removeEventListener("focus",n)}}),[m]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("form",{id:"action",onSubmit:function(t){if(t.preventDefault(),/^\/t(ask)?/.test(n)){var r=n.match(/[\s].*/g);h(null!==r?r[0].trim():null),d(!0)}else if(/^\/login/.test(n)){if(g)return;v(),e("")}else if(/^\/logout/.test(n)){if(!g)return;p(),e(""),window.localStorage.clear()}else window.location.assign(null!==a?y(a):"".concat("https://google.com/search","?q=").concat(encodeURIComponent(n)))},children:Object(k.jsx)(W,{type:"text",value:n,ref:o,autoFocus:!0,autoComplete:"off",onChange:function(t){return e(t.target.value)}})}),Object(k.jsx)(_,{variant:"dialog",autoOk:!0,okLabel:Object(k.jsx)(k.Fragment,{}),cancelLabel:Object(k.jsx)(k.Fragment,{}),value:new Date,open:l,onChange:function(){},onAccept:function(t){null!==b&&t&&(j({title:b,due:t.toISOString()}),e(""))},onClose:w(d,!1)})]})}var nt,et,rt,at,ot,ct=e(30),it=e.n(ct),st=z.a.div(nt||(nt=Object(s.a)(["\n  width: 180px;\n\n  margin-right: auto;\n\n  display: flex;\n"]))),lt=z.a.span(et||(et=Object(s.a)(["\n  align-self: flex-start;\n\n  color: var(--htx);\n"]))),dt=Object(z.a)(lt)(rt||(rt=Object(s.a)(["\n  margin-right: auto;\n\n  align-self: flex-end;\n"])));function ut(){var t=Object(r.useState)(new Date),n=Object(i.a)(t,2),e=n[0],a=n[1];return Object(r.useEffect)((function(){var t=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(t)}}),[]),Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(st,{children:[Object(k.jsx)(dt,{id:"clock",children:it()(e).format("HH:mm:ss")}),Object(k.jsx)(lt,{id:"date",children:it()(e).format("ddd, MMM D")})]})})}var ft,bt=z.a.div(at||(at=Object(s.a)(["\n  margin: 2px 2px 0 2px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n\n  padding: 0 5px;\n  width: var(--lwidth);\n\n  background-color: var(--hdr);\n\n  color: var(--txt);\n  font-size: 16px;\n  line-height: 30px;\n\n  @media screen and (max-width: 912px) {\n    & {\n      width: var(--mwidth);\n      margin: 2px auto 0 auto;\n    }\n  }\n\n  @media screen and (max-width: 608px) {\n    & {\n      width: var(--swidth);\n    }\n  }\n"]))),ht=z.a.a(ot||(ot=Object(s.a)(["\n  color: var(--htx);\n  text-decoration: none;\n\n  &:hover {\n    color: var(--txt);\n  }\n\n  & + & {\n    margin-left: 15px;\n  }\n\n  @media screen and (max-width: 608px) {\n    &:first-of-type {\n      margin-left: 110px;\n    }\n  }\n"])));function jt(){return Object(k.jsxs)(bt,{id:"static-links",children:[Object(k.jsx)(ut,{}),["Spotify","Slack","Steam"].map((function(t,n){return Object(k.jsx)(ht,{href:t.toLowerCase()+":",children:t},n)}))]})}var xt,gt,pt,vt,mt,Ot=z.a.div(ft||(ft=Object(s.a)(["\n  // transition: 0.2s height;\n\n  max-width: 912px;\n\n  user-select: none;\n  text-align: center;\n"])));function kt(){var t=Object(r.useState)(""),n=Object(i.a)(t,2),e=n[0],a=n[1],o=Object(r.useState)(null),c=Object(i.a)(o,2),s=c[0],d=c[1],u=Object(l.a)(),f=u.height,b=u.ref;return Object(r.useEffect)((function(){void 0!==f&&document.documentElement.style.setProperty("--homesearch-height","".concat(f,"px"))}),[f]),Object(k.jsxs)(Ot,{id:"main",ref:b,children:[Object(k.jsx)(jt,{}),Object(k.jsx)(tt,{text:e,setText:a,action:s}),Object(k.jsx)(q,{query:e,setAction:d})]})}var wt=z.a.div(xt||(xt=Object(s.a)(["\n  padding: 5px;\n\n  height: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  background-color: var(--hdr);\n\n  color: var(--htx);\n"]))),yt=z.a.i.attrs({className:"fas fa-bars"})(gt||(gt=Object(s.a)(["\n  padding: 5px 15px 5px 5px;\n\n  background-color: var(--hdr);\n  color: var(--txt);\n  font-size: 1.2em;\n"]))),Ct=z.a.span(pt||(pt=Object(s.a)(["\n  margin: 0 auto 0 0;\n"]))),Et=z.a.div(vt||(vt=Object(s.a)(["\n  max-height: ",";\n  transition: max-height\n    ",";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  overflow: auto;\n\n  background-color: var(--frg);\n  color: var(--txt);\n"])),(function(t){return t.open?"500px":"0"}),(function(t){return t.open?"0.25s ease-in":"0.15s ease-out"})),It=z.a.span(mt||(mt=Object(s.a)(["\n  padding: 5px;\n\n  &:hover {\n    background-color: var(--hdr);\n  }\n"])));function St(t){var n=t.tasklists,e=t.activeList,a=t.setActiveList,o=Object(r.useState)(!1),c=Object(i.a)(o,2),s=c[0],l=c[1],d=V().loggedIn;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(wt,{id:"tasksbar",children:[d?Object(k.jsx)(yt,{onClick:w(l,!s)}):Object(k.jsx)(k.Fragment,{}),Object(k.jsx)(Ct,{children:d&&e.title?"Tasks - ".concat(e.title):"Tasks"})]}),Object(k.jsx)(Et,{open:s,children:n.map((function(t,n){return Object(k.jsx)(It,{onClick:function(){a(t),l(!1)},children:t.title},n)}))})]})}var Tt,At,Lt,Mt,Dt,Pt,$t,Nt,Ft,Bt,Rt,zt,Kt=e(13),Ht=e(31),Jt=e.n(Ht),Ut=z.a.div(Tt||(Tt=Object(s.a)(["\n  margin: 0 5px 5px 5px;\n  padding: 0 0 10px 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n\n  background-color: var(--hdr);\n\n  color: var(--txt);\n"]))),qt=Object(z.a)(A)(At||(At=Object(s.a)(["\n  // margin: 10px 10px 10px 7px;\n\n  font-size: large;\n"]))),Xt=z.a.div(Lt||(Lt=Object(s.a)(["\n  padding-top: 3px;\n\n  display: flex;\n  flex-direction: column;\n"]))),Gt=z.a.i.attrs({className:"far fa-trash-alt fa-lg"})(Mt||(Mt=Object(s.a)(["\n  padding: 10px;\n\n  transform: scale(0.96);\n\n  color: var(--htx);\n\n  &:hover {\n    color: var(--txt);\n  }\n"]))),Yt=z.a.div(Dt||(Dt=Object(s.a)(["\n  margin-right: 0;\n\n  display: flex;\n  align-content: flex-start;\n  align-items: center;\n"]))),Zt=z.a.i.attrs({className:"far fa-clock"})(Pt||(Pt=Object(s.a)(["\n  margin: 5px 5px 5px 4px;\n  color: var(--htx);\n"]))),Qt=Object(z.a)(L)($t||($t=Object(s.a)(["\n  transform: scale(0.88) translateX(-13px);\n"])));function Vt(t){var n=t.task,e=t.setTask,r=t.setChecked,a=t.setDeleted;return Object(k.jsxs)(Ut,{className:"taskentry",children:[Object(k.jsx)(I,{checked:void 0!==n.completed,onChange:r}),Object(k.jsxs)(Xt,{children:[Object(k.jsx)(qt,{value:n.title,error:""===n.title,placeholder:"Description cannot be empty",onChange:function(t){return e({title:t.target.value})}}),Object(k.jsxs)(Yt,{children:[Object(k.jsx)(Zt,{}),Object(k.jsx)(Qt,{variant:"inline",autoOk:!0,value:n.due?it()(n.due).add(12,"hour"):null,format:"dddd, MMM D",onAccept:function(t){e({due:null===t||void 0===t?void 0:t.toISOString()})},onChange:function(){}})]})]}),Object(k.jsx)(Gt,{onClick:a})]})}var Wt=z.a.div(Nt||(Nt=Object(s.a)(["\n  padding: 5px;\n  margin: 0 5px 5px 5px;\n\n  color: var(--htx);\n\n  &:hover {\n    color: var(--txt);\n    hr {\n      background-color: var(--txt);\n    }\n  }\n"]))),_t=z.a.hr(Ft||(Ft=Object(s.a)(["\n  height: 1px;\n\n  border-width: 0;\n\n  background-color: var(--htx);\n"]))),tn=z.a.i.attrs((function(t){var n=t.expanded;return{className:"fas fa-chevron-".concat(n?"down":"right")}}))(Bt||(Bt=Object(s.a)(["\n  &.fa-chevron-right {\n    margin-right: 7px;\n  }\n\n  &.fa-chevron-down {\n    margin-right: 3px;\n  }\n"])));function nn(t){var n=t.tasks,e=t.setTask,a=t.setChecked,o=t.setDeleted,c=Object(r.useState)(!1),s=Object(i.a)(c,2),l=s[0],d=s[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(Wt,{id:"completedtasks",onClick:w(d,!l),children:[Object(k.jsx)(_t,{}),Object(k.jsx)(tn,{expanded:l}),Object(k.jsx)("span",{children:"Completed tasks"})]}),l?n.map((function(t,n){return Object(k.jsx)(Vt,{task:t,setTask:w(e,t.id,n),setChecked:w(a,t.id,n),setDeleted:w(o,t.id,n)},n)})):""]})}var en,rn=z.a.div(Rt||(Rt=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n  padding-top: 5px;\n\n  overflow: auto;\n\n  background-color: var(--frg);\n\n  color: var(--htx);\n  text-align: center;\n"]))),an=z.a.p(zt||(zt=Object(s.a)(["\n  margin: 20px 5px;\n"])));function on(t){var n=t.tasks,e=t.setTasks,a=t.completed,o=t.setCompleted,c=t.activeTaskList,s=R().setAddTask,l=V(),d=l.loggedIn,u=l.username,f=Object(r.useCallback)((function(t){try{var r;null===(r=gapi.client.tasks.tasks)||void 0===r||r.insert({resource:t,tasklist:c.id}).then((function(t){if("OK"!==t.statusText)throw Error("failed to add task");e(Jt()(n,{$push:[t.result]}))})).catch((function(t){return console.error(t)}))}catch(a){console.error(a)}}),[n,e,c.id]);Object(r.useEffect)((function(){s(f)}),[f,s]);var b,h=Object(r.useState)({}),j=Object(i.a)(h,2),x=j[0],g=j[1];function p(t,n,e,r,a,o){n(Jt()(t,Object(Kt.a)({},a,{$merge:o})));var c=x[r];if(void 0!==c&&clearTimeout(c),""!==o.title){var i=window.setTimeout((function(){var t;null===(t=gapi.client.tasks.tasks)||void 0===t||t.patch({resource:o,tasklist:e,task:r}).then((function(t){if("OK"!==t.statusText)throw Error("failed to update task ".concat(e," : ").concat(r));g(Jt()(x,{$unset:[r]}))})).catch((function(t){return console.error(t)}))}),500);g(Jt()(x,{$merge:Object(Kt.a)({},r,i)}))}}function v(t,n,e,r,a){try{var o;null===(o=gapi.client.tasks.tasks)||void 0===o||o.delete({tasklist:e,task:r}).then((function(o){if(204!==o.status)throw Error("failed to delete task ".concat(e," : ").concat(r));n(Jt()(t,{$splice:[[a,1]]}))})).catch((function(t){return console.error(t)}))}catch(c){console.error(c)}}function m(t,n,e,r,a,o,c){var i,s=t[c],l={status:"completed"===s.status?"needsAction":"completed"};null===(i=gapi.client.tasks.tasks)||void 0===i||i.patch({resource:l,tasklist:a,task:o}).then((function(i){if("OK"!==i.statusText)throw Error("failed to toggle task completed ".concat(a," : ").concat(o));var l=Jt()(t,{$splice:[[c,1]]});n(l);var d=Jt()(e,{$push:[Jt()(s,"completed"===s.status?{$unset:["completed"],$merge:{status:"needsAction"}}:{$merge:{status:"completed"}})]});r(d)}))}return b=d?Object(k.jsxs)(k.Fragment,{children:[n.length?n.map((function(t,r){return Object(k.jsx)(Vt,{task:t,setTask:w(p,n,e,c.id,t.id,r),setChecked:w(m,n,e,a,o,c.id,t.id,r),setDeleted:w(v,n,e,c.id,t.id,r)},r)})):Object(k.jsxs)(an,{children:["Looks like you have some free time, ",u," :)"]}),Object(k.jsx)(nn,{tasks:a,setTask:w(p,a,o,c.id),setChecked:w(m,a,o,n,e,c.id),setDeleted:w(v,a,o,c.id)})]}):Object(k.jsx)("p",{children:"Use /login to log into Tasks"}),Object(k.jsx)(rn,{id:"taskslist",children:b})}var cn=z.a.div(en||(en=Object(s.a)(["\n  width: var(--section-width);\n  height: var(--homesearch-height);\n\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 608px) {\n    & {\n      height: min-content;\n      margin: 0 0 60px 0;\n    }\n  }\n"])));function sn(){var t=E("tasklists",[]),n=Object(i.a)(t,2),e=n[0],a=n[1],o=E("activelist",{}),c=Object(i.a)(o,2),s=c[0],l=c[1],d=E("tasks",[]),u=Object(i.a)(d,2),f=u[0],b=u[1],h=E("completed",[]),j=Object(i.a)(h,2),x=j[0],g=j[1],p=V().loggedIn;return Object(r.useEffect)((function(){b(f.sort((function(t,n){return t.position&&n.position?t.position.localeCompare(n.position):0})))}),[f,b]),Object(r.useEffect)((function(){if(p)try{var t;console.log("getting lists"),null===(t=Y.a.client.tasks.tasklists)||void 0===t||t.list().then((function(t){if(console.log("lists",t),"OK"!==t.statusText)throw Error("failed to get tasklists");t.result.items&&(a(t.result.items),void 0===s.title&&l(t.result.items[0]))})).catch((function(t){console.error(t)}))}catch(n){console.error(n)}}),[p,a,l,s.title]),Object(r.useEffect)((function(){if(p&&s.id)try{var t;null===(t=Y.a.client.tasks.tasks)||void 0===t||t.list({tasklist:s.id,showCompleted:!0,maxResults:100}).then((function(t){if("OK"!==t.statusText)throw Error("failed to get tasks for list ".concat(s.title));var n=t.result.items||[];b(n.filter((function(t){return void 0===t.completed}))),g(n.filter((function(t){return t.completed})))})).catch((function(t){return console.error(t)}))}catch(n){console.error(n)}}),[p,b,g,s.id,s.title]),Object(k.jsxs)(cn,{id:"tasksmain",children:[Object(k.jsx)(St,{tasklists:e,activeList:s,setActiveList:l}),Object(k.jsx)(on,{tasks:f,setTasks:b,completed:x,setCompleted:g,activeTaskList:s})]})}function ln(){return Object(r.useEffect)((function(){var t,n;document.documentElement.style.setProperty("--base","".concat((t=10,n=360,Math.floor(Math.random()*(n-t+1))+t)))}),[]),Object(k.jsx)(D,{children:Object(k.jsxs)($,{children:[Object(k.jsx)(kt,{}),Object(k.jsx)(sn,{})]})})}e(202);c.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ln,{})}),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.50cc16f3.chunk.js.map