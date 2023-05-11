import React from "react";

type StatsBoxProps = {
  icon?: string;
  title: string;
  info: string;
};

const StatsBox: React.FC<StatsBoxProps> = ({
  icon,
  title,
  info,
}: StatsBoxProps) => {
  return (
    <main className="flex mt-[8rem] w-full flex-col relative text-center md:text-left md:w-[31%] py-16 md:py-20 px-12 bg-white rounded-md">
      <div>
        <img
          className="border-2 absolute top-[-2rem] border-[#221a37] py-4 px-4 bg-[#221a37] rounded-full"
          src={icon}
        />
        <h1 className="font-poppinsbold text-[25px]">{title}</h1>
        <p className="font-poppinsmedium text-[#b5b5b5] text-[18px] mt-4">
          {info}
        </p>
      </div>
    </main>
  );
};

export default StatsBox;
