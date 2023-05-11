import React, { useState } from "react";
import Button from "./Button";

const LinkInput: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const fetchData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setResult(data.result.full_short_link);
    } catch (e) {
      alert(e);
    }
    console.log(result);
  };

  return (
    <main className="flex md:w-full h-[10.5rem] md:h-[10rem] md:absolute md:top-[48rem] my-10">
      <div className="bg-[#626282] py-4 mx-6 items-center flex-col md:flex-row md:space-x-6 flex justify-between rounded-lg w-full md:mx-[10rem]">
        <form
          onSubmit={fetchData}
          className="items-center flex-col md:flex-row md:space-x-6 flex justify-between rounded-lg w-full md:mx-10"
        >
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            type="url"
            className="rounded-md w-[85%] py-4 md:py-4 px-6 text-[18px] font-poppinsmedium"
            placeholder="Shorten a link here..."
          />
          <Button
            text="Shorten It!"
            className="rounded-md py-4 md:w-[18%] w-[85%] font-poppinsbold"
          />
        </form>
      </div>
    </main>
  );
};

export default LinkInput;
