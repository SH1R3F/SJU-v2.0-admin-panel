<template>
	<div class="mb-2">
		<templates-list-add-new
			:is-add-new-template-sidebar-active.sync="isAddNewTemplateSidebarActive"
			@refetch-data="refetchData"
		/>

		<!-- Table Container Card -->
		<b-card class="mb-0">
			<!-- Header of table -->
			<div class="m-2">
				<!-- Table Top -->
				<b-row>
					<!-- Per Page -->
					<b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
						<label>{{ $t("Show") }}</label>
						<v-select
							v-model="perPage"
							:dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
							:options="perPageOptions"
							:clearable="false"
							class="per-page-selector d-inline-block mx-50"
						/>
						<label>{{ $t("entries") }}</label>
					</b-col>

					<!-- Search -->
					<b-col cols="12" md="6">
						<div class="d-flex align-items-center justify-content-end">
							<b-form-input
								v-model="searchQuery"
								class="d-inline-block mr-1"
								:placeholder="$t('Search')"
							/>

							<!-- Add new -->
							<b-button variant="primary" @click="isAddNewTemplateSidebarActive = true">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table
				ref="refTemplateListTable"
				class="position-relative"
				:fields="tableColumns"
				:items="fetchTemplates"
				responsive
				primary-key="id"
				:sort-by.sync="sortBy"
				show-empty
				:empty-text="$t('No matching records found')"
				:sort-desc.sync="isSortDirDesc"
			>
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Name -->
				<template #cell(name)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar
								size="32"
								:text="avatarText(data.item.name)"
								variant="light-success"
								:to="{ name: 'edit-template', params: { id: data.item.id } }"
							/>
						</template>
						<b-link
							:to="{ name: 'edit-template', params: { id: data.item.id } }"
							class="font-weight-bold d-block text-nowrap"
						>
							{{ data.item.name }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Language -->
				<template #cell(language)="data">
					{{ $languages.find((language) => language.value == data.item.language)["label"] }}
				</template>

				<!-- Column: Layout -->
				<template #cell(layout)="data">
					{{ $layouts.find((layout) => layout.value == data.item.layout)["label"] }}
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-button
						:title="$t('Edit')"
						:to="{ name: 'edit-template', params: { id: data.item.id } }"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="info"
						class="btn-icon ml-1"
						size="sm"
					>
						<feather-icon icon="EditIcon" />
					</b-button>

					<b-button
						:title="$t('Delete')"
						v-b-modal.modal-danger
						@click="toBeDeletedId = data.item.id"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="danger"
						class="btn-icon mx-1"
						size="sm"
					>
						<feather-icon icon="TrashIcon" />
					</b-button>
				</template>
			</b-table>

			<!-- Table footer -->
			<div class="mx-2 mb-2">
				<b-row>
					<b-col
						cols="12"
						sm="6"
						class="d-flex align-items-center justify-content-center justify-content-sm-start"
					>
						<span class="text-muted"
							>{{ $t("Showing") }} {{ dataMeta.from }} {{ $t("to") }} {{ dataMeta.to }} {{ $t("of") }}
							{{ dataMeta.of }} {{ $t("entries") }}</span
						>
					</b-col>
					<!-- Pagination -->
					<b-col
						cols="12"
						sm="6"
						class="d-flex align-items-center justify-content-center justify-content-sm-end"
					>
						<b-pagination
							v-model="currentPage"
							:total-rows="totalTemplates"
							:per-page="perPage"
							first-number
							last-number
							class="mb-0 mt-1 mt-sm-0"
							prev-class="prev-item"
							next-class="next-item"
						>
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
		<!-- Modal for templates deletion -->
		<b-modal
			id="modal-danger"
			ok-only
			ok-variant="danger"
			:ok-title="$t('Accept')"
			@ok="deleteTemplate"
			modal-class="modal-danger"
			centered
			:title="$t('Delete template?')"
		>
			<b-card-text>{{
				$t(
					"Are you sure you want to delete this template? You won't be able to undo this step and all template data will be delete with no way to retreive."
				)
			}}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import {
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
	} from "bootstrap-vue"
	import vSelect from "vue-select"
	import store from "@/store"
	import { ref, onUnmounted } from "@vue/composition-api"
	import { avatarText } from "@core/utils/filter"
	import TemplatesListAddNew from "./TemplatesListAddNew.vue"
	import useTemplatesList from "./useTemplatesList"
	import templateStoreModule from "../templateStoreModule"
	import { $languages, $layouts } from "@siteConfig"
	import Ripple from "vue-ripple-directive"

	export default {
		components: {
			TemplatesListAddNew,

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
			vSelect,
			BCardText,
			Ripple,
		},
		directives: {
			Ripple,
		},
		setup() {
			const COURSE_TEMPLATE_STORE_MODULE_NAME = "course-template"

			// Register module
			if (!store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME))
				store.registerModule(COURSE_TEMPLATE_STORE_MODULE_NAME, templateStoreModule)

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME))
					store.unregisterModule(COURSE_TEMPLATE_STORE_MODULE_NAME)
			})

			const isAddNewTemplateSidebarActive = ref(false)

			const {
				tableColumns,
				fetchTemplates,
				perPage,
				currentPage,
				totalTemplates,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refTemplateListTable,
				refetchData,
			} = useTemplatesList()

			const toBeDeletedId = ref(null)
			const deleteTemplate = function () {
				store
					.dispatch("course-template/deleteTemplate", { id: toBeDeletedId.value })
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
				// Sidebar
				isAddNewTemplateSidebarActive,

				fetchTemplates,
				deleteTemplate,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalTemplates,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refTemplateListTable,
				refetchData,

				// Filter
				avatarText,

				$languages,
				$layouts,
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
