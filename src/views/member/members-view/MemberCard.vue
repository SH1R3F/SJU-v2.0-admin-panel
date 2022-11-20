<template>
	<div>
		<!-- Membership Card -->
		<div class="membership-cart">
			<div style="position: relative">
				<div class="card-header">
					<p
						class="m-0"
						style="
							font-weight: bolder;
							color: #fff;
							font-size: 1.8em;
							font-family: 'Markazi Text', serif !important;
						"
					>
						هيئــة الصحفيين السعوديـين
					</p>
					<p class="m-0" style="color: #fff; font-size: 1em; font-family: 'Cairo', sans-serif">
						SAUDI JOURNALISTS ASSOCIATION
					</p>
				</div>
				<div class="card-header-logo">
					<img style="height: 100px" src="https://sju.org.sa/assets/themes/main/images/logo.png" />
				</div>
				<div class="membership-id">
					<p class="m-0" style="font-size: 1em; font-weight: bolder; color: #fff">
						بطاقة عضوية &nbsp;&nbsp;&nbsp;&nbsp; Membership ID
					</p>
				</div>
				<div class="membership-body">
					<img
						style="
							height: 205px;
							border: 1px solid #d9d8d8;
							width: 200px;
							object-fit: cover;
							border-radius: 3px;
							margin-bottom: 5px;
							margin: auto;
						"
						:src="memberData.avatar || '/images/user.png'"
					/>
					<p class="m-1" style="font-size: 1.25em; font-weight: bolder; color: #000">
						{{ memberData.fullName }}
					</p>
					<p
						class="m-1"
						style="
							font-family: acumin-pro, sans-serif;
							font-weight: 600;
							color: #000;
							text-transform: capitalize;
							font-size: 18px;
						"
					>
						{{ memberData.fullName_en }}
					</p>
					<p
						class="m-1 membership-number"
						style="
							font-size: 1em;
							font-weight: bolder;
							color: #000;
							direction: ltr;
							margin: 21px 0 !important;
						"
					>
						ID Number &nbsp;&nbsp;
						{{ memberData.membership_number }}
						&nbsp;&nbsp; رقم العضوية
					</p>
					<p
						class="m-0"
						style="
							font-weight: bolder;
							color: #000;
							background: #95c049;
							display: block;
							width: 100%;
							direction: ltr;
							color: #fff;
							font-size: 1em;
							padding: 3px 0;
						"
					>
						Expiry date &nbsp;&nbsp;&nbsp;&nbsp;
						{{ memberData.subscription.end_date }}
						&nbsp;&nbsp;&nbsp;&nbsp; صلاحية البطاقة
					</p>
				</div>
				<div id="watermark" class="hidden">
					<p>مسودة</p>
				</div>
			</div>
		</div>
		<!-- Membership Card -->
		<div class="text-center mt-2">
			<button class="btn btn-primary" @click="getCard(memberData.id)">{{ $t("Download") }}</button>
		</div>
	</div>
</template>

<script>
	import { BRow, BTable } from "bootstrap-vue"
	import memberStoreModule from "../memberStoreModule"
	import store from "@/store"
	import { onUnmounted } from "@vue/composition-api"

	export default {
		components: {
			BRow,
			BTable,
		},
		props: {
			memberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			const MEMBER_APP_STORE_MODULE_NAME = "app-member"
			// Register module
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME))
				store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME)
			})

			const getCard = (id) => {
				store
					.dispatch("app-member/getCard", { id })
					.then((response) => {
						window.open(response.data.path, "_blank")
					})
					.catch((error) => {
						console.log(error)
					})
			}

			return { getCard }
		},
	}
</script>

<style>
	.membership-cart {
		position: relative;
		font-size: 14px;
		margin: auto;
		border: 2px #ccc solid;
		height: 580px;
		width: 380px;
		border-radius: 5px;
		overflow: hidden;
		padding: 0;
	}

	.membership-cart .card-header {
		position: absolute;
		width: 75%;
		background: #088245;
		height: 120px;
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		top: 0;
		left: 0;
		border-radius: 0%;
	}

	.membership-cart .card-header-logo {
		position: absolute;
		top: 1em;
		right: 10px;
	}

	.membership-cart .membership-id {
		position: inherit;
		top: 124px;
		left: 0px;
		background-color: #95c049;
		height: 35px;
		width: 100%;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.membership-cart .membership-body {
		position: inherit;
		top: 10em;
		left: 0px;
		height: 350px;
		width: 100%;
		margin: auto;
		padding: 10px 0;
		text-align: center;
	}
	.membership-cart .membership-number::before,
	.membership-cart .membership-number::after {
		content: "";
		display: inline-block;
		height: 20px;
		background: #9fc65b;
		width: 2px;
		margin: 0px 20px -4px 0;
	}

	.membership-cart .membership-number::after {
		margin: 0px 0 -4px 20px;
	}

	@media (max-width: 500px) {
		.membership-cart {
			font-size: 10px;
			width: auto;
		}
		.membership-cart .card-header {
			width: 19em;
		}
		.membership-cart .card-header-logo {
			transform: scale(0.8);
			top: 18px;
			right: 2px;
		}
		.membership-cart .membership-body {
			top: 14em;
		}
	}
</style>
