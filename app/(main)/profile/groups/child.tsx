"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useLoadMore } from "@/hooks/useLoadMore";

import { profileUrls } from "@/utils/api/urls";
import { postRequest } from "@/utils/api/httpClient";

import { CardPlaceHolder } from "@/app/_widgets/card/loader";

import Dropdown from "@/app/_library/dropdown";

import { GroupStatusList, GroupTabsList, GroupTypeList } from "./contants";

import { IGroups } from "./types";
import ImageFallBack from "@/app/_library/image";
import { Label } from "@radix-ui/react-label";
import GroupCard from "@/app/_widgets/card";
import { GroupFeeTypes } from "@/utils/types/group";

export default function Groups() {
  const [groupsDetails, setGroupsDetails] = useState<Map<string, IGroups>>(
    new Map()
  );
  const [headerState, setHeaderState] = useState({
    category: "my_groups",
    type: "all",
    status: "all",
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
    <div className="p-4 flex flex-col gap-2 items-center">
      {/** Header */}
      <div className="flex gap-2 justify-between items-center w-full">
        <div className="flex gap-1 p-1.5 bg-backgroundShade rounded-full">
          {GroupTabsList.map((d) => (
            <span
              key={d.value}
              className={cn(
                "text-sm py-2 px-3 rounded-full cursor-pointer font-medium hover:text-primary ",
                headerState.category === d.value &&
                  "bg-background text-primary font-semibold"
              )}
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
        <Dropdown
          list={GroupTypeList}
          value={headerState.type}
          selectHandler={(val: string) =>
            setHeaderState((p) => ({
              ...p,
              type: val,
            }))
          }
          className="w-[95px] ml-auto"
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
          className="w-[95px]"
        />
      </div>

      {/** main */}
      <div
        className="pt-3 flex flex-wrap gap-5 w-full max-h-[calc(100vh-190px)] overflow-auto relative"
        ref={groupListRef}
      >
        {!isLoading ? (
          [1, 2, 3, 4, 5].map(() => <CardPlaceHolder />)
        ) : !groupsDetails.get(key)?.groups?.length ? (
          <div className="flex flex-col items-center w-80 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-60%]">
            <ImageFallBack
              src="/gif/no-data.gif"
              alt="no data"
              className="w-80 h-80"
            />
            <Label className="text-lg font-medium">
              Oops! Sorry, no data avilable
            </Label>
          </div>
        ) : (
          /** cards */
          <div></div>
          // <GroupCard
          // />
        )}
      </div>
    </div>
  );
}
