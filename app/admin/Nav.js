import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col  gap-2">
      <Link className="px-5 py-2 bg rounded-xl" href={"/admin"}>
        Dashboard
      </Link>
      <Link className="px-5 py-2 bg rounded-xl" href={"/admin/blog/blog-table"}>
        Blog
      </Link>
      <Link className="px-5 py-2 bg rounded-xl" href={"/admin/project/project-table"}>
        Project
      </Link>
      <Link className="px-5 py-2 bg rounded-xl" href={"/"}>
        Service
      </Link>
      <Link className="px-5 py-2 bg rounded-xl" href={"/"}>
        Testimonials
      </Link>
      <Link className="px-5 py-2 bg rounded-xl" href={"/"}>
        Contact
      </Link>
    </div>
  );
};

export default Nav;
