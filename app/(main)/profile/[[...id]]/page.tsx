import React from "react";

import Profile from "@/app/_components/profile_settings";

export default function ProfilePage({ params }: { params: { id: string[] } }) {
  return <Profile paramsIds={params.id} />;
}
