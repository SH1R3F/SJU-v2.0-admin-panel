export default [
	{
		title: "Technical support",
		route: "apps-email",
		icon: "HeadphonesIcon",
		children: [
			{
				title: "Members",
				route: "apps-email",
			},
			{
				title: "Subscribers",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
			{
				title: "Volunteers",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
		],
	},
];
