<template>
	<div>
		<div :if="siteOptions === undefined">
			<!-- Alert: No item found -->
			<b-alert variant="danger" :show="siteOptions === undefined">
				<h4 class="alert-heading">{{ $t("Error fetching site options data") }}</h4>
				<div class="alert-body">
					{{ $t("Couldn't fetch site options") }}. {{ $t("Go to") }}
					<b-link class="alert-link" :to="{ name: 'dashboard-analytics' }"> {{ $t("Dashboard") }}. </b-link>
				</div>
			</b-alert>
		</div>

		<b-card>
			<b-form @submit.prevent="onSubmit">
				<template v-for="option in siteOptions">
					<h4 class="my-2">{{ $t(`title-${option.key}`) }}</h4>
					<b-row>
						<b-col cols="12" md="12" v-for="(field, i) in option.value" :key="i" class="mt-1">
							<b-form-group :label="$t(field.key)">
								<template v-if="typeof field.value === 'boolean'">
									<v-select :value="field.value" @input="field.value = $event" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="boolOptions" :reduce="(opt) => opt.value" :clearable="false" />
								</template>

								<template v-else-if="[0, 1].includes(field.value)">
									<v-select :value="field.value" @input="field.value = $event" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$serviceProviders" :reduce="(provider) => provider.value" :clearable="false" />
								</template>

								<template v-else>
									<b-form-textarea :value="field.value" @input="field.value = $event" />
								</template>
							</b-form-group>
						</b-col>
					</b-row>

					<hr class="my-2" />
				</template>
				<!-- Action Buttons -->
				<b-button variant="primary" type="submit" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
			</b-form>
		</b-card>
	</div>
</template>

<script>
	import { BForm, BButton, BFormTextarea, BFormInput, BFormInvalidFeedback, BRow, BCol, BFormGroup, BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue"
	import { ref, onUnmounted } from "@vue/composition-api"
	import store from "@/store"
	import siteOptionsStoreModule from "./siteOptionsStoreModule"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import i18n from "@/libs/i18n"
	import vSelect from "vue-select"
	import { $serviceProviders } from "@siteConfig"

	export default {
		components: {
			BForm,
			BButton,
			BFormTextarea,
			BFormInput,
			BFormInvalidFeedback,
			BRow,
			BCol,
			BFormGroup,
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,
			ValidationProvider,
			ValidationObserver,
			vSelect,
		},
		setup() {
			const SITE_OPTIONS_STORE_MODULE_NAME = "site-options"
			// Register module
			if (!store.hasModule(SITE_OPTIONS_STORE_MODULE_NAME)) store.registerModule(SITE_OPTIONS_STORE_MODULE_NAME, siteOptionsStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(SITE_OPTIONS_STORE_MODULE_NAME)) store.unregisterModule(SITE_OPTIONS_STORE_MODULE_NAME)
			})

			const valsHolder = ref([])
			const siteOptions = ref([])

			store
				.dispatch("site-options/fetchSiteOptions")
				.then((response) => {
					siteOptions.value = response.data.options
				})
				.catch((error) => {
					if (error.response.status === 404) {
						siteOptions.value = []
					}
				})

			const onSubmit = function () {
				store
					.dispatch("site-options/updateSiteOptions", { siteOptions: siteOptions.value })
					.then((response) => {
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}

			return {
				siteOptions,
				$serviceProviders,
				boolOptions: [
					{
						label: i18n.t("Yes"),
						value: true,
					},
					{
						label: i18n.t("No"),
						value: false,
					},
				],
				onSubmit,
			}
		},
	}
</script>

<style></style>
