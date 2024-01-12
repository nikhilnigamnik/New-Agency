"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`backdrop-blur-3xl transition-all duration-500 ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
      <div className=" border-b-2 border-gray-800 py-1 px-4">
        <div className="flex justify-between max-w-6xl m-auto">
          <div className="flex items-center gap-4">
            <link href="mailto:syncservicestudio@gmail.com">
              <CiMail />{" "}
              <span className="text-gray-400">syncservicestudio@gmail.com</span>
            </link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <FaWhatsapp /> <span className="text-gray-400">+91-7464049583</span>
            <AiOutlineInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center container relative p-4">
        <Link href="/">
          <strong>Sync</strong> Service
        </Link>
        <div className="md:block hidden">
          <div className="flex justify-between items-center gap-12 uppercase ">
            <Link href="/">Home</Link>
            <Link href="#blog-to">Blog</Link>
            <Link href="#service-to">Service</Link>
            <Link href="/about">About Us</Link>

            <Button>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        <IoIosMenu
          onClick={handleToggle}
          className="cursor-pointer md:hidden block"
          size={40}
        />

        <div
          className={`block md:hidden bg absolute  h-fit left-0 right-0  transition-all duration-500 ease-linear  ${
            showMenu ? "top-0" : "-top-[100vh]"
          }`}
        >
          <div className="flex flex-col justify-center py-10 px-20 relative gap-2">
            <Link className="text-2xl" href="/">
              <strong>Sync</strong> Service
            </Link>
            <Link className="text-xl font-bold mt-8 " href="/">
              Home
            </Link>
            <p className="borders"></p>
            <Link className="text-xl font-bold mt-4 " href="#">
              Work
            </Link>
            <p className="borders"></p>

            <Link className="text-xl font-bold mt-4 " href="#project-to">
              Project
            </Link>
            <p className="borders"></p>

            <Link className="text-xl font-bold mt-4 " href="#about">
              About
            </Link>
            <p className="borders"></p>

            <Link className="text-xl font-bold mt-4 " href="/">
              Service
            </Link>
            <p className="borders"></p>

            <Link className="text-xl font-bold mt-4 " href="/contact">
              Contact
            </Link>
            <p className="borders"></p>
          </div>
          <IoMdClose
            onClick={handleToggle}
            className="cursor-pointer md:hidden block absolute top-10 right-10 "
            size={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
