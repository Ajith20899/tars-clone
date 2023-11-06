import React from "react";

import dynamic from "next/dynamic";

import { isMobile } from "react-device-detect";
import { redirect } from "next/navigation";

// const MobileProfile = dynamic(() => import('./mobile'));
const DesktopProfile = dynamic(() => import('./desktop'));

export default function Profile({
  paramsIds
}: {
  paramsIds: string[]
}) {

  if(!paramsIds.length) return redirect('/profile/general_info');

  if (isMobile)
    return (
      // <MobileProfile />
      <></>
    );
  return (
    <DesktopProfile paramsIds={paramsIds} />
  );
}
