<template>
	<b-nav-item-dropdown id="dropdown-grouped" variant="link" class="dropdown-language" right>
		<template #button-content>
			<b-img :src="currentLocale.img" height="14px" width="22px" :alt="currentLocale.locale" />
			<span class="ml-50 text-body">{{ currentLocale.name }}</span>
		</template>
		<b-dropdown-item v-for="localeObj in locales" :key="localeObj.locale" @click="changeLocale(localeObj.locale)">
			<b-img :src="localeObj.img" height="14px" width="22px" :alt="localeObj.locale" />
			<span class="ml-50">{{ localeObj.name }}</span>
		</b-dropdown-item>
	</b-nav-item-dropdown>
</template>

<script>
	import i18n from "@/libs/i18n"
	import { BNavItemDropdown, BDropdownItem, BImg } from "bootstrap-vue"
	import useAppConfig from "@core/app-config/useAppConfig"

	export default {
		components: {
			BNavItemDropdown,
			BDropdownItem,
			BImg,
		},
		// ! Need to move this computed property to comp function once we get to Vue 3
		computed: {
			currentLocale() {
				return this.locales.find((l) => l.locale === this.$i18n.locale)
			},
		},
		setup() {
			/* eslint-disable global-require */
			const locales = [
				{
					locale: "en",
					img: require("@/assets/images/flags/en.png"),
					name: "English",
				},
				{
					locale: "ar",
					img: require("@/assets/images/flags/ar.png"),
					name: "العربية",
				},
			]
			/* eslint-disable global-require */

			const changeLocale = (locale) => {
				localStorage.setItem("locale", locale)
				i18n.locale = locale
				// Change rtl to left and right
				const { configRTL } = useAppConfig()
				configRTL.value = locale === "ar"
			}

			return {
				locales,
				changeLocale,
			}
		},
	}
</script>

<style></style>
