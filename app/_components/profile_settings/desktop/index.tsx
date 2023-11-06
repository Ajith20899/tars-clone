import React from "react";

import dynamic from "next/dynamic";
import { ProfileSettings } from "../constants";

// import { ProfileSettings } from "../constants";

import Setting from "../common/left";

const PersonalInfo = dynamic(() => import("../common/right/personal"));
const Settings = dynamic(() => import("../common/right/settings"));
const Groups = dynamic(() => import("../common/right/groups"));
const FollowersAndFollowing = dynamic(
  () => import("../common/right/following")
);

export default function DesktopProfile({ paramsIds }: { paramsIds: string[] }) {
  let category = paramsIds?.[0];

  if(!category?.length) return <></>;

  const elementHandle = () => {
    switch (paramsIds?.[0]) {
      case ProfileSettings.FOLLOWERS:
        return <FollowersAndFollowing isFollowers />;
      case ProfileSettings.FOLLOWING:
        return <FollowersAndFollowing />;
      case ProfileSettings.GENERALINFO:
        return <PersonalInfo isEdit={!!paramsIds?.[1]?.match("edit")} />;
      case ProfileSettings.GROUPS:
        return <Groups />;
      case ProfileSettings.SETTINGS:
        return <Settings />;
      default:
        return <>None</>;
    }
  };  

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
        <Setting />
      </aside>
      <div className="rounded-xl bg-background">
        <h3 className="p-4 font-semibold border-b border-lightBorder text-textPrimary">
          {titleNameHandle()}
        </h3>
        {elementHandle()}
      </div>
    </main>
  );
}
