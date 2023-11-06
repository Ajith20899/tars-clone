import React from "react";

import Link from "next/link";

import ChatSvg from "@/public/svgr/Chat";
import ExploreSvg from "@/public/svgr/Explore";
import NotificationSvg from "@/public/svgr/notification";
import UdcSvg from "@/public/svgr/Udc";

import "./styles.css";

export default function NavbarDesktop() {
  return (
    <nav className="px-2 py-3 rounded-full bg-background">
      <UdcSvg className="w-full py-2 h-7" />
      <div className="flex flex-col gap-10 mt-16">
        <Link className="flex justify-center" href="/chat">
          <div className="relative nav-icon">
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
    </nav>
  );
}
