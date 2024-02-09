"use client"
import React from "react";
import Section from "../components/Section";
import Tag from "../components/Tag";
import ClarityContainer from "../components/ClarityContainer";

const page = () => {
  return (
    <Section>
       <ClarityContainer projectId={"kz5pyv8z7k"}></ClarityContainer>
      <div className="flex flex-col gap-3 justify-center items-center">
        <Tag>About</Tag>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h4>
          What makes us one of the best Digital Marketing Company in India
        </h4>
        <p>
          Our approach to your business makes us one of the best digital
          marketing company in India. We start with consumer/market insight to
          build a unique Business Strategy to help youu differentiate your
          offering from your competitors and enable it with technology to build
          Equity and Business value in the ever-connected world. Deployment of
          the following helps us to grow your business and brand value.
        </p>
        <p>
          <strong>Insignt : </strong>
          We use research, analytics and creativity to gain a clear and deep
          understanding of unmet needs and opportunities related to brands,
          customers or markets, to create value for businesses.
        </p>
        <p>
          <strong>Strategy : </strong>
          We use our insights to create a clear and actionable blueprint for
          growing businesses and brands.
        </p>
        <p>
          <strong>Technology : </strong>
          We use technology to create business solutions that set new standards
          for user experience.
        </p>
      </div>
    </Section>
  );
};

export default page;
