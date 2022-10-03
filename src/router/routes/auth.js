export default [
	{
		path: "/login",
		name: "auth-login",
		component: () => import("@/views/authentication/Login.vue"),
		meta: {
			resource: "member",
			action: "read",
			layout: "full",
			resource: "Auth",
			redirectIfLoggedIn: true,
		},
	},

	{
		path: "/register",
		name: "auth-register",
		component: () => import("@/views/pages/authentication/Register.vue"),
		meta: {
			resource: "member",
			action: "read",
			layout: "full",
			resource: "Auth",
			redirectIfLoggedIn: true,
		},
	},
	{
		path: "/forgot-password",
		name: "auth-forgot-password",
		component: () => import("@/views/pages/authentication/ForgotPassword.vue"),
		meta: {
			resource: "member",
			action: "read",
			layout: "full",
			resource: "Auth",
			redirectIfLoggedIn: true,
		},
	},
	{
		path: "/pages/authentication/reset-password-v1",
		name: "auth-reset-password-v1",
		component: () => import("@/views/pages/authentication/ResetPassword-v1.vue"),
		meta: {
			resource: "member",
			action: "read",
			layout: "full",
		},
	},
];
