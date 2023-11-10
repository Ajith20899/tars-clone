import React from "react";

import { getRequest } from "@/utils/api/httpClient";
import { profileUrls } from "@/utils/api/urls";

import Followers from "./child";

export default async function FollowersPage({
    isFollowing
}: {
    isFollowing?: boolean;
}) {
  const { data, errorMessage } = await getRequest(profileUrls.getFollowersURL);    

  if(errorMessage) throw new Error(errorMessage);

  const fetchHandler = async () => {
    "use server";
  };

  return <Followers isFollowing={isFollowing} items={data} fetchHandler={fetchHandler} />;
}
