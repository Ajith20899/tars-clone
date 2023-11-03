import React from "react";

import Link from "next/link";

import ChatSvg from "@/public/svgr/Chat";
import ExploreSvg from "@/public/svgr/Explore";
import NotificationSvg from "@/public/svgr/notification";

import "./styles.css";

export default function NavCategories() {
  return (
    <div className="mt-16 flex flex-col gap-10">
      <Link className="flex justify-center" href="/chat">
        <div className="nav-icon relative">
          <ChatSvg />
          <span
            className={"text-xs font-semibold absolute right-0 bottom-[-6px]"}
          >
            10
          </span>
        </div>
      </Link>
      <Link className="flex justify-center" href="/explore">
        <ExploreSvg className="nav-icon" />
      </Link>
      <Link className="flex justify-center" href="/notification">
        <NotificationSvg className="nav-icon" />
      </Link>
    </div>
  );
}
