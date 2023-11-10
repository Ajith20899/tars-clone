import React from "react";

import ProfileLayout from "../_common";
import Groups from "./child";

export default function GroupsPage() {
  return (
    <ProfileLayout category="groups">
      <Groups />
    </ProfileLayout>
  );
}
