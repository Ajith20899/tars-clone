import React from "react";

export default function ProfileSvg({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.00027 7.99121C2.8426 7.99121 1 8.31744 1 9.62394C1 10.9304 2.83091 11.2684 5.00027 11.2684C7.15793 11.2684 9 10.9416 9 9.63563C9 8.32966 7.16962 7.99121 5.00027 7.99121Z"
        fill={fill || "rgba(161, 163, 178, 0.5)"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.00017 6.12771C6.41613 6.12771 7.56376 4.97954 7.56376 3.56359C7.56376 2.14764 6.41613 1 5.00017 1C3.58422 1 2.43605 2.14764 2.43605 3.56359C2.43127 4.97476 3.57147 6.12293 4.98211 6.12771H5.00017Z"
        fill={fill || "rgba(161, 163, 178, 0.5)"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
