import React from "react";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { Label } from "@/components/ui/label";

import AvatarEdit from "@/app/_library/avatar";

import { categories } from "@/app/_components/profile_settings/constants";

import "./index.css";

export default function Setting() {
  return (
    <div className="flex flex-col items-center w-full gap-1">
      <AvatarEdit
        className="w-20 h-20 mx-auto mt-8 mb-3"
        url=""
        isLoading={false}
      />
      <Label className="text-base font-medium text-textPrimary">
        Brooklyn Simmons
      </Label>
      <Label className="mt-[2px]">@brooklyn_Simmons</Label>
      <div className="flex justify-between gap-6 mt-6">
        <Link href={"/profile/followers"}>
        <Label>
          <span className="font-semibold text-textPrimary">72</span> Followers
        </Label>
        </Link>
        <Link href={"/profile/following"}>
        <Label>
          <span className="font-semibold text-textPrimary">144</span> Following
        </Label>
        </Link>
      </div>
      <div className="w-full mt-12">
        {categories.map((d, index) => (
        <Link href={`/profile/${d.key}`}>
          <div
            key={d.key}
            className="flex items-center gap-3 py-4 border-b cursor-pointer border-lightBorder last-of-type:border-0 profile-category"
          >
            <span
              style={{ backgroundColor: d.color }}
              className="p-[6px] overflow-hidden rounded-full"
            >
              {d.icon}
            </span>
            <Label className="font-normal">{d.content}</Label>
            {index !== categories.length - 1 && (
              <ChevronRight color="#acadb3" className="ml-auto" />
            )}
          </div>
        </Link>
        ))}
      </div>
    </div>
  );
}
