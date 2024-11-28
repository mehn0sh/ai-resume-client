import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { StarsCanvas } from "../../landingPage/canvas";

const SignInPage = () => {
  return (

    <div className="flex justify-center items-center  h-screen relative z-0 bg-primary ">
      <SignIn></SignIn>
      <StarsCanvas/>
    </div>
  );
};

export default SignInPage;
