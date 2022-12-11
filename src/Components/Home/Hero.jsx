import React from "react";
import { socialLinks } from "../../utils/data/SocialLinks";
import heroImage from "../../assests/images/male_model.jpeg";
import { useSelector } from "react-redux";
import Link from "react-scroll/modules/components/Link";

const Hero = () => {
  const { isDarkmode } = useSelector((store) => store.navbar);
  return (
    <section
      id="hero"
      className="h-screen md:mt-0 md:h-screen grid grid-cols-1 items-center justify-items-end md:grid-cols-2 lg:mt-10"
    >
      <div
        data-aos="fade-in"
        className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-2 py-10 px-4 "
      >
        <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-2">
          <span className="text-2xl font-poppins font-bold lg:text-4xl xl:text-6xl">
            Expert in BFSI, Sales and Pre sales.
          </span>

          <h6 className="text-sm font-bold font-poppins p-1 lg:text-lg xl:text-xl">
            Hi, my name is{" "}
            <span className="text-lg ml-1 font-poppins text-[#413F42]">
              Shakil Dongarkar, Graduate from Mumbai
            </span>
          </h6>
        </div>
        <p className="font-poppins xl:text-lg">
          A Passionate, Innovative and agile person, looking for{" "}
          <span className="border-b-2 border-[#413F42]">
            Sales opportunities in India, Middle East and East Africa.
          </span>{" "}
        </p>
        <div className="translate-all duration-[2000ms] ease-in-out flex flex-col space-y-6 items-start">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            delay={200}
            offset={-50}
            isDynamic={true}
            className={`mt-4 px-6 py-4 bg-black text-white rounded-lg font-poppins cursor-pointer ${
              isDarkmode && "bg-white text-black"
            }`}
          >
            Let's connect
          </Link>
          <div className="translate-all duration-[2000ms] ease-in-out flex space-x-5  items-center justify-start">
            {socialLinks.map((link) => {
              const { id, path, icon } = link;
              return (
                <a
                  href={path}
                  key={id}
                  rel="noreferrer"
                  target="_blank"
                  className="text-3xl"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <figure
        data-aos="fade-in"
        className="hidden w-full overflow-hidden rounded-xl md:block 2xl:w-5/6 "
      >
        <img
          src={heroImage}
          alt="hero"
          className="h-full w-full object-cover "
        />
      </figure>
    </section>
  );
};

export default Hero;
