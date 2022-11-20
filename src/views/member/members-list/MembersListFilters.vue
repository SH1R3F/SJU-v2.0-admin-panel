<template>
	<b-card no-body>
		<b-card-header class="pb-50">
			<h5>
				{{ $t("Filters") }}
			</h5>
		</b-card-header>
		<b-card-body>
			<b-row>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Name") }}</label>
					<b-form-input
						id="name"
						:value="nameFilter"
						class="w-100"
						@input="(val) => $emit('update:nameFilter', val)"
					/>
				</b-col>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Mobile") }}</label>
					<b-form-input
						id="mobile"
						:value="mobileFilter"
						class="w-100"
						@input="(val) => $emit('update:mobileFilter', val)"
					/>
				</b-col>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Email") }}</label>
					<b-form-input
						id="email"
						:value="emailFilter"
						class="w-100"
						@input="(val) => $emit('update:emailFilter', val)"
					/>
				</b-col>

				<b-col cols="12" md="6" class="mb-md-0 mb-2">
					<label>{{ $t("National id") }}</label>
					<b-form-input
						id="nationalId"
						:value="nationalIdFilter"
						class="w-100"
						@input="(val) => $emit('update:nationalIdFilter', val)"
					/>
				</b-col>
				<b-col cols="12" md="6" class="mb-md-0 mb-2">
					<label>{{ $t("Membership number") }}</label>
					<b-form-input
						id="membershipNumber"
						:value="membershipNumberFilter"
						class="w-100"
						@input="(val) => $emit('update:membershipNumberFilter', val)"
					/>
				</b-col>

				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Membership type") }}</label>
					<v-select
						id="membershipType"
						:value="membershipTypeFilter"
						class="w-100"
						@input="(val) => $emit('update:membershipTypeFilter', val)"
						:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
						:options="membershipTypes"
						:reduce="(type) => type.value"
					/>
				</b-col>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("City") }}</label>
					<v-select
						id="city"
						:value="cityFilter"
						class="w-100"
						@input="(val) => $emit('update:cityFilter', val)"
						:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
						:options="cities['Saudi Arabia']"
						:reduce="(city) => city.value"
					/>
				</b-col>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Year") }}</label>
					<b-form-input
						id="year"
						:value="yearFilter"
						class="w-100"
						@input="(val) => $emit('update:yearFilter', val)"
					/>
				</b-col>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script>
	import { BCard, BCardHeader, BFormInput, BCardBody, BRow, BCol } from "bootstrap-vue"
	import vSelect from "vue-select"
	import { $membershipTypes, $cities } from "@siteConfig"

	export default {
		components: {
			BRow,
			BCol,
			BCard,
			BCardHeader,
			BCardBody,
			vSelect,
			BFormInput,
		},
		props: {
			nameFilter: {
				type: [String, null],
				default: null,
			},
			mobileFilter: {
				type: [String, null],
				default: null,
			},
			emailFilter: {
				type: [String, null],
				default: null,
			},

			nationalIdFilter: {
				type: [String, null],
				default: null,
			},
			membershipNumberFilter: {
				type: [String, null],
				default: null,
			},

			membershipTypeFilter: {
				default: null,
			},
			cityFilter: {
				default: null,
			},
			yearFilter: {
				default: null,
			},
		},
		data() {
			return {
				membershipTypes: $membershipTypes,
				cities: $cities,
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
