"use client";

import React, { useRef } from "react";
import Tag from "../components/Tag";
import Button from "../components/Button";
import Section from "../components/Section";
import Input from "../components/Input";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const page = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9nkmdj6",
        "template_qae1azc",
        form.current,
        "XGeL653R1YrnjGEzi"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Message Sent", {
            icon: "✅",
            style: {
              borderRadius: "100px",
              background: "#060918",
              color: "#fff",
              border: "1px solid rgb(31 41 55 / 1)",
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <Input placeholder={"Name"} type={"text"} name={"form_name"} />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  placeholder={"email"}
                  type={"email"}
                  name={"form_email"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                className="border-2 border-gray-800 p-2 outline-none rounded-xl bg"
              ></textarea>
            </div>
            <Button type="submit" sizeVariant="lg">
              Send
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default page;
