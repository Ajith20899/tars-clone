"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  labelClassName?: string;
  label?: string;
  error?: string;
  regularInput?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      regularInput,
      inputClassName,
      labelClassName,
      className,
      type,
      label,
      error,
      ...props
    },
    ref
  ) => {
    return regularInput ? (
      <input
        autoComplete="off"
        type={type}
        className={cn(
          "text-textPrimary flex h-10 w-full rounded-md border border-borderColor bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-textPrimary disabled:cursor-not-allowed disabled:opacity-50",
          inputClassName
        )}
        ref={ref}
        {...props}
      />
    ) : (
      <div
        className={cn(
          "items-center grid w-full max-w-sm gap-2 relative",
          className
        )}
      >
        {label?.length && (
          <Label className={cn("capitalize", labelClassName)} htmlFor={label}>
            {label}
          </Label>
        )}
        <input
          autoComplete="off"
          type={type}
          className={cn(
            "text-textPrimary flex h-10 w-full rounded-md border border-borderColor bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-textPrimary disabled:cursor-not-allowed disabled:opacity-50",
            inputClassName
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <small className="absolute bottom-[-20px] right-0 text-xs text-red-500">
            {error}
          </small>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
