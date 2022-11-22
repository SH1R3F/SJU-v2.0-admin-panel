<template>
	<section class="invoice-preview-wrapper">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="invoiceData === undefined">
			<h4 class="alert-heading">Error fetching invoice data</h4>
			<div class="alert-body">
				No invoice found with this invoice id. Check
				<b-link class="alert-link" :to="{ name: 'apps-invoice-list' }"> Invoice List </b-link>
				for other invoices.
			</div>
		</b-alert>

		<b-row v-if="invoiceData" class="invoice-preview">
			<!-- Col: Left (Invoice Container) -->
			<b-col cols="12">
				<b-card no-body class="invoice-preview-card">
					<!-- Header -->
					<b-card-body class="invoice-padding pb-0">
						<div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">
							<!-- Header: Left Content -->
							<div>
								<div class="logo-wrapper">
									<logo />
									<h3 class="text-primary invoice-logo">{{ $siteName }}</h3>
								</div>
							</div>

							<!-- Header: Right Content -->
							<div class="mt-md-0 mt-2">
								<h4 class="invoice-title">
									{{ $t("Invoice") }}
									<span class="invoice-number">#{{ invoiceData.invoice_number }}</span>
								</h4>
								<div class="invoice-date-wrapper">
									<p class="invoice-date-title">{{ $t("Creation date") }}:</p>
									<p class="invoice-date">
										{{ new Date(invoiceData.created_at).toDateString() }}
									</p>
								</div>
								<div class="invoice-date-wrapper">
									<p class="invoice-date-title">{{ $t("End date") }}:</p>
									<p class="invoice-date">
										{{ new Date(invoiceData.subscription_data.end_date).toDateString() }}
									</p>
								</div>
							</div>
						</div>
					</b-card-body>

					<!-- Spacer -->
					<hr class="invoice-spacing" />

					<!-- Invoice Client & Payment Details -->
					<b-card-body v-if="invoiceData.member" class="invoice-padding pt-0">
						<b-row class="invoice-spacing">
							<!-- Col: Invoice To -->
							<b-col cols="12" xl="6" class="p-0">
								<h6 class="mb-2">{{ $t("Invoice to") }}:</h6>
								<h6 class="mb-25">
									{{ invoiceData.member.fullName }}
								</h6>
								<p class="card-text mb-25">
									{{ invoiceData.member.mobile }}
								</p>
								<p class="card-text mb-25">
									{{ invoiceData.member.national_id }}
								</p>
								<p class="card-text mb-0">
									{{ invoiceData.member.email }}
								</p>
							</b-col>

							<!-- Col: Payment Details -->
							<b-col xl="6" cols="12" class="p-0 mt-xl-0 mt-2 d-flex justify-content-xl-end">
								<div>
									<h6 class="mb-2">{{ $t("Payment Details") }}:</h6>
									<table>
										<tbody>
											<tr>
												<td class="pr-1">{{ $t("Status") }}:</td>
												<td>
													<span class="font-weight-bold">{{ invoiceData.status }}</span>
												</td>
											</tr>
											<tr>
												<td class="pr-1">{{ $t("Amount") }}:</td>
												<td>
													<span class="font-weight-bold">{{ invoiceData.amount }}</span>
												</td>
											</tr>
											<tr>
												<td class="pr-1">{{ $t("Payment method") }}:</td>
												<td>{{ invoiceData.payment_method }}</td>
											</tr>
											<tr>
												<td class="pr-1">{{ $t("payment ID") }}:</td>
												<td>{{ invoiceData.order_ref }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</b-col>
						</b-row>
					</b-card-body>

					<!-- Invoice Description: Table -->
					<b-table-lite
						responsive
						:items="[
							{
								paidFor: $membershipTypes.find((t) => t.value == invoiceData.subscription_data.type)
									.label,
								amount: $membershipTypes.find((t) => t.value == invoiceData.subscription_data.type)
									.price,
							},
						]"
						:fields="['paidFor', 'amount']"
						v-if="invoiceData.status === 'مدفوعة'"
					>
					</b-table-lite>

					<!-- Invoice Description: Total -->
					<b-card-body class="invoice-padding pb-3" v-if="invoiceData.status === 'مدفوعة'">
						<b-row>
							<!-- Col: Total -->
							<b-col cols="12" class="mt-md-6 d-flex justify-content-end" order="1" order-md="2">
								<div class="invoice-total-wrapper">
									<div class="invoice-total-item">
										<p class="invoice-total-title">{{ $t("Subtotal") }}:</p>
										<p class="invoice-total-amount">
											{{
												$membershipTypes.find(
													(t) => t.value == invoiceData.subscription_data.type
												).price
											}}
										</p>
									</div>
									<div class="invoice-total-item">
										<p class="invoice-total-title">{{ $t("Delivery fees") }}:</p>
										<p class="invoice-total-amount">
											{{ invoiceData.member.delivery_method == 2 ? 30 : 0 }}
										</p>
									</div>
									<hr class="my-50" />
									<div class="invoice-total-item">
										<p class="invoice-total-title">{{ $t("Total") }}:</p>
										<p class="invoice-total-amount">{{ invoiceData.amount }}</p>
									</div>
								</div>
							</b-col>
						</b-row>
					</b-card-body>
				</b-card>
			</b-col>
		</b-row>

		<invoice-sidebar-send-invoice />
		<invoice-sidebar-add-payment />
	</section>
