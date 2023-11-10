"use client";

import React from "react";

import ErrorPage from "@/components/ui/error";
import ProfileLayout from "../_common";

export default function Error(props: { error: Error; reset: () => void }) {
  return (
    <ProfileLayout category={"general_info"}>
      <ErrorPage {...props} />
    </ProfileLayout>
  );
}
