import React from "react";
import { socialLinks } from "../../utils/data/SocialLinks";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isDarkmode } = useSelector((store) => store.navbar);

  return (
    <section
      className={` font-poppins  ${
        isDarkmode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="pt-10 grid grid-cols-1 gap-y-5 w-[95vw] mx-auto md:w-[85vw] lg:w-[65vw]">
        <div className="md:flex justify-between md:items-center space-y-2">
          <div className="flex flex-col space-y-3 p-2 md:py-20 items-start w-[90vw] md:w-[50vw] lg:w-[30vw]">
            <h1 className="text-lg font-bold capitalize lg:text-4xl">
              shakil dongarkar
            </h1>
            <p className="text-sm w-full  font-poppins leading-relaxed">
              Results-driven and dedicated Pre Sales & Sales Consultant with an
              extensive experience in BFSI sector, providing professional sales
              support services, developing sales collaterals, and making sales
              proposals.
            </p>
          </div>
          <div className="flex flex-col space-y-2 p-2 lg:space-y-5">
            <h1 className="text-lg font-bold capitalize lg:text-4xl">
              social links
            </h1>
            <div className="flex space-x-3 text-xl md:justify-center lg:text-3xl">
              {socialLinks.map((link) => {
                return (
                  <a
                    href={link.path}
                    target="_blank
                "
                    rel="noreferrer"
                    key={link.id}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-3 text-sm font-bold py-5 border-t-2 border-gray-50">
          <span>&copy; copyright {new Date().getFullYear()}</span>
          <a
            href="https://aditya-mall.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Made by Aditya Mall
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
