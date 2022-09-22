export default [
	{
		title: "Members",
		route: "apps-email",
		icon: "UsersIcon",
		children: [
			{
				title: "Options",
				children: [
					{
						title: "Cities",
						route: "apps-invoice-list",
					},
				],
			},
			{
				title: "All members",
				route: { name: "all-members", params: { id: 4987 } },
			},
			{
				title: "Branch acceptance",
				route: { name: "apps-invoice-edit", params: { id: 4987 } },
				children: [
					{
						title: "Awaiting",
						route: "apps-invoice-list",
					},
					{
						title: "Accepted",
						route: "apps-invoice-list",
					},
				],
			},
			{
				title: "Awaiting",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Refused",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
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
		route: "apps-email",
		icon: "UserCheckIcon",
		children: [
			{
				title: "Activated",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Awaiting activation",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
		],
	},
];
