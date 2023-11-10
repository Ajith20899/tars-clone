import React from "react";

import { getRequest } from "@/utils/api/httpClient";
import { profileUrls } from "@/utils/api/urls";
import FollowersPage from "../followers/page";

export default async function FollowingPage() {
  const { data, errorMessage } = await getRequest(profileUrls.getFollowersURL);    

  if(errorMessage) throw new Error(errorMessage);

  return <FollowersPage isFollowing />;
}
