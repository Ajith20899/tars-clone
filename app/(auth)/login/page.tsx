import React from "react";

import AuthLayout from "../(common)/AuthLayout";
import LoginPage from "@/app/_components/auth/login";

export default function Login() {
  return (
    <AuthLayout title="Sign in" subTitle="Please make sure you signed in here">
      <LoginPage />
    </AuthLayout>
  );
}
