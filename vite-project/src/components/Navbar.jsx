import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavItems from "./NavItems";

function Navbar({setSideNavState}) {
  return (
    <nav className="navbar bg-white shadow w-[100vw] fixed top-0 left-0 z-10 ">
      <div className="container mx-auto flex justify-evenly items-center">
        <h1 className="font-bold text-orange-400 text-xl py-4">
        <FontAwesomeIcon icon={faBars} onClick={()=>{setSideNavState(true)}} className="menu-icon text-gray-700 mr-[4vw] text-2xl"/>
          Professional And Qualified Electricals
        </h1>
        <NavItems/>
      </div>
    </nav>
  );
}

export default Navbar;
