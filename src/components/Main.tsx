import React from "react";
import Button from "./Button";
import working from "../assets/images/illustration-working.svg";

const Main: React.FC = () => {
  return (
    <main className="flex md:flex-row flex-col md:h-[83vh] md:items-center -mt-10 mx-6 my-6 md:mx-[10rem] md:my-10">
      <div className="flex flex-col md:w-[50%] md:text-left text-center md:items-start items-center">
        <img className="md:hidden block mt-16 absolute left-10" src={working} />
        <h1 className="font-poppinsbold md:text-[80px] text-[39px] md:mt-0 mt-[25rem] leading-tight">
          More than just shorter links
        </h1>
        <p className="font-poppinsmedium mt-4 md:mt-2 md:text-[22px] text-[17px] tracking-wider text-[#b5b5b5]">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <Button
          text="Get Started"
          className="text-[19px] mt-8 flex justify-center rounded-full w-[10rem] py-2"
        />
      </div>
      <img className="md:absolute hidden md:block right-0" src={working} />
    </main>
  );
};

export default Main;
