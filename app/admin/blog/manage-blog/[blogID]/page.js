import Section from "@/app/components/Section";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <div>manage blog {params.blogID}</div>
    </div>
  );
};

export default page;
