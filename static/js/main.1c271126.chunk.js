(this.webpackJsonpebbinghaus=this.webpackJsonpebbinghaus||[]).push([[0],{111:function(e,t,a){e.exports=a(123)},116:function(e,t,a){},117:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(116),a(117),a(17)),i=a(49),m=a(19),s=a(54),d=function(e,t,a,n){var r=(e-t)/432e5;return 1-Math.exp(-r/(a+n))},u=function(e){!function(e){e.forEach((function(e){var t=(new Date).getTime();e.weight=d(t,e.updateTime,e.practice,e.remember)}))}(e),function(e){var t,a=0,n=Object(s.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.normCumulatedWeight=a,a+=r.weight}}catch(c){n.e(c)}finally{n.f()}var l,o=Object(s.a)(e);try{for(o.s();!(l=o.n()).done;){l.value.normCumulatedWeight/=a}}catch(c){o.e(c)}finally{o.f()}}(e)},p=function(e,t){for(var a=[],n=function(){var t=Math.random(),n=b(e,t);void 0===a.find((function(e){return e.index===n.index}))&&a.push(n)};a.length<Math.min(t,e.length);)n();return a},b=function(e,t){return e[f(e,0,e.length-1,t)]},f=function(e,t,a,n){for(;t<a;){var r=Math.floor(t+(a-t)/2)+1;e[r].normCumulatedWeight<=n?t=r:e[r].normCumulatedWeight>n&&(a=r-1)}return a},g=["LeetCode","Codility"],E=["Easy","Medium","Hard","Painless","Respectable"],h=["platform","serial","name","practice","remember","weight","difficulty"],y={platform:"Platform",serial:"Serial",name:"Problem Name",practice:"Number of Practices",remember:"Number of Remembered",weight:"Memory Intensity",difficulty:"Difficulty"},v=function(){try{var e=localStorage.getItem("state");return null===e?[]:JSON.parse(e)}catch(t){return console.log(t),[]}}();u(v);var O={selectedProblems:p(v,3),problems:v,sortEntry:"platform",isReverse:!1},j=function(e,t){switch(t.type){case"addProblem":return t.payload&&e.problems.find((function(e){return e.index===t.payload.index}))?e:Object(m.a)({},e,{problems:[].concat(Object(i.a)(e.problems),[t.payload])});case"addProblems":return t.payload?Object(m.a)({},e,{problems:t.payload}):e;case"addSelectedProblems":return t.payload?Object(m.a)({},e,{selectedProblems:t.payload}):e;case"deleteProblem":if(t.payload){var a=e.problems.find((function(e){return e.index===t.payload}));if(void 0!==a){var n=e.problems.indexOf(a),r=Object(i.a)(e.problems);return r.splice(n,1),Object(m.a)({},e,{problems:r})}}return e;case"deleteSelectedProblem":if(t.payload){var l=e.selectedProblems.find((function(e){return e.index===t.payload}));if(void 0!==l){var o=e.selectedProblems.indexOf(l),c=Object(i.a)(e.selectedProblems);return c.splice(o,1),Object(m.a)({},e,{selectedProblems:c})}}return e;case"updateProblem":if(t.payload){var s=e.problems.find((function(e){return e.index===t.payload.index}));if(void 0!==s){var d=e.problems.indexOf(s),p=Object(i.a)(e.problems);return p.splice(d,1,t.payload),Object(m.a)({},e,{problems:p})}}return e;case"updateWeightsNormCumulated":var b=Object(i.a)(e.problems);return u(b),Object(m.a)({},e,{problems:b});case"sortProblems":var f=t.payload.sortEntry,g=t.payload.isReverse,E=g?-1:1;if(f!==e.sortEntry||g!==e.isReverse){var h=e.problems.sort((function(e,t){return"serial"===f&&0===e.platform&&0===t.platform?E*(parseInt(e[f])-parseInt(t[f])):e[f]<t[f]?-E:E}));return Object(m.a)({},e,{problems:h,sortEntry:f,isReverse:g})}return e;default:return e}},C=Object(n.createContext)(O),P=function(e){var t=e.children,a=Object(n.useReducer)(j,O),l=Object(c.a)(a,2),o=l[0],i=l[1];return r.a.createElement(C.Provider,{value:Object(m.a)({},o,{dispatch:i})},t)},x=a(185),w=a(70),S=a(173),k=a(165),N=a(190),D=a(82),W=a.n(D),R=a(83),T=a.n(R),A=a(191),M=a(192),B=a(168),I={addProblemDialogOpen:!1,sortProblemsDialogOpen:!1},U=function(e,t){switch(t.type){case"toggleAddProblem":return Object(m.a)({},e,{addProblemDialogOpen:t.payload});case"toggleSortProblems":return Object(m.a)({},e,{sortProblemsDialogOpen:t.payload});default:return e}},L=Object(n.createContext)(I),J=function(e){var t=e.children,a=Object(n.useReducer)(U,I),l=Object(c.a)(a,2),o=l[0],i=l[1];return r.a.createElement(L.Provider,{value:Object(m.a)({},o,{dispatch:i})},t)},F=a(85),q=a.n(F),G=a(86),H=a.n(G),K=a(84),z=a.n(K),Q=Object(k.a)((function(e){return Object(N.a)({speedDial:{position:"fixed","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:e.spacing(5),right:e.spacing(5)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:e.spacing(5),left:e.spacing(5)}}})})),V=function(){var e=Q(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],i=Object(n.useContext)(L).dispatch,m=Object(n.useContext)(C),d=m.problems,u=m.dispatch,b=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement(A.a,{ariaLabel:"Quick Access",className:e.speedDial,icon:r.a.createElement(M.a,null),onClose:b,onOpen:function(){o(!0)},open:l},r.a.createElement(B.a,{title:"Add Problem",icon:r.a.createElement(W.a,null),tooltipTitle:"Add Problem",onClick:function(){b(),i&&i({type:"toggleAddProblem",payload:!0})}}),r.a.createElement(B.a,{title:"Refresh Selected Problems",icon:r.a.createElement(T.a,null),tooltipTitle:"Refresh Selected Problems",onClick:function(){b(),function(){u&&u({type:"updateWeightsNormCumulated"});var e=p(d,3);u&&u({type:"addSelectedProblems",payload:e})}()}}),r.a.createElement(B.a,{title:"Sort Problems",icon:r.a.createElement(z.a,null),tooltipTitle:"Sort Problems",onClick:function(){b(),i&&i({type:"toggleSortProblems",payload:!0})}}),r.a.createElement(B.a,{title:"Download Problems",icon:r.a.createElement(q.a,null),tooltipTitle:"Download Problems",onClick:function(){return function(e){if(window.navigator&&window.navigator.msSaveOrOpenBlob){var t=new Blob([decodeURIComponent(encodeURI(JSON.stringify(e)))],{type:"application/json;charset=utf-8;"});navigator.msSaveOrOpenBlob(t,"state.json")}else{var a=document.createElement("a");a.download="state.json",a.href="data:application/json;charset=utf-8;,"+encodeURIComponent(JSON.stringify(e)),a.target="_blank",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}(d)}}),r.a.createElement(B.a,{title:"Upload Problems",icon:r.a.createElement("div",null,r.a.createElement("input",{type:"file",id:"contained-button-file",style:{display:"none"},onChange:function(e){if(e.target.files){var t=new FileReader;t.onloadend=function(){var e=JSON.parse(t.result);if(0===d.length)u&&u({type:"addProblems",payload:e});else{var a,n=Object(s.a)(e);try{var r=function(){var e=a.value;d.find((function(t){return t.index===e.index}))||u&&u({type:"addProblem",payload:e})};for(n.s();!(a=n.n()).done;)r()}catch(l){n.e(l)}finally{n.f()}}},t.readAsText(e.target.files[0])}}}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(H.a,null))),tooltipTitle:"Upload Problems",onClick:b})))},$=a(15),_=a(170),X=a(189),Y=a(171),Z=a(172),ee=a(187),te=a(193),ae=a(176),ne=a(128),re=a(177),le=a(127),oe=a(89),ce=a(13),ie=a(186),me=a(194),se=function(){var e=Object(n.useContext)(L),t=e.addProblemDialogOpen,a=e.dispatch,l=Object(n.useContext)(C).dispatch,o=Object($.a)(),i=Object(_.a)(o.breakpoints.down("sm")),m=Object(n.useState)(0),s=Object(c.a)(m,2),u=s[0],p=s[1],b=Object(n.useState)(""),f=Object(c.a)(b,2),g=f[0],E=f[1],h=Object(n.useState)(""),y=Object(c.a)(h,2),v=y[0],O=y[1],j=Object(n.useState)(0),P=Object(c.a)(j,2),x=P[0],w=P[1],k=Object(n.useState)(null),N=Object(c.a)(k,2),D=N[0],W=N[1],R=function(){a&&a({type:"toggleAddProblem",payload:!1}),p(0),E(""),O(""),w(0),W(null)},T=function(e){return function(t){e(t.target.value)}};return r.a.createElement(X.a,{fullScreen:i,open:t,onClose:R,"aria-labelledby":"add-problem-dialog"},r.a.createElement(Y.a,{id:"add-problem-dialog-title"},"Add New Problem"),r.a.createElement(Z.a,null,r.a.createElement(S.a,{container:!0,spacing:2,justify:"center",alignItems:"center"},r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,{id:"platform",fullWidth:!0,required:!0,variant:"outlined",label:"Platform",value:u,onChange:T(p),select:!0},r.a.createElement(te.a,{value:0},"LeetCode"),r.a.createElement(te.a,{value:1},"Codility"))),r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,{id:"serial",fullWidth:!0,required:!0,variant:"outlined",label:0===u?"Serial Number":"Lesson Number",value:g,onChange:T(E)})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(ee.a,{id:"name",fullWidth:!0,required:!0,variant:"outlined",label:"Problem Name",value:v,onChange:T(O)})),r.a.createElement(S.a,{item:!0,xs:12,sm:6},0===u&&r.a.createElement(ee.a,{id:"difficulty",fullWidth:!0,required:!0,variant:"outlined",label:"Difficulty",value:x,onChange:T(w),select:!0},r.a.createElement(te.a,{value:0},"Easy"),r.a.createElement(te.a,{value:1},"Medium"),r.a.createElement(te.a,{value:2},"Hard")),1===u&&r.a.createElement(ee.a,{id:"difficulty",fullWidth:!0,required:!0,variant:"outlined",label:"Difficulty",value:x,onChange:T(w),select:!0},r.a.createElement(te.a,{value:4},"Painless"),r.a.createElement(te.a,{value:5},"Respectable"))),r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{utils:oe.a},r.a.createElement(ie.a,{autoOk:!0,clearable:!0,fullWidth:!0,inputVariant:"outlined",color:"secondary",ampm:!1,allowKeyboardControl:!1,margin:"normal",id:"create time",label:"Create Time",value:D,strictCompareDates:!0,onChange:function(e){return W(e)},onError:console.log,format:"dd.MMM.yyyy HH:mm",InputProps:{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(ne.a,null,r.a.createElement(me.a,null)))}}))))),r.a.createElement(re.a,null,r.a.createElement(le.a,{autoFocus:!0,onClick:R,color:"secondary"},"Cancel"),r.a.createElement(le.a,{onClick:function(){g&&v&&(!function(){var e=(new Date).getTime(),t=null===D?e:D.getTime(),a={platform:u,serial:g,name:v,index:(g+v).replace(" ","").toLowerCase(),practice:1,remember:1,difficulty:x,createTime:t,updateTime:t,weight:d(e,t,1,1),normCumulatedWeight:0};l&&l({type:"addProblem",payload:a})}(),R())},color:"primary",autoFocus:!0},"OK")))},de=a(180),ue=a(181),pe=a(182),be=a(131),fe=a(87),ge=a.n(fe),Ee=a(63),he=a.n(Ee),ye=a(64),ve=a.n(ye),Oe=a(88),je=a.n(Oe),Ce=a(178),Pe=a(179),xe=Object(k.a)((function(){return Object(N.a)({bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},content:{textAlign:"left"}})})),we=function(e){var t=xe(),a=r.a.createElement("span",{className:t.bullet},"\u2022"),n=e.problem;return r.a.createElement(Ce.a,{className:t.content},r.a.createElement(S.a,{container:!0,spacing:0},r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(w.a,{className:t.title,color:"textSecondary",gutterBottom:!0},g[n.platform]," ",a," ",n.serial," ",a," ",E[n.difficulty])),r.a.createElement(S.a,{item:!0,xs:12,style:{height:100}},r.a.createElement(w.a,{variant:"h5",component:"h3"},n.name)),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(w.a,{className:t.pos,color:"textSecondary"},"Practiced: ",n.practice)),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(w.a,{className:t.pos,color:"textSecondary"},"Remembered: ",n.remember)),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(Pe.a,{variant:"determinate",value:100*(1-n.weight),style:{height:10}}))))},Se=Object(k.a)((function(){return Object(N.a)({card:{height:"100%",display:"flex",flexDirection:"column"}})})),ke=function(e){var t=Se(),a=e.problem,l=Object(n.useContext)(C).dispatch,o=function(e,t){switch(e.updateTime=(new Date).getTime(),e.weight=0,t){case"remembered":e.practice++,e.remember++;break;case"fail-to-remember":e.practice++;break;case"reset":e.practice=1,e.remember=1}l&&l({type:"updateProblem",payload:e})};return r.a.createElement(de.a,{className:t.card},r.a.createElement(we,{problem:a}),r.a.createElement(ue.a,null,r.a.createElement(pe.a,null,r.a.createElement(ne.a,{"aria-label":"delete",onClick:function(){return e=a.index,void(l&&(l({type:"deleteProblem",payload:e}),l({type:"deleteSelectedProblem",payload:e})));var e}},r.a.createElement(be.a,{title:"delete"},r.a.createElement(ge.a,{color:"secondary"}))),r.a.createElement(ne.a,{"aria-label":"remembered",onClick:function(){return o(a,"remembered")}},r.a.createElement(be.a,{title:"remembered"},r.a.createElement(he.a,{style:{color:"green"}}))),r.a.createElement(ne.a,{"aria-label":"fail-to-remember",onClick:function(){return o(a,"fail-to-remember")}},r.a.createElement(be.a,{title:"forget"},r.a.createElement(ve.a,{style:{color:"orange"}}))),r.a.createElement(ne.a,{"aria-label":"reset",onClick:function(){return o(a,"reset")}},r.a.createElement(be.a,{title:"reset"},r.a.createElement(je.a,{style:{color:"blue"}}))))))},Ne=Object(k.a)((function(){return Object(N.a)({card:{height:"100%",display:"flex",flexDirection:"column"}})})),De=function(e){var t=Ne(),a=e.problem,l=Object(n.useContext)(C).dispatch,o=function(e,t){switch(e.updateTime=(new Date).getTime(),e.weight=0,t){case"remembered":e.practice++,e.remember++;break;case"fail-to-remember":e.practice++}l&&(l({type:"updateProblem",payload:e}),l({type:"deleteSelectedProblem",payload:e.index}))};return r.a.createElement(de.a,{className:t.card},r.a.createElement(we,{problem:a}),r.a.createElement(ue.a,null,r.a.createElement(pe.a,null,r.a.createElement(ne.a,{"aria-label":"remembered",onClick:function(){return o(a,"remembered")}},r.a.createElement(he.a,{style:{color:"green"}})),r.a.createElement(ne.a,{"aria-label":"fail-to-remember",onClick:function(){return o(a,"fail-to-remember")}},r.a.createElement(ve.a,{style:{color:"orange"}})))))},We=a(174),Re=a(195),Te=a(183),Ae=a(188),Me=a(184),Be=function(){var e=Object(n.useContext)(L),t=e.sortProblemsDialogOpen,a=e.dispatch,l=Object(n.useContext)(C).dispatch,o=Object(n.useState)("serial"),i=Object(c.a)(o,2),m=i[0],s=i[1],d=Object(n.useState)(!1),u=Object(c.a)(d,2),p=u[0],b=u[1],f=function(){a&&a({type:"toggleSortProblems",payload:!1})};return r.a.createElement(X.a,{open:t,onClose:f},r.a.createElement(Y.a,null,"Sort Problems By..."),r.a.createElement(Z.a,null,r.a.createElement(We.a,{component:"fieldset"},r.a.createElement(Re.a,{value:m,onChange:function(e){s(e.target.value)}},h.map((function(e){return r.a.createElement(Te.a,{key:e,value:e,control:r.a.createElement(Ae.a,null),label:y[e]})})),r.a.createElement(Te.a,{control:r.a.createElement(Me.a,{checked:p,onChange:function(e){b(e.target.checked)},color:"primary"}),label:"Reverse"})))),r.a.createElement(re.a,null,r.a.createElement(le.a,{autoFocus:!0,onClick:f,color:"secondary"},"Cancel"),r.a.createElement(le.a,{onClick:function(){f(),l&&l({type:"sortProblems",payload:{sortEntry:m,isReverse:p}})},color:"primary",autoFocus:!0},"OK")))},Ie=Object(k.a)((function(e){return{heroContent:{padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}})),Ue=function(){var e=Ie(),t=Object(n.useContext)(C),a=t.problems,l=t.selectedProblems;return Object(n.useEffect)((function(){console.log("save to local storage"),function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.error(a)}}(a)}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(x.a,{className:e.heroContent,maxWidth:"sm"},r.a.createElement(w.a,{component:"h1",variant:"h2",align:"center",gutterBottom:!0},"Selected Problems")),r.a.createElement(x.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(S.a,{container:!0,spacing:4},l.map((function(e){return r.a.createElement(S.a,{item:!0,key:e.index,xs:12,sm:6,md:4},r.a.createElement(De,{problem:e}))})))),r.a.createElement(x.a,{className:e.heroContent,maxWidth:"sm"},r.a.createElement(w.a,{component:"h1",variant:"h2",align:"center",gutterBottom:!0},"Problems")),r.a.createElement(x.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(S.a,{container:!0,spacing:4},a.map((function(e){return r.a.createElement(S.a,{item:!0,key:e.index,xs:12,sm:6,md:4},r.a.createElement(ke,{problem:e}))})))),r.a.createElement(V,null),r.a.createElement(se,null),r.a.createElement(Be,null))},Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null,r.a.createElement(J,null,r.a.createElement(Ue,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ebbinghaus",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ebbinghaus","/service-worker.js");Le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Je(t,e)}))}}()}},[[111,1,2]]]);
//# sourceMappingURL=main.1c271126.chunk.js.map