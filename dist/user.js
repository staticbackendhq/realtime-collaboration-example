parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"NqoO":[function(require,module,exports) {
var define;
var t;parcelRequire=function(e,n,r,i){var s,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function c(t,r){if(!n[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!r&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}h.resolve=function(n){return e[t][1][n]||n},h.cache={};var a=n[t]=new c.Module(t);e[t][0].call(a.exports,h,a,a.exports,this)}return n[t].exports;function h(t){return c(h.resolve(t))}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=e,c.cache=n,c.parent=o,c.register=function(t,n){e[t]=[function(t,e){e.exports=n},{}]};for(var a=0;a<r.length;a++)try{c(r[a])}catch(e){s||(s=e)}if(r.length){var h=c(r[r.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=h:"function"==typeof t&&t.amd&&t(function(){return h})}if(parcelRequire=c,s)throw s;return c}({oKSM:[function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function u(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(o,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(u){s=[6,u],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.Backend=void 0;var s=function(){function t(t,e){this.baseURL="https://na1.staticbackend.com",this.wsURL="wss://na1.staticbackend.com",this.ws=null,this.wsId=null,this.wsToken=null,this.sseClient=null,this.pubKey="",this.types={ok:"ok",error:"error",init:"init",token:"token",joined:"joined",chanOut:"chan_out",dbCreated:"db_created",dbUpdated:"db_updated",dbDeleted:"db_deleted",echo:"echo",auth:"auth",join:"join",chanIn:"chan_in"},this.pubKey=t,e&&("dev"==e?(this.baseURL="http://localhost:8099",this.wsURL="ws://localhost:8099"):e.length<10?(this.baseURL="https://"+e+".staticbackend.com",this.wsURL="wss://"+e+".staticbackend.com"):(this.baseURL=e,this.wsURL=e.replace("https","wss")))}return t.prototype.rawreq=function(t,e,n,s,o){return r(this,void 0,void 0,function(){var r,u,c,a;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),r=null,o&&(r="application/json"==t?JSON.stringify(o):o),u={"SB-PUBLIC-KEY":this.pubKey},t&&t.length&&(u["Content-Type"]=t),e&&(u.Authorization="Bearer "+e),[4,fetch(""+this.baseURL+s,{method:n,headers:u,body:r})];case 1:return(c=i.sent()).status>299?[4,c.text()]:[3,3];case 2:return[2,{ok:!1,content:i.sent()}];case 3:return[4,c.json()];case 4:return[2,{ok:!0,content:i.sent()}];case 5:return a=i.sent(),console.error(a),[2,{ok:!1,content:a}];case 6:return[2]}})})},t.prototype.req=function(t,e,n,s){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this.rawreq("application/json",t,e,n,s)];case 1:return[2,r.sent()]}})})},t.prototype.register=function(t,e){return r(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return n={email:t,password:e},[4,this.req("","POST","/register",n)];case 1:return[2,r.sent()]}})})},t.prototype.login=function(t,e){return r(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return n={email:t,password:e},[4,this.req("","POST","/login",n)];case 1:return[2,r.sent()]}})})},t.prototype.create=function(t,e,n){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this.req(t,"POST","/db/"+e,n)];case 1:return[2,r.sent()]}})})},t.prototype.list=function(t,e){return r(this,void 0,void 0,function(){return i(this,function(n){switch(n.label){case 0:return[4,this.req(t,"GET","/db/"+e)];case 1:return[2,n.sent()]}})})},t.prototype.getById=function(t,e,n){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this.req(t,"GET","/db/"+e+"/"+n)];case 1:return[2,r.sent()]}})})},t.prototype.query=function(t,e,n){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this.req(t,"POST","/query/"+e,n)];case 1:return[2,r.sent()]}})})},t.prototype.update=function(t,e,n,s){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this.req(t,"PUT","/db/"+e+"/"+n,s)];case 1:return[2,r.sent()]}})})},t.prototype.delete=function(t,e,n){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,this.req(t,"DELETE","/db/"+e+"/"+n)];case 1:return[2,r.sent()]}})})},t.prototype.storeFile=function(t,e){return r(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return n=new FormData(e),[4,this.rawreq("",t,"POST","/storage/upload",n)];case 1:return[2,r.sent()]}})})},t.prototype.connectWS=function(t,e,n){var r=this;this.ws=new WebSocket(this.wsURL+"/ws"),this.ws.onerror=function(t){console.error(t)},this.ws.onmessage=function(i){try{var s=JSON.parse(i.data);s.type==r.types.init?(r.wsId=s.data,r.send(r.types.auth,t)):s.type==r.types.token?(r.wsToken=s.data,e(s.data)):n(s)}catch(o){console.error(o)}}},t.prototype.sendWS=function(t,e,n){if(null==this.ws)return!1;var r={sid:this.wsId,token:this.wsToken,type:t,data:e,channel:n};return this.ws.send(JSON.stringify(r)),!0},t.prototype.connect=function(t,e,n){var r=this;this.sseClient=new EventSource(this.baseURL+"/sse/connect"),this.sseClient.onerror=function(t){console.error(t)},this.sseClient.onmessage=function(i){try{var s=JSON.parse(i.data);s.type==r.types.init?(r.wsId=s.data,r.wsToken=t,r.send(r.types.auth,t)):s.type==r.types.token?e(r.wsToken):n(s)}catch(o){console.error(o)}}},t.prototype.send=function(t,e,n){if(null==this.sseClient||2==this.sseClient.readyState)return!1;var s={sid:this.wsId,token:this.wsToken,type:t,data:e,channel:n};return r(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this.req(this.wsToken,"POST","/sse/msg",s)];case 1:return[2,t.sent()]}})}),!0},t}();n.Backend=s},{}],QCba:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Backend=void 0;var r=t("./backend");Object.defineProperty(n,"Backend",{enumerable:!0,get:function(){return r.Backend}})},{"./backend":"oKSM"}]},{},["QCba"]);
},{}],"AxoZ":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("@staticbackend/js");function t(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=e.apply(n,r);function u(e){t(i,o,a,u,c,"next",e)}function c(e){t(i,o,a,u,c,"throw",e)}u(void 0)})}}var r=new e.Backend("any-token-in-dev","dev"),o=document.forms[0];o.addEventListener("submit",function(e){e.preventDefault()});var a=document.getElementById("login");a.addEventListener("click",function(){var e=n(regeneratorRuntime.mark(function e(t){var n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.email.value,a=o.password.value,e.next=4,r.login(n,a);case 4:if((i=e.sent).ok){e.next=8;break}return console.error(i.content),e.abrupt("return");case 8:sessionStorage.setItem("token",i.content),location.href="/codaborate.html";case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var i=document.getElementById("register");i.addEventListener("click",function(){var e=n(regeneratorRuntime.mark(function e(t){var n,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.email.value,a=o.password.value,e.next=4,r.register(n,a);case 4:if((i=e.sent).ok){e.next=8;break}return console.error(i.content),e.abrupt("return");case 8:sessionStorage.setItem("token",i.content),location.href="/codaborate.html";case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());
},{"regenerator-runtime/runtime":"KA2S","@staticbackend/js":"NqoO"}]},{},["AxoZ"], null)
//# sourceMappingURL=/user.js.map