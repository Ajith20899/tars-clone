"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import PasswordInput from "@/app/_library/password";
import { validatePassword } from "@/validation";
import { Label } from "@/components/ui/label";

export default function Password() {
  const [passwordDetails, setPasswordDetails] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { confirmPassword, newPassword, password } = passwordDetails || {};

  const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target?.value || "";
    let name = event.target?.name || "";
    let result = validatePassword(value);

    setPasswordDetails((p) => ({
      ...p,
      [name]: value,
    }));

    if (result.length) {
      setErrorMsg((p) => ({
        ...p,
        [name]: result,
      }));
      return;
    }

    setErrorMsg((p) => ({
      ...p,
      [name]: "",
    }));
  };

  const passwordBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    let value = event.target?.value || "";
    let name = event.target?.name || "";

    let result = validatePassword(value);
    if (result.length) {
      setErrorMsg((p) => ({
        ...p,
        [name]: result,
      }));
      return;
    }
  };

  const saveHandler = () => {
    if (newPassword === password) {
      setErrorMsg((p) => ({
        ...p,
        password: "Current password must differ from New password.",
      }));
    }
    if (confirmPassword !== newPassword) {
      setErrorMsg((p) => ({
        ...p,
        confirmPassword: "New password and Confirm password cannot differ.",
      }));
    }

    // setIsShowOtp(true);
  };

  return (
    <div className="flex flex-col gap-2 p-5">
      <Label className={"font-semibold text-textPrimary"}>{"Password"}</Label>
      <small>
        {"Please enter your current password to change your password"}
      </small>
      <div className="max-w-sm">
        <PasswordInput
          value={password}
          changeHandler={onChangeEvent}
          error={errorMsg.password}
          passwordBlurHandler={passwordBlurHandler}
          inputClassName="pr-10"
          name="password"
          placeholder="Password"
          regularInput
          className="mt-4"
        />
        <PasswordInput
          value={newPassword}
          changeHandler={onChangeEvent}
          error={errorMsg.newPassword}
          passwordBlurHandler={passwordBlurHandler}
          inputClassName="pr-10"
          name="newPassword"
          placeholder="New password"
          regularInput
          className="mt-4"
        />
        <PasswordInput
          value={confirmPassword}
          changeHandler={onChangeEvent}
          error={errorMsg.confirmPassword}
          passwordBlurHandler={passwordBlurHandler}
          inputClassName="pr-10"
          name="confirmPassword"
          placeholder="Confirm password"
          regularInput
          className="mt-4"
        />
        <Button onClick={saveHandler} className="w-full mt-7">
          Continue
        </Button>
      </div>
    </div>
  );
}
