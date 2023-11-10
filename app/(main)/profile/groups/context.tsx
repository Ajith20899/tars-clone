"use client"

import { createContext, useState } from "react";

import { IGroupState } from "./types";

let rootState: IGroupState = {
  groups: {
    myGroups: new Map(),
    joinedGroups: new Map(),
  },
  setGroups: () => {},
};

const Context = createContext(rootState);

export default function GroupContext({ children }: { children: React.ReactNode }) {
  const [groups, setGroups] = useState({
    myGroups: rootState.groups.myGroups,
    joinedGroups: rootState.groups.joinedGroups,
  });
  // ...
  return (
    <Context.Provider
      value={{
        groups,
        setGroups,
      }}
    >
      {children}
    </Context.Provider>
  );
}
