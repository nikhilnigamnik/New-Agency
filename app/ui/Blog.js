import React from "react";
import Tag from "../components/Tag";
import Button from "../components/Button";
import Link from "next/link";
import { posts } from "../utils/blogData";
import Section from "../components/Section";

const Blog = () => {
  const latestPosts = posts.slice(0, 3);
  return (
    <>
      <Section to="blog-to">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Tag>Blog</Tag>
            <h2>Latest Blog</h2>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {latestPosts.map((post, i) => (
              <div
                key={i}
                className=" p-6 rounded-xl shadow-md bg "
              >
                <div className="flex items-center mb-4">
                  <img
                    src="admin-avatar.jpg"
                    // alt="Admin Avatar"
                    className="w-10 h-10 border rounded-full mr-2"
                  />
                  <div>
                    <p className="font-bold">Nikhil Nigam</p>
                    <p className="text-gray-600">December 17, 2023</p>
                  </div>
                </div>
                <Link href={`/blog/${post.title}`}>
                  <h4 className="cursor-pointer">
                    Building a Simple Blog Card
                  </h4>
                </Link>
                <p className="text-gray-400 mb-4">
                  Learn how to create a blog card with ReactJS and Tailwind CSS
                  without using images.
                </p>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-blue-200 text-blue-700  rounded-full   text-sm px-4 py-1">
                    #Web Development
                  </p>
                  <p className="bg-blue-200 text-blue-700  rounded-full   text-sm px-4 py-1">
                    #ReactJS
                  </p>
                  <p className="bg-blue-200 text-blue-700  rounded-full   text-sm px-4 py-1">
                    #UI/UX
                  </p>
                </div>
              </div>

              // <div key={post.title} className="borders bg p-4 rounded-xl">
              //   <div className="min-h-min p-3">
              //     <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-400">
              //       #{post.category}
              //     </p>
              //     <Link href={`blog/${post.title}`}>
              //       <p className="mt-4 flex-1 text-base font-semibold">
              //         {post.title}
              //       </p>
              //     </Link>
              //     <p className="mt-4 w-full text-sm leading-normal text-gray-500">
              //       {post.description}
              //     </p>
              //     <div className="mt-4 flex space-x-3 ">
              //       <img
              //         className="h-10 bg-primary w-10 rounded-full border"
              //         src={post.avatar}
              //         //     alt={post.author}
              //       />
              //       <div>
              //         <p className="text-sm font-semibold leading-tight text-gray-500">
              //           {post.author}
              //         </p>
              //         <p className="text-sm leading-tight text-gray-600">
              //           {post.date}
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              // </div>
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
