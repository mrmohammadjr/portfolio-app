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
      <div className="flex justify-start items-center mt-5">
        <h1 className=" lg:mt-0 mr-5 sm:mt-6 lg:text-2xl sm:text-2xl font-bold">
          Made With
        </h1>
        <Libraries />
      </div>
       <p className="lg:text-xl sm:text-md mt-6 text-center">Designed & Created by Mohammad Javad Rasooli</p>
    </div>
  );
};

export default Footer;
