import React from "react";
import { cn } from "@/lib/utils";

export default function PlaceHolderShimmer({
    className
}: {
    className: string
}) {
  return (
    <div
      className={cn("w-full h-full absolute left-0 top-0 rounded-sm shimmer", className)}
    ></div>
  );
}
