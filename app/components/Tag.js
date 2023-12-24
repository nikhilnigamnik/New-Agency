import React from "react";

const Tag = ({ children }) => {
  return (
    <button className="w-fit border-2 border-[#6919ff] bg px-4 rounded-full text-sm py-1">
      {children}
    </button>
  );
};

export default Tag;
