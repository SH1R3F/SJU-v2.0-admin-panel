<template>
	<div class="user-profile-sidebar" :class="{ show: shallShowActiveChatContactSidebar }">
		<!-- Header -->
		<header v-if="ticket.ticketable" class="user-profile-header">
			<span class="close-icon">
				<feather-icon icon="XIcon" @click="$emit('update:shall-show-active-chat-contact-sidebar', false)" />
			</span>

			<div class="header-profile-sidebar">
				<div class="avatar box-shadow-1 avatar-xl avatar-border">
					<b-avatar size="70" :src="ticket.ticketable.avatar" />
					<span class="avatar-status-xl" :class="`avatar-status-${ticket.ticketable.online ? 'online' : 'offline'}`" />
				</div>
				<b-link class="h4 chat-user-name" :to="{ name: `show-${ticket.type}`, params: { id: ticket.ticketable.id } }">
					{{ dblocalize(ticket.ticketable, "fullName") }}
				</b-link>
				<span class="user-post text-capitalize">{{ $t(ticket.type) }}</span>
			</div>
		</header>

		<!-- User Details -->
		<vue-perfect-scrollbar :settings="perfectScrollbarSettings" class="user-profile-sidebar-area scroll-area">
			<!-- Ticket's first message -->
			<h6 class="section-label mb-1">{{ $t("Problem") }}</h6>
			<p>{{ ticket.firstMessage ? ticket.firstMessage.message : "" }}</p>

			<!-- Personal Info -->
			<div class="personal-info">
				<h6 class="section-label mb-1 mt-3">{{ $t("Personal Information") }}</h6>
				<ul class="list-unstyled">
					<li class="mb-1">
						<feather-icon icon="MailIcon" size="16" class="mr-75" />
						<span class="align-middle">{{ ticket.ticketable ? ticket.ticketable.email : "" }}</span>
					</li>
					<li class="mb-1">
						<feather-icon icon="PhoneCallIcon" size="16" class="mr-75" />
						<span class="align-middle">{{ ticket.ticketable ? ticket.ticketable.fullMobile : "" }}</span>
					</li>
					<li>
						<feather-icon icon="ClockIcon" size="16" class="mr-75" />
						<span class="align-middle">{{ ticket.ticketable ? ticket.ticketable.created_at : "" }}</span>
					</li>
				</ul>
			</div>
		</vue-perfect-scrollbar>
	</div>
</template>

<script>
	import VuePerfectScrollbar from "vue-perfect-scrollbar"
	import { BAvatar } from "bootstrap-vue"
	import { BLink } from "bootstrap-vue"

	export default {
		components: {
			// BSV
			BAvatar,

			// 3rd Party
			VuePerfectScrollbar,
			BLink,
		},
		props: {
			shallShowActiveChatContactSidebar: {
				type: Boolean,
				required: true,
			},
			ticket: {
				type: Object,
				required: true,
			},
		},
		setup() {
			const perfectScrollbarSettings = {
				maxScrollbarLength: 150,
			}

			return {
				perfectScrollbarSettings,
			}
		},
	}
</script>

<style></style>
