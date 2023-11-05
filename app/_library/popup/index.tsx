"use client";

import React, { MouseEventHandler } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useIsMobile } from "@/hooks/useIsMobile";

export default function Popup({
  triggererName,
  title,
  subTitle,
  btnName,
  clickHandler,
  children,
  disabled,
  loading,
}: {
  triggererName: string;
  title: string;
  subTitle: string;
  btnName?: string;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}) {
  
  const isMobile = useIsMobile();

  return isMobile ? (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full mt-5 rounded-full">{triggererName}</Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>{title || "Two-step verification"}</SheetTitle>
          <SheetDescription>{subTitle}</SheetDescription>
        </SheetHeader>
        {children}
        {btnName && (
          <SheetFooter>
            <Button
              className="w-full mt-5"
              type="submit"
              onClick={clickHandler}
              disabled={disabled}
            >
              {btnName || "Save changes"}
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-5 rounded-full">{triggererName}</Button>
      </DialogTrigger>
      <DialogContent className="w-96 sm:max-w-[425px] rounded-lg">
        <DialogHeader className="text-left">
          <DialogTitle>{title || "Two-step verification"}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="mt-4">
          <Button type="submit" onClick={clickHandler} disabled={disabled}>
            {btnName || "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
