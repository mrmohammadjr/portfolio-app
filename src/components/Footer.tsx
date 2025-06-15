import React,{ use } from 'react';
import {ThemeContext,ThemeProvider} from "../context/ThemeContext"
import Libraries from "./Libraries"
import Logo from "../media/photostudio_1744969368304.png"
interface Props { 
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const Footer: React.FC<Props> = ({ setItem }) => {
  const { theme,toggleTheme } = use(ThemeContext)
  return (
    <div className={`${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} frank flex flex-col items-center pt-10`}>
      <img src={Logo} className={`lg:w-[7%] sm:w-[14%] ${theme === "light" ? "border-none" :"border-2 border-white"}`} />
        <h1 className="text-center lg:mt-12 sm:mt-6 lg:text-3xl sm:text-2xl font-bold">Made With</h1>
      <Libraries />
      <p className="lg:text-2xl sm:text-md my-6 text-center">Designed & Created by Mohammad Javad Rasooli</p>
    </div>
  );
};

export default Footer;