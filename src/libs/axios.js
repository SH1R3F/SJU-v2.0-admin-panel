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

axiosIns.interceptors.response.use(undefined, function (error) {
	if (error.response.status === 403) {
		router.push({ name: "not-authorized" })
	} else if (error.response.status === 404) {
		router.push({ name: "error-404" })
	}
})

Vue.prototype.$http = axiosIns

export default axiosIns
