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
							<b-button variant="primary" :to="{ name: 'create-post' }">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refPostListTable" class="position-relative" :fields="tableColumns" :items="fetchPosts" responsive primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('No matching records found')" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Title -->
				<template #cell(title)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar size="32" :src="data.item.photos[0]" :text="avatarText(dblocalize(data.item, 'title').split(' ')[0])" :variant="data.item.avatar ? '' : 'light-success'" :to="{ name: 'edit-post', params: { id: data.item.id } }" />
						</template>
						<b-link :to="{ name: 'edit-post', params: { id: data.item.id } }" class="font-weight-bold d-block text-nowrap">
							{{ dblocalize(data.item, "title") }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Category -->
				<template #cell(category)="data">
					{{ dblocalize(data.item.category, "title") }}
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-button :title="$t('Edit')" :to="{ name: 'edit-post', params: { id: data.item.id } }" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info" class="btn-icon ml-1" size="sm">
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
						<b-pagination v-model="currentPage" :total-rows="totalPosts" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
		<!-- Modal for posts deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deletePost" modal-class="modal-danger" centered :title="$t('Delete post?')">
			<b-card-text>{{ $t("Are you sure you want to delete this post? You won't be able to undo this step and all post data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue"
	import store from "@/store"
	import { ref, onUnmounted } from "@vue/composition-api"
	import usePostsList from "./usePostsList"
	import postStoreModule from "./postStoreModule"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import { avatarText } from "@core/utils/filter"

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
			const BLOG_POSTS_STORE_MODULE_NAME = "blog-posts"
			// Register module
			if (!store.hasModule(BLOG_POSTS_STORE_MODULE_NAME)) store.registerModule(BLOG_POSTS_STORE_MODULE_NAME, postStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(BLOG_POSTS_STORE_MODULE_NAME)) store.unregisterModule(BLOG_POSTS_STORE_MODULE_NAME)
			})

			const { tableColumns, fetchPosts, perPage, currentPage, totalPosts, dataMeta, perPageOptions, searchQuery, sortBy, isSortDirDesc, refPostListTable, refetchData } = usePostsList()

			const toBeDeletedId = ref(null)
			const deletePost = function () {
				store
					.dispatch("blog-posts/deletePost", { id: toBeDeletedId.value })
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
				fetchPosts,
				deletePost,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalPosts,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refPostListTable,
				refetchData,
				avatarText,
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
