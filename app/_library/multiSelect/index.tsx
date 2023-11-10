"use client";

import * as React from "react";

import { ChevronsUpDown, X } from "lucide-react";

import { Command as CommandPrimitive } from "cmdk";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

import { Label } from "@/components/ui/label";

type Framework = Record<"value" | "label", string>;

export function MultiSelect({
  list,
  placeholder,
  defaultSelects,
  className,
  selectHandler,
}: {
  list: Framework[];
  placeholder: string;
  defaultSelects: Framework[];
  selectHandler: (selected: Framework[]) => void;
  className?: string;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>(defaultSelects);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    selectHandler(selected);
  }, [selected]);

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    []
  );

  const selectables =
    selected?.length !== list?.length
      ? list.filter(({ value }) =>
          selected.length ? selected.some((d) => d.value !== value) : true
        )
      : [
          {
            label: "No results",
            value: "",
          },
        ];

  return (
    <Command
      onKeyDown={handleKeyDown}
      className={cn("overflow-visible bg-transparent", className)}
    >
      <Label className="mb-2">Dropdown</Label>
      <div
        tabIndex={-1}
        className="min-h-[40px] grid grid-cols-[1fr_max-content] items-center text-sm border rounded-md border-borderColor group border-input ring-offset-background"
      >
        <div
          onClick={() => inputRef.current?.focus()}
          className={cn("p-[0.4rem] pl-3 cursor-pointer flex flex-wrap gap-1.5 min-h-[38px] h-full", selected?.length && "pl-[.4rem]")}
        >
          {selected?.map((data) => {
            return (
              <Badge
                key={data.value}
                variant="secondary"
                className="text-sm p-[.1rem] text-textSecondary"
              >
                {data.label}
                <button
                  className="ml-1 rounded-full outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(data);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(data)}
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder || "Please select..."}
            className="cursor-pointer flex-1 bg-transparent outline-none text-textPrimary placeholder:text-muted-foreground"
          />
        </div>
        <ChevronsUpDown className="w-4 h-4 mx-2 opacity-30 shrink-0" />
      </div>
      {open && selectables.length > 0 ? (
        <div className="relative translate-y-1">
          <div className="absolute top-0 z-10 w-full border rounded-md shadow-md outline-none border-lightBorder bg-popover animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((data) => {
                return (
                  <CommandItem
                    disabled={!data.value?.length}
                    key={data.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(value) => {
                      setInputValue("");
                      setSelected((prev) => [...prev, data]);
                    }}
                    className={
                      !data.value?.length ? "cursor-auto" : "cursor-pointer"
                    }
                  >
                    {data.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        </div>
      ) : null}
    </Command>
  );
}
