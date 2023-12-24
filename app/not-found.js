import Link from "next/link";
import React from "react";
import Button from "./components/Button";

const notFound = () => {
  return (
    <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
      <div className="flex flex-col">
        <p>404 error</p>
        <h2>We can&apos;t find that page</h2>
        <p>
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <Link href={"/"}>
            <Button>Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notFound;
