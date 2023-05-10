import React from "react";
import Button from "./Button";
import working from "../assets/images/illustration-working.svg";

const Main: React.FC = () => {
  return (
    <main className="flex flex-row h-[80vh] bg-inputbg items-center mx-[10rem] my-10">
      <div className="flex flex-col w-[50%]">
        <h1 className="font-poppinsbold text-[80px] leading-tight">
          More than just shorter links
        </h1>
        <p className="font-poppinsmedium mt-2 text-[22px] tracking-wider text-[#b5b5b5]">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing
        </p>
        <Button
          text="Get Started"
          className="text-[19px] mt-8 flex justify-center rounded-full w-[10rem] py-2"
        />
      </div>
      <img className="absolute right-0 -mr-[7rem]" src={working} />
    </main>
  );
};

export default Main;
