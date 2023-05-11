import React from "react";
import StatsBox from "./StatsBox";
import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import custom from "../assets/images/icon-fully-customizable.svg";
import { useUrl } from "../utils/UrlContext";
import ResultPanel from "./ResultPanel";

const Stats: React.FC = () => {
  const { fetchData, result } = useUrl();

  return (
    <main className="md:h-[115vh] bg-[#F0F1F6] pb-10">
      <div className="h-full md:mx-[10rem] md:my-10 mx-6 my-6 flex flex-col items-center justify-center">
        {result.length > 0 && (
          <ResultPanel regularUrl="hello" shortUrl="hello" />
        )}
        <h1 className="font-poppinsbold md:text-[40px] text-[30px] mt-[6rem]">
          Advanced Statistics
        </h1>
        <p className="font-poppinsmedium text-[#b5b5b5] text-center md:w-[32rem] mt-4 text-[18px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <StatsBox
            title="Brand Recognition"
            info="Boost your brand recognition with each click.
						Generic links don't mean a thing. Branded links
						help instil confidence in your content."
            icon={brand}
          />
          <StatsBox
            title="Detailed Records"
            info="Gain insights into who is clicking your links.
						Knowing when and where people engage with your content
						helps inform better decisions."
            icon={records}
          />
          <StatsBox
            title="Fully Customizable"
            info="Improve brand awareness and content discoverability
						through customizable links, supercharging audience engagment."
            icon={custom}
          />
        </div>
      </div>
    </main>
  );
};

export default Stats;
