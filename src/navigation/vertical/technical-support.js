export default [
	{
		title: "Technical support",
		icon: "HeadphonesIcon",
		children: [
			{
				title: "Members",
				route: "support-members",
				resource: "membersupport",
				action: "manage",
			},
			{
				title: "Subscribers",
				route: "support-subscribers",
				resource: "subscribersupport",
				action: "manage",
			},
			{
				title: "Volunteers",
				route: "support-volunteers",
				resource: "volunteersupport",
				action: "manage",
			},
		],
	},
]
