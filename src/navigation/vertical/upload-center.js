export default [
	{
		title: "Upload center",
		route: "apps-email",
		icon: "UploadCloudIcon",
		children: [
			{
				title: "Options",
				route: "apps-email",
			},
			{
				title: "Upload center",
				route: { name: "apps-invoice-preview", params: { id: 4987 } },
			},
		],
	},
];
