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

import { AuthLoginContext, AuthLoginStages } from "./context";
import TwoStepVerification from "../(common)/TwoStepVerification";

export default function Login() {
  const { push } = useRouter();

  const [authLoginStage, setAuthLoginStage] = useState(
    AuthLoginStages.LOGIN_FORM
  );
  const [loginDetails, setLoginDetails] = useState({
    username: "BinaryVortex09@example.com",
    password: "@Abc12345",
    otp: "",
    authorizedUser: null,
  });
  const [eyeOpened, setEyeOpened] = useState(false);
  const [formError, setFormError] = useState({
    password: "",
    username: "",
  });
  const [otpModalOpened, setOtpModalOpened] = useState(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
    setFormError((p) => ({
      ...p,
      [event.target.name]: "",
    }));
  };

  const passwordBlurHandler = () => {
    let result = validatePassword(loginDetails.password);
    if (result.length) {
      setFormError((p) => ({
        ...p,
        password: result,
      }));
      return;
    }
  };

  const checkValidation = () => {
    const { username, password } = loginDetails;
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
      // const { username, password } = loginDetails;
      // const response = await Auth.signIn(username, password);
      // const { challengeName, signInUserSession } = response;
      // if (challengeName === "SOFTWARE_TOKEN_MFA") {
      //   setAuthLoginStage(AuthLoginStages.LOGIN_OTP);
      //   return;
      // }
      // if (signInUserSession) {
      //   setLoginDetails({
      //     ...loginDetails,
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
    <AuthLoginContext.Provider
      value={{
        loginDetails,
        setLoginDetails,
        activeStage: authLoginStage,
        setAuthLoginStage,
      }}
    >
      <AuthLayout
        title="Sign in"
        subTitle="Please make sure you signed in here"
      >
        <form className="flex flex-col gap-3 mt-4">
          {/** username */}
          <Input
            name="username"
            type="text"
            id="username"
            label="username"
            error={formError.username}
            placeholder="Username"
            value={loginDetails.username}
            onChange={inputHandler}
          />

          {/** password */}

          <div className="relative grid items-center w-full max-w-sm gap-2 mt-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                onBlur={passwordBlurHandler}
                name="password"
                type={!eyeOpened ? "password" : "text"}
                id="password"
                placeholder="Password"
                className="pr-10"
                value={loginDetails.password}
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

          {/** remember checkbox */}

          <div className="flex items-center justify-between mt-2 space-x-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-xs">
                Remember me
              </Label>
            </div>
            <Label
              className="text-xs cursor-pointer text-primary"
              onClick={() => push("/forgot_password")}
            >
              Forgot password?
            </Label>
          </div>

          {/** submit btn */}
          
          <TwoStepVerification
          title="Sign in"
            subTitle={`Thanks for keeping your account secure. check your Email : Exapmle@gmail.com`}
            submitHandler={submitHandler}
          />
          <Button variant={"outline"} className="w-full rounded-full">
            <ImageFallBack src="/google.svg" alt="google" className="w-4 h-4" />
            <span className="ml-2">Sign in with Google</span>
          </Button>

          {/**  help  */}

          <a className="block w-max mx-auto mt-2 cursor-pointer text-xs pb-0.5 border-b-[1px] border-gray-500 text-center">
            Need help?
          </a>

          {/** footer */}
          <footer className="flex items-center justify-center mt-10 space-x-2 td:mt-auto">
            <Label htmlFor="terms" className="text-xs">
              Don't have an account?
            </Label>
            <Badge className="p-0 cursor-pointer" variant={"ghost"} onClick={() => push(`/signup`)}>
              Sign up here
            </Badge>
          </footer>
        </form>
      </AuthLayout>
    </AuthLoginContext.Provider>
  );
}
