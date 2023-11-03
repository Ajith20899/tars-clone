"use client";

import React, { useEffect, useRef, useState } from "react";

import ImageFallBack from "@/library/image";
import { cn } from "@/lib/utils";

import { useIsMobile } from "@/hooks/useIsMobile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IAvatarEditProps {
  url: string;
  isLoading?: boolean;
  imageHandler: (file?: File) => void;
  className?: string;
}

export default function AvatarEdit(props: IAvatarEditProps) {
  const { url, className, isLoading, imageHandler } = props;

  const isMobile = useIsMobile();

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
    e.preventDefault();
    let input = document.createElement("input");
    if (!input) return;

    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e: any) => {
      let url = URL.createObjectURL(e.target.files[0]);
      imageHandler(e.target.files[0]);
      setLocalUrl(url);
    };

    input.click();
  };

  const removeImageHandler = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    setLocalUrl(localUrl);
    imageHandler();
    e.preventDefault();
  };

  return (
    <div className={cn(className)}>
      {!!localUrl?.length ? (
        <ImageFallBack
          src={localUrl}
          alt=""
          priority
          loading={"eager"}
          className="w-20 h-20"
        />
      ) : (
        <ImageFallBack
          src={"/icons/upload-image.svg"}
          alt=""
          onClick={uploadImageHandler}
          className="w-20 h-20"
        />
      )}
      {!!localUrl?.length && (
        <div>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                
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
