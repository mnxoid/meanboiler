!function(a,b,c){"use strict";b.module("ngResource",["ng"]).factory("$resource",["$http","$parse",function(a,d){function e(a){return f(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function f(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}function g(a,b){this.template=a+="#",this.defaults=b||{};var c=this.urlParams={};k(a.split(/\W/),function(b){b&&new RegExp("(^|[^\\\\]):"+b+"\\W").test(a)&&(c[b]=!0)}),this.template=a.replace(/\\:/g,":")}function h(d,e,f){function p(a,b){var c={};return b=l({},e,b),k(b,function(b,d){c[d]=b.charAt&&"@"==b.charAt(0)?o(a,b.substr(1)):b}),c}function q(a){m(a||{},this)}var r=new g(d);return f=l({},i,f),k(f,function(d,e){d.method=b.uppercase(d.method);var f="POST"==d.method||"PUT"==d.method||"PATCH"==d.method;q[e]=function(b,c,e,g){var h,i={},o=j,s=null;switch(arguments.length){case 4:s=g,o=e;case 3:case 2:if(!n(c)){i=b,h=c,o=e;break}if(n(b)){o=b,s=c;break}o=c,s=e;case 1:n(b)?o=b:f?h=b:i=b;break;case 0:break;default:throw"Expected between 0-4 arguments [params, data, success, error], got "+arguments.length+" arguments."}var t=this instanceof q?this:d.isArray?[]:new q(h);return a({method:d.method,url:r.url(l({},p(h,d.params||{}),i)),data:h}).then(function(a){var b=a.data;b&&(d.isArray?(t.length=0,k(b,function(a){t.push(new q(a))})):m(b,t)),(o||j)(t,a.headers)},s),t},q.prototype["$"+e]=function(a,b,d){var g,h=p(this),i=j;switch(arguments.length){case 3:h=a,i=b,g=d;break;case 2:case 1:n(a)?(i=a,g=b):(h=a,i=b||j);case 0:break;default:throw"Expected between 1-3 arguments [params, success, error], got "+arguments.length+" arguments."}var k=f?this:c;q[e].call(this,h,k,i,g)}}),q.bind=function(a){return h(d,l({},e,a),f)},q}var i={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},j=b.noop,k=b.forEach,l=b.extend,m=b.copy,n=b.isFunction,o=function(a,b){return d(b)(a)};return g.prototype={url:function(a){var c,d,g=this,h=this.template;a=a||{},k(this.urlParams,function(f,i){c=a.hasOwnProperty(i)?a[i]:g.defaults[i],b.isDefined(c)&&null!==c?(d=e(c),h=h.replace(new RegExp(":"+i+"(\\W)","g"),d+"$1")):h=h.replace(new RegExp("(/?):"+i+"(\\W)","g"),function(a,b,c){return"/"==c.charAt(0)?c:b+c})}),h=h.replace(/\/?#$/,"");var i=[];return k(a,function(a,b){g.urlParams[b]||i.push(f(b)+"="+f(a))}),i.sort(),h=h.replace(/\/*$/,""),h+(i.length?"?"+i.join("&"):"")}},h}])}(window,window.angular),function(a,b,c){"use strict";b.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(a,d){function e(){var a,e,f,i;for(a in h)k(g[a])&&d.cookies(a,c);for(a in g)e=g[a],b.isString(e)?e!==h[a]&&(d.cookies(a,e),i=!0):b.isDefined(h[a])?g[a]=h[a]:delete g[a];if(i){i=!1,f=d.cookies();for(a in g)g[a]!==f[a]&&(k(f[a])?delete g[a]:g[a]=f[a],i=!0)}}var f,g={},h={},i=!1,j=b.copy,k=b.isUndefined;return d.addPollFn(function(){var b=d.cookies();f!=b&&(f=b,j(b,h),j(b,g),i&&a.$apply())})(),i=!0,a.$watch(e),g}]).factory("$cookieStore",["$cookies",function(a){return{get:function(c){var d=a[c];return d?b.fromJson(d):d},put:function(c,d){a[c]=b.toJson(d)},remove:function(b){delete a[b]}}}])}(window,window.angular),function(a,b){"use strict";function c(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function d(a,c){function d(a,d,g,h){if(d=b.lowercase(d),v[d])for(;q.last()&&w[q.last()];)f("",q.last());u[d]&&q.last()==d&&f("",d),h=r[d]||!!h,h||q.push(d);var i={};g.replace(k,function(a,b,c,d,f){var g=c||d||f||"";i[b]=e(g)}),c.start&&c.start(d,i,h)}function f(a,d){var e,f=0;if(d=b.lowercase(d))for(f=q.length-1;f>=0&&q[f]!=d;f--);if(f>=0){for(e=q.length-1;e>=f;e--)c.end&&c.end(q[e]);q.length=f}}var g,h,p,q=[],s=a;for(q.last=function(){return q[q.length-1]};a;){if(h=!0,q.last()&&x[q.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+q.last()+"[^>]*>","i"),function(a,b){return b=b.replace(n,"$1").replace(o,"$1"),c.chars&&c.chars(e(b)),""}),f("",q.last());else if(0===a.indexOf("<!--")?(g=a.indexOf("-->"),g>=0&&(c.comment&&c.comment(a.substring(4,g)),a=a.substring(g+3),h=!1)):m.test(a)?(p=a.match(j),p&&(a=a.substring(p[0].length),p[0].replace(j,f),h=!1)):l.test(a)&&(p=a.match(i),p&&(a=a.substring(p[0].length),p[0].replace(i,d),h=!1)),h){g=a.indexOf("<");var t=0>g?a:a.substring(0,g);a=0>g?"":a.substring(g),c.chars&&c.chars(e(t))}if(a==s)throw"Parse Error: "+a;s=a}f()}function e(a){return B.innerHTML=a.replace(/</g,"&lt;"),B.innerText||B.textContent||""}function f(a){return a.replace(/&/g,"&amp;").replace(q,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(a){var c=!1,d=b.bind(a,a.push);return{start:function(a,e,g){a=b.lowercase(a),!c&&x[a]&&(c=a),c||1!=y[a]||(d("<"),d(a),b.forEach(e,function(a,c){var e=b.lowercase(c);1!=A[e]||z[e]===!0&&!a.match(p)||(d(" "),d(c),d('="'),d(f(a)),d('"'))}),d(g?"/>":">"))},end:function(a){a=b.lowercase(a),c||1!=y[a]||(d("</"),d(a),d(">")),a==c&&(c=!1)},chars:function(a){c||d(f(a))}}}var h=function(a){var b=[];return d(a,g(b)),b.join("")},i=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,j=/^<\s*\/\s*([\w:-]+)[^>]*>/,k=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,l=/^</,m=/^<\s*\//,n=/<!--(.*?)-->/g,o=/<!\[CDATA\[(.*?)]]>/g,p=/^((ftp|https?):\/\/|mailto:|#)/i,q=/([^\#-~| |!])/g,r=c("area,br,col,hr,img,wbr"),s=c("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),t=c("rp,rt"),u=b.extend({},t,s),v=b.extend({},s,c("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),w=b.extend({},t,c("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=c("script,style"),y=b.extend({},r,v,w,u),z=c("background,cite,href,longdesc,src,usemap"),A=b.extend({},z,c("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),B=document.createElement("pre");b.module("ngSanitize",[]).value("$sanitize",h),b.module("ngSanitize").directive("ngBindHtml",["$sanitize",function(a){return function(b,c,d){c.addClass("ng-binding").data("$binding",d.ngBindHtml),b.$watch(d.ngBindHtml,function(b){b=a(b),c.html(b||"")})}}]),b.module("ngSanitize").filter("linky",function(){var a=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,b=/^mailto:/;return function(c){if(!c)return c;for(var d,e,f,h=c,i=[],j=g(i);d=h.match(a);)e=d[0],d[2]==d[3]&&(e="mailto:"+e),f=d.index,j.chars(h.substr(0,f)),j.start("a",{href:e}),j.chars(d[0].replace(b,"")),j.end("a"),h=h.substring(f+d[0].length);return j.chars(h),i.join("")}})}(window,window.angular),angular.module("ui.config",[]).value("ui.config",{}),angular.module("ui.filters",["ui.config"]),angular.module("ui.directives",["ui.config"]),angular.module("ui",["ui.filters","ui.directives","ui.config"]),angular.module("ui.directives").directive("uiAnimate",["ui.config","$timeout",function(a,b){var c={};return angular.isString(a.animate)?c["class"]=a.animate:a.animate&&(c=a.animate),{restrict:"A",link:function(a,d,e){var f={};e.uiAnimate&&(f=a.$eval(e.uiAnimate),angular.isString(f)&&(f={"class":f})),f=angular.extend({"class":"ui-animate"},c,f),d.addClass(f["class"]),b(function(){d.removeClass(f["class"])},20,!1)}}}]),angular.module("ui.directives").directive("uiCalendar",["ui.config","$parse",function(a){return a.uiCalendar=a.uiCalendar||{},{require:"ngModel",restrict:"A",link:function(b,c,d){function e(){b.calendar=c.html("");var e=b.calendar.fullCalendar("getView");e&&(e=e.name);var g,h={defaultView:e,eventSources:f};g=d.uiCalendar?b.$eval(d.uiCalendar):{},angular.extend(h,a.uiCalendar,g),b.calendar.fullCalendar(h)}var f=b.$eval(d.ngModel),g=0,h=function(){var a=b.$eval(d.equalsTracker);return g=0,angular.forEach(f,function(a){angular.isArray(a)&&(g+=a.length)}),angular.isNumber(a)?g+f.length+a:g+f.length};e(),b.$watch(h,function(){e()})}}}]),angular.module("ui.directives").directive("uiCodemirror",["ui.config","$timeout",function(a,b){"use strict";var c=["cursorActivity","viewportChange","gutterClick","focus","blur","scroll","update"];return{restrict:"A",require:"ngModel",link:function(d,e,f,g){var h,i,j,k,l;if("textarea"!==e[0].type)throw new Error("uiCodemirror3 can only be applied to a textarea element");h=a.codemirror||{},i=angular.extend({},h,d.$eval(f.uiCodemirror)),j=function(a){return function(b,c){var e=b.getValue();e!==g.$viewValue&&(g.$setViewValue(e),d.$apply()),"function"==typeof a&&a(b,c)}},k=function(){l=CodeMirror.fromTextArea(e[0],i),l.on("change",j(i.onChange));for(var a,h=0,k=c.length;k>h;++h)a=i["on"+c[h].charAt(0).toUpperCase()+c[h].slice(1)],void 0!==a&&"function"==typeof a&&l.on(c[h],a);g.$formatters.push(function(a){if(angular.isUndefined(a)||null===a)return"";if(angular.isObject(a)||angular.isArray(a))throw new Error("ui-codemirror cannot use an object or an array as a model");return a}),g.$render=function(){l.setValue(g.$viewValue)},f.uiRefresh&&d.$watch(f.uiRefresh,function(a,c){a!==c&&b(l.refresh)})},b(k)}}}]),angular.module("ui.directives").directive("uiCurrency",["ui.config","currencyFilter",function(a,b){var c={pos:"ui-currency-pos",neg:"ui-currency-neg",zero:"ui-currency-zero"};return a.currency&&angular.extend(c,a.currency),{restrict:"EAC",require:"ngModel",link:function(a,d,e,f){var g,h,i;g=angular.extend({},c,a.$eval(e.uiCurrency)),h=function(a){var c;return c=1*a,d.toggleClass(g.pos,c>0),d.toggleClass(g.neg,0>c),d.toggleClass(g.zero,0===c),d.text(""===a?"":b(c,g.symbol)),!0},f.$render=function(){i=f.$viewValue,d.val(i),h(i)}}}}]),angular.module("ui.directives").directive("uiDate",["ui.config",function(a){"use strict";var b;return b={},angular.isObject(a.date)&&angular.extend(b,a.date),{require:"?ngModel",link:function(b,c,d,e){var f=function(){return angular.extend({},a.date,b.$eval(d.uiDate))},g=function(){var a=f();if(e){var d=function(){b.$apply(function(){var a=c.datepicker("getDate");c.datepicker("setDate",c.val()),e.$setViewValue(a),c.blur()})};if(a.onSelect){var g=a.onSelect;a.onSelect=function(a,c){d(),b.$apply(function(){g(a,c)})}}else a.onSelect=d;c.bind("change",d),e.$render=function(){var a=e.$viewValue;if(angular.isDefined(a)&&null!==a&&!angular.isDate(a))throw new Error("ng-Model value must be a Date object - currently it is a "+typeof a+" - use ui-date-format to convert it from a string");c.datepicker("setDate",a)}}c.datepicker("destroy"),c.datepicker(a),e&&e.$render()};b.$watch(f,g,!0)}}}]).directive("uiDateFormat",["ui.config",function(a){var b={require:"ngModel",link:function(b,c,d,e){var f=d.uiDateFormat||a.dateFormat;f?(e.$formatters.push(function(a){return angular.isString(a)?$.datepicker.parseDate(f,a):void 0}),e.$parsers.push(function(a){return a?$.datepicker.formatDate(f,a):void 0})):(e.$formatters.push(function(a){return angular.isString(a)?new Date(a):void 0}),e.$parsers.push(function(a){return a?a.toISOString():void 0}))}};return b}]),angular.module("ui.directives").directive("uiEvent",["$parse",function(a){return function(b,c,d){var e=b.$eval(d.uiEvent);angular.forEach(e,function(d,e){var f=a(d);c.bind(e,function(a){var c=Array.prototype.slice.call(arguments);c=c.splice(1),b.$apply(function(){f(b,{$event:a,$params:c})})})})}}]),angular.module("ui.directives").directive("uiIf",[function(){return{transclude:"element",priority:1e3,terminal:!0,restrict:"A",compile:function(a,b,c){return function(a,b,d){var e,f;a.$watch(d.uiIf,function(d){e&&(e.remove(),e=void 0),f&&(f.$destroy(),f=void 0),d&&(f=a.$new(),c(f,function(a){e=a,b.after(a)}))})}}}}]),angular.module("ui.directives").directive("uiJq",["ui.config","$timeout",function(a,b){return{restrict:"A",compile:function(c,d){if(!angular.isFunction(c[d.uiJq]))throw new Error('ui-jq: The "'+d.uiJq+'" function does not exist');var e=a.jq&&a.jq[d.uiJq];return function(a,c,d){function f(){b(function(){c[d.uiJq].apply(c,g)},0,!1)}var g=[];d.uiOptions?(g=a.$eval("["+d.uiOptions+"]"),angular.isObject(e)&&angular.isObject(g[0])&&(g[0]=angular.extend({},e,g[0]))):e&&(g=[e]),d.ngModel&&c.is("select,input,textarea")&&c.on("change",function(){c.trigger("input")}),d.uiRefresh&&a.$watch(d.uiRefresh,function(){f()}),f()}}}}]),angular.module("ui.directives").factory("keypressHelper",["$parse",function(a){var b={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},c=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};return function(d,e,f,g){var h,i=[];h=e.$eval(g["ui"+c(d)]),angular.forEach(h,function(b,c){var d,e;e=a(b),angular.forEach(c.split(" "),function(a){d={expression:e,keys:{}},angular.forEach(a.split("-"),function(a){d.keys[a]=!0}),i.push(d)})}),f.bind(d,function(a){var c=a.metaKey||a.altKey,f=a.ctrlKey,g=a.shiftKey,h=a.keyCode;"keypress"===d&&!g&&h>=97&&122>=h&&(h-=32),angular.forEach(i,function(d){var h=d.keys[b[a.keyCode]]||d.keys[a.keyCode.toString()]||!1,i=d.keys.alt||!1,j=d.keys.ctrl||!1,k=d.keys.shift||!1;h&&i==c&&j==f&&k==g&&e.$apply(function(){d.expression(e,{$event:a})})})})}}]),angular.module("ui.directives").directive("uiKeydown",["keypressHelper",function(a){return{link:function(b,c,d){a("keydown",b,c,d)}}}]),angular.module("ui.directives").directive("uiKeypress",["keypressHelper",function(a){return{link:function(b,c,d){a("keypress",b,c,d)}}}]),angular.module("ui.directives").directive("uiKeyup",["keypressHelper",function(a){return{link:function(b,c,d){a("keyup",b,c,d)}}}]),function(){function a(a,b,c,d){angular.forEach(b.split(" "),function(b){var e={type:"map-"+b};google.maps.event.addListener(c,b,function(b){d.triggerHandler(angular.extend({},e,b)),a.$$phase||a.$apply()})})}function b(b,d){c.directive(b,[function(){return{restrict:"A",link:function(c,e,f){c.$watch(f[b],function(b){a(c,d,b,e)})}}}])}var c=angular.module("ui.directives");c.directive("uiMap",["ui.config","$parse",function(b,c){var d="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed",e=b.map||{};return{restrict:"A",link:function(b,f,g){var h=angular.extend({},e,b.$eval(g.uiOptions)),i=new google.maps.Map(f[0],h),j=c(g.uiMap);j.assign(b,i),a(b,d,i,f)}}}]),c.directive("uiMapInfoWindow",["ui.config","$parse","$compile",function(b,c,d){var e="closeclick content_change domready position_changed zindex_changed",f=b.mapInfoWindow||{};return{link:function(b,g,h){var i=angular.extend({},f,b.$eval(h.uiOptions));i.content=g[0];var j=c(h.uiMapInfoWindow),k=j(b);k||(k=new google.maps.InfoWindow(i),j.assign(b,k)),a(b,e,k,g),g.replaceWith("<div></div>");var l=k.open;k.open=function(a,c,e,f,h,i){d(g.contents())(b),l.call(k,a,c,e,f,h,i)}}}}]),b("uiMapMarker","animation_changed click clickable_changed cursor_changed dblclick drag dragend draggable_changed dragstart flat_changed icon_changed mousedown mouseout mouseover mouseup position_changed rightclick shadow_changed shape_changed title_changed visible_changed zindex_changed"),b("uiMapPolyline","click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"),b("uiMapPolygon","click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"),b("uiMapRectangle","bounds_changed click dblclick mousedown mousemove mouseout mouseover mouseup rightclick"),b("uiMapCircle","center_changed click dblclick mousedown mousemove mouseout mouseover mouseup radius_changed rightclick"),b("uiMapGroundOverlay","click dblclick")}(),angular.module("ui.directives").directive("uiMask",[function(){return{require:"ngModel",link:function(a,b,c,d){d.$render=function(){var e=d.$viewValue||"";b.val(e),b.mask(a.$eval(c.uiMask))},d.$parsers.push(function(a){var c=b.isMaskValid()||angular.isUndefined(b.isMaskValid())&&b.val().length>0;return d.$setValidity("mask",c),c?a:void 0}),b.bind("keyup",function(){a.$apply(function(){d.$setViewValue(b.mask())})})}}}]),angular.module("ui.directives").directive("uiReset",["ui.config",function(a){var b=null;return void 0!==a.reset&&(b=a.reset),{require:"ngModel",link:function(a,c,d,e){var f;f=angular.element('<a class="ui-reset" />'),c.wrap('<span class="ui-resetwrap" />').after(f),f.bind("click",function(c){c.preventDefault(),a.$apply(function(){e.$setViewValue(d.uiReset?a.$eval(d.uiReset):b),e.$render()})})}}}]),angular.module("ui.directives").directive("uiRoute",["$location","$parse",function(a,b){return{restrict:"AC",compile:function(c,d){var e;if(d.uiRoute)e="uiRoute";else if(d.ngHref)e="ngHref";else{if(!d.href)throw new Error("uiRoute missing a route or href property on "+c[0]);e="href"}return function(c,d,f){function g(b){(hash=b.indexOf("#"))>-1&&(b=b.substr(hash+1)),(j=function(){i(c,a.path().indexOf(b)>-1)})()}function h(b){(hash=b.indexOf("#"))>-1&&(b=b.substr(hash+1)),(j=function(){var d=new RegExp("^"+b+"$",["i"]);i(c,d.test(a.path()))})()}var i=b(f.ngModel||f.routeModel||"$uiRoute").assign,j=angular.noop;switch(e){case"uiRoute":f.uiRoute?h(f.uiRoute):f.$observe("uiRoute",h);break;case"ngHref":f.ngHref?g(f.ngHref):f.$observe("ngHref",g);break;case"href":g(f.href)}c.$on("$routeChangeSuccess",function(){j()})}}}}]),angular.module("ui.directives").directive("uiScrollfix",["$window",function(a){"use strict";return{link:function(b,c,d){var e=c.offset().top;d.uiScrollfix?"-"===d.uiScrollfix.charAt(0)?d.uiScrollfix=e-d.uiScrollfix.substr(1):"+"===d.uiScrollfix.charAt(0)&&(d.uiScrollfix=e+parseFloat(d.uiScrollfix.substr(1))):d.uiScrollfix=e,angular.element(a).on("scroll.ui-scrollfix",function(){var b;if(angular.isDefined(a.pageYOffset))b=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;b=e.scrollTop}!c.hasClass("ui-scrollfix")&&b>d.uiScrollfix?c.addClass("ui-scrollfix"):c.hasClass("ui-scrollfix")&&b<d.uiScrollfix&&c.removeClass("ui-scrollfix")})}}}]),angular.module("ui.directives").directive("uiSelect2",["ui.config","$timeout",function(a,b){var c={};return a.select2&&angular.extend(c,a.select2),{require:"?ngModel",compile:function(a,d){var e,f,g,h=a.is("select"),i=void 0!==d.multiple;return a.is("select")&&(f=a.find("option[ng-repeat], option[data-ng-repeat]"),f.length&&(g=f.attr("ng-repeat")||f.attr("data-ng-repeat"),e=jQuery.trim(g.split("|")[0]).split(" ").pop())),function(a,d,f,g){var j=angular.extend({},c,a.$eval(f.uiSelect2));if(h?(delete j.multiple,delete j.initSelection):i&&(j.multiple=!0),g&&(g.$render=function(){h?d.select2("val",g.$modelValue):i?g.$modelValue?angular.isArray(g.$modelValue)?d.select2("data",g.$modelValue):d.select2("val",g.$modelValue):d.select2("data",[]):angular.isObject(g.$modelValue)?d.select2("data",g.$modelValue):d.select2("val",g.$modelValue)},e&&a.$watch(e,function(a){a&&b(function(){d.select2("val",g.$viewValue),d.trigger("change")})}),!h&&(d.bind("change",function(){a.$apply(function(){g.$setViewValue(d.select2("data"))})}),j.initSelection))){var k=j.initSelection;j.initSelection=function(a,b){k(a,function(a){g.$setViewValue(a),b(a)})}}f.$observe("disabled",function(a){d.select2(a&&"disable"||"enable")}),f.ngMultiple&&a.$watch(f.ngMultiple,function(){d.select2(j)}),d.val(a.$eval(f.ngModel)),b(function(){d.select2(j),j.initSelection||h||g.$setViewValue(d.select2("data"))})}}}}]),angular.module("ui.directives").directive("uiShow",[function(){return function(a,b,c){a.$watch(c.uiShow,function(a){a?b.addClass("ui-show"):b.removeClass("ui-show")})}}]).directive("uiHide",[function(){return function(a,b,c){a.$watch(c.uiHide,function(a){a?b.addClass("ui-hide"):b.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){return function(a,b,c){a.$watch(c.uiToggle,function(a){a?b.removeClass("ui-hide").addClass("ui-show"):b.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.directives").directive("uiSortable",["ui.config",function(a){return{require:"?ngModel",link:function(b,c,d,e){var f,g,h,i,j,k,l,m,n;j=angular.extend({},a.sortable,b.$eval(d.uiSortable)),e&&(e.$render=function(){c.sortable("refresh")},h=function(a,b){b.item.sortable={index:b.item.index()}},i=function(a,b){b.item.sortable.resort=e},f=function(a,b){b.item.sortable.relocate=!0,e.$modelValue.splice(b.item.index(),0,b.item.sortable.moved)},g=function(a,b){b.item.sortable.moved=1===e.$modelValue.length?e.$modelValue.splice(0,1)[0]:e.$modelValue.splice(b.item.sortable.index,1)[0]},onStop=function(a,c){if(c.item.sortable.resort&&!c.item.sortable.relocate){var d,e;e=c.item.sortable.index,d=c.item.index(),d>e&&d--,c.item.sortable.resort.$modelValue.splice(d,0,c.item.sortable.resort.$modelValue.splice(e,1)[0])}(c.item.sortable.resort||c.item.sortable.relocate)&&b.$apply()},m=j.start,j.start=function(a,b){h(a,b),"function"==typeof m&&m(a,b)},_stop=j.stop,j.stop=function(a,b){onStop(a,b),"function"==typeof _stop&&_stop(a,b)},n=j.update,j.update=function(a,b){i(a,b),"function"==typeof n&&n(a,b)},k=j.receive,j.receive=function(a,b){f(a,b),"function"==typeof k&&k(a,b)},l=j.remove,j.remove=function(a,b){g(a,b),"function"==typeof l&&l(a,b)}),c.sortable(j)}}}]),angular.module("ui.directives").directive("uiTinymce",["ui.config",function(a){return a.tinymce=a.tinymce||{},{require:"ngModel",link:function(b,c,d,e){var f,g={onchange_callback:function(a){a.isDirty()&&(a.save(),e.$setViewValue(c.val()),b.$$phase||b.$apply())},handle_event_callback:function(){return this.isDirty()&&(this.save(),e.$setViewValue(c.val()),b.$$phase||b.$apply()),!0},setup:function(a){a.onSetContent.add(function(a){a.isDirty()&&(a.save(),e.$setViewValue(c.val()),b.$$phase||b.$apply())})}};f=d.uiTinymce?b.$eval(d.uiTinymce):{},angular.extend(g,a.tinymce,f),setTimeout(function(){c.tinymce(g)})}}}]),angular.module("ui.directives").directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e,f,g={},h=a.$eval(c.uiValidate);h&&(angular.isString(h)&&(h={validator:h}),angular.forEach(h,function(b,c){e=function(e){return a.$eval(b,{$value:e})?(d.$setValidity(c,!0),e):void d.$setValidity(c,!1)},g[c]=e,d.$formatters.push(e),d.$parsers.push(e)}),c.uiValidateWatch&&(f=a.$eval(c.uiValidateWatch),angular.isString(f)?a.$watch(f,function(){angular.forEach(g,function(a){a(d.$modelValue)})}):angular.forEach(f,function(b,c){a.$watch(b,function(){g[c](d.$modelValue)})})))}}}),angular.module("ui.filters").filter("format",function(){return function(a,b){if(!a)return a;var c,d=a.toString();return void 0===b?d:angular.isArray(b)||angular.isObject(b)?(c=angular.isArray(b)&&"$"||":",angular.forEach(b,function(a,b){d=d.split(c+b).join(a)}),d):d.split("$0").join(b)}}),angular.module("ui.filters").filter("highlight",function(){return function(a,b,c){return b||angular.isNumber(b)?(a=a.toString(),b=b.toString(),c?a.split(b).join('<span class="ui-match">'+b+"</span>"):a.replace(new RegExp(b,"gi"),'<span class="ui-match">$&</span>')):a}}),angular.module("ui.filters").filter("inflector",function(){function a(a){return a.replace(/^([a-z])|\s+([a-z])/g,function(a){return a.toUpperCase()})}function b(a,b){return a.replace(/[A-Z]/g,function(a){return b+a})}var c={humanize:function(c){return a(b(c," ").split("_").join(" "))},underscore:function(a){return a.substr(0,1).toLowerCase()+b(a.substr(1),"_").toLowerCase().split(" ").join("_")},variable:function(b){return b=b.substr(0,1).toLowerCase()+a(b.split("_").join(" ")).substr(1).split(" ").join("")}};return function(a,b){return b!==!1&&angular.isString(a)?(b=b||"humanize",c[b](a)):a}}),angular.module("ui.filters").filter("unique",function(){return function(a,b){if(b===!1)return a;if((b||angular.isUndefined(b))&&angular.isArray(a)){var c=[],d=function(a){return angular.isObject(a)&&angular.isString(b)?a[b]:a};angular.forEach(a,function(a){for(var b=!1,e=0;e<c.length;e++)if(angular.equals(d(c[e]),d(a))){b=!0;break}b||c.push(a)}),a=c}return a}});