import React from "react";
import Button from "./Button";

const Boost: React.FC = () => {
  return (
    <main className="bg-[#626282] h-[30vh] flex md:items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-poppinsbold text-white text-[27px] md:text-[38px]">
          Boost your links today
        </h1>
        <Button
          text="Get Started"
          className="text-[20px] md:mt-8 mt-4 rounded-full px-6 py-2 md:py-3"
        />
      </div>
    </main>
  );
};

export default Boost;
