import React from "react";
import Button from "./Button";

const LinkInput: React.FC = () => {
  return (
    <main className="flex justify-center">
      <div className="bg-[#9999CC] py-2 px-2">
        <input placeholder="Shorten a link here..." />
        <Button text="Shorten It!" className="" />
      </div>
    </main>
  );
};

export default LinkInput;
