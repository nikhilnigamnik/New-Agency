import React from "react";

const Input = ({ type, name, id, placeholder, onChange, required, value }) => {
  return (
    <input
      className=" border-2 border-gray-800 bg outline-none w-full rounded-xl px-4 py-1 bg-primary"
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
