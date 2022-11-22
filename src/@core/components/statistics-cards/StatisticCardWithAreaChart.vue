<template>
	<b-card no-body>
		<b-card-body class="pb-0">
			<b-avatar class="mb-1" :variant="`light-${color}`" size="45">
				<feather-icon size="21" :icon="icon" />
			</b-avatar>
			<div class="truncate">
				<h2 class="mb-25 font-weight-bolder">
					{{ statistic }}
				</h2>
				<span>{{ statisticTitle }}</span>
			</div>
		</b-card-body>

		<vue-apex-charts type="area" height="100" width="100%" :options="chartOptionsComputed" :series="chartData" />
	</b-card>
</template>

<script>
	import { BCard, BCardBody, BAvatar } from "bootstrap-vue"
	import VueApexCharts from "vue-apexcharts"
	import { $themeColors } from "@themeConfig"
	import { areaChartOptions } from "./chartOptions"

	export default {
		components: {
			VueApexCharts,
			BCard,
			BCardBody,
			BAvatar,
		},
		props: {
			icon: {
				required: true,
			},
			statistic: {
				required: true,
			},
			statisticTitle: {
				default: "",
			},
			color: {
				default: "primary",
			},
			chartData: {
				default: () => [],
			},
			chartOptions: {
				default: null,
			},
		},
		computed: {
			chartOptionsComputed() {
				if (this.chartOptions === null) {
					const options = JSON.parse(JSON.stringify(areaChartOptions))
					options.theme.monochrome.color = $themeColors[this.color]
					return options
				}
				return this.chartOptions
			},
		},
	}
</script>
