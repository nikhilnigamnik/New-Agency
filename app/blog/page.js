import React from "react";
import Tag from "../components/Tag";
import { posts } from "../utils/blogData";
import Link from "next/link";
import Section from "../components/Section";

const page = () => {
  return (
    <Section>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Tag>Blog</Tag>
        <h2 className="text-3xl font-bold">Latest Blog</h2>
      </div>
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="borders bg p-4 rounded-xl">
            <img
              src={post.poster}
              className="aspect-video w-full rounded-md"
              alt="blogPoster"
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-400">
                #{post.category}
              </p>
              <Link href={`blog/${post.title}`}>
                <p className="mt-4 flex-1 text-base font-semibold">
                  {post.title}
                </p>
              </Link>
              <p className="mt-4 w-full text-sm leading-normal text-gray-500">
                {post.description}
              </p>
              <div className="mt-4 flex space-x-3 ">
                <img
                  className="h-10 bg-primary w-10 rounded-full border"
                  src={post.avatar}
                  //     alt={post.author}
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-gray-500">
                    {post.author}
                  </p>
                  <p className="text-sm leading-tight text-gray-600">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default page;
