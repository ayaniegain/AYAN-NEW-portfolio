import { React, useState } from "react";
import Menus from "../Menus/Menus.jsx";
import MobileNav from "../MobileNav/MobileNav.jsx";

function Layout() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="sidebar-section">
        <Menus toggle={toggle} />
        <MobileNav />
      </div>
    </>
  );
}

export default Layout;
