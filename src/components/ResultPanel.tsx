import React from "react";
import Button from "./Button";
import useCopy from "../utils/useCopy";
import { useUrl } from "../utils/UrlContext";

type ResultPanelProps = {
  regularUrl: string;
  shortUrl: string;
};

const ResultPanel: React.FC<ResultPanelProps> = ({
  regularUrl,
  shortUrl,
}: ResultPanelProps) => {
  const [value, copy] = useCopy();
  const { hasCopied, setHasCopied } = useUrl();

  const copiedFunc = () => {
    copy(shortUrl);
    setHasCopied(true);
    console.log(value);
  };

  return (
    <main className="bg-white w-full rounded-md py-6 px-6 mt-12">
      <div className="flex flex-row font-poppinsmedium justify-between items-center">
        <h1 className="text-black">{regularUrl}</h1>
        <div className="flex flex-row items-center space-x-6">
          <h1 className="text-[#33CCCC]" id="url">
            {shortUrl}
          </h1>
          <Button
            copyFunc={copiedFunc}
            text={`${hasCopied ? "Copied!" : "Copy"}`}
            className={`rounded-md py-1 px-5 ${
              hasCopied ? "bg-[#626282] border-[#626282]" : ""
            }`}
          />
        </div>
      </div>
    </main>
  );
};

export default ResultPanel;
