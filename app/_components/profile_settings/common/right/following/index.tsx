import { profileUrls } from "@/utils/api/urls";
import { getRequest } from "@/utils/api/httpClient";

import Main from "./main";


export default async function FollowersAndFollowing({
  isFollowers,
}: {
  isFollowers?: boolean;
}) {
  let url = isFollowers ? profileUrls.getFollowersURL : profileUrls.getFollowingUsersURL;

  const { data, errorMessage } = await getRequest(url);

  if(errorMessage) return <>E</>;

  return <></>
  // return <Main items={items} fetchHandler={fetchHandler} />;
}
