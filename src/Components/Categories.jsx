import React from "react";

const Categories = ({ categories, filterCategoryWise, value }) => {
  return (
    <div className="transition-all duration-200 ease-in-out flex justify-center space-x-5 p-4">
      {categories.map((category, index) => {
        return (
          <button
            id={category}
            key={index}
            className={`transition-all duration-200 ease-in-out text-sm font-bold lg:text-lg ${
              value === index
                ? "border-b-2 border-black"
                : "border-b-2 border-white"
            }`}
            onClick={() => filterCategoryWise(category, index)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
   