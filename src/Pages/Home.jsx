import React from "react";
import {
  Hero,
  About,
  SkillsBanner,
  Contact,
  // Projects,
} from "../Components/Home/index";

const Home = () => {
 
  return (
    <main className="transition-all duration-150 ease-in-out w-[95vw] mx-auto sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw]">
      <Hero />
      <About />
      <SkillsBanner />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
};

export default Home;
