import React from "react";
import logo from "../../../assets/img/UB-logo.png"; 

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-end p-6 z-10">
      <img
        src={logo}
        alt="UBA Logo"
        className="h-24"
      />
    </nav>
  );
};

export default Navbar;
