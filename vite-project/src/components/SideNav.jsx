import React from "react";
import NavItems from "./NavItems";

function SideNav({ setSideNavState }) {
  function handleSideNavState(e) {
    if (e.target.classList.contains("overlay")) {
      setSideNavState(false);
    }
  }
  return (
    <div
      className="overlay w-screen h-screen bg-gray-800/50 fixed top-0 left-0 z-50"
      onClick={handleSideNavState}
    >
      <div
        id="side-nav"
        className="shadow w-[250px] h-[100vh] fixed bg-white top-0 left-0 "
      >
        <NavItems />
      </div>
    </div>
  );
}

export default SideNav;
