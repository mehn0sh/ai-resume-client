import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  return (
    <header className="flex justify-between shadow-md p-3">
      <img src="/logo.svg" width={40} height={40} />
      {isLoaded && isSignedIn ? (
        <div className="flex gap-3">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
