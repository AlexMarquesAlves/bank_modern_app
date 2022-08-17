// import { useState } from "react";
import { logo } from "../../assets";

export const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[7.75rem] h-[2rem]" />
    </nav>
  );
};
