import Vue from "vue"
import VueRouter from "vue-router"

// Routes
import { canNavigate } from "@/libs/acl/routeProtection"
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from "@/auth/utils"
import apps from "./routes/apps"
import dashboard from "./routes/dashboard"
import uiElements from "./routes/ui-elements/index"
import pages from "./routes/pages"
import auth from "./routes/auth"
import chartsMaps from "./routes/charts-maps"
import formsTable from "./routes/forms-tables"
import others from "./routes/others"
import i18n from "@/libs/i18n"

Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior() {
		return { x: 0, y: 0 }
	},
	routes: [
		{ path: "/", redirect: { name: "dashboard-analytics" } },
		...apps,
		...dashboard,
		...pages,
		...auth,
		// ...chartsMaps,
		// ...formsTable,
		// ...uiElements,
		...others,
		{
			path: "*",
			redirect: "error-404",
		},
	],
})

router.beforeEach((to, _, next) => {
	const isLoggedIn = isUserLoggedIn()

	if (!canNavigate(to)) {
		// Redirect to login if not logged in
		if (!isLoggedIn) return next({ name: "auth-login" })

		// If logged in => not authorized
		return next({ name: "not-authorized" })
	}

	// Redirect if logged in
	if (to.meta.redirectIfLoggedIn && isLoggedIn) {
		const userData = getUserData()
		next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
	}

	// Page title
	if (to.meta.pageTitle) {
		document.title = i18n.t(to.meta.pageTitle) + " | " + i18n.t(process.env.VUE_APP_SITE_NAME)
	} else {
		document.title = i18n.t(process.env.VUE_APP_SITE_NAME)
	}
	return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {})

export default router
