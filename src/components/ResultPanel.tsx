import React from "react";
import Button from "./Button";

type ResultPanelProps = {
  regularUrl: string;
  shortUrl: string;
};

const ResultPanel: React.FC<ResultPanelProps> = ({
  regularUrl,
  shortUrl,
}: ResultPanelProps) => {
  return (
    <main className="bg-white w-full">
      <div className="flex flex-row font-poppinsmedium">
        <h1 className="text-black">{regularUrl}</h1>
        <h1 className="text-[#33CCCC]">{shortUrl}</h1>
        <Button text="Copy" className="rounded-md" />
      </div>
    </main>
  );
};

export default ResultPanel;
