
import React from "react";

import ImageFallBack from "@/library/image";

import NavCategories from "./navCategories";

export default function NavbarDesktop() {
  return (
    <nav className="rounded-full bg-background py-3 px-2">
      <ImageFallBack 
        src={'/udc.svg'}
        alt="udc"
        className="w-full h-7 py-2"
      />
      <NavCategories />
    </nav>
  );
}
