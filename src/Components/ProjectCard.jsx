// import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ name, image, category, info, url, technologyUsed }) => {
  const translateFull = (id) => {
    const aside = document.querySelector(`#${id}`);
    aside.style.transform = "translateY(0)";
  };
  const translateZero = (id) => {
    const aside = document.querySelector(`#${id}`);
    aside.style.transform = "translateY(75%)";
  };
  return (
    <article
      className="transition-all duration-700 ease-in-out relative w-full h-56  rounded-lg overflow-hidden cursor-pointer shadow-2xl lg:hover:scale-105"
      onMouseOver={() => translateFull(name)}
      onMouseLeave={() => translateZero(name)}
    >
      <figure className="transition-all duration-700 ease-in-out absolute w-full h-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>
      <aside
        id={name}
        className="transition-all duration-700 ease-in-out absolute bg-black/90 h-full w-full p-4 font-poppins flex flex-col justify-between translate-y-3/4 text-white
      "
      >
        <div className="transition-all duration-700 ease-in-out flex justify-between items-center">
          <h1 className="font-bold ">{name}</h1>
        </div>
        <p className="text-sm">{info}</p>
        <footer className="flex justify-between items-center">
          <div className="flex text-sm space-x-2 items-center">
            {technologyUsed.map((item, index) => {
              
              return (
                <span key={index} className="bg-gray-500 px-2 py-1">
                  {item}
                </span>
              );
            })}
          </div>
          <figure className="text-2xl flex space-x-5 items-center">
            {/* <FaGithub /> */}
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-150 ease-in-out text-sm font-bold lg:hover:text-red-500"
            >
              live
            </a>
          </figure>
        </footer>
      </aside>
    </article>
  );
};

export default ProjectCard;
