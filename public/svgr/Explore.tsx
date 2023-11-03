import React from "react";

export default function ExploreSvg({
  fill,
  circleFill,
  className,
}: {
  fill?: string;
  circleFill?: string;
  className?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_5465_13574"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <circle cx="10.5" cy="10.5" r="10.5" fill={circleFill || "white"} />
      </mask>
      <g mask="url(#mask0_5465_13574)">
        <path
          d="M10.5 0C4.69876 0 0 4.69876 0 10.5C0 16.296 4.69876 21 10.5 21C16.3012 21 21 16.296 21 10.5C21 4.69876 16.3012 0 10.5 0ZM12.7995 12.7995L4.19998 16.8L8.20048 8.20048L16.8 4.19998L12.7995 12.7995Z"
          fill={fill || "rgba(161, 163, 178, 0.5)"}
        />
      </g>
    </svg>
  );
}
