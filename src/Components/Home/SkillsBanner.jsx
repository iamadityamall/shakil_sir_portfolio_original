import React from "react";
import "../../index.css";
import {
  FaHtml5,
  FaReact,
  FaRupeeSign,
  FaBusinessTime,
  FaBook,
  FaLaptopCode,
} from "react-icons/fa";
import { SiCsswizardry, SiTailwindcss, SiJavascript } from "react-icons/si";
import { AiFillBank } from "react-icons/ai";

const ClientLogo = () => {
  return (
    <section
      data-aos="fade-in"
      className="transition-all duration-200 ease-in-out grid grid-cols-1 py-14 lg:pt-0 lg:pb-14 justify-items-center gap-y-4 items-center md:grid-cols-3 md:gap-y-0 lg:mb-32"
    >
      <div>
        <h1 className="transition-all duration-200 ease-in-out text-4xl font-bold font-poppins border-b-4 border-black md:text-5xl lg:text-7xl">
          Skills
        </h1>
      </div>
      <div className="w-full h-28 overflow-hidden relative rounded-xl lg:h-36 transition-all duration-150 ease-linear md:col-span-2">
        <div className="w-[screen] flex absolute animate-flow">
          <div className="flex">
            <div className="transition-all duration-200 ease-in-out w-48 h-28  flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaRupeeSign />
              <p className="text-lg">Revenue Generation</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 b flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <AiFillBank />
              <p className="text-lg">Banking Solutions</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 bg flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaBusinessTime />
              <p className="text-lg">Communication</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaBook />
              <p className="text-lg text-center">Document Management </p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaLaptopCode />
              <p className="text-lg">Software Solution Sale</p>
            </div>
          </div>
          <div className="flex">
            <div className="transition-all duration-200 ease-in-out w-48 h-28  flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaRupeeSign />
              <p className="text-lg">Revenue Generation</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 b flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <AiFillBank />
              <p className="text-lg">Banking Solutions</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28  flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaBusinessTime />
              <p className="text-lg">Communication</p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaBook />
              <p className="text-lg text-center">Document Management </p>
            </div>
            <div className="transition-all duration-200 ease-in-out w-48 h-28 flex flex-col justify-center items-center text-6xl font-bold lg:h-36">
              <FaLaptopCode />
              <p className="text-lg">Software Solution Sale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
