export enum UserPrivacyType {
    PRIVATE = 'private',
    PUBLIC = 'public',
}

export enum UserFollowStatus {
    FOLLOW = 'follow',
    FOLLOWING = 'following',
    PENDING = 'pending',
}

export interface IUserBasicDetails {
    username: string;
    fullname: string;
    profilePicUrl: string;
    userEkey: string;
    userPrivacyType?: UserPrivacyType;
}

export type IUserChannelBasicDetails = IUserBasicDetails & {
    channelId: string;
};
