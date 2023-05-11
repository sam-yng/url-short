import React from "react";
import logo from "../assets/images/logo-white.svg";
import insta from "../assets/images/icon-instagram.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const Footer: React.FC = () => {
  return (
    <footer className="md:h-[40vh] bg-[#2b2b2b] text-[#b5b5b5]">
      <div className="flex md:flex-row flex-col md:mx-[10rem] md:space-y-0 space-y-10 mx-6 py-6 pt-20 md:justify-between text-center md:items-start items-center font-poppinsmedium">
        <img className="md:h-[35px] md:mr-20" src={logo} />
        <div className="flex flex-col space-y-2">
          <h1 className="text-white font-poppinsbold mb-4">Features</h1>
          <h2>Link Shortening</h2>
          <h2>Branded Links</h2>
          <h2>Analytics</h2>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white font-poppinsbold mb-4">Resources</h1>
          <h2>Blog</h2>
          <h2>Developers</h2>
          <h2>Support</h2>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-white font-poppinsbold mb-4">Company</h1>
          <h2>About</h2>
          <h2>Our Team</h2>
          <h2>Careers</h2>
          <h2>Contact</h2>
        </div>
        <div className="flex flex-row space-x-6 h-[26px]">
          <img src={facebook} />
          <img src={twitter} />
          <img src={pinterest} />
          <img src={insta} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
