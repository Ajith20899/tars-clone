import { User, Users, Wallet, UserCog, LogOut } from "lucide-react";

import { GroupStatus, MarketCategory } from "@/lib/utils";

export enum ProfileSettings {
  FOLLOWERS = "followers",
  FOLLOWING = "following",
  GENERALINFO = "general_info",
  GROUPS = "groups",
  WALLET = "wallet",
  SETTINGS = "settings",
  LOGOUT = "logout",
  EMPTY = "",
}

export const categories = [
  {
    content: "General Info",
    key: ProfileSettings.GENERALINFO,
    color: "hsl(var(--primary))",
    icon: <User color="#ffffff" size={"16px"} />,
  },
  {
    content: "Groups",
    key: ProfileSettings.GROUPS,
    color: "hsl(20.67deg 100% 64.71%)",
    icon: <Users color="#ffffff" size={"16px"} />,
  },
  {
    content: "Wallet",
    key: ProfileSettings.WALLET,
    color: "hsl(36deg 100% 64.71%)",
    icon: <Wallet color="#ffffff" size={"16px"} />,
  },
  {
    content: "Setting",
    key: ProfileSettings.SETTINGS,
    color: "hsl(159.46deg 66.82% 56.27%)",
    icon: <UserCog color="#ffffff" size={"16px"} />,
  },
  {
    content: "Logout",
    key: ProfileSettings.LOGOUT,
    color: "hsl(0deg 97.8% 64.31%)",
    icon: <LogOut color="#ffffff" size={"16px"} />,
  },
];

export const MarketsCategories = [
  {
    label: "Stocks",
    value: "stocks",
  },
  {
    value: "crypto",
    label: "Crypto",
  },
];

export const personalInfoDetails = [
  {
    title: "Username",
    name: "username",
    placeholder: "Enter username",
  },
  {
    title: "Fullname",
    name: "fullname",
    placeholder: "Enter name",
  },
  {
    title: "Preferred Markets",
    name: "preferredMarkets",
    placeholder: "Select country",
  },
  {
    title: "Privacy Type",
    name: "userPrivacyType",
    placeholder: "Select privacy type",
  },
  {
    title: "Email",
    name: "emailId",
    placeholder: "Enter email",
  },
  {
    title: "Phone",
    name: "phone",
    placeholder: "Enter phone",
  },
  {
    title: "Country",
    name: "country",
    placeholder: "Select country",
  },
];

export const groupTabs = [
  {
    name: "My group",
    icon: "/icons/group-chat.svg",
    secondIcon: "/icons/group-chat-blue.svg",
  },
  {
    name: "Joined group",
    icon: "/icons/group-chat.svg",
    secondIcon: "/icons/group-chat-blue.svg",
  },
];

export const filterOptions = [
  {
    name: "Group type",
    key: "type",
    options: [
      {
        key: "public",
        value: "Public",
        text: "Public",
      },
      { key: "private", value: "Private", text: "Private" },
    ],
  },
  {
    name: "Group status",
    key: "status",
    options: [
      {
        key: "active",
        value: "Active",
        text: "Active",
      },
      { key: "expired", value: "Expired", text: "Expired" },
    ],
  },
];

export const GropsTypeFilterList = [
  {
    key: "all",
    displayValue: "All",
  },
  {
    key: MarketCategory.CRYPTO,
    displayValue: "Crypto",
  },
  {
    key: MarketCategory.FOREX,
    displayValue: "Forex",
  },
  {
    key: MarketCategory.NFT,
    displayValue: "NFT",
  },
  {
    key: MarketCategory.STOCKS,
    displayValue: "Stocks",
  },
];

export const GropsStatusFilterList = [
  {
    key: GroupStatus.ALL,
    displayValue: "All",
  },
  {
    key: GroupStatus.ACTIVE,
    displayValue: "Active",
  },
  {
    key: GroupStatus.EXPIRED,
    displayValue: "Expired",
  },
];
