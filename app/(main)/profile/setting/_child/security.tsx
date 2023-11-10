"use client";

import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ImageFallBack from "@/app/_library/image";

export default function security() {
  const [isSelected, setIsSelected] = useState(false);
  const [isQrSelected, setIsQrSelected] = useState(false);

  return (
    <div className="flex flex-col gap-2 p-5">
      <Label className={"font-semibold text-textPrimary"}>
        {"Security"}
      </Label>
      <small>
        {"Please enter your current password to change your password"}
      </small>
      <div className="flex mt-10 gap-[30px_50px] flex-wrap">
        <div className="w-96">
          <div className="flex items-center justify-between">
            <Label htmlFor="twofactorAuthentication">
              Two-Factor Authentication
            </Label>
            <Switch id="twofactorAuthentication" />
          </div>
          {isSelected && (
            <ol className="w-full p-5 pb-10 bg-primary/10 flex flex-col gap-5 rounded-lg">
              <li className="text-sm marker:p-0.5 marker:bg-primary/50">Install authenticator app</li>
              <li className="text-sm marker:p-0.5 marker:bg-primary/50">Scan the QR code</li>
              <li className="text-sm marker:p-0.5 marker:bg-primary/50">Enter the OTP</li>
              <li className="text-sm marker:p-0.5 marker:bg-primary/50">Verify</li>
            </ol>
          )}
        </div>
        {isSelected && (
          <div className="p-5 border-2 border-lightBorder rounded-lg w-[250px] h-[250px] md:w-full">
            {isQrSelected ? (
              <>QRcode</>
            ) : (
              <div onClick={() => setIsQrSelected(true)}>
                <ImageFallBack
                  src={"/icons/qrCode.svg"}
                  alt="qrcode"
                  className="w-14 h-14"
                />
                <p className="w-[150px]">Click here to generate QR code</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
