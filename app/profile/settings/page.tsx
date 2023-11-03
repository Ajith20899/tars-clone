"use client";

import AvatarEdit from "@/library/avatar";
import React from "react";

export default function Profile() {
  return (
    <main>
      <aside>
        <h2>Profile</h2>
        <AvatarEdit
          className="w-10 h-10"
          url=""
          imageHandler={() => {}}
          isLoading={false}
        />
      </aside>
      <div>
        <h3></h3>
      </div>
    </main>
  );
}
