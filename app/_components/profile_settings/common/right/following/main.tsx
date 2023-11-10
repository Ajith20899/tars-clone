"use client";

import React from "react";

import { MoreVertical } from "lucide-react";

import { Label } from "@/components/ui/label";

import ImageFallBack from "@/app/_library/image";
import Popup from "@/app/_library/popup";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Main({
  items,
  fetchHandler,
}: {
  items: any;
  fetchHandler: any;
}) {
  const messageHandler = () => {};

  const deleteHandler = () => {};

  const blockHandler = () => {};

  console.log("items ", items);
  

  return (
    <div className="flex flex-wrap gap-5 p-5 overflow-auto max-h-[calc(100vh-98px)]">
      {items?.map((d: any) => (
        <div className="w-[320px] flex gap-2 p-3 rounded-xl items-start border border-lightBorder">
          <ImageFallBack
            src={d.profilePicUrl}
            alt={d.username}
            className="w-9 h-9"
          />
          <div className="flex flex-col gap-1">
            <Label className="leading-5 text-textPrimary">{d.username}</Label>
            <small className="block">{d?.company?.catchPhrase}</small>
          </div>
          <Popup
            title="Options"
            className={"ml-auto"}
            trigger={<MoreVertical size={20} className="cursor-pointer" />}
          >
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={messageHandler}
            >
              Message
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={deleteHandler}
            >
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer text-red-500"
              onClick={blockHandler}
            >
              Block
            </DropdownMenuItem>
          </Popup>
        </div>
      ))}
    </div>
  );
}
