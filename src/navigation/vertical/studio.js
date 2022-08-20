export default [
	{
		title: "Studio",
		route: "apps-email",
		icon: "ApertureIcon",
		children: [
			{
				title: "Photos gallery",
				route: "apps-email",
			},
			{
				title: "Videos gallery",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
		],
	},
];
