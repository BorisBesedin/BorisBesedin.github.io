(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ef969638"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"d94e9b09"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],h.parentNode.removeChild(h),r(s)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/projects/weather-vue/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"016c":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hourly"},[t.hourlyData.data?r("ul",{staticClass:"list"},t._l(t.hourlyData.data.slice(0,24),(function(e){return r("HourlyItem",{key:e.id,attrs:{offset:t.offset,hourData:e}})})),1):t._e()])},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"hour-item"},[r("span",{staticClass:"time"},[t._v(t._s(t.getHours(t.hourData.time))+":00")]),r("span",{staticClass:"temperature"},[t._v(t._s(Math.floor(t.hourData.temperature))+" ℃")]),r("img",{staticClass:"icon",attrs:{src:t.getIcon(this.hourData.icon),alt:"icon",width:"40",height:"40"}})])},s=[],i={props:["hourData","offset"],methods:{getHours:function(t){var e=new Date(1e3*this.hourData.time).getUTCHours()+this.offset;return e>23&&(e-=24),e<0&&(e=24+e),e},getIcon:function(t){return"icons/".concat(t,".png")}}},c=i,u=(r("6149"),r("2877")),l=Object(u["a"])(c,o,s,!1,null,null,null),f=l.exports,h={props:["hourlyData","offset"],components:{HourlyItem:f}},d=h,p=(r("ea5c"),Object(u["a"])(d,n,a,!1,null,"3cdaf19f",null));e["a"]=p.exports},2759:function(t,e,r){"use strict";var n=r("3147"),a=r.n(n);a.a},3147:function(t,e,r){},"555f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-spinner"},[r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div")])}],o={},s=o,i=(r("a071"),r("2877")),c=Object(i["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("h1",{staticClass:"title"},[t._v("What's the weather?")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/cityes"}},[t._v("Cityes")])],1)]),r("router-view",{staticClass:"content"})],1)},o=[],s={},i=s,c=(r("5c0b"),r("2877")),u=Object(c["a"])(i,a,o,!1,null,null,null),l=u.exports,f=(r("d3b7"),r("8c4f")),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home wrapper"},[r("h2",{staticClass:"location"},[t._v("Your location")]),r("h3",{staticClass:"name"},[t._v(t._s(t.weather.title))]),r("p",{staticClass:"timezone"},[t._v(t._s(t.weather.timezone))]),r("div",{staticClass:"weather-info"},[t.weather.weatherData.hourly?r("CurrentCity",{staticClass:"current",attrs:{weather:t.weather}}):t._e(),t.weather.weatherData.hourly?r("HourlyWeather",{staticClass:"hourlyList",attrs:{hourlyData:t.weather.weatherData.hourly,offset:t.weather.weatherData.offset}}):t._e()],1),t.loading?r("Loader",{staticClass:"loader"}):t._e()],1)},d=[],p=(r("a4d3"),r("e01a"),r("99af"),r("555f")),v=r("c461"),m=r("016c"),g=r("d8f6"),y={name:"Home",data:function(){return{weather:{weatherData:{},title:"City",timezone:"timezone",temperature:0,iconURL:"icons/sunny.png"},loading:!0}},components:{CurrentCity:v["a"],Loader:p["a"],HourlyWeather:m["a"]},mounted:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.long=e.coords.longitude,t.lat=e.coords.latitude;var r="https://geocode-maps.yandex.ru/1.x/?apikey=0f35a098-67cb-49e4-a28d-27b3cd6167d0&geocode=".concat(t.long,", ").concat(t.lat,"&format=json&lang=en_RU");fetch(r).then((function(t){return t.json()})).then((function(e){Object(g["a"])(t.lat,t.long).then((function(r){t.weather={weatherData:r,title:e.response.GeoObjectCollection.featureMember[0].GeoObject.description,timezone:r.timezone,temperature:r.currently.temperature,iconURL:"icons/".concat(r.currently.icon,".png")},t.loading=!1}))})).catch((function(){alert("somethings wrong")}))}))}},w=y,b=(r("2759"),Object(c["a"])(w,h,d,!1,null,"0efdf066",null)),_=b.exports;n["a"].use(f["a"]);var C=[{path:"/",name:"Home",component:_,props:!0},{path:"/cityes",name:"Cityes",props:!0,component:function(){return r.e("about").then(r.bind(null,"703a"))}}],j=new f["a"]({routes:C}),D=j;n["a"].config.productionTip=!1,new n["a"]({router:D,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},6149:function(t,e,r){"use strict";var n=r("77db"),a=r.n(n);a.a},"6d73":function(t,e,r){},"75a9":function(t,e,r){"use strict";var n=r("6d73"),a=r.n(n);a.a},"77db":function(t,e,r){},"85f5":function(t,e,r){},"9c0c":function(t,e,r){},a071:function(t,e,r){"use strict";var n=r("c25f"),a=r.n(n);a.a},c25f:function(t,e,r){},c461:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"current-city"},[t.weather.weatherData.hourly?r("p",{staticClass:"description"},[t._v(t._s(t.weather.weatherData.hourly.summary))]):t._e(),r("img",{staticClass:"icon",attrs:{width:"75",height:"75",alt:"icon",src:t.weather.iconURL}}),r("span",{staticClass:"temperature"},[t._v(t._s(Math.floor(t.weather.temperature))+" ℃")]),r("span",[t._v(t._s(t.weather.weatherData.currently.summary))]),r("span",[t._v("pressure: "+t._s(t.weather.weatherData.currently.pressure))]),r("span",[t._v("wind speed: "+t._s(t.weather.weatherData.currently.windSpeed))])])},a=[],o={props:["weather"]},s=o,i=(r("75a9"),r("2877")),c=Object(i["a"])(s,n,a,!1,null,"4faa11e4",null);e["a"]=c.exports},d8f6:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("99af"),r("d3b7"),r("96cf");var n=r("1da1"),a=function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,r){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://thingproxy.freeboard.io/fetch/",a="".concat(n,"https://api.darksky.net/forecast/f4e932d02c874450a655bdf5222e1659/").concat(e,", ").concat(r,"?units=si"),t.next=4,fetch(a,{headers:{"Access-Control-Allow-Origin":"https://borisbesedin.github.io/"}});case 4:if(o=t.sent,o.ok){t.next=7;break}throw new Error("Could not fetch ".concat(a,", status: ").concat(o.status));case 7:return t.next=9,o.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},ea5c:function(t,e,r){"use strict";var n=r("85f5"),a=r.n(n);a.a}});
//# sourceMappingURL=app.4c4a3aac.js.map