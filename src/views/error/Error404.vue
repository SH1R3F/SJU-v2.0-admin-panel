<template>
	<!-- Error page-->
	<div class="misc-wrapper">
		<b-link class="brand-logo">
			<sju-logo />
			<h2 class="brand-text text-primary ml-1">Vuexy</h2>
		</b-link>

		<div class="misc-inner p-2 p-sm-3">
			<div class="w-100 text-center">
				<h2 class="mb-1">{{ $t("Page Not Found") }} 🕵🏻‍♀️</h2>
				<p class="mb-2">{{ $t("Oops") }}! 😖 {{ $t("The requested URL was not found on this server") }}.</p>

				<b-button variant="primary" class="mb-2 btn-sm-block" :to="{ path: '/' }"> {{ $t("Back to home") }} </b-button>

				<!-- image -->
				<b-img fluid :src="imgUrl" alt="Error page" />
			</div>
		</div>
	</div>
	<!-- / Error page-->
</template>

<script>
	/* eslint-disable global-require */
	import { BLink, BButton, BImg } from "bootstrap-vue";
	import SjuLogo from "@core/layouts/components/SjuLogo.vue";
	import store from "@/store/index";

	export default {
		components: {
			SjuLogo,
			BLink,
			BButton,
			BImg,
		},
		data() {
			return {
				downImg: require("@/assets/images/pages/error.svg"),
			};
		},
		computed: {
			imgUrl() {
				if (store.state.appConfig.layout.skin === "dark") {
					// eslint-disable-next-line vue/no-side-effects-in-computed-properties
					this.downImg = require("@/assets/images/pages/error-dark.svg");
					return this.downImg;
				}
				return this.downImg;
			},
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/pages/page-misc.scss";
</style>
