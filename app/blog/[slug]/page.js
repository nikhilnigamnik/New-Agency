"use client";

import Section from "@/app/components/Section";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [blog, setBlog] = useState({});
  const { slug } = params;
  const getSingleBlog = async () => {
    try {
      const res = await axios.get(`/api/blog/${slug}`);
      console.log(res.data.data);
      setBlog(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getSingleBlog();
  }, []);
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <Image width={500} height={100} src={blog?.banner} alt="blogImage" />
        <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
      </div>
    </Section>
  );
};

export default page;
