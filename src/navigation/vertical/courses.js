export default [
	{
		title: "Courses",
		icon: "BookOpenIcon",
		children: [
			{
				title: "Options",
				children: [
					{
						icon: "TagIcon",
						title: "Namings",
						route: "courses-namings",
						resource: "namings",
						action: "manage",
					},
				],
			},
			{
				title: "All courses",
				route: { name: "app-courses" },
				resource: "course",
				action: "read",
			},
			{
				title: "Templates",
				route: { name: "courses-templates" },
				resource: "template",
				action: "read",
			},
			{
				title: "Questionnaires",
				route: { name: "courses-questionnaires" },
				resource: "questionnaire",
				action: "read",
			},
		],
	},
];
