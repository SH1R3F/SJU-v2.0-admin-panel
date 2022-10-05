<template>
	<div>
		<studio-list-add-new :studio-type="studioType" :is-add-new-studio-sidebar-active.sync="isAddNewStudioSidebarActive" @refetch-data="refetchData" />

		<b-tabs v-if="true" pills nav-class="studio-tabs" @activate-tab="customizeTabs">
			<!-- Tab: Account -->
			<b-tab active>
				<template #title>
					<feather-icon icon="CameraIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Photos gallery") }}</span>
				</template>
				<studio-items :studio-items="studioItemsData" studio-type="photo" @refetch-data="refetchData" @add-new-item="isAddNewStudioSidebarActive = true" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Information -->
			<b-tab>
				<template #title>
					<feather-icon icon="VideoIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Videos gallery") }}</span>
				</template>
				<studio-items :studio-items="studioItemsData" studio-type="video" @refetch-data="refetchData" @add-new-item="isAddNewStudioSidebarActive = true" class="mt-2 pt-75" />
			</b-tab>

			<b-tab>
				<template #title>
					<b-button variant="primary">{{ $t("Add") }}</b-button>
				</template>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
	import { BTabs, BTab, BButton } from "bootstrap-vue"
	import StudioListAddNew from "./StudioListAddNew.vue"
	import StudioItems from "./StudioItems.vue"
	import { onUnmounted, ref } from "vue-demi"
	import studioStoreModule from "./studioStoreModule"
	import useStudioList from "./useStudioList"
	import store from "@/store"

	export default {
		components: {
			StudioListAddNew,
			StudioItems,

			BTabs,
			BTab,
			BButton,
		},
		setup() {
			const STUDIO_APP_STORE_MODULE_NAME = "app-studio"
			// Register module
			if (!store.hasModule(STUDIO_APP_STORE_MODULE_NAME)) store.registerModule(STUDIO_APP_STORE_MODULE_NAME, studioStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(STUDIO_APP_STORE_MODULE_NAME)) store.unregisterModule(STUDIO_APP_STORE_MODULE_NAME)
			})
			const isAddNewStudioSidebarActive = ref(false)
			const studioType = ref("photo")

			let { fetchStudioItems } = useStudioList(studioType.value)
			const customizeTabs = (newTab, prevTab, e) => {
				switch (newTab) {
					case 0:
						studioType.value = "photo"
						refetchData()
						break
					case 1:
						studioType.value = "video"
						refetchData()
						break
					case 2:
						e.preventDefault()
						isAddNewStudioSidebarActive.value = true
						break
				}
			}

			const studioItemsData = ref([])
			const refetchData = () => {
				fetchStudioItems(studioType.value, (items) => {
					studioItemsData.value = items
				})
			}
			refetchData()

			return {
				// Sidebar
				isAddNewStudioSidebarActive,
				customizeTabs,
				studioType,

				fetchStudioItems,
				studioItemsData,
				refetchData,
			}
		},
	}
</script>

<style lang="scss">
	.studio-tabs.nav-pills > .nav-item:last-of-type {
		margin-inline-start: auto !important;
	}
</style>
