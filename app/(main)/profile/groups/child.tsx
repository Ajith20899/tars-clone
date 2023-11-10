"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useLoadMore } from "@/hooks/useLoadMore";

import { profileUrls } from "@/utils/api/urls";
import { postRequest } from "@/utils/api/httpClient";

import Dropdown from "@/app/_library/dropdown";

import { GroupStatusList, GroupTabsList, GroupTypeList } from "./contants";

export default function Groups() {
  const [groupsDetails, setGroupsDetails] = useState(new Map());
  const [headerState, setHeaderState] = useState({
    category: "my_groups",
    type: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const groupListRef = useRef<HTMLDivElement | null>(null);

  let key = `${headerState.category}_${headerState.status}_${headerState.type}`;

  const makeAPI = async (initial?: boolean) => {
    try {
      if (!groupsDetails.get(key)) {
        setIsLoading(true);
      }

      let url =
        headerState.category === "my_groups"
          ? profileUrls.getGroups
          : profileUrls.getJoinedGroups;
      let { data, errorMessage } = await postRequest(url, {
        paginationKey: initial
          ? null
          : groupsDetails.get(key)?.paginationKey || null,
      });

      if (errorMessage) throw new Error(errorMessage);

      let newMap = new Map(groupsDetails);
      newMap.set(key, {
        groups: initial
          ? data.groups
          : newMap.get(key)?.groups.concat(data.groups),
        paginationKey: data.paginationKey,
      });
      setGroupsDetails(newMap);
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  useLoadMore(
    groupListRef,
    () => {
      if (
        groupsDetails.get(key)?.groups?.length &&
        groupsDetails.get(key)?.paginationKey
      )
        makeAPI();
    },
    true,
    [key, groupsDetails?.get(key)]
  );

  useEffect(() => {
    makeAPI(true);
  }, [key]);

  return (
    <div className="p-4 flex gap-2 items-center">
      {/** Header */}
      <div>
        <div>
          {GroupTabsList.map((d) => (
            <span
              key={d.value}
              className={cn(headerState.category === d.value && "")}
              onClick={() =>
                setHeaderState((p) => ({
                  ...p,
                  category: d.value,
                }))
              }
            >
              {d.label}
            </span>
          ))}
        </div>
        <div>
          <Dropdown
            list={GroupTypeList}
            value={headerState.type}
            selectHandler={(val: string) =>
              setHeaderState((p) => ({
                ...p,
                type: val,
              }))
            }
          />
          <Dropdown
            list={GroupStatusList}
            value={headerState.status}
            selectHandler={(val: string) =>
              setHeaderState((p) => ({
                ...p,
                status: val,
              }))
            }
          />
        </div>
      </div>

      {/** main */}
      {isLoading ? (
        <>Loading..</>
      ) : (
        <div ref={groupListRef}>{/** cards */}</div>
      )}
    </div>
  );
}
