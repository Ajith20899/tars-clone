"use client";

import React, { ForwardedRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const ImageFallBack = React.forwardRef(
  (
    {
      src,
      alt,
      className,
      priority,
      loading,
      onClick,
    }: {
      src: string;
      alt: string;
      priority?: boolean;
      onClick?: React.MouseEventHandler<HTMLImageElement>;
      loading?: "eager" | "lazy";
      className?: string;
    },
    ref?: ForwardedRef<HTMLDivElement>
  ) => {
    // const isLocal = isLocalUrl(src);
    // const imageProps = isLocal ? await LocalImage(src) : await RemoteImage(src);

    return (
      <div className={cn("relative", className)} ref={ref}>
        <Image
          // src={imageProps.src ? src : 'no-image'}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="50vw"
          loading={loading}
          onClick={onClick}
          // placeholder="blur"
          // blurDataURL={imageProps.src}
        />
      </div>
    );
  }
);

ImageFallBack.displayName = "Image";

export default ImageFallBack;
