import React, { useState, use } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import OnlineStore from "../media/food-price-barometer-which-supermarkets-are-cheapest.jpeg";
import MovieBox from "../media/itunes-movies-130813.jpg";
import AI from "../media/icons/New Project.png"
import Store from "../media/icons/store.png"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
interface ProjectsType {
  id: number;
  title: string;
  link: string;
  gitHublink: string;
  poster: string
  description: string;
}
const Projects = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  const projects: ProjectsType[] = [
    {
      id: 1,
      title: "MH-GPT",
      link: "https://mh-gpt.vercel.app/",
      gitHublink: "https://github.com/mrmohammadjr/mh-gpt",
      poster: AI,
      description:
        "An AI chat , developed with REACT JS and TYPESCRIPT libraries , using using REDUXTOOLKIT to store global data, TAILWIND CSS for UI styles and using Groq SDK ai model and react-i18 for translate",
    },
    {
      id: 2,
      title: "Online Store",
      link: "https://shop-app-flax.vercel.app/",
      gitHublink: "https://github.com/mrmohammadjr/shop-app",
      poster: Store,
      description:
        "An online store for buying goods, developed with REACT JS and TYPESCRIPT libraries, using REDUXTOOLKIT to store global data, TAILWIND CSS for UI styles and using PLATZI API",
    },
  ];

  return (
    <div
      className={`projects ${
        theme === "light"
          ? "bg-[#FDFFFC] text-black"
          : "bg-[#161616] text-white"
      } lg:py-20 sm:py-16 flex flex-col items-center h-auto frank`}
    >
      <h1
        className={`lg:text-[4rem] sm:text-[1.5rem] border-b-2 ${
          theme === "light" ? "border-black" : "border-white"
        } font-bold text-center mb-16`}
      >
        My projects
      </h1>
      <div className="w-full projectItem lg:grid lg:grid-cols-2">
         {projects.map((item: ProjectsType, index) => (
          <div className="flex flex-col items-center lg:my-0 sm:my-6">
            <div
              className={`flex justify-center py-5 w-[70%] group border-4 relative z-0 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:border-0 ${
                theme === "light" ? "border-[#4c4c4c] bg-gray-500" : "border-[#e8e8e8]"
              }`}
            >
              <img
                src={item?.poster}
                alt="فیلم 1"
                className="lg:w-[12rem] lg:h-[12rem] md:w-[40%] sm:w-[6rem] "
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center gap-5">
                <a
                  href={item?.gitHublink}
                  className={`flex items-center gap-3 ${
                    theme === "light"
                      ? "bg-[#FDFFFC] text-black"
                      : "bg-[#161616] text-white"
                  } lg:text-2xl sm:text-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-full p-3`}
                >
                  {" "}
                  <i
                    className={`pi pi-github ${
                      theme === "light" ? "text-black" : "text-white"
                    } `}
                  ></i>
                  github
                </a>
                <a
                  href={item?.link}
                  className={`${
                    theme === "light"
                      ? "bg-[#FDFFFC] text-black"
                      : "bg-[#161616] text-white"
                  } lg:text-2xl sm:text-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 rounded-full p-3`}
                >
                  {item.title}
                </a>
              </div>
            </div>
            <p className="w-[70%] lg:mt-11 sm:mt-5 lg:text-xl md:text-md sm:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
