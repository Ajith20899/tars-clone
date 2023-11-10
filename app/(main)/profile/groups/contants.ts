export enum GroupCategory {
  MY_GROUP = "",
  JOINED_GROUP = "",
}

export enum GroupTypes {
  PUBLIC = "",
  PRIVATE = "",
  ALL = "",
}

export enum GroupStatus {
  ACTIVE = "",
  EXPIRE = "",
  ALL = "",
}

export const GroupTabsList = [
  {
    label: "My Groups",
    value: "my_groups",
  },
  {
    label: "Joined Groups",
    value: "joined_groups",
  },
];

export const GroupTypeList = [
  {
    label: "Public",
    value: "public",
  },
  {
    label: "Private",
    value: "private",
  },
  {
    label: "All",
    value: "all",
  },
];

export const GroupStatusList = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Expired",
    value: "expired",
  },
  {
    label: "All",
    value: "all",
  },
];
