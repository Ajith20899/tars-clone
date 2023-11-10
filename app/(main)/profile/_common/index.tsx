import React from "react";

import { isMobile } from "react-device-detect";

import Setting from "./setting";
import { ProfileSettings } from "@/app/_components/profile_settings/constants";

export default function ProfileLayout({
  category,
  children,
}: {
  category: string;
  children: React.ReactNode;
}) {
  if (isMobile)
    return (
      // <MobileProfile />
      <></>
    );

  const titleNameHandle = () => {
    switch (category) {
      case ProfileSettings.FOLLOWERS:
        return "Followers";
      case ProfileSettings.FOLLOWING:
        return "Following";
      case ProfileSettings.GENERALINFO:
        return "General Information";
      case ProfileSettings.GROUPS:
        return "Groups";
      case ProfileSettings.SETTINGS:
        return "Settings";
      default:
        return <>None</>;
    }
  };

  return (
    <main className="grid grid-cols-[300px_1fr] gap-3">
      <aside className="p-5 rounded-xl bg-background">
        <h2 className="font-semibold text-textPrimary">Profile</h2>
        <Setting category={category} />
      </aside>
      <div className="rounded-xl bg-background">
        <h3 className="p-4 font-semibold border-b border-lightBorder text-textPrimary">
          {titleNameHandle()}
        </h3>
        {children}
      </div>
    </main>
  );
}
