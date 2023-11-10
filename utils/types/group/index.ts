export enum GroupFeeTypes {
    FREE = 'free',
    PAID = 'paid',
}

export enum GroupJoinType {
    PUBLIC = 'public',
    PRIVATE = 'private',
}

export enum GroupStatus {
    ALL = 'all',
    ACTIVE = 'active',
    EXPIRED = 'expired',
}

export enum GroupFollowStatus {
    JOIN = 'join',
    JOINED = 'joined',
    REQUESTED = 'requested',
    EXPIRED = 'expired',
    PENDING = 'pending',
}

export enum GroupPlans {
    MONTH = 'month',
    YEAR = 'year',
    LIFE_TIME = 'lifeTime',
}

export interface IGroupBasicDetails {
    channelId: string;
    groupName: string;
    groupPublicName: string;
    groupId: string;
    groupLogoUrl: string;
}

export type GroupJoinTypeFilter = GroupJoinType | 'all';

export type GroupFeeTypeFilter = GroupFeeTypes | 'all';
