"use client";

import React, { MouseEventHandler, useMemo, useRef, useState } from "react";

import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";

import OtpInput from "@/app/_library/otp";
import Modal from "@/app/_library/modal";

export default function TwoStepVerification({
  title,
  subTitle,
  submitHandler,
}: {
  title: string;
  subTitle: string;
  submitHandler: MouseEventHandler<HTMLButtonElement>;
}) {
  const [otpDetails, setOtpDetails] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  const spanRef = useRef<HTMLSpanElement | null>(null);
  var timerRef = useRef<NodeJS.Timeout>();

  const resendHandler = () => {
    if (resendDisabled) return;

    setResendDisabled(true);

    let count = 30;

    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      count -= 1;

      if (count === 0) {
        setResendDisabled(false);
        clearInterval(timerRef.current);
        return;
      }

      if (spanRef.current) spanRef.current.innerHTML = `${count}s left`;
    }, 1000);
  };

  const handleOtpComplete = (otp: string) => {
    // Handle the completed OTP (e.g., send it to the server)
    setOtpDetails(otp);
  };
  
  const commonElements = useMemo(
    () => (
      <div className="relative grid items-center w-full max-w-sm gap-2 my-2 md:my-5">
        <Label htmlFor="otp" className="text-xs">
          OTP code
        </Label>
        <OtpInput
          numberOfInputs={6}
          onComplete={handleOtpComplete}
          className="mt-1"
        />
        <p className="mt-2 text-xs">
          {`Didn't receive the OTP?`}
          <span
            ref={spanRef}
            className={cn(
              `ml-1 cursor-pointer text-primary font-semibold`,
              resendDisabled && `pointer-events-none`
            )}
            onClick={resendHandler}
          >
            {!resendDisabled && "Resend OTP"}
          </span>
        </p>
      </div>
    ),
    [resendDisabled, spanRef]
  );

  return (
    <Modal
      triggererName={title}
      title={"Two-step verification"}
      subTitle={subTitle}
      btnName="Save Changes"
      disabled={otpDetails.length < 6}
      clickHandler={submitHandler}
    >
      {commonElements}
    </Modal>
  );
}
