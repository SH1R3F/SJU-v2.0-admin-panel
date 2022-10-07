/* eslint-disable */

import i18n from "@/libs/i18n"

// prettier-ignore
export default {
	pages: {
		key: "title",
		data: [
			// Site Settings
			{ title: i18n.t("Site Options"), icon: "SettingsIcon", route: { name: "site-options" }, isBookmarked: false },
			{ title: i18n.t("Roles & Permissions"), icon: "SettingsIcon", route: { name: "app-roles" }, isBookmarked: false },
			{ title: i18n.t("Moderators"), icon: "SettingsIcon", route: { name: "app-moderators" }, isBookmarked: false },

			// Members
			{ title: i18n.t("All members"), icon: "UsersIcon", route: { name: "all-members" }, isBookmarked: false },
			{ title: i18n.t("Subscribers"), icon: "UserPlusIcon", route: { name: "active-subscribers" }, isBookmarked: false },
			{ title: i18n.t("Volunteers"), icon: "UserCheckIcon", route: { name: "active-volunteers" }, isBookmarked: false },
			{ title: i18n.t("Volunteers"), icon: "UserCheckIcon", route: { name: "active-volunteers" }, isBookmarked: false },

			// Courses
			{ title: i18n.t("All courses"), icon: "BookOpenIcon", route: { name: "app-courses" }, isBookmarked: false },
			{ title: i18n.t("Templates"), icon: "BookOpenIcon", route: { name: "courses-templates" }, isBookmarked: false },
			{ title: i18n.t("Questionnaires"), icon: "BookOpenIcon", route: { name: "courses-questionnaires" }, isBookmarked: false },

			// Courses
			{ title: i18n.t("News categories"), icon: "ToolIcon", route: { name: "blog-categories" }, isBookmarked: false },
			{ title: i18n.t("Menus"), icon: "ToolIcon", route: { name: "site-menus" }, isBookmarked: false },
			{ title: i18n.t("Pages"), icon: "ToolIcon", route: { name: "site-pages" }, isBookmarked: false },
			{ title: i18n.t("Blog posts"), icon: "ToolIcon", route: { name: "blog-posts" }, isBookmarked: false },

			// Technical support
			{ title: `${i18n.t("Technical support")} (${i18n.t("Members")})`, icon: "HeadphonesIcon", route: { name: "support-members" }, isBookmarked: false },
			{ title: `${i18n.t("Technical support")} (${i18n.t("Subscribers")})`, icon: "HeadphonesIcon", route: { name: "support-subscribers" }, isBookmarked: false },
			{ title: `${i18n.t("Technical support")} (${i18n.t("Volunteers")})`, icon: "HeadphonesIcon", route: { name: "support-volunteers" }, isBookmarked: false },

			// Studio
			{ title: i18n.t("Studio"), icon: "ApertureIcon", route: { name: "studio" }, isBookmarked: false },
		],
	},
	// files: {
	// 	key: "file_name",
	// 	data: [
	// 		{
	// 			file_name: "Joe's CV",
	// 			from: "Stacy Watson",
	// 			icon: require("@/assets/images/icons/doc.png"),
	// 			size: "1.7 mb",
	// 		},
	// 		{
	// 			file_name: "Passport Image",
	// 			from: "Ben Sinitiere",
	// 			icon: require("@/assets/images/icons/jpg.png"),
	// 			size: " 52 kb",
	// 		},
	// 		{
	// 			file_name: "Questions",
	// 			from: "Charleen Patti",
	// 			icon: require("@/assets/images/icons/doc.png"),
	// 			size: "1.5 gb",
	// 		},
	// 		{
	// 			file_name: "Parenting Guide",
	// 			from: "Doyle Blatteau",
	// 			icon: require("@/assets/images/icons/doc.png"),
	// 			size: "2.3 mb",
	// 		},
	// 		{
	// 			file_name: "Class Notes",
	// 			from: "Gwen Greenlow",
	// 			icon: require("@/assets/images/icons/doc.png"),
	// 			size: " 30 kb",
	// 		},
	// 		{
	// 			file_name: "Class Attendance",
	// 			from: "Tom Alred",
	// 			icon: require("@/assets/images/icons/xls.png"),
	// 			size: "52 mb",
	// 		},
	// 		{
	// 			file_name: "Company Salary",
	// 			from: "Nellie Dezan",
	// 			icon: require("@/assets/images/icons/xls.png"),
	// 			size: "29 mb",
	// 		},
	// 		{
	// 			file_name: "Company Logo",
	// 			from: "Steve Sheldon",
	// 			icon: require("@/assets/images/icons/jpg.png"),
	// 			size: "1.3 mb",
	// 		},
	// 		{
	// 			file_name: "Crime Rates",
	// 			from: "Sherlock Holmes",
	// 			icon: require("@/assets/images/icons/xls.png"),
	// 			size: "37 kb",
	// 		},
	// 		{
	// 			file_name: "Ulysses",
	// 			from: "Theresia Wrenne",
	// 			icon: require("@/assets/images/icons/pdf.png"),
	// 			size: "7.2 mb",
	// 		},
	// 		{
	// 			file_name: "War and Peace",
	// 			from: "Goldie Highnote",
	// 			icon: require("@/assets/images/icons/pdf.png"),
	// 			size: "10.5 mb",
	// 		},
	// 		{
	// 			file_name: "Vedas",
	// 			from: "Ajay Patel",
	// 			icon: require("@/assets/images/icons/pdf.png"),
	// 			size: "8.3 mb",
	// 		},
	// 		{
	// 			file_name: "The Trial",
	// 			from: "Sirena Linkert",
	// 			icon: require("@/assets/images/icons/pdf.png"),
	// 			size: "1.5 mb",
	// 		},
	// 	],
	// },
	// contacts: {
	// 	key: "name",
	// 	data: [
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-4.jpg"),
	// 			name: "Rena Brant",
	// 			email: "nephrod@preany.co.uk",
	// 			time: "21/05/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-2.jpg"),
	// 			name: "Mariano Packard",
	// 			email: "seek@sparaxis.org",
	// 			time: "14/01/2018",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-24.jpg"),
	// 			name: "Risa Montufar",
	// 			email: "vagary@unblist.org",
	// 			time: "10/08/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-15.jpg"),
	// 			name: "Maragaret Cimo",
	// 			email: "designed@insanely.net",
	// 			time: "01/12/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-7.jpg"),
	// 			name: "Jona Prattis",
	// 			email: "unwieldable@unblist.org",
	// 			time: "21/05/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-5.jpg"),
	// 			name: "Edmond Chicon",
	// 			email: "museist@anaphyte.co.uk",
	// 			time: "15/11/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-25.jpg"),
	// 			name: "Abbey Darden",
	// 			email: "astema@defectively.co.uk",
	// 			time: "07/05/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-10.jpg"),
	// 			name: "Seema Moallankamp",
	// 			email: "fernando@storkish.co.uk",
	// 			time: "13/08/2017",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-2.jpg"),
	// 			name: "Charleen Warmington",
	// 			email: "furphy@cannibal.net",
	// 			time: "11/08/1891",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-25.jpg"),
	// 			name: "Geri Linch",
	// 			email: "insignia@markab.org",
	// 			time: "18/01/2015",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-23.jpg"),
	// 			name: "Shellie Muster",
	// 			email: "maxillary@equalize.co.uk",
	// 			time: "26/07/2019",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-20.jpg"),
	// 			name: "Jesenia Vanbramer",
	// 			email: "hypotony@phonetist.net",
	// 			time: "12/09/2017",
	// 		},
	// 		{
	// 			img: require("@/assets/images/portrait/small/avatar-s-23.jpg"),
	// 			name: "Mardell Channey",
	// 			email: "peseta@myrica.com",
	// 			time: "11/11/2019",
	// 		},
	// 	],
	// },
}
/* eslint-enable */
