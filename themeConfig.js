// Theme Colors

import i18n from "@/libs/i18n"

// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
export const $themeColors = {}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {}

let notRTL = false
if (localStorage.getItem("locale") && localStorage.getItem("locale") === "en") {
	notRTL = true
}

// APP CONFIG
export const $themeConfig = {
	app: {
		appName: i18n.t("Dashboard"), // Will update name in navigation menu (Branding)
		// eslint-disable-next-line global-require
		appLogoImage: require("@/assets/images/logo/site-logo.png"), // Will update logo in navigation menu (Branding)
	},
	layout: {
		isRTL: notRTL,
		skin: "light", // light, dark, bordered, semi-dark
		routerTransition: "zoom-fade", // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
		type: "vertical", // vertical, horizontal
		contentWidth: "full", // full, boxed
		menu: {
			hidden: false,
			isCollapsed: false,
		},
		navbar: {
			// ? For horizontal menu, navbar type will work for navMenu type
			type: "floating", // static , sticky , floating, hidden
			backgroundColor: "", // BS color options [primary, success, etc]
		},
		footer: {
			type: "static", // static, sticky, hidden
		},
		customizer: false,
		enableScrollToTop: true,
	},
}
