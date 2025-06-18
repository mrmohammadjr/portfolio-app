import React, { use } from "react";
import LightBg from "../media/lightBg.jpg";
import DarkBg from "../media/darkBG.jpg";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import { ReactTyped } from "react-typed";
interface Props {
  setItem: React.Dispatch<React.SetStateAction<string>>;
}
const Info: React.FC<Props> = ({ setItem }) => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div
      className={`frank lg:h-[40rem] md:h-[20rem] sm:h-[20rem] w-full lg:mt-[126px] md:mt-[126px] sm:mt-16 ${
        theme === "light"
          ? "bg-[#e5e5e5] text-black infoLight"
          : "bg-[#494949] text-white infoDark"
      }`}
    >
      <div className="w-full lg:pt-16 md:pt-8 sm:p-4 pl-10 flex flex-col lg:gap-16 md:gap-8 sm:gap-8">
        <h1 className="3xl:text-9xl 2xl:text-7xl xl:text-6xl lg:text-7xl md:text-4xl sm:text-[1.5rem] 3xl:text-left lg:text-left md:text-left sm:text-center">
          Hi EveryOne
        </h1>
        <h1 className="3xl:text-6xl 2xl:text-4xl xl:text-5xl lg:text-4xl sm:text-2xl 3xl:text-left lg:text-left md:text-left sm:text-center">
          I'm Mohammad Javad Rasooli{" "}
        </h1>
        <ReactTyped
          strings={["Front End Developer"]}
          typeSpeed={40}
          backSpeed={80}
          loop
          className="source 3xl:text-7xl lg:text-[2.6rem] sm:text-[1.5rem] font-bold 3xl:text-left lg:text-left md:text-left sm:text-center"
        />
        <div className="lg:w-[100%] md:w-[50%] sm:w-full flex lg:justify-start md:justify-start sm:justify-center lg:gap-44 md:gap-24 sm:gap-12 md:pl-0 sm:pl-0 font-bold lg:text-xl">
          <h1 onClick={()=> setItem("contacts")} className={`${theme === "light" ? "bg-[#161616] text-white hover:bg-white hover:text-black" : "bg-[#FDFFFC] text-black hover:bg-black hover:text-white"} transition delay-150 cursor-pointer duration-300 ease-in-out rounded-2xl p-2 3xl:text-5xl `}>Contact Me  <i 
          className={`pi pi-arrow-up-right`} 
        ></i></h1>
          <a href="https://drive.google.com/file/d/1NhFFk_eyOePB3Sr1YjrxI3p6sfrU-SBO/view?usp=drive_link" className={`${theme === "light" ? "bg-[#161616] text-white hover:bg-white hover:text-black" : "bg-[#FDFFFC] text-black hover:bg-black hover:text-white"} transition delay-150 duration-300 ease-in-out rounded-2xl p-2 3xl:text-5xl `} download >My CV <i 
          className={`pi pi-download`}
        ></i></a>
        </div>
      </div>
    </div>
  );
};

export default Info;
