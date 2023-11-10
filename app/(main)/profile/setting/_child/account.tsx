"use client";

import React, { useRef } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { profileUrls } from "@/utils/api/urls";
import { putRequest } from "@/utils/api/httpClient";

const modes = [
  {
    name: "Light",
    key: "light",
  },
  {
    name: "Dark",
    key: "dark",
  },
  {
    name: "System",
    key: "auto",
  },
];

export default function Account() {
  let timerRef = useRef<NodeJS.Timeout>();

  const modeHandler = (key: string) => {
    // import('redux/profile/actions').then((req) => {
    //     dispatch(
    //         req.updateThemeDetails({
    //             theme: key,
    //         })
    //     );
    // });
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      try {
        let { errorMessage } = await putRequest(profileUrls.updateTheme, {
          theme: key,
        });
        if (errorMessage) throw errorMessage;
      } catch {}
    }, 700);
  };

  return (
    <div className="flex flex-col gap-2 p-5 max-w-[420px]">
      {/** Theme */}

      <Label className={"font-semibold text-textPrimary"}>
        {"Theme"}
      </Label>
      <small>
        {"Please enter your current password to change your password"}
      </small>
      <RadioGroup defaultValue="comfortable" className="flex gap-4 mt-3">
        {modes.map((d) => (
          <div
            key={d.key}
            className="flex items-center space-x-2 cursor-pointer"
            onMouseDown={() => modeHandler(d.key)}
            onClick={() => modeHandler(d.key)}
          >
            <RadioGroupItem value={d.key} id={d.key} />
            <Label className="cursor-pointer ml-[0!important] pl-2" htmlFor={d.key}>{d.name}</Label>
          </div>
        ))}
      </RadioGroup>

      {/** Notification */}

      <Label className={"font-semibold text-textPrimary mt-7"}>
        {"Notification"}
      </Label>
      <small>
        {"Please enter your current password to change your password"}
      </small>
      <div className="flex items-center justify-between mt-4">
        <Label htmlFor="profile-notification">Show notification</Label>
        <Switch id="profile-notification" />
      </div>
    </div>
  );
}
