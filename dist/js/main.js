/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ta(a){if(null==a||Va(a))return!1;if(L(a)||G(a)||F&&a instanceof F)return!0;
var b="length"in Object(a)&&a.length;return T(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||ta(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&D(n)?da(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(D(a[m])||(a[m]=L(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Pb(a,va.call(arguments,1),!1)}function Zd(a){return Pb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Rb(a,b){return S(Object.create(a),b)}function A(){}function Xa(a){return a}function ha(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function w(a){return"undefined"!==
typeof a}function D(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function G(a){return"string"===typeof a}function T(a){return"number"===typeof a}function da(a){return"[object Date]"===ma.call(a)}function z(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function $d(a){return a&&T(a.length)&&
ae.test(ma.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!D(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw xa("cpws");var b=!1,c=e(a);void 0===c&&(c=L(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}
var f=[],g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");L(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?na(a.getTime(),
b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||L(b)||da(b)||Wa(b))return!1;d=U();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!z(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(va.call(b,d))}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function bb(a,b){if(!y(a))return T(b)||(b=b?2:null),JSON.stringify(a,ce,b)}function xc(a){return G(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ma?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),w(e)&&(f=w(f)?zc(f):!0,ua.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];q(a,function(a,c){L(a)?q(a,function(a){b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))}):b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ea(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ea(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,G(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),
b(d,c?[c]:[],e))}function Bc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===C.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=cb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function ge(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function he(a){a=ca.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}
function Cc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Dc){var b=rb();(qa=y(b)?C.jQuery:b?C[b]:void 0)&&qa.fn.on?(F=qa,S(qa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=qa.cleanData,qa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=qa._data(f,"events"))&&c.$destroy&&qa(f).triggerHandler("$destroy");a(b)}):F=O;ca.element=F;Dc=!0}}function sb(a,
b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&L(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?ab(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=F(va.call(a,0,e))),c.push(b);return c||a}function U(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return R}}function b(a,
d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return R}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],u=a("$injector","invoke","push",e),R={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:u,run:function(a){p.push(a);return this}};h&&u(h);return R})}})}function ia(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function le(a){S(a,{bootstrap:Bc,copy:pa,extend:S,merge:Zd,equals:na,element:F,forEach:q,injector:cb,noop:A,bind:ab,
toJson:bb,fromJson:xc,identity:Xa,isUndefined:y,isDefined:w,isString:G,isFunction:z,isObject:D,isNumber:T,isElement:Qb,isArray:L,version:me,isDate:da,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:he,$$minErr:N,$$csp:Ba,reloadWithDebugInfo:ge});Ub=ke(C);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Fc).directive({a:oe,input:Gc,textarea:Gc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,
ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Lc);a.provider({$anchorScroll:Xe,
$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Mc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$jsonpCallbacks:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,
$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function db(a){return a.replace(Kf,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;
d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function O(a){if(a instanceof O)return a;var b;G(a)&&(a=W(a),b=!0);if(!(this instanceof O)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new O(a)}if(b){b=C.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,
b){b||eb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)eb(d[c])}function Rc(a,b,d,c){if(w(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];w(d)&&Za(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function eb(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:
(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete fb[d],a.ng339=void 0))}function xb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Pf,d=fb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=w(d),e=!c&&b&&!D(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];S(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&
q(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=
b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",
a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[wa(a)]&&d}function Rf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||
Sf;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return S(O,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&
(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Yd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function cb(a,b){function d(a){return function(b,c){if(D(b))q(b,uc(a));else return a(b,c)}}function c(a,b){Qa(a,
"service");if(z(b)||L(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||L(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):Pa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,
c,f){var g=[];a=cb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);L(a)&&(a=a[a.length-1]);d=11>=Ea?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=
L(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:cb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ha(b),!1)}),constant:d(function(a,b){Qa(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ca.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),u={},R=h(u,function(a,b){var c=p.get(a+"Provider",b);return B.invoke(c.$get,c,void 0,a)}),B=R;n.$injectorProvider={$get:ha(R)};var r=g(a),B=R.get("$injector");B.strictDi=b;q(r,function(a){a&&B.invoke(a)});return B}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window",
"$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===
a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){G(a)&&(a=a.split(" "));var b=U();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return D(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(R--,0===R)for(;B.length;)try{B.pop()()}catch(b){d.error(b)}}}
function f(){t=null;g();h()}function g(){r=K();r=y(r)?null:r;na(r,E)&&(r=E);E=r}function h(){if(v!==k.url()||J!==r)v=k.url(),J=r,q(M,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,u={};k.isMock=!1;var R=0,B=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){R++};k.notifyWhenNoOutstandingRequests=function(a){0===R?a():B.push(a)};var r,J,v=l.href,fa=b.find("base"),t=null,K=c.history?function(){try{return m.state}catch(a){}}:
A;g();J=r;k.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=J===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;J=e;!c.history||h&&f?(h||(t=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(t=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),J=r);t&&(t=b);return k}return t||l.href.replace(/%27/g,"'")};k.state=function(){return r};var M=[],H=!1,E=null;k.onUrlChange=function(b){if(!H){if(c.history)F(a).on("popstate",
f);F(a).on("hashchange",f);H=!0}M.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=fa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;R++;c=n(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};k.defer.cancel=function(a){return u[a]?(delete u[a],p(a),e(A),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,
d)}]}function ef(){this.$get=function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=S({},c,{id:a}),k=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=U();g=0;m=U();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Fc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=U();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!L(b)&&D(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=U();this.directive=function B(b,d){Qa(b,"directive");G(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=
a.invoke(f);z(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,uc(B));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||L(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||
b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return w(a)?(p=a,this):p};var u=10;this.onChangesTtl=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,t,K,M,H,E){function I(){try{if(!--qa)throw Y=void 0,ga("infchng",u);K.$apply(function(){for(var a=
[],b=0,c=Y.length;b<c;++b)try{Y[b]()}catch(d){a.push(d)}Y=void 0;if(a.length)throw a;})}finally{qa++}}function Da(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function P(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function x(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Pc(k,a[g]=C.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(da(m,F("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,r,v;if(n)for(v=Array(c.length),m=0;m<h.length;m+=3)f=h[m],v[f]=c[f];else v=c;m=0;for(p=h.length;m<p;)k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,r=c.transcludeOnThisElement?za(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?za(a,b):null,c(f,l,k,d,r)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,m,p,n,r=0;r<a.length;r++){k=new Da;l=$b(a[r],[],k,0===r?d:void 0,e);(f=l.length?oa(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[r].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(r,f,k),p=!0,n=n||f;f=null}return p?g:null}function za(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=U(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?za(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr;switch(a.nodeType){case 1:O(b,Aa(wa(a)),"E",d,e);for(var g,k,l,m,p=a.attributes,n=0,r=p&&p.length;n<r;n++){var v=!1,u=!1;g=p[n];k=g.name;l=W(g.value);g=Aa(k);if(m=Ba.test(g))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(g=g.match(Ca))&&V(g[1])&&(v=k,u=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));g=Aa(k.toLowerCase());f[g]=k;if(m||!c.hasOwnProperty(g))c[g]=l,Uc(a,g)&&(c[g]=!0);ia(a,b,l,g,m);O(b,g,"A",d,e,v,u)}f=a.className;D(f)&&(f=f.animVal);if(G(f)&&""!==f)for(;a=h.exec(f);)g=Aa(a[2]),O(b,g,"C",d,e)&&(c[g]=W(a[3])),f=f.substr(a.index+a[0].length);break;case Ma:if(11===Ea)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ca(b,a.nodeValue);break;case 8:hb(a,b,c,d,e)}b.sort(Z);
return b}function hb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Aa(f[1]);O(b,h,"M",d,e)&&(c[h]=W(f[2]))}}catch(k){}}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Zc(a,b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||
(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Zc(a,c,d));a.require=x.require;a.directiveName=I;if(u===x||x.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Zc(b,c,d));b.require=x.require;b.directiveName=I;if(u===x||x.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);fa&&(e=t);c||(c=fa?I.parent():I);if(d){var f=l.$$slots[d];if(f)return f(a,
b,e,c,s);if(y(f))throw ga("noslot",d,ya(I));}else return l(a,b,e,c,s)}var n,E,x,M,B,t,P,I;b===f?(g=d,I=d.$$element):(I=F(f),g=new Da(I,d));B=e;u?M=e.$new(!0):r&&(B=e.$parent);l&&(P=m,P.$$boundTransclude=l,P.isSlotFilled=function(a){return!!l.$$slots[a]});v&&(t=ag(I,g,P,v,M,e,u));u&&(aa.$$addScopeInfo(I,M,!0,!(H&&(H===u||H===u.$$originalDirective))),aa.$$addScopeClass(I,!0),M.$$isolateBindings=u.$$isolateBindings,E=ka(e,g,M,M.$$isolateBindings,u),E.removeWatches&&M.$on("$destroy",E.removeWatches));
for(n in t){E=v[n];x=t[n];var Zb=E.$$bindings.bindToController;x.bindingInfo=x.identifier&&Zb?ka(B,g,x.instance,Zb,E):{};var K=x();K!==x.instance&&(x.instance=K,I.data("$"+E.name+"Controller",K),x.bindingInfo.removeWatches&&x.bindingInfo.removeWatches(),x.bindingInfo=ka(B,g,x.instance,Zb,E))}q(v,function(a,b){var c=a.require;a.bindToController&&!L(c)&&D(c)&&S(t[b].instance,ib(b,c,I,t))});q(t,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$doCheck)&&
(B.$watch(function(){b.$doCheck()}),b.$doCheck());z(b.$onDestroy)&&B.$on("$destroy",function(){b.$onDestroy()})});n=0;for(E=h.length;n<E;n++)x=h[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);var s=e;u&&(u.template||null===u.templateUrl)&&(s=M);a&&a(s,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)x=k[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);q(t,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,
r=l.newScopeDirective,v=l.controllerDirectives,u=l.newIsolateScopeDirective,H=l.templateDirective,E=l.nonTlbTranscludeDirective,M=!1,B=!1,fa=l.hasElementTranscludeDirective,t=d.$$element=F(b),x,I,P,K=e,s,Fa=!1,za=!1,w,A=0,C=a.length;A<C;A++){x=a[A];var G=x.$$start,hb=x.$$end;G&&(t=N(b,G,hb));P=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(D(w)?(X("new/isolated scope",u||r,x,t),u=x):X("new/isolated scope",u,x,t)),r=r||x;I=x.name;if(!Fa&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&
!x.$$tlb)){for(w=A+1;Fa=a[w++];)if(Fa.transclude&&!Fa.$$tlb||Fa.replace&&(Fa.templateUrl||Fa.template)){za=!0;break}Fa=!0}!x.templateUrl&&x.controller&&(w=x.controller,v=v||U(),X("'"+I+"' controller",v[I],x,t),v[I]=x);if(w=x.transclude)if(M=!0,x.$$tlb||(X("transclusion",E,x,t),E=x),"element"==w)fa=!0,n=x.priority,P=t,t=d.$$element=F(aa.$$createComment(I,d[I])),b=t[0],ea(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,K=ac(za,P,e,n,g&&g.name,{nonTlbTranscludeDirective:E});else{var oa=U();P=F(Xb(b)).contents();
if(D(w)){P=[];var Q=U(),O=U();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;oa[b]=null;O[b]=c});q(t.contents(),function(a){var b=Q[Aa(wa(a))];b?(O[b]=!0,oa[b]=oa[b]||[],oa[b].push(a)):P.push(a)});q(O,function(a,b){if(!a)throw ga("reqslot",b);});for(var V in oa)oa[V]&&(oa[V]=ac(za,oa[V],e))}t.empty();K=ac(za,P,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});K.$$slots=oa}if(x.template)if(B=!0,X("template",H,x,t),H=x,w=z(x.template)?x.template(t,d):x.template,
w=xa(w),x.replace){g=x;P=Vb.test(w)?$c(da(x.templateNamespace,W(w))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ga("tplrt",I,"");ea(f,t,b);C={$attr:{}};w=$b(b,[],C);var Z=a.splice(A+1,a.length-(A+1));(u||r)&&T(w,u,r);a=a.concat(w).concat(Z);$(d,C);C=a.length}else t.html(w);if(x.templateUrl)B=!0,X("template",H,x,t),H=x,x.replace&&(g=x),p=ba(a.splice(A,a.length-A),t,d,f,M&&K,h,k,{controllerDirectives:v,newScopeDirective:r!==x&&r,newIsolateScopeDirective:u,templateDirective:H,nonTlbTranscludeDirective:E}),
C=a.length;else if(x.compile)try{s=x.compile(t,d,K);var Y=x.$$originalDirective||x;z(s)?m(null,ab(Y,s),G,hb):s&&m(ab(Y,s.pre),ab(Y,s.post),G,hb)}catch(ca){c(ca,ya(t))}x.terminal&&(p.terminal=!0,n=Math.max(n,x.priority))}p.scope=r&&!0===r.scope;p.transcludeOnThisElement=M;p.templateOnThisElement=B;p.transclude=K;l.hasElementTranscludeDirective=fa;return p}function ib(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&
e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else D(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=U(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"==p&&(p=b[l.name]);m=t(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}
function T(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],{$$isolateScope:b,$$newScope:c})}function O(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++)try{if(p=e[n],(y(h)||h>p.priority)&&-1!=p.restrict.indexOf(g)){l&&(p=Rb(p,{$$start:l,$$end:m}));if(!p.$$bindings){var u=p,v=p,x=p.name,H={isolateScope:null,bindToController:null};D(v.scope)&&(!0===v.bindToController?(H.bindToController=d(v.scope,x,!0),H.isolateScope={}):
H.isolateScope=d(v.scope,x,!1));D(v.bindToController)&&(H.bindToController=d(v.bindToController,x,!0));if(D(H.bindToController)){var E=v.controller,M=v.controllerAs;if(!E)throw ga("noctrl",x);if(!Xc(E,M))throw ga("noident",x);}var t=u.$$bindings=H;D(t.isolateScope)&&(p.$$isolateBindings=t.isolateScope)}b.push(p);k=p}}catch(I){c(I)}}return k}function V(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function $(a,b){var c=b.$attr,
d=a.$attr;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ba(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],r=a.shift(),u=Rb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),H=z(r.templateUrl)?r.templateUrl(b,c):r.templateUrl,E=r.templateNamespace;b.empty();e(H).then(function(e){var v,M;e=xa(e);if(r.replace){e=
Vb.test(e)?$c(da(E,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw ga("tplrt",r.name,H);e={$attr:{}};ea(d,b,v);var B=$b(v,[],e);D(r.scope)&&T(B,!0);a=B.concat(a);$(c,e)}else v=n,b.html(e);a.unshift(u);m=oa(a,v,c,f,b,r,g,h,k);q(d,function(a,c){a==v&&(d[c]=b[0])});for(p=s(b[0].childNodes,f);l.length;){e=l.shift();M=l.shift();var t=l.shift(),I=l.shift(),B=b[0];if(!e.$$destroyed){if(M!==n){var P=M.className;k.hasElementTranscludeDirective&&r.replace||(B=Xb(v));ea(t,F(M),B);x(F(B),P)}M=m.transcludeOnThisElement?
za(e,m.transclude,I):I;m(p,e,B,d,M)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=za(b,m.transclude,e)),m(p,b,c,d,a)))}}function Z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ca(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function da(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ha(a,b){if("srcdoc"==b)return M.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=
c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function ia(a,c,d,e,f){var g=ha(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=U());if(m.test(e))throw ga("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,
b):k.$set(e,a)}))}}}})}}function ea(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ja(a,
b){return S(function(){return a.apply(null,arguments)},a,b)}function la(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function ka(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(I),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,v,u,x,H;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(G(a)||Ga(a))g(h,a,d[h]),
d[h]=a});c.$$observers[m].$$scope=a;v=c[m];G(v)?d[h]=b(v)(a):Ga(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);H=u.literal?na:function(a,b){return a===b||a!==a&&b!==b};x=u.assign||function(){v=d[h]=u(a);throw ga("nonassign",c[m],m,f.name);};v=d[h]=u(a);p=function(b){H(b,d[h])||(H(b,v)?x(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,u.literal);k.push(p);break;case "<":if(!ua.call(c,
m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);var E=d[h]=u(a);l[h]=new Fb(bc,d[h]);p=a.$watch(u,function(a,b){if(b===a){if(b===E)return;b=E}g(h,a,b);d[h]=a},u.literal);k.push(p);break;case "&":u=c.hasOwnProperty(m)?n(c[m]):A;if(u===A&&p)break;d[h]=function(b){return u(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ta=/^\w/,pa=C.document.createElement("div"),qa=u,Y;Da.prototype={$normalize:Aa,$addClass:function(a){a&&0<a.length&&
H.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&H.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&H.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&H.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===
f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ta.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),sa=b.endSymbol(),xa="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},Ba=/^ngAttr[A-Z]/,Ca=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;aa.$$addBindingClass=
p?function(a){x(a,"ng-binding")}:A;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;aa.$$addScopeClass=p?function(a,b){x(a,b?"ng-isolate-scope":"ng-scope")}:A;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return aa}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function Aa(a){return db(a.replace(Yc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),
f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&G(b))return b;if(G(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");D(b)?S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector",
"$window",function(d,c){function e(a,b,c,d){if(!a||!D(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&G(k)&&(n=k);if(G(f)){k=f.match(cd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Pa(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(D(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},
{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return F(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return D(a)?da(a)?a.toISOString():bb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||y(a)||(L(a)?q(a,function(a){b.push(ea(c)+"="+ea(cc(a)))}):b.push(ea(c)+"="+ea(cc(a))))});
return b.join("&")}}}function of(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(L(a)?q(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!da(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ea(e)+"="+ea(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(G(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function ed(a){var b=
U(),d;G(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&q(a,function(a,d){var f=Q(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(z(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return D(a)&&"[object File]"!==
ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?bb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ec),put:ia(ec),patch:ia(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory",
"$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,d={};q(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=gd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!D(b))throw N("$http")("badreq",b);if(!G(b.url))throw N("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,
transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);g.method=ub(g.method);g.paramSerializer=G(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(R,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,
a.responseError)});p=c(p,h);p=p.then(function(b){var c=b.headers,d=gd(b.data,fd(c),void 0,b.transformRequest);y(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g)});return p},p.error=function(a){Pa(a,"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g)});return p}):(p.success=hd("success"),
p.error=hd("error"));return p}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}E&&(200<=a&&300>a?E.put(P,[a,c,ed(d),e]):E.remove(P));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?M.resolve:M.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function t(a){n(a.data,a.status,ia(a.headers()),
a.statusText)}function R(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var M=k.defer(),H=M.promise,E,I,Da=c.headers,P=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R,R);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=D(c.cache)?c.cache:D(a.cache)?a.cache:u);E&&(I=E.get(P),w(I)?I&&z(I.then)?I.then(t,t):L(I)?n(I[1],I[0],ia(I[2]),I[3]):n(I,200,{},"OK"):E.put(P,H));y(I)&&((I=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:
void 0)&&(Da[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,P,d,l,Da,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return H}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var R=[];q(c,function(a){R.unshift(G(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(S({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function pf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=
e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);d&&d(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,u,R,B){function r(){fa&&fa();t&&t.abort()}function J(b,c,e,
f,g){w(M)&&d.cancel(M);fa=t=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(e))var v=c.createCallback(h),fa=f(h,v,function(a,b){var d=200===a&&c.getResponse(v);J(l,a,d,"",b);c.removeCallback(v)});else{var t=b(e,h);t.open(e,h,!0);q(m,function(a,b){w(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==Y(h).protocol?404:
0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;q(R,function(a,b){t.addEventListener(b,a)});q(B,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(u)try{t.responseType=u}catch(K){if("json"!==u)throw K;}t.send(y(k)?null:k)}if(0<n)var M=d(r,n);else n&&z(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse",
"$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,p,n){function J(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=bb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),
v=ha(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}n=!!n;var q,t,K=0,M=[],H=[];v=f.length;for(var E=[],I=[];K<v;)if(-1!=(q=f.indexOf(a,K))&&-1!=(t=f.indexOf(b,q+l)))K!==q&&E.push(g(f.substring(K,q))),K=f.substring(q+l,t),M.push(K),H.push(d(K,J)),K=t+m,I.push(E.length),E.push("");else{K!==v&&E.push(g(f.substring(K)));break}p&&1<E.length&&Ka.throwNoconcat(f);if(!k||M.length){var Da=function(a){for(var b=0,c=M.length;b<c;b++){if(n&&y(a[b]))return;E[I[b]]=a[b]}return E.join("")};return S(function(a){var b=
0,d=M.length,e=Array(d);try{for(;b<d;b++)e[b]=H[b](a);return Da(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:M,$$watchDelegate:function(a,b){var c;return a.$watchGroup(H,function(d,e){var f=Da(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,
b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,u):f(r)}var p=4<arguments.length,u=p?va.call(arguments,4):[],R=b.setInterval,q=b.clearInterval,r=0,J=w(m)&&!m,v=(J?c:d).defer(),fa=v.promise;l=w(l)?l:0;fa.$$intervalId=R(function(){J?e.defer(n):a.$evalAsync(n);v.notify(r++);0<l&&r>=l&&(v.resolve(r),q(fa.$$intervalId),delete g[fa.$$intervalId]);J||a.$apply()},k);g[fa.$$intervalId]=v;return fa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),
delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=qb(a[b]);return a.join("/")}function jd(a,b){var d=Y(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||hg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Y(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path=
"/"+b.$$path)}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!G(d))throw Gb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+
a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ka(a,c))?(g=f,g=w(f=ka(d,f))?b+(ka("/",f)||f):a+g):w(f=ka(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=ka(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,
0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?
f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):
a};this.html5Mode=function(a){return Ga(a)?(b.enabled=a,this):D(a)?(Ga(a.enabled)&&(b.enabled=a.enabled),Ga(a.requireBase)&&(b.requireBase=a.requireBase),Ga(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,
b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var u=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,u,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var R=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=F(a.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;
var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Y(h.animVal).href);R.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){y(ka(u,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),
k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Sa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw X("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a.window===a)throw X("isecwindow",b);if(a.children&&
(a.nodeName||a.prop&&a.attr&&a.find))throw X("isecdom",b);if(a===Object)throw X("isecobj",b);}return a}function nd(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a===jg||a===kg||a===lg)throw X("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw X("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===
typeof b?a:a+b}function V(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,
b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:
!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,
b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,
left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=U(),b=U(),d={"true":!0,
"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,H;e=e||J;switch(typeof c){case "string":H=c=c.trim();var E=e?b:a;g=E[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:B;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));E[H]=
g}return u(g,d);case "function":return u(c,d);default:return u(A,d)}}function h(a){function b(c,d,e,f){var g=J;J=!0;try{return a(c,d,e,f)}finally{J=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,
e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=k,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&
d.$$postDigest(function(){w(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function u(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,
d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var R=Ba().noUnsafeEval,B={csp:R,expensiveChecks:!1,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},r={csp:R,expensiveChecks:!0,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},J=!1;g.$$runningExpensiveChecks=function(){return J};return g}]}function wf(){this.$get=
["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=N("$q",TypeError),h=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};S(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});S(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(D(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=
1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},
l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=m;n.resolve=m;n.all=function(a){var b=
new f,c=0,d=L(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject)});return b.promise};return n}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,
e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ea&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount=
{};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(J.$$phase)throw d("inprog",J.$$phase);J.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function B(){for(;t.length;)try{t.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){J.$apply(B)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,
1);return function(){0<=Za(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)ua.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,u,r,q=b,t,y=[],A,C;n("$digest");h.$$checkUrlChange();this===J&&null!==e&&(h.defer.cancel(e),B());c=null;do{r=!1;t=this;for(p=0;p<v.length;p++){try{C=v[p],C.scope.$eval(C.expression,C.locals)}catch(F){f(F)}c=null}v.length=0;a:do{if(p=t.$$watchers)for(u=
p.length;u--;)try{if(a=p[u])if(m=a.get,(g=m(t))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,t),5>q&&(A=4-q,y[A]||(y[A]=[]),y[A].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(G){f(G)}if(!(p=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);)t=t.$parent}while(t=p);if((r||v.length)&&
!q--)throw J.$$phase=null,d("infdig",b,y);}while(r||v.length);for(J.$$phase=null;K<w.length;)try{w[K++]()}catch(D){f(D)}w.length=K=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===J&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){J.$$phase||v.length||h.defer(function(){v.length&&J.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){w.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{J.$$phase=null}}catch(b){f(b)}finally{try{J.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var J=new m,v=J.$$asyncQueue=[],w=J.$$postDigestQueue=[],t=J.$$applyAsyncQueue=[],K=0;return J}]}function ne(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Y(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(G(a)){if(-1<a.indexOf("***"))throw sa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw sa("imatcher");}function xd(a){var b=[];w(a)&&q(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw sa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||y(b)||
""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Y(e.toString()),n,p,u=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){u=!0;break}if(u)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){u=!1;break}if(u)return e;throw sa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw sa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ea)throw sa("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=Q(b);c[db("parse_as_"+d)]=function(b){return e(a,b)};c[db("get_trusted_"+d)]=function(b){return f(a,b)};c[db("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,
l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ea)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}
function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!G(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;L(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,S({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",
g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ca.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=
a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=va.call(arguments,3),n=w(l)&&!l,p=(n?c:d).defer(),u=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,
m))}catch(b){p.reject(b),e(b)}finally{delete g[u.$$timeoutId]}n||a.$apply()},k);u.$$timeoutId=q;g[q]=p;return u}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Y(a){Ea&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,
""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function id(a){a=G(a)?Y(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ff(){this.$get=ha(C)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+
1))));return c}}function Jf(){this.$get=zd}function Mc(a){function b(d,c){if(D(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Cd);b("orderBy",Dd);b("uppercase",ug)}function qg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw N("filter")("notarray",
a);}c=c||"$";var e;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=vg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d,c){var e=D(a)&&d in a;!0===b?b=na:z(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!vc(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c)}}function La(a,b,d,c,e,
f){var g=lc(a),h=lc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(L(a))return a.some(function(a){return La(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;return f?!1:La(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!z(f)&&!y(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);
if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;
for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!G(a)&&!T(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+a}function ba(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=yg.test(c)?Z(c):b(c));T(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=zg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));q(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){y(b)&&(b=2);return bb(a,b)}}function sg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(isNaN(b))return a;T(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return G(a)?a.slice(b,d):va.call(a,b,d)}function Dd(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(z(b))d=b;else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(k)&&(k=a.index),D(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!ta(a))throw N("orderBy")("notarray",a);L(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ta(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Jd(a,b,d,
c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=
a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Lb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);c.addClass(a,
Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=
!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(da(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function p(a){return w(a)&&!da(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var u=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),u&&(a=Sb(a,u)),a});h.$formatters.push(function(a){if(a&&!da(a))throw nb("datefmt",a);if(n(a))return(q=a)&&u&&(q=Sb(q,u,!0)),m("date")(a,c,u);q=null;return""});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||y(s)||d(a)>=s};g.$observe("min",
function(a){s=p(a);h.$validate()})}if(w(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,
b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(q(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):D(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||U(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}
function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=L(a)?a.map(function(a){return ia(a)}):ia(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Kd(a){function b(a,
b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ga(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,
a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return G(a)?a.toLowerCase():a},ub=function(a){return G(a)?a.toUpperCase():a},Ea,F,qa,va=[].slice,
bg=[].splice,Dg=[].push,ma=Object.prototype.toString,wc=Object.getPrototypeOf,xa=N("ng"),ca=C.angular||(C.angular={}),Ub,pb=0;Ea=C.document.documentMode;A.$inject=[];Xa.$inject=[];var L=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return G(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!w(Ba.rules)){var a=C.document.querySelector("[ng-csp]")||
C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Dc=!1,Ma=3,me={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};O.expando="ng339";var fb=O.cache={},Pf=1;O._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Wb=N("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Uf=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=O.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
C.document.readyState?C.setTimeout(b):(this.on("DOMContentLoaded",b),O(C).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[Q(a)]=a});var Vc={};q("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Yb,removeData:eb,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)eb(a[b])}},function(a,b){O[b]=a});q({data:Yb,inheritedData:Cb,scope:function(a){return F.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=db(b);if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=Q(b),Eb[c])if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?c:void 0;else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(w(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){O.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&y(2==a.length&&
a!==zb&&a!==Sc?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:eb,on:function(a,b,d,c){if(w(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=F(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new O(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new O(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new O(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,F(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new O(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=S(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){O.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),w(f)&&(f=F(f))):Qc(f,a(this[g],b,c,e));return w(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Ra.prototype={put:function(a,
b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Ra}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=N("$injector");cb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);
b=Wc(a);q(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Rd=N("$animate"),$e=function(){this.$get=A},af=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):L(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?S(k.from,c):c;k.to=k.to?S(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=N("$compile"),bc=new function(){};
Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=N("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=N("$http"),hd=function(a){return function(){throw Gg("legacy",
a);}},Ka=ca.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var rf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=N("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||T(a))a=a.toString(),this.$$search=Ac(a);else if(D(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],
function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=y(b)?null:b;return this}});var X=N("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw X("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";
s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,
left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,
operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():
this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw X("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw X("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw X("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>
a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(c,d.$filter);var e="",f;this.stage="assign";
if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Sa,ra,nd,ig,Ib,mg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");
return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&w(a.watchId))b=
b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);
c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Sa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Sa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();
a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=
h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw X("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=
[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,
a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},
assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),
d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw X("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;V(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Sa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Sa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:
a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(ra(g[q](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,
function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,
c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:
d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||
b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,
g,h,k),m+="",Sa(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,
b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,sa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pg=N("$compile"),$=C.document.createElement("a"),yd=Y(C.location.href);zd.$inject=["$document"];Mc.$inject=["$provide"];var Gd=22,Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var Ag={yyyy:ba("FullYear",4,0,!1,!0),yy:ba("FullYear",2,0,
!0,!0),y:ba("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),LLLL:kb("Month",!1,!0),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/
60),2)+Kb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Bd.$inject=["$locale"];var tg=ha(Q),ug=ha(ub);Dd.$inject=["$parse"];var oe=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?
"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=Aa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",
new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Aa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ea&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,
$setDirty:A,$setPristine:A,$setSubmitted:A};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Ua).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();
n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):A;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);S(n,Lb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,
Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=U();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Td,Nb(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Nb(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Nb(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(da(a))return a;if(G(a)){rc.lastIndex=0;var d=rc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Nb(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!T(a))throw nb("numfmt",
a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a));g=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){w(a)&&!T(a)&&(a=parseFloat(a));h=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[Q(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ha({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=qc("",!0),ze=qc("Odd",0),ye=qc("Even",1),Ae=Ta({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Lc={},Og={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Aa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,B,r,y=function(){B&&(B.remove(),B=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){B=null}),B=r,r=null)};c.$watch(f,function(f){var m=function(){!w(h)||h&&!c.$eval(h)||b()},t=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===q){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ta({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(L(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Ua="ng-pristine",Mb="ng-dirty",Qd="ng-pending",nb=N("ngModel"),Pg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,u=n,s=null,B,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));
return c};u=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ya(c));};this.$render=A;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var J=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Ua)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Mb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(s);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!T(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===J&&r.$setValidity(a,b)}function g(a){h===J&&c(a)}J++;var h=J;(function(){var a=r.$$parserName||"parse";if(y(B))f(a,null);else return B||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(s);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(B=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){B=!1;break}T(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){u(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&w(d.debounce)&&(d=d.debounce,T(d)?c=d:T(d[b])?c=d[b]:T(d["default"])&&(c=d["default"]));g.cancel(s);c?s=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;B=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,A))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ta({terminal:!0,priority:1E3}),Rg=N("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var w=a&&d(a)||b,r=s&&d(s),y=s?function(a,b){return r(c,b)}:function(a){return Ca(a)},v=function(a,b){return y(a,E(a,b))},A=d(n[2]||n[1]),t=d(n[3]||""),K=d(n[4]||""),z=d(n[8]),H={},E=q?function(a,b){H[q]=b;H[p]=
a;return H}:function(a){H[p]=a;return H};return{trackBy:s,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=E(l,h),l=y(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=K(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=E(d[p],p),r=w(c,q),p=y(r,q),u=A(c,q),H=t(c,q),q=K(c,q),r=new e(p,r,u,H,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return s?ca.copy(a.viewValue):a.viewValue}}}}}var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
t&&p.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];w(c.group)?Db(c.element.parentNode):Db(c.element)}t=K.getOptions();var d={};v&&h.prepend(B);t.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=C,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(C);s.$render();s.$isEmpty(a)||(b=p.readValue(),(K.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),
s.$render()))}var p=l[0],s=l[1],y=k.multiple,B;l=0;for(var r=h.children(),A=r.length;l<A;l++)if(""===r[l].value){B=r.eq(l);break}var v=!!B,z=F(e.cloneNode(!1));z.val("?");var t,K=c(k.ngOptions,h,d),C=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){t.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=t.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=
t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},K.trackBy&&d.$watchCollection(function(){if(L(s.$viewValue))return s.$viewValue.map(function(a){return K.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=t.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),v||B.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||v?(z.remove(),v||h.prepend(B),h.val(""),B.prop("selected",
!0),B.attr("selected",!0)):(v||B.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},p.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(v||B.remove(),z.remove(),t.getViewValueFromOption(a)):null},K.trackBy&&d.$watch(function(){return K.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(B.remove(),a(B)(d),B.removeClass("ng-scope")):B=F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables,n)}}}}],Ie=["$locale","$interpolate",
"$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},w=b.startSymbol(),B=b.endSymbol(),r=w+l+"-"+n+B,z=ca.noop,v;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&T(v)&&isNaN(v)||
(z(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var w=l[3]||l[1],y=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,z,v,A,t={$id:Ca};s?r=a(s):(v=function(a,b){return Ca(b)},
A=function(a){return a});return function(a,d,f,g,l){r&&(z=function(b,c,d){y&&(t[y]=b);t[w]=c;t.$index=d;return r(a,t)});var m=U();a.$watchCollection(n,function(f){var g,n,r=d[0],s,u=U(),t,C,F,E,G,D,H;p&&(a[p]=f);if(ta(f))G=f,n=z||v;else for(H in n=z||A,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);t=G.length;H=Array(t);for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],E=n(C,F,g),m[E])D=m[E],delete m[E],u[E]=D,H[g]=D;else{if(u[E])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);H[g]={id:E,
scope:void 0,clone:void 0};u[E]=!0}for(s in m){D=m[s];E=tb(D.clone);b.leave(E);if(E[0].parentNode)for(g=0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],D=H[g],D.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);D.clone[0]!=s&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,w,F,y,C,t)}else l(function(a,c){D.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;u[D.id]=D;e(D.scope,g,w,F,y,C,t)});m=
u})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ta(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ne=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,
element:b})}}),Tg=N("ngTransclude"),Qe=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw Tg("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},Vg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Ug;d.unknownOption=F(C.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();
return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=
void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){w(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,
d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=w(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||
0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ha({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
y(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};C.angular.bootstrap?
C.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),F(C.document).ready(function(){fe(C.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f,c){if(!("indexOf" in Array.prototype)){Array.prototype.indexOf=function(k,j){if(j===c){j=0}if(j<0){j+=this.length}if(j<0){j=0}for(var l=this.length;j<l;j++){if(j in this&&this[j]===k){return j}}return -1}}function e(l){var k=f(l);var j=k.add(k.parents());var m=false;j.each(function(){if(f(this).css("position")==="fixed"){m=true;return false}});return m}function h(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var j=new Date();return h(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate(),j.getUTCHours(),j.getUTCMinutes(),j.getUTCSeconds(),0)}var i=function(l,k){var n=this;this.element=f(l);this.container=k.container||"body";this.language=k.language||this.element.data("date-language")||"en";this.language=this.language in a?this.language:this.language.split("-")[0];this.language=this.language in a?this.language:"en";this.isRTL=a[this.language].rtl||false;this.formatType=k.formatType||this.element.data("format-type")||"standard";this.format=g.parseFormat(k.format||this.element.data("date-format")||a[this.language].format||g.getDefaultFormat(this.formatType,"input"),this.formatType);this.isInline=false;this.isVisible=false;this.isInput=this.element.is("input");this.fontAwesome=k.fontAwesome||this.element.data("font-awesome")||false;this.bootcssVer=k.bootcssVer||(this.isInput?(this.element.is(".form-control")?3:2):(this.bootcssVer=this.element.is(".input-group")?3:2));this.component=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent():this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()):false;this.componentReset=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent():this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.linkField=k.linkField||this.element.data("link-field")||false;this.linkFormat=g.parseFormat(k.linkFormat||this.element.data("link-format")||g.getDefaultFormat(this.formatType,"link"),this.formatType);this.minuteStep=k.minuteStep||this.element.data("minute-step")||5;this.pickerPosition=k.pickerPosition||this.element.data("picker-position")||"bottom-right";this.showMeridian=k.showMeridian||this.element.data("show-meridian")||false;this.initialDate=k.initialDate||new Date();this.zIndex=k.zIndex||this.element.data("z-index")||c;this.title=typeof k.title==="undefined"?false:k.title;this.defaultTimeZone=(new Date).toString().split("(")[1].slice(0,-1);this.timezone=k.timezone||this.defaultTimeZone;this.icons={leftArrow:this.fontAwesome?"fa-arrow-left":(this.bootcssVer===3?"glyphicon-arrow-left":"icon-arrow-left"),rightArrow:this.fontAwesome?"fa-arrow-right":(this.bootcssVer===3?"glyphicon-arrow-right":"icon-arrow-right")};this.icontype=this.fontAwesome?"fa":"glyphicon";this._attachEvents();this.clickedOutside=function(o){if(f(o.target).closest(".datetimepicker").length===0){n.hide()}};this.formatViewType="datetime";if("formatViewType" in k){this.formatViewType=k.formatViewType}else{if("formatViewType" in this.element.data()){this.formatViewType=this.element.data("formatViewType")}}this.minView=0;if("minView" in k){this.minView=k.minView}else{if("minView" in this.element.data()){this.minView=this.element.data("min-view")}}this.minView=g.convertViewMode(this.minView);this.maxView=g.modes.length-1;if("maxView" in k){this.maxView=k.maxView}else{if("maxView" in this.element.data()){this.maxView=this.element.data("max-view")}}this.maxView=g.convertViewMode(this.maxView);this.wheelViewModeNavigation=false;if("wheelViewModeNavigation" in k){this.wheelViewModeNavigation=k.wheelViewModeNavigation}else{if("wheelViewModeNavigation" in this.element.data()){this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation")}}this.wheelViewModeNavigationInverseDirection=false;if("wheelViewModeNavigationInverseDirection" in k){this.wheelViewModeNavigationInverseDirection=k.wheelViewModeNavigationInverseDirection}else{if("wheelViewModeNavigationInverseDirection" in this.element.data()){this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir")}}this.wheelViewModeNavigationDelay=100;if("wheelViewModeNavigationDelay" in k){this.wheelViewModeNavigationDelay=k.wheelViewModeNavigationDelay}else{if("wheelViewModeNavigationDelay" in this.element.data()){this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay")}}this.startViewMode=2;if("startView" in k){this.startViewMode=k.startView}else{if("startView" in this.element.data()){this.startViewMode=this.element.data("start-view")}}this.startViewMode=g.convertViewMode(this.startViewMode);this.viewMode=this.startViewMode;this.viewSelect=this.minView;if("viewSelect" in k){this.viewSelect=k.viewSelect}else{if("viewSelect" in this.element.data()){this.viewSelect=this.element.data("view-select")}}this.viewSelect=g.convertViewMode(this.viewSelect);this.forceParse=true;if("forceParse" in k){this.forceParse=k.forceParse}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse")}}var m=this.bootcssVer===3?g.templateV3:g.template;while(m.indexOf("{iconType}")!==-1){m=m.replace("{iconType}",this.icontype)}while(m.indexOf("{leftArrow}")!==-1){m=m.replace("{leftArrow}",this.icons.leftArrow)}while(m.indexOf("{rightArrow}")!==-1){m=m.replace("{rightArrow}",this.icons.rightArrow)}this.picker=f(m).appendTo(this.isInline?this.element:this.container).on({click:f.proxy(this.click,this),mousedown:f.proxy(this.mousedown,this)});if(this.wheelViewModeNavigation){if(f.fn.mousewheel){this.picker.on({mousewheel:f.proxy(this.mousewheel,this)})}else{console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")}}if(this.isInline){this.picker.addClass("datetimepicker-inline")}else{this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu")}if(this.isRTL){this.picker.addClass("datetimepicker-rtl");var j=this.bootcssVer===3?".prev span, .next span":".prev i, .next i";this.picker.find(j).toggleClass(this.icons.leftArrow+" "+this.icons.rightArrow)}f(document).on("mousedown",this.clickedOutside);this.autoclose=false;if("autoclose" in k){this.autoclose=k.autoclose}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")}}this.keyboardNavigation=true;if("keyboardNavigation" in k){this.keyboardNavigation=k.keyboardNavigation}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")}}this.todayBtn=(k.todayBtn||this.element.data("date-today-btn")||false);this.clearBtn=(k.clearBtn||this.element.data("date-clear-btn")||false);this.todayHighlight=(k.todayHighlight||this.element.data("date-today-highlight")||false);this.weekStart=((k.weekStart||this.element.data("date-weekstart")||a[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.datesDisabled=[];this.daysOfWeekDisabled=[];this.setStartDate(k.startDate||this.element.data("date-startdate"));this.setEndDate(k.endDate||this.element.data("date-enddate"));this.setDatesDisabled(k.datesDisabled||this.element.data("date-dates-disabled"));this.setDaysOfWeekDisabled(k.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));this.setMinutesDisabled(k.minutesDisabled||this.element.data("date-minute-disabled"));this.setHoursDisabled(k.hoursDisabled||this.element.data("date-hour-disabled"));this.fillDow();this.fillMonths();this.update();this.showMode();if(this.isInline){this.show()}};i.prototype={constructor:i,_events:[],_attachEvents:function(){this._detachEvents();if(this.isInput){this._events=[[this.element,{focus:f.proxy(this.show,this),keyup:f.proxy(this.update,this),keydown:f.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:f.proxy(this.show,this),keyup:f.proxy(this.update,this),keydown:f.proxy(this.keydown,this)}],[this.component,{click:f.proxy(this.show,this)}]];if(this.componentReset){this._events.push([this.componentReset,{click:f.proxy(this.reset,this)}])}}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:f.proxy(this.show,this)}]]}}}for(var j=0,k,l;j<this._events.length;j++){k=this._events[j][0];l=this._events[j][1];k.on(l)}},_detachEvents:function(){for(var j=0,k,l;j<this._events.length;j++){k=this._events[j][0];l=this._events[j][1];k.off(l)}this._events=[]},show:function(j){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();if(this.forceParse){this.update()}this.place();f(window).on("resize",f.proxy(this.place,this));if(j){j.stopPropagation();j.preventDefault()}this.isVisible=true;this.element.trigger({type:"show",date:this.date})},hide:function(j){if(!this.isVisible){return}if(this.isInline){return}this.picker.hide();f(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){f(document).off("mousedown",this.hide)}if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this.isVisible=false;this.element.trigger({type:"hide",date:this.date})},remove:function(){this._detachEvents();f(document).off("mousedown",this.clickedOutside);this.picker.remove();delete this.picker;delete this.element.data().datetimepicker},getDate:function(){var j=this.getUTCDate();return new Date(j.getTime()+(j.getTimezoneOffset()*60000))},getUTCDate:function(){return this.date},getInitialDate:function(){return this.initialDate},setInitialDate:function(j){this.initialDate=j},setDate:function(j){this.setUTCDate(new Date(j.getTime()-(j.getTimezoneOffset()*60000)))},setUTCDate:function(j){if(j>=this.startDate&&j<=this.endDate){this.date=j;this.setValue();this.viewDate=this.date;this.fill()}else{this.element.trigger({type:"outOfRange",date:j,startDate:this.startDate,endDate:this.endDate})}},setFormat:function(k){this.format=g.parseFormat(k,this.formatType);var j;if(this.isInput){j=this.element}else{if(this.component){j=this.element.find("input")}}if(j&&j.val()){this.setValue()}},setValue:function(){var j=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(j)}this.element.data("date",j)}else{this.element.val(j)}if(this.linkField){f("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))}},getFormattedDate:function(j){if(j==c){j=this.format}return g.formatDate(this.date,j,this.language,this.formatType,this.timezone)},setStartDate:function(j){this.startDate=j||-Infinity;if(this.startDate!==-Infinity){this.startDate=g.parseDate(this.startDate,this.format,this.language,this.formatType,this.timezone)}this.update();this.updateNavArrows()},setEndDate:function(j){this.endDate=j||Infinity;if(this.endDate!==Infinity){this.endDate=g.parseDate(this.endDate,this.format,this.language,this.formatType,this.timezone)}this.update();this.updateNavArrows()},setDatesDisabled:function(j){this.datesDisabled=j||[];if(!f.isArray(this.datesDisabled)){this.datesDisabled=this.datesDisabled.split(/,\s*/)}this.datesDisabled=f.map(this.datesDisabled,function(k){return g.parseDate(k,this.format,this.language,this.formatType,this.timezone).toDateString()});this.update();this.updateNavArrows()},setTitle:function(j,k){return this.picker.find(j).find("th:eq(1)").text(this.title===false?k:this.title)},setDaysOfWeekDisabled:function(j){this.daysOfWeekDisabled=j||[];if(!f.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)}this.daysOfWeekDisabled=f.map(this.daysOfWeekDisabled,function(k){return parseInt(k,10)});this.update();this.updateNavArrows()},setMinutesDisabled:function(j){this.minutesDisabled=j||[];if(!f.isArray(this.minutesDisabled)){this.minutesDisabled=this.minutesDisabled.split(/,\s*/)}this.minutesDisabled=f.map(this.minutesDisabled,function(k){return parseInt(k,10)});this.update();this.updateNavArrows()},setHoursDisabled:function(j){this.hoursDisabled=j||[];if(!f.isArray(this.hoursDisabled)){this.hoursDisabled=this.hoursDisabled.split(/,\s*/)}this.hoursDisabled=f.map(this.hoursDisabled,function(k){return parseInt(k,10)});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}if(!this.zIndex){var k=0;f("div").each(function(){var p=parseInt(f(this).css("zIndex"),10);if(p>k){k=p}});this.zIndex=k+10}var o,n,m,l;if(this.container instanceof f){l=this.container.offset()}else{l=f(this.container).offset()}if(this.component){o=this.component.offset();m=o.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){m+=this.component.outerWidth()-this.picker.outerWidth()}}else{o=this.element.offset();m=o.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){m+=this.element.outerWidth()-this.picker.outerWidth()}}var j=document.body.clientWidth||window.innerWidth;if(m+220>j){m=j-220}if(this.pickerPosition=="top-left"||this.pickerPosition=="top-right"){n=o.top-this.picker.outerHeight()}else{n=o.top+this.height}n=n-l.top;m=m-l.left;this.picker.css({top:n,left:m,zIndex:this.zIndex})},update:function(){var j,k=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){j=arguments[0];k=true}else{j=(this.isInput?this.element.val():this.element.find("input").val())||this.element.data("date")||this.initialDate;if(typeof j=="string"||j instanceof String){j=j.replace(/^\s+|\s+$/g,"")}}if(!j){j=new Date();k=false}this.date=g.parseDate(j,this.format,this.language,this.formatType,this.timezone);if(k){this.setValue()}if(this.date<this.startDate){this.viewDate=new Date(this.startDate)}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)}else{this.viewDate=new Date(this.date)}}this.fill()},fillDow:function(){var j=this.weekStart,k="<tr>";while(j<this.weekStart+7){k+='<th class="dow">'+a[this.language].daysMin[(j++)%7]+"</th>"}k+="</tr>";this.picker.find(".datetimepicker-days thead").append(k)},fillMonths:function(){var k="",j=0;while(j<12){k+='<span class="month">'+a[this.language].monthsShort[j++]+"</span>"}this.picker.find(".datetimepicker-months td").html(k)},fill:function(){if(this.date==null||this.viewDate==null){return}var H=new Date(this.viewDate),u=H.getUTCFullYear(),I=H.getUTCMonth(),n=H.getUTCDate(),D=H.getUTCHours(),y=H.getUTCMinutes(),z=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,E=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,q=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,A=this.endDate!==Infinity?this.endDate.getUTCMonth()+1:Infinity,r=(new h(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate())).valueOf(),G=new Date();this.setTitle(".datetimepicker-days",a[this.language].months[I]+" "+u);if(this.formatViewType=="time"){var k=this.getFormattedDate();this.setTitle(".datetimepicker-hours",k);this.setTitle(".datetimepicker-minutes",k)}else{this.setTitle(".datetimepicker-hours",n+" "+a[this.language].months[I]+" "+u);this.setTitle(".datetimepicker-minutes",n+" "+a[this.language].months[I]+" "+u)}this.picker.find("tfoot th.today").text(a[this.language].today||a.en.today).toggle(this.todayBtn!==false);this.picker.find("tfoot th.clear").text(a[this.language].clear||a.en.clear).toggle(this.clearBtn!==false);this.updateNavArrows();this.fillMonths();var K=h(u,I-1,28,0,0,0,0),C=g.getDaysInMonth(K.getUTCFullYear(),K.getUTCMonth());K.setUTCDate(C);K.setUTCDate(C-(K.getUTCDay()-this.weekStart+7)%7);var j=new Date(K);j.setUTCDate(j.getUTCDate()+42);j=j.valueOf();var s=[];var v;while(K.valueOf()<j){if(K.getUTCDay()==this.weekStart){s.push("<tr>")}v="";if(K.getUTCFullYear()<u||(K.getUTCFullYear()==u&&K.getUTCMonth()<I)){v+=" old"}else{if(K.getUTCFullYear()>u||(K.getUTCFullYear()==u&&K.getUTCMonth()>I)){v+=" new"}}if(this.todayHighlight&&K.getUTCFullYear()==G.getFullYear()&&K.getUTCMonth()==G.getMonth()&&K.getUTCDate()==G.getDate()){v+=" today"}if(K.valueOf()==r){v+=" active"}if((K.valueOf()+86400000)<=this.startDate||K.valueOf()>this.endDate||f.inArray(K.getUTCDay(),this.daysOfWeekDisabled)!==-1||f.inArray(K.toDateString(),this.datesDisabled)!==-1){v+=" disabled"}s.push('<td class="day'+v+'">'+K.getUTCDate()+"</td>");if(K.getUTCDay()==this.weekEnd){s.push("</tr>")}K.setUTCDate(K.getUTCDate()+1)}this.picker.find(".datetimepicker-days tbody").empty().append(s.join(""));s=[];var w="",F="",t="";var l=this.hoursDisabled||[];for(var B=0;B<24;B++){if(l.indexOf(B)!==-1){continue}var x=h(u,I,n,B);v="";if((x.valueOf()+3600000)<=this.startDate||x.valueOf()>this.endDate){v+=" disabled"}else{if(D==B){v+=" active"}}if(this.showMeridian&&a[this.language].meridiem.length==2){F=(B<12?a[this.language].meridiem[0]:a[this.language].meridiem[1]);if(F!=t){if(t!=""){s.push("</fieldset>")}s.push('<fieldset class="hour"><legend>'+F.toUpperCase()+"</legend>")}t=F;w=(B%12?B%12:12);s.push('<span class="hour'+v+" hour_"+(B<12?"am":"pm")+'">'+w+"</span>");if(B==23){s.push("</fieldset>")}}else{w=B+":00";s.push('<span class="hour'+v+'">'+w+"</span>")}}this.picker.find(".datetimepicker-hours td").html(s.join(""));s=[];w="",F="",t="";var m=this.minutesDisabled||[];for(var B=0;B<60;B+=this.minuteStep){if(m.indexOf(B)!==-1){continue}var x=h(u,I,n,D,B,0);v="";if(x.valueOf()<this.startDate||x.valueOf()>this.endDate){v+=" disabled"}else{if(Math.floor(y/this.minuteStep)==Math.floor(B/this.minuteStep)){v+=" active"}}if(this.showMeridian&&a[this.language].meridiem.length==2){F=(D<12?a[this.language].meridiem[0]:a[this.language].meridiem[1]);if(F!=t){if(t!=""){s.push("</fieldset>")}s.push('<fieldset class="minute"><legend>'+F.toUpperCase()+"</legend>")}t=F;w=(D%12?D%12:12);s.push('<span class="minute'+v+'">'+w+":"+(B<10?"0"+B:B)+"</span>");if(B==59){s.push("</fieldset>")}}else{w=B+":00";s.push('<span class="minute'+v+'">'+D+":"+(B<10?"0"+B:B)+"</span>")}}this.picker.find(".datetimepicker-minutes td").html(s.join(""));var L=this.date.getUTCFullYear();var p=this.setTitle(".datetimepicker-months",u).end().find("span").removeClass("active");if(L==u){var o=p.length-12;p.eq(this.date.getUTCMonth()+o).addClass("active")}if(u<z||u>q){p.addClass("disabled")}if(u==z){p.slice(0,E).addClass("disabled")}if(u==q){p.slice(A).addClass("disabled")}s="";u=parseInt(u/10,10)*10;var J=this.setTitle(".datetimepicker-years",u+"-"+(u+9)).end().find("td");u-=1;for(var B=-1;B<11;B++){s+='<span class="year'+(B==-1||B==10?" old":"")+(L==u?" active":"")+(u<z||u>q?" disabled":"")+'">'+u+"</span>";u+=1}J.html(s);this.place()},updateNavArrows:function(){var n=new Date(this.viewDate),l=n.getUTCFullYear(),m=n.getUTCMonth(),k=n.getUTCDate(),j=n.getUTCHours();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()&&m<=this.startDate.getUTCMonth()&&k<=this.startDate.getUTCDate()&&j<=this.startDate.getUTCHours()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()&&m>=this.endDate.getUTCMonth()&&k>=this.endDate.getUTCDate()&&j>=this.endDate.getUTCHours()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()&&m<=this.startDate.getUTCMonth()&&k<=this.startDate.getUTCDate()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()&&m>=this.endDate.getUTCMonth()&&k>=this.endDate.getUTCDate()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 2:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()&&m<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()&&m>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 3:case 4:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},mousewheel:function(k){k.preventDefault();k.stopPropagation();if(this.wheelPause){return}this.wheelPause=true;var j=k.originalEvent;var m=j.wheelDelta;var l=m>0?1:(m===0)?0:-1;if(this.wheelViewModeNavigationInverseDirection){l=-l}this.showMode(l);setTimeout(f.proxy(function(){this.wheelPause=false},this),this.wheelViewModeNavigationDelay)},click:function(n){n.stopPropagation();n.preventDefault();var o=f(n.target).closest("span, td, th, legend");if(o.is("."+this.icontype)){o=f(o).parent().closest("span, td, th, legend")}if(o.length==1){if(o.is(".disabled")){this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});return}switch(o[0].nodeName.toLowerCase()){case"th":switch(o[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var j=g.modes[this.viewMode].navStep*(o[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,j);break;case 1:this.viewDate=this.moveDate(this.viewDate,j);break;case 2:this.viewDate=this.moveMonth(this.viewDate,j);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,j);break}this.fill();this.element.trigger({type:o[0].className+":"+this.convertViewModeText(this.viewMode),date:this.viewDate,startDate:this.startDate,endDate:this.endDate});break;case"clear":this.reset();if(this.autoclose){this.hide()}break;case"today":var k=new Date();k=h(k.getFullYear(),k.getMonth(),k.getDate(),k.getHours(),k.getMinutes(),k.getSeconds(),0);if(k<this.startDate){k=this.startDate}else{if(k>this.endDate){k=this.endDate}}this.viewMode=this.startViewMode;this.showMode(0);this._setDate(k);this.fill();if(this.autoclose){this.hide()}break}break;case"span":if(!o.is(".disabled")){var q=this.viewDate.getUTCFullYear(),p=this.viewDate.getUTCMonth(),r=this.viewDate.getUTCDate(),s=this.viewDate.getUTCHours(),l=this.viewDate.getUTCMinutes(),t=this.viewDate.getUTCSeconds();if(o.is(".month")){this.viewDate.setUTCDate(1);p=o.parent().find("span").index(o);r=this.viewDate.getUTCDate();this.viewDate.setUTCMonth(p);this.element.trigger({type:"changeMonth",date:this.viewDate});if(this.viewSelect>=3){this._setDate(h(q,p,r,s,l,t,0))}}else{if(o.is(".year")){this.viewDate.setUTCDate(1);q=parseInt(o.text(),10)||0;this.viewDate.setUTCFullYear(q);this.element.trigger({type:"changeYear",date:this.viewDate});if(this.viewSelect>=4){this._setDate(h(q,p,r,s,l,t,0))}}else{if(o.is(".hour")){s=parseInt(o.text(),10)||0;if(o.hasClass("hour_am")||o.hasClass("hour_pm")){if(s==12&&o.hasClass("hour_am")){s=0}else{if(s!=12&&o.hasClass("hour_pm")){s+=12}}}this.viewDate.setUTCHours(s);this.element.trigger({type:"changeHour",date:this.viewDate});if(this.viewSelect>=1){this._setDate(h(q,p,r,s,l,t,0))}}else{if(o.is(".minute")){l=parseInt(o.text().substr(o.text().indexOf(":")+1),10)||0;this.viewDate.setUTCMinutes(l);this.element.trigger({type:"changeMinute",date:this.viewDate});if(this.viewSelect>=0){this._setDate(h(q,p,r,s,l,t,0))}}}}}if(this.viewMode!=0){var m=this.viewMode;this.showMode(-1);this.fill();if(m==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}}break;case"td":if(o.is(".day")&&!o.is(".disabled")){var r=parseInt(o.text(),10)||1;var q=this.viewDate.getUTCFullYear(),p=this.viewDate.getUTCMonth(),s=this.viewDate.getUTCHours(),l=this.viewDate.getUTCMinutes(),t=this.viewDate.getUTCSeconds();if(o.is(".old")){if(p===0){p=11;q-=1}else{p-=1}}else{if(o.is(".new")){if(p==11){p=0;q+=1}else{p+=1}}}this.viewDate.setUTCFullYear(q);this.viewDate.setUTCMonth(p,r);this.element.trigger({type:"changeDay",date:this.viewDate});if(this.viewSelect>=2){this._setDate(h(q,p,r,s,l,t,0))}}var m=this.viewMode;this.showMode(-1);this.fill();if(m==this.viewMode&&this.autoclose){this.hide()}break}}},_setDate:function(j,l){if(!l||l=="date"){this.date=j}if(!l||l=="view"){this.viewDate=j}this.fill();this.setValue();var k;if(this.isInput){k=this.element}else{if(this.component){k=this.element.find("input")}}if(k){k.change();if(this.autoclose&&(!l||l=="date")){}}this.element.trigger({type:"changeDate",date:this.getDate()});if(j==null){this.date=this.viewDate}},moveMinute:function(k,j){if(!j){return k}var l=new Date(k.valueOf());l.setUTCMinutes(l.getUTCMinutes()+(j*this.minuteStep));return l},moveHour:function(k,j){if(!j){return k}var l=new Date(k.valueOf());l.setUTCHours(l.getUTCHours()+j);return l},moveDate:function(k,j){if(!j){return k}var l=new Date(k.valueOf());l.setUTCDate(l.getUTCDate()+j);return l},moveMonth:function(j,k){if(!k){return j}var n=new Date(j.valueOf()),r=n.getUTCDate(),o=n.getUTCMonth(),m=Math.abs(k),q,p;k=k>0?1:-1;if(m==1){p=k==-1?function(){return n.getUTCMonth()==o}:function(){return n.getUTCMonth()!=q};q=o+k;n.setUTCMonth(q);if(q<0||q>11){q=(q+12)%12}}else{for(var l=0;l<m;l++){n=this.moveMonth(n,k)}q=n.getUTCMonth();n.setUTCDate(r);p=function(){return q!=n.getUTCMonth()}}while(p()){n.setUTCDate(--r);n.setUTCMonth(q)}return n},moveYear:function(k,j){return this.moveMonth(k,j*12)},dateWithinRange:function(j){return j>=this.startDate&&j<=this.endDate},keydown:function(n){if(this.picker.is(":not(:visible)")){if(n.keyCode==27){this.show()}return}var p=false,k,q,o,r,j;switch(n.keyCode){case 27:this.hide();n.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation){break}k=n.keyCode==37?-1:1;viewMode=this.viewMode;if(n.ctrlKey){viewMode+=2}else{if(n.shiftKey){viewMode+=1}}if(viewMode==4){r=this.moveYear(this.date,k);j=this.moveYear(this.viewDate,k)}else{if(viewMode==3){r=this.moveMonth(this.date,k);j=this.moveMonth(this.viewDate,k)}else{if(viewMode==2){r=this.moveDate(this.date,k);j=this.moveDate(this.viewDate,k)}else{if(viewMode==1){r=this.moveHour(this.date,k);j=this.moveHour(this.viewDate,k)}else{if(viewMode==0){r=this.moveMinute(this.date,k);j=this.moveMinute(this.viewDate,k)}}}}}if(this.dateWithinRange(r)){this.date=r;this.viewDate=j;this.setValue();this.update();n.preventDefault();p=true}break;case 38:case 40:if(!this.keyboardNavigation){break}k=n.keyCode==38?-1:1;viewMode=this.viewMode;if(n.ctrlKey){viewMode+=2}else{if(n.shiftKey){viewMode+=1}}if(viewMode==4){r=this.moveYear(this.date,k);j=this.moveYear(this.viewDate,k)}else{if(viewMode==3){r=this.moveMonth(this.date,k);j=this.moveMonth(this.viewDate,k)}else{if(viewMode==2){r=this.moveDate(this.date,k*7);j=this.moveDate(this.viewDate,k*7)}else{if(viewMode==1){if(this.showMeridian){r=this.moveHour(this.date,k*6);j=this.moveHour(this.viewDate,k*6)}else{r=this.moveHour(this.date,k*4);j=this.moveHour(this.viewDate,k*4)}}else{if(viewMode==0){r=this.moveMinute(this.date,k*4);j=this.moveMinute(this.viewDate,k*4)}}}}}if(this.dateWithinRange(r)){this.date=r;this.viewDate=j;this.setValue();this.update();n.preventDefault();p=true}break;case 13:if(this.viewMode!=0){var m=this.viewMode;this.showMode(-1);this.fill();if(m==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}n.preventDefault();break;case 9:this.hide();break}if(p){var l;if(this.isInput){l=this.element}else{if(this.component){l=this.element.find("input")}}if(l){l.change()}this.element.trigger({type:"changeDate",date:this.getDate()})}},showMode:function(j){if(j){var k=Math.max(0,Math.min(g.modes.length-1,this.viewMode+j));if(k>=this.minView&&k<=this.maxView){this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:k});this.viewMode=k}}this.picker.find(">div").hide().filter(".datetimepicker-"+g.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()},reset:function(j){this._setDate(null,"date")},convertViewModeText:function(j){switch(j){case 4:return"decade";case 3:return"year";case 2:return"month";case 1:return"day";case 0:return"hour"}}};var b=f.fn.datetimepicker;f.fn.datetimepicker=function(l){var j=Array.apply(null,arguments);j.shift();var k;this.each(function(){var o=f(this),n=o.data("datetimepicker"),m=typeof l=="object"&&l;if(!n){o.data("datetimepicker",(n=new i(this,f.extend({},f.fn.datetimepicker.defaults,m))))}if(typeof l=="string"&&typeof n[l]=="function"){k=n[l].apply(n,j);if(k!==c){return false}}});if(k!==c){return k}else{return this}};f.fn.datetimepicker.defaults={};f.fn.datetimepicker.Constructor=i;var a=f.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today",clear:"Clear"}};var g={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(j){return(((j%4===0)&&(j%100!==0))||(j%400===0))},getDaysInMonth:function(j,k){return[31,(g.isLeapYear(j)?29:28),31,30,31,30,31,31,30,31,30,31][k]},getDefaultFormat:function(j,k){if(j=="standard"){if(k=="input"){return"yyyy-mm-dd hh:ii"}else{return"yyyy-mm-dd hh:ii:ss"}}else{if(j=="php"){if(k=="input"){return"Y-m-d H:i"}else{return"Y-m-d H:i:s"}}else{throw new Error("Invalid format type.")}}},validParts:function(j){if(j=="standard"){return/t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g}else{if(j=="php"){return/[dDjlNwzFmMnStyYaABgGhHis]/g}else{throw new Error("Invalid format type.")}}},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(m,k){var j=m.replace(this.validParts(k),"\0").split("\0"),l=m.match(this.validParts(k));if(!j||!j.length||!l||l.length==0){throw new Error("Invalid date format.")}return{separators:j,parts:l}},parseDate:function(A,y,v,j,r){if(A instanceof Date){var u=new Date(A.valueOf()-A.getTimezoneOffset()*60000);u.setMilliseconds(0);return u}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(A)){y=this.parseFormat("yyyy-mm-dd",j)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(A)){y=this.parseFormat("yyyy-mm-dd hh:ii",j)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(A)){y=this.parseFormat("yyyy-mm-dd hh:ii:ss",j)}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(A)){var l=/([-+]\d+)([dmwy])/,q=A.match(/([-+]\d+)([dmwy])/g),t,p;A=new Date();for(var x=0;x<q.length;x++){t=l.exec(q[x]);p=parseInt(t[1]);switch(t[2]){case"d":A.setUTCDate(A.getUTCDate()+p);break;case"m":A=i.prototype.moveMonth.call(i.prototype,A,p);break;case"w":A.setUTCDate(A.getUTCDate()+p*7);break;case"y":A=i.prototype.moveYear.call(i.prototype,A,p);break}}return h(A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate(),A.getUTCHours(),A.getUTCMinutes(),A.getUTCSeconds(),0)}var q=A&&A.toString().match(this.nonpunctuation)||[],A=new Date(0,0,0,0,0,0,0),m={},z=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P","z","Z"],o={hh:function(C,s){return C.setUTCHours(s)},h:function(C,s){return C.setUTCHours(s)},HH:function(C,s){return C.setUTCHours(s==12?0:s)},H:function(C,s){return C.setUTCHours(s==12?0:s)},ii:function(C,s){return C.setUTCMinutes(s)},i:function(C,s){return C.setUTCMinutes(s)},ss:function(C,s){return C.setUTCSeconds(s)},s:function(C,s){return C.setUTCSeconds(s)},yyyy:function(C,s){return C.setUTCFullYear(s)},yy:function(C,s){return C.setUTCFullYear(2000+s)},m:function(C,s){s-=1;while(s<0){s+=12}s%=12;C.setUTCMonth(s);while(C.getUTCMonth()!=s){if(isNaN(C.getUTCMonth())){return C}else{C.setUTCDate(C.getUTCDate()-1)}}return C},d:function(C,s){return C.setUTCDate(s)},p:function(C,s){return C.setUTCHours(s==1?C.getUTCHours()+12:C.getUTCHours())},z:function(){return r}},B,k,t;o.M=o.MM=o.mm=o.m;o.dd=o.d;o.P=o.p;o.Z=o.z;A=h(A.getFullYear(),A.getMonth(),A.getDate(),A.getHours(),A.getMinutes(),A.getSeconds());if(q.length==y.parts.length){for(var x=0,w=y.parts.length;x<w;x++){B=parseInt(q[x],10);t=y.parts[x];if(isNaN(B)){switch(t){case"MM":k=f(a[v].months).filter(function(){var s=this.slice(0,q[x].length),C=q[x].slice(0,s.length);return s==C});B=f.inArray(k[0],a[v].months)+1;break;case"M":k=f(a[v].monthsShort).filter(function(){var s=this.slice(0,q[x].length),C=q[x].slice(0,s.length);return s.toLowerCase()==C.toLowerCase()});B=f.inArray(k[0],a[v].monthsShort)+1;break;case"p":case"P":B=f.inArray(q[x].toLowerCase(),a[v].meridiem);break;case"z":case"Z":r;break}}m[t]=B}for(var x=0,n;x<z.length;x++){n=z[x];if(n in m&&!isNaN(m[n])){o[n](A,m[n])}}}return A},formatDate:function(l,q,m,p,o){if(l==null){return""}var k;if(p=="standard"){k={t:l.getTime(),yy:l.getUTCFullYear().toString().substring(2),yyyy:l.getUTCFullYear(),m:l.getUTCMonth()+1,M:a[m].monthsShort[l.getUTCMonth()],MM:a[m].months[l.getUTCMonth()],d:l.getUTCDate(),D:a[m].daysShort[l.getUTCDay()],DD:a[m].days[l.getUTCDay()],p:(a[m].meridiem.length==2?a[m].meridiem[l.getUTCHours()<12?0:1]:""),h:l.getUTCHours(),i:l.getUTCMinutes(),s:l.getUTCSeconds(),z:o};if(a[m].meridiem.length==2){k.H=(k.h%12==0?12:k.h%12)}else{k.H=k.h}k.HH=(k.H<10?"0":"")+k.H;k.P=k.p.toUpperCase();k.Z=k.z;k.hh=(k.h<10?"0":"")+k.h;k.ii=(k.i<10?"0":"")+k.i;k.ss=(k.s<10?"0":"")+k.s;k.dd=(k.d<10?"0":"")+k.d;k.mm=(k.m<10?"0":"")+k.m}else{if(p=="php"){k={y:l.getUTCFullYear().toString().substring(2),Y:l.getUTCFullYear(),F:a[m].months[l.getUTCMonth()],M:a[m].monthsShort[l.getUTCMonth()],n:l.getUTCMonth()+1,t:g.getDaysInMonth(l.getUTCFullYear(),l.getUTCMonth()),j:l.getUTCDate(),l:a[m].days[l.getUTCDay()],D:a[m].daysShort[l.getUTCDay()],w:l.getUTCDay(),N:(l.getUTCDay()==0?7:l.getUTCDay()),S:(l.getUTCDate()%10<=a[m].suffix.length?a[m].suffix[l.getUTCDate()%10-1]:""),a:(a[m].meridiem.length==2?a[m].meridiem[l.getUTCHours()<12?0:1]:""),g:(l.getUTCHours()%12==0?12:l.getUTCHours()%12),G:l.getUTCHours(),i:l.getUTCMinutes(),s:l.getUTCSeconds()};k.m=(k.n<10?"0":"")+k.n;k.d=(k.j<10?"0":"")+k.j;k.A=k.a.toString().toUpperCase();k.h=(k.g<10?"0":"")+k.g;k.H=(k.G<10?"0":"")+k.G;k.i=(k.i<10?"0":"")+k.i;k.s=(k.s<10?"0":"")+k.s}else{throw new Error("Invalid format type.")}}var l=[],r=f.extend([],q.separators);for(var n=0,j=q.parts.length;n<j;n++){if(r.length){l.push(r.shift())}l.push(k[q.parts[n]])}if(r.length){l.push(r.shift())}return l.join("")},convertViewMode:function(j){switch(j){case 4:case"decade":j=4;break;case 3:case"year":j=3;break;case 2:case"month":j=2;break;case 1:case"day":j=1;break;case 0:case"hour":j=0;break}return j},headTemplate:'<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',headTemplateV3:'<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};g.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplate+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+"</table></div></div>";g.templateV3='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplateV3+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+"</table></div></div>";f.fn.datetimepicker.DPGlobal=g;f.fn.datetimepicker.noConflict=function(){f.fn.datetimepicker=b;return this};f(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(k){var j=f(this);if(j.data("datetimepicker")){return}k.preventDefault();j.datetimepicker("show")});f(function(){f('[data-provide="datetimepicker-inline"]').datetimepicker()})}));
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.echarts=e()}(this,function(){var t,e;!function(){function i(t,e){if(!e)return t;if(0===t.indexOf(".")){var i=e.split("/"),n=t.split("/"),r=i.length-1,a=n.length,o=0,s=0;t:for(var l=0;a>l;l++)switch(n[l]){case"..":if(!(r>o))break t;o++,s++;break;case".":s++;break;default:break t}return i.length=r-o,n=n.slice(s),i.concat(n).join("/")}return t}function n(t){function e(e,o){if("string"==typeof e){var s=n[e];return s||(s=a(i(e,t)),n[e]=s),s}e instanceof Array&&(o=o||function(){},o.apply(this,r(e,o,t)))}var n={};return e}function r(e,n,r){for(var s=[],l=o[r],u=0,c=Math.min(e.length,n.length);c>u;u++){var h,d=i(e[u],r);switch(d){case"require":h=l&&l.require||t;break;case"exports":h=l.exports;break;case"module":h=l;break;default:h=a(d)}s.push(h)}return s}function a(t){var e=o[t];if(!e)throw new Error("No "+t);if(!e.defined){var i=e.factory,n=i.apply(this,r(e.deps||[],i,t));"undefined"!=typeof n&&(e.exports=n),e.defined=1}return e.exports}var o={};e=function(t,e,i){if(2===arguments.length&&(i=e,e=[],"function"!=typeof i)){var r=i;i=function(){return r}}o[t]={id:t,deps:e,factory:i,defined:0,exports:{},require:n(t)}},t=n("")}();var i="textStyleModel",n="../../visual/VisualMapping",r="categories",a="reverse",o="eachNode",s="_controller",l="enable",u="roamDetail",c="layout",h="itemGap",d="formatTooltip",f="orient",p="padding",v="../../util/format",m="legendDataProvider",g="$superApply",y="selected",x="single",_="selectedMode",w="axisLine",b="axisTick",M="label.emphasis",S="label.normal",A="itemStyle.emphasis",C="itemStyle.normal",T="../../echarts",k="../../model/Model",L="getDimensionsOnAxis",D="cartesian2d",P="getBoxLayoutParams",I="getRect",z="../../coord/axisHelper",V="../../util/layout",R="../../model/Component",O="axisLabel",E="coordToData",N="dataToCoord",B="getFormattedLabels",G="createScaleByModel",Z="interval",F="splitNumber",H="boundaryGap",W="niceScaleExtent",q="getLabel",U="getTicks",j="setExtent",X="unionExtent",Y="../layout/points",$="../visual/symbol",K="../echarts",J="getLineStyle",Q="lineStyle.normal",tt="_symbolDraw",et="inverse",it="getAxis",nt="getBandWidth",rt="onBand",at="../../view/Chart",ot="../helper/SymbolDraw",st="dataToPoint",lt="getExtent",ut="getOtherAxis",ct="execute",ht="getFormattedLabel",dt="getItemStyle",ft="circle",pt="symbol",vt="symbolSize",mt="createSymbol",gt="updateData",yt="../../util/number",xt="../../util/graphic",_t="../../util/symbol",wt="setColor",bt="../../model/Series",Mt="../helper/createListFromArray",St="getCategories",At="category",Ct="../../CoordinateSystem",Tt="../../util/model",kt="../../data/helper/completeDimensions",Lt="../../data/List",Dt="setItemGraphicEl",Pt="getItemVisual",It="setItemLayout",zt="getItemLayout",Vt="getLayout",Rt="setLayout",Ot="getVisual",Et="mapArray",Nt="filterSelf",Bt="getSum",Gt="getDataExtent",Zt="getValues",Ft="initData",Ht="getDimension",Wt="extendComponentView",qt="extendSeriesModel",Ut="extendComponentModel",jt="extendChartView",Xt="registerVisualCoding",Yt="registerLayout",$t="registerAction",Kt="registerProcessor",Jt="registerPreprocessor",Qt="hostModel",te="downplay",ee="highlight",ie="eachComponent",ne="_model",re="itemStyle.normal.color",ae="scatter",oe="dataZoom",se="legend",le="markPoint",ue="itemStyle",ce="lineStyle",he="eachSeries",de="eachSeriesByType",fe="setItemVisual",pe="isSeriesFiltered",ve="setVisual",me="dispose",ge="canvasSupported",ye="clientHeight",xe="backgroundColor",_e="appendChild",we="innerHTML",be="intersect",Me="resize",Se="update",Ae="zlevel",Ce="silent",Te="getDisplayList",ke="storage",Le="parentNode",De="offsetY",Pe="offsetX",Ie="mouseup",ze="mousemove",Ve="mousedown",Re="zrender/core/event",Oe="zrender/core/env",Ee="initProps",Ne="updateProps",Be="animateTo",Ge="getTextColor",Ze="setText",Fe="mouseout",He="mouseover",We="setHoverStyle",qe="hoverStyle",Ue="setStyle",je="subPixelOptimizeRect",Xe="extendShape",Ye="Polyline",$e="Polygon",Ke="Sector",Je="Circle",Qe="offset",ti="points",ei="clockwise",ii="endAngle",ni="startAngle",ri="setData",ai="setShape",oi="restore",si="buildPath",li="zrender/graphic/Path",ui="closePath",ci="bezierCurveTo",hi="lineTo",di="moveTo",fi="beginPath",pi="quadraticAt",vi="contain",mi="textBaseline",gi="textAlign",yi="textPosition",xi="eachItemGraphicEl",_i="indexOfName",wi="getItemGraphicEl",bi="dataIndex",Mi="trigger",Si="render",Ai="removeAll",Ci="updateLayout",Ti="invisible",ki="traverse",Li="delFromMap",Di="addToMap",Pi="remove",Ii="__dirty",zi="refresh",Vi="ignore",Ri="draggable",Oi="animate",Ei="stopAnimation",Ni="linear",Bi="animation",Gi="zrender/tool/color",Zi="target",Fi="transformCoordToLocal",Hi="rotate",Wi="invTransform",qi="getLocalTransform",Ui="parent",ji="updateTransform",Xi="transform",Yi="origin",$i="rotation",Ki="splice",Ji="zrender/mixin/Eventful",Qi="<br />",tn="getBaseAxis",en="dimensions",nn="coordinateSystem",rn="addCommas",an="encodeHTML",on="getComponent",sn="register",ln="dispatchAction",un="getHeight",cn="getWidth",hn="getDom",dn="findComponents",fn="isString",pn="series",vn="timeline",mn="mergeOption",gn="resetOption",yn="mergeDefaultAndTheme",xn="positionGroup",_n="margin",wn="getLayoutRect",bn="normalizeCssArray",Mn="vertical",Sn="horizontal",An="childAt",Cn="position",Tn="eachChild",kn="registerSubTypeDefaulter",Ln="isObject",Dn="formatter",Pn="getDataParams",In="getItemModel",zn="getName",Vn="getRawIndex",Rn="getRawValue",On="ordinal",En="getData",Nn="seriesIndex",Bn="createDataFormatModel",Gn="normal",Zn="emphasis",Fn="defaultEmphasis",Hn="normalizeToArray",Wn="axisIndex",qn="radius",Un="option",jn="../util/clazz",Xn="borderWidth",Yn="borderColor",$n="baseline",Kn="getFont",Jn="getBoundingRect",Qn="textStyle",tr="getModel",er="ecModel",ir="defaults",nr="inside",rr="../core/BoundingRect",ar="../core/util",or="zrender/contain/text",sr="translate",lr="create",ur="height",cr="applyTransform",hr="zrender/core/BoundingRect",dr="zrender/core/matrix",fr="distance",pr="undefined",vr="zrender/core/vector",mr="shadowColor",gr="shadowOffsetX",yr="shadowBlur",xr="opacity",_r="stroke",wr="lineWidth",br="getShallow",Mr="getClass",Sr="enableClassManagement",Ar="inherits",Cr="extend",Tr="enableClassExtend",kr="toUpperCase",Lr="toLowerCase",Dr="getPixelPrecision",Pr="toFixed",Ir="bottom",zr="middle",Vr="center",Rr="parsePercent",Or="isArray",Er="linearMap",Nr="replace",Br="function",Gr="concat",Zr="number",Fr="string",Hr="indexOf",Wr="getContext",qr="canvas",Ur="createElement",jr="length",Xr="object",Yr="reduce",$r="filter",Kr="zrender/core/util",Jr="prototype",Qr="require";e("zrender/graphic/Gradient",[Qr],function(t){var e=function(t){this.colorStops=t||[]};return e[Jr]={constructor:e,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}},e}),e(Kr,[Qr,"../graphic/Gradient"],function(t){function e(t){if(typeof t==Xr&&null!==t){var i=t;if(t instanceof Array){i=[];for(var n=0,r=t[jr];r>n;n++)i[n]=e(t[n])}else if(!M(t)&&!S(t)){i={};for(var a in t)t.hasOwnProperty(a)&&(i[a]=e(t[a]))}return i}return t}function i(t,n,r){if(!b(n)||!b(t))return r?e(n):t;for(var a in n)if(n.hasOwnProperty(a)){var o=t[a],s=n[a];!b(s)||!b(o)||x(s)||x(o)||S(s)||S(o)||M(s)||M(o)?!r&&a in t||(t[a]=e(n[a],!0)):i(o,s,r)}return t}function n(t,e){for(var n=t[0],r=1,a=t[jr];a>r;r++)n=i(n,t[r],e);return n}function r(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function a(t,e,i){for(var n in e)e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);return t}function o(){return document[Ur](qr)}function s(){return k||(k=N.createCanvas()[Wr]("2d")),k}function l(t,e){if(t){if(t[Hr])return t[Hr](e);for(var i=0,n=t[jr];n>i;i++)if(t[i]===e)return i}return-1}function u(t,e){function i(){}var n=t[Jr];i[Jr]=e[Jr],t[Jr]=new i;for(var r in n)t[Jr][r]=n[r];t[Jr].constructor=t,t.superClass=e}function c(t,e,i){t=Jr in t?t[Jr]:t,e=Jr in e?e[Jr]:e,a(t,e,i)}function h(t){return t?typeof t==Fr?!1:typeof t[jr]==Zr:void 0}function d(t,e,i){if(t&&e)if(t.forEach&&t.forEach===z)t.forEach(e,i);else if(t[jr]===+t[jr])for(var n=0,r=t[jr];r>n;n++)e.call(i,t[n],n,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(i,t[a],a,t)}function f(t,e,i){if(t&&e){if(t.map&&t.map===O)return t.map(e,i);for(var n=[],r=0,a=t[jr];a>r;r++)n.push(e.call(i,t[r],r,t));return n}}function p(t,e,i,n){if(t&&e){if(t[Yr]&&t[Yr]===E)return t[Yr](e,i,n);for(var r=0,a=t[jr];a>r;r++)i=e.call(n,i,t[r],r,t);return i}}function v(t,e,i){if(t&&e){if(t[$r]&&t[$r]===V)return t[$r](e,i);for(var n=[],r=0,a=t[jr];a>r;r++)e.call(i,t[r],r,t)&&n.push(t[r]);return n}}function m(t,e,i){if(t&&e)for(var n=0,r=t[jr];r>n;n++)if(e.call(i,t[n],n,t))return t[n]}function g(t,e){var i=R.call(arguments,2);return function(){return t.apply(e,i[Gr](R.call(arguments)))}}function y(t){var e=R.call(arguments,1);return function(){return t.apply(this,e[Gr](R.call(arguments)))}}function x(t){return"[object Array]"===P.call(t)}function _(t){return typeof t===Br}function w(t){return"[object String]"===P.call(t)}function b(t){var e=typeof t;return e===Br||!!t&&e==Xr}function M(t){return!!D[P.call(t)]||t instanceof L}function S(t){return t&&1===t.nodeType&&typeof t.nodeName==Fr}function A(t){for(var e=0,i=arguments[jr];i>e;e++)if(null!=arguments[e])return arguments[e]}function C(){return Function.call.apply(R,arguments)}function T(t,e){if(!t)throw new Error(e)}var k,L=t("../graphic/Gradient"),D={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1},P=Object[Jr].toString,I=Array[Jr],z=I.forEach,V=I[$r],R=I.slice,O=I.map,E=I[Yr],N={inherits:u,mixin:c,clone:e,merge:i,mergeAll:n,extend:r,defaults:a,getContext:s,createCanvas:o,indexOf:l,slice:C,find:m,isArrayLike:h,each:d,map:f,reduce:p,filter:v,bind:g,curry:y,isArray:x,isString:w,isObject:b,isFunction:_,isBuildInObject:M,isDom:S,retrieve:A,assert:T,noop:function(){}};return N}),e("echarts/util/number",[Qr,Kr],function(t){function e(t){return t[Nr](/^\s+/,"")[Nr](/\s+$/,"")}var i=t(Kr),n={},r=1e-4;return n[Er]=function(t,e,r,a){if(i[Or](t))return i.map(t,function(t){return n[Er](t,e,r,a)});var o=e[1]-e[0];if(0===o)return(r[0]+r[1])/2;var s=(t-e[0])/o;return a&&(s=Math.min(Math.max(s,0),1)),s*(r[1]-r[0])+r[0]},n[Rr]=function(t,i){switch(t){case Vr:case zr:t="50%";break;case"left":case"top":t="0%";break;case"right":case Ir:t="100%"}return typeof t===Fr?e(t).match(/%$/)?parseFloat(t)/100*i:parseFloat(t):null==t?NaN:+t},n.round=function(t){return+(+t)[Pr](12)},n.asc=function(t){return t.sort(function(t,e){return t-e}),t},n.getPrecision=function(t){for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i},n[Dr]=function(t,e){var i=Math.log,n=Math.LN10,r=Math.floor(i(t[1]-t[0])/n),a=Math.round(i(Math.abs(e[1]-e[0]))/n);return Math.max(-r+a,0)},n.MAX_SAFE_INTEGER=9007199254740991,n.remRadian=function(t){var e=2*Math.PI;return(t%e+e)%e},n.isRadianAroundZero=function(t){return t>-r&&r>t},n.parseDate=function(t){return t instanceof Date?t:new Date(typeof t===Fr?t[Nr](/-/g,"/"):Math.round(t))},n}),e("echarts/util/format",[Qr,Kr,"./number"],function(t){function e(t){return isNaN(t)?"-":(t=(t+"").split("."),t[0][Nr](/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t[jr]>1?"."+t[1]:""))}function i(t){return t[Lr]()[Nr](/-(.)/g,function(t,e){return e[kr]()})}function n(t){var e=t[jr];return typeof t===Zr?[t,t,t,t]:2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t}function r(t){return String(t)[Nr](/&/g,"&amp;")[Nr](/</g,"&lt;")[Nr](/>/g,"&gt;")[Nr](/"/g,"&quot;")[Nr](/'/g,"&#39;")}function a(t,e){return"{"+t+(null==e?"":e)+"}"}function o(t,e){u[Or](e)||(e=[e]);var i=e[jr];if(!i)return"";for(var n=e[0].$vars,r=0;r<n[jr];r++){var o=h[r];t=t[Nr](a(o),a(o,0))}for(var s=0;i>s;s++)for(var l=0;l<n[jr];l++)t=t[Nr](a(h[l],s),e[s][n[l]]);return t}function s(t,e){("week"===t||"month"===t||"quarter"===t||"half-year"===t||"year"===t)&&(t="MM-dd\nyyyy");var i=c.parseDate(e),n=i.getFullYear(),r=i.getMonth()+1,a=i.getDate(),o=i.getHours(),s=i.getMinutes(),u=i.getSeconds();return t=t[Nr]("MM",l(r))[Lr]()[Nr]("yyyy",n)[Nr]("yy",n%100)[Nr]("dd",l(a))[Nr]("d",a)[Nr]("hh",l(o))[Nr]("h",o)[Nr]("mm",l(s))[Nr]("m",s)[Nr]("ss",l(u))[Nr]("s",u)}function l(t){return 10>t?"0"+t:t}var u=t(Kr),c=t("./number"),h=["a","b","c","d","e","f","g"];return{normalizeCssArray:n,addCommas:e,toCamelCase:i,encodeHTML:r,formatTpl:o,formatTime:s}}),e("echarts/util/clazz",[Qr,Kr],function(t){function e(t,e){for(var i,n=t.constructor,r=t[e];(n=n.$superClass)&&(i=n[Jr][e])&&i===r;);return i}var i=t(Kr),n={},r=".",a="___EC__COMPONENT__CONTAINER___",o=n.parseClassType=function(t){var e={main:"",sub:""};return t&&(t=t.split(r),e.main=t[0]||"",e.sub=t[1]||""),e};return n[Tr]=function(t,n){t[Cr]=function(r){var a=function(){n&&n.apply(this,arguments),t.apply(this,arguments)};return i[Cr](a[Jr],i[Cr]({$superCall:function(t){var n=i.slice(arguments,1);return e(this,t).apply(this,n)},$superApply:function(t,i){return e(this,t).apply(this,i)}},r)),a[Cr]=this[Cr],i[Ar](a,this),a.$superClass=this,a}},n[Sr]=function(t,e){function n(t){var e=r[t.main];return e&&e[a]||(e=r[t.main]={},e[a]=!0),e}e=e||{};var r={};if(t.registerClass=function(t,e){if(e)if(e=o(e),e.sub){if(e.sub!==a){var i=n(e);i[e.sub]=t}}else{if(r[e.main])throw new Error(e.main+"exists");r[e.main]=t}return t},t[Mr]=function(t,e,i){var n=r[t];if(n&&n[a]&&(n=e?n[e]:null),i&&!n)throw new Error("Component "+t+"."+(e||"")+" not exists");return n},t.getClassesByMainType=function(t){t=o(t);var e=[],n=r[t.main];return n&&n[a]?i.each(n,function(t,i){i!==a&&e.push(t)}):e.push(n),e},t.hasClass=function(t){return t=o(t),!!r[t.main]},t.getAllClassMainTypes=function(){var t=[];return i.each(r,function(e,i){t.push(i)}),t},t.hasSubTypes=function(t){t=o(t);var e=r[t.main];return e&&e[a]},t.parseClassType=o,e.registerWhenExtend){var s=t[Cr];s&&(t[Cr]=function(e){var i=s.call(this,e);return t.registerClass(i,e.type)})}return t},n.setReadOnly=function(t,e){},n}),e("echarts/model/mixin/makeStyleMapper",[Qr,Kr],function(t){var e=t(Kr);return function(t){for(var i=0;i<t[jr];i++)t[i][1]||(t[i][1]=t[i][0]);return function(i){for(var n={},r=0;r<t[jr];r++){var a=t[r][1];if(!(i&&e[Hr](i,a)>=0)){var o=this[br](a);null!=o&&(n[t[r][0]]=o)}}return n}}}),e("echarts/model/mixin/lineStyle",[Qr,"./makeStyleMapper"],function(t){var e=t("./makeStyleMapper")([[wr,"width"],[_r,"color"],[xr],[yr],[gr],["shadowOffsetY"],[mr]]);return{getLineStyle:function(t){var i=e.call(this,t),n=this.getLineDash();return n&&(i.lineDash=n),i},getLineDash:function(){var t=this.get("type");return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}}}),e("echarts/model/mixin/areaStyle",[Qr,"./makeStyleMapper"],function(t){return{getAreaStyle:t("./makeStyleMapper")([["fill","color"],[yr],[gr],["shadowOffsetY"],[xr],[mr]])}}),e(vr,[],function(){var t=typeof Float32Array===pr?Array:Float32Array,e={create:function(e,i){var n=new t(2);return n[0]=e||0,n[1]=i||0,n},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},clone:function(e){var i=new t(2);return i[0]=e[0],i[1]=e[1],i},set:function(t,e,i){return t[0]=e,t[1]=i,t},add:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t},scaleAndAdd:function(t,e,i,n){return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t},sub:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t},len:function(t){return Math.sqrt(this.lenSquare(t))},lenSquare:function(t){return t[0]*t[0]+t[1]*t[1]},mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t},normalize:function(t,i){var n=e.len(i);return 0===n?(t[0]=0,t[1]=0):(t[0]=i[0]/n,t[1]=i[1]/n),t},distance:function(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))},distanceSquare:function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])},negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:function(t,e,i,n){return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t},applyTransform:function(t,e,i){var n=e[0],r=e[1];return t[0]=i[0]*n+i[2]*r+i[4],t[1]=i[1]*n+i[3]*r+i[5],t},min:function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t},max:function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t}};return e[jr]=e.len,e.lengthSquare=e.lenSquare,e.dist=e[fr],e.distSquare=e.distanceSquare,e}),e(dr,[],function(){var t=typeof Float32Array===pr?Array:Float32Array,e={create:function(){var i=new t(6);return e.identity(i),i},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},mul:function(t,e,i){var n=e[0]*i[0]+e[2]*i[1],r=e[1]*i[0]+e[3]*i[1],a=e[0]*i[2]+e[2]*i[3],o=e[1]*i[2]+e[3]*i[3],s=e[0]*i[4]+e[2]*i[5]+e[4],l=e[1]*i[4]+e[3]*i[5]+e[5];return t[0]=n,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t},translate:function(t,e,i){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+i[0],t[5]=e[5]+i[1],t},rotate:function(t,e,i){var n=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(i),c=Math.cos(i);return t[0]=n*c+o*u,t[1]=-n*u+o*c,t[2]=r*c+s*u,t[3]=-r*u+c*s,t[4]=c*a+u*l,t[5]=c*l-u*a,t},scale:function(t,e,i){var n=i[0],r=i[1];return t[0]=e[0]*n,t[1]=e[1]*r,t[2]=e[2]*n,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*r,t},invert:function(t,e){var i=e[0],n=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=i*o-a*n;return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-n*l,t[3]=i*l,t[4]=(n*s-o*r)*l,t[5]=(a*r-i*s)*l,t):null}};return e}),e(hr,[Qr,"./vector","./matrix"],function(t){function e(t,e,i,n){this.x=t,this.y=e,this.width=i,this[ur]=n}var i=t("./vector"),n=t("./matrix"),r=i[cr],a=Math.min,o=Math.abs,s=Math.max;return e[Jr]={constructor:e,union:function(t){var e=a(t.x,this.x),i=a(t.y,this.y);this.width=s(t.x+t.width,this.x+this.width)-e,this[ur]=s(t.y+t[ur],this.y+this[ur])-i,this.x=e,this.y=i},applyTransform:function(){var t=[],e=[];return function(i){i&&(t[0]=this.x,t[1]=this.y,e[0]=this.x+this.width,e[1]=this.y+this[ur],r(t,t,i),r(e,e,i),this.x=a(t[0],e[0]),this.y=a(t[1],e[1]),this.width=o(e[0]-t[0]),this[ur]=o(e[1]-t[1]))}}(),calculateTransform:function(t){var e=this,i=t.width/e.width,r=t[ur]/e[ur],a=n[lr]();return n[sr](a,a,[-e.x,-e.y]),n.scale(a,a,[i,r]),n[sr](a,a,[t.x,t.y]),a},intersect:function(t){var e=this,i=e.x,n=e.x+e.width,r=e.y,a=e.y+e[ur],o=t.x,s=t.x+t.width,l=t.y,u=t.y+t[ur];return!(o>n||i>s||l>a||r>u)},contain:function(t,e){var i=this;return t>=i.x&&t<=i.x+i.width&&e>=i.y&&e<=i.y+i[ur]},clone:function(){return new e(this.x,this.y,this.width,this[ur])},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this[ur]=t[ur]}},e}),e(or,[Qr,ar,rr],function(t){function e(t,e){var i=t+":"+e;if(s[i])return s[i];for(var n=(t+"").split("\n"),r=0,a=0,o=n[jr];o>a;a++)r=Math.max(d.measureText(n[a],e).width,r);return l>u&&(l=0,s={}),l++,s[i]=r,r}function i(t,i,n,r){var a=((t||"")+"").split("\n")[jr],o=e(t,i),s=e("国",i),l=a*s,u=new h(0,0,o,l);switch(u.lineHeight=s,r){case Ir:case"alphabetic":u.y-=s;break;case zr:u.y-=s/2}switch(n){case"end":case"right":u.x-=u.width;break;case Vr:u.x-=u.width/2}return u}function n(t,e,i,n){var r=e.x,a=e.y,o=e[ur],s=e.width,l=i[ur],u=o/2-l/2,c="left";switch(t){case"left":r-=n,a+=u,c="right";break;case"right":r+=n+s,a+=u,c="left";break;case"top":r+=s/2,a-=n+l,c=Vr;break;case Ir:r+=s/2,a+=o+n,c=Vr;break;case nr:r+=s/2,a+=u,c=Vr;break;case"insideLeft":r+=n,a+=u,c="left";break;case"insideRight":r+=s-n,a+=u,c="right";break;case"insideTop":r+=s/2,a+=n,c=Vr;break;case"insideBottom":r+=s/2,a+=o-l-n,c=Vr;break;case"insideTopLeft":r+=n,a+=n,c="left";break;case"insideTopRight":r+=s-n,a+=n,c="right";break;case"insideBottomLeft":r+=n,a+=o-l-n;break;case"insideBottomRight":r+=s-n,a+=o-l-n,c="right"}return{x:r,y:a,textAlign:c,textBaseline:"top"}}function r(t,i,n,r){if(!n)return"";r=c[ir]({ellipsis:"...",minCharacters:3,maxIterations:3,cnCharWidth:e("国",i),ascCharWidth:e("a",i)},r,!0),n-=e(r.ellipsis);for(var o=(t+"").split("\n"),s=0,l=o[jr];l>s;s++)o[s]=a(o[s],i,n,r);return o.join("\n")}function a(t,i,n,r){for(var a=0;;a++){var s=e(t,i);if(n>s||a>=r.maxIterations){t+=r.ellipsis;break}var l=0===a?o(t,n,r):Math.floor(t[jr]*n/s);if(l<r.minCharacters){t="";break}t=t.substr(0,l)}return t}function o(t,e,i){for(var n=0,r=0,a=t[jr];a>r&&e>n;r++){var o=t.charCodeAt(r);n+=o>=0&&127>=o?i.ascCharWidth:i.cnCharWidth}return r}var s={},l=0,u=5e3,c=t(ar),h=t(rr),d={getWidth:e,getBoundingRect:i,adjustTextPositionOnRect:n,ellipsis:r,measureText:function(t,e){var i=c[Wr]();return i.font=e,i.measureText(t)}};return d}),e("echarts/model/mixin/textStyle",[Qr,or],function(t){function e(t,e){return t&&t[br](e)}var i=t(or);return{getTextColor:function(){var t=this[er];return this[br]("color")||t&&t.get("textStyle.color")},getFont:function(){var t=this[er],i=t&&t[tr](Qn);return[this[br]("fontStyle")||e(i,"fontStyle"),this[br]("fontWeight")||e(i,"fontWeight"),(this[br]("fontSize")||e(i,"fontSize")||12)+"px",this[br]("fontFamily")||e(i,"fontFamily")||"sans-serif"].join(" ")},getTextRect:function(t){var e=this.get(Qn)||{};return i[Jn](t,this[Kn](),e.align,e[$n])},ellipsis:function(t,e,n){return i.ellipsis(t,this[Kn](),e,n)}}}),e("echarts/model/mixin/itemStyle",[Qr,"./makeStyleMapper"],function(t){return{getItemStyle:t("./makeStyleMapper")([["fill","color"],[_r,Yn],[wr,Xn],[xr],[yr],[gr],["shadowOffsetY"],[mr]])}}),e("echarts/model/Model",[Qr,Kr,jn,"./mixin/lineStyle","./mixin/areaStyle","./mixin/textStyle","./mixin/itemStyle"],function(t){function e(t,e,i,n){this.parentModel=e,this[er]=i,this[Un]=t,this.init&&(arguments[jr]<=4?this.init(t,e,i,n):this.init.apply(this,arguments))}var i=t(Kr),n=t(jn);e[Jr]={constructor:e,init:null,mergeOption:function(t){i.merge(this[Un],t,!0)},get:function(t,e){if(!t)return this[Un];typeof t===Fr&&(t=t.split("."));for(var i=this[Un],n=this.parentModel,r=0;r<t[jr]&&(i=i&&typeof i===Xr?i[t[r]]:null,null!=i);r++);return null==i&&n&&!e&&(i=n.get(t)),i},getShallow:function(t,e){var i=this[Un],n=i&&i[t],r=this.parentModel;return null==n&&r&&!e&&(n=r[br](t)),n},getModel:function(t,i){var n=this.get(t,!0),r=this.parentModel,a=new e(n,i||r&&r[tr](t),this[er]);return a},isEmpty:function(){return null==this[Un]},restoreData:function(){},clone:function(){var t=this.constructor;return new t(i.clone(this[Un]))},setReadOnly:function(t){n.setReadOnly(this,t)}},n[Tr](e);var r=i.mixin;return r(e,t("./mixin/lineStyle")),r(e,t("./mixin/areaStyle")),r(e,t("./mixin/textStyle")),r(e,t("./mixin/itemStyle")),e}),e("echarts/util/model",[Qr,"./format","./number",Kr,"../model/Model"],function(t){function e(t){return t&&t.id&&0===(t.id+"")[Hr]("\x00_ec_\x00")}var i=t("./format"),n=t("./number"),r=t(Kr),a=t("../model/Model"),o=["x","y","z",qn,"angle"],s={};return s.createNameEach=function(t,e){t=t.slice();var i=r.map(t,s.capitalFirst);e=(e||[]).slice();var n=r.map(e,s.capitalFirst);return function(a,o){r.each(t,function(t,r){for(var s={name:t,capital:i[r]},l=0;l<e[jr];l++)s[e[l]]=t+n[l];a.call(o,s)})}},s.capitalFirst=function(t){return t?t.charAt(0)[kr]()+t.substr(1):t},s.eachAxisDim=s.createNameEach(o,[Wn,"axis","index"]),s[Hn]=function(t){return r[Or](t)?t:null==t?[]:[t]},s.createLinkedNodesFinder=function(t,e,i){function n(t,e){return r[Hr](e.nodes,t)>=0}function a(t,n){var a=!1;return e(function(e){r.each(i(t,e)||[],function(t){n.records[e.name][t]&&(a=!0)})}),a}function o(t,n){n.nodes.push(t),e(function(e){r.each(i(t,e)||[],function(t){n.records[e.name][t]=!0})})}return function(i){function r(t){!n(t,s)&&a(t,s)&&(o(t,s),l=!0)}var s={nodes:[],records:{}};if(e(function(t){s.records[t.name]={}}),!i)return s;o(i,s);var l;do l=!1,t(r);while(l);return s}},s[Fn]=function(t,e){if(t){var i=t[Zn]=t[Zn]||{},n=t[Gn]=t[Gn]||{};r.each(e,function(t){var e=r.retrieve(i[t],n[t]);null!=e&&(i[t]=e)})}},s[Bn]=function(t,e,i){var n=new a;return r.mixin(n,s.dataFormatMixin),n[Nn]=t[Nn],n.name=t.name||"",n[En]=function(){return e},n.getRawDataArray=function(){return i},n},s.getDataItemValue=function(t){return t&&(null==t.value?t:t.value)},s.converDataValue=function(t,e){var i=e&&e.type;return i===On?t:("time"!==i||isFinite(t)||null==t||"-"===t||(t=+n.parseDate(t)),null==t||""===t?NaN:+t)},s.dataFormatMixin={getDataParams:function(t){var e=this[En](),i=this[Nn],n=this.name,r=this[Rn](t),a=e[Vn](t),o=e[zn](t,!0),s=this.getRawDataArray(),l=s&&s[a];return{seriesIndex:i,seriesName:n,name:o,dataIndex:a,data:l,value:r,$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n){e=e||Gn;var r=this[En](),a=r[In](t),o=this[Pn](t);return n||(n=a.get(["label",e,Dn])),typeof n===Br?(o.status=e,n(o)):typeof n===Fr?i.formatTpl(n,o):void 0},getRawValue:function(t){var e=this[En]()[In](t);if(e&&null!=e[Un]){var i=e[Un];return r[Ln](i)&&!r[Or](i)?i.value:i}}},s.mappingToExists=function(t,i){i=(i||[]).slice();var n=r.map(t||[],function(t,e){return{exist:t}});return r.each(i,function(t,a){if(r[Ln](t))for(var o=0;o<n[jr];o++){var s=n[o].exist;if(!n[o][Un]&&(null!=t.id&&s.id===t.id+""||null!=t.name&&!e(t)&&!e(s)&&s.name===t.name+"")){n[o][Un]=t,i[a]=null;break}}}),r.each(i,function(t,i){if(r[Ln](t)){for(var a=0;a<n[jr];a++){var o=n[a].exist;if(!n[a][Un]&&!e(o)&&null==t.id){n[a][Un]=t;break}}a>=n[jr]&&n.push({option:t})}}),n},s}),e("echarts/util/component",[Qr,Kr,"./clazz"],function(t){var e=t(Kr),i=t("./clazz"),n=i.parseClassType,r=0,a={},o="_";return a.getUID=function(t){return[t||"",r++,Math.random()].join(o)},a.enableSubTypeDefaulter=function(t){var e={};return t[kn]=function(t,i){t=n(t),e[t.main]=i},t.determineSubType=function(i,r){var a=r.type;if(!a){var o=n(i).main;t.hasSubTypes(i)&&e[o]&&(a=e[o](r))}return a},t},a.enableTopologicalTravel=function(t,i){function n(t){var n={},o=[];return e.each(t,function(s){var l=r(n,s),u=l.originalDeps=i(s),c=a(u,t);l.entryCount=c[jr],0===l.entryCount&&o.push(s),e.each(c,function(t){e[Hr](l.predecessor,t)<0&&l.predecessor.push(t);var i=r(n,t);e[Hr](i.successor,t)<0&&i.successor.push(s)})}),{graph:n,noEntryList:o}}function r(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}function a(t,i){var n=[];return e.each(t,function(t){e[Hr](i,t)>=0&&n.push(t)}),n}t.topologicalTravel=function(t,i,r,a){function o(t){u[t].entryCount--,0===u[t].entryCount&&c.push(t)}function s(t){h[t]=!0,o(t)}if(t[jr]){var l=n(i),u=l.graph,c=l.noEntryList,h={};for(e.each(t,function(t){h[t]=!0});c[jr];){var d=c.pop(),f=u[d],p=!!h[d];p&&(r.call(a,d,f.originalDeps.slice()),delete h[d]),e.each(f.successor,p?s:o)}e.each(h,function(){throw new Error("Circle dependency may exists")})}}},a}),e("echarts/util/layout",[Qr,Kr,hr,"./number","./format"],function(t){function e(t,e,i,n,r){var a=0,o=0;null==n&&(n=1/0),null==r&&(r=1/0);var s=0;e[Tn](function(l,u){var c,h,d=l[Cn],f=l[Jn](),p=e[An](u+1),v=p&&p[Jn]();if(t===Sn){var m=f.width+(v?-v.x+f.x:0);c=a+m,c>n||l.newline?(a=0,c=m,o+=s+i,s=f[ur]):s=Math.max(s,f[ur])}else{var g=f[ur]+(v?-v.y+f.y:0);h=o+g,h>r||l.newline?(a+=s+i,o=0,h=g,s=f.width):s=Math.max(s,f.width)}l.newline||(d[0]=a,d[1]=o,t===Sn?a=c+i:o=h+i)})}var i=t(Kr),n=t(hr),r=t("./number"),a=t("./format"),o=r[Rr],s=i.each,l={};return l.box=e,l.vbox=i.curry(e,Mn),l.hbox=i.curry(e,Sn),l.getAvailableSize=function(t,e,i){var n=e.width,r=e[ur],s=o(t.x,n),l=o(t.y,r),u=o(t.x2,n),c=o(t.y2,r);return(isNaN(s)||isNaN(parseFloat(t.x)))&&(s=0),(isNaN(u)||isNaN(parseFloat(t.x2)))&&(u=n),(isNaN(l)||isNaN(parseFloat(t.y)))&&(l=0),(isNaN(c)||isNaN(parseFloat(t.y2)))&&(c=r),i=a[bn](i||0),{width:Math.max(u-s-i[1]-i[3],0),height:Math.max(c-l-i[0]-i[2],0)}},l[wn]=function(t,e,i){i=a[bn](i||0);var r=e.width,s=e[ur],l=o(t.left,r),u=o(t.top,s),c=o(t.right,r),h=o(t[Ir],s),d=o(t.width,r),f=o(t[ur],s),p=i[2]+i[0],v=i[1]+i[3],m=t.aspect;switch(isNaN(d)&&(d=r-c-v-l),isNaN(f)&&(f=s-h-p-u),isNaN(d)&&isNaN(f)&&(m>r/s?d=.8*r:f=.8*s),null!=m&&(isNaN(d)&&(d=m*f),isNaN(f)&&(f=d/m)),isNaN(l)&&(l=r-c-d-v),isNaN(u)&&(u=s-h-f-p),t.left||t.right){case Vr:l=r/2-d/2-i[3];break;case"right":l=r-d-v}switch(t.top||t[Ir]){case zr:case Vr:u=s/2-f/2-i[0];break;case Ir:u=s-f-p}l=l||0,u=u||0,isNaN(d)&&(d=r-l-(c||0)),isNaN(f)&&(f=s-u-(h||0));var g=new n(l+i[3],u+i[0],d,f);return g[_n]=i,g},l[xn]=function(t,e,n,r){var a=t[Jn]();e=i[Cr](i.clone(e),{width:a.width,height:a[ur]}),e=l[wn](e,n,r),t[Cn]=[e.x-a.x,e.y-a.y]},l.mergeLayoutParam=function(t,e,n){function r(i){var r={},l=0,u={},c=0,h=n.ignoreSize?1:2;if(s(i,function(e){u[e]=t[e]}),s(i,function(t){a(e,t)&&(r[t]=u[t]=e[t]),o(r,t)&&l++,o(u,t)&&c++}),c!==h&&l){if(h>c){var d=0;return s(i,function(t){"auto"===u[t]&&(h-c>d?d++:u[t]=null)}),u}if(l>=h)return r;for(var f=0;f<i[jr];f++){var p=i[f];if(!a(r,p)&&a(t,p)){r[p]=t[p];break}}return r}return u}function a(t,e){return t.hasOwnProperty(e)}function o(t,e){return null!=t[e]&&"auto"!==t[e]}function l(t,e,i){s(t,function(t){e[t]=i[t]})}!i[Ln](n)&&(n={});var u=["width","left","right"],c=[ur,"top",Ir],h=r(u),d=r(c);l(u,t,h),l(c,t,d)},l.getLayoutParams=function(t){var e={};return t&&s(["left","right","top",Ir,"width",ur],function(i){t.hasOwnProperty(i)&&(e[i]=t[i])}),e},l}),e("echarts/model/mixin/boxLayout",[Qr],function(t){return{getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get(Ir),width:this.get("width"),height:this.get(ur)}}}}),e("echarts/model/Component",[Qr,"./Model",Kr,"../util/component",jn,"../util/layout","./mixin/boxLayout"],function(t){function e(t){var e=[];return n.each(l.getClassesByMainType(t),function(t){r.apply(e,t[Jr].dependencies||[])}),n.map(e,function(t){return o.parseClassType(t).main})}var i=t("./Model"),n=t(Kr),r=Array[Jr].push,a=t("../util/component"),o=t(jn),s=t("../util/layout"),l=i[Cr]({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,init:function(t,e,i,n){this[yn](this[Un],this[er])},mergeDefaultAndTheme:function(t,e){var i=this.layoutMode,r=i?s.getLayoutParams(t):{},a=e.getTheme();n.merge(t,a.get(this.mainType)),n.merge(t,this.getDefaultOption()),i&&s.mergeLayoutParam(t,r,i)},mergeOption:function(t){n.merge(this[Un],t,!0);var e=this.layoutMode;e&&s.mergeLayoutParam(this[Un],t,e)},getDefaultOption:function(){if(!this.hasOwnProperty("__defaultOption")){for(var t=[],e=this.constructor;e;){var i=e[Jr].defaultOption;i&&t.push(i),e=e.superClass}for(var r={},a=t[jr]-1;a>=0;a--)r=n.merge(r,t[a],!0);this.__defaultOption=r}return this.__defaultOption}});return o[Tr](l,function(t,e,i,r){n[Cr](this,r),this.uid=a.getUID("componentModel"),this.setReadOnly(["type","id","uid","name","mainType","subType","dependentModels","componentIndex"])}),o[Sr](l,{registerWhenExtend:!0}),a.enableSubTypeDefaulter(l),a.enableTopologicalTravel(l,e),n.mixin(l,t("./mixin/boxLayout")),l}),e("echarts/model/globalDefault",[],function(){var t="";return typeof navigator!==pr&&(t=navigator.platform||""),{color:["#c23531","#314656","#61a0a8","#dd8668","#91c7ae","#6e7074","#ca8622","#bda29a","#44525d","#c4ccd3"],grid:{},textStyle:{fontFamily:t.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},animation:!0,animationThreshold:2e3,animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut"}}),e("echarts/model/Global",[Qr,Kr,"../util/model","./Model","./Component","./globalDefault"],function(t){function e(t,e){for(var i in e)y.hasClass(i)||(typeof e[i]===Xr?t[i]=t[i]?u.merge(t[i],e[i],!1):u.clone(e[i]):t[i]=e[i])}function i(t){t=t,this[Un]={},this._componentsMap={},this._seriesIndices=null,e(t,this._theme[Un]),u.merge(t,x,!1),this[mn](t)}function n(t,e){u[Or](e)||(e=e?[e]:[]);var i={};return d(e,function(e){i[e]=(t[e]||[]).slice()}),i}function r(t,e){var i={};d(e,function(e,n){var r=e.exist,o=e[Un];if(u.assert(!o||null==o.id||!i[o.id],"id duplicates: "+(o&&o.id)),r&&(i[r.id]=e),o&&(i[o.id]=e),g(o)){var s=a(t,o,r);e.keyInfo={mainType:t,subType:s}}}),d(e,function(t,e){var n=t.exist,r=t[Un],a=t.keyInfo;if(g(r)){if(a.name=null!=r.name?r.name+"":n?n.name:"\x00-",n)a.id=n.id;else if(null!=r.id)a.id=r.id+"";else{
var o=0;do a.id="\x00"+a.name+"\x00"+o++;while(i[a.id])}i[a.id]=t}})}function a(t,e,i){var n=e.type?e.type:i?i.subType:y.determineSubType(t,e);return n}function o(t){return p(t,function(t){return t.componentIndex})||[]}function s(t,e){return e.hasOwnProperty("subType")?f(t,function(t){return t.subType===e.subType}):t}function l(t){if(!t._seriesIndices)throw new Error("Series is not initialized. Please depends sereis.")}var u=t(Kr),c=t("../util/model"),h=t("./Model"),d=u.each,f=u[$r],p=u.map,v=u[Or],m=u[Hr],g=u[Ln],y=t("./Component"),x=t("./globalDefault"),_=h[Cr]({constructor:_,init:function(t,e,i,n){i=i||{},this[Un]=null,this._theme=new h(i),this._optionManager=n},setOption:function(t,e){this._optionManager.setOption(t,e),this[gn]()},resetOption:function(t){var e=!1,n=this._optionManager;if(!t||"recreate"===t){var r=n.mountOption("recreate"===t);this[Un]&&"recreate"!==t?(this.restoreData(),this[mn](r)):i.call(this,r),e=!0}if((t===vn||"media"===t)&&this.restoreData(),!t||"recreate"===t||t===vn){var a=n.getTimelineOption(this);a&&(this[mn](a),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api);o[jr]&&d(o,function(t){this[mn](t,e=!0)},this)}return e},mergeOption:function(t){function e(e,s){var l=t[e];u[Or](l)||(l=l?[l]:[]);var h=c.mappingToExists(a[e],l);r(e,h);var f=n(a,s);i[e]=[],a[e]=[],d(h,function(t,n){var r=t.exist,o=t[Un];if(u.assert(g(o)||r,"Empty component definition"),o){var s=y[Mr](e,t.keyInfo.subType,!0);r&&r instanceof s?r[mn](o,this):r=new s(o,this,this,u[Cr]({dependentModels:f,componentIndex:n},t.keyInfo))}else r[mn]({},this);a[e][n]=r,i[e][n]=r[Un]},this),e===pn&&(this._seriesIndices=o(a[pn]))}var i=this[Un],a=this._componentsMap,s=[];d(t,function(t,e){null!=t&&(y.hasClass(e)?s.push(e):i[e]=null==i[e]?u.clone(t):u.merge(i[e],t,!0))}),y.topologicalTravel(s,y.getAllClassMainTypes(),e,this)},getTheme:function(){return this._theme},getComponent:function(t,e){var i=this._componentsMap[t];return i?i[e||0]:void 0},queryComponents:function(t){var e=t.mainType;if(!e)return[];var i=t.index,n=t.id,r=t.name,a=this._componentsMap[e];if(!a||!a[jr])return[];var o;if(null!=i)v(i)||(i=[i]),o=f(p(i,function(t){return a[t]}),function(t){return!!t});else if(null!=n){var l=v(n);o=f(a,function(t){return l&&m(n,t.id)>=0||!l&&t.id===n})}else if(null!=r){var u=v(r);o=f(a,function(t){return u&&m(r,t.name)>=0||!u&&t.name===r})}return s(o,t)},findComponents:function(t){function e(t){var e=r+"Index",i=r+"Id",n=r+"Name";return t&&(t.hasOwnProperty(e)||t.hasOwnProperty(i)||t.hasOwnProperty(n))?{mainType:r,index:t[e],id:t[i],name:t[n]}:null}function i(e){return t[$r]?f(e,t[$r]):e}var n=t.query,r=t.mainType,a=e(n),o=a?this.queryComponents(a):this._componentsMap[r];return i(s(o,t))},eachComponent:function(t,e,i){var n=this._componentsMap;if(typeof t===Br)i=e,e=t,d(n,function(t,n){d(t,function(t,r){e.call(i,n,t,r)})});else if(u[fn](t))d(n[t],e,i);else if(g(t)){var r=this[dn](t);d(r,e,i)}},getSeriesByName:function(t){var e=this._componentsMap[pn];return f(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap[pn][t]},getSeriesByType:function(t){var e=this._componentsMap[pn];return f(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap[pn].slice()},eachSeries:function(t,e){l(this),d(this._seriesIndices,function(i){var n=this._componentsMap[pn][i];t.call(e,n,i)},this)},eachRawSeries:function(t,e){d(this._componentsMap[pn],t,e)},eachSeriesByType:function(t,e,i){l(this),d(this._seriesIndices,function(n){var r=this._componentsMap[pn][n];r.subType===t&&e.call(i,r,n)},this)},eachRawSeriesByType:function(t,e,i){return d(this.getSeriesByType(t),e,i)},isSeriesFiltered:function(t){return l(this),u[Hr](this._seriesIndices,t.componentIndex)<0},filterSeries:function(t,e){l(this);var i=f(this._componentsMap[pn],t,e);this._seriesIndices=o(i)},restoreData:function(){var t=this._componentsMap;this._seriesIndices=o(t[pn]);var e=[];d(t,function(t,i){e.push(i)}),y.topologicalTravel(e,y.getAllClassMainTypes(),function(e,i){d(t[e],function(t){t.restoreData()})})}});return _}),e("echarts/ExtensionAPI",[Qr,Kr],function(t){function e(t){i.each(n,function(e){this[e]=i.bind(t[e],t)},this)}var i=t(Kr),n=[hn,"getZr",cn,un,ln,"on","off","getDataURL","getConnectedDataURL",tr,"getOption"];return e}),e("echarts/CoordinateSystem",[Qr],function(t){function e(){this._coordinateSystems={},this._coordinateSystemsList=[]}var i={};return e[Jr]={constructor:e,update:function(t,e){var n={};for(var r in i)n[r]=i[r][lr](t,e);this._coordinateSystems=n},get:function(t,e){var i=this._coordinateSystems[t];return i?i[e||0]:void 0}},e[sn]=function(t,e){i[t]=e},e.get=function(t){return i[t]},e}),e("echarts/model/OptionManager",[Qr,Kr,"../util/model","./Component"],function(t){function e(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newOptionBackup}function i(t,e){var i,n,r=[],a=[],o=t[vn];if(t.baseOption&&(n=t.baseOption),(o||t.options)&&(n=n||{},r=(t.options||[]).slice()),t.media){n=n||{};var l=t.media;c(l,function(t){t&&t[Un]&&(t.query?a.push(t):i||(i=t))})}return n||(n=t),n[vn]||(n[vn]=o),c([n][Gr](r)[Gr](s.map(a,function(t){return t[Un]})),function(t){c(e,function(e){e(t)})}),{baseOption:n,timelineOptions:r,mediaDefault:i,mediaList:a}}function n(t,e,i){var n={width:e,height:i,aspectratio:e/i},a=!0;return s.each(t,function(t,e){var i=e.match(p);if(i&&i[1]&&i[2]){var o=i[1],s=i[2][Lr]();r(n[s],t,o)||(a=!1)}}),a}function r(t,e,i){return"min"===i?t>=e:"max"===i?e>=t:t===e}function a(t,e){return t.join(",")===e.join(",")}function o(t,e){e=e||{},c(e,function(e,i){if(null!=e){var n=t[i];if(u.hasClass(i)){s[Or](e)||(e=e?[e]:[]);var r=l.mappingToExists(n||[],e);t[i]=d(r,function(t){return t[Un]&&t.exist?f(t.exist,t[Un],!0):t.exist||t[Un]})}else t[i]=f(n,e,!0)}})}var s=t(Kr),l=t("../util/model"),u=t("./Component"),c=s.each,h=s.clone,d=s.map,f=s.merge,p=/^(min|max)?(.+)$/;return e[Jr]={constructor:e,setOption:function(t,e){t=h(t,!0);var n=this._optionBackup,r=this._newOptionBackup=i.call(this,t,e);n?(o(n.baseOption,r.baseOption),r.timelineOptions[jr]&&(n.timelineOptions=r.timelineOptions),r.mediaList[jr]&&(n.mediaList=r.mediaList),r.mediaDefault&&(n.mediaDefault=r.mediaDefault)):this._optionBackup=r},mountOption:function(t){var e=t?this._optionBackup:this._newOptionBackup;return this._timelineOptions=d(e.timelineOptions,h),this._mediaList=d(e.mediaList,h),this._mediaDefault=h(e.mediaDefault),this._currentMediaIndices=[],h(e.baseOption)},getTimelineOption:function(t){var e,i=this._timelineOptions;if(i[jr]){var n=t[on](vn);n&&(e=h(i[n.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api[cn](),i=this._api[un](),r=this._mediaList,o=this._mediaDefault,s=[],l=[];if(!r[jr]&&!o)return l;for(var u=0,c=r[jr];c>u;u++)n(r[u].query,e,i)&&s.push(u);return!s[jr]&&o&&(s=[-1]),s[jr]&&!a(s,this._currentMediaIndices)&&(l=d(s,function(t){return h(-1===t?o[Un]:r[t][Un])})),this._currentMediaIndices=s,l}},e}),e("echarts/model/Series",[Qr,Kr,"../util/format","../util/model","./Component"],function(t){var e=t(Kr),i=t("../util/format"),n=t("../util/model"),r=t("./Component"),a=i[an],o=i[rn],s=r[Cr]({type:"series",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,init:function(t,e,i,n){this[Nn]=this.componentIndex,this[yn](t,i),this._dataBeforeProcessed=this.getInitialData(t,i),this._data=this._dataBeforeProcessed.cloneShallow()},mergeDefaultAndTheme:function(t,i){e.merge(t,i.getTheme().get(this.subType)),e.merge(t,this.getDefaultOption()),n[Fn](t.label,[Cn,"show",Qn,fr,Dn])},mergeOption:function(t,i){t=e.merge(this[Un],t,!0);var n=this.getInitialData(t,i);n&&(this._data=n,this._dataBeforeProcessed=n.cloneShallow())},getInitialData:function(){},getData:function(){return this._data},setData:function(t){this._data=t},getRawData:function(){return this._dataBeforeProcessed},getRawDataArray:function(){return this[Un].data},getDimensionsOnAxis:function(t){return[t]},getCoordDimensionInfo:function(t){var i=this[En]();return this[nn]?null!=t?i.getDimensionInfo(t):e.map(i[en],i.getDimensionInfo,i):[]},getBaseAxis:function(){var t=this[nn];return t&&t[tn]&&t[tn]()},formatTooltip:function(t,i){var n=this._data,r=this[Rn](t),s=e[Or](r)?e.map(r,o).join(", "):o(r),l=n[zn](t);return i?a(this.name)+" : "+s:a(this.name)+Qi+(l?a(l)+" : "+s:s)},restoreData:function(){this._data=this._dataBeforeProcessed.cloneShallow()}});return e.mixin(s,n.dataFormatMixin),s}),e("zrender/core/guid",[],function(){var t=2311;return function(){return"zr_"+t++}}),e(Ji,[Qr,ar],function(t){var e=Array[Jr].slice,i=t(ar),n=i[Hr],r=function(){this._$handlers={}};return r[Jr]={constructor:r,one:function(t,e,i){var r=this._$handlers;return e&&t?(r[t]||(r[t]=[]),n(r[t],t)>=0?this:(r[t].push({h:e,one:!0,ctx:i||this}),this)):this},on:function(t,e,i){var n=this._$handlers;return e&&t?(n[t]||(n[t]=[]),n[t].push({h:e,one:!1,ctx:i||this}),this):this},isSilent:function(t){var e=this._$handlers;return e[t]&&e[t][jr]},off:function(t,e){var i=this._$handlers;if(!t)return this._$handlers={},this;if(e){if(i[t]){for(var n=[],r=0,a=i[t][jr];a>r;r++)i[t][r].h!=e&&n.push(i[t][r]);i[t]=n}i[t]&&0===i[t][jr]&&delete i[t]}else delete i[t];return this},trigger:function(t){if(this._$handlers[t]){var i=arguments,n=i[jr];n>3&&(i=e.call(i,1));for(var r=this._$handlers[t],a=r[jr],o=0;a>o;){switch(n){case 1:r[o].h.call(r[o].ctx);break;case 2:r[o].h.call(r[o].ctx,i[1]);break;case 3:r[o].h.call(r[o].ctx,i[1],i[2]);break;default:r[o].h.apply(r[o].ctx,i)}r[o].one?(r[Ki](o,1),a--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var i=arguments,n=i[jr];n>4&&(i=e.call(i,1,i[jr]-1));for(var r=i[i[jr]-1],a=this._$handlers[t],o=a[jr],s=0;o>s;){switch(n){case 1:a[s].h.call(r);break;case 2:a[s].h.call(r,i[1]);break;case 3:a[s].h.call(r,i[1],i[2]);break;default:a[s].h.apply(r,i)}a[s].one?(a[Ki](s,1),o--):s++}}return this}},r}),e("zrender/mixin/Transformable",[Qr,"../core/matrix","../core/vector"],function(t){function e(t){return t>a||-a>t}var i=t("../core/matrix"),n=t("../core/vector"),r=i.identity,a=5e-5,o=function(t){t=t||{},t[Cn]||(this[Cn]=[0,0]),null==t[$i]&&(this[$i]=0),t.scale||(this.scale=[1,1]),this[Yi]=this[Yi]||null},s=o[Jr];s[Xi]=null,s.needLocalTransform=function(){return e(this[$i])||e(this[Cn][0])||e(this[Cn][1])||e(this.scale[0]-1)||e(this.scale[1]-1)},s[ji]=function(){var t=this[Ui],e=t&&t[Xi],n=this.needLocalTransform(),a=this[Xi];return n||e?(a=a||i[lr](),n?this[qi](a):r(a),e&&(n?i.mul(a,t[Xi],a):i.copy(a,t[Xi])),this[Xi]=a,this[Wi]=this[Wi]||i[lr](),void i.invert(this[Wi],a)):void(a&&r(a))},s[qi]=function(t){t=t||[],r(t);var e=this[Yi],n=this.scale,a=this[$i],o=this[Cn];return e&&(t[4]-=e[0],t[5]-=e[1]),i.scale(t,t,n),a&&i[Hi](t,t,a),e&&(t[4]+=e[0],t[5]+=e[1]),t[4]+=o[0],t[5]+=o[1],t},s.setTransform=function(t){var e=this[Xi];e&&t[Xi](e[0],e[1],e[2],e[3],e[4],e[5])};var l=[];return s.decomposeTransform=function(){if(this[Xi]){var t=this[Ui],n=this[Xi];t&&t[Xi]&&(i.mul(l,t[Wi],n),n=l);var r=n[0]*n[0]+n[1]*n[1],a=n[2]*n[2]+n[3]*n[3],o=this[Cn],s=this.scale;e(r-1)&&(r=Math.sqrt(r)),e(a-1)&&(a=Math.sqrt(a)),n[0]<0&&(r=-r),n[3]<0&&(a=-a),o[0]=n[4],o[1]=n[5],s[0]=r,s[1]=a,this[$i]=Math.atan2(-n[1]/a,n[0]/r)}},s[Fi]=function(t,e){var i=[t,e],r=this[Wi];return r&&n[cr](i,i,r),i},s.transformCoordToGlobal=function(t,e){var i=[t,e],r=this[Xi];return r&&n[cr](i,i,r),i},o}),e("zrender/animation/easing",[],function(){var t={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),-(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)))},elasticOut:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},elasticInOut:function(t){var e,i=.1,n=.4;return 0===t?0:1===t?1:(!i||1>i?(i=1,e=n/4):e=n*Math.asin(1/i)/(2*Math.PI),(t*=2)<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(e){return 1-t.bounceOut(1-e)},bounceOut:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(e){return.5>e?.5*t.bounceIn(2*e):.5*t.bounceOut(2*e-1)+.5}};return t}),e("zrender/animation/Clip",[Qr,"./easing"],function(t){function e(t){this._target=t[Zi],this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null==t.loop?!1:t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart}var i=t("./easing");return e[Jr]={constructor:e,step:function(t){this._initialized||(this._startTime=(new Date).getTime()+this._delay,this._initialized=!0);var e=(t-this._startTime)/this._life;if(!(0>e)){e=Math.min(e,1);var n=this.easing,r=typeof n==Fr?i[n]:n,a=typeof r===Br?r(e):e;return this.fire("frame",a),1==e?this.loop?(this.restart(),"restart"):(this._needsRemove=!0,"destroy"):null}},restart:function(){var t=(new Date).getTime(),e=(t-this._startTime)%this._life;this._startTime=(new Date).getTime()-e+this.gap,this._needsRemove=!1},fire:function(t,e){t="on"+t,this[t]&&this[t](this._target,e)}},e}),e(Gi,[Qr],function(t){function e(t){return t=Math.round(t),0>t?0:t>255?255:t}function i(t){return t=Math.round(t),0>t?0:t>360?360:t}function n(t){return 0>t?0:t>1?1:t}function r(t){return e(t[jr]&&"%"===t.charAt(t[jr]-1)?parseFloat(t)/100*255:parseInt(t,10))}function a(t){return n(t[jr]&&"%"===t.charAt(t[jr]-1)?parseFloat(t)/100:parseFloat(t))}function o(t,e,i){return 0>i?i+=1:i>1&&(i-=1),1>6*i?t+(e-t)*i*6:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function s(t,e,i){return t+(e-t)*i}function l(t){if(t){t+="";var e=t[Nr](/ /g,"")[Lr]();if(e in x)return x[e].slice();if("#"!==e.charAt(0)){var i=e[Hr]("("),n=e[Hr](")");if(-1!==i&&n+1===e[jr]){var o=e.substr(0,i),s=e.substr(i+1,n-(i+1)).split(","),l=1;switch(o){case"rgba":if(4!==s[jr])return;l=a(s.pop());case"rgb":if(3!==s[jr])return;return[r(s[0]),r(s[1]),r(s[2]),l];case"hsla":if(4!==s[jr])return;return s[3]=a(s[3]),u(s);case"hsl":if(3!==s[jr])return;return u(s);default:return}}}else{if(4===e[jr]){var c=parseInt(e.substr(1),16);if(!(c>=0&&4095>=c))return;return[(3840&c)>>4|(3840&c)>>8,240&c|(240&c)>>4,15&c|(15&c)<<4,1]}if(7===e[jr]){var c=parseInt(e.substr(1),16);if(!(c>=0&&16777215>=c))return;return[(16711680&c)>>16,(65280&c)>>8,255&c,1]}}}}function u(t){var i=(parseFloat(t[0])%360+360)%360/360,n=a(t[1]),r=a(t[2]),s=.5>=r?r*(n+1):r+n-r*n,l=2*r-s,u=[e(255*o(l,s,i+1/3)),e(255*o(l,s,i)),e(255*o(l,s,i-1/3))];return 4===t[jr]&&(u[3]=t[3]),u}function c(t){if(t){var e,i,n=t[0]/255,r=t[1]/255,a=t[2]/255,o=Math.min(n,r,a),s=Math.max(n,r,a),l=s-o,u=(s+o)/2;if(0===l)e=0,i=0;else{i=.5>u?l/(s+o):l/(2-s-o);var c=((s-n)/6+l/2)/l,h=((s-r)/6+l/2)/l,d=((s-a)/6+l/2)/l;n===s?e=d-h:r===s?e=1/3+c-d:a===s&&(e=2/3+h-c),0>e&&(e+=1),e>1&&(e-=1)}var f=[360*e,i,u];return null!=t[3]&&f.push(t[3]),f}}function h(t,e){var i=l(t);if(i){for(var n=0;3>n;n++)0>e?i[n]=i[n]*(1-e)|0:i[n]=(255-i[n])*e+i[n]|0;return y(i,4===i[jr]?"rgba":"rgb")}}function d(t,e){var i=l(t);return i?((1<<24)+(i[0]<<16)+(i[1]<<8)+ +i[2]).toString(16).slice(1):void 0}function f(t,i,n){if(i&&i[jr]&&t>=0&&1>=t){n=n||[0,0,0,0];var r=t*(i[jr]-1),a=Math.floor(r),o=Math.ceil(r),l=i[a],u=i[o],c=r-a;return n[0]=e(s(l[0],u[0],c)),n[1]=e(s(l[1],u[1],c)),n[2]=e(s(l[2],u[2],c)),n[3]=e(s(l[3],u[3],c)),n}}function p(t,i,r){if(i&&i[jr]&&t>=0&&1>=t){var a=t*(i[jr]-1),o=Math.floor(a),u=Math.ceil(a),c=l(i[o]),h=l(i[u]),d=a-o,f=y([e(s(c[0],h[0],d)),e(s(c[1],h[1],d)),e(s(c[2],h[2],d)),n(s(c[3],h[3],d))],"rgba");return r?{color:f,leftIndex:o,rightIndex:u,value:a}:f}}function v(t,e){if(!(2!==t[jr]||t[1]<t[0])){for(var i=p(t[0],e,!0),n=p(t[1],e,!0),r=[{color:i.color,offset:0}],a=n.value-i.value,o=Math.max(i.value,i.rightIndex),s=Math.min(n.value,n.leftIndex),l=o;a>0&&s>=l;l++)r.push({color:e[l],offset:(l-i.value)/a});return r.push({color:n.color,offset:1}),r}}function m(t,e,n,r){return t=l(t),t?(t=c(t),null!=e&&(t[0]=i(e)),null!=n&&(t[1]=a(n)),null!=r&&(t[2]=a(r)),y(u(t),"rgba")):void 0}function g(t,e){return t=l(t),t&&null!=e?(t[3]=n(e),y(t,"rgba")):void 0}function y(t,e){return("rgb"===e||"hsv"===e||"hsl"===e)&&(t=t.slice(0,3)),e+"("+t.join(",")+")"}var x={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};return{parse:l,lift:h,toHex:d,fastMapToColor:f,mapToColor:p,mapIntervalToColor:v,modifyHSL:m,modifyAlpha:g,stringify:y}}),e("zrender/animation/Animator",[Qr,"./Clip","../tool/color",ar],function(t){function e(t,e){return t[e]}function i(t,e,i){t[e]=i}function n(t,e,i){return(e-t)*i+t}function r(t,e,i){return i>.5?e:t}function a(t,e,i,r,a){var o=t[jr];if(1==a)for(var s=0;o>s;s++)r[s]=n(t[s],e[s],i);else for(var l=t[0][jr],s=0;o>s;s++)for(var u=0;l>u;u++)r[s][u]=n(t[s][u],e[s][u],i)}function o(t,e,i){var n=t[jr],r=e[jr];if(n!==r){var a=n>r;if(a)t[jr]=r;else for(var o=n;r>o;o++)t.push(1===i?e[o]:g.call(e[o]))}}function s(t,e,i){if(t===e)return!0;var n=t[jr];if(n!==e[jr])return!1;if(1===i){for(var r=0;n>r;r++)if(t[r]!==e[r])return!1}else for(var a=t[0][jr],r=0;n>r;r++)for(var o=0;a>o;o++)if(t[r][o]!==e[r][o])return!1;return!0}function l(t,e,i,n,r,a,o,s,l){var c=t[jr];if(1==l)for(var h=0;c>h;h++)s[h]=u(t[h],e[h],i[h],n[h],r,a,o);else for(var d=t[0][jr],h=0;c>h;h++)for(var f=0;d>f;f++)s[h][f]=u(t[h][f],e[h][f],i[h][f],n[h][f],r,a,o)}function u(t,e,i,n,r,a,o){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*o+(-3*(e-i)-2*s-l)*a+s*r+e}function c(t){if(m(t)){var e=t[jr];if(m(t[0])){for(var i=[],n=0;e>n;n++)i.push(g.call(t[n]));return i}return g.call(t)}return t}function h(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function d(t,e,i,c,d){var v=t._getter,g=t._setter,y="spline"===e,x=c[jr];if(x){var _,w=c[0].value,b=m(w),M=!1,S=!1,A=b&&m(w[0])?2:1;c.sort(function(t,e){return t.time-e.time}),_=c[x-1].time;for(var C=[],T=[],k=c[0].value,L=!0,D=0;x>D;D++){C.push(c[D].time/_);var P=c[D].value;if(b&&s(P,k,A)||!b&&P===k||(L=!1),k=P,typeof P==Fr){var I=p.parse(P);I?(P=I,M=!0):S=!0}T.push(P)}if(!L){if(b){for(var z=T[x-1],D=0;x-1>D;D++)o(T[D],z,A);o(v(t._target,d),z,A)}var V,R,O,E,N,B,G=0,Z=0;if(M)var F=[0,0,0,0];var H=function(t,e){var i;if(Z>e){for(V=Math.min(G+1,x-1),i=V;i>=0&&!(C[i]<=e);i--);i=Math.min(i,x-2)}else{for(i=G;x>i&&!(C[i]>e);i++);i=Math.min(i-1,x-2)}G=i,Z=e;var o=C[i+1]-C[i];if(0!==o)if(R=(e-C[i])/o,y)if(E=T[i],O=T[0===i?i:i-1],N=T[i>x-2?x-1:i+1],B=T[i>x-3?x-1:i+2],b)l(O,E,N,B,R,R*R,R*R*R,v(t,d),A);else{var s;if(M)s=l(O,E,N,B,R,R*R,R*R*R,F,1),s=h(F);else{if(S)return r(E,N,R);s=u(O,E,N,B,R,R*R,R*R*R)}g(t,d,s)}else if(b)a(T[i],T[i+1],R,v(t,d),A);else{var s;if(M)a(T[i],T[i+1],R,F,1),s=h(F);else{if(S)return r(T[i],T[i+1],R);s=n(T[i],T[i+1],R)}g(t,d,s)}},W=new f({target:t._target,life:_,loop:t._loop,delay:t._delay,onframe:H,ondestroy:i});return e&&"spline"!==e&&(W.easing=e),W}}}var f=t("./Clip"),p=t("../tool/color"),v=t(ar),m=v.isArrayLike,g=Array[Jr].slice,y=function(t,n,r,a){this._tracks={},this._target=t,this._loop=n||!1,this._getter=r||e,this._setter=a||i,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]};return y[Jr]={when:function(t,e){var i=this._tracks;for(var n in e){if(!i[n]){i[n]=[];var r=this._getter(this._target,n);if(null==r)continue;0!==t&&i[n].push({time:0,value:c(r)})}i[n].push({time:t,value:e[n]})}return this},during:function(t){return this._onframeList.push(t),this},_doneCallback:function(){this._tracks={},this._clipList[jr]=0;for(var t=this._doneList,e=t[jr],i=0;e>i;i++)t[i].call(this)},start:function(t){var e,i=this,n=0,r=function(){n--,n||i._doneCallback()};for(var a in this._tracks){var o=d(this,t,r,this._tracks[a],a);o&&(this._clipList.push(o),n++,this[Bi]&&this[Bi].addClip(o),e=o)}if(e){var s=e.onframe;e.onframe=function(t,e){s(t,e);for(var n=0;n<i._onframeList[jr];n++)i._onframeList[n](t,e)}}return n||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,i=this[Bi],n=0;n<e[jr];n++){var r=e[n];t&&r.onframe(this._target,1),i&&i.removeClip(r)}e[jr]=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}},y}),e("zrender/config",[],function(){var t=1;typeof window!==pr&&(t=Math.max(window.devicePixelRatio||1,1));var e={debugMode:0,devicePixelRatio:t};return e}),e("zrender/core/log",[Qr,"../config"],function(t){var e=t("../config");return function(){if(0!==e.debugMode)if(1==e.debugMode)for(var t in arguments)throw new Error(arguments[t]);else if(e.debugMode>1)for(var t in arguments)console.log(arguments[t])}}),e("zrender/mixin/Animatable",[Qr,"../animation/Animator",ar,"../core/log"],function(t){var e=t("../animation/Animator"),i=t(ar),n=i[fn],r=i.isFunction,a=i[Ln],o=t("../core/log"),s=function(){this.animators=[]};return s[Jr]={constructor:s,animate:function(t,n){var r,a=!1,s=this,l=this.__zr;if(t){var u=t.split("."),c=s;a="shape"===u[0];for(var h=0,d=u[jr];d>h;h++)c&&(c=c[u[h]]);c&&(r=c)}else r=s;if(!r)return void o('Property "'+t+'" is not existed in element '+s.id);var f=s.animators,p=new e(r,n);return p.during(function(t){s.dirty(a)}).done(function(){f[Ki](i[Hr](f,p),1)}),f.push(p),l&&l[Bi].addAnimator(p),p},stopAnimation:function(t){for(var e=this.animators,i=e[jr],n=0;i>n;n++)e[n].stop(t);return e[jr]=0,this},animateTo:function(t,e,i,a,o){function s(){u--,u||o&&o()}n(i)?(o=a,a=i,i=0):r(a)?(o=a,a=Ni,i=0):r(i)?(o=i,i=0):r(e)?(o=e,e=500):e||(e=500),this[Ei](),this._animateToShallow("",this,t,e,i,a,o);var l=this.animators.slice(),u=l[jr];u||o&&o();for(var c=0;c<l[jr];c++)l[c].done(s).start(a)},_animateToShallow:function(t,e,n,r,o){var s={},l=0;for(var u in n)if(null!=e[u])a(n[u])&&!i.isArrayLike(n[u])?this._animateToShallow(t?t+"."+u:u,e[u],n[u],r,o):(s[u]=n[u],l++);else if(null!=n[u])if(t){var c={};c[t]={},c[t][u]=n[u],this.attr(c)}else this.attr(u,n[u]);return l>0&&this[Oi](t,!1).when(null==r?500:r,s).delay(o||0),this}},s}),e("zrender/Element",[Qr,"./core/guid","./mixin/Eventful","./mixin/Transformable","./mixin/Animatable","./core/util"],function(t){var e=t("./core/guid"),i=t("./mixin/Eventful"),n=t("./mixin/Transformable"),r=t("./mixin/Animatable"),a=t("./core/util"),o=function(t){n.call(this,t),i.call(this,t),r.call(this,t),this.id=t.id||e()};return o[Jr]={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,drift:function(t,e){switch(this[Ri]){case Sn:e=0;break;case Mn:t=0}var i=this[Xi];i||(i=this[Xi]=[1,0,0,1,0,0]),i[4]+=t,i[5]+=e,this.decomposeTransform(),this.dirty()},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this[ji]()},traverse:function(t,e){},attrKV:function(t,e){if(t===Cn||"scale"===t||t===Yi){if(e){var i=this[t];i||(i=this[t]=[]),i[0]=e[0],i[1]=e[1]}}else this[t]=e},hide:function(){this[Vi]=!0,this.__zr&&this.__zr[zi]()},show:function(){this[Vi]=!1,this.__zr&&this.__zr[zi]()},attr:function(t,e){if(typeof t===Fr)this.attrKV(t,e);else if(a[Ln](t))for(var i in t)t.hasOwnProperty(i)&&this.attrKV(i,t[i]);return this.dirty(),this},setClipPath:function(t){var e=this.__zr;e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty()},removeClipPath:function(){var t=this.clipPath;t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty())},addSelfToZr:function(t){this.__zr=t;var e=this.animators;if(e)for(var i=0;i<e[jr];i++)t[Bi].addAnimator(e[i]);this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null;var e=this.animators;if(e)for(var i=0;i<e[jr];i++)t[Bi].removeAnimator(e[i]);this.clipPath&&this.clipPath.removeSelfFromZr(t)}},a.mixin(o,r),a.mixin(o,n),a.mixin(o,i),o}),e("zrender/container/Group",[Qr,ar,"../Element",rr],function(t){var e=t(ar),i=t("../Element"),n=t(rr),r=function(t){t=t||{},i.call(this,t);for(var e in t)this[e]=t[e];this._children=[],this.__storage=null,this[Ii]=!0};return r[Jr]={constructor:r,type:"group",children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,i=0;i<e[jr];i++)if(e[i].name===t)return e[i]},childCount:function(){return this._children[jr]},add:function(t){return t&&t!==this&&t[Ui]!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t[Ui]!==this&&e&&e[Ui]===this){var i=this._children,n=i[Hr](e);n>=0&&(i[Ki](n,0,t),this._doAdd(t))}return this},_doAdd:function(t){t[Ui]&&t[Ui][Pi](t),t[Ui]=this;var e=this.__storage,i=this.__zr;e&&e!==t.__storage&&(e[Di](t),t instanceof r&&t.addChildrenToStorage(e)),i&&i[zi]()},remove:function(t){var i=this.__zr,n=this.__storage,a=this._children,o=e[Hr](a,t);return 0>o?this:(a[Ki](o,1),t[Ui]=null,n&&(n[Li](t.id),t instanceof r&&t.delChildrenFromStorage(n)),i&&i[zi](),this)},removeAll:function(){var t,e,i=this._children,n=this.__storage;for(e=0;e<i[jr];e++)t=i[e],n&&(n[Li](t.id),t instanceof r&&t.delChildrenFromStorage(n)),t[Ui]=null;return i[jr]=0,this},eachChild:function(t,e){for(var i=this._children,n=0;n<i[jr];n++){var r=i[n];t.call(e,r,n)}return this},traverse:function(t,e){for(var i=0;i<this._children[jr];i++){var n=this._children[i];t.call(e,n),"group"===n.type&&n[ki](t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children[jr];e++){var i=this._children[e];t[Di](i),i instanceof r&&i.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children[jr];e++){var i=this._children[e];t[Li](i.id),i instanceof r&&i.delChildrenFromStorage(t)}},dirty:function(){return this[Ii]=!0,this.__zr&&this.__zr[zi](),this},getBoundingRect:function(t){for(var e=null,i=new n(0,0,0,0),r=t||this._children,a=[],o=0;o<r[jr];o++){var s=r[o];if(!s[Vi]&&!s[Ti]){var l=s[Jn](),u=s[qi](a);u?(i.copy(l),i[cr](u),e=e||i.clone(),e.union(i)):(e=e||l.clone(),e.union(l))}}return e||i}},e[Ar](r,i),r}),e("echarts/view/Component",[Qr,"zrender/container/Group","../util/component",jn],function(t){var e=t("zrender/container/Group"),i=t("../util/component"),n=t(jn),r=function(){this.group=new e,this.uid=i.getUID("viewComponent")};r[Jr]={constructor:r,init:function(t,e){},render:function(t,e,i,n){},dispose:function(){}};var a=r[Jr];return a.updateView=a[Ci]=a.updateVisual=function(t,e,i,n){},n[Tr](r),n[Sr](r,{registerWhenExtend:!0}),r}),e("echarts/view/Chart",[Qr,"zrender/container/Group","../util/component",jn],function(t){function e(){this.group=new r,this.uid=a.getUID("viewChart")}function i(t,e){if(t&&(t[Mi](e),"group"===t.type))for(var n=0;n<t.childCount();n++)i(t[An](n),e)}function n(t,e,n){if(null!=e[bi]){var r=t[wi](e[bi]);i(r,n)}else if(e.name){var a=t[_i](e.name),r=t[wi](a);i(r,n)}else t[xi](function(t){i(t,n)})}var r=t("zrender/container/Group"),a=t("../util/component"),o=t(jn);
e[Jr]={type:"chart",init:function(t,e){},render:function(t,e,i,n){},highlight:function(t,e,i,r){n(t[En](),r,Zn)},downplay:function(t,e,i,r){n(t[En](),r,Gn)},remove:function(t,e){this.group[Ai]()},dispose:function(){}};var s=e[Jr];return s.updateView=s[Ci]=s.updateVisual=function(t,e,i,n){this[Si](t,e,i,n)},o[Tr](e),o[Sr](e,{registerWhenExtend:!0}),e}),e("zrender/graphic/Style",[Qr],function(t){var e=["lineCap","lineJoin","miterLimit",yr,gr,"shadowOffsetY",mr],i=function(t){this.extendFrom(t)};i[Jr]={constructor:i,fill:"#000000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,textFill:"#000",textStroke:null,textPosition:"inside",textBaseline:null,textAlign:null,textDistance:5,textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,bind:function(t,i){for(var n=this.fill,r=this[_r],a=0;a<e[jr];a++){var o=e[a];null!=this[o]&&(t[o]=this[o])}if(null!=r){var s=this[wr];t[wr]=s/(this.strokeNoScale&&i&&i.getLineScale?i.getLineScale():1)}null!=n&&(t.fillStyle=n.canvasGradient?n.canvasGradient:n),null!=r&&(t.strokeStyle=r.canvasGradient?r.canvasGradient:r),null!=this[xr]&&(t.globalAlpha=this[xr])},extendFrom:function(t,e){if(t){var i=this;for(var n in t)!t.hasOwnProperty(n)||!e&&i.hasOwnProperty(n)||(i[n]=t[n])}},set:function(t,e){typeof t===Fr?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor;return t.extendFrom(this,!0),t}};var n,r,a=i[Jr];for(r=0;r<e[jr];r++)n=e[r],n in a||(a[n]=null);return i}),e("zrender/graphic/mixin/RectText",[Qr,"../../contain/text","../../core/BoundingRect"],function(t){function e(t,e){return typeof t===Fr?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function i(t,e){t[Xi](e[0],e[1],e[2],e[3],e[4],e[5])}var n=t("../../contain/text"),r=t("../../core/BoundingRect"),a=new r,o=function(){};return o[Jr]={constructor:o,drawRectText:function(t,r,o){var s=this.style,l=s.text;if(null!=l&&(l+=""),l){var u,c,h=s[yi],d=s.textDistance,f=s[gi],p=s.textFont||s.font,v=s[mi];o=o||n[Jn](l,p,f,v);var m=this[Xi],g=this[Wi];if(m&&(a.copy(r),a[cr](m),r=a,i(t,g)),h instanceof Array)u=r.x+e(h[0],r.width),c=r.y+e(h[1],r[ur]),f=f||"left",v=v||"top";else{var y=n.adjustTextPositionOnRect(h,r,o,d);u=y.x,c=y.y,f=f||y[gi],v=v||y[mi]}t[gi]=f,t[mi]=v;var x=s.textFill,_=s.textStroke;x&&(t.fillStyle=x),_&&(t.strokeStyle=_),t.font=p,t[mr]=s.textShadowColor,t[yr]=s.textShadowBlur,t[gr]=s.textShadowOffsetX,t.shadowOffsetY=s.textShadowOffsetY;for(var w=l.split("\n"),b=0;b<w[jr];b++)x&&t.fillText(w[b],u,c),_&&t.strokeText(w[b],u,c),c+=o.lineHeight;m&&i(t,m)}}},o}),e("zrender/graphic/Displayable",[Qr,ar,"./Style","../Element","./mixin/RectText"],function(t){function e(t){t=t||{},r.call(this,t);for(var e in t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e]);this.style=new n(t.style),this._rect=null,this.__clipPaths=[]}var i=t(ar),n=t("./Style"),r=t("../Element"),a=t("./mixin/RectText");return e[Jr]={constructor:e,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var i=this[Fi](t,e),n=this[Jn]();return n[vi](i[0],i[1])},dirty:function(){this[Ii]=!0,this._rect=null,this.__zr&&this.__zr[zi]()},animateStyle:function(t){return this[Oi]("style",t)},attrKV:function(t,e){"style"!==t?r[Jr].attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(),this}},i[Ar](e,r),i.mixin(e,a),e}),e("zrender/core/curve",[Qr,"./vector"],function(t){function e(t){return t>-_&&_>t}function i(t){return t>_||-_>t}function n(t,e,i,n,r){var a=1-r;return a*a*(a*t+3*r*e)+r*r*(r*n+3*a*i)}function r(t,e,i,n,r){var a=1-r;return 3*(((e-t)*a+2*(i-e)*r)*a+(n-i)*r*r)}function a(t,i,n,r,a,o){var s=r+3*(i-n)-t,l=3*(n-2*i+t),u=3*(i-t),c=t-a,h=l*l-3*s*u,d=l*u-9*s*c,f=u*u-3*l*c,p=0;if(e(h)&&e(d))if(e(l))o[0]=0;else{var v=-u/l;v>=0&&1>=v&&(o[p++]=v)}else{var m=d*d-4*h*f;if(e(m)){var g=d/h,v=-l/s+g,_=-g/2;v>=0&&1>=v&&(o[p++]=v),_>=0&&1>=_&&(o[p++]=_)}else if(m>0){var M=x(m),S=h*l+1.5*s*(-d+M),A=h*l+1.5*s*(-d-M);S=0>S?-y(-S,b):y(S,b),A=0>A?-y(-A,b):y(A,b);var v=(-l-(S+A))/(3*s);v>=0&&1>=v&&(o[p++]=v)}else{var C=(2*h*l-3*s*d)/(2*x(h*h*h)),T=Math.acos(C)/3,k=x(h),L=Math.cos(T),v=(-l-2*k*L)/(3*s),_=(-l+k*(L+w*Math.sin(T)))/(3*s),D=(-l+k*(L-w*Math.sin(T)))/(3*s);v>=0&&1>=v&&(o[p++]=v),_>=0&&1>=_&&(o[p++]=_),D>=0&&1>=D&&(o[p++]=D)}}return p}function o(t,n,r,a,o){var s=6*r-12*n+6*t,l=9*n+3*a-3*t-9*r,u=3*n-3*t,c=0;if(e(l)){if(i(s)){var h=-u/s;h>=0&&1>=h&&(o[c++]=h)}}else{var d=s*s-4*l*u;if(e(d))o[0]=-s/(2*l);else if(d>0){var f=x(d),h=(-s+f)/(2*l),p=(-s-f)/(2*l);h>=0&&1>=h&&(o[c++]=h),p>=0&&1>=p&&(o[c++]=p)}}return c}function s(t,e,i,n,r,a){var o=(e-t)*r+t,s=(i-e)*r+e,l=(n-i)*r+i,u=(s-o)*r+o,c=(l-s)*r+s,h=(c-u)*r+u;a[0]=t,a[1]=o,a[2]=u,a[3]=h,a[4]=h,a[5]=c,a[6]=l,a[7]=n}function l(t,e,i,r,a,o,s,l,u,c,h){var d,f,p,v,m,y=.005,w=1/0;M[0]=u,M[1]=c;for(var b=0;1>b;b+=.05)S[0]=n(t,i,a,s,b),S[1]=n(e,r,o,l,b),v=g(M,S),w>v&&(d=b,w=v);w=1/0;for(var C=0;32>C&&!(_>y);C++)f=d-y,p=d+y,S[0]=n(t,i,a,s,f),S[1]=n(e,r,o,l,f),v=g(S,M),f>=0&&w>v?(d=f,w=v):(A[0]=n(t,i,a,s,p),A[1]=n(e,r,o,l,p),m=g(A,M),1>=p&&w>m?(d=p,w=m):y*=.5);return h&&(h[0]=n(t,i,a,s,d),h[1]=n(e,r,o,l,d)),x(w)}function u(t,e,i,n){var r=1-n;return r*(r*t+2*n*e)+n*n*i}function c(t,e,i,n){return 2*((1-n)*(e-t)+n*(i-e))}function h(t,n,r,a,o){var s=t-2*n+r,l=2*(n-t),u=t-a,c=0;if(e(s)){if(i(l)){var h=-u/l;h>=0&&1>=h&&(o[c++]=h)}}else{var d=l*l-4*s*u;if(e(d)){var h=-l/(2*s);h>=0&&1>=h&&(o[c++]=h)}else if(d>0){var f=x(d),h=(-l+f)/(2*s),p=(-l-f)/(2*s);h>=0&&1>=h&&(o[c++]=h),p>=0&&1>=p&&(o[c++]=p)}}return c}function d(t,e,i){var n=t+i-2*e;return 0===n?.5:(t-e)/n}function f(t,e,i,n,r){var a=(e-t)*n+t,o=(i-e)*n+e,s=(o-a)*n+a;r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=i}function p(t,e,i,n,r,a,o,s,l){var c,h=.005,d=1/0;M[0]=o,M[1]=s;for(var f=0;1>f;f+=.05){S[0]=u(t,i,r,f),S[1]=u(e,n,a,f);var p=g(M,S);d>p&&(c=f,d=p)}d=1/0;for(var v=0;32>v&&!(_>h);v++){var m=c-h,y=c+h;S[0]=u(t,i,r,m),S[1]=u(e,n,a,m);var p=g(S,M);if(m>=0&&d>p)c=m,d=p;else{A[0]=u(t,i,r,y),A[1]=u(e,n,a,y);var w=g(A,M);1>=y&&d>w?(c=y,d=w):h*=.5}}return l&&(l[0]=u(t,i,r,c),l[1]=u(e,n,a,c)),x(d)}var v=t("./vector"),m=v[lr],g=v.distSquare,y=Math.pow,x=Math.sqrt,_=1e-4,w=x(3),b=1/3,M=m(),S=m(),A=m();return{cubicAt:n,cubicDerivativeAt:r,cubicRootAt:a,cubicExtrema:o,cubicSubdivide:s,cubicProjectPoint:l,quadraticAt:u,quadraticDerivativeAt:c,quadraticRootAt:h,quadraticExtremum:d,quadraticSubdivide:f,quadraticProjectPoint:p}}),e("zrender/core/bbox",[Qr,"./vector","./curve"],function(t){var e=t("./vector"),i=t("./curve"),n={},r=Math.min,a=Math.max,o=Math.sin,s=Math.cos,l=e[lr](),u=e[lr](),c=e[lr](),h=2*Math.PI;return n.fromPoints=function(t,e,i){if(0!==t[jr]){var n,o=t[0],s=o[0],l=o[0],u=o[1],c=o[1];for(n=1;n<t[jr];n++)o=t[n],s=r(s,o[0]),l=a(l,o[0]),u=r(u,o[1]),c=a(c,o[1]);e[0]=s,e[1]=u,i[0]=l,i[1]=c}},n.fromLine=function(t,e,i,n,o,s){o[0]=r(t,i),o[1]=r(e,n),s[0]=a(t,i),s[1]=a(e,n)},n.fromCubic=function(t,e,n,o,s,l,u,c,h,d){var f,p,v,m,g,y=[],x=[],_=i.cubicExtrema,w=i.cubicAt,b=_(t,n,s,u,y);for(g=0;b>g;g++)y[g]=w(t,n,s,u,y[g]);for(b=_(e,o,l,c,x),g=0;b>g;g++)x[g]=w(e,o,l,c,x[g]);y.push(t,u),x.push(e,c),f=r.apply(null,y),p=a.apply(null,y),v=r.apply(null,x),m=a.apply(null,x),h[0]=f,h[1]=v,d[0]=p,d[1]=m},n.fromQuadratic=function(t,e,n,o,s,l,u,c){var h=i.quadraticExtremum,d=i[pi],f=a(r(h(t,n,s),1),0),p=a(r(h(e,o,l),1),0),v=d(t,n,s,f),m=d(e,o,l,p);u[0]=r(t,s,v),u[1]=r(e,l,m),c[0]=a(t,s,v),c[1]=a(e,l,m)},n.fromArc=function(t,i,n,r,a,d,f,p,v){var m=e.min,g=e.max,y=Math.abs(a-d);if(1e-4>y%h&&y>1e-4)return p[0]=t-n,p[1]=i-r,v[0]=t+n,void(v[1]=i+r);if(l[0]=s(a)*n+t,l[1]=o(a)*r+i,u[0]=s(d)*n+t,u[1]=o(d)*r+i,m(p,l,u),g(v,l,u),a%=h,0>a&&(a+=h),d%=h,0>d&&(d+=h),a>d&&!f?d+=h:d>a&&f&&(a+=h),f){var x=d;d=a,a=x}for(var _=0;d>_;_+=Math.PI/2)_>a&&(c[0]=s(_)*n+t,c[1]=o(_)*r+i,m(p,c,p),g(v,c,v))},n}),e("zrender/core/PathProxy",[Qr,"./curve","./vector","./bbox","./BoundingRect"],function(t){var e=t("./curve"),i=t("./vector"),n=t("./bbox"),r=t("./BoundingRect"),a={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},o=[],s=[],l=[],u=[],c=Math.min,h=Math.max,d=Math.cos,f=Math.sin,p=Math.sqrt,v=typeof Float32Array!=pr,m=function(){this.data=[],this._len=0,this._ctx=null,this._xi=0,this._yi=0,this._x0=0,this._y0=0};return m[Jr]={constructor:m,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t[fi](),this._len=0,this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(a.M,t,e),this._ctx&&this._ctx[di](t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){return this.addData(a.L,t,e),this._ctx&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx[hi](t,e)),this._xi=t,this._yi=e,this},bezierCurveTo:function(t,e,i,n,r,o){return this.addData(a.C,t,e,i,n,r,o),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,i,n,r,o):this._ctx[ci](t,e,i,n,r,o)),this._xi=r,this._yi=o,this},quadraticCurveTo:function(t,e,i,n){return this.addData(a.Q,t,e,i,n),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,i,n):this._ctx.quadraticCurveTo(t,e,i,n)),this._xi=i,this._yi=n,this},arc:function(t,e,i,n,r,o){return this.addData(a.A,t,e,i,i,n,r-n,0,o?0:1),this._ctx&&this._ctx.arc(t,e,i,n,r,o),this._xi=d(r)*i+t,this._xi=f(r)*i+t,this},arcTo:function(t,e,i,n,r){return this._ctx&&this._ctx.arcTo(t,e,i,n,r),this},rect:function(t,e,i,n){return this._ctx&&this._ctx.rect(t,e,i,n),this.addData(a.R,t,e,i,n),this},closePath:function(){this.addData(a.Z);var t=this._ctx,e=this._x0,i=this._y0;return t&&(this._needsDash()&&this._dashedLineTo(e,i),t[ui]()),this._xi=e,this._yi=i,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t[_r](),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0;for(var e=0,i=0;i<t[jr];i++)e+=t[i];this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t[jr];this.data&&this.data[jr]==e||!v||(this.data=new Float32Array(e));for(var i=0;e>i;i++)this.data[i]=t[i];this._len=e},appendPath:function(t){t instanceof Array||(t=[t]);for(var e=t[jr],i=0,n=this._len,r=0;e>r;r++)i+=t[r].len();v&&this.data instanceof Float32Array&&(this.data=new Float32Array(n+i));for(var r=0;e>r;r++)for(var a=t[r].data,o=0;o<a[jr];o++)this.data[n++]=a[o];this._len=n},addData:function(t){var e=this.data;this._len+arguments[jr]>e[jr]&&(this._expandData(),e=this.data);for(var i=0;i<arguments[jr];i++)e[this._len++]=arguments[i];this._prevCmd=t},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e];this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var i,n,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,d=t-l,f=e-u,v=p(d*d+f*f),m=l,g=u,y=o[jr];for(d/=v,f/=v,0>a&&(a=r+a),a%=r,m-=a*d,g-=a*f;d>=0&&t>=m||0>d&&m>t;)n=this._dashIdx,i=o[n],m+=d*i,g+=f*i,this._dashIdx=(n+1)%y,d>0&&l>m||0>d&&m>l||s[n%2?di:hi](d>=0?c(m,t):h(m,t),f>=0?c(g,e):h(g,e));d=m-t,f=g-e,this._dashOffset=-p(d*d+f*f)},_dashedBezierTo:function(t,i,n,r,a,o){var s,l,u,c,h,d=this._dashSum,f=this._dashOffset,v=this._lineDash,m=this._ctx,g=this._xi,y=this._yi,x=e.cubicAt,_=0,w=this._dashIdx,b=v[jr],M=0;for(0>f&&(f=d+f),f%=d,s=0;1>s;s+=.1)l=x(g,t,n,a,s+.1)-x(g,t,n,a,s),u=x(y,i,r,o,s+.1)-x(y,i,r,o,s),_+=p(l*l+u*u);for(;b>w&&(M+=v[w],!(M>f));w++);for(s=(M-f)/_;1>=s;)c=x(g,t,n,a,s),h=x(y,i,r,o,s),w%2?m[di](c,h):m[hi](c,h),s+=v[w]/_,w=(w+1)%b;w%2!==0&&m[hi](a,o),l=a-c,u=o-h,this._dashOffset=-p(l*l+u*u)},_dashedQuadraticTo:function(t,e,i,n){var r=i,a=n;i=(i+2*t)/3,n=(n+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,i,n,r,a)},toStatic:function(){this.data[jr]=this._len,v&&this.data instanceof Array&&(this.data=new Float32Array(this.data))},getBoundingRect:function(){o[0]=o[1]=l[0]=l[1]=Number.MAX_VALUE,s[0]=s[1]=u[0]=u[1]=-Number.MAX_VALUE;for(var t=this.data,e=0,c=0,h=0,p=0,v=0;v<t[jr];){var m=t[v++];switch(1==v&&(e=t[v],c=t[v+1],h=e,p=c),m){case a.M:h=t[v++],p=t[v++],e=h,c=p,l[0]=h,l[1]=p,u[0]=h,u[1]=p;break;case a.L:n.fromLine(e,c,t[v],t[v+1],l,u),e=t[v++],c=t[v++];break;case a.C:n.fromCubic(e,c,t[v++],t[v++],t[v++],t[v++],t[v],t[v+1],l,u),e=t[v++],c=t[v++];break;case a.Q:n.fromQuadratic(e,c,t[v++],t[v++],t[v],t[v+1],l,u),e=t[v++],c=t[v++];break;case a.A:var g=t[v++],y=t[v++],x=t[v++],_=t[v++],w=t[v++],b=t[v++]+w,M=(t[v++],1-t[v++]);1==v&&(h=d(w)*x+g,p=f(w)*_+y),n.fromArc(g,y,x,_,w,b,M,l,u),e=d(b)*x+g,c=f(b)*_+y;break;case a.R:h=e=t[v++],p=c=t[v++];var S=t[v++],A=t[v++];n.fromLine(h,p,h+S,p+A,l,u);break;case a.Z:e=h,c=p}i.min(o,o,l),i.max(s,s,u)}return 0===v&&(o[0]=o[1]=s[0]=s[1]=0),new r(o[0],o[1],s[0]-o[0],s[1]-o[1])},rebuildPath:function(t){for(var e=this.data,i=0;i<this._len;){var n=e[i++];switch(n){case a.M:t[di](e[i++],e[i++]);break;case a.L:t[hi](e[i++],e[i++]);break;case a.C:t[ci](e[i++],e[i++],e[i++],e[i++],e[i++],e[i++]);break;case a.Q:t.quadraticCurveTo(e[i++],e[i++],e[i++],e[i++]);break;case a.A:var r=e[i++],o=e[i++],s=e[i++],l=e[i++],u=e[i++],c=e[i++],h=e[i++],d=e[i++],f=s>l?s:l,p=s>l?1:s/l,v=s>l?l/s:1,m=Math.abs(s-l)>.001;m?(t[sr](r,o),t[Hi](h),t.scale(p,v),t.arc(0,0,f,u,u+c,1-d),t.scale(1/p,1/v),t[Hi](-h),t[sr](-r,-o)):t.arc(r,o,f,u,u+c,1-d);break;case a.R:t.rect(e[i++],e[i++],e[i++],e[i++]);break;case a.Z:t[ui]()}}}},m.CMD=a,m}),e("zrender/contain/line",[],function(){return{containStroke:function(t,e,i,n,r,a,o){if(0===r)return!1;var s=r,l=0,u=t;if(o>e+s&&o>n+s||e-s>o&&n-s>o||a>t+s&&a>i+s||t-s>a&&i-s>a)return!1;if(t===i)return Math.abs(a-t)<=s/2;l=(e-n)/(t-i),u=(t*n-i*e)/(t-i);var c=l*a-o+u,h=c*c/(l*l+1);return s/2*s/2>=h}}}),e("zrender/contain/cubic",[Qr,"../core/curve"],function(t){var e=t("../core/curve");return{containStroke:function(t,i,n,r,a,o,s,l,u,c,h){if(0===u)return!1;var d=u;if(h>i+d&&h>r+d&&h>o+d&&h>l+d||i-d>h&&r-d>h&&o-d>h&&l-d>h||c>t+d&&c>n+d&&c>a+d&&c>s+d||t-d>c&&n-d>c&&a-d>c&&s-d>c)return!1;var f=e.cubicProjectPoint(t,i,n,r,a,o,s,l,c,h,null);return d/2>=f}}}),e("zrender/contain/quadratic",[Qr,"../core/curve"],function(t){var e=t("../core/curve");return{containStroke:function(t,i,n,r,a,o,s,l,u){if(0===s)return!1;var c=s;if(u>i+c&&u>r+c&&u>o+c||i-c>u&&r-c>u&&o-c>u||l>t+c&&l>n+c&&l>a+c||t-c>l&&n-c>l&&a-c>l)return!1;var h=e.quadraticProjectPoint(t,i,n,r,a,o,l,u,null);return c/2>=h}}}),e("zrender/contain/util",[Qr],function(t){var e=2*Math.PI;return{normalizeRadian:function(t){return t%=e,0>t&&(t+=e),t}}}),e("zrender/contain/arc",[Qr,"./util"],function(t){var e=t("./util").normalizeRadian,i=2*Math.PI;return{containStroke:function(t,n,r,a,o,s,l,u,c){if(0===l)return!1;var h=l;u-=t,c-=n;var d=Math.sqrt(u*u+c*c);if(d-h>r||r>d+h)return!1;if(Math.abs(a-o)%i<1e-4)return!0;if(s){var f=a;a=e(o),o=e(f)}else a=e(a),o=e(o);a>o&&(o+=i);var p=Math.atan2(c,u);return 0>p&&(p+=i),p>=a&&o>=p||p+i>=a&&o>=p+i}}}),e("zrender/contain/windingLine",[],function(){return function(t,e,i,n,r,a){if(a>e&&a>n||e>a&&n>a)return 0;if(n===e)return 0;var o=e>n?1:-1,s=(a-e)/(n-e),l=s*(i-t)+t;return l>r?o:0}}),e("zrender/contain/path",[Qr,"../core/PathProxy","./line","./cubic","./quadratic","./arc","./util","../core/curve","./windingLine"],function(t){function e(t,e){return Math.abs(t-e)<g}function i(){var t=x[0];x[0]=x[1],x[1]=t}function n(t,e,n,r,a,o,s,l,u,c){if(c>e&&c>r&&c>o&&c>l||e>c&&r>c&&o>c&&l>c)return 0;var h=f.cubicRootAt(e,r,o,l,c,y);if(0===h)return 0;for(var d,p,v=0,m=-1,g=0;h>g;g++){var _=y[g],w=f.cubicAt(t,n,a,s,_);u>w||(0>m&&(m=f.cubicExtrema(e,r,o,l,x),x[1]<x[0]&&m>1&&i(),d=f.cubicAt(e,r,o,l,x[0]),m>1&&(p=f.cubicAt(e,r,o,l,x[1]))),v+=2==m?_<x[0]?e>d?1:-1:_<x[1]?d>p?1:-1:p>l?1:-1:_<x[0]?e>d?1:-1:d>l?1:-1)}return v}function r(t,e,i,n,r,a,o,s){if(s>e&&s>n&&s>a||e>s&&n>s&&a>s)return 0;var l=f.quadraticRootAt(e,n,a,s,y);if(0===l)return 0;var u=f.quadraticExtremum(e,n,a);if(u>=0&&1>=u){for(var c=0,h=f[pi](e,n,a,u),d=0;l>d;d++){var p=f[pi](t,i,r,y[d]);p>o||(c+=y[d]<u?e>h?1:-1:h>a?1:-1)}return c}var p=f[pi](t,i,r,y[0]);return p>o?0:e>a?1:-1}function a(t,e,i,n,r,a,o,s){if(s-=e,s>i||-i>s)return 0;var l=Math.sqrt(i*i-s*s);y[0]=-l,y[1]=l;var u=Math.abs(n-r);if(1e-4>u)return 0;if(1e-4>u%m){n=0,r=m;var c=a?1:-1;return o>=y[0]+t&&o<=y[1]+t?c:0}if(a){var l=n;n=d(r),r=d(l)}else n=d(n),r=d(r);n>r&&(r+=m);for(var h=0,f=0;2>f;f++){var p=y[f];if(p+t>o){var v=Math.atan2(s,p),c=a?1:-1;0>v&&(v=m+v),(v>=n&&r>=v||v+m>=n&&r>=v+m)&&(v>Math.PI/2&&v<1.5*Math.PI&&(c=-c),h+=c)}}return h}function o(t,i,o,l,d){for(var f=0,m=0,g=0,y=0,x=0,_=0;_<t[jr];){var w=t[_++];if(w===s.M&&_>1&&(o||(f+=p(m,g,y,x,l,d)),0!==f))return!0;switch(1==_&&(m=t[_],g=t[_+1],y=m,x=g),w){case s.M:y=t[_++],x=t[_++],m=y,g=x;break;case s.L:if(o){if(v(m,g,t[_],t[_+1],i,l,d))return!0}else f+=p(m,g,t[_],t[_+1],l,d)||0;m=t[_++],g=t[_++];break;case s.C:if(o){if(u.containStroke(m,g,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],i,l,d))return!0}else f+=n(m,g,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],l,d)||0;m=t[_++],g=t[_++];break;case s.Q:if(o){if(c.containStroke(m,g,t[_++],t[_++],t[_],t[_+1],i,l,d))return!0}else f+=r(m,g,t[_++],t[_++],t[_],t[_+1],l,d)||0;m=t[_++],g=t[_++];break;case s.A:var b=t[_++],M=t[_++],S=t[_++],A=t[_++],C=t[_++],T=t[_++],k=(t[_++],1-t[_++]),L=Math.cos(C)*S+b,D=Math.sin(C)*A+M;_>1?f+=p(m,g,L,D,l,d):(y=L,x=D);var P=(l-b)*A/S+b;if(o){if(h.containStroke(b,M,A,C,C+T,k,i,P,d))return!0}else f+=a(b,M,A,C,C+T,k,P,d);m=Math.cos(C+T)*S+b,g=Math.sin(C+T)*A+M;break;case s.R:y=m=t[_++],x=g=t[_++];var I=t[_++],z=t[_++],L=y+I,D=x+z;if(o){if(v(y,x,L,x,i,l,d)||v(L,x,L,D,i,l,d)||v(L,D,y,D,i,l,d)||v(y,D,L,D,i,l,d))return!0}else f+=p(L,x,L,D,l,d),f+=p(y,D,y,x,l,d);break;case s.Z:if(o){if(v(m,g,y,x,i,l,d))return!0}else if(f+=p(m,g,y,x,l,d),0!==f)return!0;m=y,g=x}}return o||e(g,x)||(f+=p(m,g,y,x,l,d)||0),0!==f}var s=t("../core/PathProxy").CMD,l=t("./line"),u=t("./cubic"),c=t("./quadratic"),h=t("./arc"),d=t("./util").normalizeRadian,f=t("../core/curve"),p=t("./windingLine"),v=l.containStroke,m=2*Math.PI,g=1e-4,y=[-1,-1,-1],x=[-1,-1];return{contain:function(t,e,i){return o(t,0,!1,e,i)},containStroke:function(t,e,i,n){return o(t,e,!0,i,n)}}}),e(li,[Qr,"./Displayable",ar,"../core/PathProxy","../contain/path","./Gradient"],function(t){function e(t){var e=t.fill;return null!=e&&"none"!==e}function i(t){var e=t[_r];return null!=e&&"none"!==e&&t[wr]>0}function n(t){r.call(this,t),this.path=new o}var r=t("./Displayable"),a=t(ar),o=t("../core/PathProxy"),s=t("../contain/path"),l=t("./Gradient"),u=Math.abs;return n[Jr]={constructor:n,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t){t.save();var n=this.style,r=this.path,a=i(n),o=e(n);this.__dirtyPath&&(o&&n.fill instanceof l&&n.fill.updateCanvasGradient(this,t),a&&n[_r]instanceof l&&n[_r].updateCanvasGradient(this,t)),n.bind(t,this),this.setTransform(t);var s=n.lineDash,u=n.lineDashOffset,c=!!t.setLineDash;this.__dirtyPath||s&&!c&&a?(r=this.path[fi](t),s&&!c&&(r.setLineDash(s),r.setLineDashOffset(u)),this[si](r,this.shape),this.__dirtyPath=!1):(t[fi](),this.path.rebuildPath(t)),o&&r.fill(t),s&&c&&(t.setLineDash(s),t.lineDashOffset=u),a&&r[_r](t),null!=n.text&&this.drawRectText(t,this[Jn]()),t[oi]()},buildPath:function(t,e){},getBoundingRect:function(){var t=this._rect,n=this.style;if(!t){var r=this.path;this.__dirtyPath&&(r[fi](),this[si](r,this.shape)),t=r[Jn]()}if(i(n)&&(this[Ii]||!this._rect)){var a=this._rectWithStroke||(this._rectWithStroke=t.clone());a.copy(t);var o=n[wr],s=n.strokeNoScale?this.getLineScale():1;return e(n)||(o=Math.max(o,this.strokeContainThreshold)),s>1e-10&&(a.width+=o/s,a[ur]+=o/s,a.x-=o/s/2,a.y-=o/s/2),a}return this._rect=t,t},contain:function(t,n){var r=this[Fi](t,n),a=this[Jn](),o=this.style;if(t=r[0],n=r[1],a[vi](t,n)){var l=this.path.data;if(i(o)){var u=o[wr],c=o.strokeNoScale?this.getLineScale():1;if(c>1e-10&&(e(o)||(u=Math.max(u,this.strokeContainThreshold)),s.containStroke(l,u/c,t,n)))return!0}if(e(o))return s[vi](l,t,n)}return!1},dirty:function(t){0===arguments[jr]&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this[Ii]=!0,this.__zr&&this.__zr[zi](),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this[Oi]("shape",t)},attrKV:function(t,e){"shape"===t?this[ai](e):r[Jr].attrKV.call(this,t,e)},setShape:function(t,e){var i=this.shape;if(i){if(a[Ln](t))for(var n in t)i[n]=t[n];else i[t]=e;this.dirty(!0)}return this},getLineScale:function(){var t=this[Xi];return t&&u(t[0]-1)>1e-10&&u(t[3]-1)>1e-10?Math.sqrt(u(t[0]*t[3]-t[2]*t[1])):1}},n[Cr]=function(t){var e=function(e){n.call(this,e),t.style&&this.style.extendFrom(t.style,!1);var i=t.shape;if(i){this.shape=this.shape||{};var r=this.shape;for(var a in i)!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&(r[a]=i[a])}t.init&&t.init.call(this,e)};a[Ar](e,n);for(var i in t)"style"!==i&&"shape"!==i&&(e[Jr][i]=t[i]);return e},a[Ar](n,r),n}),e("zrender/tool/transformPath",[Qr,"../core/PathProxy","../core/vector"],function(t){function e(t,e){var n,l,u,c,h,d=t.data,f=i.M,p=i.C,v=i.L,m=i.R,g=i.A,y=i.Q;for(u=0,c=0;u<d[jr];){switch(n=d[u++],c=u,l=0,n){case f:l=1;break;case v:l=1;break;case p:l=3;break;case y:l=2;break;case g:var x=e[4],_=e[5],w=o(e[0]*e[0]+e[1]*e[1]),b=o(e[2]*e[2]+e[3]*e[3]),M=s(-e[1]/b,e[0]/w);d[u+7];d[u++]+=x,d[u++]+=_,d[u++]*=w,d[u++]*=b,d[u++]+=M,d[u++]+=M,u+=2,c=u;break;case m:S[0]=d[u++],S[1]=d[u++],r(S,S,e),d[c++]=S[0],d[c++]=S[1],S[0]+=d[u++],S[1]+=d[u++],r(S,S,e),d[c++]=S[0],d[c++]=S[1]}for(h=0;l>h;h++){var S=a[h];S[0]=d[u++],S[1]=d[u++],r(S,S,e),d[c++]=S[0],d[c++]=S[1]}}}var i=t("../core/PathProxy").CMD,n=t("../core/vector"),r=n[cr],a=[[],[],[]],o=Math.sqrt,s=Math.atan2;return e}),e("zrender/tool/path",[Qr,"../graphic/Path","../core/PathProxy","./transformPath","../core/matrix"],function(t){function e(t,e,i,n,r,a,o,s,l,f,m){var g=l*(d/180),y=h(g)*(t-i)/2+c(g)*(e-n)/2,x=-1*c(g)*(t-i)/2+h(g)*(e-n)/2,_=y*y/(o*o)+x*x/(s*s);_>1&&(o*=u(_),s*=u(_));var w=(r===a?-1:1)*u((o*o*(s*s)-o*o*(x*x)-s*s*(y*y))/(o*o*(x*x)+s*s*(y*y)))||0,b=w*o*x/s,M=w*-s*y/o,S=(t+i)/2+h(g)*b-c(g)*M,A=(e+n)/2+c(g)*b+h(g)*M,C=v([1,0],[(y-b)/o,(x-M)/s]),T=[(y-b)/o,(x-M)/s],k=[(-1*y-b)/o,(-1*x-M)/s],L=v(T,k);p(T,k)<=-1&&(L=d),p(T,k)>=1&&(L=0),0===a&&L>0&&(L-=2*d),1===a&&0>L&&(L+=2*d),m.addData(f,S,A,o,s,C,L,g,a)}function i(t){if(!t)return[];var i,n=t[Nr](/-/g," -")[Nr](/  /g," ")[Nr](/ /g,",")[Nr](/,,/g,",");for(i=0;i<l[jr];i++)n=n[Nr](new RegExp(l[i],"g"),"|"+l[i]);var r,o=n.split("|"),s=0,u=0,c=new a,h=a.CMD;for(i=1;i<o[jr];i++){var d,f=o[i],p=f.charAt(0),v=0,m=f.slice(1)[Nr](/e,-/g,"e-").split(",");m[jr]>0&&""===m[0]&&m.shift();for(var g=0;g<m[jr];g++)m[g]=parseFloat(m[g]);for(;v<m[jr]&&!isNaN(m[v])&&!isNaN(m[0]);){var y,x,_,w,b,M,S,A=s,C=u;switch(p){case"l":s+=m[v++],u+=m[v++],d=h.L,c.addData(d,s,u);break;case"L":s=m[v++],u=m[v++],d=h.L,c.addData(d,s,u);break;case"m":s+=m[v++],u+=m[v++],d=h.M,c.addData(d,s,u),p="l";break;case"M":s=m[v++],u=m[v++],d=h.M,c.addData(d,s,u),p="L";break;case"h":s+=m[v++],d=h.L,c.addData(d,s,u);break;case"H":s=m[v++],d=h.L,c.addData(d,s,u);break;case"v":u+=m[v++],d=h.L,c.addData(d,s,u);break;case"V":u=m[v++],d=h.L,c.addData(d,s,u);break;case"C":d=h.C,c.addData(d,m[v++],m[v++],m[v++],m[v++],m[v++],m[v++]),s=m[v-2],u=m[v-1];break;case"c":d=h.C,c.addData(d,m[v++]+s,m[v++]+u,m[v++]+s,m[v++]+u,m[v++]+s,m[v++]+u),s+=m[v-2],u+=m[v-1];break;case"S":y=s,x=u;var T=c.len(),k=c.data;r===h.C&&(y+=s-k[T-4],x+=u-k[T-3]),d=h.C,A=m[v++],C=m[v++],s=m[v++],u=m[v++],c.addData(d,y,x,A,C,s,u);break;case"s":y=s,x=u;var T=c.len(),k=c.data;r===h.C&&(y+=s-k[T-4],x+=u-k[T-3]),d=h.C,A=s+m[v++],C=u+m[v++],s+=m[v++],u+=m[v++],c.addData(d,y,x,A,C,s,u);break;case"Q":A=m[v++],C=m[v++],s=m[v++],u=m[v++],d=h.Q,c.addData(d,A,C,s,u);break;case"q":A=m[v++]+s,C=m[v++]+u,s+=m[v++],u+=m[v++],d=h.Q,c.addData(d,A,C,s,u);break;case"T":y=s,x=u;var T=c.len(),k=c.data;r===h.Q&&(y+=s-k[T-4],x+=u-k[T-3]),s=m[v++],u=m[v++],d=h.Q,c.addData(d,y,x,s,u);break;case"t":y=s,x=u;var T=c.len(),k=c.data;r===h.Q&&(y+=s-k[T-4],x+=u-k[T-3]),s+=m[v++],u+=m[v++],d=h.Q,c.addData(d,y,x,s,u);break;case"A":_=m[v++],w=m[v++],b=m[v++],M=m[v++],S=m[v++],A=s,C=u,s=m[v++],u=m[v++],d=h.A,e(A,C,s,u,M,S,_,w,b,d,c);break;case"a":_=m[v++],w=m[v++],b=m[v++],M=m[v++],S=m[v++],A=s,C=u,s+=m[v++],u+=m[v++],d=h.A,e(A,C,s,u,M,S,_,w,b,d,c)}}("z"===p||"Z"===p)&&(d=h.Z,c.addData(d)),r=d}return c.toStatic(),c}function n(t,e){var n,r=i(t);return e=e||{},e[si]=function(t){t[ri](r.data),n&&o(t,n);var e=t[Wr]();e&&t.rebuildPath(e)},e[cr]=function(t){n||(n=s[lr]()),s.mul(n,t,n)},e}var r=t("../graphic/Path"),a=t("../core/PathProxy"),o=t("./transformPath"),s=t("../core/matrix"),l=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],u=Math.sqrt,c=Math.sin,h=Math.cos,d=Math.PI,f=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},p=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(f(t)*f(e))},v=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(p(t,e))};return{createFromString:function(t,e){return new r(n(t,e))},extendFromString:function(t,e){return r[Cr](n(t,e))},mergePath:function(t,e){var i,n,a=[],o=t[jr];for(n=0;o>n;n++)i=t[n],i[Ii]&&i[si](i.path,i.shape),a.push(i.path);var s=new r(e);return s[si]=function(t){t.appendPath(a);var e=t[Wr]();e&&t.rebuildPath(e)},s}}}),e("zrender/graphic/helper/roundRect",[Qr],function(t){return{buildPath:function(t,e){var i,n,r,a,o=e.x,s=e.y,l=e.width,u=e[ur],c=e.r;0>l&&(o+=l,l=-l),0>u&&(s+=u,u=-u),typeof c===Zr?i=n=r=a=c:c instanceof Array?1===c[jr]?i=n=r=a=c[0]:2===c[jr]?(i=r=c[0],n=a=c[1]):3===c[jr]?(i=c[0],n=a=c[1],r=c[2]):(i=c[0],n=c[1],r=c[2],a=c[3]):i=n=r=a=0;var h;i+n>l&&(h=i+n,i*=l/h,n*=l/h),r+a>l&&(h=r+a,r*=l/h,a*=l/h),n+r>u&&(h=n+r,n*=u/h,r*=u/h),i+a>u&&(h=i+a,i*=u/h,a*=u/h),t[di](o+i,s),t[hi](o+l-n,s),0!==n&&t.quadraticCurveTo(o+l,s,o+l,s+n),t[hi](o+l,s+u-r),0!==r&&t.quadraticCurveTo(o+l,s+u,o+l-r,s+u),t[hi](o+a,s+u),0!==a&&t.quadraticCurveTo(o,s+u,o,s+u-a),t[hi](o,s+i),0!==i&&t.quadraticCurveTo(o,s,o+i,s)}}}),e("zrender/core/LRU",[Qr],function(t){var e=function(){this.head=null,this.tail=null,this._len=0},i=e[Jr];i.insert=function(t){var e=new n(t);return this.insertEntry(e),e},i.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,this.tail=t):this.head=this.tail=t,this._len++},i[Pi]=function(t){var e=t.prev,i=t.next;e?e.next=i:this.head=i,i?i.prev=e:this.tail=e,t.next=t.prev=null,this._len--},i.len=function(){return this._len};var n=function(t){this.value=t,this.next,this.prev},r=function(t){this._list=new e,this._map={},this._maxSize=t||10},a=r[Jr];return a.put=function(t,e){var i=this._list,n=this._map;if(null==n[t]){var r=i.len();if(r>=this._maxSize&&r>0){var a=i.head;i[Pi](a),delete n[a.key]}var o=i.insert(e);o.key=t,n[t]=o}},a.get=function(t){var e=this._map[t],i=this._list;return null!=e?(e!==i.tail&&(i[Pi](e),i.insertEntry(e)),e.value):void 0},a.clear=function(){this._list.clear(),this._map={}},r}),e("zrender/graphic/Image",[Qr,"./Displayable",rr,ar,"./helper/roundRect","../core/LRU"],function(t){var e=t("./Displayable"),i=t(rr),n=t(ar),r=t("./helper/roundRect"),a=t("../core/LRU"),o=new a(50),s=function(t){e.call(this,t)};return s[Jr]={constructor:s,type:"image",brush:function(t){var e,i=this.style,n=i.image;if(e=typeof n===Fr?this._image:n,!e&&n){var a=o.get(n);if(!a)return e=new Image,e.onload=function(){e.onload=null;for(var t=0;t<a.pending[jr];t++)a.pending[t].dirty()},a={image:e,pending:[this]},e.src=n,o.put(n,a),void(this._image=e);if(e=a.image,this._image=e,!e.width||!e[ur])return void a.pending.push(this)}if(e){var s=i.width||e.width,l=i[ur]||e[ur],u=i.x||0,c=i.y||0;if(!e.width||!e[ur])return;if(t.save(),i.bind(t),this.setTransform(t),i.r&&(t[fi](),r[si](t,i),t.clip()),i.sWidth&&i.sHeight){var h=i.sx||0,d=i.sy||0;t.drawImage(e,h,d,i.sWidth,i.sHeight,u,c,s,l)}else if(i.sx&&i.sy){var h=i.sx,d=i.sy,f=s-h,p=l-d;t.drawImage(e,h,d,f,p,u,c,s,l)}else t.drawImage(e,u,c,s,l);null==i.width&&(i.width=s),null==i[ur]&&(i[ur]=l),null!=i.text&&this.drawRectText(t,this[Jn]()),t[oi]()}},getBoundingRect:function(){var t=this.style;return this._rect||(this._rect=new i(t.x||0,t.y||0,t.width||0,t[ur]||0)),this._rect}},n[Ar](s,e),s}),e("zrender/graphic/Text",[Qr,"./Displayable",ar,"../contain/text"],function(t){var e=t("./Displayable"),i=t(ar),n=t("../contain/text"),r=function(t){e.call(this,t)};return r[Jr]={constructor:r,type:"text",brush:function(t){var e=this.style,i=e.x||0,r=e.y||0,a=e.text,o=e.fill,s=e[_r];if(null!=a&&(a+=""),a){t.save(),this.style.bind(t),this.setTransform(t),o&&(t.fillStyle=o),s&&(t.strokeStyle=s),t.font=e.textFont||e.font,t[gi]=e[gi],t[mi]=e[mi];for(var l=n.measureText("国",t.font).width,u=a.split("\n"),c=0;c<u[jr];c++)o&&t.fillText(u[c],i,r),s&&t.strokeText(u[c],i,r),r+=l;t[oi]()}},getBoundingRect:function(){if(!this._rect){var t=this.style,e=n[Jn](t.text+"",t.textFont,t[gi],t[mi]);e.x+=t.x||0,e.y+=t.y||0,this._rect=e}return this._rect}},i[Ar](r,e),r}),e("zrender/graphic/shape/Circle",[Qr,"../Path"],function(t){return t("../Path")[Cr]({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e){t[di](e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}})}),e("zrender/graphic/shape/Sector",[Qr,"../Path"],function(t){return t("../Path")[Cr]({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},buildPath:function(t,e){var i=e.cx,n=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e[ni],s=e[ii],l=e[ei],u=Math.cos(o),c=Math.sin(o);t[di](u*r+i,c*r+n),t[hi](u*a+i,c*a+n),t.arc(i,n,a,o,s,!l),t[hi](Math.cos(s)*r+i,Math.sin(s)*r+n),0!==r&&t.arc(i,n,r,s,o,l),t[ui]()}})}),e("zrender/graphic/helper/smoothSpline",[Qr,"../../core/vector"],function(t){function e(t,e,i,n,r,a,o){var s=.5*(i-t),l=.5*(n-e);return(2*(e-i)+s+l)*o+(-3*(e-i)-2*s-l)*a+s*r+e}var i=t("../../core/vector");return function(t,n){for(var r=t[jr],a=[],o=0,s=1;r>s;s++)o+=i[fr](t[s-1],t[s]);var l=o/2;l=r>l?r:l;for(var s=0;l>s;s++){var u,c,h,d=s/(l-1)*(n?r:r-1),f=Math.floor(d),p=d-f,v=t[f%r];n?(u=t[(f-1+r)%r],c=t[(f+1)%r],h=t[(f+2)%r]):(u=t[0===f?f:f-1],c=t[f>r-2?r-1:f+1],h=t[f>r-3?r-1:f+2]);var m=p*p,g=p*m;a.push([e(u[0],v[0],c[0],h[0],p,m,g),e(u[1],v[1],c[1],h[1],p,m,g)])}return a}}),e("zrender/graphic/helper/smoothBezier",[Qr,"../../core/vector"],function(t){var e=t("../../core/vector"),i=e.min,n=e.max,r=e.scale,a=e[fr],o=e.add;return function(t,s,l,u){var c,h,d,f,p=[],v=[],m=[],g=[];if(u){d=[1/0,1/0],f=[-(1/0),-(1/0)];for(var y=0,x=t[jr];x>y;y++)i(d,d,t[y]),n(f,f,t[y]);i(d,d,u[0]),n(f,f,u[1])}for(var y=0,x=t[jr];x>y;y++){var _=t[y];if(l)c=t[y?y-1:x-1],h=t[(y+1)%x];else{if(0===y||y===x-1){p.push(e.clone(t[y]));continue}c=t[y-1],h=t[y+1]}e.sub(v,h,c),r(v,v,s);var w=a(_,c),b=a(_,h),M=w+b;0!==M&&(w/=M,b/=M),r(m,v,-w),r(g,v,b);var S=o([],_,m),A=o([],_,g);u&&(n(S,S,d),i(S,S,f),n(A,A,d),i(A,A,f)),p.push(S),p.push(A)}return l&&p.push(p.shift()),p}}),e("zrender/graphic/helper/poly",[Qr,"./smoothSpline","./smoothBezier"],function(t){var e=t("./smoothSpline"),i=t("./smoothBezier");return{buildPath:function(t,n,r){var a=n[ti],o=n.smooth;if(a&&a[jr]>=2){if(o&&"spline"!==o){var s=i(a,o,r,n.smoothConstraint);t[di](a[0][0],a[0][1]);for(var l=a[jr],u=0;(r?l:l-1)>u;u++){var c=s[2*u],h=s[2*u+1],d=a[(u+1)%l];t[ci](c[0],c[1],h[0],h[1],d[0],d[1])}}else{"spline"===o&&(a=e(a,r)),t[di](a[0][0],a[0][1]);for(var u=1,f=a[jr];f>u;u++)t[hi](a[u][0],a[u][1])}r&&t[ui]()}}}}),e("zrender/graphic/shape/Polygon",[Qr,"../helper/poly","../Path"],function(t){var e=t("../helper/poly");return t("../Path")[Cr]({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,i){e[si](t,i,!0)}})}),e("zrender/graphic/shape/Polyline",[Qr,"../helper/poly","../Path"],function(t){var e=t("../helper/poly");return t("../Path")[Cr]({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,i){
e[si](t,i,!1)}})}),e("zrender/graphic/shape/Rect",[Qr,"../helper/roundRect","../Path"],function(t){var e=t("../helper/roundRect");return t("../Path")[Cr]({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,i){var n=i.x,r=i.y,a=i.width,o=i[ur];i.r?e[si](t,i):t.rect(n,r,a,o),t[ui]()}})}),e("zrender/graphic/shape/Line",[Qr,"../Path"],function(t){return t("../Path")[Cr]({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.x1,n=e.y1,r=e.x2,a=e.y2,o=e.percent;0!==o&&(t[di](i,n),1>o&&(r=i*(1-o)+r*o,a=n*(1-o)+a*o),t[hi](r,a))},pointAt:function(t){var e=this.shape;return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}})}),e("zrender/graphic/shape/BezierCurve",[Qr,"../../core/curve","../Path"],function(t){var e=t("../../core/curve"),i=e.quadraticSubdivide,n=e.cubicSubdivide,r=e[pi],a=e.cubicAt,o=[];return t("../Path")[Cr]({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var r=e.x1,a=e.y1,s=e.x2,l=e.y2,u=e.cpx1,c=e.cpy1,h=e.cpx2,d=e.cpy2,f=e.percent;0!==f&&(t[di](r,a),null==h||null==d?(1>f&&(i(r,u,s,f,o),u=o[1],s=o[2],i(a,c,l,f,o),c=o[1],l=o[2]),t.quadraticCurveTo(u,c,s,l)):(1>f&&(n(r,u,h,s,f,o),u=o[1],h=o[2],s=o[3],n(a,c,d,l,f,o),c=o[1],d=o[2],l=o[3]),t[ci](u,c,h,d,s,l)))},pointAt:function(t){var e=this.shape,i=e.cpx2,n=e.cpy2;return null===i||null===n?[r(e.x1,e.cpx1,e.x2,t),r(e.y1,e.cpy1,e.y2,t)]:[a(e.x1,e.cpx1,e.cpx1,e.x2,t),a(e.y1,e.cpy1,e.cpy1,e.y2,t)]}})}),e("zrender/graphic/shape/Arc",[Qr,"../Path"],function(t){return t("../Path")[Cr]({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var i=e.cx,n=e.cy,r=Math.max(e.r,0),a=e[ni],o=e[ii],s=e[ei],l=Math.cos(a),u=Math.sin(a);t[di](l*r+i,u*r+n),t.arc(i,n,r,a,o,!s)}})}),e("zrender/graphic/LinearGradient",[Qr,ar,"./Gradient"],function(t){var e=t(ar),i=t("./Gradient"),n=function(t,e,n,r,a){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==r?0:r,i.call(this,a)};return n[Jr]={constructor:n,type:"linear",updateCanvasGradient:function(t,e){for(var i=t[Jn](),n=this.x*i.width+i.x,r=this.x2*i.width+i.x,a=this.y*i[ur]+i.y,o=this.y2*i[ur]+i.y,s=e.createLinearGradient(n,a,r,o),l=this.colorStops,u=0;u<l[jr];u++)s.addColorStop(l[u][Qe],l[u].color);this.canvasGradient=s}},e[Ar](n,i),n}),e("zrender/graphic/RadialGradient",[Qr,ar,"./Gradient"],function(t){var e=t(ar),i=t("./Gradient"),n=function(t,e,n,r){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,i.call(this,r)};return n[Jr]={constructor:n,type:"radial",updateCanvasGradient:function(t,e){for(var i=t[Jn](),n=i.width,r=i[ur],a=Math.min(n,r),o=this.x*n+i.x,s=this.y*r+i.y,l=this.r*a,u=e.createRadialGradient(o,s,0,o,s,l),c=this.colorStops,h=0;h<c[jr];h++)u.addColorStop(c[h][Qe],c[h].color);this.canvasGradient=u}},e[Ar](n,i),n}),e("echarts/util/graphic",[Qr,Kr,"zrender/tool/path",li,Gi,dr,vr,"zrender/graphic/Gradient","zrender/container/Group","zrender/graphic/Image","zrender/graphic/Text","zrender/graphic/shape/Circle","zrender/graphic/shape/Sector","zrender/graphic/shape/Polygon","zrender/graphic/shape/Polyline","zrender/graphic/shape/Rect","zrender/graphic/shape/Line","zrender/graphic/shape/BezierCurve","zrender/graphic/shape/Arc","zrender/graphic/LinearGradient","zrender/graphic/RadialGradient",hr],function(t){function e(t){if(!t.__isHover){if(t.__hoverStlDirty){var e=t.style[_r],i=t.style.fill,n=t.__hoverStl;n.fill=n.fill||(i instanceof y?i:v.lift(i,-.1)),n[_r]=n[_r]||(e instanceof y?e:v.lift(e,-.1));var r={};for(var a in n)n.hasOwnProperty(a)&&(r[a]=t.style[a]);t.__normalStl=r,t.__hoverStlDirty=!1}t[Ue](t.__hoverStl),t.z2+=1,t.__isHover=!0}}function i(t){if(t.__isHover){var e=t.__normalStl;e&&t[Ue](e),t.z2-=1,t.__isHover=!1}}function n(t){"group"===t.type?t[ki](function(t){"group"!==t.type&&e(t)}):e(t)}function r(t){"group"===t.type?t[ki](function(t){"group"!==t.type&&i(t)}):i(t)}function a(t,e){t.__hoverStl=t[qe]||e,t.__hoverStlDirty=!0}function o(){!this.__isEmphasis&&n(this)}function s(){!this.__isEmphasis&&r(this)}function l(){this.__isEmphasis=!0,n(this)}function u(){this.__isEmphasis=!1,r(this)}function c(t,e,i,n,r){var a=t?"Update":"",o=n&&n[br]("animationDuration"+a),s=n&&n[br]("animationEasing"+a);n&&n[br](Bi)?e[Be](i,o,s,r):(e.attr(i),r&&r())}var h=t(Kr),d=t("zrender/tool/path"),f=Math.round,p=t(li),v=t(Gi),m=t(dr),g=t(vr),y=t("zrender/graphic/Gradient"),x={};return x.Group=t("zrender/container/Group"),x.Image=t("zrender/graphic/Image"),x.Text=t("zrender/graphic/Text"),x[Je]=t("zrender/graphic/shape/Circle"),x[Ke]=t("zrender/graphic/shape/Sector"),x[$e]=t("zrender/graphic/shape/Polygon"),x[Ye]=t("zrender/graphic/shape/Polyline"),x.Rect=t("zrender/graphic/shape/Rect"),x.Line=t("zrender/graphic/shape/Line"),x.BezierCurve=t("zrender/graphic/shape/BezierCurve"),x.Arc=t("zrender/graphic/shape/Arc"),x.LinearGradient=t("zrender/graphic/LinearGradient"),x.RadialGradient=t("zrender/graphic/RadialGradient"),x.BoundingRect=t(hr),x[Xe]=function(t){return p[Cr](t)},x.extendPath=function(t,e){return d.extendFromString(t,e)},x.makePath=function(t,e,i,n){var r=d.createFromString(t,e),a=r[Jn]();if(i){var o=a.width/a[ur];if(n===Vr){var s,l=i[ur]*o;l<=i.width?s=i[ur]:(l=i.width,s=l/o);var u=i.x+i.width/2,c=i.y+i[ur]/2;i.x=u-l/2,i.y=c-s/2,i.width=l,i[ur]=s}this.resizePath(r,i)}return r},x.mergePath=d.mergePath,x.resizePath=function(t,e){if(t[cr]){var i=t[Jn](),n=i.calculateTransform(e);t[cr](n)}},x.subPixelOptimizeLine=function(t){var e=x.subPixelOptimize,i=t.shape,n=t.style[wr];return f(2*i.x1)===f(2*i.x2)&&(i.x1=i.x2=e(i.x1,n,!0)),f(2*i.y1)===f(2*i.y2)&&(i.y1=i.y2=e(i.y1,n,!0)),t},x[je]=function(t){var e=x.subPixelOptimize,i=t.shape,n=t.style[wr],r=i.x,a=i.y,o=i.width,s=i[ur];return i.x=e(i.x,n,!0),i.y=e(i.y,n,!0),i.width=Math.max(e(r+o,n,!1)-i.x,0===o?0:1),i[ur]=Math.max(e(a+s,n,!1)-i.y,0===s?0:1),t},x.subPixelOptimize=function(t,e,i){var n=f(2*t);return(n+f(e))%2===0?n/2:(n+(i?1:-1))/2},x[We]=function(t,e){e=e||{},"group"===t.type?t[ki](function(t){"group"!==t.type&&a(t,e)}):a(t,e),t.on(He,o).on(Fe,s),t.on(Zn,l).on(Gn,u)},x[Ze]=function(t,e,i){var n=e[br](Cn)||nr,r=n[Hr](nr)>=0?"white":i,a=e[tr](Qn);h[Cr](t,{textDistance:e[br](fr)||5,textFont:a[Kn](),textPosition:n,textFill:a[Ge]()||r})},x[Ne]=h.curry(c,!0),x[Ee]=h.curry(c,!1),x.getTransform=function(t,e){for(var i=m.identity([]);t&&t!==e;)m.mul(i,t[qi](),i),t=t[Ui];return i},x[cr]=function(t,e,i){return i&&(e=m.invert([],e)),g[cr]([],t,e)},x.transformDirection=function(t,e,i){var n=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-n:"right"===t?n:0,"top"===t?-r:t===Ir?r:0];return a=x[cr](a,e,i),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?Ir:"top"},x}),e(Oe,[],function(){function t(t){var e={},i={},n=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=t.match(/(iPad).*OS\s([\d_]+)/),o=t.match(/(iPod)(.*OS\s([\d_]+))?/),s=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),l=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),u=l&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),h=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),v=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),g=t.match(/Firefox\/([\d.]+)/),y=n&&t.match(/Mobile\//)&&!m,x=t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)&&!m,_=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),w=t.match(/Edge\/([\d.]+)/);return(i.webkit=!!n)&&(i.version=n[1]),r&&(e.android=!0,e.version=r[2]),s&&!o&&(e.ios=e.iphone=!0,e.version=s[2][Nr](/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2][Nr](/_/g,".")),o&&(e.ios=e.ipod=!0,e.version=o[3]?o[3][Nr](/_/g,"."):null),l&&(e.webos=!0,e.version=l[2]),u&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),f&&(e.bb10=!0,e.version=f[2]),p&&(e.rimtabletos=!0,e.version=p[2]),v&&(i.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),h&&(i.silk=!0,i.version=h[1]),!h&&e.android&&t.match(/Kindle Fire/)&&(i.silk=!0),m&&(i.chrome=!0,i.version=m[1]),g&&(i.firefox=!0,i.version=g[1]),_&&(i.ie=!0,i.version=_[1]),y&&(t.match(/Safari/)||e.ios)&&(i.safari=!0),x&&(i.webview=!0),_&&(i.ie=!0,i.version=_[1]),w&&(i.edge=!0,i.version=w[1]),e.tablet=!!(a||v||r&&!t.match(/Mobile/)||g&&t.match(/Tablet/)||_&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||s||l||d||f||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||g&&t.match(/Mobile/)||_&&t.match(/Touch/))),{browser:i,os:e,node:!1,canvasSupported:document[Ur](qr)[Wr]?!0:!1,touchEventsSupported:"ontouchstart"in window&&!i.ie&&!i.edge,pointerEventsSupported:"onpointerdown"in window&&(i.edge||i.ie&&i.version>=10)}}var e={};return e=typeof navigator===pr?{browser:{},os:{},node:!0,canvasSupported:!0}:t(navigator.userAgent)}),e(Re,[Qr,"../mixin/Eventful"],function(t){function e(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}function i(t,i){if(i=i||window.event,null!=i.zrX)return i;var n=i.type,r=n&&n[Hr]("touch")>=0;if(r){var a="touchend"!=n?i.targetTouches[0]:i.changedTouches[0];if(a){var o=e(t);i.zrX=a.clientX-o.left,i.zrY=a.clientY-o.top}}else{var s=0,l=0;i.pageX||i.pageY?(s=i.pageX,l=i.pageY):(s=i.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,l=i.clientY+document.body.scrollTop+document.documentElement.scrollTop);var u=e(t),c=u.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||0),h=u.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0);i.zrX=s-h,i.zrY=l-c,i.zrDelta=i.wheelDelta?i.wheelDelta/120:-(i.detail||0)/3}return i}function n(t,e,i){o?t.addEventListener(e,i):t.attachEvent("on"+e,i)}function r(t,e,i){o?t.removeEventListener(e,i):t.detachEvent("on"+e,i)}var a=t("../mixin/Eventful"),o=typeof window!==pr&&!!window.addEventListener,s=o?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0};return{normalizeEvent:i,addEventListener:n,removeEventListener:r,stop:s,Dispatcher:a}}),e("zrender/mixin/Draggable",[Qr],function(t){function e(){this.on(Ve,this._dragStart,this),this.on(ze,this._drag,this),this.on(Ie,this._dragEnd,this),this.on("globalout",this._dragEnd,this)}return e[Jr]={constructor:e,_dragStart:function(t){var e=t[Zi];e&&e[Ri]&&(this._draggingTarget=e,e.dragging=!0,this._x=t[Pe],this._y=t[De],this._dispatchProxy(e,"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var i=t[Pe],n=t[De],r=i-this._x,a=n-this._y;this._x=i,this._y=n,e.drift(r,a,t),this._dispatchProxy(e,"drag",t.event);var o=this._findHover(i,n,e),s=this._dropTarget;this._dropTarget=o,e!==o&&(s&&o!==s&&this._dispatchProxy(s,"dragleave",t.event),o&&o!==s&&this._dispatchProxy(o,"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this._dispatchProxy(e,"dragend",t.event),this._dropTarget&&this._dispatchProxy(this._dropTarget,"drop",t.event),this._draggingTarget=null,this._dropTarget=null}},e}),e("zrender/core/GestureMgr",[Qr],function(t){function e(t){var e=t[1][0]-t[0][0],i=t[1][1]-t[0][1];return Math.sqrt(e*e+i*i)}function i(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}var n=function(){this._track=[]};n[Jr]={constructor:n,recognize:function(t,e){return this._doTrack(t,e),this._recognize(t)},clear:function(){return this._track[jr]=0,this},_doTrack:function(t,e){var i=t.touches;if(i){for(var n={points:[],touches:[],target:e,event:t},r=0,a=i[jr];a>r;r++){var o=i[r];n[ti].push([o.clientX,o.clientY]),n.touches.push(o)}this._track.push(n)}},_recognize:function(t){for(var e in r)if(r.hasOwnProperty(e)){var i=r[e](this._track,t);if(i)return i}}};var r={pinch:function(t,n){var r=t[jr];if(r){var a=(t[r-1]||{})[ti],o=(t[r-2]||{})[ti]||a;if(o&&o[jr]>1&&a&&a[jr]>1){var s=e(a)/e(o);!isFinite(s)&&(s=1),n.pinchScale=s;var l=i(a);return n.pinchX=l[0],n.pinchY=l[1],{type:"pinch",target:t[0][Zi],event:n}}}}};return n}),e("zrender/Handler",[Qr,"./core/env","./core/event","./core/util","./mixin/Draggable","./core/GestureMgr","./mixin/Eventful"],function(t){function e(t,e,i){return{type:t,event:i,target:e,cancelBubble:!1,offsetX:i.zrX,offsetY:i.zrY,gestureEvent:i.gestureEvent,pinchX:i.pinchX,pinchY:i.pinchY,pinchScale:i.pinchScale,wheelDelta:i.zrDelta}}function i(t,e,i){var n=t._gestureMgr;"start"===i&&n.clear();var r=n.recognize(e,t._findHover(e.zrX,e.zrY,null));if("end"===i&&n.clear(),r){var a=r.type;e.gestureEvent=a,t._dispatchProxy(r[Zi],a,r.event)}}function n(t){function e(t,e){return function(){return e._touching?void 0:t.apply(e,arguments)}}for(var i=m[Gr](g),n=0;n<i[jr];n++){var r=i[n];t._handlers[r]=h.bind(b[r],t)}for(var n=0;n<v[jr];n++){var r=v[n];t._handlers[r]=e(b[r],t)}}function r(t,e,i){if(t[t.rectHover?"rectContain":vi](e,i)){for(var n=t[Ui];n;){if(n.clipPath&&!n.clipPath[vi](e,i))return!1;n=n[Ui]}return!0}return!1}function a(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}function o(){return!1}function s(){return u.touchEventsSupported}function l(t){return"mousewheel"===t&&u.firefox?"DOMMouseScroll":t}var u=t("./core/env"),c=t("./core/event"),h=t("./core/util"),d=t("./mixin/Draggable"),f=t("./core/GestureMgr"),p=t("./mixin/Eventful"),v=["click","dblclick","mousewheel",Fe];!o()&&v.push(Ie,Ve,ze);var m=["touchstart","touchend","touchmove"],g=["pointerdown","pointerup","pointermove"],y=300,x=c.addEventListener,_=c.removeEventListener,w=c.normalizeEvent,b={mousemove:function(t){t=w(this.root,t);var e=t.zrX,i=t.zrY,n=this._findHover(e,i,null),r=this._hovered;this._hovered=n,this.root.style.cursor=n?n.cursor:this._defaultCursorStyle,r&&n!==r&&r.__zr&&this._dispatchProxy(r,Fe,t),this._dispatchProxy(n,ze,t),n&&n!==r&&this._dispatchProxy(n,He,t)},mouseout:function(t){t=w(this.root,t);var e=t.toElement||t.relatedTarget;if(e!=this.root)for(;e&&9!=e.nodeType;){if(e===this.root)return;e=e[Le]}this._dispatchProxy(this._hovered,Fe,t),this[Mi]("globalout",{event:t})},touchstart:function(t){t=w(this.root,t),this._lastTouchMoment=new Date,i(this,t,"start"),b[ze].call(this,t),b[Ve].call(this,t),a(this)},touchmove:function(t){t=w(this.root,t),i(this,t,"change"),b[ze].call(this,t),a(this)},touchend:function(t){t=w(this.root,t),i(this,t,"end"),b[Ie].call(this,t),+new Date-this._lastTouchMoment<y&&b.click.call(this,t),a(this)}};h.each(["click",Ve,Ie,"mousewheel","dblclick"],function(t){b[t]=function(e){e=w(this.root,e);var i=this._findHover(e.zrX,e.zrY,null);this._dispatchProxy(i,t,e)}});var M=function(t,e,i){function r(e,i){h.each(e,function(e){x(t,l(e),i._handlers[e])},i)}p.call(this),this.root=t,this[ke]=e,this.painter=i,this._hovered,this._lastTouchMoment,this._lastX,this._lastY,this._defaultCursorStyle="default",this._gestureMgr=new f,this._handlers=[],this._touching=!1,this._touchTimer,n(this),o()?r(g,this):s()&&r(m,this),r(v,this),d.call(this)};return M[Jr]={constructor:M,resize:function(t){this._hovered=null},dispatch:function(t,e){var i=this._handlers[t];i&&i.call(this,e)},dispose:function(){for(var t=this.root,e=v[Gr](m),i=0;i<e[jr];i++){var n=e[i];_(t,l(n),this._handlers[n])}this.root=this[ke]=this.painter=null},setDefaultCursorStyle:function(t){this._defaultCursorStyle=t},_dispatchProxy:function(t,i,n){for(var r="on"+i,a=e(i,t,n),o=t;o&&(o[r]&&(a.cancelBubble=o[r].call(o,a)),o[Mi](i,a),o=o[Ui],!a.cancelBubble););a.cancelBubble||(this[Mi](i,a),this.painter&&this.painter.eachOtherLayer(function(t){typeof t[r]==Br&&t[r].call(t,a),t[Mi]&&t[Mi](i,a)}))},_findHover:function(t,e,i){for(var n=this[ke][Te](),a=n[jr]-1;a>=0;a--)if(!n[a][Ce]&&n[a]!==i&&r(n[a],t,e))return n[a]}},h.mixin(M,p),h.mixin(M,d),M}),e("zrender/Storage",[Qr,"./core/util","./container/Group"],function(t){function e(t,e){return t[Ae]===e[Ae]?t.z===e.z?t.z2===e.z2?t.__renderidx-e.__renderidx:t.z2-e.z2:t.z-e.z:t[Ae]-e[Ae]}var i=t("./core/util"),n=t("./container/Group"),r=function(){this._elements={},this._roots=[],this._displayList=[],this._displayListLen=0};return r[Jr]={constructor:r,getDisplayList:function(t){return t&&this.updateDisplayList(),this._displayList},updateDisplayList:function(){this._displayListLen=0;for(var t=this._roots,i=this._displayList,n=0,r=t[jr];r>n;n++){var a=t[n];this._updateAndAddDisplayable(a)}i[jr]=this._displayListLen;for(var n=0,r=i[jr];r>n;n++)i[n].__renderidx=n;i.sort(e)},_updateAndAddDisplayable:function(t,e){if(!t[Vi]){t.beforeUpdate(),t[Se](),t.afterUpdate();var i=t.clipPath;if(i&&(i[Ui]=t,i[ji](),e?(e=e.slice(),e.push(i)):e=[i]),"group"==t.type){for(var n=t._children,r=0;r<n[jr];r++){var a=n[r];a[Ii]=t[Ii]||a[Ii],this._updateAndAddDisplayable(a,e)}t[Ii]=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){this._elements[t.id]||(t instanceof n&&t.addChildrenToStorage(this),this[Di](t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots[jr];e++){var r=this._roots[e];r instanceof n&&r.delChildrenFromStorage(this)}return this._elements={},this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array)for(var e=0,a=t[jr];a>e;e++)this.delRoot(t[e]);else{var o;o=typeof t==Fr?this._elements[t]:t;var s=i[Hr](this._roots,o);s>=0&&(this[Li](o.id),this._roots[Ki](s,1),o instanceof n&&o.delChildrenFromStorage(this))}},addToMap:function(t){return t instanceof n&&(t.__storage=this),t.dirty(),this._elements[t.id]=t,this},get:function(t){return this._elements[t]},delFromMap:function(t){var e=this._elements,i=e[t];return i&&(delete e[t],i instanceof n&&(i.__storage=null)),this},dispose:function(){this._elements=this._renderList=this._roots=null}},r}),e("zrender/animation/Animation",[Qr,ar,"../core/event","./Animator"],function(t){var e=t(ar),i=t("../core/event").Dispatcher,n=typeof window!==pr&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)},r=t("./Animator"),a=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time=0,i.call(this)};return a[Jr]={constructor:a,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t[Bi]=this;for(var e=t.getClips(),i=0;i<e[jr];i++)this.addClip(e[i])},removeClip:function(t){var i=e[Hr](this._clips,t);i>=0&&this._clips[Ki](i,1)},removeAnimator:function(t){for(var e=t.getClips(),i=0;i<e[jr];i++)this.removeClip(e[i]);t[Bi]=null},_update:function(){for(var t=(new Date).getTime(),e=t-this._time,i=this._clips,n=i[jr],r=[],a=[],o=0;n>o;o++){var s=i[o],l=s.step(t);l&&(r.push(l),a.push(s))}for(var o=0;n>o;)i[o]._needsRemove?(i[o]=i[n-1],i.pop(),n--):o++;n=r[jr];for(var o=0;n>o;o++)a[o].fire(r[o]);this._time=t,this.onframe(e),this[Mi]("frame",e),this.stage[Se]&&this.stage[Se]()},start:function(){function t(){e._running&&(n(t),e._update())}var e=this;this._running=!0,this._time=(new Date).getTime(),n(t)},stop:function(){this._running=!1},clear:function(){this._clips=[]},animate:function(t,e){e=e||{};var i=new r(t,e.loop,e.getter,e.setter);return i}},e.mixin(a,i),a}),e("zrender/Layer",[Qr,"./core/util","./config"],function(t){function e(){return!1}function i(t,e,i,n){var r=document[Ur](e),a=i[cn](),o=i[un](),s=r.style;return s[Cn]="absolute",s.left=0,s.top=0,s.width=a+"px",s[ur]=o+"px",r.width=a*n,r[ur]=o*n,r.setAttribute("data-zr-dom-id",t),r}var n=t("./core/util"),r=t("./config"),a=function(t,a,o){var s;o=o||r.devicePixelRatio,typeof t===Fr?s=i(t,qr,a,o):n[Ln](t)&&(s=t,t=s.id),this.id=t,this.dom=s;var l=s.style;l&&(s.onselectstart=e,l["-webkit-user-select"]="none",l["user-select"]="none",l["-webkit-touch-callout"]="none",l["-webkit-tap-highlight-color"]="rgba(0,0,0,0)"),this.domBack=null,this.ctxBack=null,this.painter=a,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=o};return a[Jr]={constructor:a,elCount:0,__dirty:!0,initContext:function(){this.ctx=this.dom[Wr]("2d");var t=this.dpr;1!=t&&this.ctx.scale(t,t)},createBackBuffer:function(){var t=this.dpr;this.domBack=i("back-"+this.id,qr,this.painter,t),this.ctxBack=this.domBack[Wr]("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var i=this.dpr,n=this.dom,r=n.style,a=this.domBack;r.width=t+"px",r[ur]=e+"px",n.width=t*i,n[ur]=e*i,1!=i&&this.ctx.scale(i,i),a&&(a.width=t*i,a[ur]=e*i,1!=i&&this.ctxBack.scale(i,i))},clear:function(t){var e=this.dom,i=this.ctx,n=e.width,r=e[ur],a=this.clearColor,o=this.motionBlur&&!t,s=this.lastFrameAlpha,l=this.dpr;if(o&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(e,0,0,n/l,r/l)),i.clearRect(0,0,n/l,r/l),a&&(i.save(),i.fillStyle=this.clearColor,i.fillRect(0,0,n/l,r/l),i[oi]()),o){var u=this.domBack;i.save(),i.globalAlpha=s,i.drawImage(u,0,0,n/l,r/l),i[oi]()}}},a}),e("zrender/Painter",[Qr,"./config","./core/util","./core/log","./core/BoundingRect","./Layer","./graphic/Image"],function(t){function e(t){return parseInt(t,10)}function i(t){return t?t.isBuildin?!0:typeof t[Me]!==Br||typeof t[zi]!==Br?!1:!0:!1}function n(t){t.__unusedCount++}function r(t){t[Ii]=!1,1==t.__unusedCount&&t.clear()}function a(t,e,i){return f.copy(t[Jn]()),t[Xi]&&f[cr](t[Xi]),p.width=e,p[ur]=i,!f[be](p)}function o(t,e){if(!t||!e||t[jr]!==e[jr])return!0;for(var i=0;i<t[jr];i++)if(t[i]!==e[i])return!0}function s(t,e){for(var i=0;i<t[jr];i++){var n,r=t[i];r[Xi]&&(n=r[Xi],e[Xi](n[0],n[1],n[2],n[3],n[4],n[5]));var a=r.path;a[fi](e),r[si](a,r.shape),e.clip(),r[Xi]&&(n=r[Wi],e[Xi](n[0],n[1],n[2],n[3],n[4],n[5]))}}var l=t("./config"),u=t("./core/util"),c=t("./core/log"),h=t("./core/BoundingRect"),d=t("./Layer"),f=new h(0,0,0,0),p=new h(0,0,0,0),v=function(t,e,i){var n=!t.nodeName||"CANVAS"===t.nodeName[kr]();i=i||{},this.dpr=i.devicePixelRatio||l.devicePixelRatio,this._singleCanvas=n,this.root=t;var r=t.style;if(r&&(r["-webkit-tap-highlight-color"]="transparent",r["-webkit-user-select"]="none",r["user-select"]="none",r["-webkit-touch-callout"]="none",t[we]=""),this[ke]=e,n){var a=t.width,o=t[ur];this._width=a,this._height=o;var s=new d(t,this,1);s.initContext(),this._layers={0:s},this._zlevelList=[0]}else{var a=this._getWidth(),o=this._getHeight();this._width=a,this._height=o;var u=document[Ur]("div");this._domRoot=u;var c=u.style;c[Cn]="relative",c.overflow="hidden",c.width=this._width+"px",c[ur]=this._height+"px",t[_e](u),this._layers={},this._zlevelList=[]}this._layerConfig={},this.pathToImage=this._createPathToImage()};return v[Jr]={constructor:v,isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._singleCanvas?this._layers[0].dom:this._domRoot},refresh:function(t){var e=this[ke][Te](!0),i=this._zlevelList;this._paintList(e,t);for(var n=0;n<i[jr];n++){var r=i[n],a=this._layers[r];!a.isBuildin&&a[zi]&&a[zi]()}return this},_paintList:function(t,e){null==e&&(e=!1),this._updateLayerStatus(t);var i,l,u,h=this._width,d=this._height;this.eachBuildinLayer(n);for(var f=null,p=0,v=t[jr];v>p;p++){var m=t[p],g=this._singleCanvas?0:m[Ae];if(l!==g&&(l=g,i=this.getLayer(l),i.isBuildin||c("ZLevel "+l+" has been used by unkown layer "+i.id),u=i.ctx,i.__unusedCount=0,(i[Ii]||e)&&i.clear()),(i[Ii]||e)&&!m[Ti]&&0!==m.style[xr]&&m.scale[0]&&m.scale[1]&&(!m.culling||!a(m,h,d))){var y=m.__clipPaths;o(y,f)&&(f&&u[oi](),y&&(u.save(),s(y,u)),f=y),m.beforeBrush&&m.beforeBrush(u),m.brush(u,!1),m.afterBrush&&m.afterBrush(u)}m[Ii]=!1}f&&u[oi](),this.eachBuildinLayer(r)},getLayer:function(t){if(this._singleCanvas)return this._layers[0];var e=this._layers[t];return e||(e=new d("zr_"+t,this,this.dpr),e.isBuildin=!0,this._layerConfig[t]&&u.merge(e,this._layerConfig[t],!0),this.insertLayer(t,e),e.initContext()),e},insertLayer:function(t,e){var n=this._layers,r=this._zlevelList,a=r[jr],o=null,s=-1,l=this._domRoot;if(n[t])return void c("ZLevel "+t+" has been used already");if(!i(e))return void c("Layer of zlevel "+t+" is not valid");if(a>0&&t>r[0]){for(s=0;a-1>s&&!(r[s]<t&&r[s+1]>t);s++);o=n[r[s]]}if(r[Ki](s+1,0,t),o){var u=o.dom;u.nextSibling?l.insertBefore(e.dom,u.nextSibling):l[_e](e.dom)}else l.firstChild?l.insertBefore(e.dom,l.firstChild):l[_e](e.dom);n[t]=e},eachLayer:function(t,e){var i,n,r=this._zlevelList;for(n=0;n<r[jr];n++)i=r[n],t.call(e,this._layers[i],i)},eachBuildinLayer:function(t,e){var i,n,r,a=this._zlevelList;for(r=0;r<a[jr];r++)n=a[r],i=this._layers[n],i.isBuildin&&t.call(e,i,n)},eachOtherLayer:function(t,e){var i,n,r,a=this._zlevelList;for(r=0;r<a[jr];r++)n=a[r],i=this._layers[n],i.isBuildin||t.call(e,i,n)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){var e=this._layers,i={};this.eachBuildinLayer(function(t,e){i[e]=t.elCount,t.elCount=0});for(var n=0,r=t[jr];r>n;n++){var a=t[n],o=this._singleCanvas?0:a[Ae],s=e[o];if(s){if(s.elCount++,s[Ii])continue;s[Ii]=a[Ii]}}this.eachBuildinLayer(function(t,e){i[e]!==t.elCount&&(t[Ii]=!0)})},clear:function(){return this.eachBuildinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},configLayer:function(t,e){if(e){var i=this._layerConfig;i[t]?u.merge(i[t],e,!0):i[t]=e;var n=this._layers[t];n&&u.merge(n,i[t],!0)}},delLayer:function(t){var e=this._layers,i=this._zlevelList,n=e[t];n&&(n.dom[Le].removeChild(n.dom),delete e[t],i[Ki](u[Hr](i,t),1))},resize:function(t,e){var i=this._domRoot;if(i.style.display="none",t=t||this._getWidth(),e=e||this._getHeight(),i.style.display="",this._width!=t||e!=this._height){i.style.width=t+"px",i.style[ur]=e+"px";for(var n in this._layers)this._layers[n][Me](t,e);this[zi](!0)}return this._width=t,this._height=e,this},clearLayer:function(t){var e=this._layers[t];e&&e.clear()},dispose:function(){this.root[we]="",this.root=this[ke]=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas)return this._layers[0].dom;var e=new d("image",this,t.pixelRatio||this.dpr);e.initContext();var i=e.ctx;e.clearColor=t[xe],e.clear();for(var n=this[ke][Te](!0),r=0;r<n[jr];r++){var a=n[r];a[Ti]||(a.beforeBrush&&a.beforeBrush(i),a.brush(i,!1),a.afterBrush&&a.afterBrush(i))}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getWidth:function(){var t=this.root,i=document.defaultView.getComputedStyle(t);return(t.clientWidth||e(i.width)||e(t.style.width))-(e(i.paddingLeft)||0)-(e(i.paddingRight)||0)|0},_getHeight:function(){var t=this.root,i=document.defaultView.getComputedStyle(t);return(t[ye]||e(i[ur])||e(t.style[ur]))-(e(i.paddingTop)||0)-(e(i.paddingBottom)||0)|0},_pathToImage:function(e,i,n,r,a){var o=document[Ur](qr),s=o[Wr]("2d");o.width=n*a,o[ur]=r*a,s.clearRect(0,0,n*a,r*a);var l={position:i[Cn],rotation:i[$i],scale:i.scale};i[Cn]=[0,0,0],i[$i]=0,i.scale=[1,1],i&&i.brush(s);var u=t("./graphic/Image"),c=new u({id:e,style:{x:0,y:0,image:o}});return null!=l[Cn]&&(c[Cn]=i[Cn]=l[Cn]),null!=l[$i]&&(c[$i]=i[$i]=l[$i]),null!=l.scale&&(c.scale=i.scale=l.scale),c},_createPathToImage:function(){var t=this;return function(e,i,n,r){return t._pathToImage(e,i,n,r,t.dpr)}}},v}),e("zrender/zrender",[Qr,"./core/guid","./core/env","./Handler","./Storage","./animation/Animation","./Painter"],function(t){function e(t){delete u[t]}var i=t("./core/guid"),n=t("./core/env"),r=t("./Handler"),a=t("./Storage"),o=t("./animation/Animation"),s=!n[ge],l={canvas:t("./Painter")},u={},c={};c.version="3.0.2",c.init=function(t,e){var n=new h(i(),t,e);return u[n.id]=n,n},c[me]=function(t){if(t)t[me]();else{for(var e in u)u[e][me]();u={}}return c},c.getInstance=function(t){return u[t]},c.registerPainter=function(t,e){l[t]=e};var h=function(t,e,i){i=i||{},this.dom=e,this.id=t;var u=this,c=new a,h=i.renderer;if(s){if(!l.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");h="vml"}else h&&l[h]||(h=qr);var d=new l[h](e,c,i);this[ke]=c,this.painter=d,n.node||(this.handler=new r(d.getViewportRoot(),c,d)),this[Bi]=new o({stage:{update:function(){u._needsRefresh&&u.refreshImmediately()}}}),this[Bi].start(),this._needsRefresh;var f=c[Li],p=c[Di];c[Li]=function(t){var e=c.get(t);f.call(c,t),e&&e.removeSelfFromZr(u)},c[Di]=function(t){p.call(c,t),t.addSelfToZr(u)}};return h[Jr]={constructor:h,getId:function(){return this.id},add:function(t){this[ke].addRoot(t),this._needsRefresh=!0},remove:function(t){this[ke].delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer(t,e),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter[zi](),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},resize:function(){this.painter[Me](),this.handler&&this.handler[Me]()},clearAnimation:function(){this[Bi].clear()},getWidth:function(){return this.painter[cn]()},getHeight:function(){return this.painter[un]()},toDataURL:function(t,e,i){return this.painter.toDataURL(t,e,i)},pathToImage:function(t,e,n){var r=i();return this.painter.pathToImage(r,t,e,n)},setDefaultCursorStyle:function(t){this.handler.setDefaultCursorStyle(t)},on:function(t,e,i){this.handler&&this.handler.on(t,e,i)},off:function(t,e){this.handler&&this.handler.off(t,e)},trigger:function(t,e){this.handler&&this.handler[Mi](t,e)},clear:function(){this[ke].delRoot(),this.painter.clear()},dispose:function(){this[Bi].stop(),this.clear(),this[ke][me](),this.painter[me](),this.handler&&this.handler[me](),this[Bi]=this[ke]=this.painter=this.handler=null,e(this.id)}},c}),e("zrender",["zrender/zrender"],function(t){return t}),e("echarts/loading/default",[Qr,"../util/graphic",Kr],function(t){var e=t("../util/graphic"),i=t(Kr),n=Math.PI;return function(t,r){r=r||{},i[ir](r,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0});var a=new e.Rect({style:{fill:r.maskColor},zlevel:r[Ae],z:1e4}),o=new e.Arc({shape:{startAngle:-n/2,endAngle:-n/2+.1,r:10},style:{stroke:r.color,lineCap:"round",lineWidth:5},zlevel:r[Ae],z:10001}),s=new e.Rect({style:{fill:"none",text:r.text,textPosition:"right",textDistance:10,textFill:r.textColor},zlevel:r[Ae],z:10001});o.animateShape(!0).when(1e3,{endAngle:3*n/2}).start("circularInOut"),o.animateShape(!0).when(1e3,{startAngle:3*n/2}).delay(300).start("circularInOut");var l=new e.Group;return l.add(o),l.add(s),l.add(a),l[Me]=function(){var e=t[cn]()/2,i=t[un]()/2;o[ai]({cx:e,cy:i});var n=o.shape.r;s[ai]({x:e-n,y:i-n,width:2*n,height:2*n}),a[ai]({x:0,y:0,width:t[cn](),height:t[un]()})},l[Me](),l}}),e("echarts/visual/seriesColor",[Qr,"zrender/graphic/Gradient"],function(t){var e=t("zrender/graphic/Gradient");return function(t,i,n){function r(t){var r=[i,Gn,"color"],a=n.get("color"),o=t[En](),s=t.get(r)||a[t[Nn]%a[jr]];o[ve]("color",s),n[pe](t)||(typeof s!==Br||s instanceof e||o.each(function(e){o[fe](e,"color",s(t[Pn](e)))}),o.each(function(t){var e=o[In](t),i=e.get(r,!0);null!=i&&o[fe](t,"color",i)}))}t?n[de](t,r):n[he](r)}}),e("echarts/preprocessor/helper/compatStyle",[Qr,Kr],function(t){function e(t){var e=t&&t[ue];e&&i.each(n,function(n){var r=e[Gn],a=e[Zn];r&&r[n]&&(t[n]=t[n]||{},t[n][Gn]?i.merge(t[n][Gn],r[n]):t[n][Gn]=r[n],r[n]=null),a&&a[n]&&(t[n]=t[n]||{},t[n][Zn]?i.merge(t[n][Zn],a[n]):t[n][Zn]=a[n],a[n]=null)})}var i=t(Kr),n=["areaStyle",ce,"nodeStyle","linkStyle","chordStyle","label","labelLine"];return function(t){e(t);var n=t.data;if(n){for(var r=0;r<n[jr];r++)e(n[r]);var a=t[le];if(a&&a.data)for(var o=a.data,r=0;r<o[jr];r++)e(o[r]);var s=t.markLine;if(s&&s.data)for(var l=s.data,r=0;r<l[jr];r++)i[Or](l[r])?(e(l[r][0]),e(l[r][1])):e(l[r])}}}),e("echarts/preprocessor/backwardCompat",[Qr,Kr,"./helper/compatStyle"],function(t){function e(t,e){e=e.split(",");for(var i=t,n=0;n<e[jr]&&(i=i&&i[e[n]],null!=i);n++);return i}function i(t,e,i,n){e=e.split(",");for(var r,a=t,o=0;o<e[jr]-1;o++)r=e[o],null==a[r]&&(a[r]={}),a=a[r];(n||null==a[e[o]])&&(a[e[o]]=i)}function n(t){u(o,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}var r=t(Kr),a=t("./helper/compatStyle"),o=[["x","left"],["y","top"],["x2","right"],["y2",Ir]],s=["grid","geo","parallel",se,"toolbox","title","visualMap",oe,vn],l=["bar","boxplot","candlestick","chord","effectScatter","funnel","gauge","lines","graph","heatmap","line","map","parallel","pie","radar","sankey",ae,"treemap"],u=r.each;
return function(t){u(t[pn],function(t){if(r[Ln](t)){var o=t.type;if(a(t),("pie"===o||"gauge"===o)&&null!=t.clockWise&&(t[ei]=t.clockWise),"gauge"===o){var s=e(t,"pointer.color");null!=s&&i(t,re,s)}for(var u=0;u<l[jr];u++)if(l[u]===t.type){n(t);break}}}),t.dataRange&&(t.visualMap=t.dataRange),u(s,function(e){var i=t[e];i&&(r[Or](i)||(i=[i]),u(i,function(t){n(t)}))})}}),e("echarts/echarts",[Qr,"./model/Global","./ExtensionAPI","./CoordinateSystem","./model/OptionManager","./model/Component","./model/Series","./view/Component","./view/Chart","./util/graphic","zrender",Kr,Gi,Oe,Ji,"./loading/default","./visual/seriesColor","./preprocessor/backwardCompat","./util/graphic","./util/number","./util/format",dr,vr],function(t){function e(t){return function(e,i,n){e=e&&e[Lr](),T[Jr][t].call(this,e,i,n)}}function i(){T.call(this)}function n(t,e,n){n=n||{},typeof e===Fr&&(e=Z[e]),e&&k(B,function(t){t(e)}),this.id,this.group,this._dom=t,this._zr=M.init(t,{renderer:n.renderer||qr,devicePixelRatio:n.devicePixelRatio}),this._theme=S.clone(e),this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._api=new v(this),this._coordinateSystem=new m,T.call(this),this._messageCenter=new i,this._initEvents(),this[Me]=S.bind(this[Me],this)}function r(t,e){var i=this[ne];i&&i[ie]({mainType:"series",query:e},function(n,r){var a=this._chartsMap[n.__viewId];a&&a.__alive&&a[t](n,i,this._api,e)},this)}function a(t,e,i){var n=this._api;k(this._componentsViews,function(r){var a=r.__model;r[t](a,e,n,i),d(a,r)},this),e[he](function(r,a){var o=this._chartsMap[r.__viewId];o[t](r,e,n,i),d(r,o)},this)}function o(t,e){for(var i="component"===t,n=i?this._componentsViews:this._chartsViews,r=i?this._componentsMap:this._chartsMap,a=this._zr,o=0;o<n[jr];o++)n[o].__alive=!1;e[i?ie:he](function(t,o){if(i){if(t===pn)return}else o=t;var s=o.id+"_"+o.type,l=r[s];if(!l){var u=y.parseClassType(o.type),c=i?_[Mr](u.main,u.sub):w[Mr](u.sub);if(!c)return;l=new c,l.init(e,this._api),r[s]=l,n.push(l),a.add(l.group)}o.__viewId=s,l.__alive=!0,l.__id=s,l.__model=o},this);for(var o=0;o<n[jr];){var s=n[o];s.__alive?o++:(a[Pi](s.group),s[me](e,this._api),n[Ki](o,1),delete r[s.__id])}}function s(t){k(D,function(e){k(N[e]||[],function(e){e(t)})})}function l(t){var e={};t[he](function(t){var i=t.get("stack"),n=t[En]();if(i&&"list"===n.type){var r=e[i];r&&(n.stackedOn=r),e[i]=n}})}function u(t,e){var i=this._api;k(E,function(n){n(t,i,e)})}function c(t,e){k(L,function(i){k(G[i]||[],function(i){i(t,e)})})}function h(t,e){var i=this._api;k(this._componentsViews,function(n){var r=n.__model;n[Si](r,t,i,e),d(r,n)},this),k(this._chartsViews,function(t){t.__alive=!1},this),t[he](function(n,r){var a=this._chartsMap[n.__viewId];a.__alive=!0,a[Si](n,t,i,e),d(n,a)},this),k(this._chartsViews,function(e){e.__alive||e[Pi](t,i)},this)}function d(t,e){var i=t.get("z"),n=t.get(Ae);e.group[ki](function(t){null!=i&&(t.z=i),null!=n&&(t[Ae]=n)})}function f(t){function e(t,e){for(var i=0;i<t[jr];i++){var n=t[i];n[a]=e}}var i=0,n=1,r=2,a="__connectUpdateStatus";S.each(O,function(o,s){t._messageCenter.on(s,function(o){if(H[t.group]&&t[a]!==i){var s=t.makeActionFromEvent(o),l=[];for(var u in F){var c=F[u];c!==t&&c.group===t.group&&l.push(c)}e(l,i),k(l,function(t){t[a]!==n&&t[ln](s)}),e(l,r)}})})}var p=t("./model/Global"),v=t("./ExtensionAPI"),m=t("./CoordinateSystem"),g=t("./model/OptionManager"),y=t("./model/Component"),x=t("./model/Series"),_=t("./view/Component"),w=t("./view/Chart"),b=t("./util/graphic"),M=t("zrender"),S=t(Kr),A=t(Gi),C=t(Oe),T=t(Ji),k=S.each,L=["echarts","chart","component"],D=[Xi,$r,"statistic"];i[Jr].on=e("on"),i[Jr].off=e("off"),i[Jr].one=e("one"),S.mixin(i,T);var P=n[Jr];P[hn]=function(){return this._dom},P.getZr=function(){return this._zr},P.setOption=function(t,e,i){(!this[ne]||e)&&(this[ne]=new p(null,null,this._theme,new g(this._api))),this[ne].setOption(t,B),I.prepareAndUpdate.call(this),!i&&this._zr.refreshImmediately()},P.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},P[tr]=function(){return this[ne]},P.getOption=function(){return S.clone(this[ne][Un])},P[cn]=function(){return this._zr[cn]()},P[un]=function(){return this._zr[un]()},P.getRenderedCanvas=function(t){if(C[ge]){t=t||{},t.pixelRatio=t.pixelRatio||1,t[xe]=t[xe]||this[ne].get(xe);var e=this._zr,i=e[ke][Te]();return S.each(i,function(t){t[Ei](!0)}),e.painter.getRenderedCanvas(t)}},P.getDataURL=function(t){t=t||{};var e=t.excludeComponents,i=this[ne],n=[],r=this;k(e,function(t){i[ie]({mainType:t},function(t){var e=r._componentsMap[t.__viewId];e.group[Vi]||(n.push(e),e.group[Vi]=!0)})});var a=this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"));return k(n,function(t){t.group[Vi]=!1}),a},P.getConnectedDataURL=function(t){if(C[ge]){var e=this.group,i=Math.min,n=Math.max,r=1/0;if(H[e]){var a=r,o=r,s=-r,l=-r,u=[],c=t&&t.pixelRatio||1;for(var h in F){var d=F[h];if(d.group===e){var f=d.getRenderedCanvas(S.clone(t)),p=d[hn]().getBoundingClientRect();a=i(p.left,a),o=i(p.top,o),s=n(p.right,s),l=n(p[Ir],l),u.push({dom:f,left:p.left,top:p.top})}}a*=c,o*=c,s*=c,l*=c;var v=s-a,m=l-o,g=S.createCanvas();g.width=v,g[ur]=m;var y=M.init(g);return k(u,function(t){var e=new b.Image({style:{x:t.left*c-a,y:t.top*c-o,image:t.dom}});y.add(e)}),y.refreshImmediately(),g.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}};var I={update:function(t){var e=this[ne];if(e){e.restoreData(),s.call(this,e),l.call(this,e),this._coordinateSystem[Se](e,this._api),u.call(this,e,t),c.call(this,e,t),h.call(this,e,t);var i=e.get(xe)||"transparent",n=this._zr.painter;if(n.isSingleCanvas&&n.isSingleCanvas())this._zr.configLayer(0,{clearColor:i});else{if(!C[ge]){var r=A.parse(i);i=A.stringify(r,"rgb"),0===r[3]&&(i="transparent")}i=i,this._dom.style[xe]=i}}},updateView:function(t){var e=this[ne];e&&(u.call(this,e,t),c.call(this,e,t),a.call(this,"updateView",e,t))},updateVisual:function(t){var e=this[ne];e&&(c.call(this,e,t),a.call(this,"updateVisual",e,t))},updateLayout:function(t){var e=this[ne];e&&(u.call(this,e,t),a.call(this,Ci,e,t))},highlight:function(t){r.call(this,ee,t)},downplay:function(t){r.call(this,te,t)},prepareAndUpdate:function(t){var e=this[ne];o.call(this,"component",e),o.call(this,"chart",e),I[Se].call(this,t)}};P[Me]=function(){this._zr[Me]();var t=this[ne]&&this[ne][gn]("media");I[t?"prepareAndUpdate":Se].call(this),this._loadingFX&&this._loadingFX[Me]()};var z=t("./loading/default");P.showLoading=function(t,e){S[Ln](t)&&(e=t,t="default");var i=z(this._api,e),n=this._zr;this._loadingFX=i,n.add(i)},P.hideLoading=function(){this._loadingFX&&this._zr[Pi](this._loadingFX),this._loadingFX=null},P.makeActionFromEvent=function(t){var e=S[Cr]({},t);return e.type=O[t.type],e},P[ln]=function(t,e){var i=R[t.type];if(i){var n=i.actionInfo,r=n[Se]||Se,a=[t],o=!1;t.batch&&(o=!0,a=S.map(t.batch,function(e){return e=S[ir](S[Cr]({},e),t),e.batch=null,e}));for(var s,l=[],u=t.type===ee||t.type===te,c=0;c<a[jr];c++){var h=a[c];s=i.action(h,this[ne]),s=s||S[Cr]({},h),s.type=n.event||s.type,l.push(s),u&&I[r].call(this,h)}"none"!==r&&!u&&I[r].call(this,t),e||(s=o?{type:l[0].type,batch:l}:l[0],this._messageCenter[Mi](s.type,s))}},P.on=e("on"),P.off=e("off"),P.one=e("one");var V=["click","dblclick",He,Fe,"globalout"];P._initEvents=function(){var t=this._zr;k(V,function(e){t.on(e,function(t){var i=this[tr](),n=t[Zi];if(n&&null!=n[bi]){var r=n[Qt]||i.getSeriesByIndex(n[Nn]),a=r&&r[Pn](n[bi])||{};a.event=t,a.type=e,this[Mi](e,a)}},this)},this),k(O,function(t,e){this._messageCenter.on(e,function(t){this[Mi](e,t)},this)},this)},P.isDisposed=function(){return this._disposed},P.clear=function(){this.setOption({},!0)},P[me]=function(){this._disposed=!0;var t=this._api,e=this[ne];k(this._componentsViews,function(i){i[me](e,t)}),k(this._chartsViews,function(i){i[me](e,t)}),this._zr[me](),F[this.id]=null},S.mixin(n,T);var R=[],O={},E=[],N={},B=[],G={},Z={},F={},H={},W=new Date-0,q=new Date-0,U="_echarts_instance_",j={version:"3.1.1",dependencies:{zrender:"3.0.2"}};return j.init=function(t,e,i){if(M.version[Nr](".","")-0<j.dependencies.zrender[Nr](".","")-0)throw new Error("ZRender "+M.version+" is too old for ECharts "+j.version+". Current version need ZRender "+j.dependencies.zrender+"+");if(!t)throw new Error("Initialize failed: invalid dom.");var r=new n(t,e,i);return r.id="ec_"+W++,F[r.id]=r,t.setAttribute&&t.setAttribute(U,r.id),f(r),r},j.connect=function(t){if(S[Or](t)){var e=t;t=null,S.each(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+q++,S.each(e,function(e){e.group=t})}return H[t]=!0,t},j.disConnect=function(t){H[t]=!1},j[me]=function(t){S.isDom(t)?t=j.getInstanceByDom(t):typeof t===Fr&&(t=F[t]),t instanceof n&&!t.isDisposed()&&t[me]()},j.getInstanceByDom=function(t){var e=t.getAttribute(U);return F[e]},j.getInstanceById=function(t){return F[t]},j.registerTheme=function(t,e){Z[t]=e},j[Jt]=function(t){B.push(t)},j[Kt]=function(t,e){if(S[Hr](D,t)<0)throw new Error("stage should be one of "+D);var i=N[t]||(N[t]=[]);i.push(e)},j[$t]=function(t,e,i){typeof e===Br&&(i=e,e="");var n=S[Ln](t)?t.type:[t,t={event:e}][0];t.event=(t.event||n)[Lr](),e=t.event,R[n]||(R[n]={action:i,actionInfo:t}),O[e]=n},j.registerCoordinateSystem=function(t,e){m[sn](t,e)},j[Yt]=function(t){S[Hr](E,t)<0&&E.push(t)},j[Xt]=function(t,e){if(S[Hr](L,t)<0)throw new Error("stage should be one of "+L);var i=G[t]||(G[t]=[]);i.push(e)},j[jt]=function(t){return w[Cr](t)},j[Ut]=function(t){return y[Cr](t)},j[qt]=function(t){return x[Cr](t)},j[Wt]=function(t){return _[Cr](t)},j.setCanvasCreator=function(t){S.createCanvas=t},j[Xt]("echarts",S.curry(t("./visual/seriesColor"),"",ue)),j[Jt](t("./preprocessor/backwardCompat")),j[$t]({type:"highlight",event:"highlight",update:"highlight"},S.noop),j[$t]({type:"downplay",event:"downplay",update:"downplay"},S.noop),j.graphic=t("./util/graphic"),j[Zr]=t("./util/number"),j.format=t("./util/format"),j.matrix=t(dr),j.vector=t(vr),j.util={},k(["map","each",$r,Hr,Ar,Yr,$r,"bind","curry",Or,fn,Ln,"isFunction",Cr],function(t){j.util[t]=S[t]}),j}),e("echarts",["echarts/echarts"],function(t){return t}),e("echarts/data/DataDiffer",[Qr],function(t){function e(t){return t}function i(t,i,n,r){this._old=t,this._new=i,this._oldKeyGetter=n||e,this._newKeyGetter=r||e}function n(t,e,i){for(var n=0;n<t[jr];n++){var r=i(t[n]),a=e[r];null==a?e[r]=n:(a[jr]||(e[r]=a=[a]),a.push(n))}}return i[Jr]={constructor:i,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t,e=this._old,i=this._new,r=this._oldKeyGetter,a=this._newKeyGetter,o={},s={};for(n(e,o,r),n(i,s,a),t=0;t<e[jr];t++){var l=r(e[t]),u=s[l];if(null!=u){var c=u[jr];c?(1===c&&(s[l]=null),u=u.unshift()):s[l]=null,this._update&&this._update(u,t)}else this._remove&&this._remove(t)}for(var l in s)if(s.hasOwnProperty(l)){var u=s[l];if(null==u)continue;if(u[jr])for(var t=0,c=u[jr];c>t;t++)this._add&&this._add(u[t]);else this._add&&this._add(u)}}},i}),e("echarts/data/List",[Qr,"../model/Model","./DataDiffer",Kr,"../util/model"],function(t){function e(t){return u[Or](t)||(t=[t]),t}var i=pr,n=typeof window===pr?global:window,r=typeof n.Float64Array===i?Array:n.Float64Array,a=typeof n.Int32Array===i?Array:n.Int32Array,o={"float":r,"int":a,ordinal:Array,number:Array,time:Array},s=t("../model/Model"),l=t("./DataDiffer"),u=t(Kr),c=t("../util/model"),h=u[Ln],d=["stackedOn","_nameList","_idList","_rawData"],f=function(t,e,i){u.each(d[Gr](i||[]),function(i){e.hasOwnProperty(i)&&(t[i]=e[i])})},p=function(t,e){t=t||["x","y"];for(var i={},n=[],r=0;r<t[jr];r++){var a,o={};typeof t[r]===Fr?(a=t[r],o={name:a,stackable:!1,type:"number"}):(o=t[r],a=o.name,o.type=o.type||Zr),n.push(a),i[a]=o}this[en]=n,this._dimensionInfos=i,this[Qt]=e,this.indices=[],this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this.stackedOn=null,this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._rawData,this._extent},v=p[Jr];v.type="list",v[Ht]=function(t){return isNaN(t)||(t=this[en][t]||t),t},v.getDimensionInfo=function(t){return u.clone(this._dimensionInfos[this[Ht](t)])},v[Ft]=function(t,e,i){t=t||[],this._rawData=t;var n=this._storage={},r=this.indices=[],a=this[en],s=t[jr],l=this._dimensionInfos,h=[],d={};e=e||[];for(var f=0;f<a[jr];f++){var p=l[a[f]],v=o[p.type];n[a[f]]=new v(s)}i=i||function(t,e,i,n){var r=c.getDataItemValue(t);return c.converDataValue(u[Or](r)?r[n]:r,l[e])};for(var m=0;m<t[jr];m++){for(var g=t[m],y=0;y<a[jr];y++){var x=a[y],_=n[x];_[m]=i(g,x,m,y)}r.push(m)}for(var f=0;f<t[jr];f++){var w="";e[f]||(e[f]=t[f].name,w=t[f].id);var b=e[f]||"";!w&&b&&(d[b]=d[b]||0,w=b,d[b]>0&&(w+="__ec__"+d[b]),d[b]++),w&&(h[f]=w)}this._nameList=e,this._idList=h},v.count=function(){return this.indices[jr]},v.get=function(t,e,i){var n=this._storage,r=this.indices[e],a=n[t]&&n[t][r];if(i){var o=this._dimensionInfos[t];if(o&&o.stackable)for(var s=this.stackedOn;s;){var l=s.get(t,e);(a>=0&&l>0||0>=a&&0>l)&&(a+=l),s=s.stackedOn}}return a},v[Zt]=function(t,e,i){var n=[];u[Or](t)||(i=e,e=t,t=this[en]);for(var r=0,a=t[jr];a>r;r++)n.push(this.get(t[r],e,i));return n},v.hasValue=function(t){for(var e=this[en],i=this._dimensionInfos,n=0,r=e[jr];r>n;n++)if(i[e[n]].type!==On&&isNaN(this.get(e[n],t)))return!1;return!0},v[Gt]=function(t,e){var i=this._storage[t],n=this.getDimensionInfo(t);e=n&&n.stackable&&e;var r,a=(this._extent||(this._extent={}))[t+!!e];if(a)return a;if(i){for(var o=1/0,s=-(1/0),l=0,u=this.count();u>l;l++)r=this.get(t,l,e),o>r&&(o=r),r>s&&(s=r);return this._extent[t+e]=[o,s]}return[1/0,-(1/0)]},v[Bt]=function(t,e){var i=this._storage[t],n=0;if(i)for(var r=0,a=this.count();a>r;r++){var o=this.get(t,r,e);isNaN(o)||(n+=o)}return n},v[Hr]=function(t,e){var i=this._storage,n=i[t],r=this.indices;if(n)for(var a=0,o=r[jr];o>a;a++){var s=r[a];if(n[s]===e)return a}return-1},v[_i]=function(t){for(var e=this.indices,i=this._nameList,n=0,r=e[jr];r>n;n++){var a=e[n];if(i[a]===t)return n}return-1},v.indexOfNearest=function(t,e,i){u[Or](t)||(t=t?[t]:[]);var n=this._storage,r=n[t];if(r){for(var a=Number.MAX_VALUE,o=-1,s=0,l=t[jr];l>s;s++)for(var c=0,h=this.count();h>c;c++){var d=Math.abs(this.get(t[s],c,i)-e);a>=d&&(a=d,o=c)}return o}return-1},v[Vn]=function(t){var e=this.indices[t];return null==e?-1:e},v[zn]=function(t){return this._nameList[this.indices[t]]||""},v.getId=function(t){return this._idList[this.indices[t]]||this[Vn](t)+""},v.each=function(t,i,n,r){typeof t===Br&&(r=n,n=i,i=t,t=[]),t=u.map(e(t),this[Ht],this);var a=[],o=t[jr],s=this.indices;r=r||this;for(var l=0;l<s[jr];l++)if(0===o)i.call(r,l);else if(1===o)i.call(r,this.get(t[0],l,n),l);else{for(var c=0;o>c;c++)a[c]=this.get(t[c],l,n);a[c]=l,i.apply(r,a)}},v[Nt]=function(t,i,n,r){typeof t===Br&&(r=n,n=i,i=t,t=[]),t=u.map(e(t),this[Ht],this);var a=[],o=[],s=t[jr],l=this.indices;r=r||this;for(var c=0;c<l[jr];c++){var h;if(1===s)h=i.call(r,this.get(t[0],c,n),c);else{for(var d=0;s>d;d++)o[d]=this.get(t[d],c,n);o[d]=c,h=i.apply(r,o)}h&&a.push(l[c])}return this.indices=a,this._extent={},this},v[Et]=function(t,e,i,n){typeof t===Br&&(n=i,i=e,e=t,t=[]);var r=[];return this.each(t,function(){r.push(e&&e.apply(this,arguments))},i,n),r},v.map=function(t,i,n,r){t=u.map(e(t),this[Ht],this);var a=this[en],o=new p(u.map(a,this.getDimensionInfo,this),this[Qt]),s=o.indices=this.indices;f(o,this,this._wrappedMethods);for(var l=o._storage={},c=this._storage,h=0;h<a[jr];h++){var d=a[h],v=c[d];u[Hr](t,d)>=0?l[d]=new v.constructor(c[d][jr]):l[d]=c[d]}var m=[];return this.each(t,function(){var e=arguments[arguments[jr]-1],n=i&&i.apply(this,arguments);if(null!=n){typeof n===Zr&&(m[0]=n,n=m);for(var r=0;r<n[jr];r++){var a=t[r],o=l[a],u=s[e];o&&(o[u]=n[r])}}},n,r),o},v[In]=function(t){var e=this[Qt];return t=this.indices[t],new s(this._rawData[t],e,e[er])},v.diff=function(t){var e=this._idList,i=t&&t._idList;return new l(t?t.indices:[],this.indices,function(t){return i[t]||t+""},function(t){return e[t]||t+""})},v[Ot]=function(t){var e=this._visual;return e&&e[t]},v[ve]=function(t,e){if(h(t))for(var i in t)t.hasOwnProperty(i)&&this[ve](i,t[i]);else this._visual=this._visual||{},this._visual[t]=e},v[Rt]=function(t,e){if(h(t))for(var i in t)t.hasOwnProperty(i)&&this[Rt](i,t[i]);else this._layout[t]=e},v[Vt]=function(t){return this._layout[t]},v[zt]=function(t){return this._itemLayouts[t]},v[It]=function(t,e,i){this._itemLayouts[t]=i?u[Cr](this._itemLayouts[t]||{},e):e},v[Pt]=function(t,e,i){var n=this._itemVisuals[t],r=n&&n[e];return null!=r||i?r:this[Ot](e)},v[fe]=function(t,e,i){var n=this._itemVisuals[t]||{};if(this._itemVisuals[t]=n,h(e))for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);else n[e]=i};var m=function(t){t[Nn]=this[Nn],t[bi]=this[bi]};return v[Dt]=function(t,e){var i=this[Qt];e&&(e[bi]=t,e[Nn]=i&&i[Nn],"group"===e.type&&e[ki](m,e)),this._graphicEls[t]=e},v[wi]=function(t){return this._graphicEls[t]},v[xi]=function(t,e){u.each(this._graphicEls,function(i,n){i&&t&&t.call(e,i,n)})},v.cloneShallow=function(){var t=u.map(this[en],this.getDimensionInfo,this),e=new p(t,this[Qt]);return e._storage=this._storage,f(e,this,this._wrappedMethods),e.indices=this.indices.slice(),e},v.wrapMethod=function(t,e){var i=this[t];typeof i===Br&&(this._wrappedMethods=this._wrappedMethods||[],this._wrappedMethods.push(t),this[t]=function(){var t=i.apply(this,arguments);return e.call(this,t)})},p}),e("echarts/data/helper/completeDimensions",[Qr,Kr],function(t){function e(t,e,a){if(!e)return t;var o=n(e[0]),s=r[Or](o)&&o[jr]||1;a=a||[];for(var l=0;s>l;l++)if(!t[l]){var u=a[l]||"extra"+(l-a[jr]);t[l]=i(e,l)?{type:"ordinal",name:u}:u}return t}function i(t,e){for(var i=0,a=t[jr];a>i;i++){var o=n(t[i]);if(!r[Or](o))return!1;var o=o[e];if(null!=o&&isFinite(o))return!1;if(r[fn](o)&&"-"!==o)return!0}return!1}function n(t){return r[Or](t)?t:r[Ln](t)?t.value:t}var r=t(Kr);return e}),e("echarts/chart/helper/createListFromArray",[Qr,Lt,kt,Kr,Tt,Ct],function(t){function e(t){for(var e=0;e<t[jr]&&null==t[e];)e++;return t[e]}function i(t){var i=e(t);return null!=i&&!u[Or](d(i))}function n(t,e,n){t=t||[];var r=e.get(nn),a=p[r],u=h.get(r),c=a&&a(t,e,n),v=c&&c[en];v||(v=u&&u[en]||["x","y"],v=l(v,t,v[Gr](["value"])));var m=c&&c.categoryAxisModel,g=v[0].type===On?0:v[1].type===On?1:-1,y=new s(v,e),x=o(c,t),_=m&&i(t)?function(t,e,i,n){return n===g?i:f(d(t),v[n])}:function(t,e,i,n){var r=d(t);return f(r&&r[n],v[n])};return y[Ft](t,x,_),y}function r(t){return t!==At&&"time"!==t}function a(t){return t===At?On:"time"===t?"time":"float"}function o(t,e){var i=[];if(t&&t.categoryAxisModel){var n=t.categoryAxisModel[St]();if(n){var r=e[jr];if(u[Or](e[0])&&e[0][jr]>1){i=[];for(var a=0;r>a;a++)i[a]=n[e[a][0]]}else i=n.slice(0)}}return i}var s=t(Lt),l=t(kt),u=t(Kr),c=t(Tt),h=t(Ct),d=c.getDataItemValue,f=c.converDataValue,p={cartesian2d:function(t,e,i){var n=i[on]("xAxis",e.get("xAxisIndex")),o=i[on]("yAxis",e.get("yAxisIndex")),s=n.get("type"),u=o.get("type"),c=[{name:"x",type:a(s),stackable:r(s)},{name:"y",type:a(u),stackable:r(u)}];return l(c,t,["x","y","z"]),{dimensions:c,categoryAxisModel:s===At?n:u===At?o:null}},polar:function(t,e,i){var n=e.get("polarIndex")||0,o=function(t){return t.get("polarIndex")===n},s=i[dn]({mainType:"angleAxis",filter:o})[0],u=i[dn]({mainType:"radiusAxis",filter:o})[0],c=u.get("type"),h=s.get("type"),d=[{name:"radius",type:a(c),stackable:r(c)},{name:"angle",type:a(h),stackable:r(h)}];return l(d,t,[qn,"angle","value"]),{dimensions:d,categoryAxisModel:h===At?s:c===At?u:null}},geo:function(t,e,i){return{dimensions:l([{name:"lng"},{name:"lat"}],t,["lng","lat","value"])}}};return n}),e("echarts/chart/line/LineSeries",[Qr,Mt,bt],function(t){var e=t(Mt),i=t(bt);return i[Cr]({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,i){return e(t.data,this,i)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,polarIndex:0,clipOverflow:!0,label:{normal:{position:"top"},emphasis:{position:"top"}},lineStyle:{normal:{width:2,type:"solid"}},symbol:"emptyCircle",symbolSize:4,showSymbol:!0,animationEasing:"linear"}})}),e("echarts/util/symbol",[Qr,"./graphic",hr],function(t){var e=t("./graphic"),i=t(hr),n=e[Xe]({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,r=e.width/2,a=e[ur]/2;t[di](i,n-a),t[hi](i+r,n+a),t[hi](i-r,n+a),t[ui]()}}),r=e[Xe]({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var i=e.cx,n=e.cy,r=e.width/2,a=e[ur]/2;t[di](i,n-a),t[hi](i+r,n),t[hi](i,n+a),t[hi](i-r,n),t[ui]()}}),a=e[Xe]({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e.x,n=e.y,r=e.width/5*3,a=Math.max(r,e[ur]),o=r/2,s=o*o/(a-o),l=n-a+o+s,u=Math.asin(s/o),c=Math.cos(u)*o,h=Math.sin(u),d=Math.cos(u);t.arc(i,l,o,Math.PI-u,2*Math.PI+u);var f=.6*o,p=.7*o;t[ci](i+c-h*f,l+s+d*f,i,n-p,i,n),t[ci](i,n-p,i-c+h*f,l+s+d*f,i-c,l+s),t[ui]()}}),o=e[Xe]({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var i=e[ur],n=e.width,r=e.x,a=e.y,o=n/3*2;t[di](r,a),t[hi](r+o,a+i),t[hi](r,a+i/4*3),t[hi](r-o,a+i),t[hi](r,a),t[ui]()}}),s={line:e.Line,rect:e.Rect,roundRect:e.Rect,square:e.Rect,circle:e[Je],diamond:r,pin:a,arrow:o,triangle:n},l={line:function(t,e,i,n,r){r.x1=t,r.y1=e+n/2,r.x2=t+i,r.y2=e+n/2},rect:function(t,e,i,n,r){r.x=t,r.y=e,r.width=i,r[ur]=n},roundRect:function(t,e,i,n,r){r.x=t,r.y=e,r.width=i,r[ur]=n,r.r=Math.min(i,n)/4},square:function(t,e,i,n,r){var a=Math.min(i,n);r.x=t,r.y=e,r.width=a,r[ur]=a},circle:function(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.r=Math.min(i,n)/2},diamond:function(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.width=i,r[ur]=n},pin:function(t,e,i,n,r){r.x=t+i/2,r.y=e+n/2,r.width=i,r[ur]=n},arrow:function(t,e,i,n,r){r.x=t+i/2,r.y=e+n/2,r.width=i,r[ur]=n},triangle:function(t,e,i,n,r){r.cx=t+i/2,r.cy=e+n/2,r.width=i,r[ur]=n}},u={};for(var c in s)u[c]=new s[c];var h=e[Xe]({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style,e=this.shape;"pin"===e.symbolType&&t[yi]===nr&&(t[yi]=["50%","40%"],t[gi]=Vr,t[mi]=zr)},buildPath:function(t,e){var i=e.symbolType,n=u[i];"none"!==e.symbolType&&(n||(i="rect",n=u[i]),l[i](e.x,e.y,e.width,e[ur],n.shape),n[si](t,n.shape))}}),d=function(t){if("image"!==this.type){var e=this.style,i=this.shape;i&&"line"===i.symbolType?e[_r]=t:this.__isEmptyBrush?(e[_r]=t,e.fill="#fff"):(e.fill&&(e.fill=t),e[_r]&&(e[_r]=t)),this.dirty()}},f={createSymbol:function(t,n,r,a,o,s){var l=0===t[Hr]("empty");l&&(t=t.substr(5,1)[Lr]()+t.substr(6));var u;return u=0===t[Hr]("image://")?new e.Image({style:{image:t.slice(8),x:n,y:r,width:a,height:o}}):0===t[Hr]("path://")?e.makePath(t.slice(7),{},new i(n,r,a,o)):new h({shape:{symbolType:t,x:n,y:r,width:a,height:o}}),u.__isEmptyBrush=l,u[wt]=d,u[wt](s),u}};return f}),e("echarts/chart/helper/Symbol",[Qr,Kr,_t,xt,yt],function(t){function e(t){return r[Or](t)||(t=[+t,+t]),t}function i(t,e){o.Group.call(this),this[gt](t,e)}function n(t,e){this[Ui].drift(t,e)}var r=t(Kr),a=t(_t),o=t(xt),s=t(yt),l=i[Jr];l._createSymbol=function(t,i,r){this[Ai]();var s=i[Qt],l=i[Pt](r,"color"),u=a[mt](t,-.5,-.5,1,1,l);u.attr({style:{strokeNoScale:!0},z2:100,culling:!0,scale:[0,0]}),u.drift=n;var c=e(i[Pt](r,vt));o[Ee](u,{scale:c},s),this._symbolType=t,this.add(u)},l.stopSymbolAnimation=function(t){this[An](0)[Ei](t)},l.getScale=function(){return this[An](0).scale},l[ee]=function(){this[An](0)[Mi](Zn)},l[te]=function(){this[An](0)[Mi](Gn)},l.setZ=function(t,e){var i=this[An](0);i[Ae]=t,i.z=e},l.setDraggable=function(t){var e=this[An](0);e[Ri]=t,e.cursor=t?"move":"pointer"},l[gt]=function(t,i){var n=t[Pt](i,pt)||ft,r=t[Qt],a=e(t[Pt](i,vt));if(n!==this._symbolType)this._createSymbol(n,t,i);else{var s=this[An](0);o[Ne](s,{scale:a},r)}this._updateCommon(t,i,a),this._seriesModel=r};var u=[ue,Gn],c=[ue,Zn],h=["label",Gn],d=["label",Zn];return l._updateCommon=function(t,i,n){var a=this[An](0),l=t[Qt],f=t[In](i),p=f[tr](u),v=t[Pt](i,"color"),m=f[tr](c)[dt]();a[$i]=f[br]("symbolRotate")*Math.PI/180||0;var g=f[br]("symbolOffset");if(g){var y=a[Cn];y[0]=s[Rr](g[0],n[0]),y[1]=s[Rr](g[1],n[1])}a[wt](v),r[Cr](a.style,p[dt](["color"]));var x=f[tr](h),_=f[tr](d),w=t[en][t[en][jr]-1],b=a.style;x.get("show")?(o[Ze](b,x,v),b.text=l[ht](i,Gn)||t.get(w,i)):b.text="",_[br]("show")?(o[Ze](m,_,v),m.text=l[ht](i,Zn)||t.get(w,i)):m.text="";var M=e(t[Pt](i,vt));if(a.off(He).off(Fe).off(Zn).off(Gn),o[We](a,m),f[br]("hoverAnimation")){var S=function(){var t=M[1]/M[0];this[Be]({scale:[Math.max(1.1*M[0],M[0]+3),Math.max(1.1*M[1],M[1]+3*t)]},400,"elasticOut")},A=function(){this[Be]({scale:M},400,"elasticOut")};a.on(He,S).on(Fe,A).on(Zn,S).on(Gn,A)}},l.fadeOut=function(t){var e=this[An](0);e.style.text="",o[Ne](e,{scale:[0,0]},this._seriesModel,t)},r[Ar](i,o.Group),i}),e("echarts/chart/helper/SymbolDraw",[Qr,xt,"./Symbol"],function(t){function e(t){this.group=new n.Group,this._symbolCtor=t||r}function i(t,e,i){var n=t[zt](e);return n&&!isNaN(n[0])&&!isNaN(n[1])&&!(i&&i(e))&&"none"!==t[Pt](e,pt)}var n=t(xt),r=t("./Symbol"),a=e[Jr];return a[gt]=function(t,e){var r=this.group,a=t[Qt],o=this._data,s=this._symbolCtor;t.diff(o).add(function(n){var a=t[zt](n);if(i(t,n,e)){var o=new s(t,n);o.attr(Cn,a),t[Dt](n,o),r.add(o)}})[Se](function(l,u){var c=o[wi](u),h=t[zt](l);return i(t,l,e)?(c?(c[gt](t,l),n[Ne](c,{position:h},a)):(c=new s(t,l),c.attr(Cn,h)),r.add(c),void t[Dt](l,c)):void r[Pi](c)})[Pi](function(t){var e=o[wi](t);e&&e.fadeOut(function(){r[Pi](e)})})[ct](),this._data=t},a[Ci]=function(){var t=this._data;t&&t[xi](function(e,i){e.attr(Cn,t[zt](i))})},a[Pi]=function(t){var e=this.group,i=this._data;i&&(t?i[xi](function(t){t.fadeOut(function(){e[Pi](t)})}):e[Ai]())},e}),e("zrender/core/arrayDiff",[Qr],function(t){function e(t,e){return t===e}function i(t,e,i){var n={cmd:t,idx:e};return"="===t&&(n.idx1=i),n}function n(t,e,n,r){t.push(i(e,n,r))}function r(t,e,i,n,r,a,o,l){var u,c,h,d=i>n,f=r>a,p=s(n-i),v=s(a-r);for(c=0;p>=c;c++)for(h=0;v>=h;h++)if(0===c)l[h]=h;else if(0===h)u=l[h],l[h]=c;else{var m=t[d?i-c:c-1+i],g=e[f?r-h:h-1+r],y=u+(o(m,g)?0:2),x=l[h]+1,_=l[h-1]+1;u=l[h],l[h]=x>y?y:x,_<l[h]&&(l[h]=_)}return l}function a(t,e,i,o,s,l,u,c,h){var d,f,p=[],v=o-i,m=l-s;if(v)if(m)if(1===v){var g=t[i],y=!1;for(f=0;m>f;f++)u(g,e[f+s])&&!y?(y=!0,n(p,"=",i,f+s)):n(p,"+",f+s);y||n(p,"-",i)}else if(1===m){var x=e[s],y=!1;for(d=0;v>d;d++)u(x,t[d+i])&&!y?(y=!0,n(p,"=",d+i,s)):n(p,"-",d+i);y||n(p,"+",s)}else{var _=(v/2|0)+i;r(t,e,i,_,s,l,u,c),r(t,e,o,_+1,l,s,u,h);var w,b=1/0,M=0;for(f=0;m>=f;f++)w=c[f]+h[m-f],b>w&&(b=w,M=f);M+=s,p=a(t,e,i,_,s,M,u,c,h);var S=a(t,e,_,o,M,l,u,c,h);for(d=0;d<S[jr];d++)p.push(S[d])}else for(d=0;v>d;d++)n(p,"-",d+i);else for(f=0;m>f;f++)n(p,"+",f+s);return p}function o(t,i,r){r=r||e;var o,s,l=t[jr],u=i[jr],c=Math.min(l,u),h=[];for(o=0;c>o&&r(t[o],i[o]);o++)n(h,"=",o,o);for(s=0;c>s&&r(t[l-s-1],i[u-s-1]);s++);if(l-s>=o||u-s>=o){var d=a(t,i,o,l-s,o,u-s,r,[],[]);for(o=0;o<d[jr];o++)h.push(d[o]);for(o=0;s>o;o++)n(h,"=",l-s+o,u-s+o)}return h}var s=Math.abs;return o}),e("echarts/chart/line/lineAnimationDiff",[Qr,"zrender/core/arrayDiff"],function(t){function e(t){return t>=0?1:-1}function i(t,i,n){for(var r,a=t[tn](),o=t[ut](a),s=a.onZero?0:o.scale[lt]()[0],l=o.dim,u="x"===l||l===qn?1:0,c=i.stackedOn,h=i.get(l,n);c&&e(c.get(l,n))===e(h);){r=c;break}var d=[];return d[u]=i.get(a.dim,n),d[1-u]=r?r.get(l,n,!0):s,t[st](d)}var n=t("zrender/core/arrayDiff");return function(t,e,r,a,o,s){for(var l=e[Et](e.getId),u=t[Et](t.getId),c=[],h=[],d=[],f=[],p=[],v=[],m=[],g=n(u,l),y=s[en],x=0;x<g[jr];x++){var _=g[x],w=!0;switch(_.cmd){case"=":var b=t[zt](_.idx),M=e[zt](_.idx1);(isNaN(b[0])||isNaN(b[1]))&&(b=M.slice()),c.push(b),h.push(M),d.push(r[_.idx]),f.push(a[_.idx1]),m.push(e[Vn](_.idx1));break;case"+":var S=_.idx;c.push(o[st]([e.get(y[0],S,!0),e.get(y[1],S,!0)])),h.push(e[zt](S).slice()),d.push(i(o,e,S)),f.push(a[S]),m.push(e[Vn](S));break;case"-":var S=_.idx,A=t[Vn](S);A!==S?(c.push(t[zt](S)),h.push(s[st]([t.get(y[0],S,!0),t.get(y[1],S,!0)])),d.push(r[S]),f.push(i(s,t,S)),m.push(A)):w=!1}w&&(p.push(_),v.push(v[jr]))}v.sort(function(t,e){return m[t]-m[e]});for(var C=[],T=[],k=[],L=[],D=[],x=0;x<v[jr];x++){var S=v[x];C[x]=c[S],T[x]=h[S],k[x]=d[S],L[x]=f[S],D[x]=p[S]}return{current:C,next:T,stackedOnCurrent:k,stackedOnNext:L,status:D}}}),e("echarts/chart/line/poly",[Qr,li,vr],function(t){function e(t,e,i,n,d,f,p,v,m,g){for(var y=i,x=0;d>x;x++){var _=e[y];if(y>=n||0>y||isNaN(_[0])||isNaN(_[1]))break;if(y===i)t[f>0?di:hi](_[0],_[1]),l(c,_);else if(m>0){var w=y-f,b=y+f,M=.5,S=e[w],A=e[b];if(f>0&&(y===d-1||isNaN(A[0])||isNaN(A[1]))||0>=f&&(0===y||isNaN(A[0])||isNaN(A[1])))l(h,_);else{(isNaN(A[0])||isNaN(A[1]))&&(A=_),r.sub(u,A,S);var C,T;if("x"===g||"y"===g){var k="x"===g?0:1;C=Math.abs(_[k]-S[k]),T=Math.abs(_[k]-A[k])}else C=r.dist(_,S),T=r.dist(_,A);M=T/(T+C),s(h,_,u,-m*(1-M))}a(c,c,v),o(c,c,p),a(h,h,v),o(h,h,p),t[ci](c[0],c[1],h[0],h[1],_[0],_[1]),s(c,_,u,m*M)}else t[hi](_[0],_[1]);y+=f}return x}function i(t,e){var i=[1/0,1/0],n=[-(1/0),-(1/0)];if(e)for(var r=0;r<t[jr];r++){var a=t[r];a[0]<i[0]&&(i[0]=a[0]),a[1]<i[1]&&(i[1]=a[1]),a[0]>n[0]&&(n[0]=a[0]),a[1]>n[1]&&(n[1]=a[1])}return{min:e?i:n,max:e?n:i}}var n=t(li),r=t(vr),a=r.min,o=r.max,s=r.scaleAndAdd,l=r.copy,u=[],c=[],h=[];return{Polyline:n[Cr]({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null},style:{fill:null,stroke:"#000"},buildPath:function(t,n){for(var r=n[ti],a=0,o=r[jr],s=i(r,n.smoothConstraint);o>a;)a+=e(t,r,a,o,o,1,s.min,s.max,n.smooth,n.smoothMonotone)+1}}),Polygon:n[Cr]({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null},buildPath:function(t,n){for(var r=n[ti],a=n.stackedOnPoints,o=0,s=r[jr],l=n.smoothMonotone,u=i(r,n.smoothConstraint),c=i(a,n.smoothConstraint);s>o;){var h=e(t,r,o,s,s,1,u.min,u.max,n.smooth,l);e(t,a,o+h-1,s,h,-1,c.min,c.max,n.stackedOnSmooth,l),o+=h+1,t[ui]()}}})}}),e("echarts/chart/line/LineView",[Qr,Kr,ot,"../helper/Symbol","./lineAnimationDiff",xt,"./poly",at],function(t){function e(t,e){if(t[jr]===e[jr]){for(var i=0;i<t[jr];i++){var n=t[i],r=e[i];if(n[0]!==r[0]||n[1]!==r[1])return}return!0}}function i(t){return typeof t===Zr?t:t?.3:0}function n(t){var e=t.getGlobalExtent();if(t[rt]){var i=t[nt]()/2-1,n=e[1]>e[0]?1:-1;e[0]+=n*i,e[1]-=n*i}return e}function r(t){return t>=0?1:-1}function a(t,e){var i=t[tn](),n=t[ut](i),a=i.onZero?0:n.scale[lt]()[0],o=n.dim,s="x"===o||o===qn?1:0;return e[Et]([o],function(n,l){for(var u,c=e.stackedOn;c&&r(c.get(o,l))===r(n);){u=c;break}var h=[];return h[s]=e.get(i.dim,l),h[1-s]=u?u.get(o,l,!0):a,t[st](h)},!0)}function o(t,e){return null!=e[bi]?e[bi]:null!=e.name?t[_i](e.name):void 0}function s(t,e,i){var r=n(t[it]("x")),a=n(t[it]("y")),o=t[tn]().isHorizontal(),s=r[0],l=a[0],u=r[1]-s,c=a[1]-l;i.get("clipOverflow")||(o?(l-=c,c*=3):(s-=u,u*=3));var h=new p.Rect({shape:{x:s,y:l,width:u,height:c}});return e&&(h.shape[o?"width":ur]=0,p[Ee](h,{shape:{width:u,height:c}},i)),h}function l(t,e,i){var n=t.getAngleAxis(),r=t.getRadiusAxis(),a=r[lt](),o=n[lt](),s=Math.PI/180,l=new p[Ke]({shape:{cx:t.cx,cy:t.cy,r0:a[0],r:a[1],startAngle:-o[0]*s,endAngle:-o[1]*s,clockwise:n[et]}});return e&&(l.shape[ii]=-o[0]*s,p[Ee](l,{shape:{endAngle:-o[1]*s}},i)),l}function u(t,e,i){return"polar"===t.type?l(t,e,i):s(t,e,i)}var c=t(Kr),h=t(ot),d=t("../helper/Symbol"),f=t("./lineAnimationDiff"),p=t(xt),v=t("./poly"),m=t(at);return m[Cr]({type:"line",init:function(){var t=new p.Group,e=new h;this.group.add(e.group),this[tt]=e,this._lineGroup=t},render:function(t,n,r){var o=t[nn],s=this.group,l=t[En](),h=t[tr](Q),d=t[tr]("areaStyle.normal"),f=l[Et](l[zt],!0),p="polar"===o.type,v=this._coordSys,m=this[tt],g=this._polyline,y=this._polygon,x=this._lineGroup,_=t.get(Bi),w=!d.isEmpty(),b=a(o,l),M=t.get("showSymbol"),S=M&&!p&&!t.get("showAllSymbol")&&this._getSymbolIgnoreFunc(l,o),A=this._data;A&&A[xi](function(t,e){
t.__temp&&(s[Pi](t),A[Dt](e,null))}),M||m[Pi](),s.add(x),g&&v.type===o.type?(w&&!y?y=this._newPolygon(f,b,o,_):y&&!w&&(x[Pi](y),y=this._polygon=null),x.setClipPath(u(o,!1,t)),M&&m[gt](l,S),l[xi](function(t){t[Ei](!0)}),e(this._stackedOnPoints,b)&&e(this._points,f)||(_?this._updateAnimation(l,b,o,r):(g[ai]({points:f}),y&&y[ai]({points:f,stackedOnPoints:b})))):(M&&m[gt](l,S),g=this._newPolyline(f,o,_),w&&(y=this._newPolygon(f,b,o,_)),x.setClipPath(u(o,!0,t))),g[Ue](c[ir](h[J](),{stroke:l[Ot]("color"),lineJoin:"bevel"}));var C=t.get("smooth");if(C=i(t.get("smooth")),g[ai]({smooth:C,smoothMonotone:t.get("smoothMonotone")}),y){var T=l.stackedOn,k=0;if(y.style[xr]=.7,y[Ue](c[ir](d.getAreaStyle(),{fill:l[Ot]("color"),lineJoin:"bevel"})),T){var L=T[Qt];k=i(L.get("smooth"))}y[ai]({smooth:C,stackedOnSmooth:k,smoothMonotone:t.get("smoothMonotone")})}this._data=l,this._coordSys=o,this._stackedOnPoints=b,this._points=f},highlight:function(t,e,i,n){var r=t[En](),a=o(r,n);if(null!=a&&a>=0){var s=r[wi](a);if(!s){var l=r[zt](a);s=new d(r,a,i),s[Cn]=l,s.setZ(t.get(Ae),t.get("z")),s[Vi]=isNaN(l[0])||isNaN(l[1]),s.__temp=!0,r[Dt](a,s),s.stopSymbolAnimation(!0),this.group.add(s)}s[ee]()}else m[Jr][ee].call(this,t,e,i,n)},downplay:function(t,e,i,n){var r=t[En](),a=o(r,n);if(null!=a&&a>=0){var s=r[wi](a);s&&(s.__temp?(r[Dt](a,null),this.group[Pi](s)):s[te]())}else m[Jr][te].call(this,t,e,i,n)},_newPolyline:function(t){var e=this._polyline;return e&&this._lineGroup[Pi](e),e=new v[Ye]({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var i=this._polygon;return i&&this._lineGroup[Pi](i),i=new v[$e]({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(i),this._polygon=i,i},_getSymbolIgnoreFunc:function(t,e){var i=e.getAxesByScale(On)[0];return i&&i.isLabelIgnored?c.bind(i.isLabelIgnored,i):void 0},_updateAnimation:function(t,e,i,n){var r=this._polyline,a=this._polygon,o=t[Qt],s=f(this._data,t,this._stackedOnPoints,e,this._coordSys,i);r.shape[ti]=s.current,p[Ne](r,{shape:{points:s.next}},o),a&&(a[ai]({points:s.current,stackedOnPoints:s.stackedOnCurrent}),p[Ne](a,{shape:{points:s.next,stackedOnPoints:s.stackedOnNext}},o));for(var l=[],u=s.status,c=0;c<u[jr];c++){var h=u[c].cmd;if("="===h){var d=t[wi](u[c].idx1);d&&l.push({el:d,ptIdx:c})}}r.animators&&r.animators[jr]&&r.animators[0].during(function(){for(var t=0;t<l[jr];t++){var e=l[t].el;e.attr(Cn,r.shape[ti][l[t].ptIdx])}})},remove:function(t){this._lineGroup[Ai](),this[tt][Pi](!0),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}})}),e("echarts/visual/symbol",[Qr],function(t){return function(t,e,i,n,r){n.eachRawSeriesByType(t,function(t){var r=t[En](),a=t.get(pt)||e,o=t.get(vt);r[ve]({legendSymbol:i||a,symbol:a,symbolSize:o}),n[pe](t)||(typeof o===Br&&r.each(function(e){var i=t[Rn](e),n=t[Pn](e);r[fe](e,vt,o(i,n))}),r.each(function(t){var e=r[In](t),i=e.get(pt,!0),n=e.get(vt,!0);null!=i&&r[fe](t,pt,i),null!=n&&r[fe](t,vt,n)}))})}}),e("echarts/layout/points",[Qr],function(t){return function(t,e,i){e[de](t,function(t){var e=t[En](),i=t[nn],n=i[en];e.each(n,function(t,n,r){var a;a=isNaN(t)||isNaN(n)?[NaN,NaN]:i[st]([t,n]),e[It](r,a)},!0)})}}),e("echarts/chart/line",[Qr,Kr,K,"./line/LineSeries","./line/LineView",$,Y],function(t){var e=t(Kr),i=t(K);t("./line/LineSeries"),t("./line/LineView"),i[Xt]("chart",e.curry(t($),"line",ft,"line")),i[Yt](e.curry(t(Y),"line"))}),e("echarts/scale/Scale",[Qr,jn],function(t){function e(){this._extent=[1/0,-(1/0)],this._interval=0,this.init&&this.init.apply(this,arguments)}var i=t(jn),n=e[Jr];return n.parse=function(t){return t},n[vi]=function(t){var e=this._extent;return t>=e[0]&&t<=e[1]},n.normalize=function(t){var e=this._extent;return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},n.scale=function(t){var e=this._extent;return t*(e[1]-e[0])+e[0]},n[X]=function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},n[lt]=function(){return this._extent.slice()},n[j]=function(t,e){var i=this._extent;isNaN(t)||(i[0]=t),isNaN(e)||(i[1]=e)},n.getTicksLabels=function(){for(var t=[],e=this[U](),i=0;i<e[jr];i++)t.push(this[q](e[i]));return t},i[Tr](e),i[Sr](e,{registerWhenExtend:!0}),e}),e("echarts/scale/Ordinal",[Qr,Kr,"./Scale"],function(t){var e=t(Kr),i=t("./Scale"),n=i[Jr],r=i[Cr]({type:"ordinal",init:function(t,e){this._data=t,this._extent=e||[0,t[jr]-1]},parse:function(t){return typeof t===Fr?e[Hr](this._data,t):Math.round(t)},contain:function(t){return t=this.parse(t),n[vi].call(this,t)&&null!=this._data[t]},normalize:function(t){return n.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(n.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,i=e[0];i<=e[1];)t.push(i),i++;return t},getLabel:function(t){return this._data[t]},count:function(){return this._extent[1]-this._extent[0]+1},niceTicks:e.noop,niceExtent:e.noop});return r[lr]=function(){return new r},r}),e("echarts/scale/Interval",[Qr,"../util/number","../util/format","./Scale"],function(t){var e=t("../util/number"),i=t("../util/format"),n=t("./Scale"),r=Math.floor,a=Math.ceil,o=n[Cr]({type:"interval",_interval:0,setExtent:function(t,e){var i=this._extent;isNaN(t)||(i[0]=parseFloat(t)),isNaN(e)||(i[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent;t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),o[Jr][j].call(this,e[0],e[1])},getInterval:function(){return this._interval||this.niceTicks(),this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice()},getTicks:function(){this._interval||this.niceTicks();var t=this._interval,i=this._extent,n=[],r=1e4;if(t){var a=this._niceExtent;i[0]<a[0]&&n.push(i[0]);for(var o=a[0];o<=a[1];)if(n.push(o),o=e.round(o+t),n[jr]>r)return[];i[1]>a[1]&&n.push(i[1])}return n},getTicksLabels:function(){for(var t=[],e=this[U](),i=0;i<e[jr];i++)t.push(this[q](e[i]));return t},getLabel:function(t){return i[rn](t)},niceTicks:function(t){t=t||10;var i=this._extent,n=i[1]-i[0];if(!(n===1/0||0>=n)){var o=Math.pow(10,Math.floor(Math.log(n/t)/Math.LN10)),s=t/n*o;.15>=s?o*=10:.3>=s?o*=5:.45>=s?o*=3:.75>=s&&(o*=2);var l=[e.round(a(i[0]/o)*o),e.round(r(i[1]/o)*o)];this._interval=o,this._niceExtent=l}},niceExtent:function(t,i,n){var o=this._extent;if(o[0]===o[1])if(0!==o[0]){var s=o[0]/2;o[0]-=s,o[1]+=s}else o[1]=1;o[1]===-(1/0)&&o[0]===1/0&&(o[0]=0,o[1]=1),this.niceTicks(t,i,n);var l=this._interval;i||(o[0]=e.round(r(o[0]/l)*l)),n||(o[1]=e.round(a(o[1]/l)*l))}});return o[lr]=function(){return new o},o}),e("echarts/scale/Time",[Qr,Kr,"../util/number","../util/format","./Interval"],function(t){var e=t(Kr),i=t("../util/number"),n=t("../util/format"),r=t("./Interval"),a=r[Jr],o=Math.ceil,s=Math.floor,l=864e5,u=function(t,e,i,n){for(;n>i;){var r=i+n>>>1;t[r][2]<e?i=r+1:n=r}return i},c=r[Cr]({type:"time",getLabel:function(t){var e=this._stepLvl,i=new Date(t);return n.formatTime(e[0],i)},niceExtent:function(t,e,n){var r=this._extent;if(r[0]===r[1]&&(r[0]-=l,r[1]+=l),r[1]===-(1/0)&&r[0]===1/0){var a=new Date;r[1]=new Date(a.getFullYear(),a.getMonth(),a.getDate()),r[0]=r[1]-l}this.niceTicks(t,e,n);var u=this._interval;e||(r[0]=i.round(s(r[0]/u)*u)),n||(r[1]=i.round(o(r[1]/u)*u))},niceTicks:function(t){t=t||10;var e=this._extent,i=e[1]-e[0],n=i/t,r=h[jr],a=u(h,n,0,r),l=h[Math.min(a,r-1)],c=l[2],d=[o(e[0]/c)*c,s(e[1]/c)*c];this._stepLvl=l,this._interval=c,this._niceExtent=d},parse:function(t){return+i.parseDate(t)}});e.each([vi,"normalize"],function(t){c[Jr][t]=function(e){return a[t].call(this,this.parse(e))}});var h=[["hh:mm:ss",1,1e3],["hh:mm:ss",5,5e3],["hh:mm:ss",10,1e4],["hh:mm:ss",15,15e3],["hh:mm:ss",30,3e4],["hh:mm\nMM-dd",1,6e4],["hh:mm\nMM-dd",5,3e5],["hh:mm\nMM-dd",10,6e5],["hh:mm\nMM-dd",15,9e5],["hh:mm\nMM-dd",30,18e5],["hh:mm\nMM-dd",1,36e5],["hh:mm\nMM-dd",2,72e5],["hh:mm\nMM-dd",6,216e5],["hh:mm\nMM-dd",12,432e5],["MM-dd\nyyyy",1,l],["week",7,7*l],["month",1,31*l],["quarter",3,380*l/4],["half-year",6,380*l/2],["year",1,380*l]];return c[lr]=function(){return new c},c}),e("echarts/scale/Log",[Qr,Kr,"./Scale","../util/number","./Interval"],function(t){var e=t(Kr),i=t("./Scale"),n=t("../util/number"),r=t("./Interval"),a=i[Jr],o=r[Jr],s=Math.floor,l=Math.ceil,u=Math.pow,c=10,h=Math.log,d=i[Cr]({type:"log",getTicks:function(){return e.map(o[U].call(this),function(t){return n.round(u(c,t))})},getLabel:o[q],scale:function(t){return t=a.scale.call(this,t),u(c,t)},setExtent:function(t,e){t=h(t)/h(c),e=h(e)/h(c),o[j].call(this,t,e)},getExtent:function(){var t=a[lt].call(this);return t[0]=u(c,t[0]),t[1]=u(c,t[1]),t},unionExtent:function(t){t[0]=h(t[0])/h(c),t[1]=h(t[1])/h(c),a[X].call(this,t)},niceTicks:function(t){t=t||10;var e=this._extent,i=e[1]-e[0];if(!(i===1/0||0>=i)){var r=u(10,s(h(i/t)/Math.LN10)),a=t/i*r;.5>=a&&(r*=10);var o=[n.round(l(e[0]/r)*r),n.round(s(e[1]/r)*r)];this._interval=r,this._niceExtent=o}},niceExtent:o.niceExtent});return e.each([vi,"normalize"],function(t){d[Jr][t]=function(e){return e=h(e)/h(c),a[t].call(this,e)}}),d[lr]=function(){return new d},d}),e("echarts/coord/axisHelper",[Qr,"../scale/Ordinal","../scale/Interval","../scale/Time","../scale/Log","../scale/Scale","../util/number",Kr,or],function(t){var e=t("../scale/Ordinal"),i=t("../scale/Interval");t("../scale/Time"),t("../scale/Log");var n=t("../scale/Scale"),r=t("../util/number"),a=t(Kr),o=t(or),s={};return s[W]=function(t,e){var i=t.scale;if(i.type!==On){var n=e.get("min"),o=e.get("max"),s=!e.get("scale"),l=e.get(H);a[Or](l)||(l=[l||0,l||0]),l[0]=r[Rr](l[0],1),l[1]=r[Rr](l[1],1);var u=i[lt](),c=u[1]-u[0],h=!0,d=!0;null==n&&(n=u[0]-l[0]*c,h=!1),null==o&&(o=u[1]+l[1]*c,d=!1),"dataMin"===n&&(n=u[0]),"dataMax"===o&&(o=u[1]),s&&(n>0&&o>0&&!h&&(n=0),0>n&&0>o&&!d&&(o=0)),i[j](n,o),i.niceExtent(e.get(F),h,d);var f=e.get(Z);null!=f&&i.setInterval&&i.setInterval(f)}},s[G]=function(t,r){if(r=r||t.get("type"))switch(r){case At:return new e(t[St](),[1/0,-(1/0)]);case"value":return new i;default:return(n[Mr](r)||i)[lr](t)}},s.ifAxisCrossZero=function(t){var e=t.scale[lt](),i=e[0],n=e[1];return!(i>0&&n>0||0>i&&0>n)},s.getAxisLabelInterval=function(t,e,i,n){for(var r,a=0,s=0,l=0;l<t[jr];l++){var u=t[l],c=o[Jn](e[l],i,Vr,"top");c[n?"x":"y"]+=u,c[n?"width":ur]*=1.5,r?r[be](c)?(s++,a=Math.max(a,s)):(r.union(c),s=0):r=c.clone()}return a},s[B]=function(t,e){var i=t.scale,n=i.getTicksLabels(),r=i[U]();return typeof e===Fr?(e=function(t){return function(e){return t[Nr]("{value}",e)}}(e),a.map(n,e)):typeof e===Br?a.map(r,function(n,r){return e(t.type===At?i[q](n):n,r)},this):n},s}),e("echarts/coord/cartesian/Cartesian",[Qr,Kr],function(t){function e(t){return this._axes[t]}var i=t(Kr),n=function(t){this._axes={},this._dimList=[],this.name=t||""};return n[Jr]={constructor:n,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return i.map(this._dimList,e,this)},getAxesByScale:function(t){return t=t[Lr](),i[$r](this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,N)},coordToData:function(t){return this._dataCoordConvert(t,E)},_dataCoordConvert:function(t,e){for(var i=this._dimList,n=t instanceof Array?[]:{},r=0;r<i[jr];r++){var a=i[r],o=this._axes[a];n[a]=o[e](t[a])}return n}},n}),e("echarts/coord/cartesian/Cartesian2D",[Qr,Kr,"./Cartesian"],function(t){function e(t){n.call(this,t)}var i=t(Kr),n=t("./Cartesian");return e[Jr]={constructor:e,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale(On)[0]||this.getAxesByScale("time")[0]||this[it]("x")},containPoint:function(t){var e=this[it]("x"),i=this[it]("y");return e[vi](e.toLocalCoord(t[0]))&&i[vi](i.toLocalCoord(t[1]))},containData:function(t){return this[it]("x").containData(t[0])&&this[it]("y").containData(t[1])},dataToPoints:function(t,e){return t[Et](["x","y"],function(t,e){return this[st]([t,e])},e,this)},dataToPoint:function(t,e){var i=this[it]("x"),n=this[it]("y");return[i.toGlobalCoord(i[N](t[0],e)),n.toGlobalCoord(n[N](t[1],e))]},pointToData:function(t,e){var i=this[it]("x"),n=this[it]("y");return[i[E](i.toLocalCoord(t[0]),e),n[E](n.toLocalCoord(t[1]),e)]},getOtherAxis:function(t){return this[it]("x"===t.dim?"y":"x")}},i[Ar](e,n),e}),e("echarts/coord/Axis",[Qr,"../util/number",Kr],function(t){function e(t,e){var i=t[1]-t[0],n=e,r=i/n/2;t[0]+=r,t[1]-=r}var i=t("../util/number"),n=i[Er],r=t(Kr),a=function(t,e,i){this.dim=t,this.scale=e,this._extent=i||[0,0],this[et]=!1,this[rt]=!1};return a[Jr]={constructor:a,contain:function(t){var e=this._extent,i=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=i&&n>=t},containData:function(t){return this[vi](this[N](t))},getExtent:function(){var t=this._extent.slice();return t},getPixelPrecision:function(t){return i[Dr](t||this.scale[lt](),this._extent)},setExtent:function(t,e){var i=this._extent;i[0]=t,i[1]=e},dataToCoord:function(t,i){t=this.scale.normalize(t);var r=this[lt](),a=this.scale;return this[rt]&&a.type===On&&e(r,a.count()),n(t,[0,1],r,i)},coordToData:function(t,i){var r=this[lt]();this[rt]&&e(r,this.scale.count());var a=n(t,r,[0,1],i);return this.scale.scale(a)},getTicksCoords:function(){if(this[rt]){for(var t=this.getBands(),e=[],i=0;i<t[jr];i++)e.push(t[i][0]);return t[i-1]&&e.push(t[i-1][1]),e}return r.map(this.scale[U](),this[N],this)},getLabelsCoords:function(){if(this[rt]){for(var t,e=this.getBands(),i=[],n=0;n<e[jr];n++)t=e[n],i.push((t[0]+t[1])/2);return i}return r.map(this.scale[U](),this[N],this)},getBands:function(){for(var t=this[lt](),e=[],i=this.scale.count(),n=t[0],r=t[1],a=r-n,o=0;i>o;o++)e.push([a*o/i+n,a*(o+1)/i+n]);return e},getBandWidth:function(){var t=this._extent,e=this.scale[lt](),i=e[1]-e[0]+(this[rt]?1:0),n=Math.abs(t[1]-t[0]);return Math.abs(n)/i}},a}),e("echarts/coord/cartesian/axisLabelInterval",[Qr,Kr,"../axisHelper"],function(t){var e=t(Kr),i=t("../axisHelper");return function(t){var n=t.model,r=n[tr](O),a=r.get(Z);return t.type!==At||"auto"!==a?"auto"===a?0:a:i.getAxisLabelInterval(e.map(t.scale[U](),t[N],t),n[B](),r[tr](Qn)[Kn](),t.isHorizontal())}}),e("echarts/coord/cartesian/Axis2D",[Qr,Kr,"../Axis","./axisLabelInterval"],function(t){var e=t(Kr),i=t("../Axis"),n=t("./axisLabelInterval"),r=function(t,e,n,r,a){i.call(this,t,e,n),this.type=r||"value",this[Cn]=a||Ir};return r[Jr]={constructor:r,index:0,onZero:!1,model:null,isHorizontal:function(){var t=this[Cn];return"top"===t||t===Ir},getGlobalExtent:function(){var t=this[lt]();return t[0]=this.toGlobalCoord(t[0]),t[1]=this.toGlobalCoord(t[1]),t},getLabelInterval:function(){var t=this._labelInterval;return t||(t=this._labelInterval=n(this)),t},isLabelIgnored:function(t){if(this.type===At){var e=this.getLabelInterval();return typeof e===Br&&!e(t,this.scale[q](t))||t%(e+1)}},toLocalCoord:null,toGlobalCoord:null},e[Ar](r,i),r}),e("echarts/coord/axisDefault",[Qr,Kr],function(t){var e=t(Kr),i={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameTextStyle:{},nameGap:15,axisLine:{show:!0,onZero:!0,lineStyle:{color:"#333",width:1,type:"solid"}},axisTick:{show:!0,inside:!1,length:5,lineStyle:{color:"#333",width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{color:"#333",fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},n=e.merge({boundaryGap:!0,axisTick:{interval:"auto"},axisLabel:{interval:"auto"}},i),r=e[ir]({boundaryGap:[0,0],splitNumber:5},i),a=e[ir]({scale:!0,min:"dataMin",max:"dataMax"},r),o=e[ir]({},r);return o.scale=!0,{categoryAxis:n,valueAxis:r,timeAxis:a,logAxis:o}}),e("echarts/coord/axisModelCreator",[Qr,"./axisDefault",Kr,"../model/Component","../util/layout"],function(t){var e=t("./axisDefault"),i=t(Kr),n=t("../model/Component"),r=t("../util/layout"),a=["value",At,"time","log"];return function(t,o,s,l){i.each(a,function(n){o[Cr]({type:t+"Axis."+n,mergeDefaultAndTheme:function(e,a){var o=this.layoutMode,l=o?r.getLayoutParams(e):{},u=a.getTheme();i.merge(e,u.get(n+"Axis")),i.merge(e,this.getDefaultOption()),e.type=s(t,e),o&&r.mergeLayoutParam(e,l,o)},defaultOption:i.mergeAll([{},e[n+"Axis"],l],!0)})}),n[kn](t+"Axis",i.curry(s,t))}}),e("echarts/coord/axisModelCommonMixin",[Qr,Kr,"./axisHelper"],function(t){function e(t){return r[Ln](t)&&null!=t.value?t.value:t}function i(){return this.get("type")===At&&r.map(this.get("data"),e)}function n(){return a[B](this.axis,this.get("axisLabel.formatter"))}var r=t(Kr),a=t("./axisHelper");return{getFormattedLabels:n,getCategories:i}}),e("echarts/coord/cartesian/AxisModel",[Qr,R,Kr,"../axisModelCreator","../axisModelCommonMixin"],function(t){function e(t,e){return e.type||(e.data?At:"value")}var i=t(R),n=t(Kr),r=t("../axisModelCreator"),a=i[Cr]({type:"cartesian2dAxis",axis:null,setNeedsCrossZero:function(t){this[Un].scale=!t},setMin:function(t){this[Un].min=t},setMax:function(t){this[Un].max=t}});n.merge(a[Jr],t("../axisModelCommonMixin"));var o={gridIndex:0};return r("x",a,e,o),r("y",a,e,o),a}),e("echarts/coord/cartesian/GridModel",[Qr,"./AxisModel",R],function(t){t("./AxisModel");var e=t(R);return e[Cr]({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}})}),e("echarts/coord/cartesian/Grid",[Qr,"exports","module",V,z,Kr,"./Cartesian2D","./Axis2D","./GridModel",Ct],function(t,e){function i(t,e,i){return i[on]("grid",t.get("gridIndex"))===e}function n(t){for(var e,i=t.model,n=i[B](),r=0;r<n[jr];r++)if(!t.isLabelIgnored(r)){var a=i.getTextRect(n[r]);e?e.union(a):e=a}return e}function r(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i)}function a(t,e){var i=t[lt](),n=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}var o=t(V),s=t(z),l=t(Kr),u=t("./Cartesian2D"),c=t("./Axis2D"),h=l.each,d=s.ifAxisCrossZero,f=s[W];t("./GridModel");var p=r[Jr];return p.type="grid",p[I]=function(){return this._rect},p[Me]=function(t,e){function i(){h(s,function(t){var e=t.isHorizontal(),i=e?[0,r.width]:[0,r[ur]],n=t[et]?1:0;t[j](i[n],i[1-n]),a(t,e?r.x:r.y)})}var r=o[wn](t[P](),{width:e[cn](),height:e[un]()});this._rect=r;var s=this._axesList;i(),t.get("containLabel")&&(h(s,function(t){if(!t.model.get("axisLabel.inside")){var e=n(t);if(e){var i=t.isHorizontal()?ur:"width",a=t.model.get("axisLabel.margin");r[i]-=e[i]+a,"top"===t[Cn]?r.y+=e[ur]+a:"left"===t[Cn]&&(r.x+=e.width+a)}}}),i())},p[it]=function(t,e){if(null!=e){var i=t+e;return this._axesMap[i]}for(var n=this._axesList,r=0;r<n[jr];r++)if(n[r].dim===t)return n[r]},p.getCartesian=function(t,e){var i="x"+t+"y"+e;return this._coordsMap[i]},p._initCartesian=function(t,e,n){function r(t){var e=l[t];for(var i in e){var n=e[i];if(n&&(n.type===At||!d(n)))return!0}return!1}function a(n){return function(r,a){if(i(r,t,e)){var u=r.get(Cn);"x"===n?("top"!==u&&u!==Ir&&(u=Ir),o[u]&&(u="top"===u?Ir:"top")):("left"!==u&&"right"!==u&&(u="left"),o[u]&&(u="left"===u?"right":"left")),o[u]=!0;var h=new c(n,s[G](r),[0,0],r.get("type"),u),d=h.type===At;h[rt]=d&&r.get(H),h[et]=r.get(et),h.onZero=r.get("axisLine.onZero"),r.axis=h,h.model=r,h.index=a,this._axesList.push(h),this._axesMap[n+a]=h,l[n][a]=h,p[n]++}}}var o={left:!1,right:!1,top:!1,bottom:!1},l={x:{},y:{}},p={x:0,y:0};return e[ie]("xAxis",a("x"),this),e[ie]("yAxis",a("y"),this),p.x&&p.y?(h(l.x,function(t,e){h(l.y,function(i,n){var r="x"+e+"y"+n,a=new u(r);a.grid=this,this._coordsMap[r]=a,this._coordsList.push(a),a.addAxis(t),a.addAxis(i)},this)},this),this._updateCartesianFromSeries(e,t),h(l.x,function(t){f(t,t.model)}),h(l.y,function(t){f(t,t.model)}),h(l.x,function(t){r("y")&&(t.onZero=!1)}),void h(l.y,function(t){r("x")&&(t.onZero=!1)})):(this._axesMap={},void(this._axesList=[]))},p._updateCartesianFromSeries=function(t,e){function n(t,e,i,n){h(n[L](i),function(i){e.scale[X](t[Gt](i,e.scale.type!==On))})}t[he](function(r){if(r.get(nn)===D){var a=r.get("xAxisIndex"),o=r.get("yAxisIndex"),s=t[on]("xAxis",a),l=t[on]("yAxis",o);if(!i(s,e,t)||!i(l,e,t))return;var u=this.getCartesian(a,o),c=r[En]();"list"===c.type&&(n(c,u[it]("x"),"x",r),n(c,u[it]("y"),"y",r))}},this)},r[lr]=function(t,e){var i=[];return t[ie]("grid",function(n,a){var o=new r(n,t,e);o.name="grid_"+a,o[Me](n,e),n[nn]=o,i.push(o)}),t[he](function(e){if(e.get(nn)===D){var n=e.get("xAxisIndex"),r=t[on]("xAxis",n),a=i[r.get("gridIndex")];e[nn]=a.getCartesian(n,e.get("yAxisIndex"))}}),i},r[en]=u[Jr][en],t(Ct)[sn]("grid",r),r}),e("echarts/chart/bar/BarSeries",[Qr,bt,Mt],function(t){var e=t(bt),i=t(Mt);return e[Cr]({type:"series.bar",dependencies:["grid","polar"],getInitialData:function(t,e){return i(t.data,this,e)},getMarkerPosition:function(t){var e=this[nn];if(e){var i=e[st](t),n=this[En](),r=n[Vt](Qe),a=n[Vt]("size"),o=e[tn]().isHorizontal()?0:1;return i[o]+=r+a/2,i}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,xAxisIndex:0,yAxisIndex:0,barMinHeight:0,itemStyle:{normal:{barBorderColor:"#fff",barBorderWidth:0},emphasis:{barBorderColor:"#fff",barBorderWidth:0}}}})}),e("echarts/chart/bar/barItemStyle",[Qr,"../../model/mixin/makeStyleMapper"],function(t){return{getBarItemStyle:t("../../model/mixin/makeStyleMapper")([["fill","color"],[_r,"barBorderColor"],[wr,"barBorderWidth"],[xr],[yr],[gr],["shadowOffsetY"],[mr]])}}),e("echarts/chart/bar/BarView",[Qr,Kr,xt,k,"./barItemStyle",T],function(t){function e(t,e){var i=t.width>0?1:-1,n=t[ur]>0?1:-1;e=Math.min(e,Math.abs(t.width),Math.abs(t[ur])),t.x+=i*e/2,t.y+=n*e/2,t.width-=i*e,t[ur]-=n*e}var i=t(Kr),n=t(xt);return i[Cr](t(k)[Jr],t("./barItemStyle")),t(T)[jt]({type:"bar",render:function(t,e,i){var n=t.get(nn);return n===D&&this._renderOnCartesian(t,e,i),this.group},_renderOnCartesian:function(t,r,a){function o(r,a){var o=l[zt](r),s=l[In](r).get(p)||0;e(o,s);var u=new n.Rect({shape:i[Cr]({},o)});if(f){var c=u.shape,h=d?ur:"width",v={};c[h]=0,v[h]=o[h],n[a?Ne:Ee](u,{shape:v},t)}return u}var s=this.group,l=t[En](),u=this._data,c=t[nn],h=c[tn](),d=h.isHorizontal(),f=t.get(Bi),p=[ue,Gn,"barBorderWidth"];l.diff(u).add(function(t){if(l.hasValue(t)){var e=o(t);l[Dt](t,e),s.add(e)}})[Se](function(i,r){var a=u[wi](r);if(!l.hasValue(i))return void s[Pi](a);a||(a=o(i,!0));var c=l[zt](i),h=l[In](i).get(p)||0;e(c,h),n[Ne](a,{shape:c},t),l[Dt](i,a),s.add(a)})[Pi](function(e){var i=u[wi](e);i&&(i.style.text="",n[Ne](i,{shape:{width:0}},t,function(){s[Pi](i)}))})[ct](),this._updateStyle(t,l,d),this._data=l},_updateStyle:function(t,e,r){function a(t,e,i,r,a){n[Ze](t,e,i),t.text=r,"outside"===t[yi]&&(t[yi]=a)}e[xi](function(o,s){var l=e[In](s),u=e[Pt](s,"color"),c=e[zt](s),h=l[tr](C),d=l[tr](A)[dt]();o[ai]("r",h.get("barBorderRadius")||0),o[Ue](i[ir]({fill:u},h.getBarItemStyle()));var f=r?c[ur]>0?Ir:"top":c.width>0?"left":"right",p=l[tr](S),v=l[tr](M),m=o.style;p.get("show")?a(m,p,u,t[ht](s,Gn)||t[Rn](s),f):m.text="",v.get("show")?a(d,v,u,t[ht](s,Zn)||t[Rn](s),f):d.text="",n[We](o,d)})},remove:function(t,e){var i=this.group;t.get(Bi)?this._data&&this._data[xi](function(e){e.style.text="",n[Ne](e,{shape:{width:0}},t,function(){i[Pi](e)})}):i[Ai]()}})}),e("echarts/layout/barGrid",[Qr,Kr,"../util/number"],function(t){function e(t){return t.get("stack")||"__ec_stack_"+t[Nn]}function i(t,i){var n={};r.each(t,function(t,i){var r=t[nn],a=r[tn](),o=n[a.index]||{remainedWidth:a[nt](),autoWidthCount:0,categoryGap:"20%",gap:"30%",axis:a,stacks:{}},s=o.stacks;n[a.index]=o;var l=e(t);s[l]||o.autoWidthCount++,s[l]=s[l]||{width:0,maxWidth:0};var u=t.get("barWidth"),c=t.get("barMaxWidth"),h=t.get("barGap"),d=t.get("barCategoryGap");u&&!s[l].width&&(u=Math.min(o.remainedWidth,u),s[l].width=u,o.remainedWidth-=u),c&&(s[l].maxWidth=c),null!=h&&(o.gap=h),null!=d&&(o.categoryGap=d)});var a={};return r.each(n,function(t,e){a[e]={};var i=t.stacks,n=t.axis,s=n[nt](),l=o(t.categoryGap,s),u=o(t.gap,1),c=t.remainedWidth,h=t.autoWidthCount,d=(c-l)/(h+(h-1)*u);d=Math.max(d,0),r.each(i,function(t,e){var i=t.maxWidth;!t.width&&i&&d>i&&(i=Math.min(i,c),c-=i,t.width=i,h--)}),d=(c-l)/(h+(h-1)*u),d=Math.max(d,0);var f,p=0;r.each(i,function(t,e){t.width||(t.width=d),f=t,p+=t.width*(1+u)}),f&&(p-=f.width*u);var v=-p/2;r.each(i,function(t,i){a[e][i]=a[e][i]||{offset:v,width:t.width},v+=t.width*(1+u)})}),a}function n(t,n,a){var o=i(r[$r](n.getSeriesByType(t),function(t){return!n[pe](t)&&t[nn]&&t[nn].type===D})),s={};n[de](t,function(t){var i=t[En](),n=t[nn],r=n[tn](),a=e(t),l=o[r.index][a],u=l[Qe],c=l.width,h=n[ut](r),d=t.get("barMinHeight")||0,f=r.onZero?h.toGlobalCoord(h[N](0)):h.getGlobalExtent()[0],p=n.dataToPoints(i,!0);s[a]=s[a]||[],i[Rt]({offset:u,size:c}),i.each(h.dim,function(t,e){if(!isNaN(t)){s[a][e]||(s[a][e]={p:f,n:f});var n,r,o,l,v=t>=0?"p":"n",m=p[e],g=s[a][e][v];h.isHorizontal()?(n=g,r=m[1]+u,o=m[0]-g,l=c,Math.abs(o)<d&&(o=(0>o?-1:1)*d),s[a][e][v]+=o):(n=m[0]+u,r=g,o=c,l=m[1]-g,Math.abs(l)<d&&(l=(0>=l?-1:1)*d),s[a][e][v]+=l),i[It](e,{x:n,y:r,width:o,height:l})}},!0)},this)}var r=t(Kr),a=t("../util/number"),o=a[Rr];return n}),e("echarts/chart/bar",[Qr,Kr,"../coord/cartesian/Grid","./bar/BarSeries","./bar/BarView","../layout/barGrid",K],function(t){var e=t(Kr);t("../coord/cartesian/Grid"),t("./bar/BarSeries"),t("./bar/BarView");var i=t("../layout/barGrid"),n=t(K);n[Yt](e.curry(i,"bar")),n[Xt]("chart",function(t){t[de]("bar",function(t){var e=t[En]();e[ve]("legendSymbol","roundRect")})})}),e("echarts/component/axis/AxisBuilder",[Qr,Kr,xt,k,yt],function(t){function e(t,e,i){var n,r,a=s(e-t[$i]);return l(a)?(r=i>0?"top":Ir,n=Vr):l(a-u)?(r=i>0?Ir:"top",n=Vr):(r=zr,n=a>0&&u>a?i>0?"right":"left":i>0?"left":"right"),{rotation:a,textAlign:n,textBaseline:r}}function i(t,e,i){var n,r,a=s(-t[$i]),o=i[0]>i[1],c="start"===e&&!o||"start"!==e&&o;return l(a-u/2)?(r=c?Ir:"top",n=Vr):l(a-1.5*u)?(r=c?"top":Ir,n=Vr):(r=zr,n=1.5*u>a&&a>u/2?c?"left":"right":c?"right":"left"),{rotation:a,textAlign:n,textBaseline:r}}var n=t(Kr),r=t(xt),a=t(k),o=t(yt),s=o.remRadian,l=o.isRadianAroundZero,u=Math.PI,c=function(t,e){this.opt=e,this.axisModel=t,n[ir](e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new r.Group({position:e[Cn].slice(),rotation:e[$i]})};c[Jr]={constructor:c,hasBuilder:function(t){return!!h[t]},add:function(t){h[t].call(this)},getGroup:function(){return this.group}};var h={axisLine:function(){var t=this.opt,e=this.axisModel;if(e.get("axisLine.show")){var i=this.axisModel.axis[lt]();this.group.add(new r.Line({shape:{x1:i[0],y1:0,x2:i[1],y2:0},style:n[Cr]({lineCap:"round"},e[tr]("axisLine.lineStyle")[J]()),strokeContainThreshold:t.strokeContainThreshold,silent:!!t[Ce],z2:1}))}},axisTick:function(){var t=this.axisModel;if(t.get("axisTick.show")){for(var e=t.axis,i=t[tr](b),n=this.opt,a=i[tr](ce),o=i.get(jr),s=f(i,n.labelInterval),l=e.getTicksCoords(),u=[],c=0;c<l[jr];c++)if(!d(e,c,s)){var h=l[c];u.push(new r.Line(r.subPixelOptimizeLine({shape:{x1:h,y1:0,x2:h,y2:n.tickDirection*o},style:{lineWidth:a.get("width")},silent:!0})))}this.group.add(r.mergePath(u,{style:a[J](),silent:!0}))}},axisLabel:function(){function t(t,e){var i=t&&t[Jn]().clone(),n=e&&e[Jn]().clone();return i&&n?(i[cr](t[qi]()),n[cr](e[qi]()),i[be](n)):void 0}var i=this.axisModel;if(i.get("axisLabel.show")){var n=this.opt,o=i.axis,s=i[tr](O),l=s[tr](Qn),c=s.get(_n),h=o.scale[U](),f=i[B](),p=n.labelRotation;null==p&&(p=s.get(Hi)||0),p=p*u/180;for(var v=e(n,p,n.labelDirection),m=i.get("data"),g=[],y=0;y<h[jr];y++)if(!d(o,y,n.labelInterval)){var x=l;m&&m[y]&&m[y][Qn]&&(x=new a(m[y][Qn],l,i[er]));var _=o[N](h[y]),w=[_,n.labelOffset+n.labelDirection*c],b=new r.Text({style:{text:f[y],textAlign:x.get("align",!0)||v[gi],textBaseline:x.get($n,!0)||v[mi],textFont:x[Kn](),fill:x[Ge]()},position:w,rotation:v[$i],silent:!0,z2:10});g.push(b),this.group.add(b)}if(o.type!==At){if(i.get("min")){var M=g[0],S=g[1];t(M,S)&&(M[Vi]=!0)}if(i.get("max")){var A=g[g[jr]-1],C=g[g[jr]-2];t(C,A)&&(A[Vi]=!0)}}}},axisName:function(){var t=this.opt,n=this.axisModel,a=this.opt.axisName;if(null==a&&(a=n.get("name")),a){var o,s=n.get("nameLocation"),l=t.nameDirection,u=n[tr]("nameTextStyle"),c=n.get("nameGap")||0,h=this.axisModel.axis[lt](),d=h[0]>h[1]?-1:1,f=["start"===s?h[0]-d*c:"end"===s?h[1]+d*c:(h[0]+h[1])/2,s===zr?t.labelOffset+l*c:0];o=s===zr?e(t,t[$i],l):i(t,s,h),this.group.add(new r.Text({style:{text:a,textFont:u[Kn](),fill:u[Ge]()||n.get("axisLine.lineStyle.color"),textAlign:o[gi],textBaseline:o[mi]},position:f,rotation:o[$i],silent:!0,z2:1}))}}},d=c.ifIgnoreOnTick=function(t,e,i){var n,r=t.scale;return r.type===On&&(typeof i===Br?(n=r[U]()[e],!i(n,r[q](n))):e%(i+1))},f=c.getInterval=function(t,e){var i=t.get(Z);return(null==i||"auto"==i)&&(i=e),i};return c}),e("echarts/component/axis/AxisView",[Qr,Kr,xt,"./AxisBuilder",T],function(t){function e(t,e){function i(t,e){var i=n[it](t);return i.toGlobalCoord(i[N](0))}var n=t[nn],r=e.axis,a={},o=r[Cn],s=r.onZero?"onZero":o,l=r.dim,u=n[I](),c=[u.x,u.x+u.width,u.y,u.y+u[ur]],h={x:{top:c[2],bottom:c[3]},y:{left:c[0],right:c[1]}};h.x.onZero=Math.max(Math.min(i("y"),h.x[Ir]),h.x.top),h.y.onZero=Math.max(Math.min(i("x"),h.y.right),h.y.left),a[Cn]=["y"===l?h.y[s]:c[0],"x"===l?h.x[s]:c[3]];var d={x:0,y:1};a[$i]=Math.PI/2*d[l];var f={top:-1,bottom:1,left:-1,right:1};a.labelDirection=a.tickDirection=a.nameDirection=f[o],r.onZero&&(a.labelOffset=h[l][o]-h[l].onZero),e[tr](b).get(nr)&&(a.tickDirection=-a.tickDirection),e[tr](O).get(nr)&&(a.labelDirection=-a.labelDirection);var p=e[tr](O).get(Hi);return a.labelRotation="top"===s?-p:p,a.labelInterval=r.getLabelInterval(),a.z2=1,a}var i=t(Kr),n=t(xt),r=t("./AxisBuilder"),a=r.ifIgnoreOnTick,o=r.getInterval,s=[w,O,b,"axisName"],l=["splitLine","splitArea"],u=t(T)[Wt]({type:"axis",render:function(t,n){if(this.group[Ai](),t.get("show")){var a=n[on]("grid",t.get("gridIndex")),o=e(a,t),u=new r(t,o);i.each(s,u.add,u),this.group.add(u.getGroup()),i.each(l,function(e){t.get(e+".show")&&this["_"+e](t,a,o.labelInterval)},this)}},_splitLine:function(t,e,i){var r=t.axis,s=t[tr]("splitLine"),l=s[tr](ce),u=l.get("width"),c=l.get("color"),h=o(s,i);c=c instanceof Array?c:[c];for(var d=e[nn][I](),f=r.isHorizontal(),p=[],v=0,m=r.getTicksCoords(),g=[],y=[],x=0;x<m[jr];x++)if(!a(r,x,h)){var _=r.toGlobalCoord(m[x]);f?(g[0]=_,g[1]=d.y,y[0]=_,y[1]=d.y+d[ur]):(g[0]=d.x,g[1]=_,y[0]=d.x+d.width,y[1]=_);var w=v++%c[jr];p[w]=p[w]||[],p[w].push(new n.Line(n.subPixelOptimizeLine({shape:{x1:g[0],y1:g[1],x2:y[0],y2:y[1]},style:{lineWidth:u},silent:!0})))}for(var x=0;x<p[jr];x++)this.group.add(n.mergePath(p[x],{style:{stroke:c[x%c[jr]],lineDash:l.getLineDash(),lineWidth:u},silent:!0}))},_splitArea:function(t,e,i){var r=t.axis,s=t[tr]("splitArea"),l=s.get("areaStyle.color"),u=e[nn][I](),c=r.getTicksCoords(),h=r.toGlobalCoord(c[0]),d=r.toGlobalCoord(c[0]),f=[],p=0,v=o(s,i);l=l instanceof Array?l:[l];for(var m=1;m<c[jr];m++)if(!a(r,m,v)){var g,y,x,_,w=r.toGlobalCoord(c[m]);r.isHorizontal()?(g=h,y=u.y,x=w-g,_=u[ur]):(g=u.x,y=d,x=u.width,_=w-y);var b=p++%l[jr];f[b]=f[b]||[],f[b].push(new n.Rect({shape:{x:g,y:y,width:x,height:_},silent:!0})),h=g+x,d=y+_}for(var m=0;m<f[jr];m++)this.group.add(n.mergePath(f[m],{style:{fill:l[m%l[jr]]},silent:!0}))}});u[Cr]({type:"xAxis"}),u[Cr]({type:"yAxis"})}),e("echarts/component/axis",[Qr,"../coord/cartesian/AxisModel","./axis/AxisView"],function(t){t("../coord/cartesian/AxisModel"),t("./axis/AxisView")}),e("echarts/component/grid",[Qr,"../util/graphic",Kr,"../coord/cartesian/Grid","./axis",K],function(t){var e=t("../util/graphic"),i=t(Kr);t("../coord/cartesian/Grid"),t("./axis"),t(K)[Wt]({type:"grid",render:function(t,n){this.group[Ai](),t.get("show")&&this.group.add(new e.Rect({shape:t[nn][I](),style:i[ir]({fill:t.get(xe)},t[dt]()),silent:!0}))}})}),e("echarts/chart/helper/dataSelectableMixin",[Qr,Kr],function(t){
var e=t(Kr);return{updateSelectedMap:function(){var t=this[Un];this._dataOptMap=e[Yr](t.data,function(t,e){return t[e.name]=e,t},{})},select:function(t){var i=this._dataOptMap,n=i[t],r=this.get(_);r===x&&e.each(i,function(t){t[y]=!1}),n&&(n[y]=!0)},unSelect:function(t){var e=this._dataOptMap[t];e&&(e[y]=!1)},toggleSelected:function(t){var e=this._dataOptMap[t];return null!=e?(this[e[y]?"unSelect":"select"](t),e[y]):void 0},isSelected:function(t){var e=this._dataOptMap[t];return e&&e[y]}}}),e("echarts/chart/pie/PieSeries",[Qr,Lt,Kr,Tt,kt,"../helper/dataSelectableMixin",T],function(t){var e=t(Lt),i=t(Kr),n=t(Tt),r=t(kt),a=t("../helper/dataSelectableMixin"),o=t(T)[qt]({type:"series.pie",init:function(t){this[g]("init",arguments),this[m]=function(){return this._dataBeforeProcessed},this.updateSelectedMap(),this._defaultLabelLine(t)},mergeOption:function(t){this.$superCall(mn,t),this.updateSelectedMap()},getInitialData:function(t,i){var n=r(["value"],t.data),a=new e(n,this);return a[Ft](t.data),a},getDataParams:function(t){var e=this._data,i=this.$superCall(Pn,t);return i.percent=+(e.get("value",t)/e[Bt]("value")*100)[Pr](2),i.$vars.push("percent"),i},_defaultLabelLine:function(t){n[Fn](t.labelLine,["show"]);var e=t.labelLine[Gn],i=t.labelLine[Zn];e.show=e.show&&t.label[Gn].show,i.show=i.show&&t.label[Zn].show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,selectedOffset:10,avoidLabelOverlap:!0,label:{normal:{rotate:!1,show:!0,position:"outer"},emphasis:{}},labelLine:{normal:{show:!0,length:20,length2:5,smooth:!1,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"rgba(0,0,0,0)",borderWidth:1},emphasis:{borderColor:"rgba(0,0,0,0)",borderWidth:1}},animationEasing:"cubicOut",data:[]}});return i.mixin(o,a),o}),e("echarts/chart/pie/PieView",[Qr,xt,Kr,at],function(t){function e(t,e,n,r){var a=e[En](),o=this[bi],s=a[zn](o),l=e.get("selectedOffset");r[ln]({type:"pieToggleSelect",from:t,name:s,seriesId:e.id}),a.each(function(t){i(a[wi](t),a[zt](t),e.isSelected(a[zn](t)),l,n)})}function i(t,e,i,n,r){var a=(e[ni]+e[ii])/2,o=Math.cos(a),s=Math.sin(a),l=i?n:0,u=[o*l,s*l];r?t[Oi]().when(200,{position:u}).start("bounceOut"):t.attr(Cn,u)}function n(t,e){function i(){o[Vi]=o.hoverIgnore,s[Vi]=s.hoverIgnore}function n(){o[Vi]=o.normalIgnore,s[Vi]=s.normalIgnore}a.Group.call(this);var r=new a[Ke]({z2:2}),o=new a[Ye],s=new a.Text;this.add(r),this.add(o),this.add(s),this[gt](t,e,!0),this.on(Zn,i).on(Gn,n).on(He,i).on(Fe,n)}function r(t,e,i,n){var r=n[tr](Qn),a=n.get(Cn),o=a===nr||"inner"===a;return{fill:r[Ge]()||(o?"#fff":t[Pt](e,"color")),textFont:r[Kn](),text:t[Qt][ht](e,i)||t[zn](e)}}var a=t(xt),o=t(Kr),s=n[Jr];s[gt]=function(t,e,n){function r(){l[Ei](!0),l[Be]({shape:{r:h.r+10}},300,"elasticOut")}function s(){l[Ei](!0),l[Be]({shape:{r:h.r}},300,"elasticOut")}var l=this[An](0),u=t[Qt],c=t[In](e),h=t[zt](e),d=o[Cr]({},h);d.label=null,n?(l[ai](d),l.shape[ii]=h[ni],a[Ne](l,{shape:{endAngle:h[ii]}},u)):a[Ne](l,{shape:d},u);var f=c[tr](ue),p=t[Pt](e,"color");l[Ue](o[ir]({fill:p},f[tr](Gn)[dt]())),l[qe]=f[tr](Zn)[dt](),i(this,t[zt](e),c.get(y),u.get("selectedOffset"),u.get(Bi)),l.off(He).off(Fe).off(Zn).off(Gn),c.get("hoverAnimation")&&l.on(He,r).on(Fe,s).on(Zn,r).on(Gn,s),this._updateLabel(t,e),a[We](this)},s._updateLabel=function(t,e){var i=this[An](1),n=this[An](2),o=t[Qt],s=t[In](e),l=t[zt](e),u=l.label,c=t[Pt](e,"color");a[Ne](i,{shape:{points:u.linePoints||[[u.x,u.y],[u.x,u.y],[u.x,u.y]]}},o),a[Ne](n,{style:{x:u.x,y:u.y}},o),n.attr({style:{textAlign:u[gi],textBaseline:u[mi],textFont:u.font},rotation:u[$i],origin:[u.x,u.y],z2:10});var h=s[tr](S),d=s[tr](M),f=s[tr]("labelLine.normal"),p=s[tr]("labelLine.emphasis");n[Ue](r(t,e,Gn,h)),n[Vi]=n.normalIgnore=!h.get("show"),n.hoverIgnore=!d.get("show"),i[Vi]=i.normalIgnore=!f.get("show"),i.hoverIgnore=!p.get("show"),i[Ue]({stroke:c}),i[Ue](f[tr](ce)[J]()),n[qe]=r(t,e,Zn,d),i[qe]=p[tr](ce)[J]();var v=f.get("smooth");v&&v===!0&&(v=.4),i[ai]({smooth:v})},o[Ar](n,a.Group);var l=t(at)[Cr]({type:"pie",init:function(){var t=new a.Group;this._sectorGroup=t},render:function(t,i,r,a){if(!a||a.from!==this.uid){var s=t[En](),l=this._data,u=this.group,c=i.get(Bi),h=!l,d=o.curry(e,this.uid,t,c,r),f=t.get(_);if(s.diff(l).add(function(t){var e=new n(s,t);h&&e[Tn](function(t){t[Ei](!0)}),f&&e.on("click",d),s[Dt](t,e),u.add(e)})[Se](function(t,e){var i=l[wi](e);i[gt](s,t),i.off("click"),f&&i.on("click",d),u.add(i),s[Dt](t,i)})[Pi](function(t){var e=l[wi](t);u[Pi](e)})[ct](),c&&h&&s.count()>0){var p=s[zt](0),v=Math.max(r[cn](),r[un]())/2,m=o.bind(u.removeClipPath,u);u.setClipPath(this._createClipPath(p.cx,p.cy,v,p[ni],p[ei],m,t))}this._data=s}},_createClipPath:function(t,e,i,n,r,o,s){var l=new a[Ke]({shape:{cx:t,cy:e,r0:0,r:i,startAngle:n,endAngle:n,clockwise:r}});return a[Ee](l,{shape:{endAngle:n+(r?1:-1)*Math.PI*2}},s,o),l}});return l}),e("echarts/action/createDataSelectAction",[Qr,K,Kr],function(t){var e=t(K),i=t(Kr);return function(t,n){i.each(n,function(i){i[Se]="updateView",e[$t](i,function(e,n){var r={};return n[ie]({mainType:"series",subType:t,query:e},function(t){t[i.method]&&t[i.method](e.name);var n=t[En]();n.each(function(e){var i=n[zn](e);r[i]=t.isSelected(i)||!1})}),{name:e.name,selected:r}})})}}),e("echarts/visual/dataColor",[Qr],function(t){return function(t,e){var i=e.get("color"),n=0;e.eachRawSeriesByType(t,function(t){var r=t.get("color",!0),a=t.getRawData();if(!e[pe](t)){var o=t[En]();o.each(function(t){var e=o[In](t),s=o[Vn](t),l=o[Pt](t,"color",!0);if(l)a[fe](s,"color",l);else{var u=r?r[s%r[jr]]:i[(s+n)%i[jr]],c=e.get(re)||u;a[fe](s,"color",c),o[fe](t,"color",c)}})}n+=a.count()})}}),e("echarts/chart/pie/labelLayout",[Qr,or],function(t){function e(t,e,i,n,r,a,o){function s(e,i,n,r){for(var a=e;i>a;a++)if(t[a].y+=n,a>e&&i>a+1&&t[a+1].y>t[a].y+t[a][ur])return void l(a,n/2);l(i-1,n/2)}function l(e,i){for(var n=e;n>=0&&(t[n].y-=i,!(n>0&&t[n].y>t[n-1].y+t[n-1][ur]));n--);}t.sort(function(t,e){return t.y-e.y});for(var u,c=0,h=t[jr],d=[],f=[],p=0;h>p;p++)u=t[p].y-c,0>u&&s(p,h,-u,r),c=t[p].y+t[p][ur];0>o-c&&l(h-1,c-o);for(var p=0;h>p;p++)t[p].y>=i?f.push(t[p]):d.push(t[p])}function i(t,i,n,r,a,o){for(var s=[],l=[],u=0;u<t[jr];u++)t[u].x<i?s.push(t[u]):l.push(t[u]);e(s,i,n,r,-1,a,o),e(l,i,n,r,1,a,o);for(var u=0;u<t[jr];u++){var c=t[u].linePoints;c&&(t[u].x<i?c[2][0]=t[u].x+3:c[2][0]=t[u].x-3,c[1][1]=c[2][1]=t[u].y)}}var n=t(or);return function(t,e,r,a){var o,s,l=t[En](),u=[],c=!1;l.each(function(i){var r,a,h,d,f=l[zt](i),p=l[In](i),v=p[tr](S),m=v.get(Cn),g=p[tr]("labelLine.normal"),y=g.get(jr),x=g.get("length2"),_=(f[ni]+f[ii])/2,w=Math.cos(_),b=Math.sin(_);if(o=f.cx,s=f.cy,m===Vr)r=f.cx,a=f.cy,d=Vr;else{var M=m===nr||"inner"===m,A=(M?f.r/2*w:f.r*w)+o,C=(M?f.r/2*b:f.r*b)+s;if(y+=e-f.r,r=A+3*w,a=C+3*b,!M){var T=A+w*y,k=C+b*y,L=T+(0>w?-1:1)*x,D=k;r=L+(0>w?-5:5),a=D,h=[[A,C],[T,k],[L,D]]}d=M?Vr:w>0?"left":"right"}var P=zr,I=v[tr](Qn)[Kn](),z=v.get(Hi)?0>w?-_+Math.PI:-_:0,V=t[ht](i,Gn)||l[zn](i),R=n[Jn](V,I,d,P);c=!!z,f.label={x:r,y:a,height:R[ur],length:y,length2:x,linePoints:h,textAlign:d,textBaseline:P,font:I,rotation:z},u.push(f.label)}),!c&&t.get("avoidLabelOverlap")&&i(u,o,s,e,r,a)}}),e("echarts/chart/pie/pieLayout",[Qr,yt,"./labelLayout",Kr],function(t){var e=t(yt),i=e[Rr],n=t("./labelLayout"),r=t(Kr),a=2*Math.PI,o=Math.PI/180;return function(t,s,l){s[de](t,function(t){var s=t.get(Vr),u=t.get(qn);r[Or](u)||(u=[0,u]),r[Or](s)||(s=[s,s]);var c=l[cn](),h=l[un](),d=Math.min(c,h),f=i(s[0],c),p=i(s[1],h),v=i(u[0],d/2),m=i(u[1],d/2),g=t[En](),y=-t.get(ni)*o,x=t.get("minAngle")*o,_=g[Bt]("value"),w=Math.PI/(_||g.count())*2,b=t.get(ei),M=t.get("roseType"),S=g[Gt]("value");S[0]=0;var A=a,C=0,T=y,k=b?1:-1;if(g.each("value",function(t,i){var n;n="area"!==M?0===_?w:t*w:a/(g.count()||1),x>n?(n=x,A-=x):C+=t;var r=T+k*n;g[It](i,{angle:n,startAngle:T,endAngle:r,clockwise:b,cx:f,cy:p,r0:v,r:M?e[Er](t,S,[v,m]):m}),T=r},!0),a>A)if(.001>=A){var L=a/g.count();g.each(function(t){var e=g[zt](t);e[ni]=y+k*t*L,e[ii]=y+k*(t+1)*L})}else w=A/C,T=y,g.each("value",function(t,e){var i=g[zt](e),n=i.angle===x?x:t*w;i[ni]=T,i[ii]=T+k*n,T+=n});n(t,m,c,h)})}}),e("echarts/processor/dataFilter",[],function(){return function(t,e){var i=e[dn]({mainType:"legend"});i&&i[jr]&&e[de](t,function(t){var e=t[En]();e[Nt](function(t){for(var n=e[zn](t),r=0;r<i[jr];r++)if(!i[r].isSelected(n))return!1;return!0},this)},this)}}),e("echarts/chart/pie",[Qr,Kr,K,"./pie/PieSeries","./pie/PieView","../action/createDataSelectAction","../visual/dataColor","./pie/pieLayout","../processor/dataFilter"],function(t){var e=t(Kr),i=t(K);t("./pie/PieSeries"),t("./pie/PieView"),t("../action/createDataSelectAction")("pie",[{type:"pieToggleSelect",event:"pieselectchanged",method:"toggleSelected"},{type:"pieSelect",event:"pieselected",method:"select"},{type:"pieUnSelect",event:"pieunselected",method:"unSelect"}]),i[Xt]("chart",e.curry(t("../visual/dataColor"),"pie")),i[Yt](e.curry(t("./pie/pieLayout"),"pie")),i[Kt]($r,e.curry(t("../processor/dataFilter"),"pie"))}),e("echarts/chart/scatter/ScatterSeries",[Qr,Mt,bt],function(t){var e=t(Mt),i=t(bt);return i[Cr]({type:"series.scatter",dependencies:["grid","polar"],getInitialData:function(t,i){var n=e(t.data,this,i);return n},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,polarIndex:0,geoIndex:0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{normal:{opacity:.8}}}})}),e("echarts/chart/helper/LargeSymbolDraw",[Qr,xt,_t,Kr],function(t){function e(){this.group=new i.Group,this._symbolEl=new a({silent:!0})}var i=t(xt),n=t(_t),r=t(Kr),a=i[Xe]({shape:{points:null,sizes:null},symbolProxy:null,buildPath:function(t,e){for(var i=e[ti],n=e.sizes,r=this.symbolProxy,a=r.shape,o=0;o<i[jr];o++){var s=i[o],l=n[o];l[0]<4?t.rect(s[0]-l[0]/2,s[1]-l[1]/2,l[0],l[1]):(a.x=s[0]-l[0]/2,a.y=s[1]-l[1]/2,a.width=l[0],a[ur]=l[1],r[si](t,a))}}}),o=e[Jr];return o[gt]=function(t){this.group[Ai]();var e=this._symbolEl,i=t[Qt];e[ai]({points:t[Et](t[zt]),sizes:t[Et](function(e){var i=t[Pt](e,vt);return r[Or](i)||(i=[i,i]),i})}),e.symbolProxy=n[mt](t[Ot](pt),0,0,0,0),e[wt]=e.symbolProxy[wt],e[Ue](i[tr](C)[dt](["color"]));var a=t[Ot]("color");a&&e[wt](a),this.group.add(this._symbolEl)},o[Ci]=function(t){var e=t[En]();this._symbolEl[ai]({points:e[Et](e[zt])})},o[Pi]=function(){this.group[Ai]()},e}),e("echarts/chart/scatter/ScatterView",[Qr,ot,"../helper/LargeSymbolDraw",T],function(t){var e=t(ot),i=t("../helper/LargeSymbolDraw");t(T)[jt]({type:"scatter",init:function(){this._normalSymbolDraw=new e,this._largeSymbolDraw=new i},render:function(t,e,i){var n=t[En](),r=this._largeSymbolDraw,a=this._normalSymbolDraw,o=this.group,s=t.get("large")&&n.count()>t.get("largeThreshold")?r:a;this[tt]=s,s[gt](n),o.add(s.group),o[Pi](s===r?a.group:r.group)},updateLayout:function(t){this[tt][Ci](t)},remove:function(t,e){this[tt]&&this[tt][Pi](e,!0)}})}),e("echarts/chart/scatter",[Qr,Kr,K,"./scatter/ScatterSeries","./scatter/ScatterView",$,Y],function(t){var e=t(Kr),i=t(K);t("./scatter/ScatterSeries"),t("./scatter/ScatterView"),i[Xt]("chart",e.curry(t($),ae,ft,null)),i[Yt](e.curry(t(Y),ae))}),e("echarts/component/tooltip/TooltipModel",[Qr,T],function(t){t(T)[Ut]({type:"tooltip",defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove",alwaysShowContent:!1,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,axisPointer:{type:"line",axis:"auto",animation:!0,animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",lineStyle:{color:"#555",width:1,type:"solid"},crossStyle:{color:"#555",width:1,type:"dashed",textStyle:{}},shadowStyle:{color:"rgba(150,150,150,0.3)"}},textStyle:{color:"#fff",fontSize:14}}})}),e("echarts/component/tooltip/TooltipContent",[Qr,Kr,Gi,Re,v],function(t){function e(t){var e="cubic-bezier(0.23, 1, 0.32, 1)",i="left "+t+"s "+e+",top "+t+"s "+e;return o.map(d,function(t){return t+"transition:"+i}).join(";")}function i(t){var e=[],i=t.get("fontSize"),n=t[Ge]();return n&&e.push("color:"+n),e.push("font:"+t[Kn]()),i&&e.push("line-height:"+Math.round(3*i/2)+"px"),c(["decoration","align"],function(i){var n=t.get(i);n&&e.push("text-"+i+":"+n)}),e.join(";")}function n(t){t=t;var n=[],r=t.get("transitionDuration"),a=t.get(xe),o=t[tr](Qn),l=t.get(p);return r&&n.push(e(r)),a&&(n.push("background-Color:"+s.toHex(a)),n.push("filter:alpha(opacity=70)"),n.push("background-Color:"+a)),c(["width","color",qn],function(e){var i="border-"+e,r=h(i),a=t.get(r);null!=a&&n.push(i+":"+a+("color"===e?"":"px"))}),n.push(i(o)),null!=l&&n.push("padding:"+u[bn](l).join("px ")+"px"),n.join(";")+";"}function r(t,e){var i=document[Ur]("div"),n=e.getZr();this.el=i,this._x=e[cn]()/2,this._y=e[un]()/2,t[_e](i),this._container=t,this._show=!1,this._hideTimeout;var r=this;i.onmouseenter=function(){r.enterable&&(clearTimeout(r._hideTimeout),r._show=!0),r._inContent=!0},i.onmousemove=function(e){if(!r.enterable){var i=n.handler;l.normalizeEvent(t,e),i.dispatch(ze,e)}},i.onmouseleave=function(){r.enterable&&r._show&&r.hideLater(r._hideDelay),r._inContent=!1},a(i,t)}function a(t,e){function i(t){n(t[Zi])&&t.preventDefault()}function n(i){for(;i&&i!==e;){if(i===t)return!0;i=i[Le]}}l.addEventListener(e,"touchstart",i),l.addEventListener(e,"touchmove",i),l.addEventListener(e,"touchend",i)}var o=t(Kr),s=t(Gi),l=t(Re),u=t(v),c=o.each,h=u.toCamelCase,d=["","-webkit-","-moz-","-o-"],f="position:absolute;display:block;border-style:solid;white-space:nowrap;";return r[Jr]={constructor:r,enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),i=t.style;"absolute"!==i[Cn]&&"absolute"!==e[Cn]&&(i[Cn]="relative"),this.hide()},show:function(t){clearTimeout(this._hideTimeout),this.el.style.cssText=f+n(t)+";left:"+this._x+"px;top:"+this._y+"px;",this._show=!0},setContent:function(t){var e=this.el;e[we]=t,e.style.display=t?"block":"none"},moveTo:function(t,e){var i=this.el.style;i.left=t+"px",i.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this.enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(o.bind(this.hide,this),t)):this.hide())},isShow:function(){return this._show}},r}),e("echarts/component/tooltip/TooltipView",[Qr,"./TooltipContent",xt,Kr,v,yt,T],function(t){function e(t,e){if(!t||!e)return!1;var i=m.round;return i(t[0])===i(e[0])&&i(t[1])===i(e[1])}function i(t,e,i,n){return{x1:t,y1:e,x2:i,y2:n}}function n(t,e,i,n){return{x:t,y:e,width:i,height:n}}function r(t,e,i,n,r,a){return{cx:t,cy:e,r0:i,r:n,startAngle:r,endAngle:a,clockwise:!0}}function a(t,e,i,n,r){var a=i.clientWidth,o=i[ye],s=20;return t+a+s>n?t-=a+s:t+=s,e+o+s>r?e-=o+s:e+=s,[t,e]}function o(t,e,i){var n=i.clientWidth,r=i[ye],a=5,o=0,s=0,l=e.width,u=e[ur];switch(t){case nr:o=e.x+l/2-n/2,s=e.y+u/2-r/2;break;case"top":o=e.x+l/2-n/2,s=e.y-r-a;break;case Ir:o=e.x+l/2-n/2,s=e.y+u+a;break;case"left":o=e.x-n-a,s=e.y+u/2-r/2;break;case"right":o=e.x+l+a,s=e.y+u/2-r/2}return[o,s]}function s(t,e,i,n,r,s,l){var u=l[cn](),c=l[un](),d=s&&s[Jn]().clone();if(s&&d[cr](s[Xi]),typeof t===Br&&(t=t([e,i],r,d)),h[Or](t))e=g(t[0],u),i=g(t[1],c);else if(typeof t===Fr&&s){var f=o(t,d,n.el);e=f[0],i=f[1]}else{var f=a(e,i,n.el,u,c);e=f[0],i=f[1]}n[di](e,i)}function l(t){var e=t[nn],i=t.get("tooltip.trigger",!0);return!(!e||e.type!==D&&"polar"!==e.type&&e.type!==x||"item"===i)}var u=t("./TooltipContent"),c=t(xt),h=t(Kr),p=t(v),m=t(yt),g=m[Rr];t(T)[Wt]({type:"tooltip",_axisPointers:{},init:function(t,e){var i=new u(e[hn](),e);this._tooltipContent=i,e.on("showTip",this._manuallyShowTip,this),e.on("hideTip",this._manuallyHideTip,this)},render:function(t,e,i){this.group[Ai](),this._axisPointers={},this._tooltipModel=t,this._ecModel=e,this._api=i,this._lastHover={};var n=this._tooltipContent;n[Se](),n.enterable=t.get("enterable"),this._alwaysShowContent=t.get("alwaysShowContent"),this._seriesGroupByAxis=this._prepareAxisTriggerData(t,e);var r=this._crossText;r&&this.group.add(r);var a=this._api.getZr(),o=this._tryShow;a.off("click",o),a.off(ze,o),a.off(Fe,this._hide),"click"===t.get("triggerOn")?a.on("click",o,this):(a.on(ze,o,this),a.on(Fe,this._hide,this))},_manuallyShowTip:function(t){if(t.from!==this.uid){var e=this._ecModel,i=t[Nn],n=t[bi],r=e.getSeriesByIndex(i),a=this._api;if(null==t.x||null==t.y){if(r||e[he](function(t){l(t)&&!r&&(r=t)}),r){var o=r[En]();null==n&&(n=o[_i](t.name));var s,u,c=o[wi](n),h=r[nn];if(h&&h[st]){var d=h[st](o[Zt](h[en],n,!0));s=d&&d[0],u=d&&d[1]}else if(c){var f=c[Jn]().clone();f[cr](c[Xi]),s=f.x+f.width/2,u=f.y+f[ur]/2}null!=s&&null!=u&&this._tryShow({offsetX:s,offsetY:u,target:c,event:{}})}}else a.getZr().handler.dispatch(ze,{zrX:t.x,zrY:t.y})}},_manuallyHideTip:function(t){t.from!==this.uid&&this._hide()},_prepareAxisTriggerData:function(t,e){var i={};return e[he](function(t){if(l(t)){var e,n,r=t[nn];r.type===D?(e=r[tn](),n=e.dim+e.index):r.type===x?(e=r[it](),n=e.dim+e.type):(e=r[tn](),n=e.dim+r.name),i[n]=i[n]||{coordSys:[],series:[]},i[n].coordSys.push(r),i[n][pn].push(t)}},this),i},_tryShow:function(t){var e=t[Zi],i=this._tooltipModel,n=i.get(Mi),r=this._ecModel,a=this._api;if(i)if(e&&null!=e[bi]){var o=e[Qt]||r.getSeriesByIndex(e[Nn]),s=e[bi],l=o[En]()[In](s);"axis"===(l.get("tooltip.trigger")||n)?this._showAxisTooltip(i,r,t):(this._ticket="",this._hideAxisPointer(),this._resetLastHover(),this._showItemTooltipContent(o,s,t)),a[ln]({type:"showTip",from:this.uid,dataIndex:e[bi],seriesIndex:e[Nn]})}else"item"===n?this._hide():this._showAxisTooltip(i,r,t),"cross"===i.get("axisPointer.type")&&a[ln]({type:"showTip",from:this.uid,x:t[Pe],y:t[De]})},_showAxisTooltip:function(t,i,n){var r=t[tr]("axisPointer"),a=r.get("type");if("cross"===a){var o=n[Zi];if(o&&null!=o[bi]){var s=i.getSeriesByIndex(o[Nn]),l=o[bi];this._showItemTooltipContent(s,l,n)}}this._showAxisPointer();var u=!0;h.each(this._seriesGroupByAxis,function(t){var i=t.coordSys,o=i[0],s=[n[Pe],n[De]];if(!o.containPoint(s))return void this._hideAxisPointer(o.name);u=!1;var l=o[en],c=o.pointToData(s,!0);s=o[st](c);var d=o[tn](),f=r.get("axis");"auto"===f&&(f=d.dim);var p=!1,v=this._lastHover;if("cross"===a)e(v.data,c)&&(p=!0),v.data=c;else{var m=h[Hr](l,f);v.data===c[m]&&(p=!0),v.data=c[m]}o.type!==D||p?"polar"!==o.type||p?o.type!==x||p||this._showSinglePointer(r,o,f,s):this._showPolarPointer(r,o,f,s):this._showCartesianPointer(r,o,f,s),"cross"!==a&&this._dispatchAndShowSeriesTooltipContent(o,t[pn],s,c,p)},this),u&&this._hide()},_showCartesianPointer:function(t,e,r,a){function o(n,r,a){var o="x"===n?i(r[0],a[0],r[0],a[1]):i(a[0],r[1],a[1],r[1]),s=l._getPointerElement(e,t,n,o);h?c[Ne](s,{shape:o},t):s.attr({shape:o})}function s(i,r,a){var o=e[it](i),s=o[nt](),u=a[1]-a[0],d="x"===i?n(r[0]-s/2,a[0],s,u):n(a[0],r[1]-s/2,u,s),f=l._getPointerElement(e,t,i,d);h?c[Ne](f,{shape:d},t):f.attr({shape:d})}var l=this,u=t.get("type"),h="cross"!==u;if("cross"===u)o("x",a,e[it]("y").getGlobalExtent()),o("y",a,e[it]("x").getGlobalExtent()),this._updateCrossText(e,a,t);else{var d=e[it]("x"===r?"y":"x"),f=d.getGlobalExtent();e.type===D&&("line"===u?o:s)(r,a,f)}},_showSinglePointer:function(t,e,n,r){function a(n,r,a){var s=e[it](),u=s[f],h=u===Sn?i(r[0],a[0],r[0],a[1]):i(a[0],r[1],a[1],r[1]),d=o._getPointerElement(e,t,n,h);l?c[Ne](d,{shape:h},t):d.attr({shape:h})}var o=this,s=t.get("type"),l="cross"!==s,u=e[I](),h=[u.y,u.y+u[ur]];a(n,r,h)},_showPolarPointer:function(t,e,n,a){function o(n,r,a){var o,s=e.pointToCoord(r);if("angle"===n){var u=e.coordToPoint([a[0],s[1]]),h=e.coordToPoint([a[1],s[1]]);o=i(u[0],u[1],h[0],h[1])}else o={cx:e.cx,cy:e.cy,r:s[0]};var d=l._getPointerElement(e,t,n,o);f?c[Ne](d,{shape:o},t):d.attr({shape:o})}function s(i,n,a){var o,s=e[it](i),u=s[nt](),h=e.pointToCoord(n),d=Math.PI/180;o="angle"===i?r(e.cx,e.cy,a[0],a[1],(-h[1]-u/2)*d,(-h[1]+u/2)*d):r(e.cx,e.cy,h[0]-u/2,h[0]+u/2,0,2*Math.PI);var p=l._getPointerElement(e,t,i,o);f?c[Ne](p,{shape:o},t):p.attr({shape:o})}var l=this,u=t.get("type"),h=e.getAngleAxis(),d=e.getRadiusAxis(),f="cross"!==u;if("cross"===u)o("angle",a,d[lt]()),o(qn,a,h[lt]()),this._updateCrossText(e,a,t);else{var p=e[it](n===qn?"angle":qn),v=p[lt]();("line"===u?o:s)(n,a,v)}},_updateCrossText:function(t,e,i){var n=i[tr]("crossStyle"),r=n[tr](Qn),a=this._tooltipModel,o=this._crossText;o||(o=this._crossText=new c.Text({style:{textAlign:"left",textBaseline:"bottom"}}),this.group.add(o));var s=t.pointToData(e),l=t[en];s=h.map(s,function(e,i){var n=t[it](l[i]);return e=n.type===At||"time"===n.type?n.scale[q](e):p[rn](e[Pr](n[Dr]()))}),o[Ue]({fill:r[Ge]()||n.get("color"),textFont:r[Kn](),text:s.join(", "),x:e[0]+5,y:e[1]-5}),o.z=a.get("z"),o[Ae]=a.get(Ae)},_getPointerElement:function(t,e,i,n){var r=this._tooltipModel,a=r.get("z"),o=r.get(Ae),s=this._axisPointers,l=t.name;if(s[l]=s[l]||{},s[l][i])return s[l][i];var u=e.get("type"),h=e[tr](u+"Style"),d="shadow"===u,f=h[d?"getAreaStyle":J](),p="polar"===t.type?d?Ke:i===qn?Je:"Line":d?"Rect":"Line";d?f[_r]=null:f.fill=null;var v=s[l][i]=new c[p]({style:f,z:a,zlevel:o,silent:!0,shape:n});return this.group.add(v),v},_dispatchAndShowSeriesTooltipContent:function(t,e,i,n,r){var a=this._tooltipModel,o=this._tooltipContent,l=t[tn](),u=h.map(e,function(t){return{seriesIndex:t[Nn],dataIndex:t.getAxisTooltipDataIndex?t.getAxisTooltipDataIndex(t[L](l.dim),n,l):t[En]().indexOfNearest(t[L](l.dim),n["x"===l.dim||l.dim===qn?0:1])}}),c=this._lastHover,f=this._api;if(c.payloadBatch&&!r&&f[ln]({type:"downplay",batch:c.payloadBatch}),r||(f[ln]({type:"highlight",batch:u}),c.payloadBatch=u),f[ln]({type:"showTip",dataIndex:u[0][bi],seriesIndex:u[0][Nn],from:this.uid}),l&&a.get("showContent")){var v,m=a.get(Dn),g=a.get(Cn),y=h.map(e,function(t,e){return t[Pn](u[e][bi])});o.show(a);var x=u[0][bi];if(!r){if(this._ticket="",m){if(typeof m===Fr)v=p.formatTpl(m,y);else if(typeof m===Br){var _=this,w="axis_"+t.name+"_"+x,b=function(t,e){t===_._ticket&&(o.setContent(e),s(g,i[0],i[1],o,y,null,f))};_._ticket=w,v=m(y,w,b)}}else{var M=e[0][En]()[zn](x);v=(M?M+Qi:"")+h.map(e,function(t,e){return t[d](u[e][bi],!0)}).join(Qi)}o.setContent(v)}s(g,i[0],i[1],o,y,null,f)}},_showItemTooltipContent:function(t,e,i){var n=this._api,r=t[En](),a=r[In](e),o=this._tooltipModel,l=this._tooltipContent,u=a[tr]("tooltip");if(u.parentModel?u.parentModel.parentModel=o:u.parentModel=this._tooltipModel,u.get("showContent")){var c,h=u.get(Dn),f=u.get(Cn),v=t[Pn](e);if(h){if(typeof h===Fr)c=p.formatTpl(h,v);else if(typeof h===Br){var m=this,g="item_"+t.name+"_"+e,y=function(t,e){t===m._ticket&&(l.setContent(e),s(f,i[Pe],i[De],l,v,i[Zi],n))};m._ticket=g,c=h(v,g,y)}}else c=t[d](e);l.show(u),l.setContent(c),s(f,i[Pe],i[De],l,v,i[Zi],n)}},_showAxisPointer:function(t){if(t){var e=this._axisPointers[t];e&&h.each(e,function(t){t.show()})}else this.group[Tn](function(t){t.show()}),this.group.show()},_resetLastHover:function(){var t=this._lastHover;t.payloadBatch&&this._api[ln]({type:"downplay",batch:t.payloadBatch}),this._lastHover={}},_hideAxisPointer:function(t){if(t){var e=this._axisPointers[t];e&&h.each(e,function(t){t.hide()})}else this.group.hide()},_hide:function(){this._hideAxisPointer(),this._resetLastHover(),this._alwaysShowContent||this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")),this._api[ln]({type:"hideTip",from:this.uid})},dispose:function(t,e){var i=e.getZr();this._tooltipContent.hide(),i.off("click",this._tryShow),i.off(ze,this._tryShow),i.off(Fe,this._hide),e.off("showTip",this._manuallyShowTip),e.off("hideTip",this._manuallyHideTip)}})}),e("echarts/component/tooltip",[Qr,"./tooltip/TooltipModel","./tooltip/TooltipView",K,K],function(t){t("./tooltip/TooltipModel"),t("./tooltip/TooltipView"),t(K)[$t]({type:"showTip",event:"showTip",update:"none"},function(){}),t(K)[$t]({type:"hideTip",event:"hideTip",update:"none"},function(){})}),e("echarts/coord/polar/RadiusAxis",[Qr,Kr,"../Axis"],function(t){function e(t,e){n.call(this,qn,t,e),this.type=At}var i=t(Kr),n=t("../Axis");return e[Jr]={constructor:e,dataToRadius:n[Jr][N],radiusToData:n[Jr][E]},i[Ar](e,n),e}),e("echarts/coord/polar/AngleAxis",[Qr,Kr,"../Axis"],function(t){function e(t,e){e=e||[0,360],n.call(this,"angle",t,e),this.type=At}var i=t(Kr),n=t("../Axis");return e[Jr]={constructor:e,dataToAngle:n[Jr][N],angleToData:n[Jr][E]},i[Ar](e,n),e}),e("echarts/coord/polar/Polar",[Qr,"./RadiusAxis","./AngleAxis"],function(t){var e=t("./RadiusAxis"),i=t("./AngleAxis"),n=function(t){this.name=t||"",this.cx=0,this.cy=0,this._radiusAxis=new e,this._angleAxis=new i};return n[Jr]={constructor:n,type:"polar",dimensions:[qn,"angle"],containPoint:function(t){var e=this.pointToCoord(t);return this._radiusAxis[vi](e[0])&&this._angleAxis[vi](e[1])},containData:function(t){return this._radiusAxis.containData(t[0])&&this._angleAxis.containData(t[1])},getAxis:function(t){return this["_"+t+"Axis"]},getAxesByScale:function(t){var e=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===t&&e.push(i),n.scale.type===t&&e.push(n),e},getAngleAxis:function(){return this._angleAxis},getRadiusAxis:function(){return this._radiusAxis},getOtherAxis:function(t){var e=this._angleAxis;return t===e?this._radiusAxis:e},getBaseAxis:function(){return this.getAxesByScale(On)[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},dataToPoints:function(t){return t[Et](this[en],function(t,e){return this[st]([t,e])},this)},dataToPoint:function(t,e){return this.coordToPoint([this._radiusAxis.dataToRadius(t[0],e),this._angleAxis.dataToAngle(t[1],e)])},pointToData:function(t,e){var i=this.pointToCoord(t);return[this._radiusAxis.radiusToData(i[0],e),this._angleAxis.angleToData(i[1],e)]},pointToCoord:function(t){var e=t[0]-this.cx,i=t[1]-this.cy,n=this.getAngleAxis(),r=n[lt](),a=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);n[et]?a=o-360:o=a+360;var s=Math.sqrt(e*e+i*i);e/=s,i/=s;for(var l=Math.atan2(-i,e)/Math.PI*180,u=a>l?1:-1;a>l||l>o;)l+=360*u;return[s,l]},coordToPoint:function(t){var e=t[0],i=t[1]/180*Math.PI,n=Math.cos(i)*e+this.cx,r=-Math.sin(i)*e+this.cy;return[n,r]}},n}),e("echarts/coord/polar/AxisModel",[Qr,Kr,R,"../axisModelCreator","../axisModelCommonMixin"],function(t){function e(t,e){return e.type||(e.data?At:"value")}var i=t(Kr),n=t(R),r=t("../axisModelCreator"),a=n[Cr]({type:"polarAxis",axis:null});i.merge(a[Jr],t("../axisModelCommonMixin"));var o={angle:{polarIndex:0,startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:!1}},radius:{polarIndex:0,splitNumber:5}};r("angle",a,e,o.angle),r(qn,a,e,o[qn])}),e("echarts/coord/polar/PolarModel",[Qr,"./AxisModel",T],function(t){t("./AxisModel"),t(T)[Ut]({type:"polar",dependencies:["polarAxis","angleAxis"],coordinateSystem:null,findAxisModel:function(t){var e,i=this[er];return i[ie](t,function(t){i[on]("polar",t[br]("polarIndex"))===this&&(e=t)},this),e},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"80%"}})}),e("echarts/coord/polar/polarCreator",[Qr,"./Polar",yt,Kr,z,"./PolarModel",Ct],function(t){function e(t,e){var i=t.get(Vr),n=t.get(qn),r=e[cn](),o=e[un](),s=a[Rr];this.cx=s(i[0],r),this.cy=s(i[1],o);var l=this.getRadiusAxis(),u=Math.min(r,o)/2;l[j](0,s(n,u))}function i(t,e){if(t.type=e.get("type"),t.scale=s[G](e),t[rt]=e.get(H)&&t.type===At,"angleAxis"===e.mainType){var i=e.get(ni);t[et]=e.get(et)^e.get(ei),t[j](i,i+(t[et]?-360:360))}e.axis=t,t.model=e}function n(t,e,i){e[he](function(e){if("polar"===e.get(nn)){var i=e.get("polarIndex")||0,n=t[i];if(!n)return;e[nn]=n;var r=n.getRadiusAxis(),a=n.getAngleAxis(),o=e[En]();r.scale[X](o[Gt](qn,r.type!==At)),a.scale[X](o[Gt]("angle",a.type!==At))}}),o.each(t,function(t){var e=t.getAngleAxis(),i=t.getRadiusAxis();l(e,e.model),l(i,i.model)})}var r=t("./Polar"),a=t(yt),o=t(Kr),s=t(z),l=s[W];t("./PolarModel");var u={dimensions:r[Jr][en],create:function(t,a){var s=[];return t[ie]("polar",function(t,n){var o=new r(n);o[Me]=e;var l=o.getRadiusAxis(),u=o.getAngleAxis(),c=t.findAxisModel("radiusAxis"),h=t.findAxisModel("angleAxis");i(l,c),i(u,h),o[Me](t,a),s.push(o),t[nn]=o}),n(s,t,a),o.each(s,function(t){var e=t.getAngleAxis();if(e.type===At&&!e[rt]){var i=e[lt](),n=360/e.scale.count();e[et]?i[1]+=n:i[1]-=n,e[j](i[0],i[1])}}),s}};t(Ct)[sn]("polar",u)}),e("echarts/component/axis/AngleAxisView",[Qr,Kr,xt,k,T],function(t){function e(t,e,i,n){var r=t.coordToPoint([e,n]),a=t.coordToPoint([i,n]);return{x1:r[0],y1:r[1],x2:a[0],y2:a[1]}}var i=t(Kr),n=t(xt),r=t(k),a=[w,O,b,"splitLine","splitArea"];t(T)[Wt]({type:"angleAxis",render:function(t,e){if(this.group[Ai](),t.get("show")){var n=e[on]("polar",t.get("polarIndex")),r=t.axis,o=n[nn],s=o.getRadiusAxis()[lt](),l=r.getTicksCoords();r.type!==At&&l.pop(),i.each(a,function(e){t.get(e+".show")&&this["_"+e](t,o,l,s)},this)}},_axisLine:function(t,e,i,r){var a=t[tr]("axisLine.lineStyle"),o=new n[Je]({shape:{cx:e.cx,cy:e.cy,r:r[1]},style:a[J](),z2:1,silent:!0});o.style.fill=null,this.group.add(o)},_axisTick:function(t,r,a,o){var s=t[tr](b),l=(s.get(nr)?-1:1)*s.get(jr),u=i.map(a,function(t){return new n.Line({shape:e(r,o[1],o[1]+l,t)})});this.group.add(n.mergePath(u,{style:s[tr](ce)[J]()}))},_axisLabel:function(t,e,i,a){for(var o=t.axis,s=t.get("data"),l=t[tr](O),u=l[tr](Qn),c=t[B](),h=l.get(_n),d=o.getLabelsCoords(),f=0;f<i[jr];f++){var p=a[1],v=e.coordToPoint([p+h,d[f]]),m=e.cx,g=e.cy,y=Math.abs(v[0]-m)/p<.3?Vr:v[0]>m?"left":"right",x=Math.abs(v[1]-g)/p<.3?zr:v[1]>g?"top":Ir,_=u;s&&s[f]&&s[f][Qn]&&(_=new r(s[f][Qn],u)),this.group.add(new n.Text({style:{x:v[0],y:v[1],fill:_[Ge](),text:c[f],textAlign:y,textBaseline:x,textFont:_[Kn]()},silent:!0}))}},_splitLine:function(t,r,a,o){var s=t[tr]("splitLine"),l=s[tr](ce),u=l.get("color"),c=0;u=u instanceof Array?u:[u];for(var h=[],d=0;d<a[jr];d++){var f=c++%u[jr];h[f]=h[f]||[],h[f].push(new n.Line({shape:e(r,o[0],o[1],a[d])}))}for(var d=0;d<h[jr];d++)this.group.add(n.mergePath(h[d],{style:i[ir]({stroke:u[d%u[jr]]},l[J]()),silent:!0,z:t.get("z")}))},_splitArea:function(t,e,r,a){var o=t[tr]("splitArea"),s=o[tr]("areaStyle"),l=s.get("color"),u=0;l=l instanceof Array?l:[l];for(var c=[],h=Math.PI/180,d=-r[0]*h,f=Math.min(a[0],a[1]),p=Math.max(a[0],a[1]),v=t.get(ei),m=1;m<r[jr];m++){var g=u++%l[jr];c[g]=c[g]||[],c[g].push(new n[Ke]({shape:{cx:e.cx,cy:e.cy,r0:f,r:p,startAngle:d,endAngle:-r[m]*h,clockwise:v},silent:!0})),d=-r[m]*h}for(var m=0;m<c[jr];m++)this.group.add(n.mergePath(c[m],{style:i[ir]({fill:l[m%l[jr]]},s.getAreaStyle()),silent:!0}))}})}),e("echarts/component/angleAxis",[Qr,"../coord/polar/polarCreator","./axis/AngleAxisView"],function(t){t("../coord/polar/polarCreator"),t("./axis/AngleAxisView")}),e("echarts/component/axis/RadiusAxisView",[Qr,Kr,xt,"./AxisBuilder",T],function(t){function e(t,e,i){return{position:[t.cx,t.cy],rotation:i/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotation:e[tr](O).get(Hi),z2:1}}var i=t(Kr),n=t(xt),r=t("./AxisBuilder"),a=[w,O,b,"axisName"],o=["splitLine","splitArea"];t(T)[Wt]({type:"radiusAxis",render:function(t,n){if(this.group[Ai](),t.get("show")){var s=n[on]("polar",t.get("polarIndex")),l=s[nn].getAngleAxis(),u=t.axis,c=s[nn],h=u.getTicksCoords(),d=l[lt]()[0],f=u[lt](),p=e(c,t,d),v=new r(t,p);i.each(a,v.add,v),this.group.add(v.getGroup()),i.each(o,function(e){t.get(e+".show")&&this["_"+e](t,c,d,f,h)},this)}},_splitLine:function(t,e,r,a,o){var s=t[tr]("splitLine"),l=s[tr](ce),u=l.get("color"),c=0;u=u instanceof Array?u:[u];for(var h=[],d=0;d<o[jr];d++){var f=c++%u[jr];h[f]=h[f]||[],h[f].push(new n[Je]({shape:{cx:e.cx,cy:e.cy,r:o[d]},silent:!0}))}for(var d=0;d<h[jr];d++)this.group.add(n.mergePath(h[d],{style:i[ir]({stroke:u[d%u[jr]],fill:null},l[J]()),silent:!0}))},_splitArea:function(t,e,r,a,o){var s=t[tr]("splitArea"),l=s[tr]("areaStyle"),u=l.get("color"),c=0;u=u instanceof Array?u:[u];for(var h=[],d=o[0],f=1;f<o[jr];f++){var p=c++%u[jr];h[p]=h[p]||[],h[p].push(new n[Ke]({shape:{cx:e.cx,
cy:e.cy,r0:d,r:o[f],startAngle:0,endAngle:2*Math.PI},silent:!0})),d=o[f]}for(var f=0;f<h[jr];f++)this.group.add(n.mergePath(h[f],{style:i[ir]({fill:u[f%u[jr]]},l.getAreaStyle()),silent:!0}))}})}),e("echarts/component/radiusAxis",[Qr,"../coord/polar/polarCreator","./axis/RadiusAxisView"],function(t){t("../coord/polar/polarCreator"),t("./axis/RadiusAxisView")}),e("echarts/component/polar",[Qr,"../coord/polar/polarCreator","./angleAxis","./radiusAxis",K],function(t){t("../coord/polar/polarCreator"),t("./angleAxis"),t("./radiusAxis"),t(K)[Wt]({type:"polar"})}),e("echarts/chart/radar/RadarSeries",[Qr,Mt,bt,Kr,yt,"../../component/polar"],function(t){var e=t(Mt),i=t(bt),n=t(Kr),r=t(yt),a=r[Er];return t("../../component/polar"),i[Cr]({type:"series.radar",dependencies:["polar"],getInitialData:function(t,i){var r=t.indicator,o=e(t.data,this,i);if(r){var s=n[Yr](r,function(t,e,i){return t[e.name]=e,t},{});o=o.map([qn],function(t,e){var i=s[o[zn](e)];return i&&i.max?a(t,[i.min||0,i.max],[0,1]):void 0});var l=this[Rn];this[Rn]=function(t){var e=l.call(this,t),i=s[o[zn](t)];return i&&null!=i.max?a(e,[0,1],[i.min||0,i.max]):void 0}}return o},defaultOption:{zlevel:0,z:2,coordinateSystem:"polar",legendHoverLink:!0,polarIndex:0,lineStyle:{normal:{width:2,type:"solid"}},symbol:"emptyCircle",symbolSize:4,showAllSymbol:!1}})}),e("echarts/chart/radar/RadarView",[Qr,ot,xt,Kr,T],function(t){var e=t(ot),i=t(xt),n=t(Kr);return t(T)[jt]({type:"radar",init:function(){this[tt]=new e},render:function(t,e,r){function a(){return n.map(u,function(t){return[o.cx,o.cy]})}var o=t[nn],s=this.group,l=t[En](),u=l[Et](l[zt],!0);if(!(u[jr]<1)){u.push(u[0].slice());var c=this._polygon||(this._polygon=new i[$e]({shape:{points:[]}})),h=this._polyline||(this._polyline=new i[Ye]({shape:{points:[]},z2:10})),d=h.shape,f=c.shape,p={shape:{points:u}};d[ti][jr]!==u[jr]?(f[ti]=a(),d[ti]=a(),i[Ee](h,p,t),i[Ee](c,p,t)):(i[Ne](h,p,t),i[Ne](c,p,t)),this[tt][gt](l),h[Ue](n[Cr](t[tr](Q)[J](),{stroke:l[Ot]("color")}));var v=t[tr]("areaStyle.normal");c[Vi]=v.isEmpty(),i[We](h,t[tr]("lineStyle.emphasis")[J]()),c[Vi]||(c[Ue](n[ir](v.getAreaStyle(),{fill:l[Ot]("color"),opacity:.7})),i[We](c,t[tr]("areaStyle.emphasis")[J]())),s.add(h),s.add(c),s.add(this[tt].group),this._data=l}}})}),e("echarts/chart/radar/backwardCompat",[Qr,Kr,"../../scale/Interval"],function(t){var e=t(Kr),i=t("../../scale/Interval"),n=e[Or],r=e.each,a=e[$r];return function(t){var o=t.polar,s=t.radiusAxis,l=t.angleAxis,u=a(t[pn],function(t){return"radar"===t.type})||[];o&&u[jr]&&(n(o)||(o=[o]),s?n(s)||(s=[s]):s=t.radiusAxis=[],l?n(l)||(l=[l]):l=t.angleAxis=[],r(o,function(n,o){if(n.indicator){var c=e.map(n.indicator,function(t){var e=t.min,i=t.max;return null!=i&&i>=0&&(e=0),{name:t.text,min:e,max:i}}),h=e.find(s,function(t){return(t.polarIndex||0)===o}),d=e.find(l,function(t){return(t.polarIndex||0)===o});h||(h={type:"value",polarIndex:o},s.push(h)),d||(d={type:"category",polarIndex:o},l.push(d)),d.data=e.map(n.indicator,function(t){var e={value:t.text},i=t[O];return i&&i[Qn]&&(e[Qn]=i[Qn]),e}),d[ni]=n[ni]||90,n[w]&&(d.splitLine=n[w]),n[O]&&(d[O]=n[O]),n.splitLine&&(h.splitLine=n.splitLine),n.splitArea&&(h.splitArea=n.splitArea),h.splitLine=h.splitLine||{},h.splitArea=h.splitArea||{},null==h.splitLine.show&&(h.splitLine.show=!0),null==h.splitArea.show&&(h.splitArea.show=!0),d[H]=!1,h.min=0,h.max=1,h[Z]=1/(n[F]||5),h[w]={show:!1},h[O]={show:!1},h[b]={show:!1};var f=a(u,function(t){return(t.polarIndex||0)===o}),p=e.map(c,function(){return[]});r(f,function(i){if(i.indicator=c,i.data[0]&&e[Or](i.data[0].value)){var n=i.data,r=n[0];i.data=r.value,i.name=r.name;for(var a=1;a<n[jr];a++){var r=n[a],o=e.clone(i);t[pn].push(e[Cr](o,{name:r.name,data:r.value,indicator:c}))}for(var a=0;a<r.value[jr];a++)for(var s=0;s<n[jr];s++)p[a].push(n[s].value[a])}}),r(p,function(t,e){var r=new i,a=1/0,o=-(1/0),s=t[jr];if(s){for(var l=0;s>l;l++)a=Math.min(a,t[l]),o=Math.max(o,t[l]);r[j](a,o),r.niceExtent(n[F]||5);var u=r[lt]();null==c[e].min&&(c[e].min=u[0]),null==c[e].max&&(c[e].max=u[1])}})}}))}}),e("echarts/chart/radar",[Qr,Kr,K,"./radar/RadarSeries","./radar/RadarView",$,Y,"./radar/backwardCompat"],function(t){var e=t(Kr),i=t(K);t("./radar/RadarSeries"),t("./radar/RadarView"),i[Xt]("chart",e.curry(t($),"radar",ft,null)),i[Yt](e.curry(t(Y),"radar")),i[Jt](t("./radar/backwardCompat"))}),e("echarts/component/legend/LegendModel",[Qr,Kr,k,T],function(t){var e=t(Kr),i=t(k);return t(T)[Ut]({type:"legend",dependencies:[pn],layoutMode:{type:"box",ignoreSize:!0},init:function(t,e,i){this[yn](t,i),t[y]=t[y]||{},this._updateData(i);var n=this._data,r=this[Un][y];if(n[0]&&this.get(_)===x){var a=!1;for(var o in r)r[o]&&(this.select(o),a=!0);!a&&this.select(n[0].get("name"))}},mergeOption:function(t){this.$superCall(mn,t),this._updateData(this[er])},_updateData:function(t){var n=e.map(this.get("data")||[],function(t){return typeof t===Fr&&(t={name:t}),new i(t,this,this[er])},this);this._data=n;var r=e.map(t.getSeries(),function(t){return t.name});t[he](function(t){if(t[m]){var e=t[m]();r=r[Gr](e[Et](e[zn]))}}),this._availableNames=r},getData:function(){return this._data},select:function(t){var i=this[Un][y],n=this.get(_);if(n===x){var r=this._data;e.each(r,function(t){i[t.get("name")]=!1})}i[t]=!0},unSelect:function(t){this.get(_)!==x&&(this[Un][y][t]=!1)},toggleSelected:function(t){var e=this[Un][y];t in e||(e[t]=!0),this[e[t]?"unSelect":"select"](t)},isSelected:function(t){var i=this[Un][y];return!(t in i&&!i[t])&&e[Hr](this._availableNames,t)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:"top",align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,textStyle:{color:"#333"},selectedMode:!0}})}),e("echarts/component/legend/legendAction",[Qr,T,Kr],function(t){function e(t,e,i){var r,a={},o="toggleSelected"===t;return i[ie](se,function(i){o&&null!=r?i[r?"select":"unSelect"](e.name):(i[t](e.name),r=i.isSelected(e.name));var s=i[En]();n.each(s,function(t){var e=t.get("name");if("\n"!==e&&""!==e){var n=i.isSelected(e);e in a?a[e]=a[e]&&n:a[e]=n}})}),{name:e.name,selected:a}}var i=t(T),n=t(Kr);i[$t]("legendToggleSelect","legendselectchanged",n.curry(e,"toggleSelected")),i[$t]("legendSelect","legendselected",n.curry(e,"select")),i[$t]("legendUnSelect","legendunselected",n.curry(e,"unSelect"))}),e("echarts/component/helper/listComponent",[Qr,V,v,xt],function(t){function e(t,e,n){i[xn](t,e[P](),{width:n[cn](),height:n[un]()},e.get(p))}var i=t(V),n=t(v),r=t(xt);return{layout:function(t,n,r){var a=i[wn](n[P](),{width:r[cn](),height:r[un]()},n.get(p));i.box(n.get(f),t,n.get(h),a.width,a[ur]),e(t,n,r)},addBackground:function(t,e){var i=n[bn](e.get(p)),a=t[Jn](),o=e[dt](["color",xr]);o.fill=e.get(xe);var s=new r.Rect({shape:{x:a.x-i[3],y:a.y-i[0],width:a.width+i[1]+i[3],height:a[ur]+i[0]+i[2]},style:o,silent:!0,z2:-1});r[je](s),t.add(s)}}}),e("echarts/component/legend/LegendView",[Qr,Kr,_t,xt,"../helper/listComponent",T],function(t){function e(t,e){e[ln]({type:"legendToggleSelect",name:t})}function i(t,e,i){t.get("legendHoverLink")&&i[ln]({type:"highlight",seriesName:t.name,name:e})}function n(t,e,i){t.get("legendHoverLink")&&i[ln]({type:"downplay",seriesName:t.name,name:e})}var r=t(Kr),a=t(_t),o=t(xt),s=t("../helper/listComponent"),l=r.curry,u="#ccc";return t(T)[Wt]({type:"legend",init:function(){this._symbolTypeStore={}},render:function(t,a,h){var d=this.group;if(d[Ai](),t.get("show")){var p=t.get(_),v=t.get("itemWidth"),g=t.get("itemHeight"),y=t.get("align");"auto"===y&&(y="right"===t.get("left")&&t.get(f)===Mn?"right":"left");var x={},w={};r.each(t[En](),function(r){var s=r.get("name");(""===s||"\n"===s)&&d.add(new o.Group({newline:!0}));var c=a.getSeriesByName(s)[0];if(x[s]=r,c&&!w[s]){var f=c[En](),m=f[Ot]("color");t.isSelected(s)||(m=u),typeof m===Br&&(m=m(c[Pn](0)));var _=f[Ot]("legendSymbol")||"roundRect",b=f[Ot](pt),M=this._createItem(s,r,t,_,b,v,g,y,m,p);M.on("click",l(e,s,h)).on(He,l(i,c,"",h)).on(Fe,l(n,c,"",h)),w[s]=!0}},this),a.eachRawSeries(function(r){if(r[m]){var a=r[m]();a.each(function(o){var s=a[zn](o);if(x[s]&&!w[s]){var c=a[Pt](o,"color");t.isSelected(s)||(c=u);var d="roundRect",f=this._createItem(s,x[s],t,d,null,v,g,y,c,p);f.on("click",l(e,s,h)).on(He,l(i,r,s,h)).on(Fe,l(n,r,s,h)),w[s]=!0}},!1,this)}},this),s[c](d,t,h),s.addBackground(d,t)}},_createItem:function(t,e,i,n,r,s,l,u,c,h){var d=new o.Group,f=e[tr](Qn),p=e.get("icon");if(n=p||n,d.add(a[mt](n,0,0,s,l,c)),!p&&r&&r!==n&&"none"!=r){var v=.8*l;d.add(a[mt](r,(s-v)/2,(l-v)/2,v,v,c))}var m="left"===u?s+5:-5,g=u,y=i.get(Dn);typeof y===Fr&&y?t=y[Nr]("{name}",t):typeof y===Br&&(t=y(t));var x=new o.Text({style:{text:t,x:m,y:l/2,fill:f[Ge](),textFont:f[Kn](),textAlign:g,textBaseline:"middle"}});return d.add(x),d.add(new o.Rect({shape:d[Jn](),invisible:!0})),d[Tn](function(t){t[Ce]=!h}),this.group.add(d),d}})}),e("echarts/component/legend/legendFilter",[],function(){return function(t){var e=t[dn]({mainType:"legend"});e&&e[jr]&&t.filterSeries(function(t){for(var i=0;i<e[jr];i++)if(!e[i].isSelected(t.name))return!1;return!0})}}),e("echarts/component/legend",[Qr,"./legend/LegendModel","./legend/legendAction","./legend/LegendView",K,"./legend/legendFilter"],function(t){t("./legend/LegendModel"),t("./legend/legendAction"),t("./legend/LegendView");var e=t(K);e[Kt]($r,t("./legend/legendFilter"))}),e("echarts/chart/map/MapSeries",[Qr,Lt,T,bt,Kr,kt,v,"../helper/dataSelectableMixin"],function(t){function e(t,e){for(var i={},n=e.features,r=0;r<t[jr];r++)i[t[r].name]=t[r];for(var r=0;r<n[jr];r++){var a=n[r].properties.name;i[a]||t.push({value:NaN,name:a})}return t}var i=t(Lt),n=t(T),r=t(bt),a=t(Kr),o=t(kt),s=t(v),l=s[an],c=s[rn],h=t("../helper/dataSelectableMixin"),d=r[Cr]({type:"series.map",needsDrawMap:!1,seriesGroup:[],init:function(t){t=this._fillOption(t),this[Un]=t,this[g]("init",arguments),this.updateSelectedMap()},getInitialData:function(t){var e=o(["value"],t.data||[]),n=new i(e,this);return n[Ft](t.data),n},mergeOption:function(t){t=this._fillOption(t),r[Jr][mn].call(this,t),this.updateSelectedMap()},_fillOption:function(t){t=a[Cr]({},t);var i=n.getMap(t.mapType),r=i&&i.geoJson;return r&&t.data&&(t.data=e(t.data,r)),t},setRoamZoom:function(t){var e=this[Un][u];e&&(e.zoom=t)},setRoamPan:function(t,e){var i=this[Un][u];i&&(i.x=t,i.y=e)},getRawValue:function(t){return this._data.get("value",t)},formatTooltip:function(t){for(var e=this._data,i=c(this[Rn](t)),n=e[zn](t),r=this.seriesGroup,a=[],o=0;o<r[jr];o++)isNaN(r[o][Rn](t))||a.push(l(r[o].name));return a.join(", ")+Qi+n+" : "+i},defaultOption:{zlevel:0,z:2,coordinateSystem:"geo",map:"china",left:"center",top:"center",showLegendSymbol:!0,dataRangeHoverLink:!0,roamDetail:{x:0,y:0,zoom:1},label:{normal:{show:!1,textStyle:{color:"#000"}},emphasis:{show:!1,textStyle:{color:"#000"}}},itemStyle:{normal:{borderWidth:.5,borderColor:"#444",areaColor:"#eee"},emphasis:{areaColor:"rgba(255,215, 0, 0.8)"}}}});return a.mixin(d,h),d}),e("echarts/component/helper/interactionMutex",[Qr],function(t){function e(t){return t[i]||(t[i]={})}var i="\x00_ec_interaction_mutex",n={take:function(t,i){e(i)[t]=!0},release:function(t,i){e(i)[t]=!1},isTaken:function(t,i){return!!e(i)[t]}};return n}),e("echarts/component/helper/RoamController",[Qr,Ji,Kr,Re,"./interactionMutex"],function(t){function e(t){if(!t[Zi]||!t[Zi][Ri]){var e=t[Pe],i=t[De],n=this.rect;n&&n[vi](e,i)&&(this._x=e,this._y=i,this._dragging=!0)}}function i(t){if(this._dragging&&(h.stop(t.event),"pinch"!==t.gestureEvent)){if(d.isTaken("globalPan",this._zr))return;var e=t[Pe],i=t[De],n=e-this._x,r=i-this._y;this._x=e,this._y=i;var a=this[Zi];if(a){var o=a[Cn];o[0]+=n,o[1]+=r,a.dirty()}h.stop(t.event),this[Mi]("pan",n,r)}}function n(t){this._dragging=!1}function r(t){h.stop(t.event);var e=t.wheelDelta>0?1.1:1/1.1;o.call(this,t,e,t[Pe],t[De])}function a(t){if(!d.isTaken("globalPan",this._zr)){h.stop(t.event);var e=t.pinchScale>1?1.1:1/1.1;o.call(this,t,e,t.pinchX,t.pinchY)}}function o(t,e,i,n){var r=this.rect;if(r&&r[vi](i,n)){var a=this[Zi];if(a){var o=a[Cn],s=a.scale,l=this._zoom=this._zoom||1;l*=e;var u=l/this._zoom;this._zoom=l,o[0]-=(i-o[0])*(u-1),o[1]-=(n-o[1])*(u-1),s[0]*=u,s[1]*=u,a.dirty()}this[Mi]("zoom",e,i,n)}}function s(t,o,s){this[Zi]=o,this.rect=s,this._zr=t;var h=c.bind,d=h(e,this),f=h(i,this),p=h(n,this),v=h(r,this),m=h(a,this);u.call(this),this[l]=function(e){this.disable(),null==e&&(e=!0),(e===!0||"move"===e||"pan"===e)&&(t.on(Ve,d),t.on(ze,f),t.on(Ie,p)),(e===!0||"scale"===e||"zoom"===e)&&(t.on("mousewheel",v),t.on("pinch",m))},this.disable=function(){t.off(Ve,d),t.off(ze,f),t.off(Ie,p),t.off("mousewheel",v),t.off("pinch",m)},this[me]=this.disable,this.isDragging=function(){return this._dragging},this.isPinching=function(){return this._pinching}}var u=t(Ji),c=t(Kr),h=t(Re),d=t("./interactionMutex");return c.mixin(s,u),s}),e("echarts/component/helper/MapDraw",[Qr,"./RoamController",xt,Kr],function(t){function e(t,e){var i=t[dt](),n=t.get("areaColor");return n&&(i.fill=n),i}function i(t,e,i,r,a){i.off("click"),t.get(_)&&i.on("click",function(i){var o=i[Zi][bi];if(null!=o){var s=e[zn](o);r[ln]({type:"mapToggleSelect",seriesIndex:t[Nn],name:s,from:a.uid}),n(t,e,r)}})}function n(t,e){e[xi](function(i,n){var r=e[zn](n);i[Mi](t.isSelected(r)?Zn:Gn)})}function r(t,e){var i=new o.Group;this[s]=new a(t.getZr(),e?i:null,null),this.group=i,this._updateGroup=e}var a=t("./RoamController"),o=t(xt),u=t(Kr);return r[Jr]={constructor:r,draw:function(t,r,a,s){var l=t[En]&&t[En](),c=t[nn],h=this.group;h[Ai]();var d=c.scale;h[Cn]=c[Cn].slice(),h.scale=d.slice();var f,p,v,m,g,y,x=[ue,Gn],_=[ue,Zn],w=["label",Gn],b=["label",Zn];l||(f=t[tr](x),p=t[tr](_),v=e(f,d),m=e(p,d),g=t[tr](w),y=t[tr](b)),u.each(c.regions,function(i){var n,r=new o.Group;if(l){n=l[_i](i.name);var a=l[In](n),s=l[Pt](n,"color",!0);f=a[tr](x),p=a[tr](_),v=e(f,d),m=e(p,d),g=a[tr](w),y=a[tr](b),s&&(v.fill=s)}var c=g[tr](Qn),M=y[tr](Qn);u.each(i.contours,function(t){var e=new o[$e]({shape:{points:t},style:{strokeNoScale:!0},culling:!0});e[Ue](v),r.add(e)});var S=g.get("show"),A=y.get("show"),C=l&&isNaN(l.get("value",n)),T=l&&l[zt](n);if(!l||C&&(S||A)||T&&T.showLabel){var k=l?n:i.name,L=t[ht](k,Gn),D=t[ht](k,Zn),P=new o.Text({style:{text:S?L||i.name:"",fill:c[Ge](),textFont:c[Kn](),textAlign:"center",textBaseline:"middle"},hoverStyle:{text:A?D||i.name:"",fill:M[Ge](),textFont:M[Kn]()},position:i[Vr].slice(),scale:[1/d[0],1/d[1]],z2:10,silent:!0});r.add(P)}l&&l[Dt](n,r),o[We](r,m),h.add(r)}),this._updateController(t,r,a),l&&i(t,l,h,a,s),l&&n(t,l)},remove:function(){this.group[Ai](),this[s][me]()},_updateController:function(t,e,i){var n=t[nn],r=this[s];r[l](t.get("roam")||!1);var a=t.type.split(".")[0];r.off("pan").on("pan",function(e,n){i[ln]({type:"geoRoam",component:a,name:t.name,dx:e,dy:n})}),r.off("zoom").on("zoom",function(e,n,r){if(i[ln]({type:"geoRoam",component:a,name:t.name,zoom:e,originX:n,originY:r}),this._updateGroup){var o=this.group,s=o.scale;o[ki](function(t){"text"===t.type&&t.attr("scale",[1/s[0],1/s[1]])})}},this),r.rect=n.getViewRect()}},r}),e("echarts/chart/map/MapView",[Qr,xt,"../../component/helper/MapDraw",T],function(t){var e=t(xt),i=t("../../component/helper/MapDraw");t(T)[jt]({type:"map",render:function(t,e,n,r){if(!r||"mapToggleSelect"!==r.type||r.from!==this.uid){var a=this.group;if(a[Ai](),r&&"geoRoam"===r.type&&r.component===pn&&r.name===t.name){var o=this._mapDraw;o&&a.add(o.group)}else if(t.needsDrawMap){var o=this._mapDraw||new i(n,!0);a.add(o.group),o.draw(t,e,n,this),this._mapDraw=o}else this._mapDraw&&this._mapDraw[Pi](),this._mapDraw=null;t.get("showLegendSymbol")&&e[on](se)&&this._renderSymbols(t,e,n)}},remove:function(){this._mapDraw&&this._mapDraw[Pi](),this._mapDraw=null,this.group[Ai]()},_renderSymbols:function(t,i,n){var r=t[En](),a=this.group;r.each("value",function(t,i){if(!isNaN(t)){var n=r[zt](i);if(n&&n.point){var o=n.point,s=n[Qe],l=new e[Je]({style:{fill:r[Ot]("color")},shape:{cx:o[0]+9*s,cy:o[1],r:3},silent:!0,z2:10});if(!s){var u=r[zn](i),c=r[In](i),h=c[tr](S),d=c[tr](M),f=h[tr](Qn),p=d[tr](Qn),v=r[wi](i);l[Ue]({textPosition:"bottom"});var m=function(){l[Ue]({text:d.get("show")?u:"",textFill:p[Ge](),textFont:p[Kn]()})},g=function(){l[Ue]({text:h.get("show")?u:"",textFill:f[Ge](),textFont:f[Kn]()})};v.on(He,m).on(Fe,g).on(Zn,m).on(Gn,g),g()}a.add(l)}}})}})}),e("echarts/action/roamHelper",[Qr],function(t){var e={};return e.calcPanAndZoom=function(t,e){var i=e.dx,n=e.dy,r=e.zoom,a=t.get("x")||0,o=t.get("y")||0,s=t.get("zoom")||1;if(null!=i&&null!=n&&(a+=i,o+=n),null!=r){var l=(e.originX-a)*(r-1),u=(e.originY-o)*(r-1);a-=l,o-=u}return{x:a,y:o,zoom:(r||1)*s}},e}),e("echarts/action/geoRoam",[Qr,Kr,"./roamHelper",K],function(t){var e=t(Kr),i=t("./roamHelper"),n=t(K),r={type:"geoRoam",event:"geoRoam",update:"updateLayout"};n[$t](r,function(t,n){var r=t.component||pn;n[ie](r,function(n){if(n.name===t.name){var a=n[nn];if("geo"!==a.type)return;var o=n[tr](u),s=i.calcPanAndZoom(o,t);n.setRoamPan&&n.setRoamPan(s.x,s.y),n.setRoamZoom&&n.setRoamZoom(s.zoom),a&&a.setPan(s.x,s.y),a&&a.setZoom(s.zoom),r===pn&&e.each(n.seriesGroup,function(t){t.setRoamPan(s.x,s.y),t.setRoamZoom(s.zoom)})}})})}),e("echarts/coord/geo/GeoModel",[Qr,Tt,R],function(t){var e=t(Tt),i=t(R);i[Cr]({type:"geo",coordinateSystem:null,init:function(t){i[Jr].init.apply(this,arguments),e[Fn](t.label,[Cn,"show",Qn,fr,Dn])},defaultOption:{zlevel:0,z:0,show:!0,left:"center",top:"center",map:"",roamDetail:{x:0,y:0,zoom:1},label:{normal:{show:!1,textStyle:{color:"#000"}},emphasis:{show:!0,textStyle:{color:"rgb(100,0,0)"}}},itemStyle:{normal:{borderWidth:.5,borderColor:"#444",color:"#eee"},emphasis:{color:"rgba(255,215,0,0.8)"}}},getFormattedLabel:function(t,e){var i=this.get("label."+e+".formatter"),n={name:t};return typeof i===Br?(n.status=e,i(n)):typeof i===Fr?i[Nr]("{a}",n.seriesName):void 0},setRoamZoom:function(t){var e=this[Un][u];e&&(e.zoom=t)},setRoamPan:function(t,e){var i=this[Un][u];i&&(i.x=t,i.y=e)}})}),e("zrender/contain/polygon",[Qr,"./windingLine"],function(t){function e(t,e){return Math.abs(t-e)<r}function i(t,i,r){var a=0,o=t[0];if(!o)return!1;for(var s=1;s<t[jr];s++){var l=t[s];a+=n(o[0],o[1],l[0],l[1],i,r),o=l}var u=t[0];return e(o[0],u[0])&&e(o[1],u[1])||(a+=n(o[0],o[1],u[0],u[1],i,r)),0!==a}var n=t("./windingLine"),r=1e-8;return{contain:i}}),e("echarts/coord/geo/Region",[Qr,"zrender/contain/polygon",hr,"zrender/core/bbox",vr],function(t){function e(t,e,i){if(this.name=t,this.contours=e,i)i=[i[0],i[1]];else{var n=this[Jn]();i=[n.x+n.width/2,n.y+n[ur]/2]}this[Vr]=i}var i=t("zrender/contain/polygon"),n=t(hr),r=t("zrender/core/bbox"),a=t(vr);return e[Jr]={constructor:e,getBoundingRect:function(){var t=this._rect;if(t)return t;for(var e=Number.MAX_VALUE,i=[e,e],o=[-e,-e],s=[],l=[],u=this.contours,c=0;c<u[jr];c++)r.fromPoints(u[c],s,l),a.min(i,i,s),a.max(o,o,l);return 0===c&&(i[0]=i[1]=o[0]=o[1]=0),this._rect=new n(i[0],i[1],o[0]-i[0],o[1]-i[1])},contain:function(t){var e=this[Jn](),n=this.contours;if(e[vi](t[0],t[1]))for(var r=0,a=n[jr];a>r;r++)if(i[vi](n[r],t[0],t[1]))return!0;return!1},transformTo:function(t,e,i,r){var o=this[Jn](),s=o.width/o[ur];i?r||(r=i/s):i=s*r;for(var l=new n(t,e,i,r),u=o.calculateTransform(l),c=this.contours,h=0;h<c[jr];h++)for(var d=0;d<c[h][jr];d++)a[cr](c[h][d],c[h][d],u);o=this._rect,o.copy(l),this[Vr]=[o.x+o.width/2,o.y+o[ur]/2]}},e}),e("echarts/coord/geo/parseGeoJson",[Qr,Kr,"./Region"],function(t){function e(t){if(!t.UTF8Encoding)return t;for(var e=t.features,n=0;n<e[jr];n++)for(var r=e[n],a=r.geometry,o=a.coordinates,s=a.encodeOffsets,l=0;l<o[jr];l++){var u=o[l];if(a.type===$e)o[l]=i(u,s[l]);else if("MultiPolygon"===a.type)for(var c=0;c<u[jr];c++){var h=u[c];u[c]=i(h,s[l][c])}}return t.UTF8Encoding=!1,t}function i(t,e){for(var i=[],n=e[0],r=e[1],a=0;a<t[jr];a+=2){var o=t.charCodeAt(a)-64,s=t.charCodeAt(a+1)-64;o=o>>1^-(1&o),s=s>>1^-(1&s),o+=n,s+=r,n=o,r=s,i.push([o/1024,s/1024])}return i}function n(t){for(var e=[],i=0;i<t[jr];i++)for(var n=0;n<t[i][jr];n++)e.push(t[i][n]);return e}var r=t(Kr),a=t("./Region");return function(t){return e(t),r.map(r[$r](t.features,function(t){return t.geometry&&t.properties}),function(t){var e=t.properties,i=t.geometry,r=i.coordinates;return"MultiPolygon"===i.type&&(r=n(r)),new a(e.name,r,e.cp)})}}),e("echarts/coord/View",[Qr,vr,dr,"zrender/mixin/Transformable",Kr,hr],function(t){function e(){a.call(this)}function i(t){this.name=t,a.call(this),this._roamTransform=new e,this._viewTransform=new e}var n=t(vr),r=t(dr),a=t("zrender/mixin/Transformable"),o=t(Kr),s=t(hr),l=n[cr];return o.mixin(e,a),i[Jr]={constructor:i,type:"view",dimensions:["x","y"],setBoundingRect:function(t,e,i,n){return this._rect=new s(t,e,i,n),this._rect},getBoundingRect:function(){return this._rect},setViewRect:function(t,e,i,n){this.transformTo(t,e,i,n),this._viewRect=new s(t,e,i,n)},transformTo:function(t,e,i,n){var r=this[Jn](),a=this._viewTransform;a[Xi]=r.calculateTransform(new s(t,e,i,n)),a.decomposeTransform(),this._updateTransform()},setPan:function(t,e){this._roamTransform[Cn]=[t,e],this._updateTransform()},setZoom:function(t){this._roamTransform.scale=[t,t],this._updateTransform()},getRoamTransform:function(){return this._roamTransform[Xi]},_updateTransform:function(){var t=this._roamTransform,e=this._viewTransform;e[Ui]=t,t[ji](),e[ji](),e[Xi]&&r.copy(this[Xi]||(this[Xi]=[]),e[Xi]),this.decomposeTransform()},getViewRect:function(){return this._viewRect},dataToPoint:function(t){var e=this[Xi];return e?l([],t,e):[t[0],t[1]]},pointToData:function(t){var e=this[Wi];return e?l([],t,e):[t[0],t[1]]}},o.mixin(i,a),i}),e("echarts/coord/geo/fix/nanhai",[Qr,"../Region"],function(t){for(var e=t("../Region"),i=[126,25],n=[[[0,3.5],[7,11.2],[15,11.9],[30,7],[42,.7],[52,.7],[56,7.7],[59,.7],[64,.7],[64,0],[5,0],[0,3.5]],[[13,16.1],[19,14.7],[16,21.7],[11,23.1],[13,16.1]],[[12,32.2],[14,38.5],[15,38.5],[13,32.2],[12,32.2]],[[16,47.6],[12,53.2],[13,53.2],[18,47.6],[16,47.6]],[[6,64.4],[8,70],[9,70],[8,64.4],[6,64.4]],[[23,82.6],[29,79.8],[30,79.8],[25,82.6],[23,82.6]],[[37,70.7],[43,62.3],[44,62.3],[39,70.7],[37,70.7]],[[48,51.1],[51,45.5],[53,45.5],[50,51.1],[48,51.1]],[[51,35],[51,28.7],[53,28.7],[53,35],[51,35]],[[52,22.4],[55,17.5],[56,17.5],[53,22.4],[52,22.4]],[[58,12.6],[62,7],[63,7],[60,12.6],[58,12.6]],[[0,3.5],[0,93.1],[64,93.1],[64,0],[63,0],[63,92.4],[1,92.4],[1,3.5],[0,3.5]]],r=0;r<n[jr];r++)for(var a=0;a<n[r][jr];a++)n[r][a][0]/=10.5,n[r][a][1]/=-14,n[r][a][0]+=i[0],n[r][a][1]+=i[1];return function(t){"china"===t.map&&t.regions.push(new e("南海诸岛",n,i))}}),e("echarts/coord/geo/fix/textCoord",[Qr,Kr],function(t){var e=t(Kr),i={"南海诸岛":[32,80],"广东":[0,-10],"香港":[10,5],"澳门":[-10,10],"天津":[5,5]};return function(t){e.each(t.regions,function(t){var e=i[t.name];if(e){var n=t[Vr];n[0]+=e[0]/10.5,n[1]+=-e[1]/14}})}}),e("echarts/coord/geo/fix/geoCoord",[Qr,Kr],function(t){var e=t(Kr),i={Russia:[100,60],"United States of America":[-99,38]};return function(t){e.each(t.regions,function(t){var e=i[t.name];if(e){var n=t[Vr];n[0]=e[0],n[1]=e[1]}})}}),e("echarts/coord/geo/Geo",[Qr,"./parseGeoJson",Kr,hr,"../View","./fix/nanhai","./fix/textCoord","./fix/geoCoord"],function(t){function e(t,e,i,n,r){a.call(this,t),this.map=e,this._nameCoordMap={},this.loadGeoJson(i,n,r)}var i=t("./parseGeoJson"),n=t(Kr),r=t(hr),a=t("../View"),o=[t("./fix/nanhai"),t("./fix/textCoord"),t("./fix/geoCoord")];return e[Jr]={constructor:e,type:"geo",dimensions:["lng","lat"],loadGeoJson:function(t,e,r){try{this.regions=t?i(t):[]}catch(a){throw"Invalid geoJson format\n"+a}e=e||{},r=r||{};for(var s=this.regions,l={},u=0;u<s[jr];u++){var c=s[u].name;c=r[c]||c,s[u].name=c,l[c]=s[u],this.addGeoCoord(c,s[u][Vr]);var h=e[c];h&&s[u].transformTo(h.left,h.top,h.width,h[ur])}this._regionsMap=l,this._rect=null,n.each(o,function(t){t(this)},this)},transformTo:function(t,e,i,n){var a=this[Jn]();a=a.clone(),a.y=-a.y-a[ur];var o=this._viewTransform;o[Xi]=a.calculateTransform(new r(t,e,i,n)),o.decomposeTransform();var s=o.scale;s[1]=-s[1],o[ji](),this._updateTransform()},getRegion:function(t){return this._regionsMap[t]},addGeoCoord:function(t,e){this._nameCoordMap[t]=e},getGeoCoord:function(t){return this._nameCoordMap[t]},getBoundingRect:function(){if(this._rect)return this._rect;for(var t,e=this.regions,i=0;i<e[jr];i++){var n=e[i][Jn]();t=t||n.clone(),t.union(n)}return this._rect=t||new r(0,0,0,0)},dataToPoints:function(t){var e=[];return t[Et](["lng","lat"],function(t,i){return e[0]=t,e[1]=i,this[st](e)},this)},dataToPoint:function(t){return typeof t===Fr&&(t=this.getGeoCoord(t)),t?a[Jr][st].call(this,t):void 0}},n.mixin(e,a),e}),e("echarts/coord/geo/geoCreator",[Qr,"./GeoModel","./Geo",V,Kr,T],function(t){function e(t,e){var i=this[Jn](),n=t[P]();n.aspect=i.width/i[ur]*.75;var r=a[wn](n,{width:e[cn](),height:e[un]()});this.setViewRect(r.x,r.y,r.width,r[ur]);var o=t[tr](u),s=o.get("x")||0,l=o.get("y")||0,c=o.get("zoom")||1;this.setPan(s,l),this.setZoom(c)}function i(t,e){o.each(e.get("geoCoord"),function(e,i){t.addGeoCoord(i,e)})}function n(t){console.error("Map "+t+" not exists")}t("./GeoModel");var r=t("./Geo"),a=t(V),o=t(Kr),s={},l={dimensions:r[Jr][en],create:function(t,a){var l=[];t[ie]("geo",function(t,o){var u=t.get("map"),c=s[u];c||n(u);var h=new r(u+o,u,c&&c.geoJson,c&&c.specialAreas,t.get("nameMap"));l.push(h),i(h,t),t[nn]=h,h.model=t,h[Me]=e,h[Me](t,a)}),t[he](function(t){var e=t.get(nn);if("geo"===e){var i=t.get("geoIndex")||0;t[nn]=l[i]}});var u={};return t[de]("map",function(t){var e=t.get("map");u[e]=u[e]||[],u[e].push(t)}),o.each(u,function(t,u){var c=s[u];c||n(name);var h=o.map(t,function(t){return t.get("nameMap")}),d=new r(u,u,c&&c.geoJson,c&&c.specialAreas,o.mergeAll(h));l.push(d),d[Me]=e,d[Me](t[0],a),o.each(t,function(t){t[nn]=d,i(d,t)})}),l},registerMap:function(t,e,i){e.geoJson&&!e.features&&(i=e.specialAreas,e=e.geoJson),typeof e===Fr&&(e=typeof JSON!==pr&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),s[t]={geoJson:e,specialAreas:i}},getMap:function(t){return s[t]}},c=t(T);c.registerMap=l.registerMap,c.getMap=l.getMap,c.loadMap=function(){},c.registerCoordinateSystem("geo",l)}),e("echarts/chart/map/mapSymbolLayout",[Qr,Kr],function(t){var e=t(Kr);return function(t){var i={};t[de]("map",function(n){var r=n.get("mapType");if(!i[r]){var a={};e.each(n.seriesGroup,function(e){var i=e[nn],n=e[En]();e.get("showLegendSymbol")&&t[on](se)&&n.each("value",function(t,e){var r=n[zn](e),o=i.getRegion(r);if(o&&!isNaN(t)){var s=a[r]||0,l=i[st](o[Vr]);a[r]=s+1,n[It](e,{point:l,offset:s})}})});var o=n[En]();o.each(function(t){var e=o[zn](t),i=o[zt](t)||{};i.showLabel=!a[e],o[It](t,i)}),i[r]=!0}})}}),e("echarts/chart/map/mapVisual",[Qr],function(t){return function(t){t[de]("map",function(t){var e=t.get("color"),i=t[tr](C),n=i.get("areaColor"),r=i.get("color")||e[t[Nn]%e[jr]];t[En]()[ve]({areaColor:n,color:r})})}}),e("echarts/chart/map/mapDataStatistic",[Qr,Kr],function(t){function e(t,e){for(var i={},n=["value"],r=0;r<t[jr];r++)t[r].each(n,function(e,n){var a=t[r][zn](n);i[a]=i[a]||[],isNaN(e)||i[a].push(e)});return t[0].map(n,function(n,r){for(var a=t[0][zn](r),o=0,s=1/0,l=-(1/0),u=i[a][jr],c=0;u>c;c++)s=Math.min(s,i[a][c]),l=Math.max(l,i[a][c]),o+=i[a][c];var h;return h="min"===e?s:"max"===e?l:"average"===e?o/u:o,0===u?NaN:h})}var i=t(Kr);return function(t){var n={};t[de]("map",function(t){var e=t.get("map");n[e]=n[e]||[],n[e].push(t)}),i.each(n,function(t,n){var r=e(i.map(t,function(t){return t[En]()}),t[0].get("mapValueCalculation"));t[0].seriesGroup=[],t[0][ri](r);for(var a=0;a<t[jr];a++)t[a].seriesGroup=t,t[a].needsDrawMap=0===a})}}),e("echarts/chart/map/backwardCompat",[Qr,Kr],function(t){function e(t){var e={};return i.each(n,function(i){null!=t[i]&&(e[i]=t[i])}),e}var i=t(Kr),n=["x","y","x2","y2","width",ur,"map","roam",u,"label",ue],r={};return function(t){var n=[];i.each(t[pn],function(t){"map"===t.type&&n.push(t),i[Cr](r,t.geoCoord)});var a={};i.each(n,function(n){if(n.map=n.map||n.mapType,i[ir](n,n.mapLocation),n[le]){var o=n[le];if(o.data=i.map(o.data,function(t){if(!i[Or](t.value)){var e;t.geoCoord?e=t.geoCoord:t.name&&(e=r[t.name]);var n=e?[e[0],e[1]]:[NaN,NaN];null!=t.value&&n.push(t.value),t.value=n}return t}),!n.data||!n.data[jr]){t.geo||(t.geo=[]);var s=a[n.map];s||(s=a[n.map]=e(n),t.geo.push(s));var l=n[le];l.type=t.effect&&t.effect.show?"effectScatter":ae,l[nn]="geo",l.geoIndex=i[Hr](t.geo,s),l.name=n.name,t[pn][Ki](i[Hr](t[pn],n),1,l)}}})}}),e("echarts/chart/map",[Qr,K,"./map/MapSeries","./map/MapView","../action/geoRoam","../coord/geo/geoCreator","./map/mapSymbolLayout","./map/mapVisual","./map/mapDataStatistic","./map/backwardCompat","../action/createDataSelectAction"],function(t){var e=t(K);t("./map/MapSeries"),t("./map/MapView"),t("../action/geoRoam"),t("../coord/geo/geoCreator"),e[Yt](t("./map/mapSymbolLayout")),e[Xt]("chart",t("./map/mapVisual")),e[Kt]("statistic",t("./map/mapDataStatistic")),e[Jt](t("./map/backwardCompat")),t("../action/createDataSelectAction")("map",[{type:"mapToggleSelect",event:"mapselectchanged",method:"toggleSelected"},{type:"mapSelect",event:"mapselected",method:"select"},{type:"mapUnSelect",event:"mapunselected",method:"unSelect"}])}),e("echarts/data/helper/linkList",[Qr,Kr],function(t){function e(t,e,n){return i.each(r,function(r,a){var o=t[a];t[a]=i.curry(r,o,e,n)}),t[n]=e,e.data=t,t}var i=t(Kr),n=Array[Jr].slice,r={cloneShallow:function(t,i,r){var a=t.apply(this,n.call(arguments,3));return e(a,i,r)},map:function(t,i,r){var a=t.apply(this,n.call(arguments,3));return e(a,i,r)},filterSelf:function(t,e,i){var r=t.apply(this,n.call(arguments,3));return e[Se](),r}};return{linkToGraph:function(t,i){e(t,i,"graph")},linkToTree:function(t,i){e(t,i,"tree")}}}),e("echarts/data/Tree",[Qr,Kr,"../model/Model","./List","./helper/linkList","./helper/completeDimensions"],function(t){function e(t,e){this.root,this.data,this._nodes=[],this[Qt]=t,this.levelModels=n.map(e||[],function(e){return new r(e,t,t[er])})}function i(t,e){var i=e.children;t[Le]!==e&&(i.push(t),t[Le]=e,e.hostTree._nodes.push(t))}var n=t(Kr),r=t("../model/Model"),s=t("./List"),l=t("./helper/linkList"),u=t("./helper/completeDimensions"),c=function(t,e,i){this.name=t||"",this.depth=0,this[ur]=0,this[Le]=null,this[bi]=null==e?-1:e,this.children=[],this.viewChildren=[],this.hostTree=i};return c[Jr]={constructor:c,isRemoved:function(){return this[bi]<0},eachNode:function(t,e,i){typeof t===Br&&(i=e,e=t,t=null),t=t||{},n[fn](t)&&(t={order:t});var r,a=t.order||"preorder",s=this[t.attr||"children"];"preorder"===a&&(r=e.call(i,this));for(var l=0;!r&&l<s[jr];l++)s[l][o](t,e,i);"postorder"===a&&e.call(i,this)},updateDepthAndHeight:function(t){var e=0;this.depth=t;for(var i=0;i<this.children[jr];i++){var n=this.children[i];n.updateDepthAndHeight(t+1),n[ur]>e&&(e=n[ur])}this[ur]=e+1},getNodeById:function(t){if(this.getId()===t)return this;for(var e=0,i=this.children,n=i[jr];n>e;e++){var r=i[e].getNodeById(t);if(r)return r}},contains:function(t){if(t===this)return!0;for(var e=0,i=this.children,n=i[jr];n>e;e++){var r=i[e].contains(t);if(r)return r}},getAncestors:function(t){for(var e=[],i=t?this:this[Le];i;)e.push(i),i=i[Le];return e[a](),e},getValue:function(t){var e=this.hostTree.data;return e.get(e[Ht](t||"value"),this[bi])},setLayout:function(t,e){this[bi]>=0&&this.hostTree.data[It](this[bi],t,e)},getLayout:function(){return this.hostTree.data[zt](this[bi])},getModel:function(t){if(!(this[bi]<0)){var e=this.hostTree,i=e.data[In](this[bi]),n=this.getLevelModel();return i[tr](t,(n||e[Qt])[tr](t))}},getLevelModel:function(){return(this.hostTree.levelModels||[])[this.depth]},setVisual:function(t,e){this[bi]>=0&&this.hostTree.data[fe](this[bi],t,e)},getVisual:function(t,e){return this.hostTree.data[Pt](this[bi],t,e)},getRawIndex:function(){return this.hostTree.data[Vn](this[bi])},getId:function(){return this.hostTree.data.getId(this[bi])}},e[Jr]={constructor:e,type:"tree",eachNode:function(t,e,i){this.root[o](t,e,i);
},getNodeByDataIndex:function(t){var e=this.data[Vn](t);return this._nodes[e]},getNodeByName:function(t){return this.root.getNodeByName(t)},update:function(){for(var t=this.data,e=this._nodes,i=0,n=e[jr];n>i;i++)e[i][bi]=-1;for(var i=0,n=t.count();n>i;i++)e[t[Vn](i)][bi]=i}},e.createTree=function(t,n,r){function a(t,e){h.push(t);var n=new c(t.name,h[jr]-1,o);e?i(n,e):o.root=n;var r=t.children;if(r)for(var s=0;s<r[jr];s++)a(r[s],n)}var o=new e(n,r),h=[];a(t),o.root.updateDepthAndHeight(0);var d=u([{name:"value"}],h),f=new s(d,n);return f[Ft](h),l.linkToTree(f,o),o},e}),e("echarts/chart/treemap/TreemapSeries",[Qr,bt,"../../data/Tree",Kr,k,v],function(t){function e(t,i){var n=0;o.each(t.children,function(t){e(t,i);var r=t.value;o[Or](r)&&(r=r[0]),n+=r});var r=t.value;i>=0&&(o[Or](r)?r=r[0]:t.value=new Array(i)),(null==r||isNaN(r))&&(r=n),0>r&&(r=0),i>=0?t.value[0]=r:t.value=r}function i(t,e){var i=e.get("color");if(i){t=t||[];var n;if(o.each(t,function(t){var e=new s(t),i=e.get("color");(e.get(re)||i&&"none"!==i)&&(n=!0)}),!n){var r=t[0]||(t[0]={});r.color=i.slice()}return t}}var n=t(bt),r=t("../../data/Tree"),o=t(Kr),s=t(k),l=t(v),u=l[an],c=l[rn];return n[Cr]({type:"series.treemap",dependencies:["grid","polar"],defaultOption:{left:"center",top:"middle",right:null,bottom:null,width:"80%",height:"80%",sort:!0,clipWindow:"origin",squareRatio:.5*(1+Math.sqrt(5)),root:null,visualDimension:0,zoomToNodeRatio:.1024,roam:!0,nodeClick:"zoomToNode",animation:!0,animationDurationUpdate:1500,animationEasing:"quinticInOut",breadcrumb:{show:!0,height:22,left:"center",top:"bottom",emptyItemWidth:25,itemStyle:{normal:{color:"rgba(0,0,0,0.7)",borderColor:"rgba(255,255,255,0.7)",borderWidth:1,shadowColor:"rgba(150,150,150,1)",shadowBlur:3,shadowOffsetX:0,shadowOffsetY:0,textStyle:{color:"#fff"}},emphasis:{textStyle:{}}}},label:{normal:{show:!0,position:["50%","50%"],textStyle:{align:"center",baseline:"middle",color:"#fff",ellipsis:!0}}},itemStyle:{normal:{color:null,colorAlpha:null,colorSaturation:null,borderWidth:0,gapWidth:0,borderColor:"#fff",borderColorSaturation:null},emphasis:{}},color:"none",colorAlpha:null,colorSaturation:null,colorMappingBy:"index",visibleMin:10,childrenVisibleMin:null,levels:[]},getInitialData:function(t,n){var a=t.data||[],s=t.name;null==s&&(s=t.name);var l={name:s,children:t.data},u=(a[0]||{}).value;e(l,o[Or](u)?u[jr]:-1);var c=t.levels||[];return c=t.levels=i(c,n),r.createTree(l,this,c).data},getViewRoot:function(){var t=this[Un].root,e=this[En]().tree.root;return t&&e.getNodeById(t)||e},formatTooltip:function(t){var e=this[En](),i=this[Rn](t),n=c(o[Or](i)?i[0]:i),r=e[zn](t);return u(r)+": "+n},getDataParams:function(t){for(var e=n[Jr][Pn].apply(this,arguments),i=this[En](),r=i.tree.getNodeByDataIndex(t),o=e.treePathInfo=[];r;){var s=r[bi];o.push({name:r.name,dataIndex:s,value:this[Rn](s)}),r=r[Le]}return o[a](),e},setLayoutInfo:function(t){this.layoutInfo=this.layoutInfo||{},o[Cr](this.layoutInfo,t)},mapIdToIndex:function(t){var e=this._idIndexMap;e||(e=this._idIndexMap={},this._idIndexMapCount=0);var i=e[t];return null==i&&(e[t]=i=this._idIndexMapCount++),i}})}),e("echarts/chart/treemap/helper",[Qr],function(t){var e={retrieveTargetInfo:function(t,e){if(t&&"treemapZoomToNode"===t.type){var i=e[En]().tree.root,n=t.targetNode;if(n&&i.contains(n))return{node:n};var r=t.targetNodeId;return null!=r&&(n=i.getNodeById(r))?{node:n}:null}}};return e}),e("echarts/chart/treemap/Breadcrumb",[Qr,xt,V,Kr],function(t){function e(t,e){this.group=new n.Group,t.add(this.group),this._onSelect=e||a.noop}function i(t,e,i,n,r,a){var o=[[r?t:t-l,e],[t+i,e],[t+i,e+n],[r?t:t-l,e+n]];return!a&&o[Ki](2,0,[t+i+l,e+n/2]),!r&&o.push([t,e+n/2]),o}var n=t(xt),r=t(V),a=t(Kr),o=8,s=8,l=5;return e[Jr]={constructor:e,render:function(t,e,i){var n=t[tr]("breadcrumb"),a=this.group;if(a[Ai](),n.get("show")&&i){var o=n[tr](C),s=o[tr](Qn),l={pos:{left:n.get("left"),right:n.get("right"),top:n.get("top"),bottom:n.get(Ir)},box:{width:e[cn](),height:e[un]()},emptyItemWidth:n.get("emptyItemWidth"),totalWidth:0,renderList:[]};this._prepare(n,i,l,s),this._renderContent(n,i,l,o,s),r[xn](a,l.pos,l.box)}},_prepare:function(t,e,i,n){for(var r=e;r;r=r[Le]){var a=r[tr]().get("name"),l=n.getTextRect(a),u=Math.max(l.width+2*o,i.emptyItemWidth);i.totalWidth+=u+s,i.renderList.push({node:r,text:a,width:u})}},_renderContent:function(t,e,o,l,u){for(var c=0,h=o.emptyItemWidth,d=t.get(ur),f=r.getAvailableSize(o.pos,o.box),p=o.totalWidth,v=o.renderList,m=v[jr]-1;m>=0;m--){var g=v[m],y=g.width,x=g.text;p>f.width&&(p-=y-h,y=h,x=""),this.group.add(new n[$e]({shape:{points:i(c,0,y,d,m===v[jr]-1,0===m)},style:a[ir](l[dt](),{lineJoin:"bevel",text:x,textFill:u[Ge](),textFont:u[Kn]()}),onclick:a.bind(this._onSelect,this,g.node)})),c+=y+s}},remove:function(){this.group[Ai]()}},e}),e("echarts/util/animation",[Qr,Kr],function(t){function e(){var t,e=[],n={};return{add:function(t,r,a,o,s){return i[fn](o)&&(s=o,o=0),n[t.id]?!1:(n[t.id]=1,e.push({el:t,target:r,time:a,delay:o,easing:s}),!0)},done:function(e){return t=e,this},start:function(){function i(){r--,r||(e[jr]=0,n={},t&&t())}for(var r=e[jr],a=0,o=e[jr];o>a;a++){var s=e[a];s.el[Be](s[Zi],s.time,s.delay,s.easing,i)}return this}}}var i=t(Kr);return{createWrap:e}}),e("echarts/chart/treemap/TreemapView",[Qr,Kr,xt,"../../data/DataDiffer","./helper","./Breadcrumb","../../component/helper/RoamController",hr,dr,"../../util/animation",T],function(t){function e(){return{nodeGroup:[],background:[],content:[]}}var i=t(Kr),n=t(xt),r=t("../../data/DataDiffer"),a=t("./helper"),u=t("./Breadcrumb"),c=t("../../component/helper/RoamController"),h=t(hr),d=t(dr),f=t("../../util/animation"),p=i.bind,v=n.Group,m=n.Rect,g=i.each,y=3;return t(T)[jt]({type:"treemap",init:function(t,i){this._containerGroup,this._storage=e(),this._oldTree,this._breadcrumb,this[s],this._state="ready",this._mayClick},render:function(t,e,n,r){var o=e[dn]({mainType:"series",subType:"treemap",query:r});if(!(i[Hr](o,t)<0)){this.seriesModel=t,this.api=n,this[er]=e;var s=r&&r.type,l=t.layoutInfo,u=!this._oldTree,c=this._giveContainerGroup(l),h=this._doRender(c,t);u||s&&"treemapZoomToNode"!==s?h.renderFinally():this._doAnimation(c,h,t),this._resetController(n);var d=a.retrieveTargetInfo(r,t);this._renderBreadcrumb(t,n,d)}},_giveContainerGroup:function(t){var e=this._containerGroup;return e||(e=this._containerGroup=new v,this._initEvents(e),this.group.add(e)),e[Cn]=[t.x,t.y],e},_doRender:function(t,n){function a(t,e,n,o,s){function l(t){return t.getId()}function u(i,r){var l=null!=i?t[i]:null,u=null!=r?e[r]:null,c=s||l===x;c||(l=null);var h=y(l,u,n);h&&a(l&&l.viewChildren||[],u&&u.viewChildren||[],h,o,c)}o?(e=t,g(t,function(t,e){!t.isRemoved()&&u(e,e)})):new r(e,t,l,l).add(u)[Se](u)[Pi](i.curry(u,null))[ct]()}function o(t){var i=e();return t&&g(t,function(t,e){var n=i[e];g(t,function(t){t&&(n.push(t),t.__tmWillDelete=e)})}),i}function s(){g(m,function(t){g(t,function(t){t[Ui]&&t[Ui][Pi](t)})}),g(f,function(t){t[Ti]=!0}),g(v,function(t){t[Ti]=!1,t.__tmWillVisible=!1,t.dirty()})}var l=n[En]().tree,u=this._oldTree,c=e(),h=e(),d=this._storage,f=[],v=[],m=[],y=p(this._renderNode,this,h,d,c,f,v),x=n.getViewRoot();a(l.root?[l.root]:[],u&&u.root?[u.root]:[],t,l===u||!u,x===l.root);var m=o(d);return this._oldTree=l,this._storage=h,{lastsForAnimation:c,willDeleteEls:m,renderFinally:s}},_renderNode:function(t,e,n,r,a,o,s,l){function u(i,r){var a=null!=p&&e[i][p],o=n[i];return a?(e[i][p]=null,c(o,a,i)):_||(a=new r,h(o,a,i)),t[i][f]=a}function c(t,e,n){var r=t[f]={};r.old="nodeGroup"===n?e[Cn].slice():i[Cr]({},e.shape)}function h(t,e,i){if("background"===i)e[Ti]=!0,e.__tmWillVisible=!0,a.push(e);else{var r,s=o[Le],l=0,u=0;s&&(r=n.background[s[Vn]()])&&(l=r.old.width,u=r.old[ur]);var c=t[f]={};c.old="nodeGroup"===i?[l,u]:{x:l,y:u,width:0,height:0},c.fadein="nodeGroup"!==i}}function d(t,e){_?!t[Ti]&&r.push(t):(t[Ue](e),t.__tmWillVisible||(t[Ti]=!1))}var f=o&&o[Vn](),p=s&&s[Vn]();if(o){var g=o[Vt](),y=g.width,x=g[ur],_=g[Ti],w=u("nodeGroup",v);if(w){l.add(w),w[Cn]=[g.x,g.y],w.__tmNodeWidth=y,w.__tmNodeHeight=x;var b=u("background",m);b&&(b[ai]({x:0,y:0,width:y,height:x}),d(b,{fill:o[Ot](Yn,!0)}),w.add(b));var M=o.viewChildren;if(!M||!M[jr]){var A=g[Xn],C=u("content",m);if(C){var T=Math.max(y-2*A,0),k=Math.max(x-2*A,0),L=o[tr](S),D=o[tr]("label.normal.textStyle"),P=o[tr]().get("name"),I=D.getTextRect(P),z=L.get("show");!z||I[ur]>k?P="":I.width>T&&(P=D.get("ellipsis")?D.ellipsis(P,T):""),C[bi]=o[bi],C[Nn]=this.seriesModel[Nn],C.culling=!0,C[ai]({x:A,y:A,width:T,height:k}),d(C,{fill:o[Ot]("color",!0),text:P,textPosition:L.get(Cn),textFill:D[Ge](),textAlign:D.get("align"),textBaseline:D.get($n),textFont:D[Kn]()}),w.add(C)}}return w}}},_doAnimation:function(t,e,n){if(n.get(Bi)){var r=n.get("animationDurationUpdate"),a=n.get("animationEasing"),o=f.createWrap(),s=this.seriesModel.getViewRoot(),l=this._storage.nodeGroup[s[Vn]()];l&&l[ki](function(t){var e;if(!t[Ti]&&(e=t.__tmWillDelete)){var i=0,n=0,s=t[Ui];s.__tmWillDelete||(i=s.__tmNodeWidth,n=s.__tmNodeHeight);var l="nodeGroup"===e?{position:[i,n],style:{opacity:0}}:{shape:{x:i,y:n,width:0,height:0},style:{opacity:0}};o.add(t,l,r,a)}}),g(this._storage,function(t,n){g(t,function(t,s){var l,u=e.lastsForAnimation[n][s];u&&("nodeGroup"===n?(l={position:t[Cn].slice()},t[Cn]=u.old):(l={shape:i[Cr]({},t.shape)},t[ai](u.old),u.fadein?(t[Ue](xr,0),l.style={opacity:1}):1!==t.style[xr]&&(l.style={opacity:1})),o.add(t,l,r,a))})},this),this._state="animating",o.done(p(function(){this._state="ready",e.renderFinally()},this)).start()}},_resetController:function(t){var e=this[s];e||(e=this[s]=new c(t.getZr()),e[l](this.seriesModel.get("roam")),e.on("pan",p(this._onPan,this)),e.on("zoom",p(this._onZoom,this))),e.rect=new h(0,0,t[cn](),t[un]())},_clearController:function(){var t=this[s];t&&(t.off("pan").off("zoom"),t=null)},_onPan:function(t,e){if(this._mayClick=!1,"animating"!==this._state&&(Math.abs(t)>y||Math.abs(e)>y)){var i=this.seriesModel.getViewRoot();if(!i)return;var n=i[Vt]();if(!n)return;this.api[ln]({type:"treemapMove",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:n.x+t,y:n.y+e,width:n.width,height:n[ur]}})}},_onZoom:function(t,e,i){if(this._mayClick=!1,"animating"!==this._state){var n=this.seriesModel.getViewRoot();if(!n)return;var r=n[Vt]();if(!r)return;var a=new h(r.x,r.y,r.width,r[ur]),o=this.seriesModel.layoutInfo;e-=o.x,i-=o.y;var s=d[lr]();d[sr](s,s,[-e,-i]),d.scale(s,s,[t,t]),d[sr](s,s,[e,i]),a[cr](s),this.api[ln]({type:"treemapRender",from:this.uid,seriesId:this.seriesModel.id,rootRect:{x:a.x,y:a.y,width:a.width,height:a[ur]}})}},_initEvents:function(t){function e(t){var e=this.seriesModel.get("nodeClick",!0);if(e){var i=this.findTarget(t[Pe],t[De]);if(i)if("zoomToNode"===e)this._zoomToNode(i);else if("link"===e){var n=i.node,r=n.hostTree.data[In](n[bi]),a=r.get("link",!0),o=r.get(Zi,!0)||"blank";a&&window.open(a,o)}}}t.on(Ve,function(t){"ready"===this._state&&(this._mayClick=!0)},this),t.on(Ie,function(t){this._mayClick&&(this._mayClick=!1,"ready"===this._state&&e.call(this,t))},this)},_renderBreadcrumb:function(t,e,i){function n(t){this._zoomToNode({node:t})}i||(i=this.findTarget(e[cn]()/2,e[un]()/2),i||(i={node:t[En]().tree.root})),(this._breadcrumb||(this._breadcrumb=new u(this.group,p(n,this))))[Si](t,e,i.node)},remove:function(){this._clearController(),this._containerGroup&&this._containerGroup[Ai](),this._storage=e(),this._state="ready",this._breadcrumb&&this._breadcrumb[Pi]()},dispose:function(){this._clearController()},_zoomToNode:function(t){this.api[ln]({type:"treemapZoomToNode",from:this.uid,seriesId:this.seriesModel.id,targetNode:t.node})},findTarget:function(t,e){var i,n=this.seriesModel.getViewRoot();return n[o]({attr:"viewChildren",order:"preorder"},function(n){var r=this._storage.background[n[Vn]()];if(r){var a=r[Fi](t,e),o=r.shape;if(!(o.x<=a[0]&&a[0]<=o.x+o.width&&o.y<=a[1]&&a[1]<=o.y+o[ur]))return!1;i={node:n,offsetX:a[0],offsetY:a[1]}}},this),i}})}),e("echarts/chart/treemap/treemapAction",[Qr,T],function(t){var e=t(T),i=function(){};e[$t]({type:"treemapZoomToNode",update:"updateView"},i),e[$t]({type:"treemapRender",update:"updateView"},i),e[$t]({type:"treemapMove",update:"updateView"},i)}),e("echarts/visual/VisualMapping",[Qr,Kr,Gi,"../util/number"],function(t){function e(t){var e=t.pieceList;t.hasSpecialVisual=!1,u.each(e,function(e,i){e.originIndex=i,e.visual&&(t.hasSpecialVisual=!0)})}function i(t){var e=t[r],i=t.visual,n=u[Or](i);if(!e){if(n)return;throw new Error}var a=t.categoryMap={};if(d(e,function(t,e){a[t]=e}),!n){var o=[];u[Ln](i)?d(i,function(t,e){var i=a[e];o[null!=i?i:p]=t}):o[p]=i,i=t.visual=o}for(var s=e[jr]-1;s>=0;s--)null==i[s]&&(delete a[e[s]],e.pop())}function n(t){return{applyVisual:function(e,i,n){var r=i("color"),a=u[Or](e);if(e=a?[this.mapValueToVisual(e[0]),this.mapValueToVisual(e[1])]:this.mapValueToVisual(e),u[Or](r))for(var o=0,s=r[jr];s>o;o++)r[o].color=t(r[o].color,a?e[o]:e);else n("color",t(r,e))},mapValueToVisual:function(t){var e=this._normalizeData(t),i=this._getSpecifiedVisual(t),n=this[Un].visual;return null==i&&(i=l(this)?s(this,n,e):h(e,[0,1],n,!0)),i}}}function a(t,e){return t[Math.round(h(e,[0,1],[0,t[jr]-1],!0))]}function o(t,e,i){i("color",this.mapValueToVisual(t))}function s(t,e,i){return e[t[Un].loop&&i!==p?i%e[jr]:i]}function l(t){return t[Un].mappingMethod===At}var u=t(Kr),c=t(Gi),h=t("../util/number")[Er],d=u.each,f=u[Ln],p=-1,v=function(t){var n=t.mappingMethod,r=t.type;this.type=r,this.mappingMethod=n;var a=this[Un]=u.clone(t);this._normalizeData=g[n],this._getSpecifiedVisual=u.bind(y[n],this,r),u[Cr](this,m[r]),"piecewise"===n&&e(a),n===At&&i(a)};v[Jr]={constructor:v,applyVisual:null,isValueActive:null,mapValueToVisual:null,getNormalizer:function(){return u.bind(this._normalizeData,this)}};var m=v.visualHandlers={color:{applyVisual:o,getColorMapper:function(){var t=l(this)?this[Un].visual:u.map(this[Un].visual,c.parse);return u.bind(l(this)?function(e,i){return!i&&(e=this._normalizeData(e)),s(this,t,e)}:function(e,i,n){var r=!!n;return!i&&(e=this._normalizeData(e)),n=c.fastMapToColor(e,t,n),r?n:u.stringify(n,"rgba")},this)},mapValueToVisual:function(t){var e=this[Un].visual;if(u[Or](t))return t=[this._normalizeData(t[0]),this._normalizeData(t[1])],c.mapIntervalToColor(t,e);var i=this._normalizeData(t),n=this._getSpecifiedVisual(t);return null==n&&(n=l(this)?s(this,e,i):c.mapToColor(i,e)),n}},colorHue:n(function(t,e){return c.modifyHSL(t,e)}),colorSaturation:n(function(t,e){return c.modifyHSL(t,null,e)}),colorLightness:n(function(t,e){return c.modifyHSL(t,null,null,e)}),colorAlpha:n(function(t,e){return c.modifyAlpha(t,e)}),symbol:{applyVisual:function(t,e,i){var n=this.mapValueToVisual(t);if(u[fn](n))i(pt,n);else if(f(n))for(var r in n)n.hasOwnProperty(r)&&i(r,n[r])},mapValueToVisual:function(t){var e=this._normalizeData(t),i=this._getSpecifiedVisual(t),n=this[Un].visual;return null==i&&(i=l(this)?s(this,n,e):a(n,e)||{}),i}},symbolSize:{applyVisual:function(t,e,i){i(vt,this.mapValueToVisual(t))},mapValueToVisual:function(t){var e=this._normalizeData(t),i=this._getSpecifiedVisual(t),n=this[Un].visual;return null==i&&(i=l(this)?s(this,n,e):h(e,[0,1],n,!0)),i}}},g={linear:function(t){return h(t,this[Un].dataExtent,[0,1],!0)},piecewise:function(t){var e=this[Un].pieceList,i=v.findPieceIndex(t,e);return null!=i?h(i,[0,e[jr]-1],[0,1],!0):void 0},category:function(t){var e=this[Un][r]?this[Un].categoryMap[t]:t;return null==e?p:e}},y={linear:u.noop,piecewise:function(t,e){var i=this[Un],n=i.pieceList;if(i.hasSpecialVisual){var r=v.findPieceIndex(e,n),a=n[r];if(a&&a.visual)return a.visual[t]}},category:u.noop};return v.addVisualHandler=function(t,e){m[t]=e},v.isValidType=function(t){return m.hasOwnProperty(t)},v.eachVisual=function(t,e,i){u[Ln](t)?u.each(t,e,i):e.call(i,t)},v.mapVisual=function(t,e,i){var n,r=u[Or](t)?[]:u[Ln](t)?{}:(n=!0,null);return v.eachVisual(t,function(t,a){var o=e.call(i,t,a);n?r=o:r[a]=o}),r},v.isInVisualCluster=function(t,e){return"color"===e?!(!t||0!==t[Hr](e)):t===e},v.retrieveVisuals=function(t){var e,i={};return t&&d(m,function(n,r){t.hasOwnProperty(r)&&(i[r]=t[r],e=!0)}),e?i:null},v.prepareVisualTypes=function(t){if(f(t)){var e=[];d(t,function(t,i){e.push(i)}),t=e}else{if(!u[Or](t))return[];t=t.slice()}return t.sort(function(t,e){return"color"===e&&"color"!==t&&0===t[Hr]("color")?1:-1}),t},v.findPieceIndex=function(t,e){for(var i=0,n=e[jr];n>i;i++){var r=e[i];if(null!=r.value&&r.value===t)return i}for(var i=0,n=e[jr];n>i;i++){var r=e[i],a=r[Z];if(a)if(a[0]===-(1/0)){if(t<a[1])return i}else if(a[1]===1/0){if(a[0]<t)return i}else if(r[Z][0]<=t&&t<=r[Z][1])return i}},v}),e("echarts/chart/treemap/treemapVisual",[Qr,n,Gi,Kr],function(t){function e(t,n,o,l,c,h){var f=t[tr](),v=t[Vt]();if(!v[Ti]){var m,g=t[tr](p),y=o[t.depth],x=i(g,n,y,l),_=g.get(Yn),w=g.get("borderColorSaturation");null!=w&&(m=r(x,t),_=a(w,m)),t[ve](Yn,_);var b=t.viewChildren;if(b&&b[jr]){var M=s(t,f,v,g,x,b);d.each(b,function(t,i){if(t.depth>=c[jr]||t===c[t.depth]){var n=u(f,x,t,i,M,h);e(t,n,o,l,c,h)}})}else m=r(x,t),t[ve]("color",m)}}function i(t,e,i,n){var r=d[Cr]({},e);return d.each(["color","colorAlpha","colorSaturation"],function(a){var o=t.get(a,!0);null==o&&i&&(o=i[a]),null==o&&(o=e[a]),null==o&&(o=n.get(a)),null!=o&&(r[a]=o)}),r}function r(t){var e=o(t,"color");if(e){var i=o(t,"colorAlpha"),n=o(t,"colorSaturation");return n&&(e=h.modifyHSL(e,null,null,n)),i&&(e=h.modifyAlpha(e,i)),e}}function a(t,e){return null!=e?h.modifyHSL(e,null,null,t):null}function o(t,e){var i=t[e];return null!=i&&"none"!==i?i:void 0}function s(t,e,i,n,r,a){if(a&&a[jr]){var o=l(e,"color")||null!=r.color&&"none"!==r.color&&(l(e,"colorAlpha")||l(e,"colorSaturation"));if(o){var s=e.get("colorMappingBy"),u={type:o.name,dataExtent:i.dataExtent,visual:o.range};"color"!==u.type||"index"!==s&&"id"!==s?u.mappingMethod=Ni:(u.mappingMethod=At,u.loop=!0);var h=new c(u);return h.__drColorMappingBy=s,h}}}function l(t,e){var i=t.get(e);return f(i)&&i[jr]?{name:e,range:i}:null}function u(t,e,i,n,r,a){var o=d[Cr]({},e);if(r){var s=r.type,l="color"===s&&r.__drColorMappingBy,u="index"===l?n:"id"===l?a.mapIdToIndex(i.getId()):i.getValue(t.get("visualDimension"));o[s]=r.mapValueToVisual(u)}return o}var c=t(n),h=t(Gi),d=t(Kr),f=d[Or],p=C;return function(t,i){var n={mainType:"series",subType:"treemap",query:i};t[ie](n,function(t){var i=t[En]().tree,n=i.root,r=t[tr](p);if(!n.isRemoved()){var a=d.map(i.levelModels,function(t){return t?t.get(p):null});e(n,{},a,r,t.getViewRoot().getAncestors(),t)}})}}),e("echarts/chart/treemap/treemapLayout",[Qr,Kr,yt,V,hr,"./helper"],function(t){function e(t,e,n){var r={mainType:"series",subType:"treemap",query:n};t[ie](r,function(t){var r=e[cn](),a=e[un](),o=t.get("size")||[],s=y(x(t.get("width"),o[0]),r),l=y(x(t.get(ur),o[1]),a),u=g[wn](t[P](),{width:e[cn](),height:e[un]()}),f=n&&n.type,p=w.retrieveTargetInfo(n,t),v="treemapRender"===f||"treemapMove"===f?n.rootRect:null,m=t.getViewRoot();if("treemapMove"!==f){var b="treemapZoomToNode"===f?c(t,p,s,l):v?[v.width,v[ur]]:[s,l],M=t.get("sort");M&&"asc"!==M&&"desc"!==M&&(M="desc");var S={squareRatio:t.get("squareRatio"),sort:M};m[Rt]({x:0,y:0,width:b[0],height:b[1],area:b[0]*b[1]}),i(m,S)}m[Rt](h(u,v,p),!0),t.setLayoutInfo(u),d(m,new _(-u.x,-u.y,r,a))})}function i(t,e){var r,a;if(!t.isRemoved()){var o=t[Vt]();r=o.width,a=o[ur];var s=t[tr](C),c=s.get(Xn),h=s.get("gapWidth")/2,d=c-h,m=t[tr]();t[Rt]({borderWidth:c},!0),r=f(r-2*d,0),a=f(a-2*d,0);var g=r*a,y=n(t,m,g,e);if(y[jr]){var x={x:d,y:d,width:r,height:a},_=p(r,a),w=1/0,b=[];b.area=0;for(var M=0,S=y[jr];S>M;){var A=y[M];b.push(A),b.area+=A[Vt]().area;var T=l(b,_,e.squareRatio);w>=T?(M++,w=T):(b.area-=b.pop()[Vt]().area,u(b,_,x,h,!1),_=p(x.width,x[ur]),b[jr]=b.area=0,w=1/0)}b[jr]&&u(b,_,x,h,!0);var k;if(!e.hideChildren){var L=m.get("childrenVisibleMin");null!=L&&L>g&&(k=!0)}for(var M=0,S=y[jr];S>M;M++){var D=v[Cr]({hideChildren:k},e);i(y[M],D)}}}}function n(t,e,i,n){var a=t.children||[],l=n.sort;if("asc"!==l&&"desc"!==l&&(l=null),n.hideChildren)return t.viewChildren=[];a=v[$r](a,function(t){return!t.isRemoved()}),o(a,l);var u=s(e,a,l);if(0===u.sum)return t.viewChildren=[];if(u.sum=r(e,i,u.sum,l,a),0===u.sum)return t.viewChildren=[];for(var c=0,h=a[jr];h>c;c++){var d=a[c].getValue()/u.sum*i;a[c][Rt]({area:d})}return t.viewChildren=a,t[Rt]({dataExtent:u.dataExtent},!0),a}function r(t,e,i,n,r){if(!n)return i;for(var a=t.get("visibleMin"),o=r[jr],s=o,l=o-1;l>=0;l--){var u=r["asc"===n?o-l-1:l].getValue();a>u/i*e&&(s=l,i-=u)}return"asc"===n?r[Ki](0,o-s):r[Ki](s,o-s),i}function o(t,e){return e&&t.sort(function(t,i){return"asc"===e?t.getValue()-i.getValue():i.getValue()-t.getValue()}),t}function s(t,e,i){for(var n=0,r=0,o=e[jr];o>r;r++)n+=e[r].getValue();var s,l=t.get("visualDimension");if(e&&e[jr])if("value"===l&&i)s=[e[e[jr]-1].getValue(),e[0].getValue()],"asc"===i&&s[a]();else{var s=[1/0,-(1/0)];v.each(e,function(t){var e=t.getValue(l);e<s[0]&&(s[0]=e),e>s[1]&&(s[1]=e)})}else s=[NaN,NaN];return{sum:n,dataExtent:s}}function l(t,e,i){for(var n,r=0,a=1/0,o=0,s=t[jr];s>o;o++)n=t[o][Vt]().area,n&&(a>n&&(a=n),n>r&&(r=n));var l=t.area*t.area,u=e*e*i;return l?f(u*r/l,l/(u*a)):1/0}function u(t,e,i,n,r){var a=e===i.width?0:1,o=1-a,s=["x","y"],l=["width",ur],u=i[s[a]],c=e?t.area/e:0;(r||c>i[l[o]])&&(c=i[l[o]]);for(var h=0,d=t[jr];d>h;h++){var v=t[h],m={},g=c?v[Vt]().area/c:0,y=m[l[o]]=f(c-2*n,0),x=i[s[a]]+i[l[a]]-u,_=h===d-1||g>x?x:g,w=m[l[a]]=f(_-2*n,0);m[s[o]]=i[s[o]]+p(n,y/2),m[s[a]]=u+p(n,w/2),u+=_,v[Rt](m,!0)}i[s[o]]+=c,i[l[o]]-=c}function c(t,e,i,n){var r=(e||{}).node,a=[i,n];if(!r||r===t.getViewRoot())return a;for(var o,s=i*n,l=s*t.get("zoomToNodeRatio");o=r[Le];){for(var u=0,c=o.children,h=0,d=c[jr];d>h;h++)u+=c[h].getValue();var f=r.getValue();if(0===f)return a;l*=u/f;var p=o[tr](C).get(Xn);isFinite(p)&&(l+=4*p*p+4*p*Math.pow(l,.5)),l>m.MAX_SAFE_INTEGER&&(l=m.MAX_SAFE_INTEGER),r=o}s>l&&(l=s);var v=Math.pow(l/s,.5);return[i*v,n*v]}function h(t,e,i){if(e)return{x:e.x,y:e.y};var n={x:0,y:0};if(!i)return n;var r=i.node,a=r[Vt]();if(!a)return n;for(var o=[a.width/2,a[ur]/2],s=r;s;){var l=s[Vt]();o[0]+=l.x,o[1]+=l.y,s=s[Le]}return{x:t.width/2-o[0],y:t[ur]/2-o[1]}}function d(t,e){var i=t[Vt]();t[Rt]({invisible:!e[be](i)},!0);for(var n=t.viewChildren||[],r=0,a=n[jr];a>r;r++){var o=new _(e.x-i.x,e.y-i.y,e.width,e[ur]);d(n[r],o)}}var f=Math.max,p=Math.min,v=t(Kr),m=t(yt),g=t(V),y=m[Rr],x=v.retrieve,_=t(hr),w=t("./helper");return e}),e("echarts/chart/treemap",[Qr,K,"./treemap/TreemapSeries","./treemap/TreemapView","./treemap/treemapAction","./treemap/treemapVisual","./treemap/treemapLayout"],function(t){var e=t(K);t("./treemap/TreemapSeries"),t("./treemap/TreemapView"),t("./treemap/treemapAction"),e[Xt]("chart",t("./treemap/treemapVisual")),e[Yt](t("./treemap/treemapLayout"))}),e("echarts/data/Graph",[Qr,Kr],function(t){function e(t,e){this.id=null==t?"":t,this.inEdges=[],this.outEdges=[],this.edges=[],this.hostGraph,this[bi]=null==e?-1:e}function i(t,e,i){this.node1=t,this.node2=e,this[bi]=null==i?-1:i}var n=t(Kr),r=function(t){this._directed=t||!1,this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this.data,this.edgeData},a=r[Jr];a.type="graph",a.isDirected=function(){return this._directed},a.addNode=function(t,i){var n=this._nodesMap;if(!n[t]){var r=new e(t,i);return r.hostGraph=this,this.nodes.push(r),n[t]=r,r}},a.getNodeByIndex=function(t){var e=this.data[Vn](t);return this.nodes[e]},a.getNodeById=function(t){return this._nodesMap[t]},a.addEdge=function(t,n,r){var a=this._nodesMap,o=this._edgesMap;if(t instanceof e||(t=a[t]),n instanceof e||(n=a[n]),t&&n){var s=t.id+"-"+n.id;if(!o[s]){var l=new i(t,n,r);return l.hostGraph=this,this._directed&&(t.outEdges.push(l),n.inEdges.push(l)),t.edges.push(l),t!==n&&n.edges.push(l),this.edges.push(l),o[s]=l,l}}},a.getEdgeByIndex=function(t){var e=this.edgeData[Vn](t);return this.edges[e]},a.getEdge=function(t,i){t instanceof e&&(t=t.id),i instanceof e&&(i=i.id);var n=this._edgesMap;return this._directed?n[t+"-"+i]:n[t+"-"+i]||n[i+"-"+t]},a[o]=function(t,e){for(var i=this.nodes,n=i[jr],r=0;n>r;r++)i[r][bi]>=0&&t.call(e,i[r],r)},a.eachEdge=function(t,e){for(var i=this.edges,n=i[jr],r=0;n>r;r++)i[r][bi]>=0&&i[r].node1[bi]>=0&&i[r].node2[bi]>=0&&t.call(e,i[r],r)},a.breadthFirstTraverse=function(t,i,n,r){if(!i instanceof e&&(i=this._nodesMap[i]),i){for(var a="out"===n?"outEdges":"in"===n?"inEdges":"edges",o=0;o<this.nodes[jr];o++)this.nodes[o].__visited=!1;if(!t.call(r,i,null))for(var s=[i];s[jr];)for(var l=s.shift(),u=l[a],o=0;o<u[jr];o++){var c=u[o],h=c.node1===l?c.node2:c.node1;if(!h.__visited){if(t.call(h,h,l))return;s.push(h),h.__visited=!0}}}},a[Se]=function(){for(var t=this.data,e=this.edgeData,i=this.nodes,n=this.edges,r=0,a=i[jr];a>r;r++)i[r][bi]=-1;for(var r=0,a=t.count();a>r;r++)i[t[Vn](r)][bi]=r;e[Nt](function(t){var i=n[e[Vn](t)];return i.node1[bi]>=0&&i.node2[bi]>=0});for(var r=0,a=n[jr];a>r;r++)n[r][bi]=-1;for(var r=0,a=e.count();a>r;r++)n[e[Vn](r)][bi]=r},a.setEdgeData=function(t){this.edgeData=t,this._edgeDataSaved=t.cloneShallow()},a.restoreData=function(){this.edgeData=this._edgeDataSaved.cloneShallow()},a.clone=function(){for(var t=new r(this._directed),e=this.nodes,i=this.edges,n=0;n<e[jr];n++)t.addNode(e[n].id,e[n][bi]);for(var n=0;n<i[jr];n++){var a=i[n];t.addEdge(a.node1.id,a.node2.id,a[bi])}return t},e[Jr]={constructor:e,degree:function(){return this.edges[jr]},inDegree:function(){return this.inEdges[jr]},outDegree:function(){return this.outEdges[jr]},getModel:function(t){if(!(this[bi]<0)){var e=this.hostGraph,i=e.data[In](this[bi]);return i[tr](t)}}},i[Jr][tr]=function(t){if(!(this[bi]<0)){var e=this.hostGraph,i=e.edgeData[In](this[bi]);return i[tr](t)}};var s=function(t,e){return{getValue:function(i){var n=this[t][e];return n.get(n[Ht](i||"value"),this[bi])},setVisual:function(i,n){this[bi]>=0&&this[t][e][fe](this[bi],i,n)},getVisual:function(i,n){return this[t][e][Pt](this[bi],i,n)},setLayout:function(i,n){this[bi]>=0&&this[t][e][It](this[bi],i,n)},getLayout:function(){return this[t][e][zt](this[bi])},getGraphicEl:function(){return this[t][e][wi](this[bi])},getRawIndex:function(){return this[t][e][Vn](this[bi])}}};return n.mixin(e,s("hostGraph","data")),n.mixin(i,s("hostGraph","edgeData")),r.Node=e,r.Edge=i,r}),e("echarts/chart/helper/createGraphFromNodeEdge",[Qr,Lt,"../../data/Graph","../../data/helper/linkList",kt,Kr],function(t){var e=t(Lt),i=t("../../data/Graph"),n=t("../../data/helper/linkList"),r=t(kt),a=t(Kr);return function(t,o,s,l){for(var u=new i(l),c=0;c<t[jr];c++)u.addNode(a.retrieve(t[c].id,t[c].name,c),c);for(var h=[],d=[],c=0;c<o[jr];c++){var f=o[c];u.addEdge(f.source,f[Zi],c)&&(d.push(f),h.push(a.retrieve(f.id,f.source+" - "+f[Zi])))}var p=r(["value"],t),v=new e(p,s),m=new e(["value"],s);return v[Ft](t),m[Ft](d,h),u.setEdgeData(m),n.linkToGraph(v,u),u[Se](),u}}),e("echarts/chart/graph/GraphSeries",[Qr,Lt,Kr,"../helper/createGraphFromNodeEdge",T],function(t){var e=t(Lt),i=t(Kr),n=t("../helper/createGraphFromNodeEdge");return t(T)[qt]({type:"series.graph",init:function(t){this[g]("init",arguments),this[m]=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(t){this[g](mn,arguments),this._updateCategoriesData()},getInitialData:function(t,e){var i=t.edges||t.links,r=t.data||t.nodes;if(r&&i){var a=n(r,i,this,!0),o=a.data,s=this;return o.wrapMethod(In,function(t){var e=s._categoriesModels,i=t[br](At),n=e[i];return n&&(n.parentModel=t.parentModel,t.parentModel=n),t}),o}},restoreData:function(){this[g]("restoreData",arguments),this.getGraph().restoreData()},getGraph:function(){return this[En]().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},_updateCategoriesData:function(){var t=i.map(this[Un][r]||[],function(t){return null!=t.value?t:i[Cr]({value:0},t)}),n=new e(["value"],this);n[Ft](t),this._categoriesData=n,this._categoriesModels=n[Et](function(t){return n[In](t,!0)})},setRoamZoom:function(t){var e=this[Un][u];e&&(e.zoom=t)},setRoamPan:function(t,e){var i=this[Un][u];i&&(i.x=t,i.y=e)},defaultOption:{zlevel:0,z:2,color:["#61a0a8","#d14a61","#fd9c35","#675bba","#fec42c","#dd4444","#fd9c35","#cd4870"],coordinateSystem:"view",legendHoverLink:!0,hoverAnimation:!0,layout:null,force:{initLayout:null,repulsion:50,gravity:.1,edgeLength:30,layoutAnimation:!0},left:"center",top:"center",symbol:"circle",symbolSize:10,draggable:!1,roam:!1,roamDetail:{x:0,y:0,zoom:1},nodeScaleRatio:.6,label:{normal:{show:!1},emphasis:{show:!0}},itemStyle:{normal:{},emphasis:{}},lineStyle:{normal:{color:"#aaa",width:1,curveness:0,opacity:.5},emphasis:{}}}})}),e("echarts/chart/helper/LinePath",[Qr,xt],function(t){var e=t(xt),i=e.Line[Jr],n=e.BezierCurve[Jr];return e[Xe]({type:"ec-line",style:{stroke:"#000",fill:null},shape:{x1:0,y1:0,x2:0,y2:0,percent:1,cpx1:null,cpy1:null},buildPath:function(t,e){(null==e.cpx1||null==e.cpy1?i:n)[si](t,e)},pointAt:function(t){var e=this.shape;return null==e.cpx1||null==e.cpy1?i.pointAt.call(this,t):n.pointAt.call(this,t)}})}),e("echarts/chart/helper/Line",[Qr,_t,vr,"./LinePath",xt,Kr,yt],function(t){function e(t,e,i){var n=e[Pt](i,"color"),r=e[Pt](i,pt),a=e[Pt](i,vt);if("none"!==r){d[Or](a)||(a=[a,a]);var o=l[mt](r,-a[0]/2,-a[1]/2,a[0],a[1],n);return o.name=t,o}}function i(t){var e=new c({name:"line",style:{strokeNoScale:!0}});return n(e.shape,t),e}function n(t,e){var i=e[0],n=e[1],r=e[2];t.x1=i[0],t.y1=i[1],t.x2=n[0],t.y2=n[1],t.percent=1,r&&(t.cpx1=r[0],t.cpy1=r[1])}function r(t){return t.type===pt&&"arrow"===t.shape.symbolType}function a(){var t=this,e=t.childOfName("line");if(this[Ii]||e[Ii]){var i=t.childOfName("fromSymbol"),n=t.childOfName("toSymbol"),a=t.childOfName("label"),s=e.pointAt(0),l=e.pointAt(e.shape.percent),c=u.sub([],l,s);u.normalize(c,c),i&&(i.attr(Cn,s),r(n)&&n.attr($i,o(s,l))),n&&(n.attr(Cn,l),r(i)&&i.attr($i,o(l,s))),a.attr(Cn,l);var h,d,f;"end"===a.__position?(h=[5*c[0]+l[0],5*c[1]+l[1]],d=c[0]>.8?"left":c[0]<-.8?"right":Vr,f=c[1]>.8?"top":c[1]<-.8?Ir:zr):(h=[5*-c[0]+s[0],5*-c[1]+s[1]],d=c[0]>.8?"right":c[0]<-.8?"left":Vr,f=c[1]>.8?Ir:c[1]<-.8?"top":zr),a.attr({style:{textBaseline:a.__textBaseline||f,textAlign:a.__textAlign||d},position:h})}}function o(t,e){return-Math.PI/2-Math.atan2(e[1]-t[1],e[0]-t[0])}function s(t,e,i,n){h.Group.call(this),this._createLine(t,e,i,n)}var l=t(_t),u=t(vr),c=t("./LinePath"),h=t(xt),d=t(Kr),f=t(yt),p=s[Jr];return p.beforeUpdate=a,p._createLine=function(t,n,r,a){var o=t[Qt],s=t[zt](a),l=i(s);l.shape.percent=0,h[Ee](l,{shape:{percent:1}},o),this.add(l);var u=new h.Text({name:"label"});if(this.add(u),n){var c=e("fromSymbol",n,a);this.add(c),this._fromSymbolType=n[Pt](a,pt)}if(r){var d=e("toSymbol",r,a);this.add(d),this._toSymbolType=r[Pt](a,pt)}this._updateCommonStl(t,n,r,a)},p[gt]=function(t,i,r,a){var o=t[Qt],s=this.childOfName("line"),l=t[zt](a),u={shape:{}};if(n(u.shape,l),h[Ne](s,u,o),i){var c=i[Pt](a,pt);if(this._fromSymbolType!==c){var d=e("fromSymbol",i,a);this[Pi](s.childOfName("fromSymbol")),this.add(d)}this._fromSymbolType=c}if(r){var f=r[Pt](a,pt);if(f!==this._toSymbolType){var p=e("toSymbol",r,a);this[Pi](s.childOfName("toSymbol")),this.add(p)}this._toSymbolType=f}this._updateCommonStl(t,i,r,a)},p._updateCommonStl=function(t,e,i,n){var r=t[Qt],a=this.childOfName("line"),o=t[In](n),s=o[tr](S),l=s[tr](Qn),u=o[tr](M),c=u[tr](Qn),p=f.round(r[Rn](n));isNaN(p)&&(p=t[zn](n)),a[Ue](d[Cr]({stroke:t[Pt](n,"color")},o[tr](Q)[J]()));var v=this.childOfName("label");v[Ue]({text:s.get("show")?r[ht](n,Gn)||p:"",textFont:l[Kn](),fill:l[Ge]()||t[Pt](n,"color")}),v[qe]={text:u.get("show")?r[ht](n,Zn)||p:"",textFont:l[Kn](),fill:c[Ge]()},v.__textAlign=l.get("align"),v.__textBaseline=l.get($n),v.__position=s.get(Cn),h[We](this,o[tr]("lineStyle.emphasis")[J]())},p[Ci]=function(t,e,i,r){var a=t[zt](r),o=this.childOfName("line");n(o.shape,a),o.dirty(!0),e&&e[wi](r).attr(Cn,a[0]),i&&i[wi](r).attr(Cn,a[1])},d[Ar](s,h.Group),s}),e("echarts/chart/helper/LineDraw",[Qr,xt,"./Line"],function(t){
function e(t){this._ctor=t||n,this.group=new i.Group}var i=t(xt),n=t("./Line"),r=e[Jr];return r[gt]=function(t,e,i){var n=this._lineData,r=this.group,a=this._ctor;t.diff(n).add(function(n){var o=new a(t,e,i,n);t[Dt](n,o),r.add(o)})[Se](function(a,o){var s=n[wi](o);s[gt](t,e,i,a),t[Dt](a,s),r.add(s)})[Pi](function(t){r[Pi](n[wi](t))})[ct](),this._lineData=t,this._fromData=e,this._toData=i},r[Ci]=function(){var t=this._lineData;t[xi](function(e,i){e[Ci](t,this._fromData,this._toData,i)},this)},r[Pi]=function(){this.group[Ai]()},e}),e("echarts/chart/graph/GraphView",[Qr,ot,"../helper/LineDraw","../../component/helper/RoamController",Tt,xt,T],function(t){var e=t(ot),i=t("../helper/LineDraw"),n=t("../../component/helper/RoamController"),r=t(Tt),a=t(xt);t(T)[jt]({type:"graph",init:function(t,r){var a=new e,o=new i,l=this.group,u=new n(r.getZr(),l);l.add(a.group),l.add(o.group),this[tt]=a,this._lineDraw=o,this[s]=u,this._firstRender=!0},render:function(t,e,i){var n=t[nn];if("geo"===n.type||"view"===n.type){var o=t[En]();this[ne]=t;var s=this[tt],l=this._lineDraw;s[gt](o);var u=o.graph.edgeData,c=t[Un],h=r[Bn](t,u,c.edges||c.links);h[d]=function(t){var e=this[Pn](t),i=e.data,n=i.source+" > "+i[Zi];return e.value&&(n+=":"+e.value),n},l[gt](u,null,null),u[xi](function(t){t[ki](function(t){t[Qt]=h})}),o.graph.eachEdge(function(t){t.__lineWidth=t[tr](Q).get("width")});var f=this.group,p={position:n[Cn],scale:n.scale};this._firstRender?f.attr(p):a[Ne](f,p,t),this._nodeScaleRatio=t.get("nodeScaleRatio"),this._updateNodeAndLinkScale(),this._updateController(t,n,i),clearTimeout(this._layoutTimeout);var v=t.forceLayout,m=t.get("force.layoutAnimation");v&&this._startForceLayoutIteration(v,m),o[xi](function(t,e){var i=o[In](e).get(Ri);i&&v?t.on("drag",function(){v.warmUp(),!this._layouting&&this._startForceLayoutIteration(v,m),v.setFixed(e),o[It](e,t[Cn])},this).on("dragend",function(){v.setUnfixed(e)},this):t.off("drag"),t.setDraggable(i)},this),this._firstRender=!1}},_startForceLayoutIteration:function(t,e){var i=this;!function n(){t.step(function(t){i[Ci](),(i._layouting=!t)&&(e?i._layoutTimeout=setTimeout(n,16):n())})}()},_updateController:function(t,e,i){var n=this[s];n.rect=e.getViewRect(),n[l](t.get("roam")),n.off("pan").off("zoom").on("pan",function(e,n){i[ln]({seriesId:t.id,type:"graphRoam",dx:e,dy:n})}).on("zoom",function(e,n,r){i[ln]({seriesId:t.id,type:"graphRoam",zoom:e,originX:n,originY:r})}).on("zoom",this._updateNodeAndLinkScale,this)},_updateNodeAndLinkScale:function(){var t=this[ne],e=t[En](),i=this.group,n=this._nodeScaleRatio,r=i.scale[0],a=(r-1)*n+1,o=[a/r,a/r];e[xi](function(t,e){t.attr("scale",o)})},updateLayout:function(t,e){this[tt][Ci](),this._lineDraw[Ci]()},remove:function(t,e){this[tt]&&this[tt][Pi](),this._lineDraw&&this._lineDraw[Pi]()}})}),e("echarts/chart/graph/roamAction",[Qr,T,"../../action/roamHelper"],function(t){var e=t(T),i=t("../../action/roamHelper"),n={type:"graphRoam",event:"graphRoam",update:"none"};e[$t](n,function(t,e){e[ie]({mainType:"series",query:t},function(e){var n=e[nn],r=e[tr](u),a=i.calcPanAndZoom(r,t);e.setRoamPan&&e.setRoamPan(a.x,a.y),e.setRoamZoom&&e.setRoamZoom(a.zoom),n&&n.setPan(a.x,a.y),n&&n.setZoom(a.zoom)})})}),e("echarts/chart/graph/categoryFilter",[Qr],function(t){return function(t){var e=t[dn]({mainType:"legend"});e&&e[jr]&&t[de]("graph",function(t){var i=t.getCategoriesData(),n=t.getGraph(),r=n.data,a=i[Et](i[zn]);r[Nt](function(t){var i=r[In](t),n=i[br](At);if(null!=n){typeof n===Zr&&(n=a[n]);for(var o=0;o<e[jr];o++)if(!e[o].isSelected(n))return!1}return!0})},this)}}),e("echarts/chart/graph/categoryVisual",[Qr],function(t){return function(t){t[de]("graph",function(t){var e=t.get("color"),i=t.getCategoriesData(),n=t[En](),r={};i.each(function(t){r[i[zn](t)]=t;var n=i[In](t),a=i[Vn](t),o=n.get(re)||e[a%e[jr]];i[fe](t,"color",o)}),i.count()&&n.each(function(t){var e=n[In](t),a=e[br](At);null!=a&&(typeof a===Fr&&(a=r[a]),n[fe](t,"color",i[Pt](a,"color")))})})}}),e("echarts/chart/graph/simpleLayoutHelper",[Qr],function(t){return function(t){var e=t[nn];if(!e||"view"===e.type){var i=t.getGraph();i[o](function(t){var e=t[tr]();t[Rt]([+e.get("x"),+e.get("y")])}),i.eachEdge(function(t){var e,i=t[tr]().get("lineStyle.normal.curveness")||0,n=t.node1[Vt](),r=t.node2[Vt]();i>0&&(e=[(n[0]+r[0])/2-(n[1]-r[1])*i,(n[1]+r[1])/2-(r[0]-n[0])*i]),t[Rt]([n,r,e])})}}}),e("echarts/chart/graph/simpleLayout",[Qr,"./simpleLayoutHelper"],function(t){var e=t("./simpleLayoutHelper");return function(t,i){t[de]("graph",function(t){var i=t.get(c);i&&"none"!==i||e(t)})}}),e("echarts/chart/graph/circularLayoutHelper",[Qr],function(t){return function(t){var e=t[nn];if(!e||"view"===e.type){var i=e[Jn](),n=t[En](),r=n.graph,a=0,s=n[Bt]("value"),l=2*Math.PI/(s||n.count()),u=i.width/2+i.x,c=i[ur]/2+i.y,h=Math.min(i.width,i[ur])/2;r[o](function(t){var e=t.getValue("value");a+=l*(s?e:2)/2,t[Rt]([h*Math.cos(a)+u,h*Math.sin(a)+c]),a+=l*(s?e:2)/2}),r.eachEdge(function(t){var e,i=t[tr]().get("lineStyle.normal.curveness")||0,n=t.node1[Vt](),r=t.node2[Vt]();i>0&&(e=[u,c]),t[Rt]([n,r,e])})}}}),e("echarts/chart/graph/circularLayout",[Qr,"./circularLayoutHelper"],function(t){var e=t("./circularLayoutHelper");return function(t,i){t[de]("graph",function(t){"circular"===t.get(c)&&e(t)})}}),e("echarts/chart/graph/forceHelper",[Qr,vr],function(t){var e=t(vr),i=e.scaleAndAdd;return function(t,n,r){for(var a=r.rect,o=a.width,s=a[ur],l=[a.x+o/2,a.y+s/2],u=null==r.gravity?.1:r.gravity,c=0;c<t[jr];c++){var h=t[c];h.p||(h.p=e[lr](o*(Math.random()-.5)+l[0],s*(Math.random()-.5)+l[1])),h.pp=e.clone(h.p),h.edges=null}var d=.6;return{warmUp:function(){d=.5},setFixed:function(e){t[e].fixed=!0},setUnfixed:function(e){t[e].fixed=!1},step:function(r){for(var a=[],o=t[jr],s=0;s<n[jr];s++){var c=n[s],h=c.n1,f=c.n2;e.sub(a,f.p,h.p);var p=e.len(a)-c.d,v=f.w/(h.w+f.w);e.normalize(a,a),!h.fixed&&i(h.p,h.p,a,v*p*d),!f.fixed&&i(f.p,f.p,a,-(1-v)*p*d)}for(var s=0;o>s;s++){var m=t[s];m.fixed||(e.sub(a,l,m.p),e.scaleAndAdd(m.p,m.p,a,u*d))}for(var s=0;o>s;s++)for(var h=t[s],g=s+1;o>g;g++){var f=t[g];e.sub(a,f.p,h.p);var p=e.len(a);0===p&&(e.set(a,Math.random()-.5,Math.random()-.5),p=1);var y=(h.rep+f.rep)/p/p;!h.fixed&&i(h.pp,h.pp,a,y),!f.fixed&&i(f.pp,f.pp,a,-y)}for(var x=[],s=0;o>s;s++){var m=t[s];m.fixed||(e.sub(x,m.p,m.pp),e.scaleAndAdd(m.p,m.p,x,d),e.copy(m.pp,m.p))}d=.992*d,r&&r(t,n,.01>d)}}}}),e("echarts/chart/graph/forceLayout",[Qr,"./forceHelper",yt,"./simpleLayoutHelper","./circularLayoutHelper",vr],function(t){var e=t("./forceHelper"),i=t(yt),n=t("./simpleLayoutHelper"),r=t("./circularLayoutHelper"),a=t(vr);return function(t,o){t[de]("graph",function(t){if("force"===t.get(c)){var o=t.preservedPoints||{},s=t.getGraph(),l=s.data,u=s.edgeData,h=t[tr]("force"),d=h.get("initLayout");t.preservedPoints?l.each(function(t){var e=l.getId(t);l[It](t,o[e]||[NaN,NaN])}):d&&"none"!==d?"circular"===d&&r(t):n(t);var f=l[Gt]("value"),p=h.get("repulsion"),v=h.get("edgeLength"),m=l[Et]("value",function(t,e){var n=l[zt](e),r=i[Er](t,f,[0,p])||p/2;return{w:r,rep:r,p:!n||isNaN(n[0])||isNaN(n[1])?null:n}}),g=u[Et]("value",function(t,e){var i=s.getEdgeByIndex(e);return{n1:m[i.node1[bi]],n2:m[i.node2[bi]],d:v,curveness:i[tr]().get("lineStyle.normal.curveness")||0}}),y=t[nn],x=y[Jn](),_=e(m,g,{rect:x,gravity:h.get("gravity")}),w=_.step;_.step=function(t){for(var e=0,i=m[jr];i>e;e++)m[e].fixed&&a.copy(m[e].p,s.getNodeByIndex(e)[Vt]());w(function(e,i,n){for(var r=0,a=e[jr];a>r;r++)e[r].fixed||s.getNodeByIndex(r)[Rt](e[r].p),o[l.getId(r)]=e[r].p;for(var r=0,a=i[jr];a>r;r++){var u=i[r],c=u.n1.p,h=u.n2.p,d=[c,h];u.curveness>0&&d.push([(c[0]+h[0])/2-(c[1]-h[1])*u.curveness,(c[1]+h[1])/2-(h[0]-c[0])*u.curveness]),s.getEdgeByIndex(r)[Rt](d)}t&&t(n)})},t.forceLayout=_,t.preservedPoints=o,_.step()}else t.forceLayout=null})}}),e("echarts/chart/graph/createView",[Qr,"../../coord/View",V,"zrender/core/bbox"],function(t){function e(t,e,i){var r=t[P]();return r.aspect=i,n[wn](r,{width:e[cn](),height:e[un]()})}var i=t("../../coord/View"),n=t(V),r=t("zrender/core/bbox");return function(t,n){t[de]("graph",function(t){var a=t.get(nn);if(!a||"view"===a){var o=new i,s=t[En](),l=s[Et](function(t){var e=s[In](t);return[+e.get("x"),+e.get("y")]}),c=[],h=[];r.fromPoints(l,c,h);var d=e(t,n,(h[0]-c[0])/(h[1]-c[1])||1);(isNaN(c[0])||isNaN(c[1]))&&(c=[d.x,d.y],h=[d.x+d.width,d.y+d[ur]]);var f=h[0]-c[0],p=h[1]-c[1],v=d.width,m=d[ur];o=t[nn]=new i,o.setBoundingRect(c[0],c[1],f,p),o.setViewRect(d.x,d.y,v,m);var g=t[tr](u);o.setPan(g.get("x")||0,g.get("y")||0),o.setZoom(g.get("zoom")||1)}})}}),e("echarts/chart/graph",[Qr,K,Kr,"./graph/GraphSeries","./graph/GraphView","./graph/roamAction","./graph/categoryFilter",$,"./graph/categoryVisual","./graph/simpleLayout","./graph/circularLayout","./graph/forceLayout","./graph/createView"],function(t){var e=t(K),i=t(Kr);t("./graph/GraphSeries"),t("./graph/GraphView"),t("./graph/roamAction"),e[Kt]($r,t("./graph/categoryFilter")),e[Xt]("chart",i.curry(t($),"graph",ft,null)),e[Xt]("chart",t("./graph/categoryVisual")),e[Yt](t("./graph/simpleLayout")),e[Yt](t("./graph/circularLayout")),e[Yt](t("./graph/forceLayout")),e.registerCoordinateSystem("graphView",{create:t("./graph/createView")})}),e("echarts/chart/gauge/GaugeSeries",[Qr,Lt,bt,Kr],function(t){var e=t(Lt),i=t(bt),n=t(Kr),r=i[Cr]({type:"series.gauge",getInitialData:function(t,i){var r=new e(["value"],this),a=t.data||[];return n[Or](a)||(a=[a]),r[Ft](a),r},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,textStyle:{color:"auto"}},pointer:{show:!0,length:"80%",width:8},itemStyle:{normal:{color:"auto"}},title:{show:!0,offsetCenter:[0,"-40%"],textStyle:{color:"#333",fontSize:15}},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:40,offsetCenter:[0,"40%"],textStyle:{color:"auto",fontSize:30}}}});return r}),e("echarts/chart/gauge/PointerPath",[Qr,li],function(t){return t(li)[Cr]({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(t,e){var i=Math.cos,n=Math.sin,r=e.r,a=e.width,o=e.angle,s=e.x-i(o)*a*(a>=r/3?1:2),l=e.y-n(o)*a*(a>=r/3?1:2);o=e.angle-Math.PI/2,t[di](s,l),t[hi](e.x+i(o)*a,e.y+n(o)*a),t[hi](e.x+i(e.angle)*r,e.y+n(e.angle)*r),t[hi](e.x-i(o)*a,e.y-n(o)*a),t[hi](s,l)}})}),e("echarts/chart/gauge/GaugeView",[Qr,"./PointerPath",xt,yt,at],function(t){function e(t,e){var i=t.get(Vr),n=e[cn](),r=e[un](),a=Math.min(n,r),o=s(i[0],e[cn]()),l=s(i[1],e[un]()),u=s(t.get(qn),a/2);return{cx:o,cy:l,r:u}}function i(t,e){return e&&(typeof e===Fr?t=e[Nr]("{value}",t):typeof e===Br&&(t=e(t))),t}var n=t("./PointerPath"),r=t(xt),o=t(yt),s=o[Rr],l=2*Math.PI,u=t(at)[Cr]({type:"gauge",render:function(t,i,n){this.group[Ai]();var r=t.get("axisLine.lineStyle.color"),a=e(t,n);this._renderMain(t,i,n,r,a)},_renderMain:function(t,e,i,n,a){for(var o=this.group,s=t[tr](w),u=s[tr](ce),c=t.get(ei),h=-t.get(ni)/180*Math.PI,d=-t.get(ii)/180*Math.PI,f=(d-h)%l,p=h,v=u.get("width"),m=0;m<n[jr];m++){var d=h+f*n[m][0],g=new r[Ke]({shape:{startAngle:p,endAngle:d,cx:a.cx,cy:a.cy,clockwise:c,r0:a.r-v,r:a.r},silent:!0});g[Ue]({fill:n[m][1]}),g[Ue](u[J](["color",Xn,Yn])),o.add(g),p=d}var y=function(t){if(0>=t)return n[0][1];for(var e=0;e<n[jr];e++)if(n[e][0]>=t&&(0===e?0:n[e-1][0])<t)return n[e][1];return n[e-1][1]};if(!c){var x=h;h=d,d=x}this._renderTicks(t,e,i,y,a,h,d,c),this._renderPointer(t,e,i,y,a,h,d,c),this._renderTitle(t,e,i,y,a),this._renderDetail(t,e,i,y,a)},_renderTicks:function(t,e,n,a,s,l,u,c){for(var h=this.group,d=s.cx,f=s.cy,p=s.r,v=t.get("min"),m=t.get("max"),g=t[tr]("splitLine"),y=t[tr](b),x=t[tr](O),_=t.get(F),w=y.get(F),M=g.get(jr),S=y.get(jr),A=l,C=(u-l)/_,T=C/w,k=g[tr](ce)[J](),L=y[tr](ce)[J](),D=x[tr](Qn),P=0;_>=P;P++){var I=Math.cos(A),z=Math.sin(A);if(g.get("show")){var V=new r.Line({shape:{x1:I*p+d,y1:z*p+f,x2:I*(p-M)+d,y2:z*(p-M)+f},style:k,silent:!0});"auto"===k[_r]&&V[Ue]({stroke:a(P/_)}),h.add(V)}if(x.get("show")){var R=i(o.round(P/_*(m-v)+v),x.get(Dn)),E=new r.Text({style:{text:R,x:I*(p-M-5)+d,y:z*(p-M-5)+f,fill:D[Ge](),textFont:D[Kn](),textBaseline:-.4>z?"top":z>.4?Ir:zr,textAlign:-.4>I?"left":I>.4?"right":Vr},silent:!0});"auto"===E.style.fill&&E[Ue]({fill:a(P/_)}),h.add(E)}if(y.get("show")&&P!==_){for(var N=0;w>=N;N++){var I=Math.cos(A),z=Math.sin(A),B=new r.Line({shape:{x1:I*p+d,y1:z*p+f,x2:I*(p-S)+d,y2:z*(p-S)+f},silent:!0,style:L});"auto"===L[_r]&&B[Ue]({stroke:a((P+N/w)/_)}),h.add(B),A+=T}A-=T}else A+=C}},_renderPointer:function(t,e,i,l,u,c,h,d){var f=o[Er],p=[+t.get("min"),+t.get("max")],v=[c,h];d||(v=v[a]());var m=t[En](),g=this._data,y=this.group;m.diff(g).add(function(e){var i=new n({shape:{angle:c}});r[Ne](i,{shape:{angle:f(m.get("value",e),p,v)}},t),y.add(i),m[Dt](e,i)})[Se](function(e,i){var n=g[wi](i);r[Ne](n,{shape:{angle:f(m.get("value",e),p,v)}},t),y.add(n),m[Dt](e,n)})[Pi](function(t){var e=g[wi](t);y[Pi](e)})[ct](),m[xi](function(t,e){var i=m[In](e),n=i[tr]("pointer");t.attr({shape:{x:u.cx,y:u.cy,width:n.get("width"),r:s(n.get(jr),u.r)},style:i[tr](C)[dt]()}),"auto"===t.style.fill&&t[Ue]("fill",l((m.get("value",e)-p[0])/(p[1]-p[0]))),r[We](t,i[tr](A)[dt]())}),this._data=m},_renderTitle:function(t,e,i,n,a){var o=t[tr]("title");if(o.get("show")){var l=o[tr](Qn),u=o.get("offsetCenter"),c=a.cx+s(u[0],a.r),h=a.cy+s(u[1],a.r),d=new r.Text({style:{x:c,y:h,text:t[En]()[zn](0),fill:l[Ge](),textFont:l[Kn](),textAlign:"center",textBaseline:"middle"}});this.group.add(d)}},_renderDetail:function(t,e,n,a,o){var l=t[tr]("detail"),u=t.get("min"),c=t.get("max");if(l.get("show")){var h=l[tr](Qn),d=l.get("offsetCenter"),f=o.cx+s(d[0],o.r),p=o.cy+s(d[1],o.r),v=s(l.get("width"),o.r),m=s(l.get(ur),o.r),g=t[En]().get("value",0),y=new r.Rect({shape:{x:f-v/2,y:p-m/2,width:v,height:m},style:{text:i(g,l.get(Dn)),fill:l.get(xe),textFill:h[Ge](),textFont:h[Kn]()}});"auto"===y.style.textFill&&y[Ue]("textFill",a((g-u)/(c-u))),y[Ue](l[dt](["color"])),this.group.add(y)}}});return u}),e("echarts/chart/gauge",[Qr,"./gauge/GaugeSeries","./gauge/GaugeView"],function(t){t("./gauge/GaugeSeries"),t("./gauge/GaugeView")}),e("echarts/chart/funnel/FunnelSeries",[Qr,Lt,Tt,kt,T],function(t){var e=t(Lt),i=t(Tt),n=t(kt);t(T)[qt]({type:"series.funnel",init:function(t){this[g]("init",arguments),this[m]=function(){return this._dataBeforeProcessed},this._defaultLabelLine(t)},getInitialData:function(t,i){var r=n(["value"],t.data),a=new e(r,this);return a[Ft](t.data),a},_defaultLabelLine:function(t){i[Fn](t.labelLine,["show"]);var e=t.labelLine[Gn],n=t.labelLine[Zn];e.show=e.show&&t.label[Gn].show,n.show=n.show&&t.label[Zn].show},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,left:80,top:60,right:80,bottom:60,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,funnelAlign:"center",label:{normal:{show:!0,position:"outer"},emphasis:{show:!0}},labelLine:{normal:{show:!0,length:20,lineStyle:{width:1,type:"solid"}},emphasis:{}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1},emphasis:{}}}})}),e("echarts/chart/funnel/FunnelView",[Qr,xt,Kr,at],function(t){function e(t,e){function i(){o[Vi]=o.hoverIgnore,s[Vi]=s.hoverIgnore}function r(){o[Vi]=o.normalIgnore,s[Vi]=s.normalIgnore}n.Group.call(this);var a=new n[$e],o=new n[Ye],s=new n.Text;this.add(a),this.add(o),this.add(s),this[gt](t,e,!0),this.on(Zn,i).on(Gn,r).on(He,i).on(Fe,r)}function i(t,e,i,n){var r=n[tr](Qn),a=n.get(Cn),o=a===nr||"inner"===a||a===Vr;return{fill:r[Ge]()||(o?"#fff":t[Pt](e,"color")),textFont:r[Kn](),text:t[Qt][ht](e,i)||t[zn](e)}}var n=t(xt),r=t(Kr),a=e[Jr],o=[ue,Gn,xr];a[gt]=function(t,e,i){var a=this[An](0),s=t[Qt],l=t[In](e),u=t[zt](e),c=t[In](e).get(o);c=null==c?1:c,i?(a[ai]({points:u[ti]}),a[Ue]({opacity:0}),n[Ne](a,{style:{opacity:c}},s)):n[Ee](a,{shape:{points:u[ti]}},s);var h=l[tr](ue),d=t[Pt](e,"color");a[Ue](r[ir]({fill:d},h[tr](Gn)[dt]())),a[qe]=h[tr](Zn)[dt](),this._updateLabel(t,e),n[We](this)},a._updateLabel=function(t,e){var r=this[An](1),a=this[An](2),o=t[Qt],s=t[In](e),l=t[zt](e),u=l.label,c=t[Pt](e,"color");n[Ne](r,{shape:{points:u.linePoints||u.linePoints}},o),n[Ne](a,{style:{x:u.x,y:u.y}},o),a.attr({style:{textAlign:u[gi],textBaseline:u[mi],textFont:u.font},rotation:u[$i],origin:[u.x,u.y],z2:10});var h=s[tr](S),d=s[tr](M),f=s[tr]("labelLine.normal"),p=s[tr]("labelLine.emphasis");a[Ue](i(t,e,Gn,h)),a[Vi]=a.normalIgnore=!h.get("show"),a.hoverIgnore=!d.get("show"),r[Vi]=r.normalIgnore=!f.get("show"),r.hoverIgnore=!p.get("show"),r[Ue]({stroke:c}),r[Ue](f[tr](ce)[J]()),a[qe]=i(t,e,Zn,d),r[qe]=p[tr](ce)[J]()},r[Ar](e,n.Group);var s=t(at)[Cr]({type:"funnel",render:function(t,i,n){var r=t[En](),a=this._data,o=this.group;r.diff(a).add(function(t){var i=new e(r,t);r[Dt](t,i),o.add(i)})[Se](function(t,e){var i=a[wi](e);i[gt](r,t),o.add(i),r[Dt](t,i)})[Pi](function(t){var e=a[wi](t);o[Pi](e)})[ct](),this._data=r},remove:function(){this.group[Ai](),this._data=null}});return s}),e("echarts/chart/funnel/funnelLayout",[Qr,V,yt],function(t){function e(t,e){return r[wn](t[P](),{width:e[cn](),height:e[un]()})}function i(t,e){for(var i=t[Et]("value",function(t){return t}),n=[],r="ascending"===e,a=0,o=t.count();o>a;a++)n[a]=a;return n.sort(function(t,e){return r?i[t]-i[e]:i[e]-i[t]}),n}function n(t){t.each(function(e){var i,n,r,a,o=t[In](e),s=o[tr](S),l=s.get(Cn),u=o[tr]("labelLine.normal"),c=t[zt](e),h=c[ti],d="inner"===l||l===nr||l===Vr;if(d)n=(h[0][0]+h[1][0]+h[2][0]+h[3][0])/4,r=(h[0][1]+h[1][1]+h[2][1]+h[3][1])/4,i=Vr,a=[[n,r],[n,r]];else{var f,p,v,m=u.get(jr);"left"===l?(f=(h[3][0]+h[0][0])/2,p=(h[3][1]+h[0][1])/2,v=f-m,n=v-5,i="right"):(f=(h[1][0]+h[2][0])/2,p=(h[1][1]+h[2][1])/2,v=f+m,n=v+5,i="left");var g=p;a=[[f,p],[v,g]],r=g}c.label={linePoints:a,x:n,y:r,textBaseline:"middle",textAlign:i,inside:d}})}var r=t(V),o=t(yt),s=o[Rr];return function(t,r){t[de]("funnel",function(t){var l=t[En](),u=t.get("sort"),c=e(t,r),h=i(l,u),d=[s(t.get("minSize"),c.width),s(t.get("maxSize"),c.width)],f=l[Gt]("value"),p=t.get("min"),v=t.get("max");null==p&&(p=Math.min(f[0],0)),null==v&&(v=f[1]);var m=t.get("funnelAlign"),g=t.get("gap"),y=(c[ur]-g*(l.count()-1))/l.count(),x=c.y,_=function(t,e){var i,n=l.get("value",t)||0,r=o[Er](n,[p,v],d,!0);switch(m){case"left":i=c.x;break;case Vr:i=c.x+(c.width-r)/2;break;case"right":i=c.x+c.width-r}return[[i,e],[i+r,e]]};"ascending"===u&&(y=-y,g=-g,x+=c[ur],h=h[a]());for(var w=0;w<h[jr];w++){var b=h[w],M=h[w+1],S=_(b,x),A=_(M,x+y);x+=y+g,l[It](b,{points:S[Gr](A.slice()[a]())})}n(l)})}}),e("echarts/chart/funnel",[Qr,Kr,K,"./funnel/FunnelSeries","./funnel/FunnelView","../visual/dataColor","./funnel/funnelLayout","../processor/dataFilter"],function(t){var e=t(Kr),i=t(K);t("./funnel/FunnelSeries"),t("./funnel/FunnelView"),i[Xt]("chart",e.curry(t("../visual/dataColor"),"funnel")),i[Yt](t("./funnel/funnelLayout")),i[Kt]($r,e.curry(t("../processor/dataFilter"),"funnel"))}),e("echarts/coord/parallel/ParallelAxis",[Qr,Kr,"../Axis"],function(t){var e=t(Kr),i=t("../Axis"),n=function(t,e,n,r,a){i.call(this,t,e,n),this.type=r||"value",this[Wn]=a};return n[Jr]={constructor:n,model:null},e[Ar](n,i),n}),e("echarts/coord/parallel/Parallel",[Qr,V,z,Kr,"./ParallelAxis",dr,vr],function(t){function e(t,e,i){this._axesMap={},this._axesLayout={},this[en]=t[en],this._rect,this._init(t,e,i)}var i=t(V),n=t(z),r=t(Kr),a=t("./ParallelAxis"),o=t(dr),s=t(vr),l=r.each,u=Math.PI;return e[Jr]={type:"parallel",constructor:e,_init:function(t,e,i){var r=t[en],o=t.parallelAxisIndex;l(r,function(t,i){var r=o[i],s=e[on]("parallelAxis",r),l=this._axesMap[t]=new a(t,n[G](s),[0,0],s.get("type"),r),u=l.type===At;l[rt]=u&&s.get(H),l[et]=s.get(et),s.axis=l,l.model=s},this),this._updateAxesFromSeries(t,e)},_updateAxesFromSeries:function(t,e){e[he](function(i){if(t.contains(i,e)){var n=i[En]();l(this[en],function(t){this._axesMap[t].scale[X](n[Gt](t))},this)}},this)},resize:function(t,e){this._rect=i[wn](t[P](),{width:e[cn](),height:e[un]()}),this._layoutAxes(t)},getRect:function(){return this._rect},_layoutAxes:function(t){var e=this._rect,i=t.get(c),r=this._axesMap,a=this[en],s=[e.width,e[ur]],h=i===Sn?0:1,d=s[h],f=s[1-h],p=[0,f];l(r,function(t){var e=t[et]?1:0;t[j](p[e],p[1-e]),n[W](t,t.model)}),l(a,function(t,n){var r=d*n/(a[jr]-1),s={horizontal:{x:r,y:f},vertical:{x:0,y:r}},l={horizontal:u/2,vertical:0},c=[s[i].x+e.x,s[i].y+e.y],h=l[i],p=o[lr]();o[Hi](p,p,h),o[sr](p,p,c),this._axesLayout[t]={position:c,rotation:h,transform:p,tickDirection:1,labelDirection:1}},this)},getAxis:function(t){return this._axesMap[t]},dataToPoint:function(t,e){return this.axisCoordToPoint(this._axesMap[e][N](t),e)},eachActiveState:function(t,e,i){for(var n=this[en],r=this._axesMap,a=!1,o=0,s=n[jr];s>o;o++)r[n[o]].model.getActiveState()!==Gn&&(a=!0);for(var l=0,u=t.count();u>l;l++){var c,h=t[Zt](n,l);if(a){c="active";for(var o=0,s=n[jr];s>o;o++){var d=n[o],f=r[d].model.getActiveState(h[o],o);if("inactive"===f){c="inactive";break}}}else c=Gn;e.call(i,c,l)}},axisCoordToPoint:function(t,e){var i=this._axesLayout[e],n=[t,0];return s[cr](n,n,i[Xi]),n},getAxisLayout:function(t){return r.clone(this._axesLayout[t])}},e}),e("echarts/coord/parallel/parallelCreator",[Qr,"./Parallel",Ct],function(t){function e(t,e){var n=[];return t[ie]("parallel",function(r,a){var o=new i(r,t,e);o.name="parallel_"+a,o[Me](r,e),r[nn]=o,o.model=r,n.push(o)}),t[he](function(t){if("parallel"===t.get(nn)){var e=t.get("parallelIndex");t[nn]=n[e]}}),n}var i=t("./Parallel");t(Ct)[sn]("parallel",{create:e})}),e("echarts/coord/parallel/AxisModel",[Qr,R,Kr,"../../model/mixin/makeStyleMapper","../axisModelCreator",yt,"../axisModelCommonMixin"],function(t){function e(t,e){return e.type||(e.data?At:"value")}var i=t(R),n=t(Kr),r=t("../../model/mixin/makeStyleMapper"),a=t("../axisModelCreator"),o=t(yt),s=i[Cr]({type:"baseParallelAxis",axis:null,activeIntervals:[],getAreaSelectStyle:function(){return r([["fill","color"],[wr,Xn],[_r,Yn],["width","width"],[xr,xr]]).call(this[tr]("areaSelectStyle"))},setActiveIntervals:function(t){var e=this.activeIntervals=n.clone(t);if(e)for(var i=e[jr]-1;i>=0;i--)o.asc(e[i])},getActiveState:function(t){var e=this.activeIntervals;if(!e[jr])return Gn;if(null==t)return"inactive";for(var i=0,n=e[jr];n>i;i++)if(e[i][0]<=t&&t<=e[i][1])return"active";return"inactive"}}),l={type:"value",dim:null,parallelIndex:null,areaSelectStyle:{width:20,borderWidth:1,borderColor:"rgba(160,197,232)",color:"rgba(160,197,232)",opacity:.3},z:10};return n.merge(s[Jr],t("../axisModelCommonMixin")),a("parallel",s,e,l),s}),e("echarts/coord/parallel/ParallelModel",[Qr,Kr,R,"./AxisModel"],function(t){var e=t(Kr),i=t(R);t("./AxisModel"),i[Cr]({type:"parallel",dependencies:["parallelAxis"],coordinateSystem:null,dimensions:null,parallelAxisIndex:null,defaultOption:{zlevel:0,z:0,left:80,top:60,right:80,bottom:60,layout:"horizontal",parallelAxisDefault:null},init:function(){i[Jr].init.apply(this,arguments),this[mn]({})},mergeOption:function(t){var i=this[Un];t&&e.merge(i,t,!0),this._initDimensions()},contains:function(t,e){var i=t.get("parallelIndex");return null!=i&&e[on]("parallel",i)===this},_initDimensions:function(){var t=this[en]=[],i=this.parallelAxisIndex=[],n=e[$r](this.dependentModels.parallelAxis,function(t){return t.get("parallelIndex")===this.componentIndex});e.each(n,function(e){t.push("dim"+e.get("dim")),i.push(e.componentIndex)})}})}),e("echarts/component/axis/parallelAxisAction",[Qr,T],function(t){var e=t(T),i={type:"axisAreaSelect",event:"axisAreaSelected",update:"updateVisual"};e[$t](i,function(t,e){e[ie]({mainType:"parallelAxis",query:t},function(e){e.axis.model.setActiveIntervals(t.intervals)})})}),e("echarts/component/helper/SelectController",[Qr,Ji,Kr,xt],function(t){function e(t,e,i){v.call(this),this.type=t,this.zr=e,this.opt=m.clone(i),this.group=new g.Group,this._containerRect=null,this._track=[],this._dragging,this._cover,this._disabled=!0,this._handlers={mousedown:x(a,this),mousemove:x(o,this),mouseup:x(s,this)},_(C,function(t){this.zr.on(t,this._handlers[t])},this)}function i(t){t[ki](function(t){t.z=S})}function n(t,e){var i=this.group[Fi](t,e);return!this._containerRect||this._containerRect[vi](i[0],i[1])}function r(t){var e=t.event;e.preventDefault&&e.preventDefault()}function a(t){if(!(this._disabled||t[Zi]&&t[Zi][Ri])){r(t);var e=t[Pe],i=t[De];n.call(this,e,i)&&(this._dragging=!0,this._track=[[e,i]])}}function o(t){this._dragging&&!this._disabled&&(r(t),l.call(this,t))}function s(t){this._dragging&&!this._disabled&&(r(t),l.call(this,t,!0),this._dragging=!1,this._track=[])}function l(t,e){var i=t[Pe],r=t[De];if(n.call(this,i,r)){this._track.push([i,r]);var a=u.call(this)?T[this.type].getRanges.call(this):[];c.call(this,a),this[Mi](y,m.clone(a)),e&&this[Mi]("selectEnd",m.clone(a))}}function u(){var t=this._track;if(!t[jr])return!1;var e=t[t[jr]-1],i=t[0],n=e[0]-i[0],r=e[1]-i[1],a=M(n*n+r*r,.5);return a>A}function c(t){var e=T[this.type];t&&t[jr]?(this._cover||(this._cover=e[lr].call(this),this.group.add(this._cover)),e[Se].call(this,t)):(this.group[Pi](this._cover),this._cover=null),i(this.group)}function h(){var t=this.group,e=t[Ui];e&&e[Pi](t)}function d(){var t=this.opt;return new g.Rect({style:{stroke:t[_r],fill:t.fill,lineWidth:t[wr],opacity:t[xr]}})}function f(){return m.map(this._track,function(t){return this.group[Fi](t[0],t[1])},this)}function p(){var t=f.call(this),e=t[jr]-1;return 0>e&&(e=0),[t[0],t[e]]}var v=t(Ji),m=t(Kr),g=t(xt),x=m.bind,_=m.each,w=Math.min,b=Math.max,M=Math.pow,S=1e4,A=2,C=[Ve,ze,Ie];e[Jr]={constructor:e,enable:function(t,e){this._disabled=!1,h.call(this),this._containerRect=e!==!1?e||t[Jn]():null,t.add(this.group)},update:function(t){c.call(this,t&&m.clone(t))},disable:function(){this._disabled=!0,h.call(this)},dispose:function(){this.disable(),_(C,function(t){this.zr.off(t,this._handlers[t])},this)}},m.mixin(e,v);var T={line:{create:d,getRanges:function(){var t=p.call(this),e=w(t[0][0],t[1][0]),i=b(t[0][0],t[1][0]);return[[e,i]]},update:function(t){var e=t[0],i=this.opt.width;this._cover[ai]({x:e[0],y:-i/2,width:e[1]-e[0],height:i})}},rect:{create:d,getRanges:function(){var t=p.call(this),e=[w(t[1][0],t[0][0]),w(t[1][1],t[0][1])],i=[b(t[1][0],t[0][0]),b(t[1][1],t[0][1])];return[[[e[0],i[0]],[e[1],i[1]]]]},update:function(t){var e=t[0];this._cover[ai]({x:e[0][0],y:e[1][0],width:e[0][1]-e[0][0],height:e[1][1]-e[1][0]})}}};return e}),e("echarts/component/axis/ParallelAxisView",[Qr,Kr,"./AxisBuilder","../helper/SelectController",T],function(t){function e(t,e,i){return i&&"axisAreaSelect"===i.type&&e[dn]({mainType:"parallelAxis",query:i})[0]===t}var i=t(Kr),n=t("./AxisBuilder"),r=t("../helper/SelectController"),a=[w,O,b,"axisName"],o=t(T)[Wt]({type:"parallelAxis",_selectController:null,render:function(t,r,o,s){if(!e(t,r,s)&&(this.axisModel=t,this.api=o,this.group[Ai](),t.get("show"))){var l=r[on]("parallel",t.get("parallelIndex"))[nn],u=t.getAreaSelectStyle(),c=u.width,h=l.getAxisLayout(t.axis.dim),d=i[Cr]({strokeContainThreshold:c,silent:!(c>0)},h),f=new n(t,d);i.each(a,f.add,f);var p=f.getGroup();this.group.add(p),this._buildSelectController(p,u,t,o)}},_buildSelectController:function(t,e,n,a){var o=n.axis,s=this._selectController;s||(s=this._selectController=new r("line",a.getZr(),e),s.on(y,i.bind(this._onSelected,this))),s[l](t);var u=i.map(n.activeIntervals,function(t){return[o[N](t[0],!0),o[N](t[1],!0)]});s[Se](u)},_onSelected:function(t){var e=this.axisModel,n=e.axis,r=i.map(t,function(t){return[n[E](t[0],!0),n[E](t[1],!0)]});this.api[ln]({type:"axisAreaSelect",parallelAxisId:e.id,intervals:r})},remove:function(){this._selectController&&this._selectController.disable()},dispose:function(){this._selectController&&(this._selectController[me](),this._selectController=null)}});return o}),e("echarts/component/parallelAxis",[Qr,"../coord/parallel/parallelCreator","./axis/parallelAxisAction","./axis/ParallelAxisView"],function(t){t("../coord/parallel/parallelCreator"),t("./axis/parallelAxisAction"),t("./axis/ParallelAxisView")}),e("echarts/coord/parallel/parallelPreprocessor",[Qr,Kr,Tt],function(t){function e(t){if(!t.parallel){var e=!1;n.each(t[pn],function(t){t&&"parallel"===t.type&&(e=!0)}),e&&(t.parallel=[{}])}}function i(t){var e=r[Hn](t.parallelAxis);n.each(e,function(e){if(n[Ln](e)){var i=e.parallelIndex||0,a=r[Hn](t.parallel)[i];a&&a.parallelAxisDefault&&n.merge(e,a.parallelAxisDefault,!1)}})}var n=t(Kr),r=t(Tt);return function(t){e(t),i(t)}}),e("echarts/component/parallel",[Qr,"../coord/parallel/parallelCreator","../coord/parallel/ParallelModel","./parallelAxis",K,"../coord/parallel/parallelPreprocessor"],function(t){t("../coord/parallel/parallelCreator"),t("../coord/parallel/ParallelModel"),t("./parallelAxis");var e=t(K);e[Wt]({type:"parallel"}),e[Jt](t("../coord/parallel/parallelPreprocessor"))}),e("echarts/chart/parallel/ParallelSeries",[Qr,Lt,Kr,bt],function(t){function e(t,e,i){var r=t.get("data"),a=+e[Nr]("dim","");r&&r[jr]&&n.each(i,function(t){if(t){var e=n[Hr](r,t[a]);t[a]=e>=0?e:NaN}})}var i=t(Lt),n=t(Kr),r=t(bt);return r[Cr]({type:"series.parallel",dependencies:["parallel"],getInitialData:function(t,r){var a=r[on]("parallel",this.get("parallelIndex")),o=a[en],s=a.parallelAxisIndex,l=t.data,u=n.map(o,function(t,i){var n=r[on]("parallelAxis",s[i]);return n.get("type")===At?(e(n,t,l),{name:t,type:"ordinal"}):t}),c=new i(u,this);return c[Ft](l),c},defaultOption:{zlevel:0,z:2,coordinateSystem:"parallel",parallelIndex:0,label:{normal:{show:!1},emphasis:{show:!1}},inactiveOpacity:.05,activeOpacity:1,lineStyle:{normal:{width:2,opacity:.45,type:"solid"}},animationEasing:"linear"}})}),e("echarts/chart/parallel/ParallelView",[Qr,xt,Kr,at],function(t){function e(t,e,i){var n=t.model,r=t[I](),o=new a.Rect({shape:{x:r.x,y:r.y,width:r.width,height:r[ur]}}),s=n.get(c)===Sn?"width":ur;return o[ai](s,0),a[Ee](o,{shape:{width:r.width,height:r[ur]}},e,i),o}function i(t,e,i,n){for(var a=0,o=e[jr]-1;o>a;a++){var s=e[a],l=e[a+1],u=t[a],c=t[a+1];n(r(u,i[it](s).type)||r(c,i[it](l).type)?null:[i[st](u,s),i[st](c,l)],a)}}function n(t){return new a[Ye]({shape:{points:t},silent:!0})}function r(t,e){return e===At?null==t:null==t||isNaN(t)}var a=t(xt),o=t(Kr),s=t(at)[Cr]({type:"parallel",init:function(){this._dataGroup=new a.Group,this.group.add(this._dataGroup),this._data},render:function(t,r,s,l){function u(t){var e=f[Zt](m,t),r=new a.Group;d.add(r),i(e,m,v,function(t,e){t&&r.add(n(t))}),f[Dt](t,r)}function c(e,r){var o=f[Zt](m,e),s=p[wi](r),l=[],u=0;i(o,m,v,function(e,i){var r=s[An](u++);e&&!r?l.push(n(e)):e&&a[Ne](r,{shape:{points:e}},t)});for(var c=s.childCount()-1;c>=u;c--)s[Pi](s[An](c));for(var c=0,h=l[jr];h>c;c++)s.add(l[c]);f[Dt](e,s)}function h(t){var e=p[wi](t);d[Pi](e)}var d=this._dataGroup,f=t[En](),p=this._data,v=t[nn],m=v[en];f.diff(p).add(u)[Se](c)[Pi](h)[ct](),f[xi](function(t,e){var i=f[In](e),n=i[tr](Q);t[Tn](function(t){t[Ue](o[Cr](n[J](),{stroke:f[Pt](e,"color"),opacity:f[Pt](e,xr)}))})}),this._data||d.setClipPath(e(v,t,function(){d.removeClipPath()})),this._data=f},remove:function(){this._dataGroup&&this._dataGroup[Ai](),this._data=null}});return s}),e("echarts/chart/parallel/parallelVisual",[Qr],function(t){return function(t,e){t[de]("parallel",function(e){var i=e[tr](C),n=t.get("color"),r=i.get("color")||n[e[Nn]%n[jr]],a=e.get("inactiveOpacity"),o=e.get("activeOpacity"),s=e[tr](Q)[J](),l=e[nn],u=e[En](),c={normal:s[xr],active:o,inactive:a};l.eachActiveState(u,function(t,e){u[fe](e,xr,c[t])}),u[ve]("color",r)})}}),e("echarts/chart/parallel",[Qr,K,"../component/parallel","./parallel/ParallelSeries","./parallel/ParallelView","./parallel/parallelVisual"],function(t){var e=t(K);t("../component/parallel"),t("./parallel/ParallelSeries"),t("./parallel/ParallelView"),e[Xt]("chart",t("./parallel/parallelVisual"))}),e("echarts/chart/sankey/SankeySeries",[Qr,bt,"../helper/createGraphFromNodeEdge"],function(t){
var e=t(bt),i=t("../helper/createGraphFromNodeEdge");return e[Cr]({type:"series.sankey",layoutInfo:null,getInitialData:function(t,e){var n=t.edges||t.links,r=t.data||t.nodes;if(r&&n){var a=i(r,n,this,!0);return a.data}},getGraph:function(){return this[En]().graph},getEdgeData:function(){return this.getGraph().edgeData},defaultOption:{zlevel:0,z:2,coordinateSystem:"view",layout:null,left:"5%",top:"5%",right:"20%",bottom:"5%",nodeWidth:20,nodeGap:8,layoutIterations:32,label:{normal:{show:!0,position:"right",textStyle:{color:"#000",fontSize:12}},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:1,borderColor:"#aaa"}},lineStyle:{normal:{color:"#314656",opacity:.2,curveness:.5},emphasis:{opacity:.6}},color:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],animationEasing:"linear",animationDuration:1e3}})}),e("echarts/chart/sankey/SankeyView",[Qr,xt,Tt,Kr,T],function(t){function e(t,e,n){var r=new i.Rect({shape:{x:t.x-10,y:t.y-10,width:0,height:t[ur]+20}});return i[Ee](r,{shape:{width:t.width+20,height:t[ur]+20}},e,n),r}var i=t(xt),n=t(Tt),r=t(Kr),a=i[Xe]({shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,cpx2:0,cpy2:0,extent:0},buildPath:function(t,e){var i=e.extent/2;t[di](e.x1,e.y1-i),t[ci](e.cpx1,e.cpy1-i,e.cpx2,e.cpy2-i,e.x2,e.y2-i),t[hi](e.x2,e.y2+i),t[ci](e.cpx2,e.cpy2+i,e.cpx1,e.cpy1+i,e.x1,e.y1+i),t[ui]()}});return t(T)[jt]({type:"sankey",_model:null,render:function(t,s,l){var u=t.getGraph(),c=this.group,h=t.layoutInfo;this[ne]=t,c[Ai](),c[Cn]=[h.x,h.y];var f=u.edgeData,p=t[Un],v=n[Bn](t,f,p.edges||p.links);v[d]=function(t){var e=this[Pn](t),i=e.data,n=i.source+" -- "+i[Zi];return e.value&&(n+=":"+e.value),n},u[o](function(e){var n=e[Vt](),a=e[tr](),o=a[tr](S),s=o[tr](Qn),l=a[tr](M),u=l[tr](Qn),h=new i.Rect({shape:{x:n.x,y:n.y,width:e[Vt]().dx,height:e[Vt]().dy},style:{text:o.get("show")?t[ht](e[bi],Gn)||e.id:"",textFont:s[Kn](),textFill:s[Ge](),textPosition:o.get(Cn)}});h[Ue](r[ir]({fill:e[Ot]("color")},a[tr](C)[dt]())),i[We](h,r[Cr](e[tr](A),{text:l.get("show")?t[ht](e[bi],Zn)||e.id:"",textFont:u[Kn](),textFill:u[Ge](),textPosition:l.get(Cn)})),c.add(h)}),u.eachEdge(function(t){var e=new a;e[bi]=t[bi],e[Qt]=v;var n=t[tr](Q),r=n.get("curveness"),o=t.node1[Vt](),s=t.node2[Vt](),l=t[Vt]();e.shape.extent=Math.max(1,l.dy);var u=o.x+o.dx,h=o.y+l.sy+l.dy/2,d=s.x,f=s.y+l.ty+l.dy/2,p=u*(1-r)+d*r,m=h,g=u*r+d*(1-r),y=f;e[ai]({x1:u,y1:h,x2:d,y2:f,cpx1:p,cpy1:m,cpx2:g,cpy2:y}),e[Ue](n[dt]()),i[We](e,t[tr]("lineStyle.emphasis")[dt]()),c.add(e)}),this._data||c.setClipPath(e(c[Jn](),t,function(){c.removeClipPath()})),this._data=t[En]()}})}),e("echarts/util/array/nest",[Qr,Kr],function(t){function e(){function t(e,r){if(r>=n[jr])return e;for(var a=-1,o=e[jr],s=n[r++],l={},u={};++a<o;){var c=s(e[a]),h=u[c];h?h.push(e[a]):u[c]=[e[a]]}return i.each(u,function(e,i){l[i]=t(e,r)}),l}function e(t,a){if(a>=n[jr])return t;var o=[],s=r[a++];return i.each(t,function(t,i){o.push({key:i,values:e(t,a)})}),s?o.sort(function(t,e){return s(t.key,e.key)}):o}var n=[],r=[];return{key:function(t){return n.push(t),this},sortKeys:function(t){return r[n[jr]-1]=t,this},entries:function(i){return e(t(i,0),0)}}}var i=t(Kr);return e}),e("echarts/chart/sankey/sankeyLayout",[Qr,V,"../../util/array/nest",Kr],function(t){function e(t,e){return M[wn](t[P](),{width:e[cn](),height:e[un]()})}function i(t,e,i,n,a,o,s){r(t,i,a),l(t,e,o,n,s),v(t)}function n(t){A.each(t,function(t){var e=y(t.outEdges,b),i=y(t.inEdges,b),n=Math.max(e,i);t[Rt]({value:n},!0)})}function r(t,e,i){for(var n=t,r=null,a=0,l=0;n[jr];)r=[],A.each(n,function(t){t[Rt]({x:a},!0),t[Rt]({dx:e},!0),A.each(t.outEdges,function(t){r.push(t.node2)})}),n=r,++a;o(t,a),l=(i-e)/(a-1),s(t,l)}function o(t,e){A.each(t,function(t){t.outEdges[jr]||t[Rt]({x:e-1},!0)})}function s(t,e){A.each(t,function(t){var i=t[Vt]().x*e;t[Rt]({x:i},!0)})}function l(t,e,i,n,r){var a=S().key(function(t){return t[Vt]().x}).sortKeys(w).entries(t).map(function(t){return t.values});u(t,a,e,i,n),c(a,n,i);for(var o=1;r>0;r--)o*=.99,h(a,o),c(a,n,i),f(a,o),c(a,n,i)}function u(t,e,i,n,r){var a=[];A.each(e,function(t){var e=t[jr],i=0;A.each(t,function(t){i+=t[Vt]().value});var o=(n-(e-1)*r)/i;a.push(o)}),a.sort(function(t,e){return t-e});var o=a[0];A.each(e,function(t){A.each(t,function(t,e){t[Rt]({y:e},!0);var i=t[Vt]().value*o;t[Rt]({dy:i},!0)})}),A.each(i,function(t){var e=+t.getValue()*o;t[Rt]({dy:e},!0)})}function c(t,e,i){A.each(t,function(t){var n,r,a,o=0,s=t[jr];for(t.sort(_),a=0;s>a;a++){if(n=t[a],r=o-n[Vt]().y,r>0){var l=n[Vt]().y+r;n[Rt]({y:l},!0)}o=n[Vt]().y+n[Vt]().dy+e}if(r=o-e-i,r>0){var l=n[Vt]().y-r;for(n[Rt]({y:l},!0),o=n[Vt]().y,a=s-2;a>=0;--a)n=t[a],r=n[Vt]().y+n[Vt]().dy+e-o,r>0&&(l=n[Vt]().y-r,n[Rt]({y:l},!0)),o=n[Vt]().y}})}function h(t,e){A.each(t.slice()[a](),function(t){A.each(t,function(t){if(t.outEdges[jr]){var i=y(t.outEdges,d)/y(t.outEdges,b),n=t[Vt]().y+(i-x(t))*e;t[Rt]({y:n},!0)}})})}function d(t){return x(t.node2)*t.getValue()}function f(t,e){A.each(t,function(t){A.each(t,function(t){if(t.inEdges[jr]){var i=y(t.inEdges,p)/y(t.inEdges,b),n=t[Vt]().y+(i-x(t))*e;t[Rt]({y:n},!0)}})})}function p(t){return x(t.node1)*t.getValue()}function v(t){A.each(t,function(t){t.outEdges.sort(m),t.inEdges.sort(g)}),A.each(t,function(t){var e=0,i=0;A.each(t.outEdges,function(t){t[Rt]({sy:e},!0),e+=t[Vt]().dy}),A.each(t.inEdges,function(t){t[Rt]({ty:i},!0),i+=t[Vt]().dy})})}function m(t,e){return t.node2[Vt]().y-e.node2[Vt]().y}function g(t,e){return t.node1[Vt]().y-e.node1[Vt]().y}function y(t,e){var i,n=0,r=t[jr],a=-1;if(1===arguments[jr])for(;++a<r;)i=+t[a],isNaN(i)||(n+=i);else for(;++a<r;)i=+e.call(t,t[a],a),isNaN(i)||(n+=i);return n}function x(t){return t[Vt]().y+t[Vt]().dy/2}function _(t,e){return t[Vt]().y-e[Vt]().y}function w(t,e){return e>t?-1:t>e?1:t==e?0:NaN}function b(t){return t.getValue()}var M=t(V),S=t("../../util/array/nest"),A=t(Kr);return function(t,r){t[de]("sankey",function(t){var a=t.get("nodeWidth"),o=t.get("nodeGap"),s=e(t,r);t.layoutInfo=s;var l=s.width,u=s[ur],c=t.getGraph(),h=c.nodes,d=c.edges;n(h);var f=h[$r](function(t){return 0===t[Vt]().value}),p=0!==f[jr]?0:t.get("layoutIterations");i(h,d,a,o,l,u,p)})}}),e("echarts/chart/sankey/sankeyVisual",[Qr,n],function(t){var e=t(n);return function(t,i){t[de]("sankey",function(t){var i=t.getGraph(),n=i.nodes;n.sort(function(t,e){return t[Vt]().value-e[Vt]().value});var r=n[0][Vt]().value,a=n[n[jr]-1][Vt]().value;n.forEach(function(i){var n=new e({type:"color",mappingMethod:"linear",dataExtent:[r,a],visual:t.get("color")}),o=n.mapValueToVisual(i[Vt]().value);i[ve]("color",o)})})}}),e("echarts/chart/sankey",[Qr,K,"./sankey/SankeySeries","./sankey/SankeyView","./sankey/sankeyLayout","./sankey/sankeyVisual"],function(t){var e=t(K);t("./sankey/SankeySeries"),t("./sankey/SankeyView"),e[Yt](t("./sankey/sankeyLayout")),e[Xt]("chart",t("./sankey/sankeyVisual"))}),e("echarts/chart/helper/WhiskerBoxDraw",[Qr,Kr,xt,li],function(t){function e(t,e,i,n){o.Group.call(this),this.bodyIndex,this.whiskerIndex,this.styleUpdater=i,this._createContent(t,e,n),this[gt](t,e,n),this._seriesModel}function i(t,e,i){return a.map(t,function(t){return t=t.slice(),t[e]=i.initBaseline,t})}function n(t){var e={};return a.each(t,function(t,i){e["ends"+i]=t}),e}function r(t){this.group=new o.Group,this.styleUpdater=t}var a=t(Kr),o=t(xt),s=t(li),l=s[Cr]({type:"whiskerInBox",shape:{},buildPath:function(t,e){for(var i in e)if(0===i[Hr]("ends")){var n=e[i];t[di](n[0][0],n[0][1]),t[hi](n[1][0],n[1][1])}}}),u=e[Jr];u._createContent=function(t,e,r){var s=t[zt](e),u=s.chartLayout===Sn?1:0,c=0;this.add(new o[$e]({shape:{points:r?i(s.bodyEnds,u,s):s.bodyEnds},style:{strokeNoScale:!0},z2:100})),this.bodyIndex=c++;var h=a.map(s.whiskerEnds,function(t){return r?i(t,u,s):t});this.add(new l({shape:n(h),style:{strokeNoScale:!0},z2:100})),this.whiskerIndex=c++},u[gt]=function(t,e,i){var r=this._seriesModel=t[Qt],a=t[zt](e),s=o[i?Ee:Ne];s(this[An](this.bodyIndex),{shape:{points:a.bodyEnds}},r),s(this[An](this.whiskerIndex),{shape:n(a.whiskerEnds)},r),this.styleUpdater.call(null,this,t,e)},a[Ar](e,o.Group);var c=r[Jr];return c[gt]=function(t){var i=this.group,n=this._data,r=this.styleUpdater;t.diff(n).add(function(n){if(t.hasValue(n)){var a=new e(t,n,r,!0);t[Dt](n,a),i.add(a)}})[Se](function(a,o){var s=n[wi](o);return t.hasValue(a)?(s?s[gt](t,a):s=new e(t,a,r),i.add(s),void t[Dt](a,s)):void i[Pi](s)})[Pi](function(t){var e=n[wi](t);e&&i[Pi](e)})[ct](),this._data=t},c[Pi]=function(){var t=this.group,e=this._data;this._data=null,e&&e[xi](function(e){e&&t[Pi](e)})},r}),e("echarts/chart/helper/whiskerBoxCommon",[Qr,Lt,kt,"../helper/WhiskerBoxDraw",Kr],function(t){function e(t){return null==t.value?t:t.value}var i=t(Lt),n=t(kt),r=t("../helper/WhiskerBoxDraw"),a=t(Kr),o={_baseAxisDim:null,getInitialData:function(t,r){var a,o,s=r[on]("xAxis",this.get("xAxisIndex")),l=r[on]("yAxis",this.get("yAxisIndex")),u=s.get("type"),h=l.get("type");u===At?(t[c]=Sn,a=s[St](),o=!0):h===At?(t[c]=Mn,a=l[St](),o=!0):t[c]=t[c]||Sn,this._baseAxisDim=t[c]===Sn?"x":"y";var d=t.data,f=this[en]=["base"][Gr](this.valueDimensions);n(f,d);var p=new i(f,this);return p[Ft](d,a?a.slice():null,function(t,i,n,r){var a=e(t);return o?"base"===i?n:a[r-1]:a[r]}),p},getDimensionsOnAxis:function(t){var e=this.valueDimensions.slice(),i=["base"],n={horizontal:{x:i,y:e},vertical:{x:e,y:i}};return n[this.get(c)][t]},getCoordDimensionInfo:function(t){var e,i=this[En](),n=[];return a.each(["x","y"],function(r,o){var s=this[L](r);null!=t&&a[Hr](s,t)>=0&&(e=i.getDimensionInfo(t),e.name=r),n[o]=i.getDimensionInfo(s[0]),n[o].name=r},this),null!=t?e:n},getBaseAxis:function(){var t=this._baseAxisDim;return this[er][on](t+"Axis",this.get(t+"AxisIndex")).axis}},s={init:function(){var t=this._whiskerBoxDraw=new r(this.getStyleUpdater());this.group.add(t.group)},render:function(t,e,i){this._whiskerBoxDraw[gt](t[En]())},remove:function(t){this._whiskerBoxDraw[Pi]()}};return{seriesModelMixin:o,viewMixin:s}}),e("echarts/chart/boxplot/BoxplotSeries",[Qr,Kr,bt,"../helper/whiskerBoxCommon"],function(t){var e=t(Kr),i=t(bt),n=t("../helper/whiskerBoxCommon"),r=i[Cr]({type:"series.boxplot",dependencies:["xAxis","yAxis","grid"],valueDimensions:["min","Q1","median","Q3","max"],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,layout:null,boxWidth:[7,50],itemStyle:{normal:{color:"#fff",borderWidth:1},emphasis:{borderWidth:2,shadowBlur:5,shadowOffsetX:2,shadowOffsetY:2,shadowColor:"rgba(0,0,0,0.4)"}},animationEasing:"elasticOut",animationDuration:800}});return e.mixin(r,n.seriesModelMixin,!0),r}),e("echarts/chart/boxplot/BoxplotView",[Qr,Kr,at,xt,"../helper/whiskerBoxCommon"],function(t){function e(t,e,i){var n=e[In](i),a=n[tr](s),o=e[Pt](i,"color"),u=a[dt]([Yn]),c=t[An](t.whiskerIndex);c.style.set(u),c.style[_r]=o,c.dirty();var h=t[An](t.bodyIndex);h.style.set(u),h.style[_r]=o,h.dirty();var d=n[tr](l)[dt]();r[We](t,d)}var i=t(Kr),n=t(at),r=t(xt),a=t("../helper/whiskerBoxCommon"),o=n[Cr]({type:"boxplot",getStyleUpdater:function(){return e}});i.mixin(o,a.viewMixin,!0);var s=[ue,Gn],l=[ue,Zn];return o}),e("echarts/chart/boxplot/boxplotVisual",[Qr],function(t){var e=[ue,Gn,Yn];return function(t,i){var n=t.get("color");t.eachRawSeriesByType("boxplot",function(i){var r=n[i[Nn]%n[jr]],a=i[En]();a[ve]({legendSymbol:"roundRect",color:i.get(e)||r}),t[pe](i)||a.each(function(t){var i=a[In](t);a[fe](t,{color:i.get(e,!0)})})})}}),e("echarts/chart/boxplot/boxplotLayout",[Qr,Kr,yt],function(t){function e(t){var e=[],i=[];return t[de]("boxplot",function(t){var n=t[tn](),a=r[Hr](i,n);0>a&&(a=i[jr],i[a]=n,e[a]={axis:n,seriesModels:[]}),e[a].seriesModels.push(t)}),e}function i(t){var e,i,n=t.axis,a=t.seriesModels,l=a[jr],u=t.boxWidthList=[],c=t.boxOffsetList=[],h=[];if(n.type===At)i=n[nt]();else{var d=0;s(a,function(t){d=Math.max(d,t[En]().count())}),e=n[lt](),Math.abs(e[1]-e[0])/d}s(a,function(t){var e=t.get("boxWidth");r[Or](e)||(e=[e,e]),h.push([o(e[0],i)||0,o(e[1],i)||0])});var f=.8*i-2,p=f/l*.3,v=(f-p*(l-1))/l,m=v/2-f/2;s(a,function(t,e){c.push(m),m+=p+v,u.push(Math.min(Math.max(v,h[e][0]),h[e][1]))})}function n(t,e,i){var n=t[nn],r=t[En](),a=t[en],o=t.get(c),s=i/2;r.each(a,function(){function t(t){var i=[];i[f]=h,i[p]=t;var r;return isNaN(h)||isNaN(t)?r=[NaN,NaN]:(r=n[st](i),r[f]+=e),r}function i(t,e){var i=t.slice(),n=t.slice();i[f]+=s,n[f]-=s,e?x.push(i,n):x.push(n,i)}function l(t){var e=[t.slice(),t.slice()];e[0][f]-=s,e[1][f]+=s,y.push(e)}var u=arguments,c=a[jr],h=u[0],d=u[c],f=o===Sn?0:1,p=1-f,v=t(u[3]),m=t(u[1]),g=t(u[5]),y=[[m,t(u[2])],[g,t(u[4])]];l(m),l(g),l(v);var x=[];i(y[0][1],0),i(y[1][1],1),r[It](d,{chartLayout:o,initBaseline:v[p],median:v,bodyEnds:x,whiskerEnds:y})})}var r=t(Kr),a=t(yt),o=a[Rr],s=r.each;return function(t,r){var a=e(t);s(a,function(t){var e=t.seriesModels;e[jr]&&(i(t),s(e,function(e,i){n(e,t.boxOffsetList[i],t.boxWidthList[i])}))})}}),e("echarts/chart/boxplot",[Qr,K,"./boxplot/BoxplotSeries","./boxplot/BoxplotView","./boxplot/boxplotVisual","./boxplot/boxplotLayout"],function(t){var e=t(K);t("./boxplot/BoxplotSeries"),t("./boxplot/BoxplotView"),e[Xt]("chart",t("./boxplot/boxplotVisual")),e[Yt](t("./boxplot/boxplotLayout"))}),e("echarts/chart/candlestick/CandlestickSeries",[Qr,Kr,bt,"../helper/whiskerBoxCommon",v],function(t){var e=t(Kr),i=t(bt),n=t("../helper/whiskerBoxCommon"),r=t(v),a=r[an],o=r[rn],s=i[Cr]({type:"series.candlestick",dependencies:["xAxis","yAxis","grid"],valueDimensions:["open","close","lowest","highest"],dimensions:null,defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,layout:null,itemStyle:{normal:{color:"#c23531",color0:"#314656",borderWidth:1,borderColor:"#c23531",borderColor0:"#314656"},emphasis:{borderWidth:2}},animationUpdate:!1,animationEasing:"linear",animationDuration:300},getShadowDim:function(){return"open"},formatTooltip:function(t,i){var n=e.map(this.valueDimensions,function(e){return e+": "+o(this._data.get(e,t))},this);return a(this.name)+Qi+n.join(Qi)}});return e.mixin(s,n.seriesModelMixin,!0),s}),e("echarts/chart/candlestick/CandlestickView",[Qr,Kr,at,xt,"../helper/whiskerBoxCommon"],function(t){function e(t,e,i){var n=e[In](i),a=n[tr](s),o=e[Pt](i,"color"),u=e[Pt](i,Yn),c=a[dt](["color","color0",Yn,"borderColor0"]),h=t[An](t.whiskerIndex);h.style.set(c),h.style[_r]=u,h.dirty();var d=t[An](t.bodyIndex);d.style.set(c),d.style.fill=o,d.style[_r]=u,d.dirty();var f=n[tr](l)[dt]();r[We](t,f)}var i=t(Kr),n=t(at),r=t(xt),a=t("../helper/whiskerBoxCommon"),o=n[Cr]({type:"candlestick",getStyleUpdater:function(){return e}});i.mixin(o,a.viewMixin,!0);var s=[ue,Gn],l=[ue,Zn];return o}),e("echarts/chart/candlestick/preprocessor",[Qr,Kr],function(t){var e=t(Kr);return function(t){t&&e[Or](t[pn])&&e.each(t[pn],function(t){e[Ln](t)&&"k"===t.type&&(t.type="candlestick")})}}),e("echarts/chart/candlestick/candlestickVisual",[Qr],function(t){var e=[ue,Gn,Yn],i=[ue,Gn,"borderColor0"],n=[ue,Gn,"color"],r=[ue,Gn,"color0"];return function(t,a){t.eachRawSeriesByType("candlestick",function(a){var o=a[En]();o[ve]({legendSymbol:"roundRect"}),t[pe](a)||o.each(function(t){var a=o[In](t),s=o[zt](t).sign;o[fe](t,{color:a.get(s>0?n:r),borderColor:a.get(s>0?e:i)})})})}}),e("echarts/chart/candlestick/candlestickLayout",[Qr],function(t){function e(t,e){var a,o=t[tn](),s=o.type===At?o[nt]():(a=o[lt](),Math.abs(a[1]-a[0])/e.count());return s/2-2>n?s/2-2:s-n>r?n:Math.max(s-r,i)}var i=2,n=5,r=4;return function(t,i){t[de]("candlestick",function(t){var i=t[nn],n=t[En](),r=t[en],a=t.get(c),o=e(t,n);n.each(r,function(){function t(t){var e=[];return e[h]=u,e[d]=t,isNaN(u)||isNaN(t)?[NaN,NaN]:i[st](e)}function e(t,e){var i=t.slice(),n=t.slice();i[h]+=o/2,n[h]-=o/2,e?S.push(i,n):S.push(n,i)}var s=arguments,l=r[jr],u=s[0],c=s[l],h=a===Sn?0:1,d=1-h,f=s[1],p=s[2],v=s[3],m=s[4],g=Math.min(f,p),y=Math.max(f,p),x=t(g),_=t(y),w=t(v),b=t(m),M=[[b,_],[w,x]],S=[];e(_,0),e(x,1),n[It](c,{chartLayout:a,sign:f>p?-1:p>f?1:0,initBaseline:f>p?_[d]:x[d],bodyEnds:S,whiskerEnds:M})},!0)})}}),e("echarts/chart/candlestick",[Qr,K,"./candlestick/CandlestickSeries","./candlestick/CandlestickView","./candlestick/preprocessor","./candlestick/candlestickVisual","./candlestick/candlestickLayout"],function(t){var e=t(K);t("./candlestick/CandlestickSeries"),t("./candlestick/CandlestickView"),e[Jt](t("./candlestick/preprocessor")),e[Xt]("chart",t("./candlestick/candlestickVisual")),e[Yt](t("./candlestick/candlestickLayout"))}),e("echarts/chart/effectScatter/EffectScatterSeries",[Qr,Mt,bt],function(t){var e=t(Mt),i=t(bt);return i[Cr]({type:"series.effectScatter",dependencies:["grid","polar"],getInitialData:function(t,i){var n=e(t.data,this,i);return n},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,effectType:"ripple",showEffectOn:"render",rippleEffect:{period:4,scale:2.5,brushType:"fill"},xAxisIndex:0,yAxisIndex:0,polarIndex:0,geoIndex:0,symbolSize:10}})}),e("echarts/chart/helper/EffectSymbol",[Qr,Kr,_t,xt,yt,"./Symbol"],function(t){function e(t){return n[Or](t)||(t=[+t,+t]),t}function i(t,e){l.call(this);var i=new s(t,e),n=new l;this.add(i),this.add(n),n.beforeUpdate=function(){this.attr(i.getScale())},this[gt](t,e)}var n=t(Kr),r=t(_t),a=t(xt),o=t(yt),s=t("./Symbol"),l=a.Group,u=3,c=i[Jr];return c.stopEffectAnimation=function(){this[An](1)[Ai]()},c.startEffectAnimation=function(t,e,i,n,a,o){for(var s=this._symbolType,l=this._color,c=this[An](1),h=0;u>h;h++){var d=r[mt](s,-.5,-.5,1,1,l);d.attr({style:{stroke:e===_r?l:null,fill:"fill"===e?l:null,strokeNoScale:!0},z2:99,silent:!0,scale:[1,1],z:a,zlevel:o});var f=-h/u*t+n;d[Oi]("",!0).when(t,{scale:[i,i]}).delay(f).start(),d.animateStyle(!0).when(t,{opacity:0}).delay(f).start(),c.add(d)}},c[ee]=function(){this[Mi](Zn)},c[te]=function(){this[Mi](Gn)},c[gt]=function(t,i){function n(){w[Mi](Zn),p!==Si&&this.startEffectAnimation(g,m,v,y,x,_)}function r(){w[Mi](Gn),p!==Si&&this.stopEffectAnimation()}var a=t[Qt];this[An](0)[gt](t,i);var s=this[An](1),l=t[In](i),u=t[Pt](i,pt),c=e(t[Pt](i,vt)),h=t[Pt](i,"color");s.attr("scale",c),s[ki](function(t){t.attr({fill:h})});var d=l[br]("symbolOffset");if(d){var f=s[Cn];f[0]=o[Rr](d[0],c[0]),f[1]=o[Rr](d[1],c[1])}this._symbolType=u,this._color=h;var p=a.get("showEffectOn"),v=l.get("rippleEffect.scale"),m=l.get("rippleEffect.brushType"),g=1e3*l.get("rippleEffect.period"),y=i/t.count(),x=l[br]("z")||0,_=l[br](Ae)||0;this.stopEffectAnimation(),p===Si&&this.startEffectAnimation(g,m,v,y,x,_);var w=this[An](0);this.on(He,n,this).on(Fe,r,this).on(Zn,n,this).on(Gn,r,this)},c.fadeOut=function(t){t&&t()},n[Ar](i,l),i}),e("echarts/chart/effectScatter/EffectScatterView",[Qr,ot,"../helper/EffectSymbol",T],function(t){var e=t(ot),i=t("../helper/EffectSymbol");t(T)[jt]({type:"effectScatter",init:function(){this[tt]=new e(i)},render:function(t,e,i){var n=t[En](),r=this[tt];r[gt](n),this.group.add(r.group)},updateLayout:function(){this[tt][Ci]()},remove:function(t,e){this[tt]&&this[tt][Pi](e)}})}),e("echarts/chart/effectScatter",[Qr,Kr,K,"./effectScatter/EffectScatterSeries","./effectScatter/EffectScatterView",$,Y],function(t){var e=t(Kr),i=t(K);t("./effectScatter/EffectScatterSeries"),t("./effectScatter/EffectScatterView"),i[Xt]("chart",e.curry(t($),"effectScatter",ft,null)),i[Yt](e.curry(t(Y),"effectScatter"))}),e("echarts/chart/lines/LinesSeries",[Qr,bt,Lt,Kr,Ct],function(t){var e=t(bt),i=t(Lt),n=t(Kr),r=t(Ct);return e[Cr]({type:"series.lines",dependencies:["grid","polar"],getInitialData:function(t,e){function a(t,e,i,n){return t.coord&&t.coord[n]}var o=[],s=[],l=[];n.each(t.data,function(t){o.push(t[0]),s.push(t[1]),l.push(n[Cr](n[Cr]({},n[Or](t[0])?null:t[0]),n[Or](t[1])?null:t[1]))});var u=r.get(t[nn]);if(!u)throw new Error("Invalid coordinate system");var c=u[en],h=new i(c,this),d=new i(c,this),f=new i(["value"],this);return h[Ft](o,null,a),d[Ft](s,null,a),f[Ft](l),this.fromData=h,this.toData=d,f},formatTooltip:function(t){var e=this.fromData[zn](t),i=this.toData[zn](t);return e+" > "+i},defaultOption:{coordinateSystem:"geo",zlevel:0,z:2,legendHoverLink:!0,hoverAnimation:!0,xAxisIndex:0,yAxisIndex:0,geoIndex:0,effect:{show:!1,period:4,symbol:"circle",symbolSize:3,trailLength:.2},large:!1,largeThreshold:2e3,label:{normal:{show:!1,position:"end"}},lineStyle:{normal:{opacity:.5}}}})}),e("echarts/chart/helper/EffectLine",[Qr,xt,"./Line",Kr,_t,"zrender/core/curve"],function(t){function e(t,e,i,n){r.Group.call(this);var o=new a(t,e,i,n);this.add(o),this._updateEffectSymbol(t,n)}function i(t,e){t.__p1=e[0],t.__p2=e[1],t.__cp1=e[2]||[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]}function n(){var t=this.__p1,e=this.__p2,i=this.__cp1,n=this.__t,r=this[Cn],a=l[pi],o=l.quadraticDerivativeAt;r[0]=a(t[0],i[0],e[0],n),r[1]=a(t[1],i[1],e[1],n);var s=o(t[0],i[0],e[0],n),u=o(t[1],i[1],e[1],n);this[$i]=-Math.atan2(u,s)-Math.PI/2,this[Vi]=!1}var r=t(xt),a=t("./Line"),o=t(Kr),s=t(_t),l=t("zrender/core/curve"),u=e[Jr];return u._updateEffectSymbol=function(t,e){var r=t[In](e),a=r[tr]("effect"),l=a.get(vt),u=a.get(pt);o[Or](l)||(l=[l,l]);var c=a.get("color")||t[Pt](e,"color"),h=this[An](1),d=1e3*a.get("period");(this._symbolType!==u||d!==this._period)&&(h=s[mt](u,-.5,-.5,1,1,c),h[Vi]=!0,h.z2=100,this._symbolType=u,this._period=d,this.add(h),h.__t=0,h[Oi]("",!0).when(d,{__t:1}).delay(e/t.count()*d/2).during(o.bind(n,h)).start()),h[Ue](mr,c),h[Ue](a[dt](["color"])),h.attr("scale",l);var f=t[zt](e);i(h,f),h[wt](c),h.attr("scale",l)},u[gt]=function(t,e,i,n){this[An](0)[gt](t,e,i,n),this._updateEffectSymbol(t,n)},u[Ci]=function(t,e,n,r){this[An](0)[Ci](t,e,n,r);var a=this[An](1),o=t[zt](r);i(a,o)},o[Ar](e,r.Group),e}),e("echarts/chart/lines/LinesView",[Qr,"../helper/LineDraw","../helper/EffectLine","../helper/Line",T],function(t){var e=t("../helper/LineDraw"),i=t("../helper/EffectLine"),n=t("../helper/Line");t(T)[jt]({type:"lines",init:function(){},render:function(t,r,a){var o=t[En](),s=this._lineDraw,l=t.get("effect.show");l!==this._hasEffet&&(s&&s[Pi](),s=this._lineDraw=new e(l?i:n),this._hasEffet=l);var u=t.get(Ae),c=t.get("effect.trailLength"),h=a.getZr();h.painter.getLayer(u).clear(!0),null!=this._lastZlevel&&h.configLayer(this._lastZlevel,{motionBlur:!1}),l&&c&&h.configLayer(u,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(c/10+.9,1),0)}),this.group.add(s.group),s[gt](o),this._lastZlevel=u},updateLayout:function(t,e,i){this._lineDraw[Ci]();var n=i.getZr();n.painter.getLayer(this._lastZlevel).clear(!0)},remove:function(t,e){this._lineDraw&&this._lineDraw[Pi](e,!0)}})}),e("echarts/chart/lines/linesLayout",[Qr],function(t){return function(t){t[de]("lines",function(t){var e=t[nn],i=t.fromData,n=t.toData,r=t[En](),a=e[en];i.each(a,function(t,n,r){i[It](r,e[st]([t,n]))}),n.each(a,function(t,i,r){n[It](r,e[st]([t,i]))}),r.each(function(t){var e,a=i[zt](t),o=n[zt](t),s=r[In](t).get("lineStyle.normal.curveness");s>0&&(e=[(a[0]+o[0])/2-(a[1]-o[1])*s,(a[1]+o[1])/2-(o[0]-a[0])*s]),r[It](t,[a,o,e])})})}}),e("echarts/chart/lines",[Qr,"./lines/LinesSeries","./lines/LinesView",Kr,K,"./lines/linesLayout","../visual/seriesColor"],function(t){t("./lines/LinesSeries"),t("./lines/LinesView");var e=t(Kr),i=t(K);i[Yt](t("./lines/linesLayout")),i[Xt]("chart",e.curry(t("../visual/seriesColor"),"lines",ce))}),e("echarts/chart/heatmap/HeatmapSeries",[Qr,bt,Mt],function(t){var e=t(bt),i=t(Mt);return e[Cr]({type:"series.heatmap",getInitialData:function(t,e){return i(t.data,this,e)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:0,z:2,xAxisIndex:0,yAxisIndex:0,geoIndex:0,blurSize:30,pointSize:20}})}),e("echarts/chart/heatmap/HeatmapLayer",[Qr,Kr],function(t){function e(){var t=n.createCanvas();this[qr]=t,this.blurSize=30,this.pointSize=20,this[xr]=1,this._gradientPixels={}}var i=256,n=t(Kr);return e[Jr]={update:function(t,e,n,r,a,o){var s=this._getBrush(),l=this._getGradient(t,a,"inRange"),u=this._getGradient(t,a,"outOfRange"),c=this.pointSize+this.blurSize,h=this[qr],d=h[Wr]("2d"),f=t[jr];h.width=e,h[ur]=n;for(var p=0;f>p;++p){var v=t[p],m=v[0],g=v[1],y=v[2],x=r(y);d.globalAlpha=x,d.drawImage(s,m-c,g-c)}for(var _=d.getImageData(0,0,h.width,h[ur]),w=_.data,b=0,M=w[jr];M>b;){var x=w[b+3]/256,S=4*Math.floor(x*(i-1));if(x>0){var A=o(x)?l:u;w[b++]=A[S],w[b++]=A[S+1],w[b++]=A[S+2],w[b++]*=this[xr]*A[S+3]}else b+=4}return d.putImageData(_,0,0),h},_getBrush:function(){var t=this._brushCanvas||(this._brushCanvas=n.createCanvas()),e=this.pointSize+this.blurSize,i=2*e;t.width=i,t[ur]=i;var r=t[Wr]("2d");return r.clearRect(0,0,i,i),r[gr]=i,r[yr]=this.blurSize,r[mr]="#000",r[fi](),r.arc(-e,e,this.pointSize,0,2*Math.PI,!0),r[ui](),r.fill(),t},_getGradient:function(t,e,i){for(var n=this._gradientPixels,r=n[i]||(n[i]=new Uint8ClampedArray(1024)),a=[],o=0,s=0;256>s;s++)e[i](s/255,!0,a),r[o++]=a[0],r[o++]=a[1],r[o++]=a[2],r[o++]=a[3];return r}},e}),e("echarts/chart/heatmap/HeatmapView",[Qr,xt,"./HeatmapLayer",Kr,T],function(t){function e(t,e,i){var n=t[1]-t[0];e=o.map(e,function(e){return{interval:[(e[Z][0]-t[0])/n,(e[Z][1]-t[0])/n]}});var r=e[jr],a=0;return function(t){for(var n=a;r>n;n++){var o=e[n][Z];if(o[0]<=t&&t<=o[1]){a=n;break}}if(n===r)for(var n=a-1;n>=0;n--){var o=e[n][Z];if(o[0]<=t&&t<=o[1]){a=n;break}}return n>=0&&r>n&&i[n]}}function i(t,e){var i=t[1]-t[0];return e=[(e[0]-t[0])/i,(e[1]-t[0])/i],function(t){return t>=e[0]&&t<=e[1]}}function n(t){var e=t[en];return"lng"===e[0]&&"lat"===e[1]}var r=t(xt),a=t("./HeatmapLayer"),o=t(Kr);return t(T)[jt]({type:"heatmap",render:function(t,e,i){var r;if(e[ie]("visualMap",function(e){e.eachTargetSeries(function(i){i===t&&(r=e)})}),!r)throw new Error("Heatmap must use with visualMap");this.group[Ai]();var a=t[nn];a.type===D?this._renderOnCartesian(a,t,i):n(a)&&this._renderOnGeo(a,t,r,i)},_renderOnCartesian:function(t,e,i){var n=t[it]("x"),a=t[it]("y"),o=this.group;if(n.type!==At||a.type!==At)throw new Error("Heatmap on cartesian must have two category axes");if(!n[rt]||!a[rt])throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");var s=n[nt](),l=a[nt](),u=e[En]();u.each(["x","y","z"],function(i,n,a,c){var h=u[In](c),d=t[st]([i,n]);if(!isNaN(a)){var f=new r.Rect({shape:{x:d[0]-s/2,y:d[1]-l/2,width:s,height:l},style:{fill:u[Pt](c,"color")}}),p=h[tr](C)[dt](["color"]),v=h[tr](A)[dt](),m=h[tr](S),g=h[tr](M),y=e[Rn](c),x="-";y&&null!=y[2]&&(x=y[2]),m.get("show")&&(r[Ze](p,m),p.text=e[ht](c,Gn)||x),g.get("show")&&(r[Ze](v,g),v.text=e[ht](c,Zn)||x),f[Ue](p),r[We](f,v),o.add(f),u[Dt](c,f)}})},_renderOnGeo:function(t,n,o,s){var l=o.targetVisuals.inRange,u=o.targetVisuals.outOfRange,c=n[En](),h=this._hmLayer||this._hmLayer||new a;h.blurSize=n.get("blurSize"),h.pointSize=n.get("pointSize");var d=t.getViewRect().clone(),f=t.getRoamTransform();d[cr](f);var p=Math.max(d.x,0),v=Math.max(d.y,0),m=Math.min(d.width+d.x,s[cn]()),g=Math.min(d[ur]+d.y,s[un]()),x=m-p,_=g-v,w=c[Et](["lng","lat","value"],function(e,i,n){var r=t[st]([e,i]);return r[0]-=p,r[1]-=v,r.push(n),r}),b=o[lt](),M="visualMap.continuous"===o.type?i(b,o[Un].range):e(b,o.getPieceList(),o[Un][y]);h[Se](w,x,_,l.color.getNormalizer(),{inRange:l.color.getColorMapper(),outOfRange:u.color.getColorMapper()},M);var S=new r.Image({style:{width:x,height:_,x:p,y:v,image:h[qr]},silent:!0});this.group.add(S)}})}),e("echarts/chart/heatmap",[Qr,"./heatmap/HeatmapSeries","./heatmap/HeatmapView"],function(t){t("./heatmap/HeatmapSeries"),t("./heatmap/HeatmapView")}),e("echarts/component/geo/GeoView",[Qr,"../helper/MapDraw",T],function(t){var e=t("../helper/MapDraw");return t(T)[Wt]({type:"geo",init:function(t,i){var n=new e(i,!0);this._mapDraw=n,this.group.add(n.group)},render:function(t,e,i){t.get("show")&&this._mapDraw.draw(t,e,i)}})}),e("echarts/component/geo",[Qr,"../coord/geo/geoCreator","./geo/GeoView","../action/geoRoam"],function(t){t("../coord/geo/geoCreator"),t("./geo/GeoView"),t("../action/geoRoam")}),e("echarts/component/title",[Qr,K,"../util/graphic","../util/layout"],function(t){var e=t(K),i=t("../util/graphic"),n=t("../util/layout");e[Ut]({type:"title",defaultOption:{zlevel:0,z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:"left",top:"top",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#aaa"}}}),e[Wt]({type:"title",render:function(t,e,r){if(this.group[Ai](),t.get("show")){var a=this.group,o=t[tr](Qn),s=t[tr]("subtextStyle"),l=t.get(gi),u=new i.Text({style:{text:t.get("text"),textFont:o[Kn](),fill:o[Ge](),textBaseline:"top"},z2:10}),c=u[Jn](),d=t.get("subtext"),f=new i.Text({style:{text:d,textFont:s[Kn](),fill:s[Ge](),y:c[ur]+t.get(h),textBaseline:"top"},z2:10}),v=t.get("link"),m=t.get("sublink");u[Ce]=!v,f[Ce]=!m,v&&u.on("click",function(){window.open(v,t.get(Zi))}),m&&f.on("click",function(){window.open(m,t.get("subtarget"))}),a.add(u),d&&a.add(f);var g=a[Jn](),y=t[P]();y.width=g.width,y[ur]=g[ur];var x=n[wn](y,{width:r[cn](),height:r[un]()},t.get(p));if(!l){var _=x.x/r[cn](),w=(x.x+x.width)/r[cn]();.2>_?l="left":w>.8?(x.x+=x.width,l="right"):(x.x+=x.width/2,l=Vr)}a[Cn]=[x.x,x.y],u[Ue](gi,l),f[Ue](gi,l),g=a[Jn]();var b=x[_n],M=t[dt](["color",xr]);M.fill=t.get(xe);var S=new i.Rect({shape:{x:g.x-b[3],y:g.y-b[0],width:g.width+b[1]+b[3],height:g[ur]+b[0]+b[2]},style:M,silent:!0});i[je](S),a.add(S)}}})}),e("echarts/component/dataZoom/typeDefaulter",[Qr,R],function(t){t(R)[kn](oe,function(t){return"slider"})}),e("echarts/component/dataZoom/AxisProxy",[Qr,Kr,yt,z],function(t){function e(t,e){var i=[1/0,-(1/0)];return o(e,function(e){var n=e[En]();n&&o(e[L](t),function(t){var e=n[Gt](t);e[0]<i[0]&&(i[0]=e[0]),e[1]>i[1]&&(i[1]=e[1])})},this),i}function i(t,e,i){var n=[0,100],l=[t.start,t.end],u=a[G](i),c=[];return o(["startValue","endValue"],function(e){c.push(null!=t[e]?u.parse(t[e]):null)}),o([0,1],function(t){var i=c[t],a=l[t];null!=a||null==i?(null==a&&(a=n[t]),i=u.parse(r[Er](a,n,e,!0))):a=r[Er](i,e,n,!0),c[t]=i,l[t]=a}),{valueWindow:s(c),percentWindow:s(l)}}var n=t(Kr),r=t(yt),a=t(z),o=n.each,s=r.asc,l=function(t,e,i,n){this._dimName=t,this._axisIndex=e,this._backup,this._valueWindow,this._percentWindow,this._dataExtent,this[er]=n,this[ne]=i};return l[Jr]={constructor:l,hostedBy:function(t){return this[ne]===t},backup:function(t,e){t===this[ne]&&(this._backup=e)},getBackup:function(){return n.clone(this._backup)},getDataExtent:function(){return this._dataExtent.slice()},getDataValueWindow:function(){return this._valueWindow.slice()},getDataPercentWindow:function(){return this._percentWindow.slice()},getTargetSeriesModels:function(){var t=[];return this[er][he](function(e){this._axisIndex===e.get(this._dimName+"AxisIndex")&&t.push(e)},this),t},getAxisModel:function(){return this[er][on](this._dimName+"Axis",this._axisIndex)},getOtherAxisModel:function(){var t,e,i=this._dimName,n=this[er],r=this.getAxisModel(),a="x"===i||"y"===i;a?(e="gridIndex",t="x"===i?"y":"x"):(e="polarIndex",t="angle"===i?qn:"angle");var o;return n[ie](t+"Axis",function(t){(t.get(e)||0)===(r.get(e)||0)&&(o=t)}),o},reset:function(t){if(t===this[ne]){var n=t[Un],r=this._dimName,a=this.getAxisModel(),o=this.getTargetSeriesModels(),s=e(r,o),l=i(n,s,a);this._dataExtent=s.slice(),this._valueWindow=l.valueWindow.slice(),this._percentWindow=l.percentWindow.slice()}},filterData:function(t){function e(t){return t>=a[0]&&t<=a[1]}if(t===this[ne]){var i=this._dimName,n=this.getTargetSeriesModels(),r=t.get("filterMode"),a=this._valueWindow,s=this.getOtherAxisModel();t.get("$fromToolbox")&&s&&s.get("type")===At&&(r="empty"),o(n,function(t){var n=t[En]();n&&o(t[L](i),function(i){"empty"===r?t[ri](n.map(i,function(t){return e(t)?t:NaN})):n[Nt](i,e)})})}}},l}),e("echarts/component/dataZoom/DataZoomModel",[Qr,Kr,Oe,T,Tt,"./AxisProxy"],function(t){function e(t){var e={};return u(["start","end","startValue","endValue"],function(i){e[i]=t[i]}),e}function n(t,e,i,n){null!=i[e]&&null==i[t]&&(n[t]=null)}var r=t(Kr),a=t(Oe),o=t(T),s=t(Tt),l=t("./AxisProxy"),u=r.each,c=s.eachAxisDim;
return o[Ut]({type:"dataZoom",dependencies:["xAxis","yAxis","zAxis","radiusAxis","angleAxis",pn],defaultOption:{zlevel:0,z:4,orient:null,xAxisIndex:null,yAxisIndex:null,angleAxisIndex:null,radiusAxisIndex:null,filterMode:"filter",throttle:100,start:0,end:100,startValue:null,endValue:null},init:function(t,n,r){this._dataIntervalByAxis={},this._dataInfo={},this._axisProxies={},this[i];var a=e(t);this[yn](t,r),this.doInit(a)},mergeOption:function(t){var i=e(t);r.merge(this[Un],t,!0),this.doInit(i)},doInit:function(t){var e=this[Un];a[ge]||(e.realtime=!1),n("start","startValue",t,e),n("end","endValue",t,e),this[i]=this[tr](Qn),this._resetTarget(),this._giveAxisProxies(),this._backup()},_giveAxisProxies:function(){var t=this._axisProxies;this.eachTargetAxis(function(e,i,n,r){var a=this.dependentModels[e.axis][i],o=a.__dzAxisProxy||(a.__dzAxisProxy=new l(e.name,i,this,r));t[e.name+"_"+i]=o},this)},_resetTarget:function(){var t=this[Un],e=this._judgeAutoMode();c(function(e){var i=e[Wn];t[i]=s[Hn](t[i])},this),e===Wn?this._autoSetAxisIndex():e===f&&this._autoSetOrient()},_judgeAutoMode:function(){var t=this[Un],e=!1;c(function(i){null!=t[i[Wn]]&&(e=!0)},this);var i=t[f];return null==i&&e?f:e?void 0:(null==i&&(t[f]=Sn),Wn)},_autoSetAxisIndex:function(){var t=!0,e=this.get(f,!0),i=this[Un];if(t){var n=e===Mn?{dim:"y",axisIndex:"yAxisIndex",axis:"yAxis"}:{dim:"x",axisIndex:"xAxisIndex",axis:"xAxis"};this.dependentModels[n.axis][jr]&&(i[n[Wn]]=[0],t=!1)}t&&c(function(e){if(t){var n=[],r=this.dependentModels[e.axis];if(r[jr]&&!n[jr])for(var a=0,o=r[jr];o>a;a++)r[a].get("type")===At&&n.push(a);i[e[Wn]]=n,n[jr]&&(t=!1)}},this),t&&this[er][he](function(t){this._isSeriesHasAllAxesTypeOf(t,"value")&&c(function(e){var n=i[e[Wn]],a=t.get(e[Wn]);r[Hr](n,a)<0&&n.push(a)})},this)},_autoSetOrient:function(){var t;this.eachTargetAxis(function(e){!t&&(t=e.name)},this),this[Un][f]="y"===t?Mn:Sn},_isSeriesHasAllAxesTypeOf:function(t,e){var i=!0;return c(function(n){var r=t.get(n[Wn]),a=this.dependentModels[n.axis][r];a&&a.get("type")===e||(i=!1)},this),i},_backup:function(){this.eachTargetAxis(function(t,e,i,n){var r=n[on](t.axis,e);this.getAxisProxy(t.name,e).backup(this,{scale:r.get("scale",!0),min:r.get("min",!0),max:r.get("max",!0)})},this)},getFirstTargetAxisModel:function(){var t;return c(function(e){if(null==t){var i=this.get(e[Wn]);i[jr]&&(t=this.dependentModels[e.axis][i[0]])}},this),t},eachTargetAxis:function(t,e){var i=this[er];c(function(n){u(this.get(n[Wn]),function(r){t.call(e,n,r,this,i)},this)},this)},getAxisProxy:function(t,e){return this._axisProxies[t+"_"+e]},setRawRange:function(t){u(["start","end","startValue","endValue"],function(e){this[Un][e]=t[e]},this)},getPercentRange:function(){var t=this.findRepresentativeAxisProxy();return t?t.getDataPercentWindow():void 0},getValueRange:function(t,e){if(null!=t||null!=e)return this.getAxisProxy(t,e).getDataValueWindow();var i=this.findRepresentativeAxisProxy();return i?i.getDataValueWindow():void 0},findRepresentativeAxisProxy:function(){var t=this._axisProxies;for(var e in t)if(t.hasOwnProperty(e)&&t[e].hostedBy(this))return t[e];for(var e in t)if(t.hasOwnProperty(e)&&!t[e].hostedBy(this))return t[e]}})}),e("echarts/component/dataZoom/DataZoomView",[Qr,"../../view/Component"],function(t){var e=t("../../view/Component");return e[Cr]({type:"dataZoom",render:function(t,e,i,n){this.dataZoomModel=t,this[er]=e,this.api=i},getTargetInfo:function(){function t(t,e,i,n){for(var r,a=0;a<i[jr];a++)if(i[a].model===t){r=i[a];break}r||i.push(r={model:t,axisModels:[],coordIndex:n}),r.axisModels.push(e)}var e=this.dataZoomModel,i=this[er],n=[],r=[],a=[];return e.eachTargetAxis(function(e,o){var s=i[on](e.axis,o);if(s){a.push(s);var l=s.get("gridIndex"),u=s.get("polarIndex");if(null!=l){var c=i[on]("grid",l);t(c,s,n,l)}else if(null!=u){var c=i[on]("polar",u);t(c,s,r,u)}}},this),{cartesians:n,polars:r,axisModels:a}}})}),e("echarts/component/dataZoom/SliderZoomModel",[Qr,"./DataZoomModel",V],function(t){var e=t("./DataZoomModel"),i=t(V);return e[Cr]({type:"dataZoom.slider",inputPositionParams:null,defaultOption:{show:!0,left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto",height:"auto",backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"#ddd",fillerColor:"rgba(47,69,84,0.25)",handleColor:"rgba(47,69,84,0.65)",handleSize:10,labelPrecision:null,labelFormatter:null,showDetail:!0,showDataShadow:"auto",realtime:!0,zoomLock:!1,textStyle:{color:"#333"}},init:function(t){this.inputPositionParams=i.getLayoutParams(t),this[g]("init",arguments)},mergeOption:function(t){this.inputPositionParams=i.getLayoutParams(t),this[g](mn,arguments)}})}),e("echarts/util/throttle",[],function(){var t={},e="\x00__throttleOriginMethod",i="\x00__throttleRate";return t.throttle=function(t,e,i,n){function r(r){function f(){c=(new Date).getTime(),h=null,(d?t:t[r]).apply(o,s||[])}var p=function(){l=(new Date).getTime(),o=this,s=arguments,a=l-(n?u:c)-e,clearTimeout(h),n?i?h=setTimeout(f,e):a>=0&&f():a>=0?f():i&&(h=setTimeout(f,-a)),u=l};return p.clear=function(){h&&(clearTimeout(h),h=null)},p}var a,o,s,l=(new Date).getTime(),u=0,c=0,h=null,d=typeof t===Br;if(e=e||0,d)return r();for(var f=[],p=0;p<t[jr];p++)f[p]=r(p);return f},t.fixRate=function(e,i){return null!=i?t.throttle(e,i,!0,!1):e},t.debounce=function(e,i){return null!=i?t.throttle(e,i,!0,!0):e},t.createOrUpdate=function(n,r,a,o){var s=n[r];if(s&&null!=a&&o){var l=s[e]||s,u=s[i];u!==a&&(s=n[r]=t[o](l,a),s[e]=l,s[i]=a)}},t.clear=function(t,i){var n=t[i];n&&n[e]&&(t[i]=n[e])},t}),e("echarts/component/helper/sliderMove",[Qr],function(t){return function(t,e,i,n,r){function o(t,e,i){var n=e[jr]?e.slice():[e,e];return e[0]>e[1]&&n[a](),0>t&&n[0]+t<i[0]&&(t=i[0]-n[0]),t>0&&n[1]+t>i[1]&&(t=i[1]-n[1]),t}return t?("rigid"===n?(t=o(t,e,i),e[0]+=t,e[1]+=t):(t=o(t,e[r],i),e[r]+=t,"push"===n&&e[0]>e[1]&&(e[1-r]=e[r])),e):e}}),e("echarts/component/dataZoom/SliderZoomView",[Qr,Kr,xt,"../../util/throttle","./DataZoomView",yt,V,"../helper/sliderMove"],function(t){function e(t){return"x"===t?"y":"x"}var n=t(Kr),r=t(xt),o=t("../../util/throttle"),s=t("./DataZoomView"),l=r.Rect,u=t(yt),c=u[Er],h=t(V),d=t("../helper/sliderMove"),v=u.asc,m=n.bind,y=Math.round,x=Math.max,_=n.each,w=7,b=1,M=30,S=Sn,A=Mn,C=5,T=["line","bar","candlestick",ae];return s[Cr]({type:"dataZoom.slider",init:function(t,e){this._displayables={},this._orient,this._range,this._handleEnds,this._size,this._halfHandleSize,this._location,this._dragging,this._dataShadowInfo,this.api=e},render:function(t,e,i,n){return this[g](Si,arguments),o.createOrUpdate(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),this._orient=t.get(f),this._halfHandleSize=y(t.get("handleSize")/2),this.dataZoomModel.get("show")===!1?void this.group[Ai]():(n&&n.type===oe&&n.from===this.uid||this._buildView(),void this._updateView())},remove:function(){this[g](Pi,arguments),o.clear(this,"_dispatchZoomAction")},dispose:function(){this[g](me,arguments),o.clear(this,"_dispatchZoomAction")},_buildView:function(){var t=this.group;t[Ai](),this._resetLocation(),this._resetInterval();var e=this._displayables.barGroup=new r.Group;this._renderBackground(),this._renderDataShadow(),this._renderHandle(),t.add(e),this._positionGroup()},_resetLocation:function(){var t=this.dataZoomModel,e=this.api,i=this._findCoordRect(),n={width:e[cn](),height:e[un]()},r=this._orient===S?{left:i.x,top:n[ur]-M-w,width:i.width,height:M}:{right:w,top:i.y,width:M,height:i[ur]};h.mergeLayoutParam(r,t.inputPositionParams);var o=h[wn](r,n,t[p]);this._location={x:o.x,y:o.y},this._size=[o.width,o[ur]],this._orient===A&&this._size[a]()},_positionGroup:function(){var t=this.group,e=this._location,i=this._orient,n=this.dataZoomModel.getFirstTargetAxisModel(),r=n&&n.get(et),a=this._displayables.barGroup,o=(this._dataShadowInfo||{}).otherAxisInverse;a.attr(i!==S||r?i===S&&r?{scale:o?[-1,1]:[-1,-1]}:i!==A||r?{scale:o?[-1,-1]:[-1,1],rotation:Math.PI/2}:{scale:o?[1,-1]:[1,1],rotation:Math.PI/2}:{scale:o?[1,1]:[1,-1]});var s=t[Jn]([a]);t[Cn][0]=e.x-s.x,t[Cn][1]=e.y-s.y},_getViewExtent:function(){var t=this._halfHandleSize,e=x(this._size[0],4*t),i=[t,e-t];return i},_renderBackground:function(){var t=this.dataZoomModel,e=this._size;this._displayables.barGroup.add(new l({silent:!0,shape:{x:0,y:0,width:e[0],height:e[1]},style:{fill:t.get(xe)}}))},_renderDataShadow:function(){var t=this._dataShadowInfo=this._prepareDataShadowInfo();if(t){var e=this._size,i=t[pn],n=i.getRawData(),a=i.getShadowDim?i.getShadowDim():t.otherDim,o=n[Gt](a),s=.3*(o[1]-o[0]);o=[o[0]-s,o[1]+s];var l=[0,e[1]],u=[0,e[0]],h=[[e[0],0],[0,0]],d=u[1]/(n.count()-1),f=0,p=Math.round(n.count()/e[0]);n.each([a],function(t,e){if(p>0&&e%p)return void(f+=d);var i=null==t||isNaN(t)||""===t?null:c(t,o,l,!0);null!=i&&h.push([f,i]),f+=d}),this._displayables.barGroup.add(new r[Ye]({shape:{points:h},style:{fill:this.dataZoomModel.get("dataBackgroundColor"),lineWidth:0},silent:!0,z2:-20}))}},_prepareDataShadowInfo:function(){var t=this.dataZoomModel,i=t.get("showDataShadow");if(i!==!1){var r,a=this[er];return t.eachTargetAxis(function(o,s){var l=t.getAxisProxy(o.name,s).getTargetSeriesModels();n.each(l,function(t){if(!(r||i!==!0&&n[Hr](T,t.get("type"))<0)){var l=e(o.name),u=a[on](o.axis,s).axis;r={thisAxis:u,series:t,thisDim:o.name,otherDim:l,otherAxisInverse:t[nn][ut](u)[et]}}},this)},this),r}},_renderHandle:function(){var t=this._displayables,e=t.handles=[],n=t.handleLabels=[],a=this._displayables.barGroup,o=this._size;a.add(t.filler=new l({draggable:!0,cursor:"move",drift:m(this._onDragMove,this,"all"),ondragend:m(this._onDragEnd,this),onmouseover:m(this._showDataInfo,this,!0),onmouseout:m(this._showDataInfo,this,!1),style:{fill:this.dataZoomModel.get("fillerColor"),textPosition:"inside"}})),a.add(new l(r[je]({silent:!0,shape:{x:0,y:0,width:o[0],height:o[1]},style:{stroke:this.dataZoomModel.get("dataBackgroundColor"),lineWidth:b,fill:"rgba(0,0,0,0)"}}))),_([0,1],function(t){a.add(e[t]=new l({style:{fill:this.dataZoomModel.get("handleColor")},cursor:"move",draggable:!0,drift:m(this._onDragMove,this,t),ondragend:m(this._onDragEnd,this),onmouseover:m(this._showDataInfo,this,!0),onmouseout:m(this._showDataInfo,this,!1)}));var o=this.dataZoomModel[i];this.group.add(n[t]=new r.Text({silent:!0,invisible:!0,style:{x:0,y:0,text:"",textBaseline:"middle",textAlign:"center",fill:o[Ge](),textFont:o[Kn]()}}))},this)},_resetInterval:function(){var t=this._range=this.dataZoomModel.getPercentRange();this._handleEnds=c(t,[0,100],this._getViewExtent(),!0)},_updateInterval:function(t,e){var i=this._handleEnds,n=this._getViewExtent();d(e,i,n,"all"===t||this.dataZoomModel.get("zoomLock")?"rigid":"cross",t),this._range=v(c(i,n,[0,100],!0))},_updateView:function(){var t=this._displayables,e=this._handleEnds,i=v(e.slice()),n=this._size,r=this._halfHandleSize;_([0,1],function(i){var a=t.handles[i];a[ai]({x:e[i]-r,y:-1,width:2*r,height:n[1]+2,r:1})},this),t.filler[ai]({x:i[0],y:0,width:i[1]-i[0],height:this._size[1]}),this._updateDataInfo()},_updateDataInfo:function(){function t(t){var e=r.getTransform(i.handles[t],this.group),s=r.transformDirection(0===t?"right":"left",e),l=this._halfHandleSize+C,c=r[cr]([u[t]+(0===t?-l:l),this._size[1]/2],e);n[t][Ue]({x:c[0],y:c[1],textBaseline:a===S?zr:s,textAlign:a===S?s:Vr,text:o[t]})}var e=this.dataZoomModel,i=this._displayables,n=i.handleLabels,a=this._orient,o=["",""];if(e.get("showDetail")){var s,l;e.eachTargetAxis(function(t,i){s||(s=e.getAxisProxy(t.name,i).getDataValueWindow(),l=this[er][on](t.axis,i).axis)},this),s&&(o=[this._formatLabel(s[0],l),this._formatLabel(s[1],l)])}var u=v(this._handleEnds.slice());t.call(this,0),t.call(this,1)},_formatLabel:function(t,e){var i=this.dataZoomModel,r=i.get("labelFormatter");if(n.isFunction(r))return r(t);var a=i.get("labelPrecision");return(null==a||"auto"===a)&&(a=e[Dr]()),t=null==t&&isNaN(t)?"":e.type===At||"time"===e.type?e.scale[q](Math.round(t)):t[Pr](Math.min(a,20)),n[fn](r)&&(t=r[Nr]("{value}",t)),t},_showDataInfo:function(t){t=this._dragging||t;var e=this._displayables.handleLabels;e[0].attr(Ti,!t),e[1].attr(Ti,!t)},_onDragMove:function(t,e,i){this._dragging=!0;var n=this._applyBarTransform([e,i],!0);this._updateInterval(t,n[0]),this._updateView(),this.dataZoomModel.get("realtime")&&this._dispatchZoomAction()},_onDragEnd:function(){this._dragging=!1,this._showDataInfo(!1),this._dispatchZoomAction()},_dispatchZoomAction:function(){var t=this._range;this.api[ln]({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})},_applyBarTransform:function(t,e){var i=this._displayables.barGroup[qi]();return r[cr](t,i,e)},_findCoordRect:function(){var t,e=this.getTargetInfo();if(e.cartesians[jr])t=e.cartesians[0].model[nn][I]();else{var i=this.api[cn](),n=this.api[un]();t={x:.2*i,y:.2*n,width:.6*i,height:.6*n}}return t}})}),e("echarts/component/dataZoom/InsideZoomModel",[Qr,"./DataZoomModel"],function(t){var e=t("./DataZoomModel");return e[Cr]({type:"dataZoom.inside",defaultOption:{zoomLock:!1}})}),e("echarts/component/dataZoom/InsideZoomView",[Qr,"./DataZoomView","../../util/throttle",Kr,"../helper/sliderMove","../../component/helper/RoamController"],function(t){function e(t,e,i,r){e=e.slice();var a=r.axisModels[0];if(a){var o=n(t,a,i),s=o.signal*(e[1]-e[0])*o.pixel/o.pixelLength;return u(s,e,[0,100],"rigid"),e}}function i(t,e,i,a,o,s){i=i.slice();var l=o.axisModels[0];if(l){var u=n(e,l,a),c=u.pixel-u.pixelStart,h=c/u.pixelLength*(i[1]-i[0])+i[0];return t=Math.max(t,0),i[0]=(i[0]-h)*t+h,i[1]=(i[1]-h)*t+h,r(i)}}function n(t,e,i){var n=e.axis,r=i.rect,a={};return"x"===n.dim?(a.pixel=t[0],a.pixelLength=r.width,a.pixelStart=r.x,a.signal=n[et]?1:-1):(a.pixel=t[1],a.pixelLength=r[ur],a.pixelStart=r.y,a.signal=n[et]?-1:1),a}function r(t){var e=[0,100];return!(t[0]<=e[1])&&(t[0]=e[1]),!(t[1]<=e[1])&&(t[1]=e[1]),!(t[0]>=e[0])&&(t[0]=e[0]),!(t[1]>=e[0])&&(t[1]=e[0]),t}var a=t("./DataZoomView"),o=t("../../util/throttle"),s=t(Kr),u=t("../helper/sliderMove"),c=t("../../component/helper/RoamController"),h=s.bind;return a[Cr]({type:"dataZoom.inside",init:function(t,e){this._controllers={},this._range},render:function(t,e,i,n){this[g](Si,arguments),o.createOrUpdate(this,"_dispatchZoomAction",this.dataZoomModel.get("throttle"),"fixRate"),n&&n.type===oe&&n.from===this.uid||(this._range=t.getPercentRange()),this._resetController(i)},remove:function(){this[g](Pi,arguments);var t=this._controllers;s.each(t,function(t){t.off("pan").off("zoom")}),t[jr]=0,o.clear(this,"_dispatchZoomAction")},dispose:function(){this[g](me,arguments),o.clear(this,"_dispatchZoomAction")},_resetController:function(t){var e=this._controllers,i=this.getTargetInfo();s.each(i.cartesians,function(i){var n="cartesian"+i.coordIndex,r=e[n];r||(r=e[n]=new c(t.getZr()),r[l](),r.on("pan",h(this._onPan,this,r,i)),r.on("zoom",h(this._onZoom,this,r,i))),r.rect=i.model[nn][I]().clone()},this)},_onPan:function(t,i,n,r){var a=this._range=e([n,r],this._range,t,i);a&&this._dispatchZoomAction(a)},_onZoom:function(t,e,n,r,a){var o=this.dataZoomModel;if(!o[Un].zoomLock){n=1/n;var s=this._range=i(n,[r,a],this._range,t,e,o);this._dispatchZoomAction(s)}},_dispatchZoomAction:function(t){this.api[ln]({type:"dataZoom",from:this.uid,dataZoomId:this.dataZoomModel.id,start:t[0],end:t[1]})}})}),e("echarts/component/dataZoom/dataZoomProcessor",[Qr,T,yt],function(t){function e(t,e,i,n){var a=t.name,o=i.getAxisProxy(a,e);o.reset(i);var s=o.getDataPercentWindow(),l=o.getDataValueWindow(),u=n[on](t.axis,e),c=0===s[0]&&100===s[1],h=o.getBackup(),d=r[Dr](l,[0,500]),f=!(20>d&&d>=0);u.setNeedsCrossZero&&u.setNeedsCrossZero(c?!h.scale:!1),u.setMin&&u.setMin(c||f?h.min:+l[0][Pr](d)),u.setMax&&u.setMax(c||f?h.max:+l[1][Pr](d))}function i(t,e,i,n){i.getAxisProxy(t.name,e).filterData(i)}var n=t(T),r=t(yt);n[Kt]($r,function(t,n){t[ie](oe,function(t){t.eachTargetAxis(e);var i=t.findRepresentativeAxisProxy(),n=i.getDataPercentWindow(),r=i.getDataValueWindow();t.setRawRange({start:n[0],end:n[1],startValue:r[0],endValue:r[1]})}),t[ie](oe,function(t){t.eachTargetAxis(i)})})}),e("echarts/component/dataZoom/dataZoomAction",[Qr,Kr,Tt,T],function(t){var e=t(Kr),i=t(Tt),n=t(T);n[$t](oe,function(t,n){var r=i.createLinkedNodesFinder(e.bind(n[ie],n,oe),i.eachAxisDim,function(t,e){return t.get(e[Wn])}),a=[];n[ie]({mainType:"dataZoom",query:t},function(t,e){a.push.apply(a,r(t).nodes)}),e.each(a,function(e,i){e.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})})}),e("echarts/component/dataZoom",[Qr,"./dataZoom/typeDefaulter","./dataZoom/DataZoomModel","./dataZoom/DataZoomView","./dataZoom/SliderZoomModel","./dataZoom/SliderZoomView","./dataZoom/InsideZoomModel","./dataZoom/InsideZoomView","./dataZoom/dataZoomProcessor","./dataZoom/dataZoomAction"],function(t){t("./dataZoom/typeDefaulter"),t("./dataZoom/DataZoomModel"),t("./dataZoom/DataZoomView"),t("./dataZoom/SliderZoomModel"),t("./dataZoom/SliderZoomView"),t("./dataZoom/InsideZoomModel"),t("./dataZoom/InsideZoomView"),t("./dataZoom/dataZoomProcessor"),t("./dataZoom/dataZoomAction")}),e("echarts/component/visualMap/preprocessor",[Qr,Kr],function(t){function e(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var i=t(Kr),n=i.each;return function(t){var r=t&&t.visualMap;i[Or](r)||(r=r?[r]:[]),n(r,function(t){if(t){e(t,"splitList")&&!e(t,"pieces")&&(t.pieces=t.splitList,delete t.splitList);var r=t.pieces;r&&i[Or](r)&&n(r,function(t){i[Ln](t)&&(e(t,"start")&&!e(t,"min")&&(t.min=t.start),e(t,"end")&&!e(t,"max")&&(t.max=t.end))})}})}}),e("echarts/component/visualMap/typeDefaulter",[Qr,R],function(t){t(R)[kn]("visualMap",function(t){return t[r]||(t.pieces?t.pieces[jr]>0:t[F]>0)&&!t.calculable?"piecewise":"continuous"})}),e("echarts/component/visualMap/visualCoding",[Qr,T,n,Kr],function(t){function e(t,e){var i=t.targetVisuals,n={};a.each(["inRange","outOfRange"],function(t){var e=r.prepareVisualTypes(i[t]);n[t]=e}),t.eachTargetSeries(function(e){function r(t){return s[Pt](o,t)}function a(t,e){s[fe](o,t,e)}var o,s=e[En](),l=t.getDataDimension(s);s.each([l],function(e,s){o=s;for(var l=t.getValueState(e),u=i[l],c=n[l],h=0,d=c[jr];d>h;h++){var f=c[h];u[f]&&u[f].applyVisual(e,r,a)}})})}var i=t(T),r=t(n),a=t(Kr);i[Xt]("component",function(t){t[ie]("visualMap",function(i){e(i,t)})})}),e("echarts/visual/visualDefault",[Qr,Kr],function(t){var e=t(Kr),i={get:function(t,i,r){var a=e.clone((n[t]||{})[i]);return r&&e[Or](a)?a[a[jr]-1]:a}},n={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},symbol:{active:[ft,"roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}};return i}),e("echarts/component/visualMap/VisualMapModel",[Qr,Kr,Oe,T,Tt,"../../visual/visualDefault",n,yt],function(t){var e=t(Kr),o=t(Oe),s=t(T),l=t(Tt),u=t("../../visual/visualDefault"),c=t(n),h=c.mapVisual,d=c.eachVisual,f=t(yt),p=e[Or],v=e.each,m=f.asc,y=f[Er];return s[Ut]({type:"visualMap",dependencies:[pn],dataBound:[-(1/0),1/0],stateList:["inRange","outOfRange"],layoutMode:{type:"box",ignoreSize:!0},defaultOption:{show:!0,zlevel:0,z:4,min:0,max:200,dimension:null,inRange:null,outOfRange:null,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",seriesIndex:null,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,color:["#bf444c","#d88273","#f6efa6"],formatter:null,text:null,textStyle:{color:"#333"}},init:function(t,e,n){this._autoSeriesIndex=!1,this._dataExtent,this.controllerVisuals={},this.targetVisuals={},this[i],this.itemSize,this[yn](t,n),this.doMergeOption({},!0)},mergeOption:function(t){this[g](mn,arguments),this.doMergeOption(t,!1)},doMergeOption:function(t,e){var n=this[Un];o[ge]||(n.realtime=!1),this[i]=this[tr](Qn),this.resetItemSize(),this.completeVisualOption()},formatValueText:function(t,i){function n(t){return t===l[0]?"min":t===l[1]?"max":(+t)[Pr](s)}var r,a,o=this[Un],s=o.precision,l=this.dataBound,u=o[Dn];return e[Or](t)&&(t=t.slice(),r=!0),a=i?t:r?[n(t[0]),n(t[1])]:n(t),e[fn](u)?u[Nr]("{value}",r?a[0]:a)[Nr]("{value2}",r?a[1]:a):e.isFunction(u)?r?u(t[0],t[1]):u(t):r?t[0]===l[0]?"< "+a[1]:t[1]===l[1]?"> "+a[0]:a[0]+" - "+a[1]:a},resetTargetSeries:function(t,e){var i=this[Un],n=this._autoSeriesIndex=null==(e?i:t)[Nn];i[Nn]=n?[]:l[Hn](i[Nn]),n&&this[er][he](function(t,e){var n=t[En]();"list"===n.type&&i[Nn].push(e)})},resetExtent:function(){var t=this[Un],e=m([t.min,t.max]);this._dataExtent=e},getDataDimension:function(t){var e=this[Un].dimension;return null!=e?e:t[en][jr]-1},getExtent:function(){return this._dataExtent.slice()},resetVisual:function(t){function e(e,n){v(this.stateList,function(r){var a=n[r]||(n[r]={}),o=this[Un][e][r]||{};v(o,function(e,n){if(c.isValidType(n)){var o={type:n,dataExtent:i,visual:e};t&&t.call(this,o,r),a[n]=new c(o)}},this)},this)}var i=this[lt]();e.call(this,"controller",this.controllerVisuals),e.call(this,Zi,this.targetVisuals)},completeVisualOption:function(){function t(t){p(r.color)&&!t.inRange&&(t.inRange={color:r.color.slice()[a]()}),v(this.stateList,function(i){var n=t[i];if(e[fn](n)){var r=u.get(n,"active",f);r?(t[i]={},t[i][n]=r):delete t[i]}},this)}function i(t,e,i){var n=t[e],r=t[i];n&&!r&&(r=t[i]={},v(n,function(t,e){var i=u.get(e,"inactive",f);c.isValidType(e)&&i&&(r[e]=i)}))}function n(t){var i=(t.inRange||{})[pt]||(t.outOfRange||{})[pt],n=(t.inRange||{})[vt]||(t.outOfRange||{})[vt],r=this.get("inactiveColor");v(this.stateList,function(a){var o=this.itemSize,s=t[a];s||(s=t[a]={color:f?r:[r]}),s[pt]||(s[pt]=i&&e.clone(i)||(f?"roundRect":["roundRect"])),s[vt]||(s[vt]=n&&e.clone(n)||(f?o[0]:[o[0],o[0]])),s[pt]=h(s[pt],function(t){return"none"===t||"square"===t?"roundRect":t});var l=s[vt];if(l){var u=-(1/0);d(l,function(t){t>u&&(u=t)}),s[vt]=h(l,function(t){return y(t,[0,u],[0,o[0]],!0)})}},this)}var r=this[Un],o={inRange:r.inRange,outOfRange:r.outOfRange},s=r[Zi]||(r[Zi]={}),l=r.controller||(r.controller={});e.merge(s,o),e.merge(l,o);var f=this.isCategory();t.call(this,s),t.call(this,l),i.call(this,s,"inRange","outOfRange"),i.call(this,s,"outOfRange","inRange"),n.call(this,l)},eachTargetSeries:function(t,i){e.each(this[Un][Nn],function(e){t.call(i,this[er].getSeriesByIndex(e))},this)},isCategory:function(){return!!this[Un][r]},resetItemSize:function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},setSelected:e.noop,getValueState:e.noop})}),e("echarts/component/visualMap/ContinuousModel",[Qr,"./VisualMapModel",Kr,yt],function(t){var e=t("./VisualMapModel"),i=t(Kr),n=t(yt),r=[20,140];return e[Cr]({type:"visualMap.continuous",defaultOption:{handlePosition:"auto",calculable:!1,range:[-(1/0),1/0],hoverLink:!0,realtime:!0,itemWidth:null,itemHeight:null},doMergeOption:function(t,e){this[g]("doMergeOption",arguments),this.resetTargetSeries(t,e),this.resetExtent(),this.resetVisual(function(t){t.mappingMethod=Ni}),this._resetRange()},resetItemSize:function(){e[Jr].resetItemSize.apply(this,arguments);var t=this.itemSize;this._orient===Sn&&t[a](),(null==t[0]||isNaN(t[0]))&&(t[0]=r[0]),(null==t[1]||isNaN(t[1]))&&(t[1]=r[1])},_resetRange:function(){var t=this[lt](),e=this[Un].range;e[0]>e[1]&&e[a](),e[0]=Math.max(e[0],t[0]),e[1]=Math.min(e[1],t[1])},completeVisualOption:function(){e[Jr].completeVisualOption.apply(this,arguments),i.each(this.stateList,function(t){var e=this[Un].controller[t][vt];e&&e[0]!==e[1]&&(e[0]=0)},this)},setSelected:function(t){this[Un].range=t.slice(),this._resetRange()},getSelected:function(){var t=this[lt](),e=n.asc((this.get("range")||[]).slice());return e[0]>t[1]&&(e[0]=t[1]),e[1]>t[1]&&(e[1]=t[1]),e[0]<t[0]&&(e[0]=t[0]),e[1]<t[0]&&(e[1]=t[0]),e},getValueState:function(t){var e=this[Un].range,i=this[lt]();return(e[0]<=i[0]||e[0]<=t)&&(e[1]>=i[1]||t<=e[1])?"inRange":"outOfRange"}})}),e("echarts/component/visualMap/VisualMapView",[Qr,T,Kr,xt,v,V,n],function(t){var e=t(T),i=t(Kr),r=t(xt),a=t(v),o=t(V),s=t(n);return e[Wt]({type:"visualMap",autoPositionValues:{left:1,right:1,top:1,bottom:1},init:function(t,e){this[er]=t,this.api=e,this.visualMapModel,this._updatableShapes={}},render:function(t,e,i,n){return this.visualMapModel=t,t.get("show")===!1?void this.group[Ai]():void this.doRender.apply(this,arguments)},renderBackground:function(t){var e=this.visualMapModel,i=a[bn](e.get(p)||0),n=t[Jn]();t.add(new r.Rect({z2:-1,silent:!0,shape:{x:n.x-i[3],y:n.y-i[0],width:n.width+i[3]+i[1],height:n[ur]+i[0]+i[2]},style:{fill:e.get(xe),stroke:e.get(Yn),lineWidth:e.get(Xn)}}))},getControllerVisual:function(t,e,n){function r(t){return h[t]}function a(t,e){h[t]=e}var o=this.visualMapModel,l=i[Or](t);if(l&&(!e||"color"!==n))throw new Error(t);var u=o.controllerVisuals[e||o.getValueState(t)],c=o.get("contentColor"),h={symbol:o.get("itemSymbol"),color:l?[{color:c,offset:0},{color:c,offset:1}]:c},d=s.prepareVisualTypes(u);return i.each(d,function(e){var i=u[e];(!n||s.isInVisualCluster(e,n))&&i&&i.applyVisual(t,r,a)}),h},positionGroup:function(t){var e=this.visualMapModel,i=this.api;o[xn](t,e[P](),{width:i[cn](),height:i[un]()})},doRender:i.noop})}),e("echarts/component/visualMap/helper",[Qr,V],function(t){var e=t(V),i={getItemAlign:function(t,i,n){var r=t[Un],a=r.align;if(null!=a&&"auto"!==a)return a;for(var o={width:i[cn](),height:i[un]()},s=r[f]===Sn?1:0,l=[["left","right","width"],["top",Ir,ur]],u=l[s],c=[0,null,10],h={},d=0;3>d;d++)h[l[1-s][d]]=c[d],h[u[d]]=2===d?n[0]:r[u[d]];var v=[["x","width",3],["y",ur,0]][s],m=e[wn](h,o,r[p]);return u[(m[_n][v[2]]||0)+m[v[0]]+.5*m[v[1]]<.5*o[v[1]]?0:1]}};return i}),e("echarts/component/visualMap/ContinuousView",[Qr,"./VisualMapView",xt,Kr,yt,"../helper/sliderMove","zrender/graphic/LinearGradient","./helper"],function(t){function e(t,e,i){return new a[$e]({shape:{points:t},draggable:!!e,cursor:i,drift:e})}function n(t,e){return 0===t?[[0,0],[e,0],[e,-e]]:[[0,0],[e,0],[e,e]]}var r=t("./VisualMapView"),a=t(xt),o=t(Kr),s=t(yt),l=t("../helper/sliderMove"),u=s[Er],c=t("zrender/graphic/LinearGradient"),h=t("./helper"),d=o.each,p=r[Cr]({type:"visualMap.continuous",init:function(){r[Jr].init.apply(this,arguments),this._shapes={},this._dataInterval=[],this._handleEnds=[],this._orient,this._useHandle},doRender:function(t,e,i,n){n&&"selectDataRange"===n.type&&n.from===this.uid?this._updateView():this._buildView()},_buildView:function(){this.group[Ai]();var t=this.visualMapModel,e=this.group;this._orient=t.get(f),this._useHandle=t.get("calculable"),this._resetInterval(),this._renderBar(e);var i=t.get("text");this._renderEndsText(e,i,0),this._renderEndsText(e,i,1),this._updateView(!0),this.renderBackground(e),this._updateView(),this[xn](e)},_renderEndsText:function(t,e,n){if(e){var r=e[1-n];r=null!=r?r+"":"";var o=this.visualMapModel,s=o.get("textGap"),l=o.itemSize,u=this._shapes.barGroup,c=this._applyTransform([l[0]/2,0===n?-s:l[1]+s],u),h=this._applyTransform(0===n?Ir:"top",u),d=this._orient,f=this.visualMapModel[i];this.group.add(new a.Text({style:{x:c[0],y:c[1],textBaseline:d===Sn?zr:h,textAlign:d===Sn?h:Vr,text:r,textFont:f[Kn](),fill:f[Ge]()}}))}},_renderBar:function(t){var n=this.visualMapModel,r=this._shapes,a=n.itemSize,s=this._orient,l=this._useHandle,u=h.getItemAlign(n,this.api,a),c=r.barGroup=this._createBarGroup(u);c.add(r.outOfRange=e()),c.add(r.inRange=e(null,o.bind(this._modifyHandle,this,"all"),l?"move":null));var d=n[i].getTextRect("国"),f=Math.max(d.width,d[ur]);l&&(r.handleGroups=[],r.handleThumbs=[],r.handleLabels=[],r.handleLabelPoints=[],this._createHandle(c,0,a,f,s,u),this._createHandle(c,1,a,f,s,u)),t.add(c)},_createHandle:function(t,r,s,l,u){var c=new a.Group({position:[s[0],0]}),h=e(n(r,l),o.bind(this._modifyHandle,this,r),"move");c.add(h);var d={x:u===Sn?l/2:1.5*l,y:u===Sn?0===r?-(1.5*l):1.5*l:0===r?-l/2:l/2},f=this.visualMapModel[i],p=new a.Text({silent:!0,style:{x:0,y:0,text:"",textBaseline:"middle",textFont:f[Kn](),fill:f[Ge]()}});this.group.add(p);var v=this._shapes;v.handleThumbs[r]=h,v.handleGroups[r]=c,v.handleLabelPoints[r]=d,v.handleLabels[r]=p,t.add(c)},_modifyHandle:function(t,e,i){if(this._useHandle){var n=this._applyTransform([e,i],this._shapes.barGroup,!0);this._updateInterval(t,n[1]),this.api[ln]({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()})}},_resetInterval:function(){var t=this.visualMapModel,e=this._dataInterval=t.getSelected();this._handleEnds=u(e,t[lt](),[0,t.itemSize[1]],!0)},_updateInterval:function(t,e){e=e||0;var i=this.visualMapModel,n=this._handleEnds;l(e,n,[0,i.itemSize[1]],"all"===t?"rigid":"push",t),this._dataInterval=u(n,[0,i.itemSize[1]],i[lt](),!0)},_updateView:function(t){var e=this.visualMapModel,i=e[lt](),n=this._shapes,r=this._dataInterval,a=[0,e.itemSize[1]],o=t?a:this._handleEnds,s=this._createBarVisual(r,i,o,"inRange"),l=this._createBarVisual(i,i,a,"outOfRange");n.inRange[Ue]("fill",s.barColor)[ai](ti,s.barPoints),n.outOfRange[Ue]("fill",l.barColor)[ai](ti,l.barPoints),this._useHandle&&d([0,1],function(t){n.handleThumbs[t][Ue]("fill",s.handlesColor[t]),n.handleLabels[t][Ue]({text:e.formatValueText(r[t]),textAlign:this._applyTransform(this._orient===Sn?0===t?Ir:"top":"left",n.barGroup)})},this),this._updateHandlePosition(o)},_createBarVisual:function(t,e,i,n){var r=this.getControllerVisual(t,n,"color").color,a=[this.getControllerVisual(t[0],n,vt)[vt],this.getControllerVisual(t[1],n,vt)[vt]],o=this._createBarPoints(i,a);return{barColor:new c(0,0,1,1,r),barPoints:o,handlesColor:[r[0].color,r[r[jr]-1].color]}},_createBarPoints:function(t,e){var i=this.visualMapModel.itemSize;return[[i[0]-e[0],t[0]],[i[0],t[0]],[i[0],t[1]],[i[0]-e[1],t[1]]]},_createBarGroup:function(t){var e=this._orient,i=this.visualMapModel.get(et);return new a.Group(e!==Sn||i?e===Sn&&i?{scale:t===Ir?[-1,1]:[1,1],rotation:-Math.PI/2}:e!==Mn||i?{scale:"left"===t?[1,1]:[-1,1]}:{scale:"left"===t?[1,-1]:[-1,-1]}:{scale:t===Ir?[1,1]:[-1,1],rotation:Math.PI/2})},_updateHandlePosition:function(t){if(this._useHandle){var e=this._shapes;d([0,1],function(i){var n=e.handleGroups[i];n[Cn][1]=t[i];var r=e.handleLabelPoints[i],o=a[cr]([r.x,r.y],a.getTransform(n,this.group));e.handleLabels[i][Ue]({x:o[0],y:o[1]})},this)}},_applyTransform:function(t,e,i){var n=a.getTransform(e,this.group);return a[o[Or](t)?cr:"transformDirection"](t,n,i)}});return p}),e("echarts/component/visualMap/visualMapAction",[Qr,T],function(t){var e=t(T),i={type:"selectDataRange",event:"dataRangeSelected",update:"update"};e[$t](i,function(t,e){e[ie]({mainType:"visualMap",query:t},function(e){e.setSelected(t[y])})})}),e("echarts/component/visualMapContinuous",[Qr,K,"./visualMap/preprocessor","./visualMap/typeDefaulter","./visualMap/visualCoding","./visualMap/ContinuousModel","./visualMap/ContinuousView","./visualMap/visualMapAction"],function(t){t(K)[Jt](t("./visualMap/preprocessor")),t("./visualMap/typeDefaulter"),t("./visualMap/visualCoding"),t("./visualMap/ContinuousModel"),t("./visualMap/ContinuousView"),t("./visualMap/visualMapAction")}),e("echarts/component/visualMap/PiecewiseModel",[Qr,"./VisualMapModel",Kr,n],function(t){function e(t,e){var i=t[et];(t[f]===Mn?!i:i)&&e[a]()}var i=t("./VisualMapModel"),o=t(Kr),s=t(n),l=i[Cr]({type:"visualMap.piecewise",defaultOption:{selected:null,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieceList:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10},doMergeOption:function(t,e){this[g]("doMergeOption",arguments),this._pieceList=[],this.resetTargetSeries(t,e),this.resetExtent();var i=this._mode=this._decideMode();u[this._mode].call(this),this._resetSelected(t,e);var n=this[Un][r];this.resetVisual(function(t,e){i===r?(t.mappingMethod=At,t[r]=o.clone(n)):(t.mappingMethod="piecewise",t.pieceList=o.map(this._pieceList,function(t){var t=o.clone(t);return"inRange"!==e&&(t.visual=null),t}));
})},_resetSelected:function(t,e){var i=this[Un],n=this._pieceList,r=(e?i:t)[y]||{};if(i[y]=r,o.each(n,function(t,e){var i=this.getSelectedMapKey(t);i in r||(r[i]=!0)},this),i[_]===x){var a=!1;o.each(n,function(t,e){var i=this.getSelectedMapKey(t);r[i]&&(a?r[i]=!1:a=!0)},this)}},getSelectedMapKey:function(t){return this._mode===r?t.value+"":t.index+""},getPieceList:function(){return this._pieceList},_decideMode:function(){var t=this[Un];return t.pieces&&t.pieces[jr]>0?"pieces":this[Un][r]?r:F},setSelected:function(t){this[Un][y]=o.clone(t)},getValueState:function(t){var e=this._pieceList,i=s.findPieceIndex(t,e);return null!=i&&this[Un][y][this.getSelectedMapKey(e[i])]?"inRange":"outOfRange"}}),u={splitNumber:function(){var t=this[Un],e=t.precision,i=this[lt](),n=t[F];n=Math.max(parseInt(n,10),1),t[F]=n;for(var r=(i[1]-i[0])/n;+r[Pr](e)!==r&&5>e;)e++;t.precision=e,r=+r[Pr](e);for(var a=0,o=i[0];n>a;a++,o+=r){var s=a===n-1?i[1]:o+r;this._pieceList.push({text:this.formatValueText([o,s]),index:a,interval:[o,s]})}},categories:function(){var t=this[Un];o.each(t[r],function(t){this._pieceList.push({text:this.formatValueText(t,!0),value:t})},this),e(t,this._pieceList)},pieces:function(){var t=this[Un];o.each(t.pieces,function(t,e){o[Ln](t)||(t={value:t});var i,n={text:"",index:e};if(null!=t.label&&(n.text=t.label,i=!0),t.hasOwnProperty("value"))n.value=t.value,i||(n.text=this.formatValueText(n.value));else{var r=t.min,a=t.max;null==r&&(r=-(1/0)),null==a&&(a=1/0),r===a&&(n.value=r),n[Z]=[r,a],i||(n.text=this.formatValueText([r,a]))}n.visual=s.retrieveVisuals(t),this._pieceList.push(n)},this),e(t,this._pieceList)}};return l}),e("echarts/component/visualMap/PiecewiseView",[Qr,"./VisualMapView",Kr,xt,_t,V,"./helper"],function(t){var e=t("./VisualMapView"),n=t(Kr),r=t(xt),o=t(_t),s=t(V),l=t("./helper"),u=e[Cr]({type:"visualMap.piecewise",doRender:function(){function t(t){var i=new r.Group;i.onclick=n.bind(this._onItemClick,this,t.piece),this._createItemSymbol(i,t.piece,[0,0,p[0],p[1]]),m&&i.add(new r.Text({style:{x:"right"===d?-o:p[0]+o,y:p[1]/2,text:t.piece.text,textBaseline:"middle",textAlign:d,textFont:u,fill:c}})),e.add(i)}var e=this.group;e[Ai]();var a=this.visualMapModel,o=a.get("textGap"),l=a[i],u=l[Kn](),c=l[Ge](),d=this._getItemAlign(),p=a.itemSize,v=this._getViewData(),m=!v.endsText,g=!m;g&&this._renderEndsText(e,v.endsText[0],p),n.each(v.pieceList,t,this),g&&this._renderEndsText(e,v.endsText[1],p),s.box(a.get(f),e,a.get(h)),this.renderBackground(e),this[xn](e)},_getItemAlign:function(){var t=this.visualMapModel,e=t[Un];if(e[f]===Mn)return l.getItemAlign(t,this.api,t.itemSize);var i=e.align;return i&&"auto"!==i||(i="left"),i},_renderEndsText:function(t,e,n){if(e){var a=new r.Group,o=this.visualMapModel[i];a.add(new r.Text({style:{x:n[0]/2,y:n[1]/2,textBaseline:"middle",textAlign:"center",text:e,textFont:o[Kn](),fill:o[Ge]()}})),t.add(a)}},_getViewData:function(){var t=this.visualMapModel,e=n.map(t.getPieceList(),function(t,e){return{piece:t,index:e}}),i=t.get("text"),r=t.get(f),o=t.get(et);return(r===Sn?o:!o)?e[a]():i&&(i=i.slice()[a]()),{pieceList:e,endsText:i}},_createItemSymbol:function(t,e,i){var n;if(this.visualMapModel.isCategory())n=e.value;else if(null!=e.value)n=e.value;else{var r=e[Z]||[];n=(r[0]+r[1])/2}var a=this.getControllerVisual(n);t.add(o[mt](a[pt],i[0],i[1],i[2],i[3],a.color))},_onItemClick:function(t){var e=this.visualMapModel,i=e[Un],r=n.clone(i[y]),a=e.getSelectedMapKey(t);i[_]===x?(r[a]=!0,n.each(r,function(t,e){r[e]=e===a})):r[a]=!r[a],this.api[ln]({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:r})}});return u}),e("echarts/component/visualMapPiecewise",[Qr,K,"./visualMap/preprocessor","./visualMap/typeDefaulter","./visualMap/visualCoding","./visualMap/PiecewiseModel","./visualMap/PiecewiseView","./visualMap/visualMapAction"],function(t){t(K)[Jt](t("./visualMap/preprocessor")),t("./visualMap/typeDefaulter"),t("./visualMap/visualCoding"),t("./visualMap/PiecewiseModel"),t("./visualMap/PiecewiseView"),t("./visualMap/visualMapAction")}),e("echarts/component/visualMap",[Qr,"./visualMapContinuous","./visualMapPiecewise"],function(t){t("./visualMapContinuous"),t("./visualMapPiecewise")}),e("echarts/component/marker/MarkPointModel",[Qr,Tt,T],function(t){var e=t(Tt),i=t(T)[Ut]({type:"markPoint",dependencies:[pn,"grid","polar"],init:function(t,e,i,n){this[yn](t,i),this[mn](t,i,n.createdBySelf,!0)},mergeOption:function(t,n,r,a){r||n[he](function(t){var r=t.get(le),o=t.markPointModel;if(!r||!r.data)return void(t.markPointModel=null);if(o)o[mn](r,n,!0);else{a&&e[Fn](r.label,[Cn,"show",Qn,fr,Dn]);var s={seriesIndex:t[Nn],name:t.name,createdBySelf:!0};o=new i(r,this,n,s)}t.markPointModel=o},this)},defaultOption:{zlevel:0,z:5,symbol:"pin",symbolSize:50,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"inside"},emphasis:{show:!0}},itemStyle:{normal:{borderWidth:2},emphasis:{}}}});return i}),e("echarts/component/marker/markerHelper",[Qr,Kr,yt],function(t){function e(t,e,i){var n=-1;do n=Math.max(r.getPrecision(t.get(e,i)),n),t=t.stackedOn;while(t);return n}function i(t,i,n,r,a,o){var s=[],l=d(i,r,t),u=i.indexOfNearest(r,l,!0);s[a]=i.get(n,u,!0),s[o]=i.get(r,u,!0);var c=e(i,r,u);return c>=0&&(s[o]=+s[o][Pr](c)),s}var n=t(Kr),r=t(yt),a=n[Hr],o=n.curry,s={min:o(i,"min"),max:o(i,"max"),average:o(i,"average")},l=function(t,e){var i=t[En](),r=t[nn];if((isNaN(e.x)||isNaN(e.y))&&!n[Or](e.coord)&&r){var o=u(e,i,r,t);if(e=n.clone(e),e.type&&s[e.type]&&o.baseAxis&&o.valueAxis){var l=r[en],c=a(l,o.baseAxis.dim),h=a(l,o.valueAxis.dim);e.coord=s[e.type](i,o.baseDataDim,o.valueDataDim,c,h),e.value=e.coord[h]}else e.coord=[null!=e.xAxis?e.xAxis:e.radiusAxis,null!=e.yAxis?e.yAxis:e.angleAxis]}return e},u=function(t,e,i,n){var r={};return null!=t.valueIndex||null!=t.valueDim?(r.valueDataDim=null!=t.valueIndex?e[Ht](t.valueIndex):t.valueDim,r.valueAxis=i[it](n.getCoordDimensionInfo(r.valueDataDim).name),r.baseAxis=i[ut](r.valueAxis),r.baseDataDim=n[L](r.baseAxis.dim)[0]):(r.baseAxis=n[tn](),r.valueAxis=i[ut](r.baseAxis),r.baseDataDim=n[L](r.baseAxis.dim)[0],r.valueDataDim=n[L](r.valueAxis.dim)[0]),r},c=function(t,e){return t&&e.coord&&(null==e.x||null==e.y)?t.containData(e.coord):!0},h=function(t,e,i,n){return 2>n?t.coord&&t.coord[n]:void t.value},d=function(t,e,i){return"average"===i?t[Bt](e,!0)/t.count():t[Gt](e,!0)["max"===i?1:0]};return{dataTransform:l,dataFilter:c,dimValueGetter:h,getAxisInfo:u,numCalculate:d}}),e("echarts/component/marker/MarkPointView",[Qr,"../../chart/helper/SymbolDraw",Kr,v,Tt,yt,Lt,"./markerHelper",T],function(t){function e(t,e,i){var r=e[En](),a=(r[en],new u(e.getCoordDimensionInfo(),i));return t&&a[Ft](n[$r](n.map(i.get("data"),n.curry(c.dataTransform,e)),n.curry(c.dataFilter,t)),null,c.dimValueGetter),a}var i=t("../../chart/helper/SymbolDraw"),n=t(Kr),r=t(v),a=t(Tt),o=t(yt),s=r[rn],l=r[an],u=t(Lt),c=t("./markerHelper"),h={getRawDataArray:function(){return this[Un].data},formatTooltip:function(t){var e=this[En](),i=this[Rn](t),r=n[Or](i)?n.map(i,s).join(", "):s(i),a=e[zn](t);return this.name+Qi+((a?l(a)+" : ":"")+r)},getData:function(){return this._data},setData:function(t){this._data=t}};n[ir](h,a.dataFormatMixin),t(T)[Wt]({type:"markPoint",init:function(){this._symbolDrawMap={}},render:function(t,e,i){var n=this._symbolDrawMap;for(var r in n)n[r].__keep=!1;e[he](function(t){var e=t.markPointModel;e&&this._renderSeriesMP(t,e,i)},this);for(var r in n)n[r].__keep||(n[r][Pi](),this.group[Pi](n[r].group))},_renderSeriesMP:function(t,r,a){var s=t[nn],l=t.name,u=t[En](),c=this._symbolDrawMap,d=c[l];d||(d=c[l]=new i);var f=e(s,t,r),p=s&&s[en];n.mixin(r,h),r[ri](f),f.each(function(e){var i,n=f[In](e),l=n[br]("x"),c=n[br]("y");if(null!=l&&null!=c)i=[o[Rr](l,a[cn]()),o[Rr](c,a[un]())];else if(t.getMarkerPosition)i=t.getMarkerPosition(f[Zt](f[en],e));else if(s){var h=f.get(p[0],e),d=f.get(p[1],e);i=s[st]([h,d])}f[It](e,i);var v=n[br](vt);typeof v===Br&&(v=v(r[Rn](e),r[Pn](e))),f[fe](e,{symbolSize:v,color:n.get(re)||u[Ot]("color"),symbol:n[br](pt)})}),d[gt](f),this.group.add(d.group),f[xi](function(t){t[ki](function(t){t[Qt]=r})}),d.__keep=!0}})}),e("echarts/component/markPoint",[Qr,"./marker/MarkPointModel","./marker/MarkPointView",K],function(t){t("./marker/MarkPointModel"),t("./marker/MarkPointView"),t(K)[Jt](function(t){t[le]=t[le]||{}})}),e("echarts/component/marker/MarkLineModel",[Qr,Tt,T],function(t){var e=t(Tt),i=t(T)[Ut]({type:"markLine",dependencies:[pn,"grid","polar"],init:function(t,e,i,n){this[yn](t,i),this[mn](t,i,n.createdBySelf,!0)},mergeOption:function(t,n,r,a){r||n[he](function(t){var r=t.get("markLine"),o=t.markLineModel;if(!r||!r.data)return void(t.markLineModel=null);if(o)o[mn](r,n,!0);else{a&&e[Fn](r.label,[Cn,"show",Qn,fr,Dn]);var s={seriesIndex:t[Nn],name:t.name,createdBySelf:!0};o=new i(r,this,n,s)}t.markLineModel=o},this)},defaultOption:{zlevel:0,z:5,symbol:[ft,"arrow"],symbolSize:[8,16],precision:2,tooltip:{trigger:"item"},label:{normal:{show:!0,position:"end"},emphasis:{show:!0}},lineStyle:{normal:{type:"dashed"},emphasis:{width:3}},animationEasing:"linear"}});return i}),e("echarts/component/marker/MarkLineView",[Qr,Kr,Lt,v,Tt,yt,"./markerHelper","../../chart/helper/LineDraw",T],function(t){function e(t,e){return c.dataFilter(t,e[0])&&c.dataFilter(t,e[1])}function i(t,i,a){var o=new r(i.getCoordDimensionInfo(),a),s=new r(i.getCoordDimensionInfo(),a),l=new r([],a);if(t){var u=n[$r](n.map(a.get("data"),n.curry(d,i,t,a)),n.curry(e,t));o[Ft](n.map(u,function(t){return t[0]}),null,c.dimValueGetter),s[Ft](n.map(u,function(t){return t[1]}),null,c.dimValueGetter),l[Ft](n.map(u,function(t){return t[2]}))}return{from:o,to:s,line:l}}var n=t(Kr),r=t(Lt),a=t(v),o=t(Tt),s=t(yt),l=a[rn],u=a[an],c=t("./markerHelper"),h=t("../../chart/helper/LineDraw"),d=function(t,e,i,r){var a=t[En](),o=r.type;if(!n[Or](r)&&("min"===o||"max"===o||"average"===o)){var s=c.getAxisInfo(r,a,e,t),l=s.baseAxis.dim+"Axis",u=s.valueAxis.dim+"Axis",h=s.baseAxis.scale[lt](),d=n.clone(r),f={};d.type=null,d[l]=h[0],f[l]=h[1];var p=c.numCalculate(a,s.valueDataDim,o);p=s.valueAxis[E](s.valueAxis[N](p));var v=i.get("precision");v>=0&&(p=+p[Pr](v)),d[u]=f[u]=p,r=[d,f,{type:o,value:p}]}return r=[c.dataTransform(t,r[0]),c.dataTransform(t,r[1]),n[Cr]({},r[2])],n.merge(r[2],r[0]),n.merge(r[2],r[1]),r},f={formatTooltip:function(t){var e=this._data,i=this[Rn](t),r=n[Or](i)?n.map(i,l).join(", "):l(i),a=e[zn](t);return this.name+Qi+((a?u(a)+" : ":"")+r)},getRawDataArray:function(){return this[Un].data},getData:function(){return this._data},setData:function(t){this._data=t}};n[ir](f,o.dataFormatMixin),t(T)[Wt]({type:"markLine",init:function(){this._markLineMap={}},render:function(t,e,i){var n=this._markLineMap;for(var r in n)n[r].__keep=!1;e[he](function(t){var n=t.markLineModel;n&&this._renderSeriesML(t,n,e,i)},this);for(var r in n)n[r].__keep||this.group[Pi](n[r].group)},_renderSeriesML:function(t,e,r,a){function o(e,i,n){var r,o=e[In](i),u=o.get("x"),h=o.get("y");if(null!=u&&null!=h)r=[s[Rr](u,a[cn]()),s[Rr](h,a[un]())];else if(t.getMarkerPosition)r=t.getMarkerPosition(e[Zt](e[en],i));else{var d=e.get(m[0],i),f=e.get(m[1],i);r=l[st]([d,f])}e[It](i,r),e[fe](i,{symbolSize:o.get(vt)||w[n?0:1],symbol:o.get(pt,!0)||_[n?0:1],color:o.get(re)||c[Ot]("color")})}var l=t[nn],u=t.name,c=t[En](),d=this._markLineMap,p=d[u];p||(p=d[u]=new h),this.group.add(p.group);var v=i(l,t,e),m=l[en],g=v.from,y=v.to,x=v.line;n[Cr](e,f),e[ri](x);var _=e.get(pt),w=e.get(vt);n[Or](_)||(_=[_,_]),typeof w===Zr&&(w=[w,w]),v.from.each(function(t){o(g,t,!0),o(y,t)}),x.each(function(t){var e=x[In](t).get("lineStyle.normal.color");x[fe](t,{color:e||g[Pt](t,"color")}),x[It](t,[g[zt](t),y[zt](t)])}),p[gt](x,g,y),v.line[xi](function(t,i){t[ki](function(t){t[Qt]=e})}),p.__keep=!0}})}),e("echarts/component/markLine",[Qr,"./marker/MarkLineModel","./marker/MarkLineView",K],function(t){t("./marker/MarkLineModel"),t("./marker/MarkLineView"),t(K)[Jt](function(t){t.markLine=t.markLine||{}})}),e("echarts/component/timeline/preprocessor",[Qr,Kr],function(t){function e(t){var e=t.type,a={number:"value",time:"time"};if(a[e]&&(t.axisType=a[e],delete t.type),i(t),n(t,"controlPosition")){var o=t.controlStyle||(t.controlStyle={});n(o,Cn)||(o[Cn]=t.controlPosition),"none"!==o[Cn]||n(o,"show")||(o.show=!1,delete o[Cn]),delete t.controlPosition}r.each(t.data||[],function(t){r[Ln](t)&&!r[Or](t)&&(!n(t,"value")&&n(t,"name")&&(t.value=t.name),i(t))})}function i(t){var e=t[ue]||(t[ue]={}),i=e[Zn]||(e[Zn]={}),a=(e[Gn]||(e[Gn]={}),t.label||t.label||{}),o=a[Gn]||(a[Gn]={}),s={normal:1,emphasis:1};r.each(a,function(t,e){s[e]||n(o,e)||(o[e]=t)}),i.label&&!n(a,Zn)&&(a[Zn]=i.label,delete i.label)}function n(t,e){return t.hasOwnProperty(e)}var r=t(Kr);return function(t){var i=t&&t[vn];r[Or](i)||(i=i?[i]:[]),r.each(i,function(t){t&&e(t)})}}),e("echarts/component/timeline/typeDefaulter",[Qr,R],function(t){t(R)[kn](vn,function(){return"slider"})}),e("echarts/component/timeline/timelineAction",[Qr,T],function(t){var e=t(T);e[$t]({type:"timelineChange",event:"timelineChanged",update:"prepareAndUpdate"},function(t,e){var i=e[on](vn);i&&null!=t.currentIndex&&(i.setCurrentIndex(t.currentIndex),!i.get("loop",!0)&&i.isIndexMax()&&i.setPlayState(!1)),e[gn](vn)}),e[$t]({type:"timelinePlayChange",event:"timelinePlayChanged",update:"update"},function(t,e){var i=e[on](vn);i&&null!=t.playState&&i.setPlayState(t.playState)})}),e("echarts/component/timeline/TimelineModel",[Qr,R,Lt,Kr,Tt],function(t){var e=t(R),i=t(Lt),n=t(Kr),r=t(Tt),a=e[Cr]({type:"timeline",layoutMode:"box",defaultOption:{zlevel:0,z:4,show:!0,axisType:"time",realtime:!0,left:"20%",top:null,right:"20%",bottom:0,width:null,height:40,padding:5,controlPosition:"left",autoPlay:!1,rewind:!1,loop:!0,playInterval:2e3,currentIndex:0,itemStyle:{normal:{},emphasis:{}},label:{normal:{textStyle:{color:"#000"}},emphasis:{}},data:[]},init:function(t,e,i){this._data,this._names,this[yn](t,i),this._initData()},mergeOption:function(t){this[g](mn,arguments),this._initData()},setCurrentIndex:function(t){null==t&&(t=this[Un].currentIndex);var e=this._data.count();this[Un].loop?t=(t%e+e)%e:(t>=e&&(t=e-1),0>t&&(t=0)),this[Un].currentIndex=t},getCurrentIndex:function(){return this[Un].currentIndex},isIndexMax:function(){return this.getCurrentIndex()>=this._data.count()-1},setPlayState:function(t){this[Un].autoPlay=!!t},getPlayState:function(){return!!this[Un].autoPlay},_initData:function(){var t=this[Un],e=t.data||[],a=t.axisType,o=this._names=[];if(a===At){var s=[];n.each(e,function(t,e){var i,a=r.getDataItemValue(t);n[Ln](t)?(i=n.clone(t),i.value=e):i=e,s.push(i),n[fn](a)||null!=a&&!isNaN(a)||(a=""),o.push(a+"")}),e=s}var l={category:"ordinal",time:"time"}[a]||Zr,u=this._data=new i([{name:"value",type:l}],this);u[Ft](e,o)},getData:function(){return this._data},getCategories:function(){return this.get("axisType")===At?this._names.slice():void 0}});return a}),e("echarts/component/timeline/SliderTimelineModel",[Qr,"./TimelineModel"],function(t){var e=t("./TimelineModel");return e[Cr]({type:"timeline.slider",defaultOption:{backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,orient:"horizontal",inverse:!1,tooltip:!1,symbol:"emptyCircle",symbolSize:10,lineStyle:{show:!0,width:2,color:"#304654"},label:{position:"auto",normal:{show:!0,interval:"auto",rotate:0,textStyle:{color:"#304654"}},emphasis:{show:!0,textStyle:{color:"#c23531"}}},itemStyle:{normal:{color:"#304654",borderWidth:1},emphasis:{color:"#c23531"}},checkpointStyle:{symbol:"circle",symbolSize:13,color:"#c23531",borderWidth:5,borderColor:"rgba(194,53,49, 0.5)",animation:!0,animationDuration:300,animationEasing:"quinticInOut"},controlStyle:{show:!0,showPlayBtn:!0,showPrevBtn:!0,showNextBtn:!0,itemSize:22,itemGap:12,position:"left",playIcon:"path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",stopIcon:"path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",nextIcon:"path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",prevIcon:"path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",normal:{color:"#304654",borderColor:"#304654",borderWidth:1},emphasis:{color:"#c23531",borderColor:"#c23531",borderWidth:2}},data:[]}})}),e("echarts/component/timeline/TimelineView",[Qr,"../../view/Component"],function(t){var e=t("../../view/Component");return e[Cr]({type:"timeline"})}),e("echarts/component/timeline/TimelineAxis",[Qr,Kr,"../../coord/Axis",z],function(t){var e=t(Kr),i=t("../../coord/Axis"),n=t(z),r=function(t,e,n,r){i.call(this,t,e,n),this.type=r||"value",this._autoLabelInterval,this.model=null};return r[Jr]={constructor:r,getLabelInterval:function(){var t=this.model,i=t[tr](S),r=i.get(Z);if(null!=r&&"auto"!=r)return r;var r=this._autoLabelInterval;return r||(r=this._autoLabelInterval=n.getAxisLabelInterval(e.map(this.scale[U](),this[N],this),n[B](this,i.get(Dn)),i[tr](Qn)[Kn](),t.get(f)===Sn)),r},isLabelIgnored:function(t){if(this.type===At){var e=this.getLabelInterval();return typeof e===Br&&!e(t,this.scale[q](t))||t%(e+1)}}},e[Ar](r,i),r}),e("echarts/component/timeline/SliderTimelineView",[Qr,Kr,xt,V,"./TimelineView","./TimelineAxis",_t,z,hr,dr,yt,Tt,v],function(t){function e(t,e){return l[wn](t[P](),{width:e[cn](),height:e[un]()},t.get(p))}function i(t,e,i,n){var r=s.makePath(t.get(e)[Nr](/^path:\/\//,""),o.clone(n||{}),new y(i[0],i[1],i[2],i[3]),Vr);return r}function n(t,e,i,n,r,a){var s=t.get(pt),l=e.get("color"),u=t.get(vt),c=u/2,h=e[dt](["color",pt,vt]);return r?(r[Ue](h),r[wt](l),i.add(r),a&&a.onUpdate(r)):(r=m[mt](s,-c,-c,u,u,l),i.add(r),a&&a.onCreate(r)),n=o.merge({rectHover:!0,style:h,z2:100},n,!0),r.attr(n),r}function r(t,e,i,n,r){if(!t.dragging){var a=n[tr]("checkpointStyle"),o=i[N](n[En]().get(["value"],e));r||!a.get(Bi,!0)?t.attr({position:[o,0]}):(t[Ei](!0),t[Be]({position:[o,0]},a.get("animationDuration",!0),a.get("animationEasing",!0)))}}var o=t(Kr),s=t(xt),l=t(V),u=t("./TimelineView"),c=t("./TimelineAxis"),m=t(_t),g=t(z),y=t(hr),x=t(dr),_=t(yt),w=t(Tt),b=t(v),M=b[an],T=o.bind,k=o.each,L=Math.PI;return u[Cr]({type:"timeline.slider",init:function(t,e){this.api=e,this._axis,this._viewRect,this._timer,this._currentPointer,this._mainGroup,this._labelGroup},render:function(t,e,i,n){if(this.model=t,this.api=i,this[er]=e,this.group[Ai](),t.get("show",!0)){var r=this._layout(t,i),a=this._createGroup("mainGroup"),o=this._createGroup("labelGroup"),s=this._axis=this._createAxis(r,t);k(["AxisLine","AxisTick","Control","CurrentPointer"],function(e){this["_render"+e](r,a,s,t)},this),this._renderAxisLabel(r,o,s,t),this._position(r,t)}this._doPlayStop()},remove:function(){this._clearTimer(),this.group[Ai]()},dispose:function(){this._clearTimer()},_layout:function(t,i){var n=t.get("label.normal.position"),r=t.get(f),o=e(t,i);null==n||"auto"===n?n=r===Sn?o.y+o[ur]/2<i[un]()/2?"-":"+":o.x+o.width/2<i[cn]()/2?"+":"-":isNaN(n)&&(n={horizontal:{top:"-",bottom:"+"},vertical:{left:"-",right:"+"}}[r][n]);var s={horizontal:"center",vertical:n>=0||"+"===n?"left":"right"},l={horizontal:n>=0||"+"===n?"top":Ir,vertical:"middle"},u={horizontal:0,vertical:L/2},c=r===Mn?o[ur]:o.width,d=t[tr]("controlStyle"),p=d.get("show"),v=p?d.get("itemSize"):0,m=p?d.get(h):0,g=v+m,y=t.get("label.normal.rotate")||0;y=y*L/180;var x,_,w,b,M=d.get(Cn,!0),p=d.get("show",!0),S=p&&d.get("showPlayBtn",!0),A=p&&d.get("showPrevBtn",!0),C=p&&d.get("showNextBtn",!0),T=0,k=c;return"left"===M||M===Ir?(S&&(x=[0,0],T+=g),A&&(_=[T,0],T+=g),C&&(w=[k-v,0],k-=g)):(S&&(x=[k-v,0],k-=g),A&&(_=[0,0],T+=g),C&&(w=[k-v,0],k-=g)),b=[T,k],t.get(et)&&b[a](),{viewRect:o,mainLength:c,orient:r,rotation:u[r],labelRotation:y,labelPosOpt:n,labelAlign:s[r],labelBaseline:l[r],playPosition:x,prevBtnPosition:_,nextBtnPosition:w,axisExtent:b,controlSize:v,controlGap:m}},_position:function(t,e){function i(t){var e=t[Cn];t[Yi]=[h[0][0]-e[0],h[1][0]-e[1]]}function n(t){return[[t.x,t.x+t.width],[t.y,t.y+t[ur]]]}function r(t,e,i,n,r){t[n]+=i[n][r]-e[n][r]}var a=this._mainGroup,o=this._labelGroup,s=t.viewRect;if(t[f]===Mn){var l=x[lr](),u=s.x,c=s.y+s[ur];x[sr](l,l,[-u,-c]),x[Hi](l,l,-L/2),x[sr](l,l,[u,c]),s=s.clone(),s[cr](l)}var h=n(s),d=n(a[Jn]()),p=n(o[Jn]()),v=a[Cn],m=o[Cn];m[0]=v[0]=h[0][0];var g=t.labelPosOpt;if(isNaN(g)){var y="+"===g?0:1;r(v,d,h,1,y),r(m,p,h,1,1-y)}else{var y=g>=0?0:1;r(v,d,h,1,y),m[1]=v[1]+g}a[Cn]=v,o[Cn]=m,a[$i]=o[$i]=t[$i],i(a),i(o)},_createAxis:function(t,e){var i=e[En](),n=e.get("axisType"),r=g[G](e,n),a=i[Gt]("value");r[j](a[0],a[1]),this._customizeScale(r,i),r.niceTicks();var o=new c("value",r,t.axisExtent,n);return o.model=e,o},_customizeScale:function(t,e){t[U]=function(){return e[Et](["value"],function(t){return t})},t.getTicksLabels=function(){return o.map(this[U](),t[q],t)}},_createGroup:function(t){var e=this["_"+t]=new s.Group;return this.group.add(e),e},_renderAxisLine:function(t,e,i,n){var r=i[lt]();n.get("lineStyle.show")&&e.add(new s.Line({shape:{x1:r[0],y1:0,x2:r[1],y2:0},style:o[Cr]({lineCap:"round"},n[tr](ce)[J]()),silent:!0,z2:1}))},_renderAxisTick:function(t,e,i,r){var a=r[En](),o=i.scale[U](),l=this._prepareTooltipHostModel(a,r);k(o,function(t,r){var o=i[N](t),u=a[In](r),c=u[tr](C),h=u[tr](A),d={position:[o,0],onclick:T(this._changeTimeline,this,r)},f=n(u,c,e,d);s[We](f,h[dt]()),u.get("tooltip")?(f[bi]=r,f[Qt]=l):f[bi]=f[Qt]=null},this)},_prepareTooltipHostModel:function(t,e){var i=w[Bn]({},t,e.get("data")),n=this;return i[d]=function(t){return M(n._axis.scale[q](t))},i},_renderAxisLabel:function(t,e,i,n){var r=n[tr](S);if(r.get("show")){var a=n[En](),o=i.scale[U](),l=g[B](i,r.get(Dn)),u=i.getLabelInterval();k(o,function(n,r){if(!i.isLabelIgnored(r,u)){var o=a[In](r),c=o[tr]("label.normal.textStyle"),h=o[tr]("label.emphasis.textStyle"),d=i[N](n),f=new s.Text({style:{text:l[r],textAlign:t.labelAlign,textBaseline:t.labelBaseline,textFont:c[Kn](),fill:c[Ge]()},position:[d,0],rotation:t.labelRotation-t[$i],onclick:T(this._changeTimeline,this,r),silent:!1});e.add(f),s[We](f,h[dt]())}},this)}},_renderControl:function(t,e,n,r){function a(t,n,a,d){if(t){var f={position:t,origin:[o/2,0],rotation:d?-l:0,rectHover:!0,style:u,onclick:a},p=i(r,n,h,f);e.add(p),s[We](p,c)}}var o=t.controlSize,l=t[$i],u=r[tr]("controlStyle.normal")[dt](),c=r[tr]("controlStyle.emphasis")[dt](),h=[0,-o/2,o,o],d=r.getPlayState(),f=r.get(et,!0);a(t.nextBtnPosition,"controlStyle.nextIcon",T(this._changeTimeline,this,f?"-":"+")),a(t.prevBtnPosition,"controlStyle.prevIcon",T(this._changeTimeline,this,f?"+":"-")),a(t.playPosition,"controlStyle."+(d?"stopIcon":"playIcon"),T(this._handlePlayClick,this,!d),!0)},_renderCurrentPointer:function(t,e,i,a){var o=a[En](),s=a.getCurrentIndex(),l=o[In](s)[tr]("checkpointStyle"),u=this,c={onCreate:function(t){t[Ri]=!0,t.drift=T(u._handlePointerDrag,u),t.ondragend=T(u._handlePointerDragend,u),r(t,s,i,a,!0)},onUpdate:function(t){r(t,s,i,a)}};this._currentPointer=n(l,l,this._mainGroup,{},this._currentPointer,c)},_handlePlayClick:function(t){this._clearTimer(),this.api[ln]({type:"timelinePlayChange",playState:t,from:this.uid})},_handlePointerDrag:function(t,e,i){this._clearTimer(),this._pointerChangeTimeline([i[Pe],i[De]])},_handlePointerDragend:function(t){this._pointerChangeTimeline([t[Pe],t[De]],!0)},_pointerChangeTimeline:function(t,e){var i=this._toAxisCoord(t)[0],n=this._axis,r=_.asc(n[lt]().slice());i>r[1]&&(i=r[1]),i<r[0]&&(i=r[0]),this._currentPointer[Cn][0]=i,this._currentPointer.dirty();var a=this._findNearestTick(i),o=this.model;(e||a!==o.getCurrentIndex()&&o.get("realtime"))&&this._changeTimeline(a)},_doPlayStop:function(){function t(){var t=this.model;this._changeTimeline(t.getCurrentIndex()+(t.get("rewind",!0)?-1:1))}this._clearTimer(),this.model.getPlayState()&&(this._timer=setTimeout(T(t,this),this.model.get("playInterval")))},_toAxisCoord:function(t){var e=this._mainGroup[qi]();return s[cr](t,e,!0)},_findNearestTick:function(t){var e,i=this.model[En](),n=1/0,r=this._axis;return i.each(["value"],function(i,a){var o=r[N](i),s=Math.abs(o-t);n>s&&(n=s,e=a)}),e},_clearTimer:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)},_changeTimeline:function(t){var e=this.model.getCurrentIndex();"+"===t?t=e+1:"-"===t&&(t=e-1),this.api[ln]({type:"timelineChange",currentIndex:t,from:this.uid})}})}),e("echarts/component/timeline",[Qr,K,"./timeline/preprocessor","./timeline/typeDefaulter","./timeline/timelineAction","./timeline/SliderTimelineModel","./timeline/SliderTimelineView"],function(t){var e=t(K);e[Jt](t("./timeline/preprocessor")),t("./timeline/typeDefaulter"),t("./timeline/timelineAction"),t("./timeline/SliderTimelineModel"),t("./timeline/SliderTimelineView")}),e("echarts/component/toolbox/featureManager",[Qr],function(t){var e={};return{register:function(t,i){e[t]=i},get:function(t){return e[t]}}}),e("echarts/component/toolbox/ToolboxModel",[Qr,"./featureManager",Kr,T],function(t){var e=t("./featureManager"),i=t(Kr);t(T)[Ut]({type:"toolbox",layoutMode:{type:"box",ignoreSize:!0},mergeDefaultAndTheme:function(t){this[g](yn,arguments),i.each(this[Un].feature,function(t,n){var r=e.get(n);r&&i.merge(t,r.defaultOption)})},defaultOption:{show:!0,z:6,zlevel:0,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{normal:{borderColor:"#666",color:"none"},emphasis:{borderColor:"#3E98C5"}}}})}),e("echarts/component/toolbox/ToolboxView",[Qr,"./featureManager",Kr,xt,k,"../../data/DataDiffer","../helper/listComponent",or,T],function(t){var e=t("./featureManager"),i=t(Kr),n=t(xt),r=t(k),a=t("../../data/DataDiffer"),o=t("../helper/listComponent"),s=t(or);return t(T)[Wt]({type:"toolbox",render:function(t,l,u){function h(i,n){var a,o=g[i],s=g[n],c=v[o],h=new r(c,t,t[er]);if(o&&!s){var f=e.get(o);if(!f)return;m[o]=a=new f(h)}else{if(a=m[s],!a)return;a.model=h}return!o&&s?void(a[me]&&a[me](l,u)):!h.get("show")||a.unusable?void(a[Pi]&&a[Pi](l,u)):(d(h,a,o),h.setIconStatus=function(t,e){var i=this[Un],n=this.iconPaths;i.iconStatus=i.iconStatus||{},i.iconStatus[t]=e,n[t]&&n[t][Mi](e)},void(a[Si]&&a[Si](h,l,u)))}function d(e,r,a){var o=e[tr]("iconStyle"),s=r.getIcons?r.getIcons():e.get("icon"),c=e.get("title")||{};if(typeof s===Fr){var h=s,d=c;s={},c={},s[a]=h,c[a]=d}var v=e.iconPaths={};i.each(s,function(a,s){var h=o[tr](Gn)[dt](),d=o[tr](Zn)[dt](),m=n.makePath(a,{style:h,hoverStyle:d,rectHover:!0},{x:-p/2,y:-p/2,width:p,height:p},Vr);n[We](m),t.get("showTitle")&&(m.__title=c[s],m.on(He,function(){m[Ue]({text:c[s],textPosition:d[yi]||Ir,textFill:d.fill||d[_r]||"#000",textAlign:d[gi]||Vr})}).on(Fe,function(){m[Ue]({textFill:null})})),m[Mi](e.get("iconStatus."+s)||Gn),f.add(m),m.on("click",i.bind(r.onclick,r,l,u,s)),v[s]=m})}var f=this.group;if(f[Ai](),t.get("show")){var p=+t.get("itemSize"),v=t.get("feature")||{},m=this._features||(this._features={}),g=[];i.each(v,function(t,e){g.push(e)}),new a(this._featureNames||[],g).add(h)[Se](h)[Pi](i.curry(h,null))[ct](),this._featureNames=g,o[c](f,t,u),o.addBackground(f,t),f[Tn](function(t){var e=t.__title,i=t[qe];if(i&&e){var n=s[Jn](e,i.font),r=t[Cn][0]+f[Cn][0],a=t[Cn][1]+f[Cn][1]+p,o=!1;a+n[ur]>u[un]()&&(i[yi]="top",o=!0);var l=o?-5-n[ur]:p+8;r+n.width/2>u[cn]()?(i[yi]=["100%",l],i[gi]="right"):r-n.width/2<0&&(i[yi]=[0,l],i[gi]="left")}})}},remove:function(t,e){i.each(this._features,function(i){i[Pi]&&i[Pi](t,e)}),this.group[Ai]()},dispose:function(t,e){i.each(this._features,function(i){i[me]&&i[me](t,e)})}})}),e("echarts/component/toolbox/feature/SaveAsImage",[Qr,Oe,"../featureManager"],function(t){function e(t){this.model=t}var i=t(Oe);e.defaultOption={show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6            M29.2,45.1L29.2,0",title:"保存为图片",type:"png",name:"",excludeComponents:["toolbox"],pixelRatio:1,lang:["右键另存为图片"]},e[Jr].unusable=!i[ge];var n=e[Jr];return n.onclick=function(t,e){var i=this.model,n=i.get("name")||t.get("title.0.text")||"echarts",r=document[Ur]("a"),a=i.get("type",!0)||"png";r.download=n+"."+a,r[Zi]="_blank";var o=e.getConnectedDataURL({type:a,backgroundColor:i.get(xe,!0)||t.get(xe)||"#fff",excludeComponents:i.get("excludeComponents"),pixelRatio:i.get("pixelRatio")});if(r.href=o,typeof MouseEvent===Br){var s=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});r.dispatchEvent(s)}else{var l=i.get("lang"),u='<body style="margin:0;">                <img src="'+o+'" style="max-width:100%;" title="'+(l&&l[0]||"")+'" />            </body>',c=window.open();c.document.write(u)}},t("../featureManager")[sn]("saveAsImage",e),e}),e("echarts/component/toolbox/feature/MagicType",[Qr,Kr,"../../../echarts","../featureManager"],function(t){function e(t){this.model=t}var i=t(Kr);e.defaultOption={show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",tiled:"M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"},title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"},option:{},seriesIndex:{}};var n=e[Jr];n.getIcons=function(){var t=this.model,e=t.get("icon"),n={};return i.each(t.get("type"),function(t){e[t]&&(n[t]=e[t])}),n};var r={line:function(t,e,n,r){return"bar"===t?i.merge({id:e,type:"line",data:n.get("data"),stack:n.get("stack"),markPoint:n.get(le),markLine:n.get("markLine")},r.get("option.line")):void 0},bar:function(t,e,n,r){return"line"===t?i.merge({id:e,type:"bar",data:n.get("data"),stack:n.get("stack"),markPoint:n.get(le),markLine:n.get("markLine")},r.get("option.bar")):void 0},stack:function(t,e,i,n){return"line"===t||"bar"===t?{id:e,stack:"__ec_magicType_stack__"}:void 0},tiled:function(t,e,i,n){return"line"===t||"bar"===t?{id:e,stack:""}:void 0}},a=[["line","bar"],["stack","tiled"]];n.onclick=function(t,e,n){var o=this.model,s=o.get("seriesIndex."+n);if(r[n]){var l={series:[]},u=function(t){var e=t.subType,a=t.id,s=r[n](e,a,t,o);s&&(i[ir](s,t[Un]),l[pn].push(s))};i.each(a,function(t){i[Hr](t,n)>=0&&i.each(t,function(t){o.setIconStatus(t,Gn)})}),o.setIconStatus(n,Zn),t[ie]({mainType:"series",seriesIndex:s},u),e[ln]({type:"changeMagicType",currentType:n,newOption:l})}};var o=t("../../../echarts");return o[$t]({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},function(t,e){e[mn](t.newOption)}),t("../featureManager")[sn]("magicType",e),e}),e("echarts/component/toolbox/feature/DataView",[Qr,Kr,Re,"../featureManager","../../../echarts"],function(t){
function e(t){var e={},i=[],n=[];return t.eachRawSeries(function(t){var r=t[nn];if(!r||r.type!==D&&"polar"!==r.type)i.push(t);else{var a=r[tn]();if(a.type===At){var o=a.dim+"_"+a.index;e[o]||(e[o]={categoryAxis:a,valueAxis:r[ut](a),series:[]},n.push({axisDim:a.dim,axisIndex:a.index})),e[o][pn].push(t)}else i.push(t)}}),{seriesGroupByCategoryAxis:e,other:i,meta:n}}function i(t){var e=[];return f.each(t,function(t,i){var n=t.categoryAxis,r=t.valueAxis,a=r.dim,o=[" "][Gr](f.map(t[pn],function(t){return t.name})),s=[n.model[St]()];f.each(t[pn],function(t){s.push(t.getRawData()[Et](a,function(t){return t}))});for(var l=[o.join(m)],u=0;u<s[0][jr];u++){for(var c=[],h=0;h<s[jr];h++)c.push(s[h][u]);l.push(c.join(m))}e.push(l.join("\n"))}),e.join("\n\n"+v+"\n\n")}function n(t){return f.map(t,function(t){var e=t.getRawData(),i=[t.name],n=[];return e.each(e[en],function(){for(var t=arguments[jr],r=arguments[t-1],a=e[zn](r),o=0;t-1>o;o++)n[o]=arguments[o];i.push((a?a+m:"")+n.join(m))}),i.join("\n")}).join("\n\n"+v+"\n\n")}function a(t){var r=e(t);return{value:f[$r]([i(r.seriesGroupByCategoryAxis),n(r.other)],function(t){return t[Nr](/[\n\t\s]/g,"")}).join("\n\n"+v+"\n\n"),meta:r.meta}}function o(t){return t[Nr](/^\s\s*/,"")[Nr](/\s\s*$/,"")}function s(t){var e=t.slice(0,t[Hr]("\n"));return e[Hr](m)>=0?!0:void 0}function l(t){for(var e=t.split(/\n+/g),i=o(e.shift()).split(g),n=[],r=f.map(i,function(t){return{name:t,data:[]}}),a=0;a<e[jr];a++){var s=o(e[a]).split(g);n.push(s.shift());for(var l=0;l<s[jr];l++)r[l]&&(r[l].data[a]=s[l])}return{series:r,categories:n}}function u(t){for(var e=t.split(/\n+/g),i=o(e.shift()),n=[],r=0;r<e[jr];r++){var a,s=o(e[r]).split(g),l="",u=!1;isNaN(s[0])?(u=!0,l=s[0],s=s.slice(1),n[r]={name:l,value:[]},a=n[r].value):a=n[r]=[];for(var c=0;c<s[jr];c++)a.push(+s[c]);1===a[jr]&&(u?n[r].value=a[0]:n[r]=a[0])}return{name:i,data:n}}function c(t,e){var i=t.split(new RegExp("\n*"+v+"\n*","g")),n={series:[]};return f.each(i,function(t,i){if(s(t)){var a=l(t),o=e[i],c=o.axisDim+"Axis";o&&(n[c]=n[c]||[],n[c][o[Wn]]={data:a[r]},n[pn]=n[pn][Gr](a[pn]))}else{var a=u(t);n[pn].push(a)}}),n}function h(t){this._dom=null,this.model=t}function d(t,e){return f.map(t,function(t,i){var n=e&&e[i];return f[Ln](n)&&!f[Or](n)?(f[Ln](t)&&!f[Or](t)&&(t=t.value),f[ir]({value:t},n)):t})}var f=t(Kr),p=t(Re),v=new Array(60).join("-"),m="	",g=new RegExp("["+m+"]+","g");return h.defaultOption={show:!0,readOnly:!1,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:"数据视图",lang:["数据视图","关闭","刷新"],backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"},h[Jr].onclick=function(t,e){function i(){n.removeChild(o),x._dom=null}var n=e[hn](),r=this.model;this._dom&&n.removeChild(this._dom);var o=document[Ur]("div");o.style.cssText="position:absolute;left:5px;top:5px;bottom:5px;right:5px;",o.style[xe]=r.get(xe)||"#fff";var s=document[Ur]("h4"),l=r.get("lang")||[];s[we]=l[0]||r.get("title"),s.style.cssText="margin: 10px 20px;",s.style.color=r.get("textColor");var u=document[Ur]("textarea");u.style.cssText="display:block;width:100%;font-size:14px;line-height:1.6rem;font-family:Monaco,Consolas,Courier new,monospace",u.readOnly=r.get("readOnly"),u.style.color=r.get("textColor"),u.style[Yn]=r.get("textareaBorderColor"),u.style[xe]=r.get("textareaColor");var h=a(t);u.value=h.value;var d=h.meta,f=document[Ur]("div");f.style.cssText="position:absolute;bottom:0;left:0;right:0;";var v="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",g=document[Ur]("div"),y=document[Ur]("div");v+=";background-color:"+r.get("buttonColor"),v+=";color:"+r.get("buttonTextColor");var x=this;p.addEventListener(g,"click",i),p.addEventListener(y,"click",function(){var t;try{t=c(u.value,d)}catch(n){throw i(),new Error("Data view format error "+n)}e[ln]({type:"changeDataView",newOption:t}),i()}),g[we]=l[1],y[we]=l[2],y.style.cssText=v,g.style.cssText=v,f[_e](y),f[_e](g),p.addEventListener(u,"keydown",function(t){if(9===(t.keyCode||t.which)){var e=this.value,i=this.selectionStart,n=this.selectionEnd;this.value=e.substring(0,i)+m+e.substring(n),this.selectionStart=this.selectionEnd=i+1,p.stop(t)}}),o[_e](s),o[_e](u),o[_e](f),u.style[ur]=n[ye]-80+"px",n[_e](o),this._dom=o},h[Jr][Pi]=function(t,e){this._dom&&e[hn]().removeChild(this._dom)},h[Jr][me]=function(t,e){this[Pi](t,e)},t("../featureManager")[sn]("dataView",h),t("../../../echarts")[$t]({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},function(t,e){var i=[];f.each(t.newOption[pn],function(t){var n=e.getSeriesByName(t.name)[0];if(n){var r=n.get("data");i.push({name:t.name,data:d(t.data,r)})}else i.push(f[Cr]({type:"scatter"},t))}),e[mn](f[ir]({series:i},t.newOption))}),h}),e("echarts/component/dataZoom/history",[Qr,Kr],function(t){function e(t){var e=t[r];return e||(e=t[r]=[{}]),e}var i=t(Kr),n=i.each,r="\x00_ec_hist_store",a={push:function(t,i){var r=e(t);n(i,function(e,i){for(var n=r[jr]-1;n>=0;n--){var a=r[n];if(a[i])break}if(0>n){var o=t.queryComponents({mainType:"dataZoom",subType:"select",id:i})[0];if(o){var s=o.getPercentRange();r[0][i]={dataZoomId:i,start:s[0],end:s[1]}}}}),r.push(i)},pop:function(t){var i=e(t),r=i[i[jr]-1];i[jr]>1&&i.pop();var a={};return n(r,function(t,e){for(var n=i[jr]-1;n>=0;n--){var t=i[n][e];if(t){a[e]=t;break}}}),a},clear:function(t){t[r]=null},count:function(t){return e(t)[jr]}};return a}),e("echarts/component/dataZoom/SelectZoomModel",[Qr,"./DataZoomModel"],function(t){var e=t("./DataZoomModel");return e[Cr]({type:"dataZoom.select"})}),e("echarts/component/dataZoom/SelectZoomView",[Qr,"./DataZoomView"],function(t){return t("./DataZoomView")[Cr]({type:"dataZoom.select"})}),e("echarts/component/dataZoomSelect",[Qr,"./dataZoom/typeDefaulter","./dataZoom/DataZoomModel","./dataZoom/DataZoomView","./dataZoom/SelectZoomModel","./dataZoom/SelectZoomView","./dataZoom/dataZoomProcessor","./dataZoom/dataZoomAction"],function(t){t("./dataZoom/typeDefaulter"),t("./dataZoom/DataZoomModel"),t("./dataZoom/DataZoomView"),t("./dataZoom/SelectZoomModel"),t("./dataZoom/SelectZoomView"),t("./dataZoom/dataZoomProcessor"),t("./dataZoom/dataZoomAction")}),e("echarts/component/toolbox/feature/DataZoom",[Qr,Kr,"../../../util/number","../../helper/SelectController",hr,"zrender/container/Group","../../dataZoom/history","../../helper/interactionMutex","../../dataZoomSelect","../featureManager","../../../echarts"],function(t){function e(t){this.model=t,this._controllerGroup,this[s],this._isZoomActive}function i(t,e){var i=[{axisModel:t[it]("x").model,axisIndex:0},{axisModel:t[it]("y").model,axisIndex:0}];return i.grid=t,e[ie]({mainType:"dataZoom",subType:"select"},function(t,r){n("xAxis",i[0].axisModel,t,e)&&(i[0].dataZoomModel=t),n("yAxis",i[1].axisModel,t,e)&&(i[1].dataZoomModel=t)}),i}function n(t,e,i,n){var r=i.get(t+"Index");return null!=r&&n[on](t,r)===e}function r(t,e){var i=e.grid,n=new d(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0]);if(n[be](i[I]())){var r=i.getCartesian(e[0][Wn],e[1][Wn]),a=r.pointToData([t[0][0],t[1][0]],!0),o=r.pointToData([t[0][1],t[1][1]],!0);return[g([a[0],o[0]]),g([a[1],o[1]])]}}function a(t,e,i,n){var r=e[i],a=r.dataZoomModel;return a?{dataZoomId:a.id,startValue:t[i][0],endValue:t[i][1]}:void 0}function o(t,e){t.setIconStatus("back",p.count(e)>1?Zn:Gn)}var u=t(Kr),c=t("../../../util/number"),h=t("../../helper/SelectController"),d=t(hr),f=t("zrender/container/Group"),p=t("../../dataZoom/history"),v=t("../../helper/interactionMutex"),m=u.each,g=c.asc;t("../../dataZoomSelect");var x="\x00_ec_\x00toolbox-dataZoom_";e.defaultOption={show:!0,icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:{zoom:"区域缩放",back:"区域缩放还原"}};var _=e[Jr];_[Si]=function(t,e,i){o(t,e)},_.onclick=function(t,e,i){var n=this._controllerGroup;this._controllerGroup||(n=this._controllerGroup=new f,e.getZr().add(n)),w[i].call(this,n,this.model,t,e)},_[Pi]=function(t,e){this._disposeController(),v.release("globalPan",e.getZr())},_[me]=function(t,e){var i=e.getZr();v.release("globalPan",i),this._disposeController(),this._controllerGroup&&i[Pi](this._controllerGroup)};var w={zoom:function(t,e,i,n){var r=this._isZoomActive=!this._isZoomActive,a=n.getZr();v[r?"take":"release"]("globalPan",a),e.setIconStatus("zoom",r?Zn:Gn),r?(a.setDefaultCursorStyle("crosshair"),this._createController(t,e,i,n)):(a.setDefaultCursorStyle("default"),this._disposeController())},back:function(t,e,i,n){this._dispatchAction(p.pop(i),n)}};return _._createController=function(t,e,i,n){var r=this[s]=new h("rect",n.getZr(),{lineWidth:3,stroke:"#333",fill:"rgba(0,0,0,0.2)"});r.on("selectEnd",u.bind(this._onSelected,this,r,e,i,n)),r[l](t,!1)},_._disposeController=function(){var t=this[s];t&&(t.off(y),t[me]())},_._onSelected=function(t,e,n,o,s){if(s[jr]){var l=s[0];t[Se]();var u={};n[ie]("grid",function(t,e){var o=t[nn],s=i(o,n),c=r(l,s);if(c){var h=a(c,s,0,"x"),d=a(c,s,1,"y");h&&(u[h.dataZoomId]=h),d&&(u[d.dataZoomId]=d)}},this),p.push(n,u),this._dispatchAction(u,o)}},_._dispatchAction=function(t,e){var i=[];m(t,function(t){i.push(t)}),i[jr]&&e[ln]({type:"dataZoom",from:this.uid,batch:u.clone(i,!0)})},t("../featureManager")[sn](oe,e),t("../../../echarts")[Jt](function(t){function e(t,e){if(e){var r=t+"Index",a=e[r];null==a||u[Or](a)||(a=a===!1?[]:[a]),i(t,function(e,i){if(null==a||-1!==u[Hr](a,i)){var o={type:"select",$fromToolbox:!0,id:x+t+i};o[r]=i,n.push(o)}})}}function i(e,i){var n=t[e];u[Or](n)||(n=n?[n]:[]),m(n,i)}if(t){var n=t[oe]||(t[oe]=[]);u[Or](n)||(n=[n]);var r=t.toolbox;if(r&&(u[Or](r)&&(r=r[0]),r&&r.feature)){var a=r.feature[oe];e("xAxis",a),e("yAxis",a)}}}),e}),e("echarts/component/toolbox/feature/Restore",[Qr,"../../dataZoom/history","../featureManager","../../../echarts"],function(t){function e(t){this.model=t}var i=t("../../dataZoom/history");e.defaultOption={show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:"还原"};var n=e[Jr];return n.onclick=function(t,e,n){i.clear(t),e[ln]({type:"restore",from:this.uid})},t("../featureManager")[sn](oi,e),t("../../../echarts")[$t]({type:"restore",event:"restore",update:"prepareAndUpdate"},function(t,e){e[gn]("recreate")}),e}),e("echarts/component/toolbox",[Qr,"./toolbox/ToolboxModel","./toolbox/ToolboxView","./toolbox/feature/SaveAsImage","./toolbox/feature/MagicType","./toolbox/feature/DataView","./toolbox/feature/DataZoom","./toolbox/feature/Restore"],function(t){t("./toolbox/ToolboxModel"),t("./toolbox/ToolboxView"),t("./toolbox/feature/SaveAsImage"),t("./toolbox/feature/MagicType"),t("./toolbox/feature/DataView"),t("./toolbox/feature/DataZoom"),t("./toolbox/feature/Restore")}),e("zrender/vml/core",[Qr,"exports","module","../core/env"],function(t,e,i){if(!t("../core/env")[ge]){var n,r="urn:schemas-microsoft-com:vml",a=window,o=a.document,s=!1;try{!o.namespaces.zrvml&&o.namespaces.add("zrvml",r),n=function(t){return o[Ur]("<zrvml:"+t+' class="zrvml">')}}catch(l){n=function(t){return o[Ur]("<"+t+' xmlns="'+r+'" class="zrvml">')}}var u=function(){if(!s){s=!0;var t=o.styleSheets;t[jr]<31?o.createStyleSheet().addRule(".zrvml","behavior:url(#default#VML)"):t[0].addRule(".zrvml","behavior:url(#default#VML)")}};i.exports={doc:o,initVML:u,createNode:n}}}),e("zrender/vml/graphic",[Qr,"../core/env","../core/vector",rr,"../core/PathProxy","../tool/color","../contain/text","../graphic/mixin/RectText","../graphic/Displayable","../graphic/Image","../graphic/Text","../graphic/Path","../graphic/Gradient","./core"],function(t){if(!t("../core/env")[ge]){var e=t("../core/vector"),i=t(rr),n=t("../core/PathProxy").CMD,r=t("../tool/color"),a=t("../contain/text"),o=t("../graphic/mixin/RectText"),s=t("../graphic/Displayable"),l=t("../graphic/Image"),u=t("../graphic/Text"),c=t("../graphic/Path"),h=t("../graphic/Gradient"),d=t("./core"),f=Math.round,v=Math.sqrt,m=Math.abs,g=Math.cos,y=Math.sin,x=Math.max,_=e[cr],w=",",b="progid:DXImageTransform.Microsoft",M=21600,S=M/2,A=1e5,C=1e3,T=function(t){t.style.cssText="position:absolute;left:0;top:0;width:1px;height:1px;",t.coordsize=M+","+M,t.coordorigin="0,0"},k=function(t){return String(t)[Nr](/&/g,"&amp;")[Nr](/"/g,"&quot;")},L=function(t,e,i){return"rgb("+[t,e,i].join(",")+")"},D=function(t,e){e&&t&&e[Le]!==t&&t[_e](e)},P=function(t,e){e&&t&&e[Le]===t&&t.removeChild(e)},I=function(t,e,i){return(parseFloat(t)||0)*A+(parseFloat(e)||0)*C+i},z=function(t,e,i){var n=r.parse(e);i=+i,isNaN(i)&&(i=1),n&&(t.color=L(n[0],n[1],n[2]),t[xr]=i*n[3])},V=function(t){var e=r.parse(t);return[L(e[0],e[1],e[2]),e[3]]},R=function(t,e,i){var n=e.fill;if(null!=n)if(n instanceof h){var r,a=0,o=[0,0],s=0,l=1,u=i[Jn](),c=u.width,d=u[ur];if(n.type===Ni){r="gradient";var f=i[Xi],p=[n.x*c,n.y*d],v=[n.x2*c,n.y2*d];f&&(_(p,p,f),_(v,v,f));var m=v[0]-p[0],g=v[1]-p[1];a=180*Math.atan2(m,g)/Math.PI,0>a&&(a+=360),1e-6>a&&(a=0)}else{r="gradientradial";var p=[n.x*c,n.y*d],f=i[Xi],y=i.scale,w=c,b=d;o=[(p[0]-u.x)/w,(p[1]-u.y)/b],f&&_(p,p,f),w/=y[0]*M,b/=y[1]*M;var S=x(w,b);s=0/S,l=2*n.r/S-s}var A=n.colorStops.slice();A.sort(function(t,e){return t[Qe]-e[Qe]});for(var C=A[jr],T=[],k=[],L=0;C>L;L++){var D=A[L],P=V(D.color);k.push(D[Qe]*l+s+" "+P[0]),(0===L||L===C-1)&&T.push(P)}if(C>=2){var I=T[0][0],R=T[1][0],O=T[0][1]*e[xr],E=T[1][1]*e[xr];t.type=r,t.method="none",t.focus="100%",t.angle=a,t.color=I,t.color2=R,t.colors=k.join(","),t[xr]=E,t.opacity2=O}"radial"===r&&(t.focusposition=o.join(","))}else z(t,n,e[xr])},O=function(t,e){null!=e.lineJoin&&(t.joinstyle=e.lineJoin),null!=e.miterLimit&&(t.miterlimit=e.miterLimit*M),null!=e.lineCap&&(t.endcap=e.lineCap),null!=e.lineDash&&(t.dashstyle=e.lineDash.join(" ")),null==e[_r]||e[_r]instanceof h||z(t,e[_r],e[xr])},E=function(t,e,i,n){var r="fill"==e,a=t.getElementsByTagName(e)[0];null!=i[e]&&"none"!==i[e]&&(r||!r&&i[wr])?(t[r?"filled":"stroked"]="true",i[e]instanceof h&&P(t,a),a||(a=d.createNode(e)),r?R(a,i,n):O(a,i),D(t,a)):(t[r?"filled":"stroked"]="false",P(t,a))},N=[[],[],[]],B=function(t,e){var i,r,a,o,s,l,u=n.M,c=n.C,h=n.L,d=n.A,p=n.Q,m=[];for(o=0;o<t[jr];){switch(a=t[o++],r="",i=0,a){case u:r=" m ",i=1,s=t[o++],l=t[o++],N[0][0]=s,N[0][1]=l;break;case h:r=" l ",i=1,s=t[o++],l=t[o++],N[0][0]=s,N[0][1]=l;break;case p:case c:r=" c ",i=3;var x,b,A=t[o++],C=t[o++],T=t[o++],k=t[o++];a===p?(x=T,b=k,T=(T+2*A)/3,k=(k+2*C)/3,A=(s+2*A)/3,C=(l+2*C)/3):(x=t[o++],b=t[o++]),N[0][0]=A,N[0][1]=C,N[1][0]=T,N[1][1]=k,N[2][0]=x,N[2][1]=b,s=x,l=b;break;case d:var L=0,D=0,P=1,I=1,z=0;e&&(L=e[4],D=e[5],P=v(e[0]*e[0]+e[1]*e[1]),I=v(e[2]*e[2]+e[3]*e[3]),z=Math.atan2(-e[1]/I,e[0]/P));var V=t[o++],R=t[o++],O=t[o++],E=t[o++],B=t[o++]+z,G=t[o++]+B+z;o++;var Z=t[o++],F=V+g(B)*O,H=R+y(B)*E,A=V+g(G)*O,C=R+y(G)*E,W=Z?" wa ":" at ";m.push(W,f(((V-O)*P+L)*M-S),w,f(((R-E)*I+D)*M-S),w,f(((V+O)*P+L)*M-S),w,f(((R+E)*I+D)*M-S),w,f((F*P+L)*M-S),w,f((H*I+D)*M-S),w,f((A*P+L)*M-S),w,f((C*I+D)*M-S)),s=A,l=C;break;case n.R:var q=N[0],U=N[1];q[0]=t[o++],q[1]=t[o++],U[0]=q[0]+t[o++],U[1]=q[1]+t[o++],e&&(_(q,q,e),_(U,U,e)),q[0]=f(q[0]*M-S),U[0]=f(U[0]*M-S),q[1]=f(q[1]*M-S),U[1]=f(U[1]*M-S),m.push(" m ",q[0],w,q[1]," l ",U[0],w,q[1]," l ",U[0],w,U[1]," l ",q[0],w,U[1]);break;case n.Z:m.push(" x ")}if(i>0){m.push(r);for(var j=0;i>j;j++){var X=N[j];e&&_(X,X,e),m.push(f(X[0]*M-S),w,f(X[1]*M-S),i-1>j?w:"")}}}return m.join("")};c[Jr].brush=function(t){var e=this.style,i=this._vmlEl;i||(i=d.createNode("shape"),T(i),this._vmlEl=i),E(i,"fill",e,this),E(i,_r,e,this);var n=this[Xi],r=null!=n,a=i.getElementsByTagName(_r)[0];if(a){var o=e[wr];if(r&&!e.strokeNoScale){var s=n[0]*n[3]-n[1]*n[2];o*=v(m(s))}a.weight=o+"px"}var l=this.path;this.__dirtyPath&&(l[fi](),this[si](l,this.shape),this.__dirtyPath=!1),i.path=B(l.data,this[Xi]),i.style.zIndex=I(this[Ae],this.z,this.z2),D(t,i),e.text&&this.drawRectText(t,this[Jn]())},c[Jr].onRemoveFromStorage=function(t){P(t,this._vmlEl),this.removeRectText(t)},c[Jr].onAddToStorage=function(t){D(t,this._vmlEl),this.appendRectText(t)};var G=function(t){return typeof t===Xr&&t.tagName&&"IMG"===t.tagName[kr]()};l[Jr].brush=function(t){var e,i,n=this.style,r=n.image;if(G(r)){var a=r.src;if(a===this._imageSrc)e=this._imageWidth,i=this._imageHeight;else{var o=r.runtimeStyle,s=o.width,l=o[ur];o.width="auto",o[ur]="auto",e=r.width,i=r[ur],o.width=s,o[ur]=l,this._imageSrc=a,this._imageWidth=e,this._imageHeight=i}r=a}else r===this._imageSrc&&(e=this._imageWidth,i=this._imageHeight);if(r){var u=n.x||0,c=n.y||0,h=n.width,m=n[ur],g=n.sWidth,y=n.sHeight,M=n.sx||0,S=n.sy||0,A=g&&y,C=this._vmlEl;C||(C=d.doc[Ur]("div"),T(C),this._vmlEl=C);var k,L=C.style,P=!1,z=1,V=1;if(this[Xi]&&(k=this[Xi],z=v(k[0]*k[0]+k[1]*k[1]),V=v(k[2]*k[2]+k[3]*k[3]),P=k[1]||k[2]),P){var R=[u,c],O=[u+h,c],E=[u,c+m],N=[u+h,c+m];_(R,R,k),_(O,O,k),_(E,E,k),_(N,N,k);var B=x(R[0],O[0],E[0],N[0]),Z=x(R[1],O[1],E[1],N[1]),F=[];F.push("M11=",k[0]/z,w,"M12=",k[2]/V,w,"M21=",k[1]/z,w,"M22=",k[3]/V,w,"Dx=",f(u*z+k[4]),w,"Dy=",f(c*V+k[5])),L[p]="0 "+f(B)+"px "+f(Z)+"px 0",L[$r]=b+".Matrix("+F.join("")+", SizingMethod=clip)"}else k&&(u=u*z+k[4],c=c*V+k[5]),L[$r]="",L.left=f(u)+"px",L.top=f(c)+"px";var H=this._imageEl,W=this._cropEl;H||(H=d.doc[Ur]("div"),this._imageEl=H);var q=H.style;if(A){if(e&&i)q.width=f(z*e*h/g)+"px",q[ur]=f(V*i*m/y)+"px";else{var U=new Image,j=this;U.onload=function(){U.onload=null,e=U.width,i=U[ur],q.width=f(z*e*h/g)+"px",q[ur]=f(V*i*m/y)+"px",j._imageWidth=e,j._imageHeight=i,j._imageSrc=r},U.src=r}W||(W=d.doc[Ur]("div"),W.style.overflow="hidden",this._cropEl=W);var X=W.style;X.width=f((h+M*h/g)*z),X[ur]=f((m+S*m/y)*V),X[$r]=b+".Matrix(Dx="+-M*h/g*z+",Dy="+-S*m/y*V+")",W[Le]||C[_e](W),H[Le]!=W&&W[_e](H)}else q.width=f(z*h)+"px",q[ur]=f(V*m)+"px",C[_e](H),W&&W[Le]&&(C.removeChild(W),this._cropEl=null);var Y="",$=n[xr];1>$&&(Y+=".Alpha(opacity="+f(100*$)+") "),Y+=b+".AlphaImageLoader(src="+r+", SizingMethod=scale)",q[$r]=Y,C.style.zIndex=I(this[Ae],this.z,this.z2),D(t,C),n.text&&this.drawRectText(t,this[Jn]())}},l[Jr].onRemoveFromStorage=function(t){P(t,this._vmlEl),this._vmlEl=null,this._cropEl=null,this._imageEl=null,this.removeRectText(t)},l[Jr].onAddToStorage=function(t){D(t,this._vmlEl),this.appendRectText(t)};var Z,F=Gn,H={},W=0,q=100,U=document[Ur]("div"),j=function(t){var e=H[t];if(!e){W>q&&(W=0,H={});var i,n=U.style;try{n.font=t,i=n.fontFamily.split(",")[0]}catch(r){}e={style:n.fontStyle||F,variant:n.fontVariant||F,weight:n.fontWeight||F,size:0|parseFloat(n.fontSize||12),family:i||"Microsoft YaHei"},H[t]=e,W++}return e};a.measureText=function(t,e){var i=d.doc;Z||(Z=i[Ur]("div"),Z.style.cssText="position:absolute;top:-20000px;left:0;                padding:0;margin:0;border:none;white-space:pre;",d.doc.body[_e](Z));try{Z.style.font=e}catch(n){}return Z[we]="",Z[_e](i.createTextNode(t)),{width:Z.offsetWidth}};for(var X=new i,Y=function(t,e,i,n){var r=this.style,o=r.text;if(o){var s,l,u=r[gi],c=j(r.textFont),h=c.style+" "+c.variant+" "+c.weight+" "+c.size+'px "'+c.family+'"',p=r[mi];i=i||a[Jn](o,h,u,p);var v=this[Xi];if(v&&!n&&(X.copy(e),X[cr](v),e=X),n)s=e.x,l=e.y;else{var m=r[yi],g=r.textDistance;if(m instanceof Array)s=e.x+m[0],l=e.y+m[1],u=u||"left",p=p||"top";else{var y=a.adjustTextPositionOnRect(m,e,i,g);s=y.x,l=y.y,u=u||y[gi],p=p||y[mi]}}var x=c.size;switch(p){case"hanging":case"top":l+=x/1.75;break;case zr:break;default:l-=x/2.25}switch(u){case"left":break;case Vr:s-=i.width/2;break;case"right":s-=i.width}var b,M,S,A=d.createNode,C=this._textVmlEl;C?(S=C.firstChild,b=S.nextSibling,M=b.nextSibling):(C=A("line"),b=A("path"),M=A("textpath"),S=A("skew"),M.style["v-text-align"]="left",T(C),b.textpathok=!0,M.on=!0,C.from="0 0",C.to="1000 0.05",D(C,S),D(C,b),D(C,M),this._textVmlEl=C);var L=[s,l],P=C.style;v&&n?(_(L,L,v),S.on=!0,S.matrix=v[0][Pr](3)+w+v[2][Pr](3)+w+v[1][Pr](3)+w+v[3][Pr](3)+",0,0",S[Qe]=(f(L[0])||0)+","+(f(L[1])||0),S[Yi]="0 0",P.left="0px",P.top="0px"):(S.on=!1,P.left=f(s)+"px",P.top=f(l)+"px"),M[Fr]=k(o);try{M.style.font=h}catch(z){}E(C,"fill",{fill:n?r.fill:r.textFill,opacity:r[xr]},this),E(C,_r,{stroke:n?r[_r]:r.textStroke,opacity:r[xr],lineDash:r.lineDash},this),C.style.zIndex=I(this[Ae],this.z,this.z2),D(t,C)}},$=function(t){P(t,this._textVmlEl),this._textVmlEl=null},K=function(t){D(t,this._textVmlEl)},J=[o,s,l,c,u],Q=0;Q<J[jr];Q++){var tt=J[Q][Jr];tt.drawRectText=Y,tt.removeRectText=$,tt.appendRectText=K}u[Jr].brush=function(t){var e=this.style;e.text&&this.drawRectText(t,{x:e.x||0,y:e.y||0,width:0,height:0},this[Jn](),!0)},u[Jr].onRemoveFromStorage=function(t){this.removeRectText(t)},u[Jr].onAddToStorage=function(t){this.appendRectText(t)}}}),e("zrender/vml/Painter",[Qr,"../core/log","./core"],function(t){function e(t){return parseInt(t,10)}function i(t,e){a.initVML(),this.root=t,this[ke]=e;var i=document[Ur]("div"),n=document[Ur]("div");i.style.cssText="display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;",n.style.cssText="position:absolute;left:0;top:0;",t[_e](i),this._vmlRoot=n,this._vmlViewport=i,this[Me]();var r=e[Li],o=e[Di];e[Li]=function(t){var i=e.get(t);r.call(e,t),i&&i.onRemoveFromStorage&&i.onRemoveFromStorage(n)},e[Di]=function(t){t.onAddToStorage&&t.onAddToStorage(n),o.call(e,t)},this._firstPaint=!0}function n(t){return function(){r('In IE8.0 VML mode painter not support method "'+t+'"')}}var r=t("../core/log"),a=t("./core");i[Jr]={constructor:i,getViewportRoot:function(){return this._vmlViewport},refresh:function(){var t=this[ke][Te](!0);this._paintList(t)},_paintList:function(t){for(var e=this._vmlRoot,i=0;i<t[jr];i++){var n=t[i];n[Ii]&&!n[Ti]&&(n.beforeBrush&&n.beforeBrush(),n.brush(e),n.afterBrush&&n.afterBrush()),n[Ii]=!1}this._firstPaint&&(this._vmlViewport[_e](e),this._firstPaint=!1)},resize:function(){var t=this._getWidth(),e=this._getHeight();if(this._width!=t&&this._height!=e){this._width=t,this._height=e;var i=this._vmlViewport.style;i.width=t+"px",i[ur]=e+"px"}},dispose:function(){this.root[we]="",this._vmlRoot=this._vmlViewport=this[ke]=null},getWidth:function(){return this._width},getHeight:function(){return this._height},_getWidth:function(){var t=this.root,i=t.currentStyle;return(t.clientWidth||e(i.width))-e(i.paddingLeft)-e(i.paddingRight)|0},_getHeight:function(){var t=this.root,i=t.currentStyle;return(t[ye]||e(i[ur]))-e(i.paddingTop)-e(i.paddingBottom)|0}};for(var o=["getLayer","insertLayer","eachLayer","eachBuildinLayer","eachOtherLayer","getLayers","modLayer","delLayer","clearLayer","toDataURL","pathToImage"],s=0;s<o[jr];s++){var l=o[s];i[Jr][l]=n(l)}return i}),e("zrender/vml/vml",[Qr,"./graphic","../zrender","./Painter"],function(t){t("./graphic"),t("../zrender").registerPainter("vml",t("./Painter"))});var ta=t("echarts");return t("echarts/chart/line"),t("echarts/chart/bar"),t("echarts/component/grid"),t("echarts/chart/pie"),t("echarts/chart/scatter"),t("echarts/component/tooltip"),t("echarts/component/polar"),t("echarts/chart/radar"),t("echarts/component/legend"),t("echarts/chart/map"),t("echarts/chart/treemap"),t("echarts/chart/graph"),t("echarts/chart/gauge"),t("echarts/chart/funnel"),t("echarts/chart/parallel"),t("echarts/chart/sankey"),t("echarts/chart/boxplot"),t("echarts/chart/candlestick"),t("echarts/chart/effectScatter"),t("echarts/chart/lines"),t("echarts/chart/heatmap"),t("echarts/component/geo"),t("echarts/component/parallel"),t("echarts/component/title"),t("echarts/component/dataZoom"),t("echarts/component/visualMap"),t("echarts/component/markPoint"),t("echarts/component/markLine"),t("echarts/component/timeline"),t("echarts/component/toolbox"),t("zrender/vml/vml"),ta});
/*
 * @Author: zhaohongmei
 * @Date:   2016-08-03 15:22:08
 * @Last Modified by:   zhaohongmei
 * @Last Modified time: 2016-08-05 14:34:53
 */
;(function($, window, document, undefined) {
    var methods = {
        init: function(options) {
            return this.each(function() {
                var $this = $(this);
                var $this = $(this),
                    opt = $this.data('tooltip');
                if (typeof(opt) == 'undefined') {
                    var defaults = {
                        eventType: 'click',
                        effect: 'hide', //影藏效果
                        beforeShow: function() {}, //显示前的回调方法
                        afterHide: function() {} //隐藏后的回调方法
                    };
                    opt = $.extend({}, defaults, options);
                    $this.data('tooltip', opt);
                }
                opt = $.extend({}, opt, options);
                // $(window).bind('resize.tooltip'，
                //     methods.reposition);
            });
        },
        destroy: function() {
            return this.each(
                function() {
                    $(window).unbind('.tooltip');
                });
        },
        reposition: function() {},
        show: function() {
            this.style.display = 'block';
        },
        hide: function() {
            this.style.display = 'none';
        },
        update: function(content) {},
        menu: function() {}
    };
    $.fn.tooltip = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);
$(function() {
    $('.navli').click(function() {
        var self = $(this);
        var navchild = self.find('.barLlist')
        if (!navchild) {
            return false;
        } else {
            self.find('.barLlist').toggle();
            $(this).siblings().find('.barLlist').hide();
        }
    })
})

/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Vue.js v2.0.5
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val, 10);
  return (n || n === 0) ? n : val
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove$1 (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind$1 (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    isObject(a) && isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: null,

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100,

  /**
   * Server rendering?
   */
  _isServer: "client" === 'server'
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]';

var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(nextTickHandler);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var func = ctx
      ? function () { cb.call(ctx); }
      : cb;
    callbacks.push(func);
    if (!pending) {
      pending = true;
      timerFunc();
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] !== undefined
    };
    Set.prototype.add = function add (key) {
      this.set[key] = 1;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/* not type checking this file because flow doesn't play well with Proxy */

var hasProxy;
var proxyHandlers;
var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  proxyHandlers = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          "referenced during render. Make sure to declare reactive data " +
          "properties in the data option.",
          target
        );
      }
      return has || !isAllowed
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      vm._renderProxy = new Proxy(vm, proxyHandlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */


var uid$2 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$2++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove$1(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */


var queue = [];
var has$1 = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has$1 = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    var watcher = queue[index];
    var id = watcher.id;
    has$1[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has$1[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has$1[id] == null) {
    has$1[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  if ( options === void 0 ) options = {};

  this.vm = vm;
  vm._watchers.push(this);
  // options
  this.deep = !!options.deep;
  this.user = !!options.user;
  this.lazy = !!options.lazy;
  this.sync = !!options.sync;
  this.expression = expOrFn.toString();
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
      if (
        value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          "development" !== 'production' && warn(
            ("Error in watcher \"" + (this.expression) + "\""),
            this.vm
          );
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm);
          } else {
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove$1(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * istanbul ignore next
 */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !config._isServer &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return
      }
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

function initState (vm) {
  vm._watchers = [];
  initProps(vm);
  initData(vm);
  initComputed(vm);
  initMethods(vm);
  initWatch(vm);
}

function initProps (vm) {
  var props = vm.$options.props;
  if (props) {
    var propsData = vm.$options.propsData || {};
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function ( i ) {
      var key = keys[i];
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
    observerState.shouldConvert = true;
  }
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object.',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data);
  data.__ob__ && data.__ob__.vmCount++;
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed (vm) {
  var computed = vm.$options.computed;
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key];
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
        computedSharedDefinition.set = noop;
      } else {
        computedSharedDefinition.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind$1(userDef.get, vm)
          : noop;
        computedSharedDefinition.set = userDef.set
          ? bind$1(userDef.set, vm)
          : noop;
      }
      Object.defineProperty(vm, key, computedSharedDefinition);
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm.$options.methods;
  if (methods) {
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
      {
        methods[key] == null && warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
        hasOwn(Vue$2.prototype, key) && warn(
          ("Avoid overriding Vue's internal method \"" + key + "\"."),
          vm
        );
      }
    }
  }
}

function initWatch (vm) {
  var watch = vm.$options.watch;
  if (watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data
  };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  ns,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = ns;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.child = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var emptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.ns,
    vnode.context,
    vnode.componentOptions
  );
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

function mergeVNodeHook (def, hookKey, hook, key) {
  key = key + hookKey;
  var injectedHash = def.__injected || (def.__injected = {});
  if (!injectedHash[key]) {
    injectedHash[key] = true;
    var oldHook = def[hookKey];
    if (oldHook) {
      def[hookKey] = function () {
        oldHook.apply(this, arguments);
        hook.apply(this, arguments);
      };
    } else {
      def[hookKey] = hook;
    }
  }
}

/*  */

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, fn, event, capture;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (!cur) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + name + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      capture = name.charAt(0) === '!';
      event = capture ? name.slice(1) : name;
      if (Array.isArray(cur)) {
        add(event, (cur.invoker = arrInvoker(cur)), capture);
      } else {
        if (!cur.invoker) {
          fn = cur;
          cur = on[name] = {};
          cur.fn = fn;
          cur.invoker = fnInvoker(cur);
        }
        add(event, cur.invoker, capture);
      }
    } else if (cur !== old) {
      if (Array.isArray(old)) {
        old.length = cur.length;
        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
        on[name] = old;
      } else {
        old.fn = cur;
        on[name] = old;
      }
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = name.charAt(0) === '!' ? name.slice(1) : name;
      remove$$1(event, oldOn[name].invoker);
    }
  }
}

function arrInvoker (arr) {
  return function (ev) {
    var arguments$1 = arguments;

    var single = arguments.length === 1;
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
    }
  }
}

function fnInvoker (o) {
  return function (ev) {
    var single = arguments.length === 1;
    single ? o.fn(ev) : o.fn.apply(null, arguments);
  }
}

/*  */

function normalizeChildren (
  children,
  ns,
  nestedIndex
) {
  if (isPrimitive(children)) {
    return [createTextVNode(children)]
  }
  if (Array.isArray(children)) {
    var res = [];
    for (var i = 0, l = children.length; i < l; i++) {
      var c = children[i];
      var last = res[res.length - 1];
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
      } else if (isPrimitive(c)) {
        if (last && last.text) {
          last.text += String(c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else if (c instanceof VNode) {
        if (c.text && last && last.text) {
          last.text += c.text;
        } else {
          // inherit parent namespace
          if (ns) {
            applyNS(c, ns);
          }
          // default key for nested array children (likely generated by v-for)
          if (c.tag && c.key == null && nestedIndex != null) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }
}

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

function applyNS (vnode, ns) {
  if (vnode.tag && !vnode.ns) {
    vnode.ns = ns;
    if (vnode.children) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        applyNS(vnode.children[i], ns);
      }
    }
  }
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = emptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    var prevVnode = vm._vnode;
    vm._vnode = vnode;
    if (!prevVnode) {
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    if (vm._isMounted) {
      callHook(vm, 'updated');
    }
  };

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this;
    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
    vm.$options._parentVnode = parentVnode;
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      {
        observerState.isSettingProps = false;
      }
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      vm._updateListeners(listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
      vm.$forceUpdate();
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove$1(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  vm.$emit('hook:' + hook);
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  if (isObject(Ctor)) {
    Ctor = Vue$2.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  var vnode = Ctor.options.render.call(
    null,
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    bind$1(createElement, { _self: Object.create(context) }),
    {
      props: props,
      data: data,
      parent: context,
      children: normalizeChildren(children),
      slots: function () { return resolveSlots(children, context); }
    }
  );
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init (vnode, hydrating) {
  if (!vnode.child || vnode.child._isDestroyed) {
    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.child = oldVnode.child;
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true;
    callHook(vnode.child, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false;
    callHook(vnode.child, 'activated');
  }
}

function destroy$1 (vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy();
    } else {
      vnode.child._inactive = true;
      callHook(vnode.child, 'deactivated');
    }
  }
}

function resolveAsyncComponent (
  factory,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = Vue$2.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (a, b) {
  // since all hooks have at most two args, use fixed args
  // to avoid having to use fn.apply().
  return function (_, __) {
    a(_, __);
    b(_, __);
  }
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  tag,
  data,
  children
) {
  if (data && (Array.isArray(data) || typeof data !== 'object')) {
    children = data;
    data = undefined;
  }
  // make sure to use real instance instead of proxy as context
  return _createElement(this._self, tag, data, children)
}

function _createElement (
  context,
  tag,
  data,
  children
) {
  if (data && data.__ob__) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return emptyVNode()
  }
  if (typeof tag === 'string') {
    var Ctor;
    var ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      return new VNode(
        tag, data, normalizeChildren(children, ns),
        undefined, undefined, ns, context
      )
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      return createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
      return new VNode(
        tag, data, normalizeChildren(children, childNs),
        undefined, undefined, ns, context
      )
    }
  } else {
    // direct component options / constructor
    return createComponent(tag, data, context, children)
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
  // bind the public createElement fn to this instance
  // so that we get proper render context inside it.
  vm.$createElement = bind$1(createElement, vm);
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      {
        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
      }
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm);
      } else {
        if (config._isServer) {
          throw e
        } else {
          console.error(e);
        }
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode;
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = emptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // shorthands used in render functions
  Vue.prototype._h = createElement;
  // toString for mustaches
  Vue.prototype._s = _toString;
  // number conversion
  Vue.prototype._n = toNumber;
  // empty vnode
  Vue.prototype._e = emptyVNode;
  // loose equal
  Vue.prototype._q = looseEqual;
  // loose indexOf
  Vue.prototype._i = looseIndexOf;

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);
    return tree
  };

  // mark node as static (v-once)
  Vue.prototype._o = function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  };

  function markStatic (tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  // filter resolution helper
  var identity = function (_) { return _; };
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  };

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret
  };

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback
  ) {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key];
          } else {
            var hash = asProp || config.mustUseProp(key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
            hash[key] = value[key];
          }
        }
      }
    }
    return data
  };

  // expose v-on keyCodes
  Vue.prototype._k = function getKeyCodes (key) {
    return config.keyCodes[key]
  };
}

function resolveSlots (
  renderChildren,
  context
) {
  var slots = {};
  if (!renderChildren) {
    return slots
  }
  var children = normalizeChildren(renderChildren) || [];
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  var on = bind$1(vm.$on, vm);
  var off = bind$1(vm.$off, vm);
  vm._updateListeners = function (listeners, oldListeners) {
    updateListeners(listeners, oldListeners || {}, on, off, vm);
  };
  if (listeners) {
    vm._updateListeners(listeners);
  }
}

function eventsMixin (Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    initRender(vm);
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = Ctor.super.options;
    var cachedSuperOptions = Ctor.superOptions;
    var extendOptions = Ctor.extendOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed
      Ctor.superOptions = superOptions;
      extendOptions.render = options.render;
      extendOptions.staticRenderFns = options.staticRenderFns;
      options = Ctor.options = mergeOptions(superOptions, extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function Vue$2 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$2)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

var warn = noop;
var formatComponentName;

{
  var hasConsole = typeof console !== 'undefined';

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  var res = assets[id] ||
    // camelCase ID
    assets[camelize(id)] ||
    // Pascal Case ID
    assets[capitalize(camelize(id))];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isBooleanType(prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    "development" !== 'production' && warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
    return vm[key]
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isBooleanType (fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === 'Boolean'
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === 'Boolean') {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}



var util = Object.freeze({
	defineReactive: defineReactive$$1,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove$1,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind$1,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	genStaticKeys: genStaticKeys,
	looseEqual: looseEqual,
	looseIndexOf: looseIndexOf,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	UA: UA,
	isIE: isIE,
	isIE9: isIE9,
	isEdge: isEdge,
	isAndroid: isAndroid,
	isIOS: isIOS,
	devtools: devtools,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	get formatComponentName () { return formatComponentName; },
	validateProp: validateProp
});

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor
    }
    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characaters and the hyphen.'
        );
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub
  };
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = Vue.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  created: function created () {
    this.cache = Object.create(null);
  },
  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    if (vnode && vnode.componentOptions) {
      var opts = vnode.componentOptions;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? opts.Ctor.cid + '::' + opts.tag
        : vnode.key;
      if (this.cache[key]) {
        vnode.child = this.cache[key].child;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  },
  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      var vnode = this$1.cache[key];
      callHook(vnode.child, 'deactivated');
      vnode.child.$destroy();
    }
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: function () { return config._isServer; }
});

Vue$2.version = '2.0.5';

/*  */

// attributes that should be using props for binding
var mustUseProp = makeMap('value,selected,checked,muted');

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var isAttr = makeMap(
  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
  'target,title,type,usemap,value,width,wrap'
);



var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.child) {
    childNode = childNode.child._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML',
  xhtml: 'http://www.w3.org/1999/xhtm'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr',
  true
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
  true
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track',
  true
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + selector
      );
      return document.createElement('div')
    }
  }
  return el
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function childNodes (node) {
  return node.childNodes
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	childNodes: childNodes,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.child || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove$1(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key])) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeElement(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeElement (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  function createElm (vnode, insertedVnodeQueue, nested) {
    var i;
    var data = vnode.data;
    vnode.isRootInsert = !nested;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(i = vnode.child)) {
        initComponent(vnode, insertedVnodeQueue);
        return vnode.elm
      }
    }
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (
          !vnode.ns &&
          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      createChildren(vnode, children, insertedVnodeQueue);
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
    }
    return vnode.elm
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.child) {
      vnode = vnode.child._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.child.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          nodeOps.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeElement(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, before;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (elmToMove.tag !== newStartVnode.tag) {
            // same key but different element. treat as new element
            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  function hydrate (elm, vnode, insertedVnodeQueue) {
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        var childNodes = nodeOps.childNodes(elm);
        // empty element, allow client to pick up and populate children
        if (!childNodes.length) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          if (childNodes.length !== children.length) {
            childrenMatch = false;
          } else {
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
            }
          }
          if (!childrenMatch) {
            if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
      }
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag === nodeOps.tagName(node).toLowerCase()
      )
    } else {
      return _toString(vnode.text) === node.data
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var elm, parent;
    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount, create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        elm = oldVnode.elm;
        parent = nodeOps.parentNode(elm);

        createElm(vnode, insertedVnodeQueue);

        // component root element replaced.
        // update parent placeholder node element.
        if (vnode.parent) {
          vnode.parent.elm = vnode.elm;
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parent !== null) {
          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
          removeVnodes(parent, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (
  oldVnode,
  vnode
) {
  if (!oldVnode.data.directives && !vnode.data.directives) {
    return
  }
  var isCreate = oldVnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      dirsWithInsert.forEach(function (dir) {
        callHook$1(dir, 'inserted', vnode, oldVnode);
      });
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      dirsWithPostpatch.forEach(function (dir) {
        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
      });
    }, 'dir-postpatch');
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

// skip type checking this file because we need to attach private properties
// to elements

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
    vnode.elm.addEventListener(event, handler, capture);
  });
  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
    vnode.elm.removeEventListener(event, handler);
  });
  updateListeners(on, oldOn, add, remove, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
      vnode.children.length = 0;
    }
    cur = props[key];
    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (elm.value !== strCur && !elm.composing) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var cssVarRE = /^--/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
    return
  }
  var cur, name;
  var el = vnode.elm;
  var oldStyle = oldVnode.data.style || {};
  var style = vnode.data.style || {};

  // handle string
  if (typeof style === 'string') {
    el.style.cssText = style;
    return
  }

  var needClone = style.__ob__;

  // handle array syntax
  if (Array.isArray(style)) {
    style = vnode.data.style = toObject(style);
  }

  // clone the style for future updates,
  // in case the user mutates the style object in-place.
  if (needClone) {
    style = vnode.data.style = extend({}, style);
  }

  for (name in oldStyle) {
    if (style[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in style) {
    cur = style[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove$1(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var transitionNode = activeInstance.$vnode;
  var context = transitionNode && transitionNode.parent
    ? transitionNode.parent.context
    : activeInstance;

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear ? appearClass : enterClass;
  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1;

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    }, 'transition-insert');
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, type, cb);
      }
    });
  }

  if (vnode.data.show) {
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1;

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, type, cb);
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    leaveClass: (name + "-leave"),
    appearClass: (name + "-enter"),
    enterActiveClass: (name + "-enter-active"),
    leaveActiveClass: (name + "-leave-active"),
    appearActiveClass: (name + "-enter-active")
  }
});

function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

var transition = inBrowser ? {
  create: function create (_, vnode) {
    if (!vnode.data.show) {
      enter(vnode);
    }
  },
  remove: function remove (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model = {
  inserted: function inserted (el, binding, vnode) {
    {
      if (!modelableTagRE.test(vnode.tag)) {
        warn(
          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
          vnode.context
        );
      }
    }
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (
      (vnode.tag === 'textarea' || el.type === 'text') &&
      !binding.modifiers.lazy
    ) {
      if (!isAndroid) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
      }
      /* istanbul ignore if */
      if (isIE9) {
        el.vmodel = true;
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.child && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.child._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (value && transition && !isIE9) {
      enter(vnode);
    }
    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
    el.style.display = value ? originalDisplay : 'none';
    el.__vOriginalDisplay = originalDisplay;
  },
  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      if (value) {
        enter(vnode);
        el.style.display = el.__vOriginalDisplay;
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  }
};

var platformDirectives = {
  model: model,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1].fn;
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    var key = child.key = child.key == null || child.isStatic
      ? ("__v" + (child.tag + this._uid) + "__")
      : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && oldChild.key !== key) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);

      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        }, key);
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave, key);
        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        }, key);
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts
            ? (opts.Ctor.options.name || opts.tag)
            : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var f = document.body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      addTransitionClass(el, moveClass);
      var info = getTransitionInfo(el);
      removeTransitionClass(el, moveClass);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.isUnknownElement = isUnknownElement;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.mustUseProp = mustUseProp;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = config._isServer ? noop : patch$1;

// wrap mount
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && !config._isServer ? query(el) : undefined;
  return this._mount(el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (
      "development" !== 'production' &&
      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
    ) {
      console.log(
        'Download the Vue Devtools for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var decoder = document.createElement('div');

function decode (html) {
  decoder.innerHTML = html;
  return decoder.textContent
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isScriptOrStyle = makeMap('script,style', true);
var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
var isSpecialTag = function (tag, isSFC, stack) {
  if (isScriptOrStyle(tag)) {
    return true
  }
  // top-level template that has a pre-processor
  if (
    isSFC &&
    tag === 'template' &&
    stack.length === 1 &&
    stack[0].attrs.some(hasLang)
  ) {
    return true
  }
  return false
};

var reCache = {};

var ltRE = /&lt;/g;
var gtRE = /&gt;/g;
var nlRE = /&#10;/g;
var ampRE = /&amp;/g;
var quoteRE = /&quot;/g;

function decodeAttr (value, shouldDecodeNewlines) {
  if (shouldDecodeNewlines) {
    value = value.replace(nlRE, '\n');
  }
  return value
    .replace(ltRE, '<')
    .replace(gtRE, '>')
    .replace(ampRE, '&')
    .replace(quoteRE, '"')
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a script or style element
    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = void 0, rest$1 = void 0, next = void 0;
      if (textEnd > 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
    }

    if (html === last && options.chars) {
      options.chars(html);
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag('', lastTag);
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag('', tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, attrs: attrs });
      lastTag = tagName;
      unarySlash = '';
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tag, tagName, start, end) {
    var pos;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      var needle = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].tag.toLowerCase() === needle) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (tagName.toLowerCase() === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (tagName.toLowerCase() === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break // "
        case 0x27: inSingle = true; break // '
        case 0x28: paren++; break         // (
        case 0x29: paren--; break         // )
        case 0x5B: square++; break        // [
        case 0x5D: square--; break        // ]
        case 0x7B: curly++; break         // {
        case 0x7D: curly--; break         // }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue parser]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important
) {
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return dynamicValue
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
var bindRE = /^:|^v-bind:/;
var onRE = /^@|^v-on:/;
var argRE = /:(.*)$/;
var modifierRE = /\.[^.]+/g;
var specialNewlineRE = /\u2028|\u2029/g;

var decodeHTMLCached = cached(decode);

// configurable state
var warn$1;
var platformGetTagNamespace;
var platformMustUseProp;
var platformIsPreTag;
var preTransforms;
var transforms;
var postTransforms;
var delimiters;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$1 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;
  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;
  parseHTML(template, {
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (options.isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs, options.isIE),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if ("client" !== 'server' && isForbiddenTag(element)) {
        element.forbidden = true;
        "development" !== 'production' && warn$1(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">."
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if ("development" !== 'production' && !warned) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warned = true;
            warn$1(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes:\n' + template
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warned = true;
            warn$1(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements:\n' + template
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow 2 root elements with v-if and v-else
        if (root.if && element.else) {
          checkRootConstraints(element);
          root.elseBlock = element;
        } else if ("development" !== 'production' && !warned) {
          warned = true;
          warn$1(
            ("Component template should contain exactly one root element:\n\n" + template)
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.else) {
          processElse(element, currentParent);
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
    },

    chars: function chars (text) {
      if (!currentParent) {
        if ("development" !== 'production' && !warned && text === template) {
          warned = true;
          warn$1(
            'Component template requires a root element, rather than just text:\n\n' + template
          );
        }
        return
      }
      text = inPre || text.trim()
        ? decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && currentParent.children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          currentParent.children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else {
          // #3895 special character
          text = text.replace(specialNewlineRE, '');
          currentParent.children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$1(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
  }
  if (getAndRemoveAttr(el, 'v-else') != null) {
    el.else = true;
  }
}

function processElse (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    prev.elseBlock = el;
  } else {
    warn$1(
      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
    );
  }
}

function processOnce (el) {
  var once = getAndRemoveAttr(el, 'v-once');
  if (once != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget;
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, arg, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        if (modifiers && modifiers.prop) {
          isProp = true;
          name = camelize(name);
          if (name === 'innerHtml') { name = 'innerHTML'; }
        }
        if (isProp || platformMustUseProp(name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        if (argMatch && (arg = argMatch[1])) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$1(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs, isIE) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
      warn$1('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].tag) { return children[i] }
  }
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || (function () { return false; });
  // first pass: mark all non-static nodes.
  markStatic(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    if (node.static) {
      node.staticRoot = true;
      return
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: 'if($event.target !== $event.currentTarget)return;'
};

function genHandlers (events, native) {
  var res = native ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  handler
) {
  if (!handler) {
    return 'function(){}'
  } else if (Array.isArray(handler)) {
    return ("[" + (handler.map(genHandler).join(',')) + "]")
  } else if (!handler.modifiers) {
    return simplePathRE.test(handler.value)
      ? handler.value
      : ("function($event){" + (handler.value) + "}")
  } else {
    var code = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        code += modifierCode[key];
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code = genKeyFilter(keys) + code;
    }
    var handlerCode = simplePathRE.test(handler.value)
      ? handler.value + '($event)'
      : handler.value;
    return 'function($event){' + code + handlerCode + '}'
  }
}

function genKeyFilter (keys) {
  var code = keys.length === 1
    ? normalizeKeyCode(keys[0])
    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
  if (Array.isArray(code)) {
    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
  } else {
    return ("if($event.keyCode!==" + code + ")return;")
  }
}

function normalizeKeyCode (key) {
  return (
    parseInt(key, 10) || // number keyCode
    keyCodes[key] || // built-in alias
    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
  )
}

/*  */

function bind$2 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  };
}

var baseDirectives = {
  bind: bind$2,
  cloak: noop
};

/*  */

// configurable state
var warn$2;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$2 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  var code = ast ? genElement(ast) : '_h("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el)
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el);
      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el) {
  el.staticProcessed = true;
  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el) {
  el.onceProcessed = true;
  if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && warn$2(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el)
    }
    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el)
  }
}

function genIf (el) {
  var exp = el.if;
  el.ifProcessed = true; // avoid recursion
  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
}

function genElse (el) {
  return el.elseBlock
    ? genElement(el.elseBlock)
    : '_e()'
}

function genFor (el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // inline-template
  if (el.inlineTemplate) {
    var ast = el.children[0];
    if ("development" !== 'production' && (
      el.children.length > 1 || ast.type !== 1
    )) {
      warn$2('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, currentOptions);
      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$2);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genChildren (el) {
  if (el.children.length) {
    return '[' + el.children.map(genNode).join(',') + ']'
  }
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : JSON.stringify(text.text)
}

function genSlot (el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  return ("_t(" + slotName + (children ? ("," + children) : '') + ")")
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el);
  return ("_h(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (prop.value) + ",";
  }
  return res.slice(0, -1)
}

/*  */

/**
 * Compile a template.
 */
function compile$1 (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

/*  */

// operators like typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');
// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;
// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "- avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + text
      );
    } else {
      errors.push(("- invalid expression: " + text));
    }
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

/*  */

function transformNode$1 (el) {
  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2 (el) {
  return el.styleBinding
    ? ("style:(" + (el.styleBinding) + "),")
    : ''
}

var style$1 = {
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$3;

function model$1 (
  el,
  dir,
  _warn
) {
  warn$3 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;
  {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$3(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
  }
  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else {
    genDefaultModel(el, value, modifiers);
  }
  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  if ("development" !== 'production' &&
    el.attrsMap.checked != null) {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
      "inline checked attributes will be ignored when using v-model. " +
      'Declare initial values in the component\'s data option instead.'
    );
  }
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" +
      ":_q(" + value + "," + trueValueBinding + ")"
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + value + "=$$c}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  if ("development" !== 'production' &&
    el.attrsMap.checked != null) {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
      "inline checked attributes will be ignored when using v-model. " +
      'Declare initial values in the component\'s data option instead.'
    );
  }
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  {
    if (el.tag === 'input' && el.attrsMap.value) {
      warn$3(
        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
        'inline value attributes will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
      );
    }
    if (el.tag === 'textarea' && el.children.length) {
      warn$3(
        "<textarea v-model=\"" + value + "\">:\n" +
        'inline content inside <textarea> will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
      );
    }
  }

  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
  var needCompositionGuard = !lazy && type !== 'range';
  var isNative = el.tag === 'input' || el.tag === 'textarea';

  var valueExpression = isNative
    ? ("$event.target.value" + (trim ? '.trim()' : ''))
    : "$event";
  valueExpression = number || type === 'number'
    ? ("_n(" + valueExpression + ")")
    : valueExpression;
  var code = genAssignmentCode(value, valueExpression);
  if (isNative && needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }
  // inputs with type="file" are read only and setting the input's
  // value will throw an error.
  if ("development" !== 'production' &&
      type === 'file') {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
      "File inputs are read only. Use a v-on:change listener instead."
    );
  }
  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
  addHandler(el, event, code, null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  {
    el.children.some(checkOptionWarning);
  }

  var number = modifiers && modifiers.number;
  var assignment = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})" +
    (el.attrsMap.multiple == null ? '[0]' : '');

  var code = genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function checkOptionWarning (option) {
  if (option.type === 1 &&
    option.tag === 'option' &&
    option.attrsMap.selected != null) {
    warn$3(
      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
      'inline selected attributes on <option> will be ignored when using v-model. ' +
      'Declare initial values in the component\'s data option instead.'
    );
    return true
  }
  return false
}

function genAssignmentCode (value, assignment) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
      "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
  }
}

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model$1,
  text: text,
  html: html
};

/*  */

var cache = Object.create(null);

var baseOptions = {
  isIE: isIE,
  expectHTML: true,
  modules: modules$1,
  staticKeys: genStaticKeys(modules$1),
  directives: directives$1,
  isReservedTag: isReservedTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  getTagNamespace: getTagNamespace,
  isPreTag: isPreTag
};

function compile$$1 (
  template,
  options
) {
  options = options
    ? extend(extend({}, baseOptions), options)
    : baseOptions;
  return compile$1(template, options)
}

function compileToFunctions (
  template,
  options,
  vm
) {
  var _warn = (options && options.warn) || warn;
  // detect possible CSP restriction
  /* istanbul ignore if */
  {
    try {
      new Function('return 1');
    } catch (e) {
      if (e.toString().match(/unsafe-eval|CSP/)) {
        _warn(
          'It seems you are using the standalone build of Vue.js in an ' +
          'environment with Content Security Policy that prohibits unsafe-eval. ' +
          'The template compiler cannot work in this environment. Consider ' +
          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
          'templates into render functions.'
        );
      }
    }
  }
  var key = options && options.delimiters
    ? String(options.delimiters) + template
    : template;
  if (cache[key]) {
    return cache[key]
  }
  var res = {};
  var compiled = compile$$1(template, options);
  res.render = makeFunction(compiled.render);
  var l = compiled.staticRenderFns.length;
  res.staticRenderFns = new Array(l);
  for (var i = 0; i < l; i++) {
    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
  }
  {
    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
      _warn(
        "failed to compile template:\n\n" + template + "\n\n" +
        detectErrors(compiled.ast).join('\n') +
        '\n\n',
        vm
      );
    }
  }
  return (cache[key] = res)
}

function makeFunction (code) {
  try {
    return new Function(code)
  } catch (e) {
    return noop
  }
}

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$2.prototype.$mount;
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      var ref = compileToFunctions(template, {
        warn: warn,
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$2.compile = compileToFunctions;

return Vue$2;

})));

/*! WOW - v1.0.1 - 2014-09-03
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(!this.stopped){if(null==a&&(a=this.element),1!==a.nodeType)return;for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.applyStyle(b,!0),this.boxes.push(b),this.all.push(b),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);