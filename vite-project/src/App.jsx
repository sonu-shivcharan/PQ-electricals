import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav.jsx";
import { useState } from "react";


function App() {
  const [isSideNavOpen, setSideNavState] = useState(false);
  return (
    <>
      <>
        <Navbar setSideNavState={setSideNavState} /> {isSideNavOpen?<SideNav setSideNavState={setSideNavState} />:" "}
      </>
   
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
