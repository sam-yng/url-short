import React from "react";

type ButtonProps = {
  text: string;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`${className} border-[#33CCCC] bg-[#33CCCC] text-white border-2`}
    >
      {text}
    </button>
  );
};

export default Button;
