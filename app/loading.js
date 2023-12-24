import React from "react";

const loading = () => {
  return (
    <div className="text-loader flex flex-1 gap-1 items-center">
      <div className="text-container">
        <span className="letter">L</span>
        <span className="letter">O</span>
        <span className="letter">A</span>
        <span className="letter">D</span>
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">G</span>
        <span className="letter">.</span>
        <span className="letter">.</span>
        <span className="letter">.</span>
      </div>
    </div>
  );
};

export default loading;
