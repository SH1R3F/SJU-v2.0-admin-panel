<template>
	<div class="sidebar-left">
		<div class="sidebar">
			<!-- Sidebar Content -->
			<div class="sidebar-content" :class="{ show: mqShallShowLeftSidebar }">
				<!-- Sidebar close icon -->
				<span class="sidebar-close-icon">
					<feather-icon icon="XIcon" size="16" @click="$emit('update:mq-shall-show-left-sidebar', false)" />
				</span>

				<!-- Header -->
				<div class="chat-fixed-search">
					<div class="d-flex align-items-center w-100">
						<div class="sidebar-profile-toggle">
							<b-avatar size="42" class="cursor-pointer badge-minimal avatar-border-2" :src="profileUserMinimalData.avatar" variant="transparent" badge badge-variant="success" @click.native="$emit('show-user-profile')" />
						</div>
						<!-- Search -->
						<b-input-group class="input-group-merge ml-1 w-100 round">
							<b-input-group-prepend is-text>
								<feather-icon icon="SearchIcon" class="text-muted" />
							</b-input-group-prepend>
							<b-form-input v-model="searchQuery" placeholder="Search..." />
						</b-input-group>
					</div>
				</div>

				<!-- ScrollArea: Chat & Contacts -->
				<vue-perfect-scrollbar :settings="perfectScrollbarSettings" class="chat-user-list-wrapper list-group scroll-area">
					<!-- Chats Title -->
					<h4 class="chat-list-title">{{ $t("Tickets") }}</h4>

					<!-- Chats -->
					<ul class="chat-users-list chat-list media-list">
						<chat-ticket v-for="ticket in filteredTickets" :key="ticket.id" :ticket="ticket" tag="li" :class="{ active: activeChatContactId === ticket.id }" @click="$emit('open-chat', ticket.id)" />
					</ul>
				</vue-perfect-scrollbar>
			</div>
		</div>
	</div>
</template>

<script>
	import { BAvatar, BInputGroup, BInputGroupPrepend, BFormInput } from "bootstrap-vue"
	import VuePerfectScrollbar from "vue-perfect-scrollbar"
	import { ref, computed } from "@vue/composition-api"
	import ChatTicket from "./ChatTicket.vue"

	export default {
		components: {
			// BSV
			BAvatar,
			BInputGroup,
			BInputGroupPrepend,
			BFormInput,

			// 3rd party
			VuePerfectScrollbar,

			// SFC
			ChatTicket,
		},
		props: {
			tickets: {
				type: Array,
				required: true,
			},
			profileUserData: {
				type: Object,
				required: true,
			},
			profileUserMinimalData: {
				type: Object,
				required: true,
			},
			activeChatContactId: {
				type: Number,
				default: null,
			},
			mqShallShowLeftSidebar: {
				type: Boolean,
				required: true,
			},
		},
		setup(props) {
			const perfectScrollbarSettings = {
				maxScrollbarLength: 150,
			}

			const resolveChatContact = (userId) => props.contacts.find((contact) => contact.id === userId)

			// Search Query
			const searchQuery = ref("")

			const searchFilterFunction = (ticket) => ticket.title.toLowerCase().includes(searchQuery.value.toLowerCase())
			const filteredTickets = computed(() => props.tickets.filter(searchFilterFunction))

			return {
				// Search Query
				searchQuery,
				filteredTickets,

				// UI
				resolveChatContact,
				perfectScrollbarSettings,
			}
		},
	}
</script>
