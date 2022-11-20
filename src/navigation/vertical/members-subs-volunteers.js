export default [
	{
		title: "Members",
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
				route: "all-members",
				resource: "member",
				action: "read",
			},
			{
				title: "Branch acceptance",
				children: [
					{
						title: "Awaiting",
						route: "branch-waiting-members",
						resource: "member",
						action: "read",
					},
					{
						title: "Accepted",
						route: "branch-accepted-members",
						resource: "member",
						action: "read",
					},
				],
			},
			{
				title: "Awaiting",
				route: "waiting-members",
				resource: "member",
				action: "read",
			},
			{
				title: "Refused members",
				route: "refused-members",
				resource: "member",
				action: "read",
			},
			{
				title: "Invoices",
				route: "list-invoices",
				resource: "member",
				action: "read",
			},
		],
	},
	{
		title: "Subscribers",
		icon: "UserPlusIcon",
		children: [
			{
				title: "Active subscribers",
				route: "active-subscribers",
				resource: "subscriber",
				action: "read",
			},
			{
				title: "Awaiting activation",
				route: "inactive-subscribers",
				resource: "subscriber",
				action: "read",
			},
		],
	},
	{
		title: "Volunteers",
		icon: "UserCheckIcon",
		children: [
			{
				title: "Activated",
				route: "active-volunteers",
				resource: "volunteer",
				action: "read",
			},
			{
				title: "Awaiting activation",
				route: "inactive-volunteers",
				resource: "volunteer",
				action: "read",
			},
		],
	},
]
