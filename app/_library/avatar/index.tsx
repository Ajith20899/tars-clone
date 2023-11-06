"use client";

import React, { useEffect, useRef, useState } from "react";

import { PenSquare } from "lucide-react";

import ImageFallBack from "@/app/_library/image";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { GoogleSpinner } from "@/app/_library/loader";

interface IAvatarEditProps {
  url: string;
  isLoading?: boolean;
  imageHandler?: (file?: File) => void;
  className?: string;
}

export default function AvatarEdit(props: IAvatarEditProps) {
  const { url, className, isLoading, imageHandler } = props;

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [localUrl, setLocalUrl] = useState(url);

  const optionsWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setLocalUrl(url);
  }, [url]);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (
        e.target !== optionsWrapperRef.current &&
        isOptionsOpen &&
        e.target !== imageRef.current
      ) {
        setIsOptionsOpen(false);
        return;
      }
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [optionsWrapperRef, imageRef, isOptionsOpen]);

  const uploadImageHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    // e.preventDefault();
    let input = document.createElement("input");
    if (!input) return;

    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e: any) => {
      let url = URL.createObjectURL(e.target.files[0]);
      imageHandler?.(e.target.files[0]);
      setLocalUrl(url);
    };

    input.click();
  };

  const removeImageHandler = () => {
    setLocalUrl("");
    imageHandler?.();
  };

  return (
    <div className={cn(className, "relative")}>
      {!!localUrl?.length ? (
        <ImageFallBack
          src={localUrl}
          alt=""
          priority
          loading={"eager"}
          className="w-20 h-20 overflow-hidden rounded-full"
        />
      ) : (
        <ImageFallBack
          src={"/upload_image.svg"}
          alt=""
          onClick={uploadImageHandler}
          className="w-20 h-20 overflow-hidden rounded-full cursor-pointer"
        />
      )}
      {!!localUrl?.length && (
        <div className="absolute bottom-0 right-[-12px] w-[18px] h-[18px]">
          {isLoading ? (
            <GoogleSpinner />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <PenSquare color="hsl(var(--primary))" size={"17"} strokeWidth={2.5} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Edit Image</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={uploadImageHandler}
                >
                  Change
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={removeImageHandler}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}
    </div>
  );
}
