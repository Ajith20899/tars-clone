const userOrigin = 'https://rrzk2oozob.execute-api.us-east-1.amazonaws.com';
const chatOrigin = 'https://pbm57on7y0.execute-api.us-east-1.amazonaws.com';
const exploreOrigin = 'https://tuvzket934.execute-api.us-east-1.amazonaws.com';
const groupOrigin = 'https://jvcrnfh5x0.execute-api.us-east-1.amazonaws.com';

// const prefix = '1.0';
const chatPrefix = 'uat';
const userPrefix = 'uat';
const groupPrefix = 'uat';
const explorePrefix = 'uat';

export const userUrls = {
    auth: {
        checkUser: `${userOrigin}/${userPrefix}/username-email/availability`,
    },
    userBasicDetails: `${userOrigin}/${userPrefix}/basic-details`,
    onboard: `${userOrigin}/${userPrefix}/onboard/user`,
    followRequest: `${userOrigin}/${userPrefix}/follow/request`,
    frequentConnectionUserList: `${userOrigin}/${userPrefix}/frequent-connections`,
    reportUser: `${userOrigin}/${userPrefix}/report`,
    getRandomUserDetails: `${userOrigin}/${userPrefix}/random-user-details`,
};

export const chatUrls = {
    category: {
        fetchCategories: `${chatOrigin}/${chatPrefix}/categories`,
        createNewCategoryFilter: `${chatOrigin}/${chatPrefix}/category/new`,
        availability: `${chatOrigin}/${chatPrefix}/category/availability`,
        fetchCategoryChannelsRecentChats: `${chatOrigin}/${chatPrefix}/category/channels/recent-chats`,
    },
    chat: {
        recentChats: `${chatOrigin}/${chatPrefix}/recent-chats`,
        channelChats: `${chatOrigin}/${chatPrefix}/channel/recent-chats`,
        channelChatMessages: `${chatOrigin}/${chatPrefix}/channel/messages`,
        channelDateRangeChatMessages: `${chatOrigin}/${chatPrefix}/channel/messages/range`,
        chatConnectionRequests: `${chatOrigin}/${chatPrefix}/private/new-requests/messages`,
        mediaUploadUrl: `${chatOrigin}/${chatPrefix}/media-upload-url`,
        bookmarkedMessagesStatus: `${chatOrigin}/${chatPrefix}/bookmark/messages/status`,
        pinnedMessagesStatus: `${chatOrigin}/${chatPrefix}/pinned/messages/status`,
        chatConnectionRequestResponse: `${chatOrigin}/${chatPrefix}/private/chat-requests/update-status`,
        undoChatConnectionRequestStatus: `${chatOrigin}/${chatPrefix}/private/chat-request/undo`,
        chatConnectionRequestMessages: `${chatOrigin}/${chatPrefix}/private/chat-request/messages`,
        searchUsersNewChatRequests: `${chatOrigin}/${chatPrefix}/private/chat-request/search`,
        updateMuteStatus: `${chatOrigin}/${chatPrefix}/channel/mute-unmute`,
        bookmarkedMessages: `${chatOrigin}/${chatPrefix}/bookmark/get`,
        updateBookmarkMessage: `${chatOrigin}/${chatPrefix}/bookmark/update`,
        undoBookmarkedMessage: `${chatOrigin}/${chatPrefix}/bookmark/remove`,
        pinnedMessages: `${chatOrigin}/${chatPrefix}/pinned-messages/get`,
        channelMedias: `${chatOrigin}/${chatPrefix}/channel/medias`,
        pollMessageVotes: `${chatOrigin}/${chatPrefix}/group/poll-message/follower-response`,
        /**
         * message comments
         */
        fetchMessageThreads: `${chatOrigin}/${chatPrefix}/message/threads`,
        /**
         * emoji
         */
        userUsageEmojiReaction: `${chatOrigin}/${chatPrefix}/emoji/user-usage`,
    },
    requests: {
        chatConnectionRequests: `${chatOrigin}/${chatPrefix}/private/new-requests/messages`,
        chatConnectionRequestResponse: `${chatOrigin}/${chatPrefix}/private/chat-requests/update-status`,
        undoChatConnectionRequestStatus: `${chatOrigin}/${chatPrefix}/private/chat-request/undo`,
        chatConnectionRequestMessages: `${chatOrigin}/${chatPrefix}/private/chat-request/messages`,
        searchUsersNewChatRequests: `${chatOrigin}/${chatPrefix}/private/chat-request/search`,
    },
    common: {
        fetchConnectedUsersGropus: `${chatOrigin}/${chatPrefix}/search/connected-user-group-list`,
        /**
         * market
         */
        getMarketNameList: `${chatOrigin}/${chatPrefix}/market/get-all`,
    },
};

