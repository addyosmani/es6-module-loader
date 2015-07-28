/*
 *  es6-module-loader v0.17.1
 *  https://github.com/ModuleLoader/es6-module-loader
 *  Copyright (c) 2015 Guy Bedford, Luke Hoban, Addy Osmani; Licensed MIT
 */

!function(a){function b(a,b){var c;if(a instanceof Error){var c=new Error(a.message,a.fileName,a.lineNumber);c.message=a.message+"\n	"+b,c.stack=a.stack}else c=a+"\n	"+b;return c}function c(a,c,d){try{new Function(a).call(d)}catch(e){throw b(e,"Evaluating "+c)}}function d(){}function e(){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},l(this,"global",{get:function(){return a}})}function f(a,b){if("string"!=typeof a)throw new TypeError("URL must be a string");var c=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!c)throw new RangeError;var d=c[1]||"",e=c[2]||"",g=c[3]||"",h=c[4]||"",i=c[5]||"",j=c[6]||"",k=c[7]||"",l=c[8]||"",m=c[9]||"";if(void 0!==b){var n=b instanceof f?b:new f(b),o=""===d&&""===h&&""===e;o&&""===k&&""===l&&(l=n.search),o&&"/"!==k.charAt(0)&&(k=""!==k?(""===n.host&&""===n.username||""!==n.pathname?"":"/")+n.pathname.slice(0,n.pathname.lastIndexOf("/")+1)+k:n.pathname);var p=[];k.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?p.pop():p.push(a)}),k=p.join("").replace(/^\//,"/"===k.charAt(0)?"/":""),o&&(j=n.port,i=n.hostname,h=n.host,g=n.password,e=n.username),""===d&&(d=n.protocol)}"file:"==d&&(k=k.replace(/\\/g,"/")),this.origin=d+(""!==d||""!==h?"//":"")+h,this.href=d+(""!==d||""!==h?"//":"")+(""!==e?e+(""!==g?":"+g:"")+"@":"")+h+k+l+m,this.protocol=d,this.username=e,this.password=g,this.host=h,this.hostname=i,this.port=j,this.pathname=k,this.search=l,this.hash=m}function g(){e.call(this),this.paths={}}function h(a,b){var c,d="",e=0;for(var f in a){var g=f.split("*");if(g.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==g.length){if(b==f){d=f;break}}else{var h=f.split("/").length;h>=e&&b.substr(0,g[0].length)==g[0]&&b.substr(b.length-g[1].length)==g[1]&&(e=h,d=f,c=b.substr(g[0].length,b.length-g[1].length-g[0].length))}}var i=a[d]||b;return c&&(i=i.replace("*",c)),i}function i(){}var j=("undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,"undefined"!=typeof window&&"undefined"!=typeof document),k="undefined"!=typeof process&&!!process.platform.match(/^win/);a.console||(a.console={assert:function(){}});var l,m=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1};!function(){try{Object.defineProperty({},"a",{})&&(l=Object.defineProperty)}catch(a){l=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(d){}}}}();var n;if("undefined"!=typeof document&&document.getElementsByTagName){if(n=document.baseURI,!n){var o=document.getElementsByTagName("base");n=o[0]&&o[0].href||window.location.href}n=n.split("#")[0].split("?")[0],n=n.substr(0,n.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)n="file://"+(k?"/":"")+process.cwd()+"/",k&&(n=n.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");n=a.location.href}var p="function"==typeof a.URL&&a.URL||f;!function(){function f(a){return{status:"loading",name:a,linkSets:[],dependencies:[],metadata:{}}}function g(a,b,c){return new Promise(n({step:c.address?"fetch":"locate",loader:a,moduleName:b,moduleMetadata:c&&c.metadata||{},moduleSource:c.source,moduleAddress:c.address}))}function h(a,b,c,d){return new Promise(function(e){e(a.loaderObj.normalize(b,c,d))}).then(function(b){var c;if(a.modules[b])return c=f(b),c.status="linked",c.module=a.modules[b],c;for(var d=0,e=a.loads.length;e>d;d++)if(c=a.loads[d],c.name==b)return c;return c=f(b),a.loads.push(c),i(a,c),c})}function i(a,b){j(a,b,Promise.resolve().then(function(){return a.loaderObj.locate({name:b.name,metadata:b.metadata})}))}function j(a,b,c){k(a,b,c.then(function(c){return"loading"==b.status?(b.address=c,a.loaderObj.fetch({name:b.name,metadata:b.metadata,address:c})):void 0}))}function k(b,d,e){e.then(function(e){return"loading"==d.status?Promise.resolve(b.loaderObj.translate({name:d.name,metadata:d.metadata,address:d.address,source:e})).then(function(a){return d.source=a,b.loaderObj.instantiate({name:d.name,metadata:d.metadata,address:d.address,source:a})}).then(function(e){if(void 0===e)return d.address=d.address||"<Anonymous Module "+ ++z+">",d.isDeclarative=!0,transpile.call(b.loaderObj,d).then(function(b){var e=a.System,f=e.register;e.register=function(a,b,c){"string"!=typeof a&&(c=b,b=a),d.declare=c,d.depsList=b},c(b,d.address,{}),e.register=f});if("object"!=typeof e)throw TypeError("Invalid instantiate return value");d.depsList=e.deps||[],d.execute=e.execute,d.isDeclarative=!1}).then(function(){d.dependencies=[];for(var a=d.depsList,c=[],e=0,f=a.length;f>e;e++)(function(a,e){c.push(h(b,a,d.name,d.address).then(function(b){if(d.dependencies[e]={key:a,value:b.name},"linked"!=b.status)for(var c=d.linkSets.concat([]),f=0,g=c.length;g>f;f++)p(c[f],b)}))})(a[e],e);return Promise.all(c)}).then(function(){d.status="loaded";for(var a=d.linkSets.concat([]),b=0,c=a.length;c>b;b++)r(a[b],d)}):void 0})["catch"](function(a){d.status="failed",d.exception=a;for(var b=d.linkSets.concat([]),c=0,e=b.length;e>c;c++)s(b[c],d,a)})}function n(a){return function(b){var c=a.loader,d=a.moduleName,e=a.step;if(c.modules[d])throw new TypeError('"'+d+'" already exists in the module table');for(var g,h=0,l=c.loads.length;l>h;h++)if(c.loads[h].name==d)return g=c.loads[h],"translate"!=e||g.source||(g.address=a.moduleAddress,k(c,g,Promise.resolve(a.moduleSource))),g.linkSets[0].done.then(function(){b(g)});var m=f(d);m.metadata=a.moduleMetadata;var n=o(c,m);c.loads.push(m),b(n.done),"locate"==e?i(c,m):"fetch"==e?j(c,m,Promise.resolve(a.moduleAddress)):(m.address=a.moduleAddress,k(c,m,Promise.resolve(a.moduleSource)))}}function o(a,b){var c={loader:a,loads:[],startingLoad:b,loadingCount:0};return c.done=new Promise(function(a,b){c.resolve=a,c.reject=b}),p(c,b),c}function p(a,b){for(var c=0,d=a.loads.length;d>c;c++)if(a.loads[c]==b)return;a.loads.push(b),b.linkSets.push(a),"loaded"!=b.status&&a.loadingCount++;for(var e=a.loader,c=0,d=b.dependencies.length;d>c;c++){var f=b.dependencies[c].value;if(!e.modules[f])for(var g=0,h=e.loads.length;h>g;g++)if(e.loads[g].name==f){p(a,e.loads[g]);break}}}function q(a){var b=!1;try{w(a,function(c,d){s(a,c,d),b=!0})}catch(c){s(a,null,c),b=!0}return b}function r(a,b){if(a.loadingCount--,!(a.loadingCount>0)){var c=a.startingLoad;if(a.loader.loaderObj.execute===!1){for(var d=[].concat(a.loads),e=0,f=d.length;f>e;e++){var b=d[e];b.module=b.isDeclarative?{name:b.name,module:A({}),evaluated:!0}:{module:A({})},b.status="linked",t(a.loader,b)}return a.resolve(c)}var g=q(a);g||a.resolve(c)}}function s(a,c,d){var e=a.loader;c?(c&&a.loads[0].name!=c.name&&(d=b(d,"Error loading "+c.name+" from "+a.loads[0].name)),c&&(d=b(d,"Error loading "+c.name))):d=b(d,"Error linking "+a.loads[0].name);for(var f=a.loads.concat([]),g=0,h=f.length;h>g;g++){var c=f[g];e.loaderObj.failed=e.loaderObj.failed||[],-1==m.call(e.loaderObj.failed,c)&&e.loaderObj.failed.push(c);var i=m.call(c.linkSets,a);if(c.linkSets.splice(i,1),0==c.linkSets.length){var j=m.call(a.loader.loads,c);-1!=j&&a.loader.loads.splice(j,1)}}a.reject(d)}function t(a,b){if(a.loaderObj.trace){a.loaderObj.loads||(a.loaderObj.loads={});var c={};b.dependencies.forEach(function(a){c[a.key]=a.value}),a.loaderObj.loads[b.name]={name:b.name,deps:b.dependencies.map(function(a){return a.key}),depMap:c,address:b.address,metadata:b.metadata,source:b.source,kind:b.isDeclarative?"declarative":"dynamic"}}b.name&&(a.modules[b.name]=b.module);var d=m.call(a.loads,b);-1!=d&&a.loads.splice(d,1);for(var e=0,f=b.linkSets.length;f>e;e++)d=m.call(b.linkSets[e].loads,b),-1!=d&&b.linkSets[e].loads.splice(d,1);b.linkSets.splice(0,b.linkSets.length)}function u(a,b,c){try{var e=b.execute()}catch(f){return void c(b,f)}return e&&e instanceof d?e:void c(b,new TypeError("Execution must define a Module instance"))}function v(a,b,c){var d=a._loader.importPromises;return d[b]=c.then(function(a){return d[b]=void 0,a},function(a){throw d[b]=void 0,a})}function w(a,b){var c=a.loader;if(a.loads.length)for(var d=a.loads.concat([]),e=0;e<d.length;e++){var f=d[e],g=u(a,f,b);if(!g)return;f.module={name:f.name,module:g},f.status="linked",t(c,f)}}function x(a,b){return b.module.module}function y(){}var z=0;e.prototype={constructor:e,define:function(a,b,c){if(this._loader.importPromises[a])throw new TypeError("Module is already loading.");return v(this,a,new Promise(n({step:"translate",loader:this._loader,moduleName:a,moduleMetadata:c&&c.metadata||{},moduleSource:b,moduleAddress:c&&c.address})))},"delete":function(a){var b=this._loader;return delete b.importPromises[a],delete b.moduleRecords[a],b.modules[a]?delete b.modules[a]:!1},get:function(a){return this._loader.modules[a]?(y(this._loader.modules[a],[],this),this._loader.modules[a].module):void 0},has:function(a){return!!this._loader.modules[a]},"import":function(a,b){"object"==typeof b&&(b=b.name);var c=this;return Promise.resolve(c.normalize(a,b)).then(function(a){var b=c._loader;return b.modules[a]?(y(b.modules[a],[],b._loader),b.modules[a].module):b.importPromises[a]||v(c,a,g(b,a,{}).then(function(c){return delete b.importPromises[a],x(b,c)}))})},load:function(a){return this._loader.modules[a]?(y(this._loader.modules[a],[],this._loader),Promise.resolve(this._loader.modules[a].module)):this._loader.importPromises[a]||v(this,a,g(this._loader,a,{}))},module:function(a,b){var c=f();c.address=b&&b.address;var d=o(this._loader,c),e=Promise.resolve(a),g=this._loader,h=d.done.then(function(){return x(g,c)});return k(g,c,e),h},newModule:function(a){if("object"!=typeof a)throw new TypeError("Expected object");var b,c=new d;if(Object.getOwnPropertyNames&&null!=a)b=Object.getOwnPropertyNames(a);else{b=[];for(var e in a)b.push(e)}for(var f=0;f<b.length;f++)(function(b){l(c,b,{configurable:!1,enumerable:!0,get:function(){return a[b]}})})(b[f]);return Object.preventExtensions&&Object.preventExtensions(c),c},set:function(a,b){if(!(b instanceof d))throw new TypeError("Loader.set("+a+", module) must be a module");this._loader.modules[a]={module:b}},normalize:function(a){return a},locate:function(a){return a.name},fetch:function(){},translate:function(a){return a.source},instantiate:function(){}};var A=e.prototype.newModule}(),("undefined"!=typeof self?self:global).URLPolyfill=f;var q;i.prototype=e.prototype,g.prototype=new i;var r=/^([^\/]+:\/\/|\/)/;g.prototype.normalize=function(a,b){return a=a.match(r)||"."==a[0]?new p(a,b||n).href:new p(h(this.paths,a),n).href},g.prototype.locate=function(a){return a.name},g.prototype.instantiate=function(b){var d=this;return Promise.resolve(d.normalize(d.transpiler)).then(function(e){return b.address===e?{deps:[],execute:function(){var e=a.System,f=a.Reflect.Loader;return c("(function(require,exports,module){"+b.source+"})();",b.address,a),a.System=e,a.Reflect.Loader=f,d.newModule({"default":a[d.transpiler],__useDefault:!0})}}:void 0})};var s;if("undefined"!=typeof XMLHttpRequest)s=function(a,b,c){function d(){b(f.responseText)}function e(){c(f.statusText+": "+a||"XHR error")}j&&(a=a.replace(/#/g,"%23"));var f=new XMLHttpRequest,g=!0,h=!1;if(!("withCredentials"in f)){var i=/^(\w+:)?\/\/([^\/]+)/.exec(a);i&&(g=i[2]===window.location.host,i[1]&&(g&=i[1]===window.location.protocol))}g||"undefined"==typeof XDomainRequest||(f=new XDomainRequest,f.onload=d,f.onerror=e,f.ontimeout=e,f.onprogress=function(){},f.timeout=0,h=!0),f.onreadystatechange=function(){4===f.readyState&&(200===f.status||0==f.status&&f.responseText?d():e())},f.open("GET",a,!0),h&&setTimeout(function(){f.send()},0),f.send(null)};else{if("undefined"==typeof require)throw new TypeError("No environment fetch API available.");var t;s=function(a,b,c){if("file:///"!=a.substr(0,8))throw"Only file URLs of the form file:/// allowed running in Node.";return t=t||require("fs"),a=k?a.replace(/\//g,"\\").substr(8):a.substr(7),t.readFile(a,function(a,d){if(a)return c(a);var e=d+"";"\ufeff"===e[0]&&(e=e.substr(1)),b(e)})}}g.prototype.fetch=function(a){return new Promise(function(b,c){s(a.address,b,c)})},"object"==typeof exports&&(module.exports=e),a.Reflect=a.Reflect||{},a.Reflect.Loader=a.Reflect.Loader||e,a.Reflect.global=a.Reflect.global||a,a.LoaderPolyfill=e,q||(q=new g,q.constructor=g),"object"==typeof exports&&(module.exports=q),a.System=q}("undefined"!=typeof self?self:global);
//# sourceMappingURL=es6-module-loader.js.map