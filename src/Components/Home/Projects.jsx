import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../utils/data/projects";
import { useState } from "react";
import Categories from "../Categories";

const categories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Projects = () => {
  const [list, setList] = useState(projects);
  const [value, setValue] = useState(0);

  const filterCategoryWise = (category, index) => {
    setValue(index);
    if (category === "all") {
      return setList(projects);
    } else {
      const newList = projects.filter((item) => item.category === category);
      return setList(newList);
    }
  };

  return (
    <section
      data-aos="fade-in"
      id="projects"
      className="transition-all duration-200 ease-in-out flex flex-col space-y-10 py-10 lg:py:20"
    >
      <div className="transition-all duration-200 ease-in-out flex flex-col items-center space-y-2 font-poppins">
        <h1 className="transition-all duration-200 ease-in-out text-4xl font-bold border-b-4 border-black p-1 lg:text-7xl">
          Projects
        </h1>
        {/* <p className="text-sm">things i have build.</p> */}
      </div>
      <div className="mt-5 transition-all duration-200">
        <Categories
          categories={categories}
          filterCategoryWise={filterCategoryWise}
          value={value}
        />
      </div>
      <div className="py-5 transition-all duration-200 ease-in-out grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 xl:grid-cols-4 ">
        {list.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