export const exploreUrls = {
    groupsUsers: `${exploreOrigin}/${explorePrefix}/user-group-list`,
};

export const groupUrls = {
    groupBasicDetails: `${groupOrigin}/${groupPrefix}/basic-details`,
    groupAvailability: `${groupOrigin}/${groupPrefix}/group-name/availability`,
    groupJoinRequest: `${groupOrigin}/${groupPrefix}/user/join-request`,
    groupSetting: `${groupOrigin}/${groupPrefix}/settings/group-details`,
    groupUndoJoinRequest: `${groupOrigin}/${groupPrefix}/user/undo-join-request`,
    reportGroup: `${groupOrigin}/${groupPrefix}/report`,
    leaveGroup: `${groupOrigin}/${groupPrefix}/user/leave-group`,
    groupNameExist: `${groupOrigin}/${groupPrefix}/group-name/availability`,
    groupInfoUrl: `${groupOrigin}/${groupPrefix}/settings/general-info`,
    groupJoiningPreferenceUrl: `${groupOrigin}/${groupPrefix}/settings/joining-preference`,

    // metrics
    earingAmountURL: `${groupOrigin}/${groupPrefix}/settings/metrics/earnings`,
    signalURL: `${groupOrigin}/${groupPrefix}/settings/metrics/signals`,
    joinedUsersCount: `${groupOrigin}/${groupPrefix}/settings/metrics/joined-users-count`,

    // user management
    followersList: `${groupOrigin}/${groupPrefix}/settings/user-management/group-followers`,
    updateFollowerRole: `${groupOrigin}/${groupPrefix}/settings/user-management/update-follower-role`,
    updateFollowerPermissions: `${groupOrigin}/${groupPrefix}/settings/user-management/update-follower-permissions`,
    removeFollower: `${groupOrigin}/${groupPrefix}/followers/remove`,

    // pending request
    getPendingRequest: `${groupOrigin}/${groupPrefix}/admin/join-requests`,
    declineAndAcceptRequest: `${groupOrigin}/${groupPrefix}/admin/join-request/response`,
    declineAllRequest: `${groupOrigin}/${groupPrefix}/admin/join-requests/delete-all`,

    /**
     * settings
     */
    getLogoUploadUrl: `${groupOrigin}/${groupPrefix}/logo-upload-url`,
    updateGroupPicture: `${groupOrigin}/${groupPrefix}/settings/update/group-logo`,

    /** Create group */
    createGroup: `${groupOrigin}/${groupPrefix}/new-group`,
};

export const profileUrls = {
    getJoinedGroups: `${userOrigin}/${groupPrefix}/groups/joined`,
    getGroups: `${userOrigin}/${groupPrefix}/my-groups`,
    updateNotifications: `${userOrigin}/${groupPrefix}/profile/update/notification-status`,
    updateProfilePicURL: `${userOrigin}/${groupPrefix}/profile/update/profile-picture`,
    updateTheme: `${userOrigin}/${groupPrefix}/profile/update/theme`,
    updateUserDetailsURL: `${userOrigin}/${groupPrefix}/profile/update/basic-details`,
    getUserDetailsURL: `${userOrigin}/${groupPrefix}/settings/profile-details`,
    userNameExistURL: `${userOrigin}/${groupPrefix}/username-email/availability`,
    getProfilePreSignedURL: `${userOrigin}/${groupPrefix}/profile/generate-user-profile-upload-url`,
    getFollowersURL: `${userOrigin}/${groupPrefix}/user/followers`,
    getFollowingUsersURL: `${userOrigin}/${groupPrefix}/user/following`,
    unfollowUserURL: `${userOrigin}/${groupPrefix}/user/unfollow`,
    removeUserURL: `${userOrigin}/${groupPrefix}/user/remove`,
    reportGroup: `${groupOrigin}/${groupPrefix}/report`,
    leaveGroup: `${groupOrigin}/${groupPrefix}/user/leave-group`,
};

export const commonUrls = {};
