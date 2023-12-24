import React, { useState } from "react";
import Tag from "../components/Tag";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Section from "../components/Section";

const items = [
  {
    id: 1,
    title: "How long does a website take to build?",
    content:
      "It depends on the complexity of the website. A simple website can take 2-3 weeks, while a complex website can take 2-3 months. The time is also determined by the client's response time. If the client takes a long time to respond, the project will take longer to complete.",
  },
  {
    id: 2,
    title: "How much does a website cost?",
    content:
      "It depends on the complexity of the website. A simple website can cost $500, while a complex website can cost $5000. The cost is also determined by the client's response time. If the client takes a long time to respond, the project will cost more.",
  },
  {
    id: 3,
    title: "I don't have a design can you build a website for me?",
    content:
      "Yes, I can design a website for you. I can also design a logo for you.",
  },
  {
    id: 4,
    title: "Can you provide seo as well",
    content: "Yes, I can provide seo as well",
  },
  {
    id: 5,
    title: "Will my website load quickly",
    content: "Yes, I will make sure that your website loads quickly",
  },
  {
    id: 6,
    title: "Do you provide maintenance service",
    content: "Yes, I provide maintenance service",
  },
  {
    id: 7,
    title: "Can you provide hosting and domain as well",
    content: "Yes, I can provide hosting as well as domain",
  },
];

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === itemId ? null : itemId));
  };

  return (
    <>
      <Section>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Tag>Faq</Tag>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4 p-2 rounded-xl">
            {items.map((item) => (
              <div key={item.id} className="bg p-4 rounded-xl">
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => handleItemClick(item.id)}
                >
                  <h3>{item.title}</h3>
                  {openItem === item.id ? (
                    <IoMdArrowDropupCircle size={30} />
                  ) : (
                    <IoMdArrowDropdownCircle size={30} />
                  )}
                </div>
                {openItem === item.id && (
                  <p className="text-gray-400">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <div className="borders"></div>
    </>
  );
};

export default Faq;
