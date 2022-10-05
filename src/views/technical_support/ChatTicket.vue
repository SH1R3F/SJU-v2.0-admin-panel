<template>
	<component :is="tag" v-on="$listeners" class="align-items-center">
		<b-avatar size="42" :src="ticket.ticketable.avatar" :text="avatarText(ticket.ticketable.fullName.split(' ')[0])" badge class="badge-minimal" :badge-variant="ticket.ticketable.online ? 'success' : 'secondary'" :variant="ticket.status ? 'light-success' : 'light-dark'" />
		<div class="chat-info flex-grow-1">
			<h5 class="mb-0">
				{{ ticket.title }}
			</h5>
			<p class="card-text text-truncate">{{ ticket.lastMessage ? ticket.lastMessage.message : "" }}</p>
		</div>
		<div class="chat-meta text-nowrap">
			<small class="float-right mb-25 chat-time">{{ formatDateToMonthShort(ticket.lastMessage ? ticket.lastMessage.updated_at : ticket.updated_at, { hour: "numeric", minute: "numeric" }) }}</small>
			<!-- IN CASE YOU ONCE WANTED TO ADD A NUMBER OF UNSEEN MESSAGES -->
			<!-- <b-badge v-if="ticket.status" pill variant="primary" class="float-right"> 1</b-badge> -->
		</div>
	</component>
</template>

<script>
	import { BAvatar, BBadge } from "bootstrap-vue"
	import { formatDateToMonthShort } from "@core/utils/filter"
	import { avatarText } from "@core/utils/filter"

	export default {
		components: {
			BAvatar,
			BBadge,
		},
		props: {
			tag: {
				type: String,
				default: "div",
			},
			ticket: {
				type: Object,
				required: true,
			},
		},
		setup() {
			return {
				formatDateToMonthShort,
				avatarText,
			}
		},
	}
</script>

<style></style>
