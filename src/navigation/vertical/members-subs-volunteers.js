export default [
	{
		title: "Members",
		route: "apps-email",
		icon: "UsersIcon",
		children: [
			// {
			// 	title: "Options",
			// 	children: [
			// 		{
			// 			title: "Cities",
			// 			route: "apps-invoice-list",
			// 		},
			// 	],
			// },
			{
				title: "All members",
				route: { name: "all-members" },
			},
			{
				title: "Branch acceptance",
				children: [
					{
						title: "Awaiting",
						route: "branch-waiting-members",
					},
					{
						title: "Accepted",
						route: "branch-accepted-members",
					},
				],
			},
			{
				title: "Awaiting",
				route: { name: "waiting-members" },
			},
			{
				title: "Refused members",
				route: { name: "refused-members" },
			},
		],
	},
	{
		title: "Subscribers",
		icon: "UserPlusIcon",
		children: [
			{
				title: "Active subscribers",
				route: { name: "active-subscribers" },
			},
			{
				title: "Awaiting activation",
				route: { name: "inactive-subscribers" },
			},
		],
	},
	{
		title: "Volunteers",
		route: "active-volunteers",
		icon: "UserCheckIcon",
		children: [
			{
				title: "Activated",
				route: { name: "active-volunteers", params: { id: 4987 } },
			},
			{
				title: "Awaiting activation",
				route: { name: "inactive-volunteers", params: { id: 4987 } },
			},
		],
	},
];
