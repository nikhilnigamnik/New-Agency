"use client";

import React, { useState } from "react";
import Tag from "../components/Tag";
import { FaLocationArrow } from "react-icons/fa";
import Section from "../components/Section";

const serviceData = [
  {
    id: 1,
    title: "Graphic Design",
    description:
      "Pictures speak louder than words. We create graphics that define your brand and speak for you. Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography, and illustration. ",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "We create user friendly and responsive UI/UX design for your website and mobile application. User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. User experience (UX) design is the process designers use to create products that provide meaningful and relevant experiences to users.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "We create responsive and user friendly website for your business. Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "We create responsive and user friendly mobile application for your business. Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "We provide digital marketing service for your business. Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.",
  },
  {
    id: 6,
    title: "Content Writing",
    description:
      "We provide content writing service for your business. Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms, such as tweetstorms on Twitter or text posts on Reddit.",
  },
  {
    id: 7,
    title: "SEO Optimization",
    description:
      "We provide SEO service for your business. Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
  },
  {
    id: 8,
    title: "Social Media Marketing",
    description:
      "We provide social media marketing service for your business. Social media marketing is the use of social media platforms and websites to promote a product or service. Although the terms e-marketing and digital marketing are still dominant in academia, social media marketing is becoming more popular for both practitioners and researchers.",
  },
];

const Service = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <Section id="service-to">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Tag>Service</Tag>
            <h2>Explore Our Service</h2>
          </div>
          <div className="md:grid grid-cols-2 gap-4 p-2 rounded-xl">
            <div className=" p-4 rounded-xl flex flex-col gap-2">
              {serviceData.map((service, index) => (
                <h4
                  key={service.id}
                  className={`cursor-pointer px-4 py-1 text-gray-400 ${
                    index === activeTab ? "active bg border-2 border-gray-800 rounded-xl " : ""
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {service.title}
                </h4>
              ))}
            </div>
            <div className="bg p-4 rounded-xl flex flex-col gap-4">
              <h4>{serviceData[activeTab].title}</h4>
              <p className="text-gray-300">
                {serviceData[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </Section>
      <div className="borders"></div>
    </>
  );
};

export default Service;
