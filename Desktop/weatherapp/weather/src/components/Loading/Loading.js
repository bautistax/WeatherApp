import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="lds-dual-ring "></div>
    </div>
  );
};

export default Loading;
