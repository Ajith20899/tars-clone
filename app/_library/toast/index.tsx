"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { X } from "lucide-react";

import { Label } from "@radix-ui/react-menu";

import { cn } from "@/lib/utils";

export default function Toast({
  variant,
  className,
  message,
  cancelHandler
}: {
  variant: "error" | "success" | "warning" | "info";
  className?: string;
  message: string;
  cancelHandler: MouseEventHandler<SVGElement>;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setContent = () => {
    switch (variant) {
      case "error":
        return {
          color: "red",
          title: "Error",
        };
      case "success":
        return {
          color: "green",
          title: "Success",
        };
      case "warning":
        return {
          color: "yellow",
          title: "Warning",
        };
      case "info":
        return {
          color: "blue",
          title: "Info",
        };
    }
  };

  if(!isMounted) return <></>;

  return ReactDOM.createPortal(
    <div
      className={cn(
        `fixed p-2 right-[20px] bottom-5 w-[260px] min-h-[70px] shadow-xl rounded-lg bg-backgroundShade flex items-center gap-3
        }`,
        className
      )}
    >
      <span style={{ backgroundColor: setContent().color }} className={`block w-1 h-12 rounded-full`}></span>
      <div className="flex flex-col gap-1">
        <Label
          style={{ color: setContent().color }}
          className={`font-semibold`}
        >
          {setContent().title}
        </Label>
        <p className="text-sm">{message}</p>
      </div>
      <X onClick={cancelHandler} className="self-start ml-auto cursor-pointer" size={"20"} color="hsl(var(--textPrimary))" />
    </div>,
    document.body
  );
}
