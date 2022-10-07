import Vue from "vue"

// axios
import axios from "axios"
import i18n from "./i18n"
import router from "@/router"

const axiosIns = axios.create({
	// You can add your headers here
	// ================================
	baseURL: process.env.VUE_APP_API_BASEURL,
	withCredentials: true,
	// timeout: 1000,
	headers: {
		"Accept-Language": i18n.locale,
	},
})

Vue.prototype.$http = axiosIns

export default axiosIns
