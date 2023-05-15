import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  className: string;
  copyFunc?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  copyFunc,
}: ButtonProps) => {
  return (
    <button
      onClick={copyFunc}
      type="submit"
      className={`${className} hover:opacity-70 border-[#33CCCC] bg-[#33CCCC] text-white border-2`}
    >
      {text}
    </button>
  );
};

export default Button;
