(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1495b6d4"],{1079:function(e,t,a){"use strict";var n=a("541c");t["a"]=n["a"]},"8c1b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("pill-badge-contextual"),a("pill-badge-glow"),a("pill-badge-light"),a("pill-badge-notification"),a("pill-badge-link-block")],1)},r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Contextual"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codePillContextual)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[e._v("Use the ")]),a("code",[e._v("pill")]),a("span",[e._v(" prop to make badges more rounded")]),a("span",[e._v(" and use ")]),a("code",[e._v("variant")]),a("span",[e._v(" prop for badge color variantion.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{pill:"",variant:"primary"}},[e._v(" Primary ")]),a("b-badge",{attrs:{pill:""}},[e._v(" Secondary ")]),a("b-badge",{attrs:{pill:"",variant:"success"}},[e._v(" Success ")]),a("b-badge",{attrs:{pill:"",variant:"danger"}},[e._v(" Danger ")]),a("b-badge",{attrs:{pill:"",variant:"warning"}},[e._v(" Warning ")]),a("b-badge",{attrs:{pill:"",variant:"info"}},[e._v(" Info ")]),a("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v(" Dark ")])],1)],1)},i=[],l=a("1079"),o=a("e98b"),s=a("d6e4"),b='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="primary">Primary</b-badge>\n    <b-badge pill>Secondary</b-badge>\n    <b-badge pill variant="success">Success</b-badge>\n    <b-badge pill variant="danger">Danger</b-badge>\n    <b-badge pill variant="warning">Warning</b-badge>\n    <b-badge pill variant="info">Info</b-badge>\n    <b-badge pill variant="dark">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',d='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="primary" class="badge-glow">Primary</b-badge>\n    <b-badge pill variant="secondary" class="badge-glow">Secondary</b-badge>\n    <b-badge pill variant="success" class="badge-glow">Success</b-badge>\n    <b-badge pill variant="danger" class="badge-glow">Danger</b-badge>\n    <b-badge pill variant="warning" class="badge-glow">Warning</b-badge>\n    <b-badge pill variant="info" class="badge-glow">Info</b-badge>\n    <b-badge pill variant="dark" class="badge-glow">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div class="demo-inline-spacing">\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-primary"\n      badge="4"\n    />\n\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-info"\n      badge="4"\n      badge-classes="badge-info"\n    />\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-danger"\n      badge="4"\n      badge-classes="badge-danger badge-glow"\n    />\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',p='\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="light-primary">Primary</b-badge>\n    <b-badge pill variant="light-secondary">Secondary</b-badge>\n    <b-badge pill variant="light-success">Success</b-badge>\n    <b-badge pill variant="light-danger">Danger</b-badge>\n    <b-badge pill variant="light-warning">Warning</b-badge>\n    <b-badge pill variant="light-info">Info</b-badge>\n    <b-badge pill variant="light-dark">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',u='\n<template>\n <b-badge\n    href="#"\n    pill\n    variant="primary"\n  >\n    Primary\n  </b-badge>\n</template>\n\n<script>\nimport { BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',f='\n<template>\n  <b-badge\n    href="#"\n    class="d-block"\n    pill\n    variant="danger"\n  >\n    Block Badge Pill\n  </b-badge>\n</template>\n\n<script>\nimport {BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',v={components:{BCardCode:l["a"],BBadge:o["a"],BCardText:s["a"]},data:function(){return{codePillContextual:b}}},O=v,j=a("2877"),m=Object(j["a"])(O,c,i,!1,null,null,null),_=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Glow Badges"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeGlow)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[e._v("Use class")]),a("code",[e._v(".badge-glow")]),a("span",[e._v("to add glow effect with badges.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"primary"}},[e._v(" Primary ")]),a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"secondary"}},[e._v(" Secondary ")]),a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"success"}},[e._v(" Success ")]),a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"danger"}},[e._v(" Danger ")]),a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"warning"}},[e._v(" Warning ")]),a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"info"}},[e._v(" Info ")]),a("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"dark"}},[e._v(" Dark ")])],1)],1)},y=[],B={components:{BCardCode:l["a"],BBadge:o["a"],BCardText:s["a"]},data:function(){return{codeGlow:d}}},w=B,k=Object(j["a"])(w,h,y,!1,null,null,null),P=k.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Light Badges"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLightBadge)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[e._v("Use ")]),a("code",[e._v("variant")]),a("span",[e._v(" prop for badge color variantion.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v(" Primary ")]),a("b-badge",{attrs:{pill:"",variant:"light-secondary"}},[e._v(" Secondary ")]),a("b-badge",{attrs:{pill:"",variant:"light-success"}},[e._v(" Success ")]),a("b-badge",{attrs:{pill:"",variant:"light-danger"}},[e._v(" Danger ")]),a("b-badge",{attrs:{pill:"",variant:"light-warning"}},[e._v(" Warning ")]),a("b-badge",{attrs:{pill:"",variant:"light-info"}},[e._v(" Info ")]),a("b-badge",{attrs:{pill:"",variant:"light-dark"}},[e._v(" Dark ")])],1)],1)},C=[],S={components:{BCardCode:l["a"],BBadge:o["a"],BCardText:s["a"]},data:function(){return{codeLightBadge:p}}},D=S,E=Object(j["a"])(D,x,C,!1,null,null,null),I=E.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Pill Badges As Notification"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeNotification)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-"},[a("span",[e._v("Use class ")]),a("code",[e._v("badge")]),a("span",[e._v(" prop with ")]),a("code",[e._v("<feather-icon>")]),a("span",[e._v(" components to add badges as notification. Use ")]),a("code",[e._v('badge-classes="badge-{color}"')]),a("span",[e._v(" prop for change the badge color.")])]),a("div",{staticClass:"demo-inline-spacing"},[a("feather-icon",{staticClass:"text-primary",attrs:{icon:"BellIcon",size:"21",badge:"4"}}),a("feather-icon",{staticClass:"text-info",attrs:{icon:"BellIcon",size:"21",badge:"4","badge-classes":"badge-info"}}),a("feather-icon",{staticClass:"text-danger",attrs:{icon:"BellIcon",size:"21",badge:"4","badge-classes":"badge-danger badge-glow"}})],1)],1)},z=[],T={components:{BCardCode:l["a"],BCardText:s["a"]},data:function(){return{codeNotification:g}}},U=T,G=Object(j["a"])(U,L,z,!1,null,null,null),W=G.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-card-code",{attrs:{title:"Link Badge"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLinkBadge)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use ")]),a("code",[e._v("href")]),a("span",[e._v(" prop (links) or ")]),a("code",[e._v("to")]),a("span",[e._v(" prop (router-links) for link badges.")])]),a("b-badge",{attrs:{href:"#",pill:"",variant:"primary"}},[e._v(" Primary ")])],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-card-code",{attrs:{title:"Block Badge Pill"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLinkBlock)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use ")]),a("code",[e._v(".d-block")]),a("span",[e._v(" class with ")]),a("code",[e._v("<b-badge>")]),a("span",[e._v(", to display pill badge as a block element.")])]),a("b-badge",{staticClass:"d-block",attrs:{href:"#",pill:"",variant:"danger"}},[e._v(" Block Badge Pill ")])],1)],1)],1)},N=[],H=a("a15b"),J=a("b28b"),V={components:{BCardCode:l["a"],BCardText:s["a"],BBadge:o["a"],BRow:H["a"],BCol:J["a"]},data:function(){return{codeLinkBadge:u,codeLinkBlock:f}}},A=V,R=Object(j["a"])(A,$,N,!1,null,null,null),q=R.exports,F={components:{PillBadgeContextual:_,PillBadgeGlow:P,PillBadgeLight:I,PillBadgeNotification:W,PillBadgeLinkBlock:q}},K=F,M=Object(j["a"])(K,n,r,!1,null,null,null);t["default"]=M.exports},a15b:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("b42e"),r=a("c637"),c=a("a723"),i=a("2326"),l=a("228e"),o=a("6c06"),s=a("b508"),b=a("d82f"),d=a("cf75"),g=a("fa73");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=["start","end","center"],O=Object(s["a"])((function(e,t){return t=Object(g["h"])(Object(g["g"])(t)),t?Object(g["c"])(["row-cols",e,t].filter(o["a"]).join("-")):null})),j=Object(s["a"])((function(e){return Object(g["c"])(e.replace("cols",""))})),m=[],_=function(){var e=Object(l["b"])().reduce((function(e,t){return e[Object(d["g"])(t,"cols")]=Object(d["c"])(c["p"]),e}),Object(b["c"])(null));return m=Object(b["h"])(e),Object(d["d"])(Object(b["m"])(u(u({},e),{},{alignContent:Object(d["c"])(c["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(v,"between","around","stretch"),e)})),alignH:Object(d["c"])(c["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(v,"between","around"),e)})),alignV:Object(d["c"])(c["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(v,"baseline","stretch"),e)})),noGutters:Object(d["c"])(c["g"],!1),tag:Object(d["c"])(c["u"],"div")})),r["Ob"])},h={name:r["Ob"],functional:!0,get props(){return delete this.props,this.props=_(),this.props},render:function(e,t){var a,r=t.props,c=t.data,i=t.children,l=r.alignV,o=r.alignH,s=r.alignContent,b=[];return m.forEach((function(e){var t=O(j(e),r[e]);t&&b.push(t)})),b.push((a={"no-gutters":r.noGutters},f(a,"align-items-".concat(l),l),f(a,"justify-content-".concat(o),o),f(a,"align-content-".concat(s),s),a)),e(r.tag,Object(n["a"])(c,{staticClass:"row",class:b}),i)}}},b28b:function(e,t,a){"use strict";a.d(t,"a",(function(){return B}));var n=a("b42e"),r=a("c637"),c=a("a723"),i=a("992e"),l=a("2326"),o=a("228e"),s=a("6c06"),b=a("7b1e"),d=a("b508"),g=a("d82f"),p=a("cf75"),u=a("fa73");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){O(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var j=["auto","start","end","center","baseline","stretch"],m=function(e,t,a){var n=e;if(!Object(b["p"])(a)&&!1!==a)return t&&(n+="-".concat(t)),"col"!==e||""!==a&&!0!==a?(n+="-".concat(a),Object(u["c"])(n)):Object(u["c"])(n)},_=Object(d["a"])(m),h=Object(g["c"])(null),y=function(){var e=Object(o["b"])().filter(s["a"]),t=e.reduce((function(e,t){return e[t]=Object(p["c"])(c["i"]),e}),Object(g["c"])(null)),a=e.reduce((function(e,t){return e[Object(p["g"])(t,"offset")]=Object(p["c"])(c["p"]),e}),Object(g["c"])(null)),n=e.reduce((function(e,t){return e[Object(p["g"])(t,"order")]=Object(p["c"])(c["p"]),e}),Object(g["c"])(null));return h=Object(g["a"])(Object(g["c"])(null),{col:Object(g["h"])(t),offset:Object(g["h"])(a),order:Object(g["h"])(n)}),Object(p["d"])(Object(g["m"])(v(v(v(v({},t),a),n),{},{alignSelf:Object(p["c"])(c["u"],null,(function(e){return Object(l["a"])(j,e)})),col:Object(p["c"])(c["g"],!1),cols:Object(p["c"])(c["p"]),offset:Object(p["c"])(c["p"]),order:Object(p["c"])(c["p"]),tag:Object(p["c"])(c["u"],"div")})),r["z"])},B={name:r["z"],functional:!0,get props(){return delete this.props,this.props=y()},render:function(e,t){var a,r=t.props,c=t.data,l=t.children,o=r.cols,s=r.offset,b=r.order,d=r.alignSelf,g=[];for(var p in h)for(var u=h[p],f=0;f<u.length;f++){var v=_(p,u[f].replace(p,""),r[u[f]]);v&&g.push(v)}var j=g.some((function(e){return i["e"].test(e)}));return g.push((a={col:r.col||!j&&!o},O(a,"col-".concat(o),o),O(a,"offset-".concat(s),s),O(a,"order-".concat(b),b),O(a,"align-self-".concat(d),d),a)),e(r.tag,Object(n["a"])(c,{class:g}),l)}}},d6e4:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("2b0e"),r=a("b42e"),c=a("c637"),i=a("a723"),l=a("cf75"),o=Object(l["d"])({textTag:Object(l["c"])(i["u"],"p")},c["v"]),s=n["default"].extend({name:c["v"],functional:!0,props:o,render:function(e,t){var a=t.props,n=t.data,c=t.children;return e(a.textTag,Object(r["a"])(n,{staticClass:"card-text"}),c)}})},e98b:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("2b0e"),r=a("b42e"),c=a("c637"),i=a("a723"),l=a("d82f"),o=a("cf75"),s=a("4a38"),b=a("aa59");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=Object(l["j"])(b["b"],["event","routerTag"]);delete u.href.default,delete u.to.default;var f=Object(o["d"])(Object(l["m"])(g(g({},u),{},{pill:Object(o["c"])(i["g"],!1),tag:Object(o["c"])(i["u"],"span"),variant:Object(o["c"])(i["u"],"secondary")})),c["e"]),v=n["default"].extend({name:c["e"],functional:!0,props:f,render:function(e,t){var a=t.props,n=t.data,c=t.children,i=a.active,l=a.disabled,d=Object(s["d"])(a),g=d?b["a"]:a.tag,p=a.variant||"secondary";return e(g,Object(r["a"])(n,{staticClass:"badge",class:["badge-".concat(p),{"badge-pill":a.pill,active:i,disabled:l}],props:d?Object(o["e"])(u,a):{}}),c)}})}}]);
//# sourceMappingURL=chunk-1495b6d4.4ab5cf2d.js.map