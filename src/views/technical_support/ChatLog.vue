<template>
	<div class="chats">
		<div v-for="(msgGrp, index) in formattedChatData.formattedChatLog" :key="msgGrp.sender + String(index)" class="chat" :class="{ 'chat-left': msgGrp.sender == 2 }">
			<div class="chat-avatar">
				<b-avatar size="36" class="avatar-border-2 box-shadow-1" variant="transparent" :src="msgGrp.sender == 2 ? formattedChatData.contact.avatar : profileUserAvatar" />
			</div>
			<div class="chat-body">
				<div v-for="msgData in msgGrp.messages" :key="msgData.updated_at" class="chat-content">
					<template v-if="msgData.msg">
						<p>
							{{ msgData.msg }}
						</p>
					</template>
					<template v-else>
						<a :href="msgData.img" target="_blank">
							<b-img thumbnail fluid :src="msgData.img" style="max-width: 300px" />
						</a>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { computed } from "@vue/composition-api"
	import { BAvatar, BImg } from "bootstrap-vue"

	export default {
		components: {
			BAvatar,
			BImg,
		},
		props: {
			chatData: {
				type: Object,
				required: true,
			},
			profileUserAvatar: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const formattedChatData = computed(() => {
				const contact = {
					id: props.chatData.ticketable.id,
					avatar: props.chatData.ticketable.avatar,
				}

				let chatLog = []
				if (props.chatData.chat) {
					chatLog = props.chatData.chat
				}

				const formattedChatLog = []
				let chatMessageSenderId = chatLog[0] ? chatLog[0].sender : undefined
				let msgGroup = {
					sender: chatMessageSenderId,
					messages: [],
				}

				chatLog.forEach((msg, index) => {
					if (chatMessageSenderId === msg.sender) {
						msgGroup.messages.push({
							msg: msg.message,
							img: msg.attachment,
							time: msg.updated_at,
						})
					} else {
						chatMessageSenderId = msg.sender
						formattedChatLog.push(msgGroup)
						msgGroup = {
							sender: msg.sender,
							messages: [
								{
									msg: msg.message,
									img: msg.attachment,
									time: msg.updated_at,
								},
							],
						}
					}
					if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
				})

				return {
					formattedChatLog,
					contact,
					profileUserAvatar: props.profileUserAvatar,
				}
			})

			return {
				formattedChatData,
			}
		},
	}
</script>

<style></style>
