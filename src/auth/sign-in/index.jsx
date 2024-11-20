import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center  h-screen">
      <SignIn></SignIn>
    </div>
  );
};

export default SignInPage;
