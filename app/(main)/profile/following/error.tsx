"use client";

import React from "react";

import ErrorPage from "@/components/ui/error";
import ProfileLayout from "../_common";

export default function Error(props: { error: Error; reset: () => void }) {
  return (
    <ProfileLayout category={"following"}>
      <ErrorPage {...props} />
    </ProfileLayout>
  );
}
