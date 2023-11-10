import React from "react";

import { cn } from "@/lib/utils";

export function CardPlaceHolder() {

  return (
    <div
      className={cn(
        "w-[300px] max-h-[190px] rounded-xl border border-borderColor p-3 flex flex-col gap-3 md:w-full"
      )}
    >
      <div className="flex items-center gap-1">
        <span className="animate-pulse bg-borderColor w-5 h-5 rounded-full" />
        <span className="animate-pulse bg-borderColor ml-auto w-5 h-5 rounded-full" />
        <span className="animate-pulse bg-borderColor w-5 h-5 rounded-full" />
      </div>
      <div
        className={
          "grid grid-cols-[max-content_1fr] gap-3 items-center relative w-full"
        }   
      >
        <span className="animate-pulse bg-borderColor w-8 h-8 rounded-full" />
        <div className="flex flex-col gap-1">
          <span className="animate-pulse bg-borderColor w-5/6 h-4 rounded-lg" />
          <span className="animate-pulse bg-borderColor w-1/2 h-3 rounded-lg" />
        </div>
      </div>
      <span className="animate-pulse bg-borderColor w-full h-14 rounded-lg" />

      <div className={"flex justify-between items-center mt-auto"}>
        <div className={"flex flex-wrap gap-0.5"}>
          <span className="animate-pulse bg-borderColor w-5 h-5 rounded-full" />
          <span className="animate-pulse bg-borderColor w-5 h-5 rounded-full" />
          <span className="animate-pulse bg-borderColor w-5 h-5 rounded-full" />
          <span className="animate-pulse bg-borderColor basis-full w-full h-3 flex items-center relative mt-1 rounded-lg" />
        </div>
        <span className="animate-pulse bg-borderColor w-[70px] h-[26px] rounded-lg relative overflow-hidden" />
      </div>
    </div>
  );
}
