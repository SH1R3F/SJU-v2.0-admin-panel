(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca18a394"],{"0759":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("992e"),s=n("d82f"),l=n("cf75"),u=n("fa73"),b=n("7386"),d=n("aa0d");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function t(e,n){if(!e)return null;var r=(e.$options||{}).components,a=r[n];return a||t(e.$parent,n)},j=Object(l["d"])(Object(s["m"])(p(p({},Object(s["j"])(d["b"],["content","stacked"])),{},{icon:Object(l["c"])(i["u"]),stacked:Object(l["c"])(i["g"],!1)})),c["jb"]),h=r["default"].extend({name:c["jb"],functional:!0,props:j,render:function(t,e){var n=e.data,r=e.props,c=e.parent,i=Object(u["e"])(Object(u["h"])(r.icon||"")).replace(o["p"],"");return t(i&&g(c,"BIcon".concat(i))||b["a"],Object(a["a"])(n,{props:p(p({},r),{},{icon:null})}))}})},"11de":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("cf75"),s=Object(o["d"])({id:Object(o["c"])(i["u"]),inline:Object(o["c"])(i["g"],!1),novalidate:Object(o["c"])(i["g"],!1),validated:Object(o["c"])(i["g"],!1)},c["K"]),l=r["default"].extend({name:c["K"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t("form",Object(a["a"])(r,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),c)}})},"223c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},a=[],c=n("e8a3"),i={components:{BAvatar:c["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=i,s=(n("b549"),n("2877")),l=Object(s["a"])(o,r,a,!1,null,"55dd3057",null);e["a"]=l.exports},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return j}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("2326"),s=n("6c06"),l=n("7b1e"),u=n("3a58"),b=n("cf75"),d=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=function(t,e,n){var r=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)},g=Object(b["d"])({alt:Object(b["c"])(i["u"]),blank:Object(b["c"])(i["g"],!1),blankColor:Object(b["c"])(i["u"],"transparent"),block:Object(b["c"])(i["g"],!1),center:Object(b["c"])(i["g"],!1),fluid:Object(b["c"])(i["g"],!1),fluidGrow:Object(b["c"])(i["g"],!1),height:Object(b["c"])(i["p"]),left:Object(b["c"])(i["g"],!1),right:Object(b["c"])(i["g"],!1),rounded:Object(b["c"])(i["j"],!1),sizes:Object(b["c"])(i["f"]),src:Object(b["c"])(i["u"]),srcset:Object(b["c"])(i["f"]),thumbnail:Object(b["c"])(i["g"],!1),width:Object(b["c"])(i["p"])},c["lb"]),j=r["default"].extend({name:c["lb"],functional:!0,props:g,render:function(t,e){var n,r=e.props,c=e.data,i=r.alt,b=r.src,p=r.block,g=r.fluidGrow,j=r.rounded,h=Object(u["c"])(r.width)||null,m=Object(u["c"])(r.height)||null,v=null,w=Object(o["b"])(r.srcset).filter(s["a"]).join(","),y=Object(o["b"])(r.sizes).filter(s["a"]).join(",");return r.blank&&(!m&&h?m=h:!h&&m&&(h=m),h||m||(h=1,m=1),b=O(h,m,r.blankColor||"transparent"),w=null,y=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",p=!0),t("img",Object(a["a"])(c,{attrs:{src:b,alt:i,width:h?Object(d["g"])(h):null,height:m?Object(d["g"])(m):null,srcset:w||null,sizes:y||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||g,"w-100":g,rounded:""===j||!0===j},f(n,"rounded-".concat(j),Object(l["n"])(j)&&""!==j),f(n,v,v),f(n,"d-block",p),n)}))}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("cf75"),s=n("fa73"),l=Object(o["d"])({title:Object(o["c"])(i["u"]),titleTag:Object(o["c"])(i["u"],"h4")},c["w"]),u=r["default"].extend({name:c["w"],functional:!0,props:l,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.titleTag,Object(a["a"])(r,{staticClass:"card-title"}),c||Object(s["g"])(n.title))}})},"5b2a":function(t,e,n){t.exports=n.p+"img/forgot-password-v2.9faba3c1.svg"},"65b7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-wrapper auth-v2"},[n("b-row",{staticClass:"auth-inner m-0"},[n("b-link",{staticClass:"brand-logo"},[n("sju-logo"),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("Vuexy")])],1),n("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[n("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[n("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Forgot password V2"}})],1)]),n("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[n("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[n("b-card-title",{staticClass:"mb-1"},[t._v(" Forgot Password? 🔒 ")]),n("b-card-text",{staticClass:"mb-2"},[t._v(" Enter your email and we'll send you instructions to reset your password ")]),n("validation-observer",{ref:"simpleRules"},[n("b-form",{staticClass:"auth-forgot-password-form mt-2",on:{submit:function(e){return e.preventDefault(),t.validationForm.apply(null,arguments)}}},[n("b-form-group",{attrs:{label:"Email","label-for":"forgot-password-email"}},[n("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-form-input",{attrs:{id:"forgot-password-email",state:!(r.length>0)&&null,name:"forgot-password-email",placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),n("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v(" Send reset link ")])],1)],1),n("p",{staticClass:"text-center mt-2"},[n("b-link",{attrs:{to:{name:"auth-login"}}},[n("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),t._v(" Back to login ")],1)],1)],1)],1)],1)],1)},a=[],c=n("7bb1"),i=n("803b"),o=n("a15b"),s=n("b28b"),l=n("aa59"),u=n("4918"),b=n("11de"),d=n("1947"),f=n("8226"),p=n("4797"),O=n("4968"),g=n("d6e4"),j=n("8f03"),h=n("4360"),m=n("223c"),v={components:{SjuLogo:i["a"],BRow:o["a"],BCol:s["a"],BLink:l["a"],BImg:u["a"],BForm:b["a"],BButton:d["a"],BFormGroup:f["a"],BFormInput:p["a"],BCardTitle:O["a"],BCardText:g["a"],ValidationProvider:c["b"],ValidationObserver:c["a"]},data:function(){return{userEmail:"",sideImg:n("5b2a"),required:j["l"],email:j["g"]}},computed:{imgUrl:function(){return"dark"===h["a"].state.appConfig.layout.skin?(this.sideImg=n("6e2f"),this.sideImg):this.sideImg}},methods:{validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(e){e&&t.$toast({component:m["a"],props:{title:"This is for UI purpose only.",icon:"EditIcon",variant:"success"}})}))}}},w=v,y=(n("be90"),n("2877")),x=Object(y["a"])(w,r,a,!1,null,null,null);e["default"]=x.exports},"6e2f":function(t,e,n){t.exports=n.p+"img/forgot-password-v2-dark.38cc40f5.svg"},"803b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("image",{staticClass:"h-100",attrs:{"xlink:href":n("289e")}})])},a=[],c=n("2877"),i={},o=Object(c["a"])(i,r,a,!1,null,null,null);e["a"]=o.exports},"8d81":function(t,e,n){},a15b:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n("b42e"),a=n("c637"),c=n("a723"),i=n("2326"),o=n("228e"),s=n("6c06"),l=n("b508"),u=n("d82f"),b=n("cf75"),d=n("fa73");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["start","end","center"],j=Object(l["a"])((function(t,e){return e=Object(d["h"])(Object(d["g"])(e)),e?Object(d["c"])(["row-cols",t,e].filter(s["a"]).join("-")):null})),h=Object(l["a"])((function(t){return Object(d["c"])(t.replace("cols",""))})),m=[],v=function(){var t=Object(o["b"])().reduce((function(t,e){return t[Object(b["g"])(e,"cols")]=Object(b["c"])(c["p"]),t}),Object(u["c"])(null));return m=Object(u["h"])(t),Object(b["d"])(Object(u["m"])(p(p({},t),{},{alignContent:Object(b["c"])(c["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(g,"between","around","stretch"),t)})),alignH:Object(b["c"])(c["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(g,"between","around"),t)})),alignV:Object(b["c"])(c["u"],null,(function(t){return Object(i["a"])(Object(i["b"])(g,"baseline","stretch"),t)})),noGutters:Object(b["c"])(c["g"],!1),tag:Object(b["c"])(c["u"],"div")})),a["Ob"])},w={name:a["Ob"],functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(t,e){var n,a=e.props,c=e.data,i=e.children,o=a.alignV,s=a.alignH,l=a.alignContent,u=[];return m.forEach((function(t){var e=j(h(t),a[t]);e&&u.push(e)})),u.push((n={"no-gutters":a.noGutters},O(n,"align-items-".concat(o),o),O(n,"justify-content-".concat(s),s),O(n,"align-content-".concat(l),l),n)),t(a.tag,Object(r["a"])(c,{staticClass:"row",class:u}),i)}}},ab85:function(t,e,n){},b549:function(t,e,n){"use strict";n("8d81")},be90:function(t,e,n){"use strict";n("ab85")},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("2b0e"),a=n("b42e"),c=n("c637"),i=n("a723"),o=n("cf75"),s=Object(o["d"])({textTag:Object(o["c"])(i["u"],"p")},c["v"]),l=r["default"].extend({name:c["v"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,c=e.children;return t(n.textTag,Object(a["a"])(r,{staticClass:"card-text"}),c)}})},e8a3:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return E}));var r=n("2b0e"),a=n("c637"),c=n("0056"),i=n("a723"),o=n("9b76"),s=n("7b1e"),l=n("3a58"),u=n("d82f"),b=n("cf75"),d=n("4a38"),f=n("8c18"),p=n("0759"),O=n("7386"),g=n("1947"),j=n("aa59");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w="b-avatar",y=["sm",null,"lg"],x=.4,C=.7*x,k=function(t){return t=Object(s["n"])(t)&&Object(s["i"])(t)?Object(l["b"])(t,0):t,Object(s["h"])(t)?"".concat(t,"px"):t||null},S=Object(u["j"])(j["b"],["active","event","routerTag"]),P=Object(b["d"])(Object(u["m"])(m(m({},S),{},{alt:Object(b["c"])(i["u"],"avatar"),ariaLabel:Object(b["c"])(i["u"]),badge:Object(b["c"])(i["j"],!1),badgeLeft:Object(b["c"])(i["g"],!1),badgeOffset:Object(b["c"])(i["u"]),badgeTop:Object(b["c"])(i["g"],!1),badgeVariant:Object(b["c"])(i["u"],"primary"),button:Object(b["c"])(i["g"],!1),buttonType:Object(b["c"])(i["u"],"button"),icon:Object(b["c"])(i["u"]),rounded:Object(b["c"])(i["j"],!1),size:Object(b["c"])(i["p"]),square:Object(b["c"])(i["g"],!1),src:Object(b["c"])(i["u"]),text:Object(b["c"])(i["u"]),variant:Object(b["c"])(i["u"],"secondary")})),a["c"]),E=r["default"].extend({name:a["c"],mixins:[f["a"]],inject:{bvAvatarGroup:{default:null}},props:P,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return k(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(x,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,r=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,r=this.badgeOffset,a=r||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(C," )"):null,top:e?a:null,bottom:e?null:a,left:n?a:null,right:n?null:a}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(c["x"],t)},onClick:function(t){this.$emit(c["f"],t)}},render:function(t){var e,n=this.computedVariant,r=this.disabled,a=this.computedRounded,c=this.icon,i=this.localSrc,s=this.text,l=this.fontStyle,u=this.marginStyle,f=this.computedSize,h=this.button,x=this.buttonType,C=this.badge,k=this.badgeVariant,P=this.badgeStyle,E=!h&&Object(d["d"])(this),z=h?g["a"]:E?j["a"]:"span",_=this.alt,B=this.ariaLabel||null,I=null;this.hasNormalizedSlot()?I=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):i?(I=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:i,alt:_},on:{error:this.onImgError}}),I=t("span",{staticClass:"b-avatar-img"},[I])):I=c?t(p["a"],{props:{icon:c},attrs:{"aria-hidden":"true",alt:_}}):s?t("span",{staticClass:"b-avatar-text",style:l},[t("span",s)]):t(O["m"],{attrs:{"aria-hidden":"true",alt:_}});var D=t(),T=this.hasNormalizedSlot(o["d"]);if(C||""===C||T){var G=!0===C?"":C;D=t("span",{staticClass:"b-avatar-badge",class:v({},"badge-".concat(k),k),style:P},[T?this.normalizeSlot(o["d"]):G])}var V={staticClass:w,class:(e={},v(e,"".concat(w,"-").concat(f),f&&-1!==y.indexOf(f)),v(e,"badge-".concat(n),!h&&n),v(e,"rounded",!0===a),v(e,"rounded-".concat(a),a&&!0!==a),v(e,"disabled",r),e),style:m(m({},u),{},{width:f,height:f}),attrs:{"aria-label":B||null},props:h?{variant:n,disabled:r,type:x}:E?Object(b["e"])(S,this):{},on:h||E?{click:this.onClick}:{}};return t(z,V,[I,D])}})}}]);
//# sourceMappingURL=chunk-ca18a394.5a5be115.js.map