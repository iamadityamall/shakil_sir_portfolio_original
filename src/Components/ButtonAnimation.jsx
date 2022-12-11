// import React, { useState } from "react";
import { useSelector } from "react-redux";

const ButtonAnimation = ({ showSidebar }) => {
  const { isDarkmode } = useSelector((store) => store.navbar);
  return (
    <div
      className={`transition-all duration-500 ease-in-out flex flex-col space-y-2 items-center justify-center ${
        showSidebar && "space-y-0"
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out h-1 w-9  rounded-lg ${
          !isDarkmode ? "bg-black" : "bg-white"
        } ${showSidebar && " rotate-45"}`}
      ></div>
      <div
        className={`transition-all duration-500 ease-in-out h-1 w-9 rounded-lg ${
          !isDarkmode ? "bg-black" : "bg-white"
        } ${showSidebar && " -rotate-45 -translate-y-1"}`}
      ></div>
    </div>
  );
};

export default ButtonAnimation;
