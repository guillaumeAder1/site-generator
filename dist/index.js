!function(e){function t(t){for(var n,u,o=t[0],c=t[1],f=t[2],s=0,d=[];s<o.length;s++)u=o[s],l[u]&&d.push(l[u][0]),l[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);d.length;)d.shift()();return r.push.apply(r,f||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==l[c]&&(n=!1)}n&&(r.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},l={1:0},r=[];function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var i=c;r.push([57,0]),a()}({18:function(e){e.exports={routes:[{name:"Home",path:"my-home",component:""},{name:"Page1",path:"my-page",component:"page1"},{name:"About",path:"my-about",component:"page2"}]}},26:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(1),r=f(l),u=a(17),o=f(a(18)),c=f(a(5));function f(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={open:!1},a.body=document.querySelector("body"),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),n(t,[{key:"addclassName",value:function(e){e?this.body.classList.add("is-menu-visible"):this.body.classList.remove("is-menu-visible")}},{key:"render",value:function(){var e=this;return r.default.createElement(r.default.Fragment,null,r.default.createElement("header",{id:"header",style:{backgroundColor:c.default.style.header}},r.default.createElement("a",{href:"",className:"logo"},r.default.createElement("strong",null,"#portfolio")," ",r.default.createElement("span",null,"Guillaume Ader")),r.default.createElement("nav",null,r.default.createElement("a",{onClick:function(t){return e.addclassName(!0)}},"Menu"))),r.default.createElement("nav",{id:"menu",style:{backgroundColor:c.default.style.mainBg}},r.default.createElement("div",{className:"inner"},r.default.createElement("ul",{className:"links"},o.default.routes.map(function(t,a){return r.default.createElement("li",{key:a},r.default.createElement(u.Link,{key:a,to:"/"+t.path,onClick:function(t){return e.addclassName(!1)}}," ",t.name," "))})),r.default.createElement("ul",{className:"actions vertical"},r.default.createElement("li",null,r.default.createElement("a",{href:"",className:"button special fit"},"  Get Started ")),r.default.createElement("li",null,r.default.createElement("a",{href:"",className:"button fit"},"Log In")))),r.default.createElement("a",{className:"close",onClick:function(t){return e.addclassName(!1)}},"Close")))}}]),t}();t.default=i,e.exports=t.default},27:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(1));l(a(5));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement("section",{id:"contact"},n.default.createElement("div",{className:"inner"},n.default.createElement("section",null,n.default.createElement("form",{method:"post",action:"#"},n.default.createElement("div",{className:"fields"},n.default.createElement("div",{className:"field half"},n.default.createElement("label",{htmlFor:"name"},"Name"),n.default.createElement("input",{type:"text",name:"name",id:"name"})),n.default.createElement("div",{className:"field half"},n.default.createElement("label",{htmlFor:"email"},"Email"),n.default.createElement("input",{type:"text",name:"email",id:"email"})),n.default.createElement("div",{className:"field"},n.default.createElement("label",{htmlFor:"message"},"Message"),n.default.createElement("textarea",{name:"message",id:"message",rows:"6"}))),n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement("input",{type:"submit",value:"Send Message",className:"primary"})),n.default.createElement("li",null,n.default.createElement("input",{type:"reset",value:"Clear"}))))),n.default.createElement("section",{className:"split"},n.default.createElement("section",null,n.default.createElement("div",{className:"contact-method"},n.default.createElement("span",{className:"icon alt fa-envelope"}),n.default.createElement("h3",null,"Email"),n.default.createElement("a",{href:"#"},"information@untitled.tld"))),n.default.createElement("section",null,n.default.createElement("div",{className:"contact-method"},n.default.createElement("span",{className:"icon alt fa-phone"}),n.default.createElement("h3",null,"Phone"),n.default.createElement("span",null,"(000) 000-0000 x12387"))),n.default.createElement("section",null,n.default.createElement("div",{className:"contact-method"},n.default.createElement("span",{className:"icon alt fa-home"}),n.default.createElement("h3",null,"Address"),n.default.createElement("span",null,"1234 Somewhere Road #5432",n.default.createElement("br",null),"Nashville, TN 00000",n.default.createElement("br",null),"United States of America"))))))},e.exports=t.default},28:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(1)),l=r(a(5));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=[];for(var a in e)t.push(e[a]);return n.default.createElement("div",{className:"tiles"},t.map(function(e,t){return function(e,t){return t%2==0?l.default.style.secBg:l.default.style.mainBg,n.default.createElement("article",{key:t,style:{backgroundImage:"url('./assets/images/pic01.jpg')"}},n.default.createElement("span",{className:"image",style:{display:"none"}},n.default.createElement("img",{src:"images/pic01.jpg",alt:""})),n.default.createElement("header",{className:"major"},n.default.createElement("h3",null,n.default.createElement("a",{href:"landing.html",className:"link"},"Aliquam")),n.default.createElement("p",null,"Ipsum dolor sit amet")),n.default.createElement("a",{href:"landing.html",className:"link primary"}))}(0,t)}))},e.exports=t.default},29:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(1)),l=r(a(5));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement("section",{style:{backgroundColor:l.default.style.secBg}},n.default.createElement("div",{className:"inner"},n.default.createElement("header",{className:"major"},n.default.createElement("h2",null,e.title)),n.default.createElement("p",null,e.text)))},e.exports=t.default},30:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(1)),l=r(a(5));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement("section",{style:{backgroundColor:l.default.style.secBg}},n.default.createElement("div",{className:"inner"},n.default.createElement("h2",null,e.title),n.default.createElement("h5",null,e.text)))},e.exports=t.default},31:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(1)),l=r(a(5));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=[];for(var a in e)t.push(e[a]);return n.default.createElement("div",{className:"spotlights"},t.map(function(e,t){return function(e,t){var a=t%2==0?"top center":"center center",r=t%2==0?l.default.style.secBg:l.default.style.mainBg;return n.default.createElement("section",{key:t,style:{backgroundColor:r}},n.default.createElement("a",{href:"generic.html",className:"image"},n.default.createElement("img",{src:"images/pic08.jpg",alt:"","data-position":a})),n.default.createElement("div",{className:"content"},n.default.createElement("div",{className:"inner"},n.default.createElement("header",{className:"major"},n.default.createElement("h3",null,e.title)),n.default.createElement("p",null,e.text),n.default.createElement("ul",{className:"actions"},n.default.createElement("li",null,n.default.createElement("a",{href:"generic.html",className:"button"},"Learn more"))))))}(e,t)}))},e.exports=t.default},32:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(1),u=d(r),o=(d(a(5)),d(a(31))),c=d(a(30)),f=d(a(29)),i=d(a(28)),s=d(a(27));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={html:null},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),l(t,[{key:"buildHtml",value:function(e){var t=Object.keys(e).map(function(t,a){var l=void 0;return"slideshow"==t?l=u.default.createElement(c.default,n({key:a},e[t])):"spotlight"==t?l=u.default.createElement(o.default,n({key:a},e[t])):"header"==t?l=u.default.createElement(f.default,n({key:a},e[t])):"tiles"==t?l=u.default.createElement(i.default,n({key:a},e[t])):"contact"==t&&(l=u.default.createElement(s.default,n({key:a},e[t]))),l});this.setState({html:t})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.config||"page1";fetch("../../src/config/"+t+".json",{method:"get"}).then(function(e){return e.json()}).then(function(t){return e.buildHtml(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return u.default.createElement("div",{id:"wrapper"},this.state.html)}}]),t}();t.default=m,e.exports=t.default},33:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=c(a(1)),r=a(17),u=c(a(18)),o=c(a(32));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement(l.default.Fragment,null,u.default.routes.map(function(e,t){return l.default.createElement(r.Route,{key:t,path:"/"+e.path,render:function(t){return l.default.createElement(o.default,n({},t,{config:e.component}))}})}))},e.exports=t.default},34:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(1)),l=u(a(33)),r=u(a(26));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("div",null,n.default.createElement(r.default,null),n.default.createElement(l.default,null))},e.exports=t.default},35:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},e.exports=t.default},36:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(9),r=a(6),u=a(35),o=(n=u)&&n.__esModule?n:{default:n};var c=(0,l.combineReducers)({routing:r.routerReducer,Counter:o.default});t.default=c,e.exports=t.default},42:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var n=a(9),l=a(6),r=c(a(41)),u=c(a(40)),o=c(a(36));function c(e){return e&&e.__esModule?e:{default:e}}var f=t.history=(0,u.default)(),i=[r.default,(0,l.routerMiddleware)(f)],s=n.compose.apply(void 0,[n.applyMiddleware.apply(void 0,i)].concat([]));t.default=(0,n.createStore)(o.default,{},s)},5:function(e){e.exports={style:{mainBg:"#272727",secBg:"#2f2f2f",header:"#191919"}}},57:function(e,t,a){"use strict";var n=s(a(1)),l=a(55),r=a(25),u=a(6),o=a(42),c=s(o),f=s(a(34));a(62);var i=s(a(5));function s(e){return e&&e.__esModule?e:{default:e}}document.querySelector("body").style.backgroundColor=i.default.style.mainBg;var d=document.querySelector("#root");(0,l.render)(n.default.createElement(r.Provider,{store:c.default},n.default.createElement(u.ConnectedRouter,{history:o.history},n.default.createElement(f.default,null))),d)},62:function(e,t){}});
//# sourceMappingURL=index.js.map