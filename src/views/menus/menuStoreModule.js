import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchMenus(ctx) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/menus`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchMenu(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/menus/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		updateMenu(ctx, { id, formData }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/menus/${id}`, formData)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateMenusOrder(ctx, { menus }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/menus`, { menus })
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		addMenu(ctx, { formData }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/menus`, formData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteMenu(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/menus/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
