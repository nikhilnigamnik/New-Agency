import React from "react";
import Button from "../components/Button";
import Link from "next/link";
import Section from "../components/Section";

const ProjectStart = () => {
  return (
    <Section>
      <div className="bg flex gap-4 flex-col justify-center items-center p-7 rounded-xl">
        <h2>Start a Project</h2>
        <p className="text-center">
          I am available for freelance projects. Hire me and get your project
          done.
        </p>
        <Button sizeVariant="lg">
          <Link href={"/contact"}>Contact</Link>
        </Button>
      </div>
    </Section>
  );
};

export default ProjectStart;
