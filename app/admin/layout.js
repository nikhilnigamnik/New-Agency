"use client";

import React, { useState } from "react";
import Section from "../components/Section";
import Nav from "./Nav";

const page = ({ children }) => {
  return (
    <Section className="flex justify-between gap-4">
      <Nav />
      <div className="bg w-full rounded-xl p-4">{children}</div>
    </Section>
  );
};

export default page;
