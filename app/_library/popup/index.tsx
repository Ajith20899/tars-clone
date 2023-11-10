import React from "react";

import { PenSquare } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Popup({
  children,
  trigger,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  trigger?: React.ReactNode;
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("outline-none", className)}>
        {trigger || (
          <PenSquare
            color="hsl(var(--primary))"
            size={"17"}
            strokeWidth={2.5}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[10px]">
        {title && (
          <>
            <DropdownMenuLabel>{title || "Edit Image"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
