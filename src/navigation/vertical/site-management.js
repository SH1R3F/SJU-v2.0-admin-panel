export default [
	{
		title: "Site management",
		route: "apps-email",
		icon: "ToolIcon",
		children: [
			{
				title: "Settings",
				children: [
					{
						title: "Options",
						route: "apps-invoice-list",
					},
					{
						title: "Tags",
						route: "apps-invoice-list",
					},
					{
						title: "News categories",
						route: "apps-invoice-list",
					},
				],
			},
			{
				title: "Menus",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Pages",
				route: { name: "apps-invoice-edit", params: { id: 4987 } },
			},
			{
				title: "News",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Ads",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
		],
	},
];
