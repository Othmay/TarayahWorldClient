(this.webpackJsonptarayah=this.webpackJsonptarayah||[]).push([[0],{108:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(41),r=a.n(c),o=(a(70),a(3)),i=(a(71),a(42)),s=a.n(i),m=a(43),u=a.n(m),d=a(44),p=a.n(d),E=function(e){var t=e.introScreen,a=e.introTimeout,n=l.a.createElement("div",null,l.a.createElement("img",{src:u.a,alt:"Tarayah",className:"tarayahIntro"}),l.a.createElement("img",{src:p.a,alt:"World",className:"worldIntro"})),c=l.a.createElement("div",null,l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideoIntro"},l.a.createElement("source",{src:s.a,type:"video/mp4"}),"Your browser does not support the intro video")),r=l.a.createElement("div",null,l.a.createElement("button",{className:"introButton",onClick:a},l.a.createElement("div",{className:"introButtonEnter"},"ENTER"),"prepare to explore"));return l.a.createElement("div",{className:t},n,c,r)},f=a(19),b=a.n(f),g=a(45),v=a.n(g),h=a(46),N=a.n(h),y=a(47),j=a.n(y),O=a(48),w=a.n(O),T=a(49),x=a.n(T),C=a(50),k=a.n(C),L=function(){var e=l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:k.a,alt:"TarayahWorld",className:"tarayahWorldHeader"})),t=l.a.createElement("div",{className:"headerIcon"},l.a.createElement("a",{href:"https://www.youtube.com/channel/UCsTBtbUxAVwsLF8devi7aUA?view_as=subscriber",target:"_blank",rel:"noopener noreferrer",className:"socialsIcon"},l.a.createElement("img",{src:b.a,alt:"youtube",className:"socialsIcon"})),l.a.createElement("a",{href:"https://www.instagram.com/tarayahworld/?hl=en",target:"_blank",rel:"noopener noreferrer",className:"socialsIcon"},l.a.createElement("img",{src:v.a,alt:"instagram",className:"socialsIcon"})),l.a.createElement("a",{href:"https://twitter.com/TarayahWorld",target:"_blank",rel:"noopener noreferrer",className:"socialsIcon"},l.a.createElement("img",{src:N.a,alt:"twitter",className:"socialsIcon"})),l.a.createElement("a",{href:"https://www.twitch.tv/tarayah",target:"_blank",rel:"noopener noreferrer",className:"socialsIcon"},l.a.createElement("img",{src:j.a,alt:"twitch",className:"socialsIcon"})),l.a.createElement("a",{href:"https://discord.com/invite/WZMFE5W",target:"_blank",rel:"noopener noreferrer",className:"socialsIcon"},l.a.createElement("img",{src:w.a,alt:"discord",className:"socialsIcon"})),l.a.createElement("a",{href:"https://www.etsy.com/fr/shop/TarayahWorld",target:"_blank",rel:"noopener noreferrer",className:"socialsIcon"},l.a.createElement("img",{src:x.a,alt:"etsy",className:"socialsIcon"})));return l.a.createElement("div",null,t,e)},I=a(2),S=a(12),V=function(e,t){switch(t.type){case"switchPlanetToggle":return[].concat(Object(S.a)(e.slice(0,t.index)),[Object(I.a)(Object(I.a)({},e[t.index]),{},{planetToggle:!e[t.index].planetToggle})],Object(S.a)(e.slice(t.index+1)));case"switchInfoToggle":return e.forEach((function(e){return e.planetToggle=!1})),e.filter((function(e,a){return a!==t.index})).forEach((function(e){-1===e.classes.indexOf(" none")&&(e.classes=e.classes+" none")})),[].concat(Object(S.a)(e.slice(0,t.index)),[Object(I.a)(Object(I.a)({},e[t.index]),{},{infoToggle:!e[t.index].infoToggle})],Object(S.a)(e.slice(t.index+1)));case"reset":return[{id:"news",planetToggle:!1,infoToggle:!1,classes:"planet1"},{id:"art",planetToggle:!1,infoToggle:!1,classes:"planet2"},{id:"about",planetToggle:!1,infoToggle:!1,classes:"planet3"},{id:"contact",planetToggle:!1,infoToggle:!1,classes:"planet4"},{id:"music",planetToggle:!1,infoToggle:!1,classes:"planet5"},{id:"socials",planetToggle:!1,infoToggle:!1,classes:"planet6"}];default:return e}},D=Object(n.createContext)(),A=function(e){var t=Object(n.useReducer)(V,[{id:"news",planetToggle:!1,infoToggle:!1,classes:"planet1"},{id:"art",planetToggle:!1,infoToggle:!1,classes:"planet2"},{id:"about",planetToggle:!1,infoToggle:!1,classes:"planet3"},{id:"contact",planetToggle:!1,infoToggle:!1,classes:"planet4"},{id:"music",planetToggle:!1,infoToggle:!1,classes:"planet5"},{id:"socials",planetToggle:!1,infoToggle:!1,classes:"planet6"}]),a=Object(o.a)(t,2),c=a[0],r=a[1];return l.a.createElement(D.Provider,{value:{planetsTab:c,dispatch:r}},e.children)},B=a(9),M=a.n(B),U=function(e){var t=Object(n.useContext)(D).dispatch,a=e.planet,c=e.index,r=M()("planet",a.classes,{planetZoom:a.planetToggle},{planetEnter:a.infoToggle}),o=M()("planetText",{flex:a.planetToggle&&!a.infoToggle}),i=l.a.createElement("div",{className:r,onClick:function(){return t({type:"switchInfoToggle",index:c})},onMouseEnter:function(){return t({type:"switchPlanetToggle",index:c})},onMouseLeave:function(){return t({type:"switchPlanetToggle",index:c})}},l.a.createElement("div",{className:o},a.id));return l.a.createElement("div",null,i)},W=function(e){var t=Object(n.useContext)(D).dispatch,a=e.planet,c=M()("resetBtn",{flex:a.infoToggle}),r=l.a.createElement("div",{className:c,onClick:function(){return t({type:"reset"})}},"Leave the atmosphere !");return l.a.createElement("div",null,r)},P=a(26),Y=a.n(P);a(72),a(75),a(77);Y.a.initializeApp({apiKey:"AIzaSyDZ8Et5Q5Khk2yMlXhmdEpSkKs43VBmY2Y",authDomain:"tarayah-world.firebaseapp.com",databaseURL:"https://tarayah-world.firebaseio.com",projectId:"tarayah-world",storageBucket:"tarayah-world.appspot.com",messagingSenderId:"993421503462",appId:"1:993421503462:web:c4fefd4572d3553be60427",measurementId:"G-LE93QZYFDR"});var F=Y.a,_=a(20),q=a.n(_),z=a(51),G=function(e){var t=e.dataLocal,a=t.link.slice(t.link.indexOf("=")+1),n=l.a.createElement("div",null,l.a.createElement("div",{className:"infoCategory"},t.category),l.a.createElement("div",{className:"infoTitle"},t.title),l.a.createElement("div",{className:"newsYoutube"},l.a.createElement(z.a,{videoId:a,className:"youtubeVideo"})),l.a.createElement("div",{className:"newsPaint"},l.a.createElement("img",{className:"newsImg",src:q.a,alt:"New painting"})),l.a.createElement("p",{className:"newsContent"},t.content));return l.a.createElement("div",null,n)},R=a(54),Z=a.n(R),H=a(55),J=a.n(H),K=a(56),Q=a.n(K),X=a(57),$=a.n(X),ee=a(58),te=a.n(ee),ae=a(59),ne=a.n(ae),le=Object(n.memo)((function(e){var t=e.dataLocal,a=e.cardsNumber,n=M()({cards:!0,cardText:0===a,cardGallery:1===a});var c=0===a?l.a.createElement("div",null,l.a.createElement("div",null,t.content),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("img",{className:"exemplePaint",src:q.a,alt:"ExampleImg"})):1===a?l.a.createElement("div",null,l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{className:"painting",src:Z.a,alt:"painting here"})),l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{className:"painting",src:J.a,alt:"painting here"})),l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{className:"painting",src:Q.a,alt:"painting here"})),l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{className:"painting",src:$.a,alt:"painting here"})),l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{className:"painting",src:te.a,alt:"painting here"})),l.a.createElement("div",{className:"gallery"},l.a.createElement("img",{className:"painting",src:ne.a,alt:"painting here"}))):void 0;return l.a.createElement("div",{className:n},c)})),ce=function(e){var t=e.dataLocal,a=Object(n.useState)(1),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(!0),m=Object(o.a)(s,2),u=m[0],d=m[1],p=M()({cardsContainer:!0,cards1:1===r,cards2:2===r,cardsEnd:3===r,transition:u});var E=l.a.createElement("div",null,l.a.createElement("div",{className:"infoCategory"},t.category),l.a.createElement("div",{className:"infoTitle"},t.title),l.a.createElement("button",{className:"previous",onClick:function(){1===r&&(i(0),setTimeout((function(){d(!1),i(2)}),302)),d(!0),i(r-1)}},"<"),l.a.createElement("button",{className:"next",onClick:function(){2===r&&(i(3),setTimeout((function(){d(!1),i(1)}),302)),d(!0),i(r+1)}},">"),l.a.createElement("div",{className:"carouselContainer"},l.a.createElement("div",{className:p},l.a.createElement(le,{dataLocal:t,cardsNumber:1}),l.a.createElement(le,{dataLocal:t,cardsNumber:0}),l.a.createElement(le,{dataLocal:t,cardsNumber:1}),l.a.createElement(le,{dataLocal:t,cardsNumber:0}))));return l.a.createElement("div",null,E)},re=function(e){var t=e.dataLocal,a=l.a.createElement("div",null,l.a.createElement("div",{className:"infoCategory"},t.category),l.a.createElement("div",{className:"infoTitle"},t.title),l.a.createElement("ul",{className:"musicList"},t.songs.map((function(e,t){return l.a.createElement("li",{key:t,className:"songs"},e.songTitle,l.a.createElement("a",{href:e.songLink,target:"_blank",rel:"noopener noreferrer",className:"musicLinkIcon"},l.a.createElement("img",{src:b.a,alt:"youtube",className:"musicLinkIcon"})))}))));return l.a.createElement("div",null,a)},oe=function(e){var t=e.dataLocal,a=l.a.createElement("div",null,l.a.createElement("div",{className:"infoCategory"},t.category),l.a.createElement("div",{className:"infoTitle"},t.title),l.a.createElement("p",{className:"aboutContent"},t.content.replace(/_n/g,"\n")));return l.a.createElement("div",null,a)},ie=function(e){var t=e.dataLocal,a=e.social,n=M()("socialsInfo",{flex:a.hover});var c="Discord"===a.id?t.infoDiscord:"Youtube"===a.id?t.infoYoutube:"Instagram"===a.id?t.infoInstagram:"Twitter"===a.id?t.infoTwitter:"Twitch"===a.id?t.infoTwitch:"Etsy"===a.id?t.infoEtsy:"no info";return l.a.createElement("div",{className:n},c)},se=function(e){var t=e.dataLocal,a=Object(n.useState)([{id:"Discord",hover:!1,link:"https://discord.com/invite/WZMFE5W"},{id:"Youtube",hover:!1,link:"https://www.youtube.com/channel/UCsTBtbUxAVwsLF8devi7aUA?view_as=subscriber"},{id:"Instagram",hover:!1,link:"https://www.instagram.com/tarayahworld/?hl=en"},{id:"Twitter",hover:!1,link:"https://twitter.com/TarayahWorld"},{id:"Twitch",hover:!1,link:"https://www.twitch.tv/tarayah"},{id:"Etsy",hover:!1,link:"https://www.etsy.com/fr/shop/TarayahWorld"}]),c=Object(o.a)(a,2),r=c[0],i=c[1],s=function(e){return i([].concat(Object(S.a)(r.slice(0,e)),[Object(I.a)(Object(I.a)({},r[e]),{},{hover:!r[e].hover})],Object(S.a)(r.slice(e+1))))},m=l.a.createElement("div",null,l.a.createElement("div",{className:"infoCategory"},t.category),l.a.createElement("div",{className:"infoTitle"},t.title),r.map((function(e,a){return l.a.createElement("a",{key:e.id,href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"socials"+e.id,onMouseEnter:function(){return s(a)},onMouseLeave:function(){return s(a)}},l.a.createElement("div",{className:"socialsDot"}),e.id,l.a.createElement(ie,{social:e,dataLocal:t})))})));return l.a.createElement("div",null,m)},me=a(7),ue=a(60),de=a.n(ue),pe=function(e){var t=e.dataLocal,a=Object(n.useState)({name:"",email:"",subject:"",content:"",sent:null,disabled:!1}),c=Object(o.a)(a,2),r=c[0],i=c[1];function s(e){i(Object(I.a)(Object(I.a)({},r),{},Object(me.a)({},e.target.name,e.target.value)))}var m=l.a.createElement("div",null,l.a.createElement("div",{className:"infoCategory"},t.category),l.a.createElement("div",{className:"infoTitle"},t.title),l.a.createElement("div",{className:"email"},"There are two ways to contact Tarayah,",l.a.createElement("br",null),"either the email adress bellow or",l.a.createElement("br",null),"you can type your message here.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),"email : stellaireperso@gmail.com")),u=l.a.createElement("div",{className:"formDiv"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),de.a.post("https://us-central1-tarayah-world.cloudfunctions.net/genericEmail/",r).then((function(e){e.data.success?i(Object(I.a)(Object(I.a)({},r),{},{sent:!0,disabled:!0})):i(Object(I.a)(Object(I.a)({},r),{},{sent:!1,disabled:!1}))})).catch((function(e){console.log(e),i(Object(I.a)(Object(I.a)({},r),{},{sent:!1,disabled:!1}))}))}},l.a.createElement("input",{className:"formInput",type:"text",name:"name",defaultValue:"name",onChange:s,required:!0}),l.a.createElement("br",null),l.a.createElement("input",{className:"formInput",type:"email",name:"email",defaultValue:"email@dress",onChange:s,required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{className:"formInput",type:"text",name:"subject",defaultValue:"the subject of your message",onChange:s,required:!0}),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"15",className:"formMessage",name:"content",defaultValue:"you can type you message here",onChange:s,required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",disabled:r.disabled},"Submit"),l.a.createElement("div",{className:r.sent?"sentTrue":"sentFalse"},!0===r.sent&&"message sent",!1===r.sent&&"message not sent")));return l.a.createElement("div",null,m,u)};a(108);var Ee=Object(n.memo)((function(e){var t=e.planet,a=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=F.firestore().collection("planets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(I.a)({},e.data())}));l(t)}));return function(){return e()}}),[]),a}().filter((function(e){return e.category.toLowerCase()===t.id})).pop(),c=M()("screen",{flex:t.infoToggle},{screenOpacity:t.infoToggle},{screenNoBG:"socials"===t.id||"news"===t.id});var r=void 0===a?"error loading the page":"News"===a.category?l.a.createElement(G,{dataLocal:a}):"About"===a.category?l.a.createElement(oe,{dataLocal:a}):"Art"===a.category?l.a.createElement(ce,{dataLocal:a}):"Music"===a.category?l.a.createElement(re,{dataLocal:a}):"Contact"===a.category?l.a.createElement(pe,{dataLocal:a}):"Socials"===a.category?l.a.createElement(se,{dataLocal:a}):"error loading page";return l.a.createElement("div",{className:c},r)})),fe=a(61),be=a.n(fe),ge=function(){var e=Object(n.useContext)(D).planetsTab,t=l.a.createElement("div",null,l.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo"},l.a.createElement("source",{src:be.a,type:"video/mp4"}),"your browser does not support the background video")),a=e.map((function(e,t){return l.a.createElement("div",{key:e.id},l.a.createElement(U,{planet:e,index:t}),l.a.createElement(W,{planet:e}),l.a.createElement(Ee,{planet:e,index:t}))}));return l.a.createElement("div",null,t,a)},ve=function(e){var t=e.navBarClass,a=e.menuClass,c=e.navBarToggle,r=Object(n.useContext)(D),o=r.planetsTab,i=r.dispatch,s=function(e){o.forEach((function(t,a){t.id===e&&(i({type:"reset"}),i({type:"switchInfoToggle",index:a}))}))},m=l.a.createElement("div",{className:"navBar "+t},l.a.createElement("div",{className:"socials",onClick:function(){return s("socials")}},"SOCIALS"),l.a.createElement("div",{className:"news",onClick:function(){return s("news")}},"NEWS"),l.a.createElement("div",{className:"about",onClick:function(){return s("about")}},"ABOUT"),l.a.createElement("div",{className:"art",onClick:function(){return s("art")}},"ART"),l.a.createElement("div",{className:"music",onClick:function(){return s("music")}},"MUSIC"),l.a.createElement("div",{className:"contact",onClick:function(){return s("contact")}},"CONTACT")),u=l.a.createElement("div",{className:"menu",onClick:c},l.a.createElement("div",{className:"line1 "+a}),l.a.createElement("div",{className:"line2 "+a}),l.a.createElement("div",{className:"line3 "+a}));return l.a.createElement("div",null,m,u)};var he=function(){var e=Object(n.useState)("intro"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("main"),i=Object(o.a)(r,2),s=i[0],m=i[1],u=Object(n.useState)(!1),d=Object(o.a)(u,2),p=d[0],f=d[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),v=g[0],h=g[1],N=Object(n.useState)(""),y=Object(o.a)(N,2),j=y[0],O=y[1];return l.a.createElement("div",{className:"mainTheme"},l.a.createElement(E,{introScreen:a,introTimeout:function(){c("intro introDone"),setTimeout((function(){c("intro none"),m("main mainFadeIn")}),2e3)}}),l.a.createElement("div",{className:s},l.a.createElement(L,null),l.a.createElement(A,null,l.a.createElement(ge,null),l.a.createElement(ve,{navBarClass:v,menuClass:j,navBarToggle:function(){!1===p?(f(!0),h("opacityOff"),O("menuX")):(f(!1),h(""),O(""))}}))))},Ne=a(27),ye=a.n(Ne),je=a(62),Oe=a(4),we=Object(n.createContext)(),Te=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){F.auth().onAuthStateChanged((function(e){return r(e)}))}),[]),l.a.createElement(we.Provider,{value:{currentUser:c}},e.children)},xe=Object(Oe.g)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(je.a)(ye.a.mark((function e(a){var n,l,c;return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=a.target.elements,l=n.email,c=n.password,e.prev=2,e.next=5,F.auth().signInWithEmailAndPassword(l.value,c.value);case 5:t.push("/update"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(n.useContext)(we).currentUser?l.a.createElement(Oe.a,{to:"/update"}):l.a.createElement("div",null,l.a.createElement("h1",null,"Log in"),l.a.createElement("form",{onSubmit:a},l.a.createElement("label",null,"Email",l.a.createElement("input",{name:"email",type:"email",placeholder:"Email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{name:"password",type:"password",placeholder:"Password"})),l.a.createElement("button",{type:"submit"},"Log in")))})),Ce=function(e){var t=Object(n.useState)(e.dataLocal.filter((function(e){return"About"===e.category})).pop()),a=Object(o.a)(t,2),c=a[0],r=a[1];function i(e){r(Object(I.a)(Object(I.a)({},c),{},Object(me.a)({},e.target.name,e.target.value)))}var s=l.a.createElement("form",null,l.a.createElement("label",{className:"label"},"Title :"),l.a.createElement("input",{type:"text",name:"title",className:"textInput",defaultValue:c.title,onChange:i}),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(e){alert("site updated"),F.firestore().collection("planets").doc("bW7m4GieFYVa6scwoE6i").set(c),e.preventDefault()}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"label"},"Content :"),l.a.createElement("textarea",{name:"content",className:"contentInput",defaultValue:c.content,onChange:i}));return l.a.createElement("div",null,s)},ke=function(e){var t=Object(n.useState)(e.dataLocal.filter((function(e){return"Art"===e.category})).pop()),a=Object(o.a)(t,2),c=a[0],r=a[1];function i(e){r(Object(I.a)(Object(I.a)({},c),{},Object(me.a)({},e.target.name,e.target.value)))}var s=l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{className:"label"},"Title :"),l.a.createElement("input",{type:"text",name:"title",className:"textInput",defaultValue:c.title,onChange:i}),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(e){alert("site updated"),F.firestore().collection("planets").doc("rM1QD78FgewECMreBqg7").set(c),e.preventDefault()}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"label"},"Content :"),l.a.createElement("textarea",{name:"content",className:"contentInput",defaultValue:c.content,onChange:i})));return console.log(c),l.a.createElement("div",null,s)},Le=function(e){var t=Object(n.useState)(e.dataLocal.filter((function(e){return"Music"===e.category})).pop()),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(c.songs),s=Object(o.a)(i,2),m=s[0],u=s[1];function d(e,t){if(null===e)r(Object(I.a)(Object(I.a)({},c),{},Object(me.a)({},t.target.name,t.target.value)));else if(null!==e){var a=Object(S.a)(m);a[e]=Object(I.a)(Object(I.a)({},a[e]),{},Object(me.a)({},t.target.name,t.target.value)),u(a)}}var p=l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{className:"label"},"Title :"),l.a.createElement("input",{type:"text",name:"title",className:"textInput",defaultValue:c.title,onChange:function(e){return d(null,e)}}),l.a.createElement("button",{className:"submitButton",onClick:function(e){alert("site updated");var t=c;t.songs=m,F.firestore().collection("planets").doc("dUq196Ury6IzYhne4Fpb").set(t),e.preventDefault()}},"Submit"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(e){u([].concat(Object(S.a)(m),[{songTitle:"",songLink:""}])),e.preventDefault()}},"Add new song"),l.a.createElement("ul",{className:"songList"},m.map((function(e,t){return l.a.createElement("label",{key:t,className:"label"},"Song :",l.a.createElement("input",{type:"text",name:"songTitle",className:"textInput",defaultValue:e.songTitle,onChange:function(e){return d(t,e)}}),l.a.createElement("button",{onClick:function(e){return function(e,t){u([].concat(Object(S.a)(m.slice(0,e)),Object(S.a)(m.slice(e+1)))),t.preventDefault()}(t,e)}},"Delete"),l.a.createElement("br",null))}))),l.a.createElement("ul",{className:"linkList"},m.map((function(e,t){return l.a.createElement("label",{key:t,className:"label"},"Link :",l.a.createElement("input",{type:"text",name:"songLink",className:"textInput",defaultValue:e.songLink,onChange:function(e){return d(t,e)}}),l.a.createElement("br",null))})))));return l.a.createElement("div",null,p)},Ie=function(e){var t=Object(n.useState)(e.dataLocal.filter((function(e){return"News"===e.category})).pop()),a=Object(o.a)(t,2),c=a[0],r=a[1];function i(e){r(Object(I.a)(Object(I.a)({},c),{},Object(me.a)({},e.target.name,e.target.value)))}var s=l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{className:"label"},"Title :"),l.a.createElement("input",{type:"text",name:"title",className:"textInput",defaultValue:c.title,onChange:i}),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(e){alert("site updated"),F.firestore().collection("planets").doc("9owHLfMx8FNN1Hczuh7O").set(c),e.preventDefault()}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"label"},"Youtube :"),l.a.createElement("input",{type:"text",name:"link",className:"textInput",defaultValue:c.link,onChange:i}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"label"},"Content :"),l.a.createElement("textarea",{name:"content",className:"contentInput",defaultValue:c.content,onChange:i})));return console.log(c),l.a.createElement("div",null,s)},Se=function(e){var t=Object(n.useState)(e.dataLocal.filter((function(e){return"Socials"===e.category})).pop()),a=Object(o.a)(t,2),c=a[0],r=a[1];function i(e){r(Object(I.a)(Object(I.a)({},c),{},Object(me.a)({},e.target.name,e.target.value)))}var s=l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",{className:"label"},"Title :",l.a.createElement("input",{type:"text",name:"title",className:"textInput",defaultValue:c.title,onChange:i}),l.a.createElement("input",{type:"submit",value:"Submit",onClick:function(e){alert("site updated"),F.firestore().collection("planets").doc("D9eN3Jf1G59ezoWqcBCY").set(c),e.preventDefault()}})),l.a.createElement("br",null),l.a.createElement("div",{className:"divLabel"},l.a.createElement("label",{className:"label"},"Discord :"),l.a.createElement("textarea",{rows:"6",name:"label infoDiscord",defaultValue:c.infoDiscord,onChange:i})),l.a.createElement("div",{className:"divLabel"},l.a.createElement("label",{className:"label"},"Youtube :"),l.a.createElement("textarea",{rows:"6",name:"infoYoutube",defaultValue:c.infoYoutube,onChange:i})),l.a.createElement("div",{className:"divLabel"},l.a.createElement("label",{className:"label"},"Twitter :"),l.a.createElement("textarea",{rows:"6",name:"infoTwitter",defaultValue:c.infoTwitter,onChange:i})),l.a.createElement("div",{className:"divLabel"},l.a.createElement("label",{className:"label"},"Twitch :"),l.a.createElement("textarea",{rows:"6",name:"infoTwitch",defaultValue:c.infoTwitch,onChange:i})),l.a.createElement("div",{className:"divLabel"},l.a.createElement("label",{className:"label"},"Instagram :"),l.a.createElement("textarea",{rows:"6",name:"infoInstagram",defaultValue:c.infoInstagram,onChange:i})),l.a.createElement("div",{className:"divLabel"},l.a.createElement("label",{className:"label"},"Etsy :"),l.a.createElement("textarea",{rows:"6",name:"infoEtsy",defaultValue:c.infoEtsy,onChange:i}))));return console.log(c),l.a.createElement("div",null,s)};a(112);var Ve=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=F.firestore().collection("planets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(I.a)({},e.data())}));l(t)}));return function(){return e()}}),[]),a}(),i=a?"About"===a?l.a.createElement(Ce,{dataLocal:r}):"Art"===a?l.a.createElement(ke,{dataLocal:r}):"Music"===a?l.a.createElement(Le,{dataLocal:r}):"News"===a?l.a.createElement(Ie,{dataLocal:r}):"Socials"===a?l.a.createElement(Se,{dataLocal:r}):l.a.createElement("div",null,"Please select a page to Update"):l.a.createElement("div",null,"Please select a page to Update");var s=l.a.createElement("div",null,"Bonjour Tarayah, ce site web a besoin de toi pour etre mis a jour!!!",l.a.createElement("br",null),"Tu n'as qu'a s\xe9lectionn\xe9 une page \xe0 modifier.",l.a.createElement("br",null),l.a.createElement("select",{className:"selectPage",onChange:function(e){c(e.target.value)}},l.a.createElement("option",null),l.a.createElement("option",null,"News"),l.a.createElement("option",{disabled:!0},"----------"),l.a.createElement("option",null,"Music"),l.a.createElement("option",null,"Art"),l.a.createElement("option",{disabled:!0},"----------"),l.a.createElement("option",null,"About"),l.a.createElement("option",null,"Socials")),l.a.createElement("button",{className:"signOut",onClick:function(){return F.auth().signOut()}},"Sign out"),l.a.createElement("br",null),l.a.createElement("br",null),i);return l.a.createElement("div",null,s)},De=a(25),Ae=a(64),Be=function(e){var t=e.component,a=Object(Ae.a)(e,["component"]),c=Object(n.useContext)(we).currentUser;return l.a.createElement(Oe.b,Object.assign({},a,{render:function(e){return c?l.a.createElement(t,e):l.a.createElement(Oe.a,{to:"/login"})}}))},Me=function(){return l.a.createElement(Te,null,l.a.createElement(De.a,null,l.a.createElement(Oe.d,null,l.a.createElement(Oe.b,{exact:!0,path:"/",component:he}),l.a.createElement(Oe.b,{path:"/login",component:xe}),l.a.createElement(Be,{path:"/update",component:Ve}),l.a.createElement(Oe.b,{render:function(){return l.a.createElement("h1",null,"404: page not found")}}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Me,null)),document.getElementById("root"))},19:function(e,t,a){e.exports=a.p+"static/media/youtube.11fbf1e3.svg"},20:function(e,t,a){e.exports=a.p+"static/media/news.cc83c0da.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/introUniverse.186bfe7d.mp4"},43:function(e,t,a){e.exports=a.p+"static/media/Tarayah.db6b603b.png"},44:function(e,t,a){e.exports=a.p+"static/media/World.33bd27d2.png"},45:function(e,t,a){e.exports=a.p+"static/media/instagram.fc23b902.svg"},46:function(e,t,a){e.exports=a.p+"static/media/twitter.c9f12008.svg"},47:function(e,t,a){e.exports=a.p+"static/media/twitch.4baa6b48.png"},48:function(e,t,a){e.exports=a.p+"static/media/discord.ce6d0726.png"},49:function(e,t,a){e.exports=a.p+"static/media/etsy.09ded6ae.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/TarayahWorld.2f8ec7bd.png"},54:function(e,t,a){e.exports=a.p+"static/media/painting1.1d4bef1b.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/painting2.7d12d498.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/painting3.a7a7ccee.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/painting4.7152d8c9.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/painting5.c96ece7e.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/painting6.d7afd8a0.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/StarsBg.c7edd66c.mp4"},65:function(e,t,a){e.exports=a(113)},70:function(e,t,a){},71:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.660545bc.chunk.js.map