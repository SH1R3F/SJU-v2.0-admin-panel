<template>
	<b-card :title="$t('Volunteer log')">
		<app-timeline>
			<!-- Success on course.. Gonna be updated when courses added -->
			<app-timeline-item>
				<div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
					<h6>{{ $t("Course success") }}</h6>
					<small class="text-muted">Date of success</small>
				</div>
				<p class="mb-0">
					<b-img :src="require('@/assets/images/icons/pdf.png')" height="auto" width="20" class="mr-1" />
					<span class="align-bottom">Certificate.pdf</span>
				</p>
			</app-timeline-item>

			<!-- enroll to course.. Gonna be updated when courses added -->
			<app-timeline-item variant="warning">
				<div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
					<h6>{{ $t("Course enrollment") }}</h6>
					<small class="text-muted">Date of enrollment</small>
				</div>
				<p>Name of course</p>
			</app-timeline-item>

			<app-timeline-item variant="info" :title="$t('Account creation')" :subtitle="$t('Volunteer joined us')" :time="volunteerData.created_at" />
		</app-timeline>
	</b-card>
</template>

<script>
	import { BCard, BImg, BMedia, BAvatar } from "bootstrap-vue";
	import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
	import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";

	export default {
		components: {
			BCard,
			BImg,
			BMedia,
			BAvatar,
			AppTimeline,
			AppTimelineItem,
		},
		props: ["volunteerData"],
	};
</script>

<style></style>
