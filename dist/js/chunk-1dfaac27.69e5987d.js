(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dfaac27"],{1079:function(e,r,a){"use strict";var t=a("541c");r["a"]=t["a"]},"49f5":function(e,r,a){"use strict";a.d(r,"a",(function(){return g}));var t=a("2b0e"),s=a("c637"),n=a("a723"),o=a("d82f"),c=a("cf75"),l=a("8c18"),i=a("cf07");function u(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?u(Object(a),!0).forEach((function(r){b(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function b(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var v=Object(o["j"])(i["b"],["label","labelHtml"]),d=Object(c["d"])(Object(o["m"])(p(p({},v),{},{animated:Object(c["c"])(n["g"],!1),height:Object(c["c"])(n["u"]),max:Object(c["c"])(n["p"],100),precision:Object(c["c"])(n["p"],0),showProgress:Object(c["c"])(n["g"],!1),showValue:Object(c["c"])(n["g"],!1),striped:Object(c["c"])(n["g"],!1)})),s["Mb"]),g=t["default"].extend({name:s["Mb"],mixins:[l["a"]],provide:function(){return{bvProgress:this}},props:d,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(e){var r=this.normalizeSlot();return r||(r=e(i["a"],{props:Object(c["e"])(v,this.$props)})),e("div",{staticClass:"progress",style:this.progressHeight},[r])}})},a15b:function(e,r,a){"use strict";a.d(r,"a",(function(){return j}));var t=a("b42e"),s=a("c637"),n=a("a723"),o=a("2326"),c=a("228e"),l=a("6c06"),i=a("b508"),u=a("d82f"),p=a("cf75"),b=a("fa73");function v(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?v(Object(a),!0).forEach((function(r){g(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function g(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var m=["start","end","center"],f=Object(i["a"])((function(e,r){return r=Object(b["h"])(Object(b["g"])(r)),r?Object(b["c"])(["row-cols",e,r].filter(l["a"]).join("-")):null})),h=Object(i["a"])((function(e){return Object(b["c"])(e.replace("cols",""))})),O=[],x=function(){var e=Object(c["b"])().reduce((function(e,r){return e[Object(p["g"])(r,"cols")]=Object(p["c"])(n["p"]),e}),Object(u["c"])(null));return O=Object(u["h"])(e),Object(p["d"])(Object(u["m"])(d(d({},e),{},{alignContent:Object(p["c"])(n["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(m,"between","around","stretch"),e)})),alignH:Object(p["c"])(n["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(m,"between","around"),e)})),alignV:Object(p["c"])(n["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(m,"baseline","stretch"),e)})),noGutters:Object(p["c"])(n["g"],!1),tag:Object(p["c"])(n["u"],"div")})),s["Ob"])},j={name:s["Ob"],functional:!0,get props(){return delete this.props,this.props=x(),this.props},render:function(e,r){var a,s=r.props,n=r.data,o=r.children,c=s.alignV,l=s.alignH,i=s.alignContent,u=[];return O.forEach((function(e){var r=f(h(e),s[e]);r&&u.push(r)})),u.push((a={"no-gutters":s.noGutters},g(a,"align-items-".concat(c),c),g(a,"justify-content-".concat(l),l),g(a,"align-content-".concat(i),i),a)),e(s.tag,Object(t["a"])(n,{staticClass:"row",class:u}),o)}}},b28b:function(e,r,a){"use strict";a.d(r,"a",(function(){return P}));var t=a("b42e"),s=a("c637"),n=a("a723"),o=a("992e"),c=a("2326"),l=a("228e"),i=a("6c06"),u=a("7b1e"),p=a("b508"),b=a("d82f"),v=a("cf75"),d=a("fa73");function g(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?g(Object(a),!0).forEach((function(r){f(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function f(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var h=["auto","start","end","center","baseline","stretch"],O=function(e,r,a){var t=e;if(!Object(u["p"])(a)&&!1!==a)return r&&(t+="-".concat(r)),"col"!==e||""!==a&&!0!==a?(t+="-".concat(a),Object(d["c"])(t)):Object(d["c"])(t)},x=Object(p["a"])(O),j=Object(b["c"])(null),w=function(){var e=Object(l["b"])().filter(i["a"]),r=e.reduce((function(e,r){return e[r]=Object(v["c"])(n["i"]),e}),Object(b["c"])(null)),a=e.reduce((function(e,r){return e[Object(v["g"])(r,"offset")]=Object(v["c"])(n["p"]),e}),Object(b["c"])(null)),t=e.reduce((function(e,r){return e[Object(v["g"])(r,"order")]=Object(v["c"])(n["p"]),e}),Object(b["c"])(null));return j=Object(b["a"])(Object(b["c"])(null),{col:Object(b["h"])(r),offset:Object(b["h"])(a),order:Object(b["h"])(t)}),Object(v["d"])(Object(b["m"])(m(m(m(m({},r),a),t),{},{alignSelf:Object(v["c"])(n["u"],null,(function(e){return Object(c["a"])(h,e)})),col:Object(v["c"])(n["g"],!1),cols:Object(v["c"])(n["p"]),offset:Object(v["c"])(n["p"]),order:Object(v["c"])(n["p"]),tag:Object(v["c"])(n["u"],"div")})),s["z"])},P={name:s["z"],functional:!0,get props(){return delete this.props,this.props=w()},render:function(e,r){var a,s=r.props,n=r.data,c=r.children,l=s.cols,i=s.offset,u=s.order,p=s.alignSelf,b=[];for(var v in j)for(var d=j[v],g=0;g<d.length;g++){var m=x(v,d[g].replace(v,""),s[d[g]]);m&&b.push(m)}var h=b.some((function(e){return o["e"].test(e)}));return b.push((a={col:s.col||!h&&!l},f(a,"col-".concat(l),l),f(a,"offset-".concat(i),i),f(a,"order-".concat(u),u),f(a,"align-self-".concat(p),p),a)),e(s.tag,Object(t["a"])(n,{class:b}),c)}}},cf07:function(e,r,a){"use strict";a.d(r,"b",(function(){return v})),a.d(r,"a",(function(){return d}));var t=a("2b0e"),s=a("c637"),n=a("a723"),o=a("8690"),c=a("7b1e"),l=a("a8c8"),i=a("3a58"),u=a("cf75"),p=a("fa73"),b=a("8c18"),v=Object(u["d"])({animated:Object(u["c"])(n["g"],null),label:Object(u["c"])(n["u"]),labelHtml:Object(u["c"])(n["u"]),max:Object(u["c"])(n["p"],null),precision:Object(u["c"])(n["p"],null),showProgress:Object(u["c"])(n["g"],null),showValue:Object(u["c"])(n["g"],null),striped:Object(u["c"])(n["g"],null),value:Object(u["c"])(n["p"],0),variant:Object(u["c"])(n["u"])},s["Nb"]),d=t["default"].extend({name:s["Nb"],mixins:[b["a"]],inject:{bvProgress:{default:function(){return{}}}},props:v,computed:{progressBarClasses:function(){var e=this.computedAnimated,r=this.computedVariant;return[r?"bg-".concat(r):"",this.computedStriped||e?"progress-bar-striped":"",e?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(i["b"])(this.value,0)},computedMax:function(){var e=Object(i["b"])(this.max)||Object(i["b"])(this.bvProgress.max,0);return e>0?e:100},computedPrecision:function(){return Object(l["d"])(Object(i["c"])(this.precision,Object(i["c"])(this.bvProgress.precision,0)),0)},computedProgress:function(){var e=this.computedPrecision,r=Object(l["f"])(10,e);return Object(i["a"])(100*r*this.computedValue/this.computedMax/r,e)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(c["b"])(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(c["b"])(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(c["b"])(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(c["b"])(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(e){var r,a=this.label,t=this.labelHtml,s=this.computedValue,n=this.computedPrecision,c={};return this.hasNormalizedSlot()?r=this.normalizeSlot():a||t?c=Object(o["a"])(t,a):this.computedShowProgress?r=this.computedProgress:this.computedShowValue&&(r=Object(i["a"])(s,n)),e("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(p["g"])(this.computedMax),"aria-valuenow":Object(i["a"])(s,n)},domProps:c},r)}})},d6e4:function(e,r,a){"use strict";a.d(r,"a",(function(){return i}));var t=a("2b0e"),s=a("b42e"),n=a("c637"),o=a("a723"),c=a("cf75"),l=Object(c["d"])({textTag:Object(c["c"])(o["u"],"p")},n["v"]),i=t["default"].extend({name:n["v"],functional:!0,props:l,render:function(e,r){var a=r.props,t=r.data,n=r.children;return e(a.textTag,Object(s["a"])(t,{staticClass:"card-text"}),n)}})},f87c:function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("progress-basic"),a("progress-colored"),a("progress-label"),a("progress-label-custom"),a("progress-stripped"),a("progress-multiple-bar"),a("progress-animated")],1)],1)},s=[],n=a("a15b"),o=a("b28b"),c=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Basic Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[a("div",{staticClass:"demo-vertical-spacing"},[a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value+"%")+" ")]),a("b-progress",{attrs:{max:"100"},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})],1),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value1+"%")+" ")]),a("b-progress",{attrs:{max:"100"},model:{value:e.value1,callback:function(r){e.value1=r},expression:"value1"}})],1),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value2+"%")+" ")]),a("b-progress",{attrs:{max:"100"},model:{value:e.value2,callback:function(r){e.value2=r},expression:"value2"}})],1),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value3+"%")+" ")]),a("b-progress",{attrs:{max:"100"},model:{value:e.value3,callback:function(r){e.value3=r},expression:"value3"}})],1),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value4+"%")+" ")]),a("b-progress",{attrs:{max:"100"},model:{value:e.value4,callback:function(r){e.value4=r},expression:"value4"}})],1)])])},l=[],i=a("1079"),u=a("d6e4"),p=a("49f5"),b='\n<template>\n  <div class="demo-vertical-spacing">\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value"\n        max="100"\n      />\n    </div>\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value1+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value1"\n        max="100"\n      />\n    </div>\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value2+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value2"\n        max="100"\n      />\n    </div>\n\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value3+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value3"\n        max="100"\n      />\n    </div>\n\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value4+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value4"\n        max="100"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n  data() {\n    return {\n      value: 0,\n      value1: 25,\n      value2: 50,\n      value3: 75,\n      value4: 100,\n    }\n  },\n}\n<\/script>\n',v='\n<template>\n  <b-row\n    v-for="bar in bars"\n    :key="bar.variant"\n  >\n    <b-col\n      md="2"\n      class="pt-2"\n    >\n      {{ bar.variant }}:\n    </b-col>\n    <b-col\n      md="10"\n      class="pt-md-2"\n    >\n      <b-progress\n        :key="bar.variant"\n        animated\n        :value="bar.value"\n        :variant="bar.variant"\n        :class="\'progress-bar-\'+bar.variant"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BProgress, BRow, BCol} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n  data: () => ({\n    bars: [\n      { variant: \'success\', value: 75 },\n      { variant: \'info\', value: 75 },\n      { variant: \'warning\', value: 75 },\n      { variant: \'danger\', value: 75 },\n      { variant: \'primary\', value: 75 },\n      { variant: \'secondary\', value: 75 },\n    ],\n    timer: null,\n  }),\n  mounted() {\n    this.timer = setInterval(() => {\n      // eslint-disable-next-line\n      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))\n    }, 2000)\n  },\n  beforeDestroy() {\n    clearInterval(this.timer)\n    this.timer = null\n  },\n}\n<\/script>\n',d='\n<template>\n  <div class="demo-vertical-spacing">\n    <div>\n      <label>No label</label>\n      <b-progress\n        value="25"\n        max="100"\n      />\n    </div>\n\n    <div>\n      <label>Value label</label>\n      <b-progress\n        value="35"\n        max="100"\n        show-value\n        variant="secondary"\n        class="progress-bar-secondary"\n      />\n    </div>\n\n    <div>\n      <label>Progress label</label>\n      <b-progress\n        value="45"\n        max="100"\n        show-progress\n        variant="success"\n        class="progress-bar-success"\n      />\n    </div>\n\n    <div>\n      <label>Value label with precision</label>\n      <b-progress\n        value="55"\n        max="100"\n        precision="2"\n        show-value\n        variant="danger"\n        class="progress-bar-danger"\n      />\n    </div>\n\n    <div>\n      <label>Progress label with precision</label>\n      <b-progress\n        value="65"\n        max="100"\n        precision="2"\n        show-progress\n        variant="warning"\n        class="progress-bar-warning"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n',g='\n<template>\n  <b-progress :max="max">\n    <b-progress-bar\n      variant="danger"\n      :value="values[0]"\n      show-progress\n    />\n    <b-progress-bar\n      variant="warning"\n      :value="values[1]"\n      show-progress\n    />\n    <b-progress-bar\n      variant="primary"\n      :value="values[2]"\n      show-progress\n    />\n  </b-progress>\n</template>\n\n<script>\nimport { BProgressBar, BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgressBar,\n    BProgress,\n  },\n  data() {\n    return {\n      values: [15, 50, 10],\n      max: 100,\n    }\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-vertical-spacing">\n    <b-progress\n      value="25"\n      max="100"\n      striped\n    />\n    <b-progress\n      value="35"\n      max="100"\n      striped\n      class="progress-bar-secondary"\n      variant="secondary"\n    />\n    <b-progress\n      value="45"\n      max="100"\n      striped\n      variant="success"\n      class="progress-bar-success"\n    />\n    <b-progress\n      value="55"\n      max="100"\n      striped\n      variant="danger"\n      class="progress-bar-danger"\n    />\n    <b-progress\n      value="65"\n      max="100"\n      striped\n      variant="warning"\n      class="progress-bar-warning"\n    />\n    <b-progress\n      value="75"\n      max="100"\n      striped\n      variant="info"\n      class="progress-bar-info"\n    />\n    <b-progress\n      value="85"\n      max="100"\n      striped\n      variant="dark"\n      class="progress-bar-dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n\n',f='\n<template>\n  <div class="demo-vertical-spacing">\n    <div>\n      <label>Custom label via default slot</label>\n      <b-progress\n        :max="max"\n      >\n        <b-progress-bar :value="value">\n          <strong>{{ value.toFixed(2) }} / {{ max }}</strong>\n        </b-progress-bar>\n      </b-progress>\n    </div>\n\n    <div>\n      <label>Custom label via property</label>\n      <b-progress\n        :max="max"\n        class="progress-bar-info"\n      >\n        <b-progress-bar\n          :value="value"\n          :label="`${((value / max) * 100).toFixed(2)}%`"\n          variant="info"\n        />\n      </b-progress>\n    </div>\n\n    <div>\n      <label>Custom label via property (HTML support)</label>\n      <b-progress\n        :max="max"\n        class="progress-bar-warning"\n      >\n        <b-progress-bar\n          :value="value"\n          :label-html="`<del>${value}</del>`"\n          variant="warning"\n        />\n      </b-progress>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress, BProgressBar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n    BProgressBar,\n  },\n  data() {\n    return {\n      value: 33.333333333,\n      max: 50,\n    }\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="demo-vertical-spacing">\n    <b-progress\n      value="25"\n      max="100"\n    />\n    <b-progress\n      value="35"\n      max="100"\n      class="progress-bar-secondary"\n      variant="secondary"\n    />\n    <b-progress\n      value="45"\n      max="100"\n      class="progress-bar-success"\n      variant="success"\n    />\n    <b-progress\n      value="55"\n      max="100"\n      class="progress-bar-danger"\n      variant="danger"\n    />\n    <b-progress\n      value="65"\n      max="100"\n      class="progress-bar-warning"\n      variant="warning"\n    />\n    <b-progress\n      value="75"\n      max="100"\n      class="progress-bar-info"\n      variant="info"\n    />\n    <b-progress\n      value="85"\n      max="100"\n      class="progress-bar-dark"\n      variant="dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n',O={components:{BCardCode:i["a"],BCardText:u["a"],BProgress:p["a"]},data:function(){return{value:0,value1:25,value2:50,value3:75,value4:100,codeBasic:b}}},x=O,j=a("2877"),w=Object(j["a"])(x,c,l,!1,null,null,null),P=w.exports,y=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Colored Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeColored)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use")]),a("code",[e._v("variant")]),a("span",[e._v("prop to add different colors to progressbar and add ")]),a("code",[e._v(".progress-bar-{color_name}")]),e._v(". ")]),a("div",{staticClass:"demo-vertical-spacing"},[a("b-progress",{attrs:{value:"25",max:"100"}}),a("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100",variant:"secondary"}}),a("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100",variant:"success"}}),a("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",variant:"danger"}}),a("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",variant:"warning"}}),a("b-progress",{staticClass:"progress-bar-info",attrs:{value:"75",max:"100",variant:"info"}}),a("b-progress",{staticClass:"progress-bar-dark",attrs:{value:"85",max:"100",variant:"dark"}})],1)],1)},_=[],C={components:{BCardCode:i["a"],BProgress:p["a"],BCardText:u["a"]},data:function(){return{codeColored:h}}},B=C,S=Object(j["a"])(B,y,_,!1,null,null,null),k=S.exports,V=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Labeled Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLabel)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Add labels to your progress bars by either enabling")]),a("code",[e._v("show-progress")]),a("span",[e._v("(percentage of max) or")]),a("code",[e._v("show-value")]),a("span",[e._v(" for the current absolute value. You may also set the precision (number of digits after the decimal) via the ")]),a("code",[e._v("precision")]),a("span",[e._v("prop (default is 0digits after the decimal).")])]),a("div",{staticClass:"demo-vertical-spacing"},[a("div",[a("label",[e._v("No label")]),a("b-progress",{attrs:{value:"25",max:"100"}})],1),a("div",[a("label",[e._v("Value label")]),a("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100","show-value":"",variant:"secondary"}})],1),a("div",[a("label",[e._v("Progress label")]),a("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100","show-progress":"",variant:"success"}})],1),a("div",[a("label",[e._v("Value label with precision")]),a("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",precision:"2","show-value":"",variant:"danger"}})],1),a("div",[a("label",[e._v("Progress label with precision")]),a("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",precision:"2","show-progress":"",variant:"warning"}})],1)])],1)},E=[],D={components:{BCardCode:i["a"],BProgress:p["a"],BCardText:u["a"]},data:function(){return{codeLabel:d}}},M=D,R=Object(j["a"])(M,V,E,!1,null,null,null),T=R.exports,$=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Striped Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeStripped)+" ")]},proxy:!0}])},[a("b-card-text",[e._v("Set striped to apply a stripe via CSS gradient over the progress bar's background variant.")]),a("div",{staticClass:"demo-vertical-spacing"},[a("b-progress",{attrs:{value:"25",max:"100",striped:""}}),a("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100",striped:"",variant:"secondary"}}),a("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100",striped:"",variant:"success"}}),a("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",striped:"",variant:"danger"}}),a("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",striped:"",variant:"warning"}}),a("b-progress",{staticClass:"progress-bar-info",attrs:{value:"75",max:"100",striped:"",variant:"info"}}),a("b-progress",{staticClass:"progress-bar-dark",attrs:{value:"85",max:"100",striped:"",variant:"dark"}})],1)],1)},L=[],H={components:{BCardCode:i["a"],BProgress:p["a"],BCardText:u["a"]},data:function(){return{codeStripped:m}}},A=H,z=Object(j["a"])(A,$,L,!1,null,null,null),N=z.exports,I=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Animated Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAnimated)+" ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[e._v("The striped gradient can also be animated by setting the")]),a("code",[e._v("animated")]),a("span",[e._v("prop.")])]),e._l(e.bars,(function(r){return a("b-row",{key:r.variant},[a("b-col",{staticClass:"pt-2",attrs:{md:"2"}},[e._v(" "+e._s(r.variant)+": ")]),a("b-col",{staticClass:"pt-md-2",attrs:{md:"10"}},[a("b-progress",{key:r.variant,class:"progress-bar-"+r.variant,attrs:{animated:"",value:r.value,variant:r.variant}})],1)],1)}))],2)},F=[],G=(a("d3b7"),a("159b"),{components:{BRow:n["a"],BCol:o["a"],BCardCode:i["a"],BProgress:p["a"],BCardText:u["a"]},data:function(){return{codeAnimated:v,bars:[{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"success",value:75},{variant:"info",value:75},{variant:"danger",value:75},{variant:"warning",value:75}],timer:null}},mounted:function(){var e=this;this.timer=setInterval((function(){e.bars.forEach((function(e){return e.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}}),J=G,U=Object(j["a"])(J,I,F,!1,null,null,null),Y=U.exports,q=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Multiple bars"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeMultipleBar)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Include multiple")]),a("code",[e._v("<b-progress-bar>")]),a("span",[e._v("sub-components in a")]),a("code",[e._v("<b-progress>")]),a("span",[e._v("component to build a horizontally stacked set of progress bars.")])]),a("b-progress",{attrs:{max:e.max}},[a("b-progress-bar",{attrs:{variant:"danger",value:e.values[0],"show-progress":""}}),a("b-progress-bar",{attrs:{variant:"warning",value:e.values[1],"show-progress":""}}),a("b-progress-bar",{attrs:{variant:"primary",value:e.values[2],"show-progress":""}})],1)],1)},K=[],Q=a("cf07"),W={components:{BCardCode:i["a"],BProgressBar:Q["a"],BCardText:u["a"],BProgress:p["a"]},data:function(){return{values:[15,50,10],max:100,codeMultipleBar:g}}},X=W,Z=Object(j["a"])(X,q,K,!1,null,null,null),ee=Z.exports,re=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Custom Labeled Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustomLabel)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Need more control over the label? Provide your own label by using the default slot within a")]),a("code",[e._v("<b-progress-bar>")]),a("span",[e._v("sub-component, or by using the")]),a("code",[e._v("label")]),a("span",[e._v("or")]),a("code",[e._v("label-html")]),a("span",[e._v(" property on ")]),a("code",[e._v("<b-progress-bar>")]),e._v(": ")]),a("div",{staticClass:"demo-vertical-spacing"},[a("div",[a("label",[e._v("Custom label via default slot")]),a("b-progress",{attrs:{max:e.max}},[a("b-progress-bar",{attrs:{value:e.value}},[a("strong",[e._v(e._s(e.value.toFixed(2))+" / "+e._s(e.max))])])],1)],1),a("div",[a("label",[e._v("Custom label via property")]),a("b-progress",{staticClass:"progress-bar-info",attrs:{max:e.max}},[a("b-progress-bar",{attrs:{value:e.value,label:(e.value/e.max*100).toFixed(2)+"%",variant:"info"}})],1)],1),a("div",[a("label",[e._v("Custom label via property (HTML support)")]),a("b-progress",{staticClass:"progress-bar-warning",attrs:{max:e.max}},[a("b-progress-bar",{attrs:{value:e.value,"label-html":"<del>"+e.value+"</del>",variant:"warning"}})],1)],1)])],1)},ae=[],te={components:{BCardCode:i["a"],BProgress:p["a"],BProgressBar:Q["a"],BCardText:u["a"]},data:function(){return{codeCustomLabel:f,value:33.333333333,max:50}}},se=te,ne=Object(j["a"])(se,re,ae,!1,null,null,null),oe=ne.exports,ce={components:{BRow:n["a"],BCol:o["a"],ProgressBasic:P,ProgressColored:k,ProgressLabel:T,ProgressAnimated:Y,ProgressStripped:N,ProgressMultipleBar:ee,ProgressLabelCustom:oe}},le=ce,ie=Object(j["a"])(le,t,s,!1,null,null,null);r["default"]=ie.exports}}]);
//# sourceMappingURL=chunk-1dfaac27.69e5987d.js.map