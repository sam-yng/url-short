import React from "react";
import Button from "./Button";

const LinkInput: React.FC = () => {
  return (
    <main className="flex md:w-full h-[10.5rem] md:h-[10rem] md:absolute md:top-[48rem] my-10">
      <div className="bg-[#626282] py-4 mx-6 items-center flex-col md:flex-row md:space-x-6 flex md:py-12 md:px-16 justify-between rounded-lg w-full md:mx-[10rem]">
        <input
          className="rounded-md w-[85%] py-4 md:py-4 px-6 text-[18px] font-poppinsmedium"
          placeholder="Shorten a link here..."
        />
        <Button
          text="Shorten It!"
          className="rounded-md py-4 md:w-[18%] w-[85%] font-poppinsbold"
        />
      </div>
    </main>
  );
};

export default LinkInput;
