import Vue from "vue";
import { ToastPlugin, ModalPlugin } from "bootstrap-vue";
import VueCompositionAPI from "@vue/composition-api";

import i18n, { locale } from "@/libs/i18n";
import router from "./router";
import store from "./store";
import App from "./App.vue";

// Global Components
import "./global-components";

// 3rd party plugins
import axios from "@axios";
import "@/libs/acl";
import "@/libs/portal-vue";
import "@/libs/clipboard";
import "@/libs/toastification";
import "@/libs/sweet-alerts";
import "@/libs/vue-select";
import "@/libs/tour";

// Axios Mock Adapter
import "@/@fake-db/db";

// Localizing validation
import { localize } from "vee-validate";
localize(locale);

// Axios base url
axios.defaults.baseURL = process.env.VUE_APP_API_BASEURL;

// BSV Plugin Registration
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

// Composition API
Vue.use(VueCompositionAPI);

// Date picker for meladi and hijri dates
import VueDateTimeJs from "vue-datetime-js";
Vue.component("date-picker", VueDateTimeJs);

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require("@core/assets/fonts/feather/iconfont.css"); // For form-wizard

// import core styles
require("@core/scss/core.scss");

// import assets styles
require("@/assets/scss/style.scss");

Vue.config.productionTip = process.env.VUE_APP_ENV === "production";

new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App),
}).$mount("#app");
