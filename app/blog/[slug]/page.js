import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Blog page content</p>
      {params.slug}
    </div>
  );
};

export default page;
