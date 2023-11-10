import { Dispatch, SetStateAction } from "react";

import { MarketCategory } from "@/utils/constants/global";
import {
  GroupFeeTypes,
  GroupFollowStatus,
  GroupJoinType,
} from "@/utils/types/group";

export interface IGroupPricingPlans {
  month: {
    fee: number;
  };
  year: {
    fee: number;
  };
  lifeTime: {
    fee: number;
  };
}

export interface IGroupsDetails {
  marketCategory: MarketCategory;
  badge: string;
  followersCount: number;
  groupId: string;
  groupName: string;
  createdAt: number;
  adminUserEkey: string;
  groupJoinType: GroupJoinType;
  groupPublicName: string;
  channelId: string;
  about: string;
  isGroupVerified: boolean;
  groupFeeType: GroupFeeTypes;
  groupStatus: string;
  groupLogoUrl: string;
  groupPricingPlans: IGroupPricingPlans;
  isAdminUser: boolean;
  groupJoiningFee?: number;
  activePlan?: string;
  followStatus?: GroupFollowStatus;
}

export interface IGroups {
  groups: IGroupsDetails[];
  paginationKey: any | null;
}

export interface IGroupState {
  groups: {
    myGroups: Map<string, IGroups>;
    joinedGroups: Map<any, any>;
  };
  setGroups: Dispatch<
    SetStateAction<{
      myGroups: Map<string, IGroups>;
      joinedGroups: Map<any, any>;
    }>
  >;
}
