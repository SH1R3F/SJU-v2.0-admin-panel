import axios from "@axios";

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchSubscribers(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get("/subscribers", { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		fetchSubscriber(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/subscribers/show/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		updateSubscriber(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/subscribers/update/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		// Fetch courses that user has enrolled in
		fetchCourses(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/subscribers/show/${id}/courses`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		// addUser(ctx, userData) {
		// 	return new Promise((resolve, reject) => {
		// 		axios
		// 			.post("/apps/user/users", { user: userData })
		// 			.then((response) => resolve(response))
		// 			.catch((error) => reject(error));
		// 	});
		// },
	},
};
