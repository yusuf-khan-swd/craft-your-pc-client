import React from "react";
import googleLogo from "../assets/images/google.png";
import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-[8%]">
      <h1>Login Page</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="btn"
      >
        Google Login
      </button>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
