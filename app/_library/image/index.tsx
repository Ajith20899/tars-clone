"use client";

import React, { SyntheticEvent, ForwardedRef } from "react";
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
      <div className={cn("relative rounded-full overflow-hidden", className)} ref={ref}>
        <Image
          // src={imageProps.src ? src : 'no-image'}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={loading}
          onClick={onClick}
          onError={(eve: SyntheticEvent<HTMLImageElement>) => (eve.target as HTMLImageElement).src = '/user.png'}
          // placeholder="blur"
          // blurDataURL={imageProps.src}
        />
      </div>
    );
  }
);

ImageFallBack.displayName = "Image";

export default ImageFallBack;
