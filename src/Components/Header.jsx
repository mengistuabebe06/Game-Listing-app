import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toogle, setToggle] = useState(false);
  // to recive values from context
  const [theam, setTheam] = useContext(ThemeContext);
  // to see the value use useEffect to fetch the data
  useEffect(() => {
    console.log("theam", theam);
  }, []);

  return (
    <div className="flex items-center p-3 dark:bg-black">
      <img src={logo} width={60} height={60} />
      <div
        className="flex bg-slate-200 p-2 w-full 
        items-center mx-5 rounded-full"
      >
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px bg-transparent outline-none"
        />
      </div>
      <div className="bg-slate-300">
        {theam == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheam("dark");
              // create a local storage
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-50 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheam("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
