<template>
	<div>
		<namings-list-card naming-slug="type" naming-title="Course type" />
		<namings-list-card naming-slug="category" naming-title="Course category" />
		<namings-list-card naming-slug="gender" naming-title="Course gender" />
		<namings-list-card naming-slug="location" naming-title="Course location" />
	</div>
</template>

<script>
	import NamingsListCard from "./NamingsListCard.vue";

	export default {
		components: {
			NamingsListCard,
		},
	};
</script>
