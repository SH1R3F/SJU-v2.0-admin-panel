<template>
	<div class="mb-2">
		<!-- Table Container Card -->
		<b-card class="mb-0">
			<!-- Header of table -->
			<div class="m-2">
				<!-- Table Top -->
				<b-row>
					<!-- Per Page -->
					<b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
						<label>{{ $t("Show") }}</label>
						<v-select v-model="perPage" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="perPageOptions" :clearable="false" class="per-page-selector d-inline-block mx-50" />
						<label>{{ $t("entries") }}</label>
					</b-col>

					<!-- Search -->
					<b-col cols="12" md="6">
						<div class="d-flex align-items-center justify-content-end">
							<b-form-input v-model="searchQuery" class="d-inline-block mr-1" :placeholder="$t('Search')" />

							<!-- Add new -->
							<b-button variant="primary" :to="{ name: 'create-page' }">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refPageListTable" class="position-relative" :fields="tableColumns" :items="fetchPages" responsive primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('No matching records found')" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Title -->
				<template #cell(title)="data">
					{{ dblocalize(data.item, "title") }}
				</template>

				<!-- Column: Content -->
				<template #cell(slug)="data">
					{{ data.item.slug }}
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-button :title="$t('Edit')" :to="{ name: 'edit-page', params: { id: data.item.id } }" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info" class="btn-icon ml-1" size="sm">
						<feather-icon icon="EditIcon" />
					</b-button>

					<b-button :title="$t('Delete')" v-b-modal.modal-danger @click="toBeDeletedId = data.item.id" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon ml-1" size="sm">
						<feather-icon icon="TrashIcon" />
					</b-button>
				</template>
			</b-table>

			<!-- Table footer -->
			<div class="mx-2 mb-2">
				<b-row>
					<b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
						<span class="text-muted">{{ $t("Showing") }} {{ dataMeta.from }} {{ $t("to") }} {{ dataMeta.to }} {{ $t("of") }} {{ dataMeta.of }} {{ $t("entries") }}</span>
					</b-col>
					<!-- Pagination -->
					<b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
						<b-pagination v-model="currentPage" :total-rows="totalPages" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
							<template #prev-text>
								<feather-icon icon="ChevronLeftIcon" size="18" />
							</template>
							<template #next-text>
								<feather-icon icon="ChevronRightIcon" size="18" />
							</template>
						</b-pagination>
					</b-col>
				</b-row>
			</div>
			<!-- Table footer -->
		</b-card>
		<!-- Modal for pages deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deletePage" modal-class="modal-danger" centered :title="$t('Delete page?')">
			<b-card-text>{{ $t("Are you sure you want to delete this page? You won't be able to undo this step and all page data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue"
	import store from "@/store"
	import { ref, onUnmounted } from "@vue/composition-api"
	import usePagesList from "./usePagesList"
	import pageStoreModule from "./pageStoreModule"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"

	export default {
		components: {
			BCard,
			BRow,
			BCol,
			BFormInput,
			BButton,
			BTable,
			BMedia,
			BAvatar,
			BLink,
			BBadge,
			BDropdown,
			BDropdownItem,
			BPagination,
			BCardText,
			Ripple,
			vSelect,
		},
		directives: {
			Ripple,
		},
		setup() {
			const SITE_PAGES_STORE_MODULE_NAME = "site-pages"
			// Register module
			if (!store.hasModule(SITE_PAGES_STORE_MODULE_NAME)) store.registerModule(SITE_PAGES_STORE_MODULE_NAME, pageStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(SITE_PAGES_STORE_MODULE_NAME)) store.unregisterModule(SITE_PAGES_STORE_MODULE_NAME)
			})

			const { tableColumns, fetchPages, perPage, currentPage, totalPages, dataMeta, perPageOptions, searchQuery, sortBy, isSortDirDesc, refPageListTable, refetchData } = usePagesList()

			const toBeDeletedId = ref(null)
			const deletePage = function () {
				store
					.dispatch("site-pages/deletePage", { id: toBeDeletedId.value })
					.then((response) => {
						// Success message and update users
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}

			return {
				fetchPages,
				deletePage,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalPages,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refPageListTable,
				refetchData,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.per-page-selector {
		width: 90px;
	}
</style>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
