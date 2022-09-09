import i18n from "@/libs/i18n";
import axios from "axios";

export const LocaizingDBvalues = {
	methods: {
		dblocalize(obj, col) {
			return obj[`${col}_${i18n.locale}`];
		},
	},
};
