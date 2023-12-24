import React from "react";

const Button = ({
  children,
  colorVariant = "primary",
  className,
  sizeVariant = "sm",
  ...props
}) => {
  const colorVariants = {
    primary: "bg-[#6919ff] text-[#f6f7fa]",
    secondary: "border text-[#f6f7fa]",
  };

  const sizeVarient = {
    xs:"py-1 px-4",
    sm: "py-2 px-6",
    lg: "py-3 px-10",

  };

  const buttonClass = `button ${colorVariants[colorVariant] || "primary"} ${
    (className || "", sizeVarient[sizeVariant] || "sm")
  }`;

  return (
    <button className={`rounded-full w-fit ${buttonClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
