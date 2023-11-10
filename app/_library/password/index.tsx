"use client";

import React, { ChangeEventHandler, FocusEventHandler, useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PasswordInput({
  className,
  passwordBlurHandler,
  value,
  inputClassName,
  name,
  placeholder,
  changeHandler,
  regularInput,
  error,
}: {
  className?: string;
  passwordBlurHandler?: FocusEventHandler<HTMLInputElement>;
  value: string;
  inputClassName?: string;
  name?: string;
  placeholder?: string;
  regularInput?: boolean;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}) {
  const [eyeOpened, setEyeOpened] = useState(false);

  return (
    <div
      className={cn(
        "relative grid items-center w-full max-w-sm gap-2 mt-1",
        className
      )}
    >
      <Label htmlFor="password">{placeholder}</Label>
      <div className="relative">
        <Input
          onBlur={passwordBlurHandler}
          name={name || "password"}
          type={!eyeOpened ? "password" : "text"}
          // id={"password"}
          label={"Password"}
          placeholder={placeholder || "Password"}
          inputClassName={inputClassName}
          value={value}
          regularInput
          onChange={changeHandler}
        />
        <div className="absolute top-0 right-0 flex items-center w-8 h-full">
          {eyeOpened ? (
            <Eye
              onClick={() => setEyeOpened(false)}
              className="cursor-pointer"
              size={"18"}
              color="grey"
            />
          ) : (
            <EyeOff
              onClick={() => setEyeOpened(true)}
              className="cursor-pointer"
              size={"18"}
              color="grey"
            />
          )}
        </div>
      </div>
      {error && (
        <small className="absolute bottom-[-20px] right-0 text-xs text-red-500">
          {error}
        </small>
      )}
    </div>
  );
}
