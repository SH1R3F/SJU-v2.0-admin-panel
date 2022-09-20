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
				route: { name: "app-courses" },
			},
			{
				title: "Templates",
				route: { name: "courses-templates" },
			},
			{
				title: "Questionnaires",
				route: { name: "courses-questionnaires" },
			},
		],
	},
];
