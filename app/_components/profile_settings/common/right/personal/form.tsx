"use client";

import React, { MouseEvent, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { personalInfoDetails } from "@/app/_components/profile_settings/constants";
import { personalValidation } from "@/app/_components/profile_settings/validation";
import { MultiSelect } from "@/app/_library/multiSelect";

export default function FormComp() {
  let data = {
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

  const { push } = useRouter();

  const [userDetails, setUserDetails] = useState<any>(data);
  const [isEdit, setIsEdit] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    fullname: "",
    username: "",
    preferredMarkets: "",
    userPrivacyType: "",
  });
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);

  const prevUserDetails = useRef(userDetails);

  // const dispatch = useDispatch();

  //   useEffect(() => {
  //     setUserDetails(data);
  //     prevUserDetails.current = data;
  //   }, [data]);

  useEffect(() => {
    if (!isEdit) return;

    let timer = setTimeout(async () => {
      setIsUsernameLoading(true);
      //   let result = await getRequest(profileUrls.userNameExistURL, {
      //     username: userDetails.username,
      //     type: "username",
      //   });

      //   if (result?.data?.isExist) {
      //     setErrorMsg({
      //       ...errorMsg,
      //       username: "Username already exist",
      //     });
      //   }

      setIsUsernameLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [userDetails.username]);

  const closeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    push("/profile/general_info");
  };

  const onChangeEvent = async (value: string | string[], name: string) => {
    setUserDetails((p: any) => ({
      ...p,
      [name]: value,
    }));
    setErrorMsg((p) => ({
      ...p,
      [name]: "",
    }));
  };

  // const multiSelectHandler = (data: any, _list: any) => {
  //   onChangeEvent(data, "preferredMarkets");
  // };

  const saveHandler = async () => {
    try {
      if (
        JSON.stringify(userDetails) === JSON.stringify(prevUserDetails.current)
      ) {
        setIsEdit(false);
        return;
      }

      setIsSaveLoading(true);
      let res = personalValidation(userDetails);
      if (res?.msg?.length) {
        setErrorMsg((p) => ({
          ...p,
          [res.name]: res.msg,
        }));
        setIsSaveLoading(false);
        return;
      }
      //   let { errorMessage } = await putRequest(
      //     profileUrls.updateUserDetailsURL,
      //     userDetails
      //   );

      //   if (errorMessage) throw errorMessage;

      //   dispatch(
      //     updateUserDetails({
      //       data: userDetails,
      //       loader: {},
      //     })
      //   );
    } catch {}
    prevUserDetails.current = userDetails;
    setIsSaveLoading(false);
    setIsEdit(false);
  };

  return (
    <form>
      {personalInfoDetails.slice(0, 4).map((d) => {
        let name: string = d.name;
        return (
          <React.Fragment key={name}>
            {name === "preferredMarkets" ? (
              <MultiSelect />
            ) : name === "userPrivacyType" ? (
              <MultiSelect />
            ) : (
              <Input
                type={name === "phone" ? "number" : "text"}
                label={d.title}
                name={name}
                placeholder={d.placeholder}
                value={(userDetails[name] || "") as string}
                onChange={(e) => onChangeEvent(e.target.value, name)}
                error={(errorMsg as any)[d.name]}
              />
            )}
          </React.Fragment>
        );
      })}
      <div className="flex gap-3 mt-4">
        <Button className="w-24" variant={"secondary"} onClick={closeHandler}>
          {"Cancel"}
        </Button>
        <Button
          className="w-24"
          disabled={isUsernameLoading || isSaveLoading}
          onClick={saveHandler}
        >
          {"Save"}
        </Button>
      </div>
    </form>
  );
}
