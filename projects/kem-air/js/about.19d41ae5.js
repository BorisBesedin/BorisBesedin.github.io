(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"184d":function(t,e,o){},"4bb4":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"map"},[o("yandex-map",{attrs:{settings:t.settings,coords:t.coords,controls:[],zoom:13,options:{maxZoom:14,minZoom:12}}},t._l(t.data,(function(e){return o("ymap-marker",{key:e.id,attrs:{coords:e.coords,"marker-id":"123",icon:{color:t.setColor(e.data.PM25),content:e.data.PM25}},on:{click:function(o){return t.showInfo(e)}}})})),1),t.infoPopupIsOpened?o("InfoPopup",{attrs:{data:t.infoPopupData},on:{"close-popup":function(e){t.infoPopupIsOpened=!1}}}):t._e()],1)},r=[];function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(t,e){var o=e.options,n=e.callbacks,r=e.map,a=e.useObjectManager,i=e.objectManagerClusterize,s={},l=[];if(t.forEach((function(t){t.clusterName?s[t.clusterName]=s[t.clusterName]?[].concat(c(s[t.clusterName]),[t]):[t]:l.push(t)})),Object.keys(s).forEach((function(t){var e=o[t]||{},c=n[t]||{},l=e.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";e.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(l);var u=e.clusterBalloonLayout||e.clusterLayout;delete e.clusterBalloonLayout;var d=u?ymaps.templateLayoutFactory.createClass(u):e.clusterBalloonContentLayout||"cluster#balloonTwoColumns";e.clusterBalloonContentLayout=d;var p=e.clusterIconContentLayout;if(e.clusterIconContentLayout=p&&ymaps.templateLayoutFactory.createClass(p),a){var m=new ymaps.ObjectManager(Object.assign({clusterize:i},e));Object.keys(c).forEach((function(t){m.clusters.events.add(t,c[t])})),m.add(s[t]),r.geoObjects.add(m)}else{var f=new ymaps.Clusterer(e);Object.keys(c).forEach((function(t){f.events.add(t,c[t])})),e.createCluster&&(f.createCluster=e.createCluster),f.add(s[t]),r.geoObjects.add(f)}})),l.length){var u=a?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;l.forEach((function(t){return u.add(t)})),r.geoObjects.add(u)}}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}function d(t){return(t.icon.color||"blue")+(t.icon.glyph?u(t.icon.glyph):t.icon.content?"Stretchy":"")}function p(t){return t.map((function(t){return Array.isArray(t)?p(t):+t}))}function m(t,e){var o=[];return function t(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date)return+e==+n;if("object"!==a(e)||"object"!==a(n))return!1;if(function(t,e){for(var n=o.length;n--;)if(!(o[n][0]!==t&&o[n][0]!==e||o[n][1]!==e&&o[n][1]!==t))return!0;return!1}(e,n))return!0;o.push([e,n]);var r=Object.keys(e),i=r.length;if(Object.keys(n).length!==i)return!1;for(;i--;)if(!t(e[r[i]],n[r[i]]))return!1;return!0}(t,e)}var f=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var e,o,n;return e=t,(o=[{key:"$on",value:function(t,e){var o=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(e),function(){o.events[t]=o.events[t].filter((function(t){return e!==t}))}}},{key:"$emit",value:function(t,e){var o=this.events[t];o&&o.forEach((function(t){return t(e)}))}}])&&i(e.prototype,o),n&&i(e,n),t}()),h=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function y(t){return 0===t.filter((function(t){return![].concat(h,["default"]).includes(t)})).length}function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,o){if(window.ymaps)return e();if(document.getElementById("vue-yandex-maps"))f.$on("scriptIsLoaded",e);else{var n=document.createElement("SCRIPT"),r=t.apiKey,a=void 0===r?"":r,i=t.lang,s=void 0===i?"ru_RU":i,c=t.version,l=void 0===c?"2.1":c,u=t.coordorder,d=void 0===u?"latlong":u,p=t.debug,m=void 0!==p&&p?"debug":"release",h="lang=".concat(s).concat(a&&"&apikey=".concat(a),"&mode=").concat(m,"&coordorder=").concat(d),y="https://api-maps.yandex.ru/".concat(l,"/?").concat(h);n.setAttribute("src",y),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),f.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready((function(){f.ymapReady=!0,f.$emit("scriptIsLoaded"),e()}))},n.onerror=o}}))}var g=f,k=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],v={pluginOptions:{},provide:function(){var t,e,o=this,n=[],r=[];return{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(e){o.myMap.geoObjects&&(n.push(e),t&&clearTimeout(t),t=setTimeout((function(){o.deleteMarkers(n),n=[]}),0))},compareValues:function(t){var n=t.newVal,a=t.oldVal,i=t.marker;m(n,a)||(r.push(i),e&&clearTimeout(e),e=setTimeout((function(){o.setMarkers(r),r=[]}),0))}}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null,markers:[]}},props:{coords:{type:Array,required:!0},zoom:{validator:function(t){return!Number.isNaN(t)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(t){return y(t)}},detailedControls:{type:Object,validator:function(t){return y(Object.keys(t))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(t){return["map","satellite","hybrid"].includes(t)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},showAllMarkers:Boolean},computed:{coordinates:function(){return this.coords.map((function(t){return+t}))}},methods:{init:function(){var t=this;window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),k.forEach((function(e){return t.myMap.events.add(e,(function(o){return t.$emit(e,o)}))})),this.myMap.events.add("boundschange",(function(e){var o=e.originalEvent,n=o.newZoom,r=o.newCenter,a=o.newBounds;t.$emit("boundschange",e),t.$emit("update:zoom",n),t.$emit("update:coords",r),t.$emit("update:bounds",a)})),this.detailedControls&&Object.keys(this.detailedControls).forEach((function(e){t.myMap.controls.remove(e),t.myMap.controls.add(e,t.detailedControls[e])})),!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(t){var e=this;this.markers.push(t),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout((function(){e.setMarkers(e.markers)}),0)},setMarkers:function(t){var e=this,o={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};if(this.markers!==t){var n=t.map((function(t){return e.useObjectManager?t.id:t.properties.get("markerId")}));this.deleteMarkers(n),l(t,o),this.$emit("markers-was-change",n)}else l(t,o);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(t){var e=this;this.myMap.geoObjects.each((function(o){var n=[];if(e.useObjectManager)o.remove(t);else{var r,a=function(e){var o=e.properties.get("markerId");t.includes(o)&&n.push(e)};if(o.each)o.each(a),r=o.getLength();else if(o.getGeoObjects){var i=o.getGeoObjects();i.forEach(a),r=i.length}0===r||r===n.length?e.myMap.geoObjects.remove(o):n.length&&n.forEach((function(t){return o.remove(t)}))}})),this.$emit("markers-was-delete",t)}},watch:{coordinates:function(t){this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(t,{checkZoomRange:!0})},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(t){this.myMap.setBounds&&this.myMap.setBounds(t)}},render:function(t){return t("section",{class:"ymap-container",ref:"mapContainer"},[t("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),this.isReady&&t("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var t=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver((function(){t.myMap.container&&t.myMap.container.fitToViewport()}));var e=this.$refs.mapContainer;if(this.mapObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),g.scriptIsNotAttached){var o=this.debug;b(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){s(t,e,o[e])}))}return t}({},this.$options.pluginOptions,this.settings,{debug:o}))}g.ymapReady?ymaps.ready(this.init):g.$on("scriptIsLoaded",(function(){ymaps.ready(t.init)}))},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},O=["placemark","polyline","rectangle","polygon","circle"],C=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],M={inject:["useObjectManager","addMarker","deleteMarker","compareValues"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(t){return O.includes(t.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(t){return!Number.isNaN(t)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},data:function(){return{unwatchArr:[]}},render:function(t){return this.$slots.balloon&&t("div",{style:"display: none;"},[this.$slots.balloon])},mounted:function(){var t=this;Object.keys(this.$props).forEach((function(e){t.unwatchArr.push(t.$watch(e,(function(e,o){return t.compareValues({newVal:e,oldVal:o,marker:t.defineMarker()})})))})),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var t=this,e={};this.balloonTemplate&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.balloonTemplate)}),this.$slots.balloon&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.$slots.balloon[0].elm.outerHTML)});var o={markerId:this.markerId,markerType:this.markerType||"placemark",coords:p(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:e};this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(o.iconContent=this.icon.content,o.iconLayout=this.icon.layout,o.iconImageHref=this.icon.imageHref,o.iconImageSize=this.icon.imageSize,o.iconImageOffset=this.icon.imageOffset,o.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(o.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):o.icon=this.icon;var n=function(t,e){var o=u(t);if(!e)return o;switch(o){case"Placemark":return"Point";case"Polyline":return"LineString";default:return o}}(o.markerType,this.useObjectManager),r={hintContent:o.hintContent,iconContent:o.icon?o.icon.content:o.iconContent,markerId:o.markerId},a=o.balloon?{balloonContentHeader:o.balloon.header,balloonContentBody:o.balloon.body,balloonContentFooter:o.balloon.footer}:{},i=Object.assign(r,a,o.properties),s=o.iconLayout?{iconLayout:o.iconLayout,iconImageHref:o.iconImageHref,iconImageSize:o.iconImageSize,iconImageOffset:o.iconImageOffset,iconContentOffset:o.iconContentOffset,iconContentLayout:o.iconContentLayout}:{preset:o.icon&&"islands#".concat(d(o),"Icon")},c=o.markerStroke?{strokeColor:o.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(o.markerStroke.opacity)>=0?parseFloat(o.markerStroke.opacity):1,strokeStyle:o.markerStroke.style,strokeWidth:parseFloat(o.markerStroke.width)>=0?parseFloat(o.markerStroke.width):1}:{},l=o.markerFill?{fill:o.markerFill.enabled||!0,fillColor:o.markerFill.color||"0066ff99",fillOpacity:parseFloat(o.markerFill.opacity)>=0?parseFloat(o.markerFill.opacity):1,fillImageHref:o.markerFill.imageHref||""}:{},m=Object.assign(s,c,l,o.balloonOptions,o.options);"Circle"===n&&(o.coords=[o.coords,o.circleRadius]);var f=function(t,e){var o=e?{type:"Feature",id:t.properties.markerId,geometry:{type:t.markerType,coordinates:t.coords},properties:t.properties,options:t.options}:new ymaps[t.markerType](t.coords,t.properties,t.options);return o.clusterName=t.clusterName,o}({properties:i,options:m,markerType:n,coords:o.coords,clusterName:o.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||C.forEach((function(e){return f.events.add(e,(function(o){return t.$emit(e,o)}))})),f}},beforeDestroy:function(){this.unwatchArr.forEach((function(t){return t()})),this.deleteMarker(this.markerId)}};v.install=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,v.pluginOptions=o,e.component("yandex-map",v),e.component("ymap-marker",M))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(v);var j=v,w=M,I=o("8e00"),L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"info"},[o("button",{staticClass:"info__close popup-close",on:{click:function(e){return t.$emit("close-popup")}}}),o("h3",{staticClass:"info__title"},[t._v("Датчик #"+t._s(t.data.id))]),o("p",{staticClass:"info__text"},[t._v(t._s(t.data.coords))]),o("p",{staticClass:"info__text"},[t._v("Адрес: "+t._s())]),o("p",{staticClass:"info__text"},[t._v("PM2.5: "+t._s(t.data.data.PM25))]),o("p",{staticClass:"info__text"},[t._v("Уровень загрязнения: "),o("span",{staticClass:"info__level",class:{green:"Низкий"===t.level,yellow:"Средний"===t.level,red:"Высокий"===t.level}},[t._v(t._s(t.level))])])])},S=[],_=(o("d3b7"),{props:["data"],computed:{level:function(){return this.data.data.PM25<20?"Низкий":this.data.data.PM25>=20&&this.data.data.PM25<50?"Средний":this.data.data.PM25>=50?"Высокий":"none"}},mounted:function(){var t="https://geocode-maps.yandex.ru/1.x/?apikey=0f35a098-67cb-49e4-a28d-27b3cd6167d0&geocode=55.354775,86.088120&format=json&lang=ru_RU";fetch(t).then((function(t){return t.json()})).then((function(t){console.log(t)}))}}),P=_,$=(o("638e"),o("2877")),A=Object($["a"])(P,L,S,!1,null,"aa7726dc",null),T=A.exports,E={apiKey:"0f35a098-67cb-49e4-a28d-27b3cd6167d0",lang:"ru_RU",coordorder:"latlong",version:"2.1",controls:""},F=E,N={data:function(){return{settings:F,coords:[55.355669,86.08817],data:I,infoPopupData:null,infoPopupIsOpened:!1}},components:{yandexMap:j,ymapMarker:w,InfoPopup:T},methods:{showInfo:function(t){this.infoPopupData=t,this.infoPopupIsOpened=!0},setColor:function(t){return t<10?"green":t>=10&&t<20?"olive":t>=20&&t<25?"yellow":t>=25&&t<50?"orange":t>=50&&t<75?"darkOrange":t>=75?"red":void 0}}},x=N,z=(o("8143"),Object($["a"])(x,n,r,!1,null,"cc69aa3c",null));e["default"]=z.exports},"638e":function(t,e,o){"use strict";o("184d")},8143:function(t,e,o){"use strict";o("e3fc")},"8e00":function(t){t.exports=JSON.parse('[{"id":1,"coords":[55.35007,86.075142],"data":{"PM25":40}},{"id":2,"coords":[55.34204,86.092812],"data":{"PM25":20}},{"id":3,"coords":[55.354152,86.06389],"data":{"PM25":81}}]')},e3fc:function(t,e,o){}}]);
//# sourceMappingURL=about.19d41ae5.js.map