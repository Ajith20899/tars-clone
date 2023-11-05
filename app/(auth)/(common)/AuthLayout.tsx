import React, { MouseEventHandler } from "react";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import ImageFallBack from "@/app/_library/image";

export default function AuthLayout({
  title,
  subTitle,
  needBackIcon,
  children,
  className,
  clickHandler,
  headerClassName,
}: {
  title: string;
  subTitle?: string;
  needBackIcon?: boolean;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  clickHandler?: MouseEventHandler<SVGElement>;
}) {
  return (
    <div
      className={cn(
        "w-full h-full max-w-xs flex flex-col justify-center mx-auto gap-2 md:pt-2 md:justify-start td:px-3 td:py-4",
        className
      )}
    >
      <ImageFallBack
        src={"/udc.svg"}
        alt="udc"
        className="w-12 h-8 mx-auto mb-8 td:mb-2"
      />
      {needBackIcon && <ArrowLeft onClick={clickHandler} className="cursor-pointer mb-5 ml-[-4px]" />}
      <h1 className={cn("text-lg font-semibold text-textPrimary", headerClassName)}>{title}</h1>
      {subTitle && <small>{subTitle}</small>}
      {children}
    </div>
  );
}
