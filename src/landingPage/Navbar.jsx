import React, { useEffect, useState } from "react";
import { menu, close } from "../assets";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constans/constans";
import { Button } from "../components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const [active, setActive] = useState("");
  const { isSignedIn, isLoaded, user } = useUser();
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center bg-primary py-5 top-0 fixed z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            AI &nbsp;
            <span className="sm:block hidden"> Resume Builder</span>
          </p>
        </Link>

        <div className="flex gap-4 items-center">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          {isLoaded && isSignedIn ? (
            <div className="flex gap-10">
              <Link to={"/dashboard"}>
                <Button variant="outline">Dashboard</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link to={"/auth/sign-in"}>
              <Button variant='outline'>Get Started</Button>
            </Link>
          )}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
