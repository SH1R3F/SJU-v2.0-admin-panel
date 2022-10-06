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
				route: "site-menus",
				resource: "menu",
				action: "read",
			},
			{
				title: "Pages",
				route: "site-pages",
				resource: "page",
				action: "read",
			},
			{
				title: "Blog posts",
				route: "blog-posts",
				resource: "post",
				action: "read",
			},
			// {
			// 	title: "Ads",
			// 	resource: "ad",
			// 	action: "read",
			// },
		],
	},
]
