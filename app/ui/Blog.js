"use client";
import React from "react";
import Tag from "../components/Tag";
import Button from "../components/Button";
import Link from "next/link";
import Section from "../components/Section";
import { HiFaceSmile } from "react-icons/hi2";
import { FormatDateTime, formatDateTime } from "../utils/formatDate";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <>
      <Section id="blog-to">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Tag>Blog</Tag>
            <h2>Latest Blog</h2>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {data.map((el, i) => (
              <div key={i} className=" p-6 rounded-xl shadow-md bg ">
                <Link href={`/blog/${el.slug}`}>
                  <h4 className="cursor-pointer">{el?.title}</h4>
                </Link>
                <div className="flex items-center mb-4 gap-2">
                  <HiFaceSmile size={25} className="bg border rounded-full "/>
                  <div>
                    <p className="text-gray-400">admin</p>
                    <p className="text-gray-400">
                      {FormatDateTime(el?.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {el.tags.map((tag, i) => (
                    <p className="bg-blue-800 text-blue-100  rounded-full   text-sm px-4 py-1">
                      #{tag}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button>
            <Link href="/blog">View all blog</Link>
          </Button>
        </div>
      </Section>
      <div className="borders"></div>
    </>
  );
};

export default Blog;
