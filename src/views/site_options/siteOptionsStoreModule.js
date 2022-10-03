import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchSiteOptions(ctx) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/site_options`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		updateSiteOptions(ctx, params) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/site_options`, params)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
