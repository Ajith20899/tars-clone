import React from "react";

import { cn } from "@/lib/utils";

import UdcSvg from "@/public/svgr/Udc";

import ImageFallBack from "@/app/_library/image";

export default function AuthLayout({
  title,
  subTitle,
  backIcon,
  children,
  className,
  headerClassName,
}: {
  title: string;
  subTitle?: string;
  backIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "w-full h-full max-w-xs flex flex-col justify-center mx-auto gap-2 md:pt-2 md:justify-start td:px-3 td:py-4",
        className
      )}
    >
      <UdcSvg 
        className="w-12 h-8 mx-auto mb-8 td:mb-2"
      />
      {backIcon}
      <h1 className={cn("text-lg font-semibold text-textPrimary", headerClassName)}>{title}</h1>
      {subTitle && <small>{subTitle}</small>}
      {children}
    </div>
  );
}
