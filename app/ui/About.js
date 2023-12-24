import React from "react";
import Tag from "../components/Tag";
import Section from "../components/Section";

const About = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-4">
          <h2>Full Stack Developer</h2>
          <p>
            Hello, I am Nikhil Nigam, a passionate and skilled web developer
            currently in the final year of my engineering hourney. Over the past
            year, I have worked on a variety of projects, ranging from building
            a full-stack web application to developing a Mobile Application.
          </p>
        </div>
      </Section>
      <div className="borders"></div>
    </>
  );
};

export default About;
