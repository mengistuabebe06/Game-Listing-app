import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";

function Header() {
  const [toogle, setToggle] = useState(false);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div
        className="flex bg-slate-200 p-2 w-full 
        items-center mx-5 rounded-full"
      >
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px bg-transparent dark:bg-gray-500 outline-none"
        />
      </div>
      <div className="bg-slate-300">
        {toogle ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toogle)}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-50 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setToggle(!toogle)}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
