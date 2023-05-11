import React from "react";
import logo from "../assets/images/logo.svg";
import Button from "./Button";

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row items-center font-poppinsmedium text-[#b5b5b5] mx-6 my-6 md:mx-[10rem] md:my-10">
      <img className="md:h-[33px]" src={logo} />
      <ul className="md:flex flex-row space-x-10 md:ml-10 hidden">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="md:flex hidden flex-row ml-auto items-center space-x-10">
        <li>Login</li>
        <li>
          <Button text="Sign Up" className="rounded-full px-4 py-1" />
        </li>
      </ul>
      <img />
    </nav>
  );
};

export default NavBar;
