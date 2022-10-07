<template>
	<div>
		<b-row v-if="studioItems.length">
			<b-col md="3" v-for="item in studioItems" :key="item.id">
				<!-- card image top -->
				<b-card class="position-static" no-body>
					<template v-if="studioType === 'photo'">
						<b-card-img-lazy :src="item.file" top alt="card img" style="height: 280px; object-fit: cover"></b-card-img-lazy>
					</template>
					<template v-else-if="studioType === 'video'">
						<b-embed type="iframe" aspect="16by9" :src="item.file" allowfullscreen style="height: 280px; object-fit: cover"></b-embed>
					</template>
					<b-card-body class="d-flex justify-content-center">
						<b-link class="btn btn-sm btn-outline-primary mr-1" :href="item.file" target="_blank"> {{ $t("View") }} </b-link>
						<b-link class="btn btn-sm btn-outline-danger mr-1" @click="deleteItem(item.id)"> {{ $t("Delete") }} </b-link>
					</b-card-body>
				</b-card>
			</b-col>
		</b-row>
		<b-row v-else>
			<b-col cols="12">
				<b-alert variant="secondary" show>
					<div class="alert-body">
						<p>
							{{ $t(`There are no ${studioType}s at the moment.`) }}
							{{ $t(`You can`) }}
							<b-link @click="$emit('add-new-item')">{{ $t("add") }}</b-link>
							{{ $t(`a new ${studioType}`) }}
						</p>
					</div>
				</b-alert>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	import store from "@/store"
	import { BEmbed, BAlert, BCard, BCardImgLazy, BCardBody, BCardText, BRow, BCol, BLink } from "bootstrap-vue"

	export default {
		components: {
			BEmbed,
			BAlert,
			BCard,
			BCardImgLazy,
			BCardBody,
			BCardText,
			BRow,
			BCol,
			BLink,
		},
		props: {
			studioType: {
				type: String,
				required: true,
			},
			studioItems: {
				type: Array,
				required: true,
			},
		},

		setup() {
			const deleteItem = function (id) {
				store
					.dispatch("app-studio/deleteItem", { id })
					.then((response) => {
						// Success message and update items
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						this.$emit("refetch-data")
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
				deleteItem,
			}
		},
	}
</script>
