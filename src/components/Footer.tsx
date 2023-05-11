import React from "react";
import logo from "../assets/images/logo-white.svg";
import insta from "../assets/images/icon-instagram.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const Footer: React.FC = () => {
  const hover = "hover:text-[#33CCCC] hover:cursor-pointer";

  return (
    <footer className="md:h-[40vh] bg-[#2b2b2b] text-[#b5b5b5]">
      <div className="flex md:flex-row flex-col md:mx-[10rem] md:space-y-0 space-y-10 mx-6 py-6 pt-20 md:justify-between md:text-left text-center md:items-start items-center font-poppinsmedium">
        <img className="md:h-[35px] md:mr-20" src={logo} />
        <div className="flex flex-col space-y-2">
          <h1 className="text-white font-poppinsbold mb-4">Features</h1>
          <h2 className={hover}>Link Shortening</h2>
          <h2 className={hover}>Branded Links</h2>
          <h2 className={hover}>Analytics</h2>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white font-poppinsbold mb-4">Resources</h1>
          <h2 className={hover}>Blog</h2>
          <h2 className={hover}>Developers</h2>
          <h2 className={hover}>Support</h2>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white font-poppinsbold mb-4">Company</h1>
          <h2 className={hover}>About</h2>
          <h2 className={hover}>Our Team</h2>
          <h2 className={hover}>Careers</h2>
          <h2 className={hover}>Contact</h2>
        </div>
        <div className="flex flex-row space-x-6 h-[26px]">
          <img className={hover} src={facebook} />
          <img className={hover} src={twitter} />
          <img className={hover} src={pinterest} />
          <img className={hover} src={insta} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
