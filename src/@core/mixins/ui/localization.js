import i18n from "@/libs/i18n"

export const LocaizingDBvalues = {
	methods: {
		dblocalize(obj, col) {
			// Localize only one param
			if (obj && !col) return `${obj}_${i18n.locale}`

			if (obj) {
				if (i18n.locale === "ar" && !obj.hasOwnProperty(`${col}_${i18n.locale}`)) {
					return obj[`${col}`]
				} else if (i18n.locale === "en" && !obj.hasOwnProperty(`${col}_${i18n.locale}`)) {
					return obj[`${col}_ar`] ? obj[`${col}_ar`] : obj[`${col}`]
				}
				return obj[`${col}_${i18n.locale}`]
			}

			return ""
		},
	},
}
