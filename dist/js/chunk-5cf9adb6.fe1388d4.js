(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cf9adb6"],{"0759":function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var a=r("2b0e"),i=r("b42e"),c=r("c637"),n=r("a723"),s=r("992e"),o=r("d82f"),l=r("cf75"),u=r("fa73"),d=r("7386"),b=r("aa0d");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function t(e,r){if(!e)return null;var a=(e.$options||{}).components,i=a[r];return i||t(e.$parent,r)},v=Object(l["d"])(Object(o["m"])(h(h({},Object(o["j"])(b["b"],["content","stacked"])),{},{icon:Object(l["c"])(n["u"]),stacked:Object(l["c"])(n["g"],!1)})),c["jb"]),O=a["default"].extend({name:c["jb"],functional:!0,props:v,render:function(t,e){var r=e.data,a=e.props,c=e.parent,n=Object(u["e"])(Object(u["h"])(a.icon||"")).replace(s["p"],"");return t(n&&g(c,"BIcon".concat(n))||d["a"],Object(i["a"])(r,{props:h(h({},a),{},{icon:null})}))}})},"0e20":function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s}));r("b680"),r("d3b7"),r("25f0"),r("ac1f"),r("1276"),r("159b"),r("fb6a"),r("a15b9"),r("d81d"),r("5319");var a=r("ca6e"),i=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var r=t.toString(),a=r.split(e),i=[];return a.forEach((function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);i.push(e)})),i.join(" ")},n=function(t){if(!t)return"";var e=t.split(" ").slice(0,3);return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")},s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new Date(t),i={month:"short",day:"numeric"};return e&&Object(a["b"])(r)&&(i={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",i).format(new Date(t))}},1148:function(t,e,r){"use strict";var a=r("a691"),i=r("1d80");t.exports="".repeat||function(t){var e=String(i(this)),r="",c=a(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(r+=e);return r}},"25f0":function(t,e,r){"use strict";var a=r("6eeb"),i=r("825a"),c=r("d039"),n=r("ad6d"),s="toString",o=RegExp.prototype,l=o[s],u=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&a(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,a=String(void 0===r&&t instanceof RegExp&&!("flags"in o)?n.call(t):r);return"/"+e+"/"+a}),{unsafe:!0})},"34b6":function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var a=r("2b0e"),i=r("b42e"),c=r("c637"),n=r("a723"),s=r("9b76"),o=r("365c"),l=r("cf75"),u=r("7c32"),d=r("7fa6"),b=Object(l["d"])({noBody:Object(l["c"])(n["g"],!1),rightAlign:Object(l["c"])(n["g"],!1),tag:Object(l["c"])(n["u"],"div"),verticalAlign:Object(l["c"])(n["u"],"top")},c["vb"]),f=a["default"].extend({name:c["vb"],functional:!0,props:b,render:function(t,e){var r=e.props,a=e.data,c=e.slots,n=e.scopedSlots,l=e.children,b=r.noBody,f=r.rightAlign,h=r.verticalAlign,p=b?l:[];if(!b){var g={},v=c(),O=n||{};p.push(t(d["a"],Object(o["b"])(s["i"],g,O,v)));var m=Object(o["b"])(s["c"],g,O,v);m&&p[f?"push":"unshift"](t(u["a"],{props:{right:f,verticalAlign:h}},m))}return t(r.tag,Object(i["a"])(a,{staticClass:"media"}),p)}})},"408a":function(t,e,r){var a=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},5319:function(t,e,r){"use strict";var a=r("d784"),i=r("825a"),c=r("7b0b"),n=r("50c4"),s=r("a691"),o=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,b=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,O=a.REPLACE_KEEPS_$0,m=v?"$":"$0";return[function(r,a){var i=o(this),c=void 0==r?void 0:r[t];return void 0!==c?c.call(r,i,a):e.call(String(i),r,a)},function(t,a){if(!v&&O||"string"===typeof a&&-1===a.indexOf(m)){var c=r(e,t,this,a);if(c.done)return c.value}var o=i(t),f=String(this),h="function"===typeof a;h||(a=String(a));var p=o.global;if(p){var j=o.unicode;o.lastIndex=0}var w=[];while(1){var C=u(o,f);if(null===C)break;if(w.push(C),!p)break;var S=String(C[0]);""===S&&(o.lastIndex=l(f,n(o.lastIndex),j))}for(var x="",k=0,_=0;_<w.length;_++){C=w[_];for(var P=String(C[0]),B=d(b(s(C.index),f.length),0),D=[],A=1;A<C.length;A++)D.push(g(C[A]));var E=C.groups;if(h){var z=[P].concat(D,B,f);void 0!==E&&z.push(E);var I=String(a.apply(void 0,z))}else I=y(P,f,B,D,E,a);B>=k&&(x+=f.slice(k,B)+I,k=B+P.length)}return x+f.slice(k)}];function y(t,r,a,i,n,s){var o=a+t.length,l=i.length,u=p;return void 0!==n&&(n=c(n),u=h),e.call(s,u,(function(e,c){var s;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,a);case"'":return r.slice(o);case"<":s=n[c.slice(1,-1)];break;default:var u=+c;if(0===u)return e;if(u>l){var d=f(u/10);return 0===d?e:d<=l?void 0===i[d-1]?c.charAt(1):i[d-1]+c.charAt(1):e}s=i[u-1]}return void 0===s?"":s}))}}))},"53ca":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"5b50":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-body",{staticClass:"pb-0"},[r("b-avatar",{staticClass:"mb-1",attrs:{variant:"light-"+t.color,size:"45"}},[r("feather-icon",{attrs:{size:"21",icon:t.icon}})],1),r("div",{staticClass:"truncate"},[r("h2",{staticClass:"mb-25 font-weight-bolder"},[t._v(" "+t._s(t.statistic)+" ")]),r("span",[t._v(t._s(t.statisticTitle))])])],1),r("vue-apex-charts",{attrs:{type:"area",height:"100",width:"100%",options:t.chartOptionsComputed,series:t.chartData}})],1)},i=[],c=(r("e9c4"),r("205f")),n=r("6197"),s=r("e8a3"),o=r("1321"),l=r.n(o),u=r("1dff"),d=r("8487"),b={components:{VueApexCharts:l.a,BCard:c["a"],BCardBody:n["a"],BAvatar:s["a"]},props:{icon:{required:!0},statistic:{required:!0},statisticTitle:{default:""},color:{default:"primary"},chartData:{default:function(){return[]}},chartOptions:{default:null}},computed:{chartOptionsComputed:function(){if(null===this.chartOptions){var t=JSON.parse(JSON.stringify(d["a"]));return t.theme.monochrome.color=u["b"][this.color],t}return this.chartOptions}}},f=b,h=r("2877"),p=Object(h["a"])(f,a,i,!1,null,null,null);e["a"]=p.exports},"7c32":function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var a=r("2b0e"),i=r("b42e"),c=r("c637"),n=r("a723"),s=r("cf75");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=Object(s["d"])({right:Object(s["c"])(n["g"],!1),tag:Object(s["c"])(n["u"],"div"),verticalAlign:Object(s["c"])(n["u"],"top")},c["wb"]),u=a["default"].extend({name:c["wb"],functional:!0,props:l,render:function(t,e){var r=e.props,a=e.data,c=e.children,n=r.verticalAlign,s="top"===n?"start":"bottom"===n?"end":n;return t(r.tag,Object(i["a"])(a,{staticClass:"media-aside",class:o({"media-aside-right":r.right},"align-self-".concat(s),s)}),c)}})},"7fa6":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var a=r("2b0e"),i=r("b42e"),c=r("c637"),n=r("a723"),s=r("cf75"),o=Object(s["d"])({tag:Object(s["c"])(n["u"],"div")},c["xb"]),l=a["default"].extend({name:c["xb"],functional:!0,props:o,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.tag,Object(i["a"])(a,{staticClass:"media-body"}),c)}})},"81d5":function(t,e,r){"use strict";var a=r("7b0b"),i=r("23cb"),c=r("50c4");t.exports=function(t){var e=a(this),r=c(e.length),n=arguments.length,s=i(n>1?arguments[1]:void 0,r),o=n>2?arguments[2]:void 0,l=void 0===o?r:i(o,r);while(l>s)e[s++]=t;return e}},8487:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));var a=r("1dff"),i={grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}},theme:{monochrome:{enabled:!0,color:a["b"].primary,shadeTo:"light",shadeIntensity:.65}}},c={grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:[a["b"].primary],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},a15b:function(t,e,r){"use strict";r.d(e,"a",(function(){return j}));var a=r("b42e"),i=r("c637"),c=r("a723"),n=r("2326"),s=r("228e"),o=r("6c06"),l=r("b508"),u=r("d82f"),d=r("cf75"),b=r("fa73");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=["start","end","center"],v=Object(l["a"])((function(t,e){return e=Object(b["h"])(Object(b["g"])(e)),e?Object(b["c"])(["row-cols",t,e].filter(o["a"]).join("-")):null})),O=Object(l["a"])((function(t){return Object(b["c"])(t.replace("cols",""))})),m=[],y=function(){var t=Object(s["b"])().reduce((function(t,e){return t[Object(d["g"])(e,"cols")]=Object(d["c"])(c["p"]),t}),Object(u["c"])(null));return m=Object(u["h"])(t),Object(d["d"])(Object(u["m"])(h(h({},t),{},{alignContent:Object(d["c"])(c["u"],null,(function(t){return Object(n["a"])(Object(n["b"])(g,"between","around","stretch"),t)})),alignH:Object(d["c"])(c["u"],null,(function(t){return Object(n["a"])(Object(n["b"])(g,"between","around"),t)})),alignV:Object(d["c"])(c["u"],null,(function(t){return Object(n["a"])(Object(n["b"])(g,"baseline","stretch"),t)})),noGutters:Object(d["c"])(c["g"],!1),tag:Object(d["c"])(c["u"],"div")})),i["Ob"])},j={name:i["Ob"],functional:!0,get props(){return delete this.props,this.props=y(),this.props},render:function(t,e){var r,i=e.props,c=e.data,n=e.children,s=i.alignV,o=i.alignH,l=i.alignContent,u=[];return m.forEach((function(t){var e=v(O(t),i[t]);e&&u.push(e)})),u.push((r={"no-gutters":i.noGutters},p(r,"align-items-".concat(s),s),p(r,"justify-content-".concat(o),o),p(r,"align-content-".concat(l),l),r)),t(i.tag,Object(a["a"])(c,{staticClass:"row",class:u}),n)}}},a15b9:function(t,e,r){"use strict";var a=r("23e7"),i=r("44ad"),c=r("fc6a"),n=r("a640"),s=[].join,o=i!=Object,l=n("join",",");a({target:"Array",proto:!0,forced:o||!l},{join:function(t){return s.call(c(this),void 0===t?",":t)}})},b28b:function(t,e,r){"use strict";r.d(e,"a",(function(){return C}));var a=r("b42e"),i=r("c637"),c=r("a723"),n=r("992e"),s=r("2326"),o=r("228e"),l=r("6c06"),u=r("7b1e"),d=r("b508"),b=r("d82f"),f=r("cf75"),h=r("fa73");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=["auto","start","end","center","baseline","stretch"],m=function(t,e,r){var a=t;if(!Object(u["p"])(r)&&!1!==r)return e&&(a+="-".concat(e)),"col"!==t||""!==r&&!0!==r?(a+="-".concat(r),Object(h["c"])(a)):Object(h["c"])(a)},y=Object(d["a"])(m),j=Object(b["c"])(null),w=function(){var t=Object(o["b"])().filter(l["a"]),e=t.reduce((function(t,e){return t[e]=Object(f["c"])(c["i"]),t}),Object(b["c"])(null)),r=t.reduce((function(t,e){return t[Object(f["g"])(e,"offset")]=Object(f["c"])(c["p"]),t}),Object(b["c"])(null)),a=t.reduce((function(t,e){return t[Object(f["g"])(e,"order")]=Object(f["c"])(c["p"]),t}),Object(b["c"])(null));return j=Object(b["a"])(Object(b["c"])(null),{col:Object(b["h"])(e),offset:Object(b["h"])(r),order:Object(b["h"])(a)}),Object(f["d"])(Object(b["m"])(g(g(g(g({},e),r),a),{},{alignSelf:Object(f["c"])(c["u"],null,(function(t){return Object(s["a"])(O,t)})),col:Object(f["c"])(c["g"],!1),cols:Object(f["c"])(c["p"]),offset:Object(f["c"])(c["p"]),order:Object(f["c"])(c["p"]),tag:Object(f["c"])(c["u"],"div")})),i["z"])},C={name:i["z"],functional:!0,get props(){return delete this.props,this.props=w()},render:function(t,e){var r,i=e.props,c=e.data,s=e.children,o=i.cols,l=i.offset,u=i.order,d=i.alignSelf,b=[];for(var f in j)for(var h=j[f],p=0;p<h.length;p++){var g=y(f,h[p].replace(f,""),i[h[p]]);g&&b.push(g)}var O=b.some((function(t){return n["e"].test(t)}));return b.push((r={col:i.col||!O&&!o},v(r,"col-".concat(o),o),v(r,"offset-".concat(l),l),v(r,"order-".concat(u),u),v(r,"align-self-".concat(d),d),r)),t(i.tag,Object(a["a"])(c,{class:b}),s)}}},b680:function(t,e,r){"use strict";var a=r("23e7"),i=r("a691"),c=r("408a"),n=r("1148"),s=r("d039"),o=1..toFixed,l=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},d=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},b=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){o.call({})}));a({target:"Number",proto:!0,forced:b},{toFixed:function(t){var e,r,a,s,o=c(this),b=i(t),f=[0,0,0,0,0,0],h="",p="0",g=function(t,e){var r=-1,a=e;while(++r<6)a+=t*f[r],f[r]=a%1e7,a=l(a/1e7)},v=function(t){var e=6,r=0;while(--e>=0)r+=f[e],f[e]=l(r/t),r=r%t*1e7},O=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var r=String(f[t]);e=""===e?r:e+n.call("0",7-r.length)+r}return e};if(b<0||b>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(h="-",o=-o),o>1e-21)if(e=d(o*u(2,69,1))-69,r=e<0?o*u(2,-e,1):o/u(2,e,1),r*=4503599627370496,e=52-e,e>0){g(0,r),a=b;while(a>=7)g(1e7,0),a-=7;g(u(10,a,1),0),a=e-1;while(a>=23)v(1<<23),a-=23;v(1<<a),g(1,1),v(2),p=O()}else g(0,r),g(1<<-e,0),p=O()+n.call("0",b);return b>0?(s=p.length,p=h+(s<=b?"0."+n.call("0",b-s)+p:p.slice(0,s-b)+"."+p.slice(s-b))):p=h+p,p}})},ca6e:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));r("5530");var a=r("53ca"),i=(r("a18c"),r("ed09"),function(t){return"object"===Object(a["a"])(t)&&null!==t}),c=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}},cb29:function(t,e,r){var a=r("23e7"),i=r("81d5"),c=r("44d2");a({target:"Array",proto:!0},{fill:i}),c("fill")},e8a3:function(t,e,r){"use strict";r.d(e,"b",(function(){return x})),r.d(e,"a",(function(){return P}));var a=r("2b0e"),i=r("c637"),c=r("0056"),n=r("a723"),s=r("9b76"),o=r("7b1e"),l=r("3a58"),u=r("d82f"),d=r("cf75"),b=r("4a38"),f=r("8c18"),h=r("0759"),p=r("7386"),g=r("1947"),v=r("aa59");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j="b-avatar",w=["sm",null,"lg"],C=.4,S=.7*C,x=function(t){return t=Object(o["n"])(t)&&Object(o["i"])(t)?Object(l["b"])(t,0):t,Object(o["h"])(t)?"".concat(t,"px"):t||null},k=Object(u["j"])(v["b"],["active","event","routerTag"]),_=Object(d["d"])(Object(u["m"])(m(m({},k),{},{alt:Object(d["c"])(n["u"],"avatar"),ariaLabel:Object(d["c"])(n["u"]),badge:Object(d["c"])(n["j"],!1),badgeLeft:Object(d["c"])(n["g"],!1),badgeOffset:Object(d["c"])(n["u"]),badgeTop:Object(d["c"])(n["g"],!1),badgeVariant:Object(d["c"])(n["u"],"primary"),button:Object(d["c"])(n["g"],!1),buttonType:Object(d["c"])(n["u"],"button"),icon:Object(d["c"])(n["u"]),rounded:Object(d["c"])(n["j"],!1),size:Object(d["c"])(n["p"]),square:Object(d["c"])(n["g"],!1),src:Object(d["c"])(n["u"]),text:Object(d["c"])(n["u"]),variant:Object(d["c"])(n["u"],"secondary")})),i["c"]),P=a["default"].extend({name:i["c"],mixins:[f["a"]],inject:{bvAvatarGroup:{default:null}},props:_,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return x(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,r=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===r||(r||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===w.indexOf(t)?"calc(".concat(t," * ").concat(C,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,r=e?e.overlapScale:0,a=t&&r?"calc(".concat(t," * -").concat(r,")"):null;return a?{marginLeft:a,marginRight:a}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,r=this.badgeLeft,a=this.badgeOffset,i=a||"0px";return{fontSize:-1===w.indexOf(t)?"calc(".concat(t," * ").concat(S," )"):null,top:e?i:null,bottom:e?null:i,left:r?i:null,right:r?null:i}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(c["x"],t)},onClick:function(t){this.$emit(c["f"],t)}},render:function(t){var e,r=this.computedVariant,a=this.disabled,i=this.computedRounded,c=this.icon,n=this.localSrc,o=this.text,l=this.fontStyle,u=this.marginStyle,f=this.computedSize,O=this.button,C=this.buttonType,S=this.badge,x=this.badgeVariant,_=this.badgeStyle,P=!O&&Object(b["d"])(this),B=O?g["a"]:P?v["a"]:"span",D=this.alt,A=this.ariaLabel||null,E=null;this.hasNormalizedSlot()?E=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):n?(E=t("img",{style:r?{}:{width:"100%",height:"100%"},attrs:{src:n,alt:D},on:{error:this.onImgError}}),E=t("span",{staticClass:"b-avatar-img"},[E])):E=c?t(h["a"],{props:{icon:c},attrs:{"aria-hidden":"true",alt:D}}):o?t("span",{staticClass:"b-avatar-text",style:l},[t("span",o)]):t(p["m"],{attrs:{"aria-hidden":"true",alt:D}});var z=t(),I=this.hasNormalizedSlot(s["d"]);if(S||""===S||I){var T=!0===S?"":S;z=t("span",{staticClass:"b-avatar-badge",class:y({},"badge-".concat(x),x),style:_},[I?this.normalizeSlot(s["d"]):T])}var $={staticClass:j,class:(e={},y(e,"".concat(j,"-").concat(f),f&&-1!==w.indexOf(f)),y(e,"badge-".concat(r),!O&&r),y(e,"rounded",!0===i),y(e,"rounded-".concat(i),i&&!0!==i),y(e,"disabled",a),e),style:m(m({},u),{},{width:f,height:f}),attrs:{"aria-label":A||null},props:O?{variant:r,disabled:a,type:C}:P?Object(d["e"])(k,this):{},on:O||P?{click:this.onClick}:{}};return t(B,$,[E,z])}})},f9a7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{staticClass:"match-height"},[r("b-col",{attrs:{lg:"2",cols:"6"}},[r("card-statistic-order-chart")],1),r("b-col",{attrs:{lg:"2",cols:"6"}},[r("card-statistic-profit-chart")],1),r("b-col",{attrs:{lg:"8",cols:"12"}},[r("card-statistics-group")],1)],1),r("b-row",{staticClass:"match-height"},[r("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[r("statistic-card-vertical",{attrs:{icon:"EyeIcon",statistic:"36.9k","statistic-title":"Views",color:"info"}})],1),r("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[r("statistic-card-vertical",{attrs:{color:"warning",icon:"MessageSquareIcon",statistic:"12k","statistic-title":"Comments"}})],1),r("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[r("statistic-card-vertical",{attrs:{color:"danger",icon:"ShoppingBagIcon",statistic:"97.8k","statistic-title":"Orders"}})],1),r("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[r("statistic-card-vertical",{attrs:{color:"primary",icon:"HeartIcon",statistic:"26.8","statistic-title":"Favorited"}})],1),r("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[r("statistic-card-vertical",{attrs:{color:"success",icon:"AwardIcon",statistic:"689","statistic-title":"Reviews"}})],1),r("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[r("statistic-card-vertical",{attrs:{"hide-chart":"",color:"danger",icon:"TruckIcon",statistic:"2.1k","statistic-title":"Returns"}})],1)],1),r("b-row",[r("b-col",{attrs:{lg:"3",sm:"6"}},[r("statistic-card-horizontal",{attrs:{icon:"CpuIcon",statistic:"86%","statistic-title":"CPU Usage"}})],1),r("b-col",{attrs:{lg:"3",sm:"6"}},[r("statistic-card-horizontal",{attrs:{icon:"ServerIcon",color:"success",statistic:"1.2gb","statistic-title":"Memory Usage"}})],1),r("b-col",{attrs:{lg:"3",sm:"6"}},[r("statistic-card-horizontal",{attrs:{icon:"ActivityIcon",color:"danger",statistic:"0.1%","statistic-title":"Downtime Ratio"}})],1),r("b-col",{attrs:{lg:"3",sm:"6"}},[r("statistic-card-horizontal",{attrs:{icon:"AlertOctagonIcon",color:"warning",statistic:"13","statistic-title":"Issues Found"}})],1)],1),r("b-row",[r("b-col",{attrs:{lg:"3",sm:"6"}},[t.subscribersGained.analyticsData?r("statistic-card-with-area-chart",{attrs:{icon:"UsersIcon",statistic:t.kFormatter(t.subscribersGained.analyticsData.subscribers),"statistic-title":"Subscribers Gained","chart-data":t.subscribersGained.series}}):t._e()],1),r("b-col",{attrs:{lg:"3",sm:"6"}},[t.revenueGenerated.analyticsData?r("statistic-card-with-area-chart",{attrs:{icon:"CreditCardIcon",color:"success",statistic:t.kFormatter(t.revenueGenerated.analyticsData.revenue),"statistic-title":"Revenue Generated","chart-data":t.revenueGenerated.series}}):t._e()],1),r("b-col",{attrs:{lg:"3",sm:"6"}},[t.quarterlySales.analyticsData?r("statistic-card-with-area-chart",{attrs:{icon:"ShoppingCartIcon",color:"danger",statistic:t.kFormatter(t.quarterlySales.analyticsData.sales),"statistic-title":"Quarterly Sales","chart-data":t.quarterlySales.series}}):t._e()],1),r("b-col",{attrs:{lg:"3",sm:"6"}},[t.ordersRecevied.analyticsData?r("statistic-card-with-area-chart",{attrs:{icon:"PackageIcon",color:"warning",statistic:t.kFormatter(t.ordersRecevied.analyticsData.orders),"statistic-title":"Orders Received","chart-data":t.ordersRecevied.series}}):t._e()],1)],1),r("b-row",[r("b-col",{attrs:{md:"4",sm:"6"}},[r("statistic-card-with-line-chart",{attrs:{icon:"MonitorIcon",statistic:"78.9k","statistic-title":"Site Traffic","chart-data":t.siteTraffic.series}})],1),r("b-col",{attrs:{md:"4",sm:"6"}},[r("statistic-card-with-line-chart",{attrs:{icon:"UserCheckIcon",color:"success",statistic:"659.8k","statistic-title":"Active Users","chart-data":t.activeUsers.series}})],1),r("b-col",{attrs:{md:"4",sm:"6"}},[r("statistic-card-with-line-chart",{attrs:{icon:"MailIcon",color:"warning",statistic:"28.7k","statistic-title":"Newsletter","chart-data":t.newsletter.series}})],1)],1)],1)},i=[],c=r("a15b"),n=r("b28b"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"text-center"},[r("b-avatar",{staticClass:"mb-1",attrs:{variant:"light-"+t.color,size:"45"}},[r("feather-icon",{attrs:{size:"21",icon:t.icon}})],1),r("div",{staticClass:"truncate"},[r("h2",{staticClass:"mb-25 font-weight-bolder"},[t._v(" "+t._s(t.statistic)+" ")]),r("span",[t._v(t._s(t.statisticTitle))])])],1)},o=[],l=(r("a9e3"),r("205f")),u=r("e8a3"),d={components:{BCard:l["a"],BAvatar:u["a"]},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"}}},b=d,f=r("2877"),h=Object(f["a"])(b,s,o,!1,null,null,null),p=h.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[r("div",{staticClass:"truncate"},[r("h2",{staticClass:"mb-25 font-weight-bolder"},[t._v(" "+t._s(t.statistic)+" ")]),r("span",[t._v(t._s(t.statisticTitle))])]),r("b-avatar",{attrs:{variant:"light-"+t.color,size:"45"}},[r("feather-icon",{attrs:{size:"21",icon:t.icon}})],1)],1)],1)},v=[],O=r("6197"),m={components:{BCard:l["a"],BCardBody:O["a"],BAvatar:u["a"]},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"}}},y=m,j=Object(f["a"])(y,g,v,!1,null,null,null),w=j.exports,C=r("5b50"),S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-card-body",{staticClass:"d-flex justify-content-between align-items-center pb-0"},[r("div",{staticClass:"truncate"},[r("h2",{staticClass:"font-weight-bolder"},[t._v(" "+t._s(t.statistic)+" ")]),r("span",[t._v(t._s(t.statisticTitle))])]),r("b-avatar",{attrs:{variant:"light-"+t.color,size:"45"}},[r("feather-icon",{attrs:{size:"21",icon:t.icon}})],1)],1),r("vue-apex-charts",{attrs:{type:"line",height:"100",width:"100%",options:t.chartOptionsComputed,series:t.chartData}})],1)},x=[],k=(r("e9c4"),r("cb29"),r("1321")),_=r.n(k),P=r("1dff"),B=r("8487"),D={components:{VueApexCharts:_.a,BCard:l["a"],BCardBody:O["a"],BAvatar:u["a"]},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"},chartData:{type:Array,default:function(){return[]}},chartOptions:{type:Object,default:null}},computed:{chartOptionsComputed:function(){if(null===this.chartOptions){var t=JSON.parse(JSON.stringify(B["b"]));return t.fill.gradient.gradientToColors=[this.gradientToColor(this.color)],t.colors=[P["b"][this.color]],t}return this.chartOptions}},methods:{gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794",info:"#59E0F0",secondary:"#B4B9BF",light:"#D0D4DB",dark:"#919191"};return e[t]}}},A=D,E=Object(f["a"])(A,S,x,!1,null,null,null),z=E.exports,I=r("0e20"),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"body-class":"pb-50"}},[r("h6",[t._v("Orders")]),r("h2",{staticClass:"font-weight-bolder mb-1"},[t._v(" 2,76k ")]),r("vue-apex-charts",{attrs:{height:"70",options:t.statisticsOrder.chartOptions,series:t.statisticsOrder.series}})],1)},$=[],R="#f3f3f3",F={components:{BCard:l["a"],VueApexCharts:_.a},data:function(){return{statisticsOrder:{series:[{name:"2020",data:[45,85,65,45,65]}],chartOptions:{chart:{type:"bar",stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",startingShape:"rounded",colors:{backgroundBarColors:[R,R,R,R,R],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[P["b"].warning],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}}}}}},G=F,U=Object(f["a"])(G,T,$,!1,null,null,null),q=U.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"card-tiny-line-stats",attrs:{"body-class":"pb-50"}},[r("h6",[t._v("Profit")]),r("h2",{staticClass:"font-weight-bolder mb-1"},[t._v(" 6,24k ")]),r("vue-apex-charts",{attrs:{height:"70",options:t.statisticsProfit.chartOptions,series:t.statisticsProfit.series}})],1)},M=[],V="#EBEBEB",L={components:{BCard:l["a"],VueApexCharts:_.a},data:function(){return{statisticsProfit:{series:[{data:[0,20,5,30,15,45]}],chartOptions:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:V,strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[P["b"].info],markers:{size:2,colors:P["b"].info,strokeColors:P["b"].info,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:P["b"].info,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}}}}}},J=L,H=Object(f["a"])(J,N,M,!1,null,null,null),W=H.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"card-statistics",attrs:{"no-body":""}},[r("b-card-header",[r("b-card-title",[t._v("Statistics")]),r("b-card-text",{staticClass:"mr-25 mb-0"},[t._v(" Updated 1 month ago ")])],1),r("b-card-body",{staticClass:"statistics-body"},[r("b-row",t._l(t.statisticsItems,(function(e){return r("b-col",{key:e.icon,staticClass:"mb-2 mb-md-0",class:e.customClass,attrs:{md:"3",sm:"6"}},[r("b-media",{attrs:{"no-body":""}},[r("b-media-aside",{staticClass:"mr-2"},[r("b-avatar",{attrs:{size:"48",variant:e.color}},[r("feather-icon",{attrs:{size:"24",icon:e.icon}})],1)],1),r("b-media-body",{staticClass:"my-auto"},[r("h4",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(e.title)+" ")]),r("b-card-text",{staticClass:"font-small-3 mb-0"},[t._v(" "+t._s(e.subtitle)+" ")])],1)],1)],1)})),1)],1)],1)},X=[],K=r("b885"),Q=r("4968"),Z=r("d6e4"),tt=r("34b6"),et=r("7c32"),rt=r("7fa6"),at={components:{BRow:c["a"],BCol:n["a"],BCard:l["a"],BCardHeader:K["a"],BCardTitle:Q["a"],BCardText:Z["a"],BCardBody:O["a"],BMedia:tt["a"],BAvatar:u["a"],BMediaAside:et["a"],BMediaBody:rt["a"]},data:function(){return{statisticsItems:[{icon:"TrendingUpIcon",color:"light-primary",title:"230k",subtitle:"Sales",customClass:"mb-2 mb-xl-0"},{icon:"UserIcon",color:"light-info",title:"8.549k",subtitle:"Customers",customClass:"mb-2 mb-xl-0"},{icon:"BoxIcon",color:"light-danger",title:"1.423k",subtitle:"Products",customClass:"mb-2 mb-sm-0"},{icon:"DollarSignIcon",color:"light-success",title:"$9745",subtitle:"Revenue",customClass:""}]}}},it=at,ct=Object(f["a"])(it,Y,X,!1,null,null,null),nt=ct.exports,st={components:{BRow:c["a"],BCol:n["a"],StatisticCardVertical:p,StatisticCardHorizontal:w,StatisticCardWithAreaChart:C["a"],StatisticCardWithLineChart:z,CardStatisticOrderChart:q,CardStatisticProfitChart:W,CardStatisticsGroup:nt},data:function(){return{subscribersGained:{},revenueGenerated:{},quarterlySales:{},ordersRecevied:{},siteTraffic:{},activeUsers:{},newsletter:{}}},created:function(){var t=this;this.$http.get("/card/card-statistics/subscribers").then((function(e){t.subscribersGained=e.data})),this.$http.get("/card/card-statistics/revenue").then((function(e){t.revenueGenerated=e.data})),this.$http.get("/card/card-statistics/sales").then((function(e){t.quarterlySales=e.data})),this.$http.get("/card/card-statistics/orders").then((function(e){t.ordersRecevied=e.data})),this.$http.get("/card/card-statistics/site-traffic").then((function(e){t.siteTraffic=e.data})),this.$http.get("/card/card-statistics/active-users").then((function(e){t.activeUsers=e.data})),this.$http.get("/card/card-statistics/newsletter").then((function(e){t.newsletter=e.data}))},methods:{kFormatter:I["c"]}},ot=st,lt=Object(f["a"])(ot,a,i,!1,null,null,null);e["default"]=lt.exports}}]);
//# sourceMappingURL=chunk-5cf9adb6.fe1388d4.js.map