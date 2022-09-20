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
					<label>{{ $t("Course Number") }}</label>
					<b-form-input id="sn" :value="snFilter" class="w-100" @input="(val) => $emit('update:snFilter', val)" />
				</b-col>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Name") }}</label>
					<b-form-input id="name" :value="nameFilter" class="w-100" @input="(val) => $emit('update:nameFilter', val)" />
				</b-col>
				<b-col cols="12" md="4" class="mb-md-0 mb-2">
					<label>{{ $t("Region") }}</label>
					<b-form-input id="region" :value="regionFilter" class="w-100" @input="(val) => $emit('update:regionFilter', val)" />
				</b-col>
			</b-row>
			<div class="mt-2">
				<h6>{{ $t("Date") }}</h6>
				<b-row>
					<b-col cols="12" md="4" class="mb-md-0 mb-2">
						<label>{{ $t("Day") }}</label>
						<b-form-input type="number" id="day" :value="dayFilter" class="w-100" @input="(val) => $emit('update:dayFilter', val)" />
					</b-col>
					<b-col cols="12" md="4" class="mb-md-0 mb-2">
						<label>{{ $t("Month") }}</label>
						<b-form-input type="number" id="month" :value="monthFilter" class="w-100" @input="(val) => $emit('update:monthFilter', val)" />
					</b-col>
					<b-col cols="12" md="4" class="mb-md-0 mb-2">
						<label>{{ $t("Year") }}</label>
						<b-form-input type="number" id="year" :value="yearFilter" class="w-100" @input="(val) => $emit('update:yearFilter', val)" />
					</b-col>
				</b-row>
			</div>
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
			nameFilter: {
				type: [String, null],
				default: null,
			},
			snFilter: {
				type: [String, null],
				default: null,
			},
			regionFilter: {
				type: [String, null],
				default: null,
			},
			dayFilter: {
				type: [String, null],
				default: null,
			},
			monthFilter: {
				type: [String, null],
				default: null,
			},
			yearFilter: {
				type: [String, null],
				default: null,
			},
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
