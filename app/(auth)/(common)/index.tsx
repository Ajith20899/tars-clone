import React from "react";
import { ArrowLeft } from "lucide-react";

import ImageFallBack from "@/library/image";

import { cn } from "@/lib/utils";

export default function AuthLayout({
  title,
  subTitle,
  needBackIcon,
  children,
  className,
}: {
  title: string;
  subTitle?: string;
  needBackIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full max-w-xs flex flex-col justify-center m-auto gap-2", className)}>
      <ImageFallBack src={"/udc.svg"} alt="udc" className="w-12 h-4 mx-auto mb-8" />
      {needBackIcon && <ArrowLeft />}
      <h1 className="text-lg font-semibold text-textPrimary">{title}</h1>
      {subTitle && <small>{subTitle}</small>}
      {children}
    </div>
  );
}
