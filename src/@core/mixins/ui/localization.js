import i18n from "@/libs/i18n"
import axios from "axios"

export const LocaizingDBvalues = {
	methods: {
		dblocalize(obj, col) {
			if (i18n.locale === "ar" && !obj.hasOwnProperty(`${col}_${i18n.locale}`)) {
				return obj[`${col}`]
			}
			return obj[`${col}_${i18n.locale}`]
		},
	},
}
