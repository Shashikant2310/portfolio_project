import React from "react";
import logo from "../Assets/logo.svg";

const Header = () => {
  return (
    <nav className="flex justify-between pt-11 md:px-10 px-3">
      <img src={logo} width={30} alt="logo" />
      <button
        id="button"
        className="inline-flex items-center text-sm border border-gray-200 hover:border-bodyColor rounded-3xl text-bodyColor  px-6 py-3 text-[0.75em] duration-300  tracking-[4px]"
      >
        PRICING
      </button>
    </nav>
  );
};

export default Header;
