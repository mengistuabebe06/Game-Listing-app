import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";

function Header() {

  const [toogle, setToggle] = useState(false)

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
          className="px bg-transparent outline-none"
        />
      </div>
      <div className="bg-slate-300">
        { toogle && <HiMoon onClick={()=> setToggle(false)}/>}
        <HiSun onClick={()=> setToggle(true)}/>
      </div>
    </div>
  );
}

export default Header;
