export default [
	// *===============================================---*
	// *------------------ Site Options ------------------*
	// *===============================================---*
	{
		path: "/site/options",
		name: "site-options",
		component: () => import("@/views/site_options/SiteOptions.vue"),
		meta: {
			resource: "options",
			action: "manage",
			pageTitle: "List options",
			breadcrumb: [
				{
					text: "Options",
				},
				{
					text: "List options",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *---------------------- Roles ---------------------*
	// *===============================================---*
	{
		path: "/roles",
		name: "app-roles",
		component: () => import("@/views/role/roles-list/RolesList.vue"),
		meta: {
			resource: "roles",
			action: "manage",
			pageTitle: "List roles",
			breadcrumb: [
				{
					text: "Roles",
				},
				{
					text: "List roles",
					active: true,
				},
			],
		},
	},
	{
		path: "/roles/edit/:id",
		name: "edit-role",
		component: () => import("@/views/role/roles-edit/RolesEdit.vue"),
		meta: {
			resource: "roles",
			action: "manage",
			pageTitle: "Edit role",
			breadcrumb: [
				{
					text: "Roles",
				},
				{
					text: "Edit role",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *------------------- Moderators -------------------*
	// *===============================================---*
	{
		path: "/moderators",
		name: "app-moderators",
		component: () => import("@/views/moderator/moderators-list/ModeratorsList.vue"),
		meta: {
			resource: "moderator",
			action: "read",
			pageTitle: "List moderators",
			breadcrumb: [
				{
					text: "Moderators",
				},
				{
					text: "List moderators",
					active: true,
				},
			],
		},
	},
	{
		path: "/moderators/edit/:id",
		name: "edit-moderator",
		component: () => import("@/views/moderator/moderators-edit/ModeratorsEdit.vue"),
		meta: {
			resource: "moderator",
			action: "update",
			pageTitle: "Edit moderator",
			breadcrumb: [
				{
					text: "Moderators",
				},
				{
					text: "Edit moderator",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *------------------- Members ------------------*
	// *===============================================---*
	{
		path: "/members",
		name: "all-members",
		component: () => import("@/views/member/members-list/MembersList.vue"),
		meta: {
			resource: "member",
			action: "read",
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
			resource: "member",
			action: "read",
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
			resource: "member",
			action: "read",
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
			resource: "member",
			action: "read",
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
			resource: "member",
			action: "read",
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
			resource: "member",
			action: "create",
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
			resource: "member",
			action: "read",
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
			resource: "member",
			action: "update",
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
	// *------------------- Invoices ------------------*
	// *===============================================---*
	{
		path: "/invoices",
		name: "list-invoices",
		component: () => import("@/views/invoice/invoice-list/InvoiceList.vue"),
		meta: {
			resource: "member",
			action: "read",
			pageTitle: "Members invoices",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Invoices",
					active: true,
				},
			],
		},
	},
	{
		path: "/invoices/:id",
		name: "show-invoice",
		component: () => import("@/views/invoice/invoice-preview/InvoicePreview.vue"),
		meta: {
			resource: "member",
			action: "read",
			pageTitle: "Members invoices",
			breadcrumb: [
				{
					text: "Members",
				},
				{
					text: "Invoice data",
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
			resource: "subscriber",
			action: "read",
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
			resource: "subscriber",
			action: "read",
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
			resource: "subscriber",
			action: "read",
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
			resource: "subscriber",
			action: "update",
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
	// *------------------- Volunteers ------------------*
	// *===============================================---*
	{
		path: "/volunteers/active",
		name: "active-volunteers",
		component: () => import("@/views/volunteer/volunteers-list/VolunteersList.vue"),
		meta: {
			resource: "volunteer",
			action: "read",
			pageTitle: "List volunteers",
			breadcrumb: [
				{
					text: "Volunteers",
				},
				{
					text: "List volunteers",
					active: true,
				},
			],
		},
	},
	{
		path: "/volunteers/inactive",
		name: "inactive-volunteers",
		component: () => import("@/views/volunteer/volunteers-list/VolunteersList.vue"),
		meta: {
			resource: "volunteer",
			action: "read",
			pageTitle: "List volunteers",
			breadcrumb: [
				{
					text: "Volunteers",
				},
				{
					text: "List volunteers",
					active: true,
				},
			],
		},
	},
	{
		path: "/volunteers/:id",
		name: "show-volunteer",
		component: () => import("@/views/volunteer/volunteers-view/VolunteersView.vue"),
		meta: {
			resource: "volunteer",
			action: "read",
			pageTitle: "Show volunteer",
			breadcrumb: [
				{
					text: "Volunteers",
				},
				{
					text: "Show volunteer",
					active: true,
				},
			],
		},
	},
	{
		path: "/volunteers/edit/:id",
		name: "edit-volunteer",
		component: () => import("@/views/volunteer/volunteers-edit/VolunteersEdit.vue"),
		meta: {
			resource: "volunteer",
			action: "update",
			pageTitle: "Edit volunteer",
			breadcrumb: [
				{
					text: "Volunteers",
				},
				{
					text: "Edit volunteer",
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
			resource: "course",
			action: "read",
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
			resource: "course",
			action: "update",
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
			resource: "course",
			action: "create",
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
		path: "/courses/:id(\\d+)",
		name: "show-course",
		component: () => import("@/views/courses/courses/courses-view/CoursesView.vue"),
		meta: {
			resource: "course",
			action: "read",
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
			resource: "namings",
			action: "manage",
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
			resource: "namings",
			action: "manage",
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
			resource: "template",
			action: "read",
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
			resource: "template",
			action: "update",
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
	// *-------------- Courses Questionnaires ------------*
	// *===============================================---*
	{
		path: "/courses/questionnaires",
		name: "courses-questionnaires",
		component: () => import("@/views/courses/questionnaires/questionnaires-list/QuestionnairesList.vue"),
		meta: {
			resource: "questionnaire",
			action: "read",
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
			resource: "questionnaire",
			action: "update",
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

	{
		path: "/courses/questions/edit/:id",
		name: "edit-question",
		component: () => import("@/views/courses/questionnaires/questionnaires-edit/questions/QuestionEdit.vue"),
		meta: {
			resource: "questionnaire",
			action: "update",
			pageTitle: "Edit question",
			breadcrumb: [
				{
					text: "Courses",
				},
				{
					text: "Questionnaires",
				},
				{
					text: "Edit question",
					active: true,
				},
			],
		},
	},

	// *===============================================---*
	// *--------------- Technical Support ----------------*
	// *===============================================---*
	{
		path: "/support/members",
		name: "support-members",
		component: () => import("@/views/technical_support/Chat.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "chat-application",
		},
	},
	{
		path: "/support/subscribers",
		name: "support-subscribers",
		component: () => import("@/views/technical_support/Chat.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "chat-application",
		},
	},
	{
		path: "/support/volunteers",
		name: "support-volunteers",
		component: () => import("@/views/technical_support/Chat.vue"),
		meta: {
			contentRenderer: "sidebar-left",
			contentClass: "chat-application",
		},
	},
	// *===============================================---*
	// *--------------------- Studio ---------------------*
	// *===============================================---*
	{
		path: "/studio",
		name: "studio",
		component: () => import("@/views/studio/StudioList.vue"),
		meta: {
			pageTitle: "Studio",
		},
	},
	// *===============================================---*
	// *---------------- Site management -----------------*
	// *===============================================---*
	// Pages
	{
		path: "/management/pages",
		name: "site-pages",
		component: () => import("@/views/site_pages/PagesList.vue"),
		meta: {
			pageTitle: "List pages",
			breadcrumb: [
				{
					text: "Pages",
				},
				{
					text: "List pages",
					active: true,
				},
			],
		},
	},
	{
		path: "/management/pages/create",
		name: "create-page",
		component: () => import("@/views/site_pages/PagesForm.vue"),
		meta: {
			pageTitle: "Create page",
			breadcrumb: [
				{
					text: "Pages",
				},
				{
					text: "Create page",
					active: true,
				},
			],
		},
	},
	{
		path: "/management/pages/edit/:id",
		name: "edit-page",
		component: () => import("@/views/site_pages/PagesForm.vue"),
		meta: {
			pageTitle: "Edit page",
			breadcrumb: [
				{
					text: "Pages",
				},
				{
					text: "Edit page",
					active: true,
				},
			],
		},
	},
	// Blog Posts
	{
		path: "/management/posts",
		name: "blog-posts",
		component: () => import("@/views/blog_posts/PostsList.vue"),
		meta: {
			pageTitle: "List posts",
			breadcrumb: [
				{
					text: "Posts",
				},
				{
					text: "List posts",
					active: true,
				},
			],
		},
	},
	{
		path: "/management/posts/create",
		name: "create-post",
		component: () => import("@/views/blog_posts/PostsForm.vue"),
		meta: {
			pageTitle: "Create post",
			breadcrumb: [
				{
					text: "Posts",
				},
				{
					text: "Create post",
					active: true,
				},
			],
		},
	},
	{
		path: "/management/posts/edit/:id",
		name: "edit-post",
		component: () => import("@/views/blog_posts/PostsForm.vue"),
		meta: {
			pageTitle: "Edit post",
			breadcrumb: [
				{
					text: "Posts",
				},
				{
					text: "Edit post",
					active: true,
				},
			],
		},
	},
	// Menus
	{
		path: "/management/menus",
		name: "site-menus",
		component: () => import("@/views/menus/MenusList.vue"),
		meta: {
			pageTitle: "List menus",
			breadcrumb: [
				{
					text: "Menus",
				},
				{
					text: "List menus",
					active: true,
				},
			],
		},
	},
	// Blog Categories
	{
		path: "/management/categories",
		name: "blog-categories",
		component: () => import("@/views/blog_categories/CategoriesList.vue"),
		meta: {
			pageTitle: "List categories",
			breadcrumb: [
				{
					text: "Categories",
				},
				{
					text: "List categories",
					active: true,
				},
			],
		},
	},
]
