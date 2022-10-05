<template>
	<!-- Need to add height inherit because Vue 2 don't support multiple root ele -->
	<div style="height: inherit">
		<div class="body-content-overlay" :class="{ show: shallShowActiveChatContactSidebar || mqShallShowLeftSidebar }" @click="mqShallShowLeftSidebar = shallShowActiveChatContactSidebar = false" />

		<!-- Main Area -->
		<section class="chat-app-window">
			<!-- Start Chat Logo -->
			<div v-if="!activeTicket.ticketable" class="start-chat-area">
				<div class="mb-1 start-chat-icon">
					<feather-icon icon="MessageSquareIcon" size="56" />
				</div>
				<h4 class="sidebar-toggle start-chat-text" @click="startConversation">{{ $t("Choose a ticket to open chat") }}</h4>
			</div>

			<!-- Chat Content -->
			<div v-else class="active-chat">
				<!-- Chat Navbar -->
				<div class="chat-navbar">
					<header class="chat-header">
						<!-- Avatar & Name -->
						<div class="d-flex align-items-center">
							<!-- Toggle Icon -->
							<div class="sidebar-toggle d-block d-lg-none mr-1">
								<feather-icon icon="MenuIcon" class="cursor-pointer" size="21" @click="mqShallShowLeftSidebar = true" />
							</div>

							<b-avatar size="36" :src="activeTicket.ticketable.avatar" class="mr-1 cursor-pointer badge-minimal" badge badge-variant="primary" @click.native="shallShowActiveChatContactSidebar = true" />
							<h6 class="mb-0" @click="shallShowActiveChatContactSidebar = true">
								{{ dblocalize(activeTicket.ticketable, "fullName") }}
							</h6>
						</div>

						<!-- Contact Actions -->
						<div class="d-flex align-items-center">
							<div class="dropdown">
								<b-dropdown variant="link" no-caret toggle-class="p-0" right>
									<template #button-content>
										<feather-icon icon="MoreVerticalIcon" size="17" class="align-middle text-body" />
									</template>
									<b-dropdown-item @click="closeTicket"> {{ activeTicket.status ? $t("Close ticket") : $t("Reopen ticket") }} </b-dropdown-item>
									<b-dropdown-item @click="deleteTicket"> {{ $t("Delete ticket") }} </b-dropdown-item>
								</b-dropdown>
							</div>
						</div>
					</header>
				</div>

				<!-- User Chat Area -->
				<vue-perfect-scrollbar ref="refChatLogPS" :settings="perfectScrollbarSettings" class="user-chats scroll-area">
					<chat-log :chat-data="activeTicket" :profile-user-avatar="profileUserDataMinimal.avatar" />
				</vue-perfect-scrollbar>

				<!-- Message Input -->
				<b-form class="chat-app-form" @submit.prevent="sendMessage">
					<b-input-group class="input-group-merge form-send-message mr-1">
						<b-form-input v-model="chatInputMessage" :placeholder="$t('Enter your message...')" />
					</b-input-group>
					<span class="mr-1 cursor-pointer rounded" :class="{ 'bg-light-primary': chatInputAttachment }" style="padding: 3px">
						<input ref="refInputEl" type="file" class="d-none" @input="inputImageRenderer" />
						<feather-icon icon="UploadIcon" size="17" @click="$refs.refInputEl.click()" />
					</span>
					<b-button variant="primary" type="submit"> {{ $t("Send") }} </b-button>
				</b-form>
			</div>
		</section>

		<!-- Active Ticket Details Sidebar -->
		<chat-active-chat-content-details-sidedbar :shall-show-active-chat-contact-sidebar.sync="shallShowActiveChatContactSidebar" :ticket="activeTicket || {}" />

		<!-- Sidebar -->
		<portal to="content-renderer-sidebar-left">
			<chat-left-sidebar :tickets="tickets" :active-chat-contact-id="activeTicket.id" :profile-user-data="profileUserData" :profile-user-minimal-data="profileUserDataMinimal" :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar" @open-chat="openChatOfTicket" />
		</portal>
	</div>
</template>

