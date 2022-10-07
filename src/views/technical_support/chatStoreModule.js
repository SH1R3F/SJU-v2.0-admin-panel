import router from "@/router"
import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchTickets() {
			return new Promise((resolve, reject) => {
				axios
					.get("/support", {
						params: {
							type: router.currentRoute.name === "support-volunteers" ? "volunteer" : router.currentRoute.name === "support-subscribers" ? "subscriber" : "members",
							status: "all",
						},
					})
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		getChat(ctx, { ticketId }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/support/${ticketId}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		sendMessage(ctx, { ticketId, message, attachment, senderId }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/support/${ticketId}`, { message, attachment, senderId })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		toggleTicket(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/support/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteTicket(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/support/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
