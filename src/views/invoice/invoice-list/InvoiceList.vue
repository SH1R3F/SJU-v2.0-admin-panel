<template>
	<!-- Table Container Card -->
	<b-card no-body title="User Timeline">
		<div class="m-2">
			<!-- Table Top -->
			<b-row>
				<!-- Per Page -->
				<b-col cols="12" md="6" class="d-flex align-items-center justify-content-between mb-1 mb-md-0">
					<div>
						<label>{{ $t("Show") }}</label>
						<v-select
							v-model="perPage"
							:dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
							:options="perPageOptions"
							:clearable="false"
							class="per-page-selector d-inline-block mx-50"
						/>
						<label>{{ $t("entries") }}</label>
					</div>
					<b-button variant="primary" size="sm" @click="exportData">
						<span class="text-nowrap">{{ $t("Export") }}</span>
					</b-button>
				</b-col>

				<!-- Search -->
				<b-col cols="12" md="6">
					<div class="d-flex align-items-center justify-content-end">
						<b-form-input v-model="searchQuery" class="d-inline-block mr-1" :placeholder="$t('Search')" />
					</div>
				</b-col>
			</b-row>
		</div>

		<b-table
			ref="refInvoiceListTable"
			:items="fetchInvoices"
			responsive
			:fields="tableColumns"
			primary-key="id"
			:sort-by.sync="sortBy"
			show-empty
			empty-text="No matching records found"
			:sort-desc.sync="isSortDirDesc"
			class="position-relative"
		>
			<template #head(invoiceStatus)>
				<feather-icon icon="TrendingUpIcon" class="mx-auto" />
			</template>

			<!-- Column: # -->
			<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

			<!-- Column: Client -->
			<template #cell(member)="data">
				<b-media vertical-align="center">
					<template #aside>
						<b-avatar
							size="32"
							:src="data.item.member.avatar"
							:text="avatarText(data.item.member.fullName)"
							variant="light-success"
						/>
					</template>
					<router-link
						class="font-weight-bold d-block text-nowrap"
						:to="{ name: 'show-member', params: { id: data.item.member.id } }"
					>
						{{ data.item.member.fullName }}
					</router-link>
					<small class="text-muted">{{ data.item.member.email }}</small>
				</b-media>
			</template>

			<!-- Column: Balance -->
			<template #cell(status)="data">
				<b-badge pill :variant="data.item.status === 'مدفوعة' ? 'light-success' : 'light-danger'">
					{{ data.item.status }}
				</b-badge>
			</template>

			<!-- Column: Actions -->
			<template #cell(actions)="data">
				<div class="text-nowrap">
					<b-tooltip
						title="Send Invoice"
						class="cursor-pointer"
						:target="`invoice-row-${data.item.id}-send-icon`"
					/>

					<feather-icon
						:id="`invoice-row-${data.item.id}-preview-icon`"
						icon="EyeIcon"
						size="16"
						class="mx-1"
						@click="$router.push({ name: 'show-invoice', params: { id: data.item.id } })"
					/>
					<b-tooltip :title="$t('Preview Invoice')" :target="`invoice-row-${data.item.id}-preview-icon`" />
				</div>
			</template>
		</b-table>
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
				<b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
					<b-pagination
						v-model="currentPage"
						:total-rows="totalInvoices"
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
	</b-card>
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
		BTooltip,
	} from "bootstrap-vue"
	import { avatarText } from "@core/utils/filter"
	import vSelect from "vue-select"
	import { onUnmounted } from "@vue/composition-api"
	import store from "@/store"
	import useInvoicesList from "./useInvoiceList"

	import invoiceStoreModule from "../invoiceStoreModule"

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
			BTooltip,

			vSelect,
		},
		setup() {
			const INVOICE_APP_STORE_MODULE_NAME = "app-invoice"

			// Register module
			if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME))
				store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME))
					store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
			})

			const statusOptions = ["Downloaded", "Draft", "Paid", "Partial Payment", "Past Due"]

			const {
				fetchInvoices,
				tableColumns,
				perPage,
				currentPage,
				totalInvoices,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refInvoiceListTable,

				statusFilter,

				refetchData,
				exportData,

				resolveInvoiceStatusVariantAndIcon,
				resolveClientAvatarVariant,
			} = useInvoicesList()

			return {
				fetchInvoices,
				tableColumns,
				perPage,
				currentPage,
				totalInvoices,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refInvoiceListTable,

				statusFilter,

				refetchData,
				exportData,

				statusOptions,

				avatarText,
				resolveInvoiceStatusVariantAndIcon,
				resolveClientAvatarVariant,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.per-page-selector {
		width: 90px;
	}

	.invoice-filter-select {
		min-width: 190px;

		::v-deep .vs__selected-options {
			flex-wrap: nowrap;
		}

		::v-deep .vs__selected {
			width: 100px;
		}
	}
</style>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
