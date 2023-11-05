"use client";

import React, { useState } from "react";

import AvatarEdit from "@/app/_library/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AuthLayout from "../(common)/AuthLayout";

export default function CompleteProfile() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    username: "",
  });

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
    setFormError((p) => ({
      ...p,
      [event.target.name]: "",
    }));
  };

  return (
    <AuthLayout title="Complete Profile" headerClassName="text-center mt-4">
      <div className="w-20 h-20 mx-auto mt-3">
        <AvatarEdit
          className="w-full h-full"
          url=""
          imageHandler={() => {}}
          isLoading={false}
        />
      </div>
      <form className="flex flex-col gap-3 mt-4 md:h-full">
        {/** name */}

        <Input
          name="name"
          type="text"
          id="name"
          label="Name"
          error={formError.name}
          placeholder="Enter name"
          value={userDetails.name}
          onChange={inputHandler}
        />

        {/** username */}

        <Input
          name="username"
          type="text"
          id="username"
          label="username"
          error={formError.username}
          placeholder="Username"
          value={userDetails.username}
          onChange={inputHandler}
        />

        <Button className="w-full mt-5 rounded-full">
          <span className="ml-2">Save</span>
        </Button>
        <Button
          variant={"ghost"}
          className="w-full rounded-full text-primary hover:text-primary"
        >
          <span className="ml-2">Skip</span>
        </Button>
      </form>
    </AuthLayout>
  );
}
