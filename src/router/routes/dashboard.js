export default [
	{
		path: "/dashboard/analytics",
		name: "dashboard-analytics",
		component: () => import("@/views/dashboard/analytics/Analytics.vue"),
		meta: {
			resource: "dashboard",
			action: "read",
		},
	},
];
