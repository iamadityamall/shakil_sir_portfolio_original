import React from "react";
import ButtonAnimation from "../ButtonAnimation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebarButton } from "../../Features/Navbar/navSlice";
import { Sidebar } from "./index";
import { navLinks } from "../../utils/data/Navlinks.js";
import { Link } from "react-scroll/modules";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { toggleDarkmodeButton } from "../../Features/Navbar/navSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { showSidebar, isDarkmode } = useSelector((store) => store.navbar);

  return (
    <header className={`w-full z-10 fixed top-0 overflow-hidden transition-all duration-500 ease-in-out ${isDarkmode ? 'bg-black': 'bg-white'}`}>
      <nav className=" transition-all duration-500 ease-in-out flex justify-between p-2 w-[95vw] mx-auto sm:w-[90vw] md:w-[85vw] md:p-4 lg:w-[80vw] xl:w-[75vw]">
        <div className="transition-all duration-500 ease-in-out text-4xl py-4">
          SD
        </div>
        <ul className="transition-all duration-500 ease-in-out hidden lg:grid lg:grid-cols-4 lg:items-center lg:justify-items-center lg:gap-x-4">
          {navLinks.map((link) => {
            return (
              <Link
                to={link.path}
                spy={true}
                key={link.id}
                smooth={true}
                duration={500}
                offset={-50}
                delay={200}
                isDynamic={true}
                className="transition-all duration-150 ease-in-out capitalize p-2 hover:border-b-2 hover:border-black font-montserrat hover:font-bold cursor-pointer"
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center md:text-3xl  md:mr-2 md:mb-2">
          <button onClick={() => dispatch(toggleDarkmodeButton())} >
            {isDarkmode ? (
              <BsSunFill className="-translate-x-12 text-3xl md:-translate-x-0" />
            ) : (
              <MdDarkMode className="-translate-x-12 text-3xl md:-translate-x-0" />
            )}
          </button>
          <button
            className="lg:hidden translate-all duration-500 ease-in-out fixed right-3 top-10 z-50"
            onClick={() => dispatch(toggleSidebarButton(!showSidebar))}
          >
            <ButtonAnimation showSidebar={showSidebar} />
          </button>
        </div>
      </nav>
      <Sidebar />
    </header>
  );
};

export default Navbar;
