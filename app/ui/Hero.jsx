import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex flex-col gap-16 p-7">
      <div className="flex-col md:flex-row flex gap-4 justify-between items-end sm:mt-10 mt-0">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-extrabold">
          <span className="text-[#919BBA]">Turning {""}</span>
          Code <span className="text-[#919BBA]">Into</span>{" "}
          <span className="text-[#919BBA]">Creative</span> Solutions
        </h1>
        <p>
          Empowring the digital landcsape with precision and passion,
          transforming ideas into immersive online exxperiences.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Button>
          <Link href="/contact">Lets's Talk</Link>
        </Button>
        {/* <Button colorVariant="secondary">
          <a href="../public/Resume.pdf" download={"Resume.pdf"}>
            Download CV
          </a>
        </Button> */}
      </div>
    </div>
  );
};

export default Hero;
