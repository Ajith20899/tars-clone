"use client";

import React, { MouseEvent, ChangeEvent, useState } from "react";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import OtpInput from "@/app/_library/otp";

import AuthLayout from "../(common)/AuthLayout";

import { validateEmail } from "@/validation";

export default function ForgotPassword() {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [otpDetails, setOtpDetails] = useState({
    open: false,
    value: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const blurHandler = () => {
    if (!validateEmail(email)) {
      setError("Enter valid email");
      return;
    }

    setError("");
  };

  const handleOtpComplete = (otp: string) => {
    // Handle the completed OTP (e.g., send it to the server)
    setOtpDetails({
      open: true,
      value: otp,
    });
  };

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Enter valid email");
      return;
    }

    setError("");

    setOtpDetails((p) => ({
      ...p,
      open: true,
    }));
  };

  return otpDetails.open ? (
    <AuthLayout
      title="OTP Verification"
      subTitle={`We have sent a Verification code to your registered
      email ${email}`}
      needBackIcon
      clickHandler={() => setOtpDetails({
        open: false,
        value: '',
      })}
    >
      <OtpInput numberOfInputs={6} onComplete={handleOtpComplete} className="mt-4" />

      <Button className="w-full mt-5 rounded-full" disabled={otpDetails.value.length < 6} onClick={() => push('/reset-password')}>
        Next
      </Button>
    </AuthLayout>
  ) : (
    <AuthLayout
      title="Forgot Password"
      subTitle="Enter your registered email below to request a password reset."
      needBackIcon
      clickHandler={() => push(`/login`)}
    >
      <Input
        name="email"
        type="email"
        id="email"
        label="Email or Phone"
        error={error}
        placeholder="Email or Phone"
        value={email}
        onBlur={blurHandler}
        onChange={onChangeHandler}
        className="mt-4"
      />

      <Button className="w-full rounded-full mt-7 md:mt-auto md:mb-8" onClick={submitHandler}>
        Get OTP
      </Button>
    </AuthLayout>
  );
}
