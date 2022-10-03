export default [
	{
		title: "Site management",
		icon: "ToolIcon",
		children: [
			{
				title: "Settings",
				children: [
					{
						title: "Options",
						resource: "settings",
						action: "manage",
					},
					{
						title: "Tags",
						resource: "settings",
						action: "manage",
					},
					{
						title: "News categories",
						resource: "settings",
						action: "manage",
					},
				],
			},
			{
				title: "Menus",
				resource: "menu",
				action: "read",
			},
			{
				title: "Pages",
				resource: "page",
				action: "read",
			},
			{
				title: "News",
				resource: "new",
				action: "read",
			},
			{
				title: "Ads",
				resource: "ad",
				action: "read",
			},
		],
	},
];