</template>

<script>
	import { ref, onUnmounted } from "@vue/composition-api"
	import store from "@/store"
	import router from "@/router"
	import {
		BRow,
		BCol,
		BCard,
		BCardBody,
		BTableLite,
		BCardText,
		BButton,
		BAlert,
		BLink,
		VBToggle,
	} from "bootstrap-vue"
	import Logo from "@core/layouts/components/Logo.vue"
	import Ripple from "vue-ripple-directive"
	import invoiceStoreModule from "../invoiceStoreModule"
	import InvoiceSidebarSendInvoice from "../InvoiceSidebarSendInvoice.vue"
	import InvoiceSidebarAddPayment from "../InvoiceSidebarAddPayment.vue"
	import { $membershipTypes, $invoiceStatus } from "@siteConfig"

	export default {
		directives: {
			Ripple,
			"b-toggle": VBToggle,
		},
		components: {
			BRow,
			BCol,
			BCard,
			BCardBody,
			BTableLite,
			BCardText,
			BButton,
			BAlert,
			BLink,

			Logo,
			InvoiceSidebarAddPayment,
			InvoiceSidebarSendInvoice,
		},
		setup() {
			const invoiceData = ref(null)
			const paymentDetails = ref({})

			const INVOICE_APP_STORE_MODULE_NAME = "app-invoice"

			// Register module
			if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME))
				store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME))
					store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
			})

			store
				.dispatch("app-invoice/fetchInvoice", { id: router.currentRoute.params.id })
				.then((response) => {
					invoiceData.value = response.data.data
					paymentDetails.value = {}
				})
				.catch((error) => {
					if (error.response.status === 404) {
						invoiceData.value = undefined
					}
				})

			const printInvoice = () => {
				window.print()
			}

			return {
				invoiceData,
				paymentDetails,
				printInvoice,
				$membershipTypes,
				$invoiceStatus,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss">
	@media print {
		// Global Styles
		body {
			background-color: transparent !important;
		}
		nav.header-navbar {
			display: none;
		}
		.main-menu {
			display: none;
		}
		.header-navbar-shadow {
			display: none !important;
		}
		.content.app-content {
			margin-left: 0;
			padding-top: 2rem !important;
		}
		footer.footer {
			display: none;
		}
		.card {
			background-color: transparent;
			box-shadow: none;
		}
		.customizer-toggle {
			display: none !important;
		}

		// Invoice Specific Styles
		.invoice-preview-wrapper {
			.row.invoice-preview {
				.col-md-8 {
					max-width: 100%;
					flex-grow: 1;
				}

				.invoice-preview-card {
					.card-body:nth-of-type(2) {
						.row {
							> .col-12 {
								max-width: 50% !important;
							}

							.col-12:nth-child(2) {
								display: flex;
								align-items: flex-start;
								justify-content: flex-end;
								margin-top: 0 !important;
							}
						}
					}
				}
			}

			// Action Right Col
			.invoice-actions {
				display: none;
			}
		}
	}
</style>
