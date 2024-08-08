import React from "react";
import "./BENavbar.scss";
import BENavItem from "../BENavItem/BENavItem";

function BENavbar({ showNav = [] }) {
  return (
    <>
      {showNav.length >= 1 && (
        <div className="be-navbar">
          <BENavItem navbarList={showNav} />
        </div>
      )}
    </>
  );
}

export default BENavbar;
