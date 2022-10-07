<template>
	<div class="mb-2">
		<categories-list-sidebar-form :is-category-sidebar-active.sync="isCategorySidebarActive" :category-item-data="categoryItemData" @refetch-data="refetchData" />

		<!-- Table Container Card -->
		<b-card class="mb-0">
			<!-- Header of table -->
			<div class="m-2">
				<!-- Table Top -->
				<b-row>
					<!-- Search -->
					<b-col cols="12">
						<div class="d-flex justify-content-end">
							<!-- Add new -->
							<b-button variant="primary" @click="newCategoryItem">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>

			<!-- draggable -->
			<draggable v-model="categories" class="list-group list-group-flush cursor-move" tag="ul" @change="orderChanged">
				<transition-group type="transition" name="flip-list">
					<b-list-group-item v-for="categoryItem in categories" :key="categoryItem.id" tag="li" class="d-flex justify-content-between align-items-center">
						<div class="ml-25">
							<b-card-text class="font-weight-bolder mb-0">
								{{ dblocalize(categoryItem, "title") }}
							</b-card-text>
							<small>{{ categoryItem.link }}</small>
						</div>
						<div>
							<b-button :title="$t('Edit')" @click="updateCategoryItem(categoryItem.id)" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info" class="btn-icon ml-1" size="sm">
								<feather-icon icon="EditIcon" />
							</b-button>

							<b-button :title="$t('Delete')" v-b-modal.modal-danger @click="toBeDeletedId = categoryItem.id" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon ml-1" size="sm">
								<feather-icon icon="TrashIcon" />
							</b-button>
						</div>
					</b-list-group-item>
				</transition-group>
			</draggable>
			<!-- Content -->
		</b-card>
		<!-- Modal for categories deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteCategory" modal-class="modal-danger" centered :title="$t('Delete category?')">
			<b-card-text>{{ $t("Are you sure you want to delete this category? You won't be able to undo this step and all category data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BListGroupItem, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue"
	import store from "@/store"
	import { ref, onUnmounted } from "@vue/composition-api"
	import categoryStoreModule from "./categoryStoreModule"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import draggable from "vuedraggable"
	import CategoriesListSidebarForm from "./CategoriesListSidebarForm.vue"

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
			BListGroupItem,
			BLink,
			BBadge,
			BDropdown,
			BDropdownItem,
			BPagination,
			BCardText,
			Ripple,
			vSelect,
			draggable,
			CategoriesListSidebarForm,
		},
		directives: {
			Ripple,
		},
		setup() {
			const BLOG_CATEGORIES_STORE_MODULE_NAME = "blog-categories"
			// Register module
			if (!store.hasModule(BLOG_CATEGORIES_STORE_MODULE_NAME)) store.registerModule(BLOG_CATEGORIES_STORE_MODULE_NAME, categoryStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(BLOG_CATEGORIES_STORE_MODULE_NAME)) store.unregisterModule(BLOG_CATEGORIES_STORE_MODULE_NAME)
			})

			// Fetch categories
			const categories = ref([])
			const fetchData = () => {
				store
					.dispatch("blog-categories/fetchCategories")
					.then((response) => {
						categories.value = response.data.categories
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}
			fetchData()

			const toBeDeletedId = ref(null)
			const deleteCategory = function () {
				store
					.dispatch("blog-categories/deleteCategory", { id: toBeDeletedId.value })
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

			/////////////////////////////
			const isCategorySidebarActive = ref(false)
			const categoryItemData = ref({})
			const updateCategoryItem = (id) => {
				store
					.dispatch("blog-categories/fetchCategory", { id: id })
					.then((response) => {
						isCategorySidebarActive.value = true
						categoryItemData.value = response.data.data
					})
					.catch((error) => {
						if (error.response.status === 404) {
							oldData.value = undefined
							formData.value = undefined
						}
					})
			}
			const newCategoryItem = () => {
				categoryItemData.value = null
				isCategorySidebarActive.value = true
			}

			const refetchData = () => {
				fetchData()
			}

			const orderChanged = function () {
				store
					.dispatch("blog-categories/updateCategoriesOrder", { categories: categories.value })
					.then((response) => {
						// Success message and update users
						this.$bvToast.toast(response.message, {
							variant: "success",
							solid: true,
						})
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
				deleteCategory,
				toBeDeletedId,
				categories,
				refetchData,
				isCategorySidebarActive,
				categoryItemData,
				updateCategoryItem,
				newCategoryItem,
				orderChanged,
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
