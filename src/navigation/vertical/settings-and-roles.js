export default [
	{
		title: "Settings",
		icon: "SettingsIcon",
		children: [
			{
				title: "Site Options",
				route: "site-options",
				resource: "options",
				action: "manage",
			},
			{
				title: "Roles & Permissions",
				route: "app-roles",
				resource: "roles",
				action: "manage",
			},
			{
				title: "Moderators",
				route: "app-moderators",
				resource: "moderator",
				action: "read",
			},
		],
	},
];
