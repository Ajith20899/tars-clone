import React from "react";

import dynamic from "next/dynamic";

import { isMobile } from "react-device-detect";
import { redirect } from "next/navigation";

// const MobileProfile = dynamic(() => import('./mobile'));
const DesktopProfile = dynamic(() => import("./desktop"));

export default function Profile({
  paramsIds,
  searchParams,
}: {
  paramsIds: string[];
  searchParams: {
    category: string;
    type: string;
    status: string;
  };
}) {
  if (!paramsIds?.length) return redirect("/profile/general_info");

  if (isMobile)
    return (
      // <MobileProfile />
      <></>
    );
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
        {elementHandle()}
      </div>
    </main>
  );
}
