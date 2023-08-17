import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container w-[2px] h-full absolute top-0 right-0 rounded-full">
      <div
        className="progress-bar bg-[#e74c3c] rounded-md"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
