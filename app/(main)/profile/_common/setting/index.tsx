import React from "react";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";

import AvatarEdit from "@/app/_library/avatar";

import {
  ProfileSettings,
  categories,
} from "@/app/_components/profile_settings/constants";

import "./index.css";

export default function Setting({ category }: { category: string }) {
  return (
    <div className="flex flex-col items-center w-full gap-1">
      <AvatarEdit
        className="w-20 h-20 mx-auto mt-8 mb-3"
        url=""
        isLoading={false}
      />
      <Label className="text-sm font-medium text-textPrimary">
        Brooklyn Simmons
      </Label>
      <Label className="text-xs mt-[2px]">@brooklyn_Simmons</Label>
      <div className="flex justify-between gap-6 mt-6">
        <Link
          href={"/profile/followers"}
          className={cn(
            "text-sm text-textPrimary",
            category === ProfileSettings.FOLLOWERS && "text-primary"
          )}
        >
          <span className={"font-semibold"}>72</span> Followers
        </Link>
        <Link
          href={"/profile/following"}
          className={cn(
            "text-sm text-textPrimary",
            category === ProfileSettings.FOLLOWING && "text-primary"
          )}
        >
          <span className={"font-semibold"}>144</span>{" "}
          Following
        </Link>
      </div>
      <div className="w-full mt-12">
        {categories.map((d, index) => (
          <Link
            key={d.key}
            href={`/profile/${d.key}`}
            className="flex items-center gap-3 py-4 border-b cursor-pointer border-lightBorder last-of-type:border-0 profile-category"
          >
            <span
              style={{ backgroundColor: d.color }}
              className={"p-[6px] overflow-hidden rounded-full"}
            >
              {d.icon}
            </span>
            <Label
              className={cn(
                "font-normal",
                d.key === category && "text-primary"
              )}
            >
              {d.content}
            </Label>
            {index !== categories.length - 1 && (
              <ChevronRight
                color={d.key === category ? "hsl(var(--primary))" : "#acadb3"}
                className="ml-auto"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
