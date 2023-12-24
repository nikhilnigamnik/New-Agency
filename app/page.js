"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Works from "./ui/Works";
import axios from "axios";
import Service from "./ui/Service";
import Faq from "./ui/Faq";
import LoadingBar from "react-top-loading-bar";
import ProjectStart from "./ui/ProjectStart";
import Blog from "./ui/Blog";
import Loader from "./components/Loader";

const Home = () => {
  const [projectData, setProjectData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const getProjectData = async () => {
    try {
      ref.current.continuousStart();
      setLoading(true);
      const res = await axios.get("/api/project");
      setProjectData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      ref.current.complete();
      setLoading(false);
    }
  };

  const getServiceData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/service");
      setServiceData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServiceData();
  }, []);

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <>
      <LoadingBar color="#6919ff" ref={ref} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          {/* <About /> */}
          <Works data={projectData} />
          <Service data={serviceData} />
          <Blog />
          <Faq />
          <ProjectStart />
        </>
      )}
    </>
  );
};

export default Home;
