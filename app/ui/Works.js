"use client";

import React from "react";
import Tag from "../components/Tag";
import Image from "next/image";
import Link from "next/link";
import Section from "../components/Section";

const Works = ({ data }) => {
  return (
    <>
      <Section id="project-to">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Tag>Portfolio</Tag>
            <h2>Explore Our Works</h2>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-2 rounded-xl">
            {data.map((el) => (
              <div className="bg p-4 rounded-xl" key={el._id}>
                <div className="flex flex-col gap-2">
                  <Image
                    className="rounded-md"
                    src={el.banner}
                    alt="bannerImg"
                    width={400}
                    height={300}
                  />
                  <Link href={el?.link}>
                    <h4 className="underline cursor-pointer">{el.title}</h4>
                  </Link>
                  <p className="text-gray-500">{el.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <div className="borders"></div>
    </>
  );
};

export default Works;