<script>
	import store from "@/store"
	import { ref, onUnmounted, nextTick } from "@vue/composition-api"
	import { BAvatar, BDropdown, BDropdownItem, BForm, BInputGroup, BFormInput, BButton } from "bootstrap-vue"
	import VuePerfectScrollbar from "vue-perfect-scrollbar"
	// import { formatDate } from '@core/utils/filter'
	import { useResponsiveAppLeftSidebarVisibility } from "@core/comp-functions/ui/app"
	import ChatLeftSidebar from "./ChatLeftSidebar.vue"
	import chatStoreModule from "./chatStoreModule"
	import ChatActiveChatContentDetailsSidedbar from "./ChatActiveChatContentDetailsSidedbar.vue"
	import ChatLog from "./ChatLog.vue"
	import { $themeBreakpoints } from "@themeConfig"
	import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils"

	export default {
		components: {
			// BSV
			BAvatar,
			BDropdown,
			BDropdownItem,
			BForm,
			BInputGroup,
			BFormInput,
			BButton,
			// 3rd Party
			VuePerfectScrollbar,
			// SFC
			ChatLeftSidebar,
			ChatActiveChatContentDetailsSidedbar,
			ChatLog,
		},
		setup() {
			const TECHNICAL_SUPPORT_STORE_MODULE_NAME = "technical-support"
			// Register module
			if (!store.hasModule(TECHNICAL_SUPPORT_STORE_MODULE_NAME)) store.registerModule(TECHNICAL_SUPPORT_STORE_MODULE_NAME, chatStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(TECHNICAL_SUPPORT_STORE_MODULE_NAME)) store.unregisterModule(TECHNICAL_SUPPORT_STORE_MODULE_NAME)
			})

			// Scroll to Bottom ChatLog
			const refChatLogPS = ref(null)
			const scrollToBottomInChatLog = () => {
				const scrollEl = refChatLogPS.value.$el || refChatLogPS.value
				scrollEl.scrollTop = scrollEl.scrollHeight
			}

			// ------------------------------------------------
			// Tickets
			// ------------------------------------------------
			const tickets = ref([])
			const fetchTickets = () => {
				store.dispatch("technical-support/fetchTickets").then((response) => {
					tickets.value = response.data.tickets
				})
			}
			fetchTickets()

			// ------------------------------------------------
			// Single Chat
			// ------------------------------------------------
			const activeTicket = ref({})
			const chatInputMessage = ref("")
			const chatInputAttachment = ref("")

			const openChatOfTicket = (ticketId) => {
				// Reset send message input value
				chatInputMessage.value = ""

				store.dispatch("technical-support/getChat", { ticketId }).then((response) => {
					activeTicket.value = response.data.ticket

					// Set unseenMsgs to 0
					// const contact = tickets.value.find((c) => c.id === ticketId)
					// if (contact) contact.chat.unseenMsgs = 0

					// Scroll to bottom
					nextTick(() => {
						scrollToBottomInChatLog()
					})
				})

				// if SM device =>  Close Chat & Contacts left sidebar
				// eslint-disable-next-line no-use-before-define
				mqShallShowLeftSidebar.value = false
			}

			const refInputEl = ref(null)
			const { inputImageRenderer } = useInputImageRenderer(refInputEl, (base64) => {
				// eslint-disable-next-line no-param-reassign
				chatInputAttachment.value = base64
			})

			const sendMessage = () => {
				if (!chatInputMessage.value && !chatInputAttachment.value) return
				const payload = {
					ticketId: activeTicket.value.id,
					// eslint-disable-next-line no-use-before-define
					senderId: 1,
					message: chatInputMessage.value,
					attachment: chatInputAttachment.value,
				}
				store.dispatch("technical-support/sendMessage", payload).then((response) => {
					const { message } = response.data
					// Add message to log
					activeTicket.value.chat.push(message)

					// Reset send message input value
					chatInputMessage.value = ""
					chatInputAttachment.value = ""

					// Set Last Message for active contact
					const ticket = tickets.value.find((c) => c.id === activeTicket.value.id)
					ticket.lastMessage = message

					fetchTickets()

					// Scroll to bottom
					nextTick(() => {
						scrollToBottomInChatLog()
					})
				})
			}

			const perfectScrollbarSettings = {
				maxScrollbarLength: 150,
			}

			// User Profile Sidebar
			// ? Will contain all details of profile user (e.g. settings, about etc.)
			const profileUserData = ref({})
			// ? Will contain id, name and avatar & status
			const profileUserDataMinimal = JSON.parse(localStorage.getItem("userData"))

			// Active Chat Contact Details
			const shallShowActiveChatContactSidebar = ref(false)

			// UI + SM Devices
			// Left Sidebar Responsiveness
			const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()
			const startConversation = () => {
				if (store.state.app.windowWidth < $themeBreakpoints.lg) {
					mqShallShowLeftSidebar.value = true
				}
			}

			const closeTicket = function () {
				store.dispatch("technical-support/toggleTicket", { id: activeTicket.value.id }).then((response) => {
					this.$bvToast.toast(response.data.message, {
						variant: "success",
						solid: true,
					})
					activeTicket.value.status = response.data.status
				})
			}

			const deleteTicket = function () {
				store.dispatch("technical-support/deleteTicket", { id: activeTicket.value.id }).then((response) => {
					this.$bvToast.toast(response.data.message, {
						variant: "success",
						solid: true,
					})
					activeTicket.value = {}
					fetchTickets()
				})
			}

			return {
				// Filters
				// formatDate,
				startConversation,
				// tickets
				tickets,

				// Single Chat
				refChatLogPS,
				activeTicket,
				chatInputMessage,
				openChatOfTicket,
				sendMessage,
				inputImageRenderer,
				chatInputAttachment,
				refInputEl,
				closeTicket,
				deleteTicket,

				// Profile User Minimal Data
				profileUserDataMinimal,

				// User Profile Sidebar
				profileUserData,

				// Active Chat Contact Details
				shallShowActiveChatContactSidebar,

				// UI
				perfectScrollbarSettings,

				// UI + SM Devices
				mqShallShowLeftSidebar,
			}
		},
	}
</script>

<style lang="scss" scoped></style>

<style lang="scss">
	@import "~@core/scss/base/pages/app-chat.scss";
	@import "~@core/scss/base/pages/app-chat-list.scss";
</style>
