import React, { use } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import Libraries from "./Libraries";
import Logo from "../media/photostudio_1744969368304.png";
interface Props {
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const Footer: React.FC<Props> = ({ setItem }) => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-[#FDFFFC] text-black"
          : "bg-[#161616] text-white"
      } frank pt-10 px-10`}
    >
      <img
        src={Logo}
        className={`lg:w-[4%] sm:w-[14%] ${
          theme === "light" ? "border-none" : "border-2 border-white"
        }`}
      />
      <div className="mt-7 border-b-2 w-fit flex justify-start">
        <a href="mailto:mr.mohammadjavadrasooli@gmail.com" className="">
          <i
            className={`${
              theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"
            } pi pi-envelope sm:p-3 lg:text-3xl sm:text-3xl cursor-pointer`}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-javad-rasooli-282505260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className=""
        >
          <i
            className={`${
              theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"
            } pi pi-linkedin sm:p-3 lg:text-3xl sm:text-3xl cursor-pointer`}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/mr_mohammadjr?utm_source=qr&igsh=eGFteGFjM3UyM2pn"
          className=""
        >
          <i
            className={`${
              theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"
            } pi pi-instagram sm:p-3 lg:text-3xl sm:text-3xl cursor-pointer`}
          ></i>
        </a>
        <a href="https://github.com/mrmohammadjr" className="">
          <i
            className={`${
              theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"
            } pi pi-github  sm:p-3 lg:text-3xl sm:text-3xl cursor-pointer`}
          ></i>
        </a>
      </div>
      <div className="flex justify-start items-center mt-5">
        <h1 className=" lg:mt-0 mr-5 sm:mt-6 lg:text-2xl sm:text-2xl font-bold">
          Made With
        </h1>
        <Libraries />
      </div>
      <p className="lg:text-md sm:text-md mt-8 text-gray-500 text-center">
        Designed & Created by Mohammad Javad Rasooli
      </p>
    </div>
  );
};

export default Footer;
