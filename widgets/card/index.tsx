"use client";

import React, { MouseEventHandler } from "react";

import { Lock, Crown, Globe2, MoreVertical } from "lucide-react";

import { numberFormat } from "@/utils/generics";
import { GroupFeeTypes, GroupJoinType } from "@/utils/types/group";

import { Label } from "@/components/ui/label";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import Popup from "@/app/_library/popup";
import ImageFallBack from "@/app/_library/image";
import { IGroupsDetails } from "@/app/(main)/profile/groups/types";
import { Button } from "@/components/ui/button";

interface IProps extends IGroupsDetails {
  clickHandler: MouseEventHandler<HTMLDivElement>;
}

export default function GroupCard({
  about,
  followersCount,
  groupLogoUrl,
  groupName,
  groupPublicName,
  // groupStatus,
  followersProfilePicture,
  followStatus,
  groupJoinType,
  groupFeeType,
  marketCategory,
  clickHandler,
}: IProps) {
  const viewHandler = () => {};

  const LeaveHandler = () => {};

  const reportHandler = () => {};

  return (
    <div
      className="w-[300px] min-h-[190px] rounded-xl border border-borderColor p-3 flex flex-col gap-3 cursor-pointer hover:bg-backgroundShade td:w-full td:min-h-max"
      onClick={clickHandler}
    >
      {/** Header */}

      <div className="flex justify-between items-center">
        <ImageFallBack
          src={`/${marketCategory}.svg`}
          alt={"crypto"}
          className="w-4 h-4"
        />
        <div>
          {groupFeeType === GroupFeeTypes.PAID && <Crown />}
          {groupJoinType?.length && groupJoinType === GroupJoinType.PRIVATE ? (
            <Lock size={16} />
          ) : (
            <Globe2 size={16} />
          )}
          <Popup
            title="Options"
            className={"ml-auto"}
            trigger={<MoreVertical size={16} className="cursor-pointer" />}
          >
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={reportHandler}
            >
              Report
            </DropdownMenuItem>
            {followStatus === "joined" && (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={LeaveHandler}
              >
                Leave
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              className="cursor-pointer text-red-500"
              onClick={viewHandler}
            >
              View
            </DropdownMenuItem>
          </Popup>
        </div>
      </div>

      {/** profile */}
      <div className="w-full flex gap-2 p-3 rounded-xl items-start border border-lightBorder">
        <ImageFallBack src={groupLogoUrl} alt={groupName} className="w-9 h-9" />
        <div className="flex flex-col gap-1">
          <Label className="leading-5 text-textPrimary">
            {groupPublicName}
          </Label>
          <small className="block">{groupName}</small>
        </div>
      </div>

      {/** about */}
      <article className="text-textSecondary tracking-[.6px]">{about}</article>

      {/** footer */}
      <div className="flex justify-between items-center mt-auto">
        <div>
          {followersProfilePicture.map((d) => (
            <ImageFallBack
              src={groupLogoUrl}
              alt={groupName}
              className="w-9 h-9"
            />
          ))}
          <p>
            <span className="">
              {followersCount > 1
                ? numberFormat(followersCount, 3)
                : followersCount}
            </span>
          </p>
        </div>
        <Button className="capitalize">{followStatus}</Button>
      </div>
    </div>
  );
}
