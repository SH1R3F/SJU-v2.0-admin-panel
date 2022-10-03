export default [
	{
		header: "Apps",
		icon: "PackageIcon",
		children: [
			{
				title: "Email",
				icon: "MailIcon",
			},
			{
				title: "Chat",
				icon: "MessageSquareIcon",
			},
			{
				title: "Todo",
				icon: "CheckSquareIcon",
			},
			{
				title: "Calendar",
				icon: "CalendarIcon",
			},
			{
				title: "Invoice",
				icon: "FileTextIcon",
				children: [
					{
						title: "List",
					},
					{
						title: "Preview",
					},
					{
						title: "Edit",
					},
					{
						title: "Add",
					},
				],
			},
			{
				title: "eCommerce",
				icon: "ShoppingCartIcon",
				children: [
					{
						title: "Shop",
					},
					{
						title: "Details",
					},
					{
						title: "Wishlist",
					},
					{
						title: "Checkout",
					},
				],
			},
			{
				title: "User",
				icon: "UserIcon",
				children: [
					{
						title: "List",
					},
					{
						title: "View",
					},
					{
						title: "Edit",
					},
				],
			},
		],
	},
];
