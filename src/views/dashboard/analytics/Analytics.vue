<template>
	<section id="dashboard-analytics">
		<b-row class="match-height">
			<b-col lg="6" md="12">
				<analytics-congratulation :user="user" :data="data.congratulations" />
			</b-col>
			<b-col lg="3" sm="6">
				<statistic-card-with-area-chart v-if="stats.subscribers" icon="UsersIcon" :statistic="kFormatter(stats.subscribers)" :statistic-title="$t('Subscribers')" :chart-data="[{ name: $t('Subscribers'), data: [0, stats.subscribers] }]" />
			</b-col>
			<b-col lg="3" sm="6">
				<statistic-card-with-area-chart v-if="stats.members" icon="UsersIcon" :statistic="kFormatter(stats.members)" :statistic-title="$t('Members')" :chart-data="[{ name: $t('Members'), data: [0, stats.members] }]" />
			</b-col>
		</b-row>

		<b-row class="match-height">
			<b-col lg="6">
				<analytics-support-tracker :title="$t('Technical support')" :data="stats.tickets" />
			</b-col>
			<b-col lg="6">
				<analytics-course-tracker :title="$t('Courses')" :data="stats.courses" />
			</b-col>
		</b-row>
	</section>
</template>

<script>
	import { BRow, BCol } from "bootstrap-vue"

	import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart.vue"
	import { kFormatter } from "@core/utils/filter"
	import InvoiceList from "@/views/apps/invoice/invoice-list/InvoiceList.vue"
	import AnalyticsCongratulation from "./AnalyticsCongratulation.vue"
	import AnalyticsAvgSessions from "./AnalyticsAvgSessions.vue"
	import AnalyticsSupportTracker from "./AnalyticsSupportTracker.vue"
	import AnalyticsCourseTracker from "./AnalyticsCourseTracker.vue"
	import AnalyticsTimeline from "./AnalyticsTimeline.vue"
	import AnalyticsSalesRadarChart from "./AnalyticsSalesRadarChart.vue"
	import AnalyticsAppDesign from "./AnalyticsAppDesign.vue"
	import axios from "@axios"

	export default {
		components: {
			BRow,
			BCol,
			AnalyticsCongratulation,
			AnalyticsAvgSessions,
			StatisticCardWithAreaChart,
			AnalyticsSupportTracker,
			AnalyticsCourseTracker,
			AnalyticsTimeline,
			AnalyticsSalesRadarChart,
			AnalyticsAppDesign,
			InvoiceList,
		},
		data() {
			return {
				data: {},
				user: {},
				stats: {},
			}
		},
		created() {
			// data
			this.user = JSON.parse(localStorage.getItem("userData"))
			this.$http.get("/analytics/data").then((response) => {
				this.data = response.data
				console.log(this.data)
			})
			axios
				.get("/dashboard")
				.then((res) => {
					this.stats = res.data
					console.log(this.stats)
				})
				.catch((err) => console.log("Err fetching stats"))
		},
		methods: {
			kFormatter,
		},
	}
</script>
