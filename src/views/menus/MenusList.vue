<template>
	<div class="mb-2">
		<menus-list-sidebar-form :is-menu-sidebar-active.sync="isMenuSidebarActive" :menu-item-data="menuItemData" @refetch-data="refetchData" />

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
							<b-button variant="primary" @click="newMenuItem">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>

			<!-- draggable -->
			<draggable v-model="menus" class="list-group list-group-flush cursor-move" tag="ul" @change="orderChanged">
				<transition-group type="transition" name="flip-list">
					<b-list-group-item v-for="menuItem in menus" :key="menuItem.id" tag="li" class="d-flex justify-content-between align-items-center">
						<div class="ml-25">
							<b-card-text class="font-weight-bolder mb-0">
								{{ dblocalize(menuItem, "title") }}
							</b-card-text>
							<small>{{ menuItem.link }}</small>
						</div>
						<div>
							<b-button :title="$t('Edit')" @click="updateMenuItem(menuItem.id)" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info" class="btn-icon ml-1" size="sm">
								<feather-icon icon="EditIcon" />
							</b-button>

							<b-button :title="$t('Delete')" v-b-modal.modal-danger @click="toBeDeletedId = menuItem.id" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon ml-1" size="sm">
								<feather-icon icon="TrashIcon" />
							</b-button>
						</div>
					</b-list-group-item>
				</transition-group>
			</draggable>
			<!-- Content -->
		</b-card>
		<!-- Modal for menus deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteMenu" modal-class="modal-danger" centered :title="$t('Delete menu?')">
			<b-card-text>{{ $t("Are you sure you want to delete this menu? You won't be able to undo this step and all menu data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BListGroupItem, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue"
	import store from "@/store"
	import { ref, onUnmounted } from "@vue/composition-api"
	import menuStoreModule from "./menuStoreModule"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import draggable from "vuedraggable"
	import MenusListSidebarForm from "./MenusListSidebarForm.vue"

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
			MenusListSidebarForm,
		},
		directives: {
			Ripple,
		},
		setup() {
			const SITE_MENUS_STORE_MODULE_NAME = "site-menus"
			// Register module
			if (!store.hasModule(SITE_MENUS_STORE_MODULE_NAME)) store.registerModule(SITE_MENUS_STORE_MODULE_NAME, menuStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(SITE_MENUS_STORE_MODULE_NAME)) store.unregisterModule(SITE_MENUS_STORE_MODULE_NAME)
			})

			// Fetch menus
			const menus = ref([])
			const fetchData = () => {
				store
					.dispatch("site-menus/fetchMenus")
					.then((response) => {
						menus.value = response.data.menus
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
			const deleteMenu = function () {
				store
					.dispatch("site-menus/deleteMenu", { id: toBeDeletedId.value })
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
			const isMenuSidebarActive = ref(false)
			const menuItemData = ref({})
			const updateMenuItem = (id) => {
				store
					.dispatch("site-menus/fetchMenu", { id: id })
					.then((response) => {
						isMenuSidebarActive.value = true
						menuItemData.value = response.data.data
					})
					.catch((error) => {
						if (error.response.status === 404) {
							oldData.value = undefined
							formData.value = undefined
						}
					})
			}
			const newMenuItem = () => {
				menuItemData.value = null
				isMenuSidebarActive.value = true
			}

			const refetchData = () => {
				fetchData()
			}

			const orderChanged = function () {
				store
					.dispatch("site-menus/updateMenusOrder", { menus: menus.value })
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
				deleteMenu,
				toBeDeletedId,
				menus,
				refetchData,
				isMenuSidebarActive,
				menuItemData,
				updateMenuItem,
				newMenuItem,
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
