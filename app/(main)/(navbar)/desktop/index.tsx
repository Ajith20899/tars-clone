
import React from "react";

import ImageFallBack from "@/app/_library/image";

import NavCategories from "./navCategories";

export default function NavbarDesktop() {
  return (
    <nav className="px-2 py-3 rounded-full bg-background">
      <ImageFallBack 
        src={'/udc.svg'}
        alt="udc"
        className="w-full py-2 h-7"
      />
      <NavCategories />
    </nav>
  );
}
