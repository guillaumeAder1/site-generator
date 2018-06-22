!function(e){function t(t){for(var n,a,o=t[0],l=t[1],c=t[2],s=0,u=[];s<o.length;s++)a=o[s],O[a]&&u.push(O[a][0]),O[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(U&&U(t);u.length;)u.shift()();return x.push.apply(x,c||[]),r()}function r(){for(var e,t=0;t<x.length;t++){for(var r=x[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==O[o]&&(n=!1)}n&&(x.splice(t--,1),e=N(N.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!b[e])return;for(var r in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(_[r]=t[r]);0==--v&&0===g&&k()}(e,t),n&&n(e,t)};var a,o=!0,l="580e5e70d7f7e0c67c7e",c=1e4,s={},u=[],i=[];var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var m,_,h,v=0,g=0,y={},b={},E={};function j(e){return+e+""===e?+e:e}function w(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,p("check"),(t=c,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,a=N.p+""+l+".hot-update.json";n.open("GET",a,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+a+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;b={},y={},E=e.c,h=e.h,p("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var r in _={},O)M(r);return"prepare"===f&&0===g&&0===v&&k(),t});var t}function M(e){E[e]?(b[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=N.p+""+e+"."+l+".hot-update.js",t.appendChild(r)}(e)):y[e]=!0}function k(){p("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return D(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&t.push(j(r));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,n,a,o,c;function i(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var a=n.pop(),l=a.id,c=a.chain;if((o=C[l])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:l};if(o.hot._main)return{type:"unaccepted",chain:c,moduleId:l};for(var s=0;s<o.parents.length;s++){var u=o.parents[s],i=C[u];if(i){if(i.hot._declinedDependencies[l])return{type:"declined",chain:c.concat([u]),moduleId:l,parentId:u};-1===t.indexOf(u)&&(i.hot._acceptedDependencies[l]?(r[u]||(r[u]=[]),d(r[u],[l])):(delete r[u],t.push(u),n.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var m={},v=[],g={},y=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in _)if(Object.prototype.hasOwnProperty.call(_,b)){var w;c=j(b);var M=!1,k=!1,D=!1,x="";switch((w=_[b]?i(c):{type:"disposed",moduleId:b}).chain&&(x="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(M=new Error("Aborted because of self decline: "+w.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(M=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(M=new Error("Aborted because "+c+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(w),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),D=!0;break;default:throw new Error("Unexception type "+w.type)}if(M)return p("abort"),Promise.reject(M);if(k)for(c in g[c]=_[c],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(m[c]||(m[c]=[]),d(m[c],w.outdatedDependencies[c]));D&&(d(v,[w.moduleId]),g[c]=y)}var P,q=[];for(n=0;n<v.length;n++)c=v[n],C[c]&&C[c].hot._selfAccepted&&q.push({module:c,errorHandler:C[c].hot._selfAccepted});p("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete O[e]}(e)});for(var R,U,H=v.slice();H.length>0;)if(c=H.pop(),o=C[c]){var S={},A=o.hot._disposeHandlers;for(a=0;a<A.length;a++)(r=A[a])(S);for(s[c]=S,o.hot.active=!1,delete C[c],delete m[c],a=0;a<o.children.length;a++){var L=C[o.children[a]];L&&((P=L.parents.indexOf(c))>=0&&L.parents.splice(P,1))}}for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=C[c]))for(U=m[c],a=0;a<U.length;a++)R=U[a],(P=o.children.indexOf(R))>=0&&o.children.splice(P,1);for(c in p("apply"),l=h,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var I=null;for(c in m)if(Object.prototype.hasOwnProperty.call(m,c)&&(o=C[c])){U=m[c];var B=[];for(n=0;n<U.length;n++)if(R=U[n],r=o.hot._acceptedDependencies[R]){if(-1!==B.indexOf(r))continue;B.push(r)}for(n=0;n<B.length;n++){r=B[n];try{r(U)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:U[n],error:e}),t.ignoreErrored||I||(I=e)}}}for(n=0;n<q.length;n++){var T=q[n];c=T.module,u=[c];try{N(c)}catch(e){if("function"==typeof T.errorHandler)try{T.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:r,originalError:e}),t.ignoreErrored||I||(I=r),I||(I=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||I||(I=e)}}return I?(p("fail"),Promise.reject(I)):(p("idle"),new Promise(function(e){e(v)}))}var C={},O={index:0},x=[];function N(t){if(C[t])return C[t].exports;var r=C[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:w,apply:D,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return a=void 0,t}(t),parents:(i=u,u=[],i),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=C[e];if(!t)return N;var r=function(r){return t.hot.active?(C[r]?-1===C[r].parents.indexOf(e)&&C[r].parents.push(e):(u=[e],a=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),u=[]),N(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var o in N)Object.prototype.hasOwnProperty.call(N,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,n(o));return r.e=function(e){return"ready"===f&&p("prepare"),g++,N.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(y[e]||M(e),0===g&&0===v&&k())}},r.t=function(e,t){return 1&t&&(e=r(e)),N.t(e,-2&t)},r}(t)),r.l=!0,r.exports}N.m=e,N.c=C,N.d=function(e,t,r){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(N.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)N.d(r,n,function(t){return e[t]}.bind(null,n));return r},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="",N.h=function(){return l};var P=window.webpackJsonp=window.webpackJsonp||[],q=P.push.bind(P);P.push=t,P=P.slice();for(var R=0;R<P.length;R++)t(P[R]);var U=q;x.push([70,"vendors"]),r()}({24:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=s(r(1)),o=s(r(47)),l=s(r(40)),c=r(2);function s(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var u,i,d=function(){return a.default.createElement("div",null,a.default.createElement(l.default,null),a.default.createElement(o.default,null))},f=(0,c.hot)(e)(d);t.default=f,e.exports=t.default,u=r(2).default,i=r(2).leaveModule,u&&(u.register(d,"App","C:/Users/gader/Documents/_projects/private/site-generator/src/App.js"),u.register(f,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/App.js"),i(e))}).call(this,r(7)(e))},31:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getRoot=c,(n=r(2).enterModule)&&n(e);var a,o,l=t.URL="https://guillaumeader1.github.io/site-generator/dist/";function c(e){return"localhost"!==window.location.hostname?""+l+e:e}a=r(2).default,o=r(2).leaveModule,a&&(a.register(l,"URL","C:/Users/gader/Documents/_projects/private/site-generator/src/config/const.js"),a.register(c,"getRoot","C:/Users/gader/Documents/_projects/private/site-generator/src/config/const.js"),o(e))}).call(this,r(7)(e))},32:function(e){e.exports={routes:[{name:"Home",path:"home",component:"page0"},{name:"Page 1",path:"my-page1",component:"page1"},{name:"Page 2",path:"my-page2",component:"page2"}]}},40:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRouterDom=__webpack_require__(30),_conf=__webpack_require__(32),_conf2=_interopRequireDefault(_conf),_style=__webpack_require__(8),_style2=_interopRequireDefault(_style),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(2).enterModule,enterModule&&enterModule(module);var Section=function(_Component){function Section(e){_classCallCheck(this,Section);var t=_possibleConstructorReturn(this,(Section.__proto__||Object.getPrototypeOf(Section)).call(this,e));return t.state={open:!1},t.body=document.querySelector("body"),t}return _inherits(Section,_Component),_createClass(Section,[{key:"addclassName",value:function(e){e?this.body.classList.add("is-menu-visible"):this.body.classList.remove("is-menu-visible")}},{key:"render",value:function(){var e=this;return _react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement("header",{id:"header",style:{backgroundColor:_style2.default.style.header}},_react2.default.createElement(_reactRouterDom.Link,{to:"/home",className:"logo"},_react2.default.createElement("strong",null,"#portfolio")," ",_react2.default.createElement("span",null,"Guillaume Ader")),_react2.default.createElement("nav",null,_react2.default.createElement("a",{onClick:function(t){return e.addclassName(!0)}},"Menu"))),_react2.default.createElement("nav",{id:"menu",style:{backgroundColor:_style2.default.style.mainBg}},_react2.default.createElement("div",{className:"inner"},_react2.default.createElement("ul",{className:"links"},_conf2.default.routes.map(function(t,r){return _react2.default.createElement("li",{key:r},_react2.default.createElement(_reactRouterDom.Link,{key:r,to:"/"+t.path,onClick:function(t){return e.addclassName(!1)}}," ",t.name," "))})),_react2.default.createElement("ul",{className:"actions vertical"},_react2.default.createElement("li",null,_react2.default.createElement("a",{href:"",className:"button special fit"},"  Get Started ")),_react2.default.createElement("li",null,_react2.default.createElement("a",{href:"",className:"button fit"},"Log In")))),_react2.default.createElement("a",{className:"close",onClick:function(t){return e.addclassName(!1)}},"Close")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Section}(_react.Component),_default=Section,reactHotLoader,leaveModule;exports.default=_default,module.exports=exports.default,reactHotLoader=__webpack_require__(2).default,leaveModule=__webpack_require__(2).leaveModule,reactHotLoader&&(reactHotLoader.register(Section,"Section","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/header.js"),reactHotLoader.register(_default,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/header.js"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},41:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=o(r(1));o(r(8));function o(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var l,c,s=function(e){return a.default.createElement("section",{id:"contact"},a.default.createElement("div",{className:"inner"},a.default.createElement("section",null,a.default.createElement("form",{method:"post",action:"#"},a.default.createElement("div",{className:"fields"},a.default.createElement("div",{className:"field half"},a.default.createElement("label",{htmlFor:"name"},"Name"),a.default.createElement("input",{type:"text",name:"name",id:"name"})),a.default.createElement("div",{className:"field half"},a.default.createElement("label",{htmlFor:"email"},"Email"),a.default.createElement("input",{type:"text",name:"email",id:"email"})),a.default.createElement("div",{className:"field"},a.default.createElement("label",{htmlFor:"message"},"Message"),a.default.createElement("textarea",{name:"message",id:"message",rows:"6"}))),a.default.createElement("ul",{className:"actions"},a.default.createElement("li",null,a.default.createElement("input",{type:"submit",value:"Send Message",className:"primary"})),a.default.createElement("li",null,a.default.createElement("input",{type:"reset",value:"Clear"}))))),a.default.createElement("section",{className:"split"},a.default.createElement("section",null,a.default.createElement("div",{className:"contact-method"},a.default.createElement("span",{className:"icon alt fa-envelope"}),a.default.createElement("h3",null,"Email"),a.default.createElement("a",{href:"#"},"information@untitled.tld"))),a.default.createElement("section",null,a.default.createElement("div",{className:"contact-method"},a.default.createElement("span",{className:"icon alt fa-phone"}),a.default.createElement("h3",null,"Phone"),a.default.createElement("span",null,"(000) 000-0000 x12387"))),a.default.createElement("section",null,a.default.createElement("div",{className:"contact-method"},a.default.createElement("span",{className:"icon alt fa-home"}),a.default.createElement("h3",null,"Address"),a.default.createElement("span",null,"1234 Somewhere Road #5432",a.default.createElement("br",null),"Nashville, TN 00000",a.default.createElement("br",null),"United States of America"))))))},u=s;t.default=u,e.exports=t.default,l=r(2).default,c=r(2).leaveModule,l&&(l.register(s,"Contact","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/contact.js"),l.register(u,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/contact.js"),c(e))}).call(this,r(7)(e))},42:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=l(r(1)),o=(l(r(8)),r(31));function l(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var c,s,u=function(e){var t=function(){return Math.floor(6*Math.random())+1},r=[];for(var n in e)r.push(e[n]);return a.default.createElement("div",{className:"tiles"},r.map(function(e,r){return function(e,r){var n=(0,o.getRoot)("/assets/images/pic0"+t()+".jpg"),l=(0,o.getRoot)("/asset/images/pic0"+t()+".jpg");return a.default.createElement("article",{key:r,style:{backgroundImage:"url('"+n+"')"}},a.default.createElement("span",{className:"image",style:{display:"none"}},a.default.createElement("img",{src:l,alt:""})),a.default.createElement("header",{className:"major"},a.default.createElement("h3",null,a.default.createElement("a",{href:"landing.html",className:"link"},"Aliquam")),a.default.createElement("p",null,"Ipsum dolor sit amet")),a.default.createElement("a",{href:"landing.html",className:"link primary"}))}(0,r)}))},i=u;t.default=i,e.exports=t.default,c=r(2).default,s=r(2).leaveModule,c&&(c.register(u,"Tiles","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/tiles.js"),c.register(i,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/tiles.js"),s(e))}).call(this,r(7)(e))},43:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=l(r(1)),o=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var c,s,u=function(e){return a.default.createElement("section",{style:{backgroundColor:o.default.style.secBg}},a.default.createElement("div",{className:"inner"},a.default.createElement("header",{className:"major"},a.default.createElement("h2",null,e.title)),a.default.createElement("p",null,e.text)))},i=u;t.default=i,e.exports=t.default,c=r(2).default,s=r(2).leaveModule,c&&(c.register(u,"Header","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/header.js"),c.register(i,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/header.js"),s(e))}).call(this,r(7)(e))},44:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=l(r(1)),o=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var c,s,u=function(e){return a.default.createElement("section",{style:{backgroundColor:o.default.style.secBg}},a.default.createElement("div",{className:"inner"},a.default.createElement("h2",null,e.title),a.default.createElement("h5",null,e.text)))},i=u;t.default=i,e.exports=t.default,c=r(2).default,s=r(2).leaveModule,c&&(c.register(u,"Slideshow","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/slideshow.js"),c.register(i,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/slideshow.js"),s(e))}).call(this,r(7)(e))},45:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=l(r(1)),o=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var c,s,u=function(e){var t=[];for(var r in e)t.push(e[r]);return a.default.createElement("div",{className:"spotlights"},t.map(function(e,t){return function(e,t){var r=t%2==0?"top center":"center center",n=t%2==0?o.default.style.secBg:o.default.style.mainBg;return a.default.createElement("section",{key:t,style:{backgroundColor:n}},a.default.createElement("a",{href:"generic.html",className:"image"},a.default.createElement("img",{src:"images/pic08.jpg",alt:"","data-position":r})),a.default.createElement("div",{className:"content"},a.default.createElement("div",{className:"inner"},a.default.createElement("header",{className:"major"},a.default.createElement("h3",null,e.title)),a.default.createElement("p",null,e.text),a.default.createElement("ul",{className:"actions"},a.default.createElement("li",null,a.default.createElement("a",{href:"generic.html",className:"button"},"Learn more"))))))}(e,t)}))},i=u;t.default=i,e.exports=t.default,c=r(2).default,s=r(2).leaveModule,c&&(c.register(u,"Spotlight","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/spotlight.js"),c.register(i,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/sections/spotlight.js"),s(e))}).call(this,r(7)(e))},46:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_style=__webpack_require__(8),_style2=_interopRequireDefault(_style),_spotlight=__webpack_require__(45),_spotlight2=_interopRequireDefault(_spotlight),_slideshow=__webpack_require__(44),_slideshow2=_interopRequireDefault(_slideshow),_header=__webpack_require__(43),_header2=_interopRequireDefault(_header),_tiles=__webpack_require__(42),_tiles2=_interopRequireDefault(_tiles),_contact=__webpack_require__(41),_contact2=_interopRequireDefault(_contact),_const=__webpack_require__(31),_reactRouter=__webpack_require__(13),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(2).enterModule,enterModule&&enterModule(module);var Main=function(_Component){function Main(e){_classCallCheck(this,Main);var t=_possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this,e));return t.state={html:null},t}return _inherits(Main,_Component),_createClass(Main,[{key:"buildHtml",value:function(e){var t=Object.keys(e).map(function(t,r){var n=void 0;return"slideshow"==t?n=_react2.default.createElement(_slideshow2.default,_extends({key:r},e[t])):"spotlight"==t?n=_react2.default.createElement(_spotlight2.default,_extends({key:r},e[t])):"header"==t?n=_react2.default.createElement(_header2.default,_extends({key:r},e[t])):"tiles"==t?n=_react2.default.createElement(_tiles2.default,_extends({key:r},e[t])):"contact"==t&&(n=_react2.default.createElement(_contact2.default,_extends({key:r},e[t]))),n});this.setState({html:t})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.config||"page0",r=(0,_const.getRoot)("config/"+t+".json");fetch(r,{method:"get"}).then(function(e){return e.json()}).then(function(t){return e.buildHtml(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return _react2.default.createElement("div",{id:"wrapper"},this.state.html)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Main}(_react.Component),_default=(0,_reactRouter.withRouter)(Main),reactHotLoader,leaveModule;exports.default=_default,module.exports=exports.default,reactHotLoader=__webpack_require__(2).default,leaveModule=__webpack_require__(2).leaveModule,reactHotLoader&&(reactHotLoader.register(Main,"Main","C:/Users/gader/Documents/_projects/private/site-generator/src/components/main.js"),reactHotLoader.register(_default,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/main.js"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},47:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=u(r(1)),l=r(30),c=u(r(32)),s=u(r(46));r(13);function u(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var i,d,f=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"Home"),o.default.createElement("h2",null,"Home"),o.default.createElement("h2",null,"Home"),o.default.createElement("h2",null,"Home"),o.default.createElement("h2",null,"Home"),o.default.createElement("h2",null,"Home"))},p=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"About"),o.default.createElement("h2",null,"About"),o.default.createElement("h2",null,"About"),o.default.createElement("h2",null,"About"),o.default.createElement("h2",null,"About"),o.default.createElement("h2",null,"About"))},m=function(){return o.default.createElement("div",null,"default  default default default default default default default default default default default default")},_=function(){return o.default.createElement(o.default.Fragment,null,c.default.routes.map(function(e,t){return o.default.createElement(l.Route,{key:t,path:"/"+e.path,render:function(t){return o.default.createElement(s.default,a({},t,{config:e.component}))}})}))},h=_;t.default=h,e.exports=t.default,i=r(2).default,d=r(2).leaveModule,i&&(i.register(f,"Home","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/section.js"),i.register(p,"About","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/section.js"),i.register(m,"Def","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/section.js"),i.register(_,"Section","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/section.js"),i.register(h,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/components/nav/section.js"),d(e))}).call(this,r(7)(e))},49:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),(n=r(2).enterModule)&&n(e);var a,o,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}},c=l;t.default=c,e.exports=t.default,a=r(2).default,o=r(2).leaveModule,a&&(a.register(l,"counterReducer","C:/Users/gader/Documents/_projects/private/site-generator/src/reducers/counter.js"),a.register(c,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/reducers/counter.js"),o(e))}).call(this,r(7)(e))},50:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,a,o=r(20),l=r(23),c=r(49),s=(n=c)&&n.__esModule?n:{default:n};(a=r(2).enterModule)&&a(e);var u,i,d=(0,o.combineReducers)({routing:l.routerReducer,Counter:s.default}),f=d;t.default=f,e.exports=t.default,u=r(2).default,i=r(2).leaveModule,u&&(u.register(d,"rootReducer","C:/Users/gader/Documents/_projects/private/site-generator/src/reducers/index.js"),u.register(f,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/reducers/index.js"),i(e))}).call(this,r(7)(e))},56:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.history=void 0;var n,a=r(20),o=r(23),l=u(r(55)),c=u(r(54)),s=u(r(50));function u(e){return e&&e.__esModule?e:{default:e}}(n=r(2).enterModule)&&n(e);var i,d,f=t.history=(0,c.default)({basename:""}),p={},m=[],_=[l.default,(0,o.routerMiddleware)(f)],h=a.compose.apply(void 0,[a.applyMiddleware.apply(void 0,_)].concat(m)),v=(0,a.createStore)(s.default,p,h);t.default=v,i=r(2).default,d=r(2).leaveModule,i&&(i.register(f,"history","C:/Users/gader/Documents/_projects/private/site-generator/src/store.js"),i.register(p,"initialState","C:/Users/gader/Documents/_projects/private/site-generator/src/store.js"),i.register(m,"enhancers","C:/Users/gader/Documents/_projects/private/site-generator/src/store.js"),i.register(_,"middleware","C:/Users/gader/Documents/_projects/private/site-generator/src/store.js"),i.register(h,"composedEnhancers","C:/Users/gader/Documents/_projects/private/site-generator/src/store.js"),i.register(v,"default","C:/Users/gader/Documents/_projects/private/site-generator/src/store.js"),d(e))}).call(this,r(7)(e))},70:function(e,t,r){"use strict";(function(e){var t=d(r(1)),n=r(68),a=r(39),o=r(23),l=r(56),c=d(l),s=d(r(24));r(75);var u,i=d(r(8));function d(e){return e&&e.__esModule?e:{default:e}}(u=r(2).enterModule)&&u(e),document.querySelector("body").style.backgroundColor=i.default.style.mainBg;var f,p,m=document.querySelector("#root"),_=function(){(0,n.render)(t.default.createElement(a.Provider,{store:c.default},t.default.createElement(o.ConnectedRouter,{history:l.history},t.default.createElement(s.default,null))),m)};_(),e.hot.accept(24,function(e){console.log("hot reload...."),_()}),f=r(2).default,p=r(2).leaveModule,f&&(f.register(m,"target","C:/Users/gader/Documents/_projects/private/site-generator/src/index.js"),f.register(_,"doRender","C:/Users/gader/Documents/_projects/private/site-generator/src/index.js"),p(e))}).call(this,r(7)(e))},75:function(e,t){},8:function(e){e.exports={style:{mainBg:"#272727",secBg:"#2f2f2f",header:"#191919"}}}});
//# sourceMappingURL=index.js.map