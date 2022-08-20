export default [
	{
		title: "Settings",
		route: "apps-email",
		icon: "SettingsIcon",
		children: [
			{
				title: "Site Options",
				route: "apps-invoice-list",
			},
			{
				title: "Roles & Permissions",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Moderators",
				route: { name: "apps-invoice-edit", params: { id: 4987 } },
			},
		],
	},
];
