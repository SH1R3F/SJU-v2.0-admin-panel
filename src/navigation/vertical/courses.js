export default [
	{
		title: "Courses",
		route: "apps-email",
		icon: "BookOpenIcon",
		children: [
			{
				title: "Options",
				children: [
					{
						icon: "TagIcon",
						title: "Namings",
						route: "courses-namings",
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
