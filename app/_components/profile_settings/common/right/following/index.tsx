"use client";

import { useRouter } from "next/navigation";

export default function FollowersAndFollowing({
  isFollowers,
}: {
  isFollowers?: boolean;
}) {
  const { push } = useRouter();

  return <></>;
}
