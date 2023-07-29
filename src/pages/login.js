import React from "react";
import googleLogo from "../assets/images/google.png";
import RootLayout from "@/components/layout/RootLayout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => signIn("google")} className="btn">
        Google Login
      </button>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
