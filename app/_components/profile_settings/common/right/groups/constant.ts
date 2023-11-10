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

export const GroupTabs = [
  {
    text: "My Groups",
    value: "my_groups",
  },
  {
    text: "Joined Groups",
    value: "joined_groups",
  },
];
