<template>
	<b-card>
		<b-row class="align-items-center">
			<!-- User Info: Left col -->
			<b-col cols="21" xl="6" class="d-flex justify-content-between flex-column">
				<!-- User Avatar & Action Buttons -->
				<div class="d-flex justify-content-start">
					<b-avatar :src="subscriberData.avatar" :text="avatarText(subscriberData.fname_ar)" :variant="`light-${resolveUserRoleVariant(subscriberData.role)}`" size="104px" rounded />
					<div class="d-flex flex-column ml-1">
						<div class="mb-1">
							<h4 class="mb-0">
								{{ subscriberData.fullName }}
							</h4>
							<span class="card-text">{{ subscriberData.email }}</span>
						</div>
						<div class="d-flex flex-wrap">
							<b-button :to="{ name: 'edit-subscriber', params: { id: subscriberData.id } }" variant="primary">{{ $t("Edit") }}</b-button>
							<b-button variant="outline-danger" class="ml-1">{{ $t("Delete") }}</b-button>
						</div>
					</div>
				</div>
			</b-col>

			<!-- Right Col: Table -->
			<b-col cols="12" xl="6">
				<table class="mt-2 mt-xl-0 w-100">
					<!-- Name -->
					<tr>
						<th class="pb-50">
							<feather-icon icon="UserIcon" class="mr-75" />
							<span class="font-weight-bold">{{ $t("Name") }}</span>
						</th>
						<td class="pb-50 text-capitalize">
							{{ subscriberData.fullName }}
						</td>
					</tr>
					<tr>
						<th class="pb-50"></th>
						<td class="pb-50 text-capitalize">
							{{ subscriberData.fullName_en }}
						</td>
					</tr>

					<!-- Gender -->
					<tr>
						<th class="pb-50">
							<feather-icon icon="SlidersIcon" class="mr-75" />
							<span class="font-weight-bold">{{ $t("Gender") }}</span>
						</th>
						<td class="pb-50 text-capitalize">
							{{ $gender[subscriberData.gender] }}
						</td>
					</tr>

					<!-- Status -->
					<tr>
						<th class="pb-50">
							<feather-icon icon="CheckIcon" class="mr-75" />
							<span class="font-weight-bold">{{ $t("Status") }}</span>
						</th>
						<td class="pb-50 text-capitalize">
							{{ $status[subscriberData.status] }}
						</td>
					</tr>

					<tr>
						<th class="pb-50">
							<feather-icon icon="FlagIcon" class="mr-75" />
							<span class="font-weight-bold">{{ $t("Country") }}</span>
						</th>
						<td class="pb-50">
							{{ $countries[subscriberData.country] }}
						</td>
					</tr>
					<tr>
						<th>
							<feather-icon icon="PhoneIcon" class="mr-75" />
							<span class="font-weight-bold">{{ $t("Mobile") }}</span>
						</th>
						<td>
							{{ subscriberData.mobile_key + subscriberData.mobile }}
						</td>
					</tr>
				</table>
			</b-col>
		</b-row>
	</b-card>
</template>

<script>
	import { BCard, BButton, BAvatar, BRow, BCol } from "bootstrap-vue";
	import { avatarText } from "@core/utils/filter";
	import useSubscribersList from "../subscribers-list/useSubscribersList";
	import { $countries, $status, $gender } from "@siteConfig";

	export default {
		components: {
			BCard,
			BButton,
			BRow,
			BCol,
			BAvatar,
		},
		props: {
			subscriberData: {
				type: Object,
				required: true,
			},
		},
		setup() {
			const { resolveUserRoleVariant } = useSubscribersList();
			return {
				avatarText,
				resolveUserRoleVariant,
				$countries,
				$status,
				$gender,
			};
		},
	};
</script>

<style></style>
