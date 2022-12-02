(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfb5d526"],{1079:function(n,e,t){"use strict";var o=t("541c");e["a"]=o["a"]},"3d3a":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("i18n-change")},a=[],r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Change Locale"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeChange)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[n._v(" Your Current Locale: "),t("strong",[n._v(n._s(n.locale))])]),t("b-form-group",{staticClass:"mb-0"},[t("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:n.locale,callback:function(e){n.locale=e},expression:"locale"}},[t("b-form-radio",{attrs:{value:"en"}},[n._v(" English ")]),t("b-form-radio",{attrs:{value:"fr"}},[n._v(" French ")]),t("b-form-radio",{attrs:{value:"de"}},[n._v(" German ")]),t("b-form-radio",{attrs:{value:"pt"}},[n._v(" Portuguese ")])],1)],1),t("div",{staticClass:"border rounded mt-3 p-2"},[t("h5",{staticClass:"mb-1"},[n._v(" "+n._s(n.$t("message.title"))+" ")]),n._v(" "+n._s(n.$t("message.text"))+" ")])],1)},c=[],i=t("1079"),s=t("8226"),u=t("9e14"),d=t("d6e4"),l=t("2924"),m='\n<template>\n  <div>\n    \x3c!-- radio buttons --\x3e\n    <b-form-group class="mb-0">\n      <b-form-radio-group\n        id="radio-group-2"\n        v-model="locale"\n        name="radio-sub-component"\n        class="demo-inline-spacing"\n      >\n        <b-form-radio\n          value="en"\n        >\n          English\n        </b-form-radio>\n        <b-form-radio\n          value="fr"\n        >\n          French\n        </b-form-radio>\n        <b-form-radio\n          value="de"\n        >\n          German\n        </b-form-radio>\n        <b-form-radio value="pt">\n          Portuguese\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    \x3c!-- card --\x3e\n    <div class="border rounded mt-3 p-2">\n      <h5 class="mb-1">\n        {{ $t(\'message.title\') }}\n      </h5>\n      {{ $t(\'message.text\') }}\n    </div>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormRadio,\n    BCardText,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      locale: this.$i18n.locale,\n    }\n  },\n  watch: {\n    locale(val) {\n      this.$i18n.locale = val\n    },\n  },\n}\n<\/script>\n',f={components:{BCardCode:i["a"],BFormGroup:s["a"],BFormRadio:u["a"],BCardText:d["a"],BFormRadioGroup:l["a"]},data:function(){return{locale:this.$i18n.locale,codeChange:m}},watch:{locale:function(n){this.$i18n.locale=n}}},b=f,p=t("2877"),v=Object(p["a"])(b,r,c,!1,null,null,null),h=v.exports,g={components:{i18nChange:h}},x=g,C=Object(p["a"])(x,o,a,!1,null,null,null);e["default"]=C.exports},ad47:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return i}));var o=t("2b0e"),a=t("a723"),r=t("cf75"),c=Object(r["d"])({size:Object(r["c"])(a["u"])},"formControls"),i=o["default"].extend({props:c,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},d6e4:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var o=t("2b0e"),a=t("b42e"),r=t("c637"),c=t("a723"),i=t("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(c["u"],"p")},r["v"]),u=o["default"].extend({name:r["v"],functional:!0,props:s,render:function(n,e){var t=e.props,o=e.data,r=e.children;return n(t.textTag,Object(a["a"])(o,{staticClass:"card-text"}),r)}})},dde7:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return u}));var o=t("2b0e"),a=t("a723"),r=t("906c"),c=t("cf75"),i="input, textarea, select",s=Object(c["d"])({autofocus:Object(c["c"])(a["g"],!1),disabled:Object(c["c"])(a["g"],!1),form:Object(c["c"])(a["u"]),id:Object(c["c"])(a["u"]),name:Object(c["c"])(a["u"]),required:Object(c["c"])(a["g"],!1)},"formControls"),u=o["default"].extend({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var n=this;this.$nextTick((function(){Object(r["B"])((function(){var e=n.$el;n.autofocus&&Object(r["u"])(e)&&(Object(r["v"])(e,i)||(e=Object(r["C"])(i,e)),Object(r["d"])(e))}))}))}}})}}]);
//# sourceMappingURL=chunk-bfb5d526.604cbe48.js.map