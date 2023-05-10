import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row items-center font-poppinsmedium text-[#b5b5b5]">
      <h1 className="font-poppinsbold text-black text-[30px]">Shortly</h1>
      <ul className="flex flex-row space-x-10 ml-10">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <ul className="flex flex-row ml-auto items-center space-x-10">
        <li>Login</li>
        <li className="border-2 text-white rounded-full px-4 py-1 border-[#33CCCC] bg-[#33CCCC]">
          Sign Up
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
