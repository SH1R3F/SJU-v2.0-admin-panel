/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/

// Site dashboard => Analytics
import dashboard from "./dashboard"

// Site settings, Roles, and Moderators
import settingsAndRoles from "./settings-and-roles"

// Members, Subs, Volunteers
import allUserTypes from "./members-subs-volunteers"

// Courses, Templates, And Questionnaires
import courses from "./courses"

// Site management: Site options, menus, pages, news, ads
import SiteManagement from "./site-management"

// Upload Center
import UploadCenter from "./upload-center"

// Technical support
import TechnicalSupport from "./technical-support"

// Studio
import Studio from "./studio"

// Array of sections
export default [
	...dashboard,
	...settingsAndRoles,
	...allUserTypes,
	...courses,
	...SiteManagement,
	// ...UploadCenter,
	...TechnicalSupport,
	...Studio,
]
