"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { Eye, EyeOff } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import ImageFallBack from "@/app/_library/image";

import { validatePassword } from "@/validation";

import AuthLayout from "../(common)/AuthLayout";

import { ISignupDetails, SignupStages } from "./types";
import TwoStepVerification from "../(common)/TwoStepVerification";

export default function Signup() {
  const { push } = useRouter();

  const [signupDetails, setSignupDetails] = useState<ISignupDetails>({
    username: "",
    emailId: "arunkumar23797@gmail.com",
    password: "@Abdearun17",
    phone: "7708813324",
    country: "india",
    otp: "",
  });
  const [activeStage, setActiveStage] = useState(SignupStages.SIGNUP_FORM);
  const [eyeOpened, setEyeOpened] = useState(false);
  const [formError, setFormError] = useState({
    username: "",
    emailId: "",
    password: "",
    phone: "",
    country: "",
    otp: "",
  });
  const [agreed, setAgreed] = useState(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails({
      ...signupDetails,
      [event.target.name]: event.target.value,
    });
    setFormError((p) => ({
      ...p,
      [event.target.name]: "",
    }));
  };

  const passwordBlurHandler = () => {
    let result = validatePassword(signupDetails.password);
    if (result.length) {
      setFormError((p) => ({
        ...p,
        password: result,
      }));
      return;
    }
  };

  const checkValidation = () => {
    const { username, password } = signupDetails;
    if (!(username?.length > 0)) {
      setFormError((p) => ({
        ...p,
        username: "Please fill username",
      }));
      return false;
    }

    let passwordErr = validatePassword(password);

    if (passwordErr?.length) {
      setFormError((p) => ({
        ...p,
        password: passwordErr,
      }));
      return false;
    }
    return true;
  };

  const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!checkValidation()) {
        return;
      }
      // setIsLoading(true);
      // const { username, password } = signupDetails;
      // const response = await Auth.signIn(username, password);
      // const { challengeName, signInUserSession } = response;
      // if (challengeName === "SOFTWARE_TOKEN_MFA") {
      //   setAuthLoginStage(AuthLoginStages.LOGIN_OTP);
      //   return;
      // }
      // if (signInUserSession) {
      //   setsignupDetails({
      //     ...signupDetails,
      //     authorizedUser: response,
      //   });
      //   const accessToken = signInUserSession?.accessToken?.jwtToken;
      //   const idToken = signInUserSession?.idToken?.jwtToken;
      //   const { data, statusCode, errorMessage } =
      //     await getLoginUserBasicDetails(accessToken, idToken);
      //   if (statusCode === StatusCodes._200 && data) {
      //     dispatch(updateUserBasicDetails(data));
      //     Cookies.set("user_ekey", data.userEkey, {
      //       path: "/",
      //       expires: getMaxExpireDate(),
      //     });
      //     Cookies.set("x_a_t", accessToken, {
      //       path: "/",
      //       expires: getMaxExpireDate(),
      //     });
      //     Cookies.set("x_i_t", idToken, {
      //       path: "/",
      //       expires: getMaxExpireDate(),
      //     });
      //     router.push("/chat");
      //     return;
      //   }
      //   dispatch(
      //     showSnackbarMessage({
      //       type: SnackbarMessageType.FAILURE,
      //       message: errorMessage || "",
      //     })
      //   );
      // }
    } catch {}
  };

  return (
    <AuthLayout title="Sign up" subTitle="Welcome to the UDC">
      <form className="flex flex-col gap-3 mt-4">
        {/** username */}

        <Input
          name="username"
          type="text"
          id="username"
          label="username"
          error={formError.username}
          placeholder="Username"
          value={signupDetails.username}
          onChange={inputHandler}
        />

        {/** password */}

        <div className="relative grid items-center w-full max-w-sm gap-2 mt-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              onBlur={passwordBlurHandler}
              name="password"
              type={!eyeOpened ? "password" : "text"}
              id="password"
              placeholder="Password"
              inputClassName="pr-10"
              value={signupDetails.password}
              regularInput
              onChange={inputHandler}
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
          {formError.password && (
            <small className="absolute bottom-[-20px] right-0 text-xs text-red-500">
              {formError.password}
            </small>
          )}
        </div>

        {/** phone */}

        <Input
          name="phone"
          type="text"
          id="phone"
          label="Phone"
          error={formError.username}
          placeholder="Phone"
          value={signupDetails.username}
          onChange={inputHandler}
        />

        {/** remember checkbox */}

        <div className="flex items-center mt-2 space-x-2">
          <Checkbox id="terms" onClick={() => setAgreed(!agreed)} />
          <Label htmlFor="terms" className="text-[.74rem] leading-4">
            I agree with the{" "}
            <span
              className="border-b cursor-pointer border-primary/40 text-primary hover:border-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Terms of use{" "}
            </span>{" "}
            and our{" "}
            <span
              className="border-b cursor-pointer border-primary/40 text-primary hover:border-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Privacy policy
            </span>
          </Label>
        </div>

        {/** submit btn */}

        <TwoStepVerification
          title="Sign up"
          subTitle={`Thanks for keeping your account secure. check your Email : ${signupDetails.emailId}`}
          submitHandler={submitHandler}
        />
        <Button variant={"outline"} className="w-full rounded-full">
          <ImageFallBack src="/google.svg" alt="google" className="w-4 h-4" />
          <span className="ml-2">Sign up with Google</span>
        </Button>

        {/**  help  */}

        <a className="block w-max mx-auto mt-2 cursor-pointer text-xs pb-0.5 border-b-[1px] border-gray-500 text-center">
          Need help?
        </a>

        {/** footer */}
        <footer className="flex items-center justify-center mt-10 space-x-2 td:mt-auto">
          <Label htmlFor="terms" className="text-xs">
            Already have an account?
          </Label>
          <Badge className="p-0 cursor-pointer" variant={"ghost"} onClick={() => push(`/login`)}>
            Sign in here
          </Badge>
        </footer>
      </form>
    </AuthLayout>
  );
}
