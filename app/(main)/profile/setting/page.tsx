"use client";

import React, { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";

import ProfileLayout from "../_common";

import { ProfileSettings } from "@/app/_components/profile_settings/constants";

import Account from "./_child/account";
import Password from "./_child/password";
import Security from "./_child/security";

const tabList = ["password", "account", "security"];

export default function SettingPage() {
  const [selectedTab, setSelectedTab] = useState("password");

  const elementHandle = useMemo(
    () =>
      selectedTab === "password" ? (
        <Password />
      ) : selectedTab === "account" ? (
        <Account />
      ) : (
        <Security />
      ),
    [selectedTab]
  );

  return (
    <ProfileLayout category={ProfileSettings.SETTINGS}>

      {/* header */}

      <div className="flex gap-10 px-5 border-b border-lightBorder">
        {tabList.map((d) => (
          <Label
            key={d}
            onClick={() => setSelectedTab(d)}
            className={cn(
              "border-b border-transparent py-4 capitalize cursor-pointer hover:text-primary hover:border-primary",
              d === selectedTab && "text-primary font-medium border-primary"
            )}
          >
            {d}
          </Label>
        ))}
      </div>

    {/** main */}
    {elementHandle}
    </ProfileLayout>
  );
}
