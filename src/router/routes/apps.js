export default [
	{
		path: "/apps/calendar",
		name: "apps-calendar",
		component: () => import("@/views/apps/calendar/Calendar.vue"),
	},

	// *===============================================---*
	// *--------- EMAIL & IT'S FILTERS N LABELS -------------------------------*
	// *===============================================---*
	{
		path: "/apps/email",
		name: "apps-email",
		component: () => import("@/views/apps/email/Email.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "email-application",
		},
	},
	{
		path: "/apps/email/:folder",
		name: "apps-email-folder",
		component: () => import("@/views/apps/email/Email.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "email-application",
			navActiveLink: "apps-email",
		},
		beforeEnter(to, _, next) {
			if (["sent", "draft", "starred", "spam", "trash"].includes(to.params.folder)) next();
			else next({ name: "error-404" });
		},
	},
	{
		path: "/apps/email/label/:label",
		name: "apps-email-label",
		component: () => import("@/views/apps/email/Email.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "email-application",
			navActiveLink: "apps-email",
		},
		beforeEnter(to, _, next) {
			if (["personal", "company", "important", "private"].includes(to.params.label)) next();
			else next({ name: "error-404" });
		},
	},

	// *===============================================---*
	// *--------- TODO & IT'S FILTERS N TAGS ---------------------------------------*
	// *===============================================---*
	{
		path: "/apps/todo",
		name: "apps-todo",
		component: () => import("@/views/apps/todo/Todo.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "todo-application",
		},
	},
	{
		path: "/apps/todo/:filter",
		name: "apps-todo-filter",
		component: () => import("@/views/apps/todo/Todo.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "todo-application",
			navActiveLink: "apps-todo",
		},
		beforeEnter(to, _, next) {
			if (["important", "completed", "deleted"].includes(to.params.filter)) next();
			else next({ name: "error-404" });
		},
	},
	{
		path: "/apps/todo/tag/:tag",
		name: "apps-todo-tag",
		component: () => import("@/views/apps/todo/Todo.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "todo-application",
			navActiveLink: "apps-todo",
		},
		beforeEnter(to, _, next) {
			if (["team", "low", "medium", "high", "update"].includes(to.params.tag)) next();
			else next({ name: "error-404" });
		},
	},

	// *===============================================---*
	// *--------- CHAT  ---------------------------------------*
	// *===============================================---*
	{
		path: "/apps/chat",
		name: "apps-chat",
		component: () => import("@/views/apps/chat/Chat.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "chat-application",
		},
	},

	// *===============================================---*
	// *--------- ECOMMERCE  ---------------------------------------*
	// *===============================================---*
	{
		path: "/apps/e-commerce/shop",
		name: "apps-e-commerce-shop",
		component: () => import("@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue"),
		meta: {
			contentRenderer: "sidebar-left-detached",
			contentClass: "ecommerce-application",
			pageTitle: "Shop",
			breadcrumb: [
				{
					text: "ECommerce",
				},
				{
					text: "Shop",
					active: true,
				},
			],
		},
	},
	{
		path: "/apps/e-commerce/wishlist",
		name: "apps-e-commerce-wishlist",
		component: () => import("@/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue"),
		meta: {
			pageTitle: "Wishlist",
			contentClass: "ecommerce-application",
			breadcrumb: [
				{
					text: "ECommerce",
				},
				{
					text: "Wishlist",
					active: true,
				},
			],
		},
	},
	{
		path: "/apps/e-commerce/checkout",
		name: "apps-e-commerce-checkout",
		component: () => import("@/views/apps/e-commerce/e-commerce-checkout/ECommerceCheckout.vue"),
		meta: {
			pageTitle: "Checkout",
			contentClass: "ecommerce-application",
			breadcrumb: [
				{
					text: "ECommerce",
				},
				{
					text: "Checkout",
					active: true,
				},
			],
		},
	},
	{
		path: "/apps/e-commerce/:slug",
		name: "apps-e-commerce-product-details",
		component: () => import("@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue"),
		meta: {
			pageTitle: "Product Details",
			contentClass: "ecommerce-application",
			breadcrumb: [
				{
					text: "ECommerce",
				},
				{
					text: "Shop",
					active: true,
				},
				{
					text: "Product Details",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *--------- USER ---- ---------------------------------------*
	// *===============================================---*
	{
		path: "/apps/users/list",
		name: "apps-users-list",
		component: () => import("@/views/apps/user/users-list/UsersList.vue"),
	},
	{
		path: "/apps/users/view/:id",
		name: "apps-users-view",
		component: () => import("@/views/apps/user/users-view/UsersView.vue"),
	},
	{
		path: "/apps/users/edit/:id",
		name: "apps-users-edit",
		component: () => import("@/views/apps/user/users-edit/UsersEdit.vue"),
	},

	// Invoice
	{
		path: "/apps/invoice/list",
		name: "apps-invoice-list",
		component: () => import("@/views/apps/invoice/invoice-list/InvoiceList.vue"),
	},
	{
		path: "/apps/invoice/preview/:id",
		name: "apps-invoice-preview",
		component: () => import("@/views/apps/invoice/invoice-preview/InvoicePreview.vue"),
	},
	{
		path: "/apps/invoice/add/",
		name: "apps-invoice-add",
		component: () => import("@/views/apps/invoice/invoice-add/InvoiceAdd.vue"),
	},
	{
		path: "/apps/invoice/edit/:id",
		name: "apps-invoice-edit",
		component: () => import("@/views/apps/invoice/invoice-edit/InvoiceEdit.vue"),
	},

	// *===============================================---*
	// *------------------- Members ------------------*
	// *===============================================---*
	{
		path: "/members",
		name: "all-members",
		component: () => import("@/views/member/members-list/MembersList.vue"),
		meta: {
			pageTitle: "List members",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "List members",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/branch/waiting",
		name: "branch-waiting-members",
		component: () => import("@/views/member/members-list/MembersList.vue"),
		meta: {
			pageTitle: "Members waiting branch approval",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "List members",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/branch/accepted",
		name: "branch-accepted-members",
		component: () => import("@/views/member/members-list/MembersList.vue"),
		meta: {
			pageTitle: "Branch approved members",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Branch approved members",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/waiting",
		name: "waiting-members",
		component: () => import("@/views/member/members-list/MembersList.vue"),
		meta: {
			pageTitle: "Members waiting admin approval",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Members waiting admin approval",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/refused",
		name: "refused-members",
		component: () => import("@/views/member/members-list/MembersList.vue"),
		meta: {
			pageTitle: "Refused members",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Refused members",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/create",
		name: "create-member",
		component: () => import("@/views/member/members-list/MembersListAddNew.vue"),
		meta: {
			pageTitle: "Create member",
			breadcrumb: [
				{
					text: "Members",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/:id",
		name: "show-member",
		component: () => import("@/views/member/members-view/MembersView.vue"),
		meta: {
			pageTitle: "Show member",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Show member",
					active: true,
				},
			],
		},
	},
	{
		path: "/members/edit/:id",
		name: "edit-member",
		component: () => import("@/views/member/members-edit/MembersEdit.vue"),
		meta: {
			pageTitle: "Edit member",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Edit member",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *------------------- Subscribers ------------------*
	// *===============================================---*
	{
		path: "/subscribers/active",
		name: "active-subscribers",
		component: () => import("@/views/subscriber/subscribers-list/SubscribersList.vue"),
		meta: {
			pageTitle: "List subscribers",
			breadcrumb: [
				{
					text: "Subscribers",
				},
				{
					text: "List subscribers",
					active: true,
				},
			],
		},
	},
	{
		path: "/subscribers/inactive",
		name: "inactive-subscribers",
		component: () => import("@/views/subscriber/subscribers-list/SubscribersList.vue"),
		meta: {
			pageTitle: "List subscribers",
			breadcrumb: [
				{
					text: "Subscribers",
				},
				{
					text: "List subscribers",
					active: true,
				},
			],
		},
	},
	{
		path: "/subscribers/:id",
		name: "show-subscriber",
		component: () => import("@/views/subscriber/subscribers-view/SubscribersView.vue"),
		meta: {
			pageTitle: "Show subscriber",
			breadcrumb: [
				{
					text: "Subscribers",
				},
				{
					text: "Show subscriber",
					active: true,
				},
			],
		},
	},
	{
		path: "/subscribers/edit/:id",
		name: "edit-subscriber",
		component: () => import("@/views/subscriber/subscribers-edit/SubscribersEdit.vue"),
		meta: {
			pageTitle: "Edit subscriber",
			breadcrumb: [
				{
					text: "Subscribers",
				},
				{
					text: "Edit subscriber",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *--------------------- Courses --------------------*
	// *===============================================---*
	{
		path: "/courses",
		name: "app-courses",
		component: () => import("@/views/courses/courses/courses-list/CoursesList.vue"),
		meta: {
			pageTitle: "List courses",
			breadcrumb: [
				{
					text: "Courses",
					active: true,
				},
			],
		},
	},
	{
		path: "/courses/edit/:id",
		name: "edit-course",
		component: () => import("@/views/courses/courses/courses-edit/CoursesEdit.vue"),
		meta: {
			pageTitle: "Edit course",
			breadcrumb: [
				{
					text: "Courses",
					active: true,
				},
			],
		},
	},
	{
		path: "/courses/create",
		name: "create-course",
		component: () => import("@/views/courses/courses/courses-list/CoursesListAddNew.vue"),
		meta: {
			pageTitle: "Create course",
			breadcrumb: [
				{
					text: "Courses",
					active: true,
				},
			],
		},
	},
	{
		path: "/courses/:id",
		name: "show-course",
		component: () => import("@/views/courses/courses/courses-view/CoursesView.vue"),
		meta: {
			pageTitle: "View course",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "View course",
					active: true,
				},
			],
		},
	},
	{
		path: "/courses/namings",
		name: "courses-namings",
		component: () => import("@/views/courses/namings/namings-list/NamingsList.vue"),
		meta: {
			pageTitle: "List namings",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Options",
				},
				{
					text: "Namings",
					active: true,
				},
			],
		},
	},
	{
		path: "/courses/:naming(type|category|gender|location)/edit/:id",
		name: "edit-naming",
		component: () => import("@/views/courses/namings/namings-edit/NamingsEdit.vue"),
		meta: {
			pageTitle: "Edit naming",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Options",
				},
				{
					text: "Edit naming",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *-------------- Courses Templates -----------------*
	// *===============================================---*
	{
		path: "/courses/templates",
		name: "courses-templates",
		component: () => import("@/views/courses/templates/templates-list/TemplatesList.vue"),
		meta: {
			pageTitle: "List templates",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Templates",
					active: true,
				},
			],
		},
	},
	{
		path: "/courses/templates/edit/:id",
		name: "edit-template",
		component: () => import("@/views/courses/templates/templates-edit/TemplatesEdit.vue"),
		meta: {
			pageTitle: "Edit template",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Templates",
				},
				{
					text: "Edit template",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *-------------- Courses Questionnaires -----------------*
	// *===============================================---*
	{
		path: "/courses/questionnaires",
		name: "courses-questionnaires",
		component: () => import("@/views/courses/questionnaires/questionnaires-list/QuestionnairesList.vue"),
		meta: {
			pageTitle: "List questionnaires",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Questionnaires",
					active: true,
				},
			],
		},
	},

	{
		path: "/courses/questionnaires/edit/:id",
		name: "edit-questionnaire",
		component: () => import("@/views/courses/questionnaires/questionnaires-edit/QuestionnairesEdit.vue"),
		meta: {
			pageTitle: "Edit questionnaire",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Questionnaires",
				},
				{
					text: "Edit questionnaire",
					active: true,
				},
			],
		},
	},
];
