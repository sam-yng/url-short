import React from "react";
import Button from "./Button";
import { useUrl } from "../utils/UrlContext";

const LinkInput: React.FC = () => {
  const { url, setUrl, fetchData } = useUrl();
  const { setHasCopied } = useUrl();

  let view;
  if (url.length >= 1) {
    view = "invisible";
  } else {
    view = "visible";
  }

  const updateUrl = (e: { target: { value: string } }) => {
    setUrl(e.target.value);
    setHasCopied(false);
  };

  return (
    <main className="flex md:w-full h-[10.5rem] md:h-[10rem] md:absolute md:top-[48rem] my-10">
      <div className="bg-[#626282] md:py-10 py-4 mx-6 items-center flex-col md:space-x-6 flex rounded-lg w-full md:mx-[10rem]">
        <div className="flex flex-col items-center md:flex-row w-full">
          <form
            noValidate
            onSubmit={fetchData}
            className="items-center flex-col md:flex-row md:space-x-6 flex justify-between rounded-lg w-full md:mx-10"
          >
            <input
              value={url}
              onChange={updateUrl}
              required
              type="url"
              className="invalid:border-red-500 invalid:placeholder:text-red-500 invalid:placeholder:opacity-60  border-2 rounded-md w-[85%] py-4 md:py-4 px-6 text-[18px] font-poppinsmedium"
              placeholder="Shorten a link here..."
              name="url"
            />
            <Button
              text="Shorten It!"
              className="rounded-md py-4 md:w-[18%] w-[85%] font-poppinsbold"
            />
          </form>
        </div>
        <p
          className={`w-full pl-8 mt-2 text-red-500 font-poppinsmedium ${view}`}
        >
          Please add a link
        </p>
      </div>
    </main>
  );
};

export default LinkInput;
