"use client";

import React, { FocusEvent, MouseEvent, ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import AuthLayout from "../(common)/AuthLayout";

import { validatePassword } from "@/validation";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const list = [{
    content: "New Password",
    key: "password"
}, {
    content: "Confirm Password",
    key: "confirmPassword"
}];

export default function ResetPassword() {
  const { push } = useRouter();

  const [eyeOpened, setEyeOpened] = useState<{
    [key: string]: boolean;
  }>({
    password: false,
    confirmPassword: false,
  });
  const [passwordDetails, setPasswordDetails] = useState<{
    [key: string]: string;
  }>({
    password: "",
    confirmPassword: "",
  });
  const [errorDetails, setErrorDetails] = useState<{
    [key: string]: string;
  }>({
    password: "",
    confirmPassword: "",
  });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordDetails((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
    setErrorDetails((p) => ({
      ...p,
      [e.target.name]: "",
    }));
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    let err = validatePassword(
      e.target.name === "password"
        ? passwordDetails.password
        : passwordDetails.confirmPassword
    );

    if (err.length) {
      setErrorDetails((p) => ({
        ...p,
        [e.target.name]: err,
      }));
      return;
    }
  };

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let err1 = validatePassword(passwordDetails.password);
    let err2 = validatePassword(passwordDetails.confirmPassword);

    if(passwordDetails.password !== passwordDetails.confirmPassword) {
        err2 = "Confirm password should match the new password";
    } 

    if (err1.length || err2.length) {
      setErrorDetails((p) => ({
        ...p,
        password: err1,
        confirmPassword: err2,
      }));
      return;
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subTitle="Enter your registered email below to request a password reset."
      needBackIcon
      clickHandler={() => push(`/login`)}
    >
      {list.map((d, index) => (
        <div
          key={index}
          className={cn(`relative grid items-center w-full max-w-sm gap-2 mt-2`, index === 0 && "mt-4")}
        >
          <Label htmlFor={d.key}>{d.content}</Label>
          <div className="relative">
            <Input
              onBlur={blurHandler}
              name={d.key}
              type={!eyeOpened.password ? "password" : "text"}
              id={d.key}
              placeholder={d.content}
              className="pr-10"
              value={passwordDetails[`${d}`]}
              regularInput
              onChange={inputHandler}
            />
            <div className="absolute top-0 right-0 flex items-center w-8 h-full">
              {eyeOpened[`${d.key}`] ? (
                <Eye
                  onClick={() =>
                    setEyeOpened((p) => ({
                      ...p,
                      [d.key]: !eyeOpened[`${d.key}`],
                    }))
                  }
                  className="cursor-pointer"
                  size={"18"}
                  color="grey"
                />
              ) : (
                <EyeOff
                  onClick={() =>
                    setEyeOpened((p) => ({
                      ...p,
                      [d.key]: !eyeOpened[`${d.key}`],
                    }))
                  }
                  className="cursor-pointer"
                  size={"18"}
                  color="grey"
                />
              )}
            </div>
          </div>
          {errorDetails?.[`${d.key}`] && (
            <small className="absolute bottom-[-20px] right-0 text-xs text-red-500">
              {errorDetails[`${d.key}`]}
            </small>
          )}
        </div>
      ))}

      <Button className="w-full rounded-full mt-7 md:mt-auto md:mb-8" onClick={submitHandler}>
        Get OTP
      </Button>
    </AuthLayout>
  );
}
