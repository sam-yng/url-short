import React from "react";
import logo from "../assets/images/logo.svg";
import Button from "./Button";

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row items-center font-poppinsmedium text-[#b5b5b5] mx-[10rem] my-10">
      <img src={logo} />
      <ul className="flex flex-row space-x-10 ml-10">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="flex flex-row ml-auto items-center space-x-10">
        <li>Login</li>
        <li>
          <Button text="Sign Up" className="rounded-full px-4 py-1" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
