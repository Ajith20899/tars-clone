"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Dropdown({
  label,
  list,
  value,
  search,
  className,
  selectHandler
}: {
  list: Record<"value" | "label", string>[];
  value: string;
  selectHandler: (s: string) => void;
  className?: string;
  search?: boolean;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {label && <Label>{label}</Label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className={cn("px-3 text-textSecondary font-normal hover:text-textSecondary hover:bg-transparent", value.length && "text-textPrimary hover:text-textPrimary")} asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between rounded-md", value && "text-textPrimary")}
          >
            {value
              ? list.find((d) => d.value === value)?.label
              : "Select..."}
            <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popper-anchor-width)] p-0">
          <Command>
            {search &&
            <CommandInput placeholder="Search..." />
}
            <CommandEmpty>No value found.</CommandEmpty>
            <CommandGroup>
              {list.map((d) => (
                <CommandItem
                  key={d.value}
                  value={d.value}
                  onSelect={(currentValue) => {
                    selectHandler(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="justify-between cursor-pointer"
                >
                  {d.label}
                  <Check
                    className={cn(
                      "ml-2 h-4 w-4",
                      value === d.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
