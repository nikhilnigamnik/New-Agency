"use client";

import Button from "@/app/components/Button";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import Image from "next/image";
import LoadingBar from "react-top-loading-bar";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { MdDeleteForever } from "react-icons/md";

const Page = () => {
  const blogId = 564841;
  const [data, setData] = useState([]);
  const ref = useRef(null);

  const getBlogData = async () => {
    try {
      const res = await axios.get(`/api/blog`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBlog = async (id) => {
    ref.current.continuousStart();
    try {
      const res = await axios.delete(`/api/blog/${id}`);
      console.log(res.data);
      getBlogData();
    } catch (error) {
      console.log(error);
    } finally {
      ref.current.complete();
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <LoadingBar color="#6919ff" ref={ref} />

      <div className="flex justify-between items-center">
        <h4>Manage Blog</h4>
        <Link href={"add-blog"}>
          <Button sizeVariant="xs">Add Blog</Button>
        </Link>
      </div>
      {/* table */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Banner
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Manage
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((el) => (
              <tr
                key={el?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Image
                    src={el?.banner}
                    width={100}
                    height={100}
                    alt="banner"
                  />
                </th>
                <td className="px-6 py-4">{el?.title}</td>
                <td className="px-6 py-4">{el?.slug}</td>
                <td className="px-6 py-4">{el?.createdAt}</td>
                <td className="px-6 py-4">
                  <Link
                    className="font-medium text-blue-600  bg-blue-100 px-3 cursor-pointer py-1 rounded-xl"
                    href={`manage-blog/${el?._id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Switch checked />
                </td>

                <td className="px-6 py-4">
                  <MdDeleteForever
                    onClick={() => handleDeleteBlog(el?._id)}
                    className="text-red-600 bg-red-100 rounded-full p-1 cursor-pointer"
                    size={30}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
