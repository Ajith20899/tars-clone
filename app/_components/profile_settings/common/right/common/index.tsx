import React from "react";

import { Label } from "@/components/ui/label";

export default function InfoTitleWrap({
  title,
  subTitle,
  children
}: {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 p-4 mt-3">
      <Label className="font-medium text-textPrimary">{title}</Label>
      <Label className="text-xs">{subTitle}</Label>
      {children}
    </div>
  );
}
