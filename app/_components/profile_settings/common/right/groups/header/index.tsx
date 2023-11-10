"use client";

import React from "react";
import { GroupTabs } from "../constant";

export default function Header() {
  return (
    <div>
      {GroupTabs.map((d) => (
        <span>{d.text}</span>
      ))}
    </div>
  );
}
