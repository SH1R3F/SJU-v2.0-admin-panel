export default [
	{
		title: "Courses",
		route: "apps-email",
		icon: "ClipboardIcon",
		children: [
			{
				title: "Options",
				children: [
					{
						title: "Tags",
						route: "apps-invoice-list",
					},
				],
			},
			{
				title: "All courses",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Templates",
				route: { name: "apps-invoice-edit", params: { id: 4987 } },
			},
			{
				title: "Questionnaires",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
		],
	},
];
