import React from "react";

const Section = ({ children, className, id }) => {
  const sectionClassName = `max-w-[1152px] m-auto p-7 ${className || ""}`;
  return (
    <section id={id}>
      <div className={sectionClassName}>{children}</div>
    </section>
  );
};

export default Section;
