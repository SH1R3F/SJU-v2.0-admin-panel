<template>
	<b-card no-body>
		<b-card-header class="pb-50">
			<h5>
				{{ $t("Filters") }}
			</h5>
		</b-card-header>
		<b-card-body>
			<b-row>
				<b-col cols="12" md="3" class="mb-md-0 mb-2">
					<label>{{ $t("National id") }}</label>
					<b-form-input id="national-id" :value="nationalIdFilter" class="w-100" @input="(val) => $emit('update:nationalIdFilter', val)" />
				</b-col>
				<b-col cols="12" md="3" class="mb-md-0 mb-2">
					<label>{{ $t("Name") }}</label>
					<b-form-input id="name" :value="nameFilter" class="w-100" @input="(val) => $emit('update:nameFilter', val)" />
				</b-col>
				<b-col cols="12" md="3" class="mb-md-0 mb-2">
					<label>{{ $t("Mobile") }}</label>
					<b-form-input id="mobile" :value="mobileFilter" class="w-100" @input="(val) => $emit('update:mobileFilter', val)" />
				</b-col>
				<b-col cols="12" md="3" class="mb-md-0 mb-2">
					<label>{{ $t("Email") }}</label>
					<b-form-input id="email" :value="emailFilter" class="w-100" @input="(val) => $emit('update:emailFilter', val)" />
				</b-col>
			</b-row>
		</b-card-body>
	</b-card>
</template>

<script>
	import { BCard, BCardHeader, BFormInput, BCardBody, BRow, BCol } from "bootstrap-vue";
	import vSelect from "vue-select";

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
			nationalIdFilter: {
				type: [String, null],
				default: null,
			},
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
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
