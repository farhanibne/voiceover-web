(this["webpackJsonpvoice-ai"]=this["webpackJsonpvoice-ai"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(6),r=n.n(c),l=(n(15),n(9)),i=n(4),u=(n(16),n(7)),s=n(8),m=new(window.SpeechRecognition||window.webkitSpeechRecognition);m.continuous=!0,m.interimResults=!0,m.lang="en-US";var f=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(null),f=Object(i.a)(r,2),d=f[0],E=f[1],p=Object(o.useState)([]),g=Object(i.a)(p,2),b=g[0],h=g[1];Object(o.useEffect)((function(){v()}),[n]);var v=function(){n?(m.start(),m.onend=function(){console.log("continue.."),m.start()}):(m.stop(),m.onend=function(){console.log("Stopped Mic on Click")}),m.onstart=function(){console.log("Mics on")},m.onresult=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");console.log(t),E(t),m.onerror=function(e){console.log(e.error)}}};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:{textAlign:"center",color:"azure"}},"Voice AI"),a.a.createElement("div",null,a.a.createElement("center",null,a.a.createElement("div",{className:"b"},a.a.createElement("h2",{style:{color:"azure"}},"Sppech Recordeing Bar"),a.a.createElement("span",null),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("button",{style:{color:"azure"},onClick:function(){h([].concat(Object(l.a)(b),[d])),E("")},disabled:!d},a.a.createElement(u.a,null)),a.a.createElement("button",{style:{color:"azure"},onClick:function(){return c((function(e){return!e}))}},a.a.createElement(s.a,null))),a.a.createElement("p",{style:{color:"azure"}},d))),a.a.createElement("center",null),a.a.createElement("center",null,a.a.createElement("div",{className:"b"},a.a.createElement("h2",{style:{color:"azure"}},"Saved"),b.map((function(e){return a.a.createElement("p",{style:{color:"azure"},key:e},e)}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.78828977.chunk.js.map