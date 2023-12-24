import React from "react";
import Tag from "../components/Tag";
import Button from "../components/Button";
import Section from "../components/Section";
import Input from "../components/Input";

const page = () => {
  return (
    <Section>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Tag>Contact</Tag>
        <h2>Get In Touch</h2>
      </div>
      <div className="p-7 flex flex-col gap-8">
        <p>
          I am available for freelance projects. Hire me and get your project
          done.
        </p>
        <div className="flex flex-col gap-4">
          <div className="sm:flex gap-4">
            <div className="flex flex-col gap-2">
              <Input placeholder={"Name"} />
            </div>
            <div className="flex flex-col gap-2">
              <Input placeholder={"email"} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="border-2 border-gray-800 p-2 outline-none rounded-xl bg"
            ></textarea>
          </div>
          <Button sizeVariant="lg">Send</Button>
        </div>
      </div>
    </Section>
  );
};

export default page;
