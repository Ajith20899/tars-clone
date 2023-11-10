export enum WebsocketModules {
    CHAT = 'chat',
}

export enum WebsocketChatActionTypes {
    CHANNEL_ID_SUBSCRIPTION_TRIGGER = 'channelIdSubscriptionTrigger',
    SEND_MESSAGE = 'sendMessage',
    SEND_POLL_MESSAGE = 'sendPollMessage',
    SEND_NEW_REQUEST_MESSAGE = 'sendNewRequestMessage',
    PRIVATE_CHAT_CONNECTION_REQUEST = 'privateChatConnectionRequest',
    UPDATE_CHAT_LAST_SEEN_TIME = 'updateUserChatLastSeenTime',
    UPDATE_PRIVATE_CHAT_REQUEST_LAST_SEEN_TIME = 'updatePrivateChatRequestLastSeenTime',
    UPDATE_PINNED_MESSAGE_STATUS = 'updatePinnedMessageStatus',
    SEND_MESSAGE_EMOJI = 'sendMessageEmoji',
    USER_TYPING = 'userTyping',
    UPDATE_CHANNEL_PIN_STATUS = 'updateChannelPinnedStatus',
}

export enum WebsocketActionTypes {
    UPDATE_USER_ONLINE_STATUS = 'updateUserOnlineStatus',
    PONG = 'pong',
}
