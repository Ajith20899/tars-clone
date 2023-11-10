import React from "react";

import dynamic from "next/dynamic";

import { FolderEdit } from "lucide-react";

import { Input } from "@/components/ui/input";

import { personalInfoDetails } from "@/app/_components/profile_settings/constants";

import InfoTitleWrap from "../common";
import Link from "next/link";

const FormComp = dynamic(() => import("./form"));

export default function PersonalInfo({ isEdit }: { isEdit: boolean }) {
  let userDetails: any = {
    followingCount: 0,
    profilePicUrl: "https://",
    followersCount: 0,
    createdAt: null,
    username: "name",
    userPrivacyType: "public",
    preferredMarkets: [""],
    country: "india",
    fullname: "fullname",
    emailId: "ajith@gmail.com",
    phone: "1382189",
    theme: "light",
    notificationStatus: "allow",
  };

  return (
    <InfoTitleWrap
      title="Personal info"
      subTitle="This information will be displayed publicly so be careful what you share"
    >
      {/* <Main /> */}
      {!isEdit ? (
        <div className="flex flex-wrap max-w-[940px] gap-5">
          <span className="basis-full">
            <Link href={"/profile/general_info/edit"}>
              <FolderEdit
                className="ml-auto cursor-pointer"
                color="hsl(var(--primary))"
                size={"20px"}
              />
            </Link>
          </span>
          {personalInfoDetails.map(
            (d) =>
              !!userDetails[d.name] && (
                <Input
                  className="w-[300px] md:w-full"
                  inputClassName="border-transparent bg-backgroundShade text-textPrimary"
                  key={d.name}
                  label={d.title}
                  name={d.name}
                  placeholder={d.placeholder}
                  value={(userDetails[d.name] || "") as string}
                  disabled={!isEdit}
                />
              )
          )}
        </div>
      ) : (
        <FormComp />
      )}
    </InfoTitleWrap>
  );
}
