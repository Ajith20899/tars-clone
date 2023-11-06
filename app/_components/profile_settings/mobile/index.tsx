import React, { Dispatch, SetStateAction, useMemo } from "react";

import dynamic from "next/dynamic";

import { ArrowLeft } from "lucide-react";

import Setting from "../common/left";

import { ProfileSettings } from "../constants";

const PersonalInfo = dynamic(() => import("../common/right/personal"));
const Settings = dynamic(() => import("../common/right/settings"));
const Groups = dynamic(() => import("../common/right/groups"));
const FollowersAndFollowing = dynamic(
  () => import("../common/right/following")
);

export default function MobileProfile({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: ProfileSettings;
  setSelectedCategory: Dispatch<SetStateAction<ProfileSettings>>;
}) {
  const elementHandle = useMemo(() => {
    switch (selectedCategory) {
      case ProfileSettings.FOLLOWERS:
        return <FollowersAndFollowing isFollowers />;
      case ProfileSettings.FOLLOWING:
        return <FollowersAndFollowing />;
      case ProfileSettings.GENERALINFO:
        return <PersonalInfo />;
      case ProfileSettings.GROUPS:
        return <Groups />;
      case ProfileSettings.SETTINGS:
        return <Settings />;
      default:
        return <>None</>;
    }
  }, [selectedCategory]);

  return (
    <div>
      {!selectedCategory.length ? (
        <Setting
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <div>
          <div>
            <ArrowLeft
              size={"20px"}
              onClick={() => setSelectedCategory(ProfileSettings.EMPTY)}
            />
            <h3>{selectedCategory}</h3>
          </div>
          {elementHandle}
        </div>
      )}
    </div>
  );
}
