import React,{ use } from 'react';
import Photo from "../media/photostudio_1744474472290.jpg"
import {ThemeContext,ThemeProvider} from "../context/ThemeContext"
interface Props { 
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const About: React.FC<Props> = ({ setItem }) => {
  const { theme,toggleTheme } = use(ThemeContext)
  return (
    <div className={`about ${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} lg:py-20 sm:py-16 flex flex-col items-center frank`}>
      <h1 className={`lg:text-[3rem] sm:text-[1.5rem] border-b-2 ${theme === "light" ? "border-black" :"border-white"} font-bold text-center`}>About Me</h1>
        <img src={Photo} className="w-1/2 my-10 rounded-full lg:hidden md:hidden sm:block transition-all duration-200 border-4 border-gray-500 hover:border-0 " />
        <p className="w-[80%]  lg:mt-16 sm:mt-12 font-light text-gray-500 lg:text-2xl sm:text-sm tracking-widest moveToRight">I'm Mohammad Javad, a <span className={`font-bold ${theme === "light" ? "text-black" : "text-white"}`}>front-end developer</span> with two years of hands-on experience in the field. My expertise lies in designing and implementing engaging user interfaces as well as optimizing user experience.

I'm very passionate about learning, and I constantly strive to deepen my knowledge and reach higher standards by studying documentation, watching educational videos, and gaining practical experience. My goal is to deliver projects that are technically excellent and offer users an enjoyable experience.

I'm now <span className={`font-bold ${theme === "light" ? "text-black" : "text-white"}`}>embarking on my freelancing journey</span> and eagerly seeking new opportunities to challenge myself and elevate the quality of my work.</p>
      <div className={`w-[60%] grid lg:grid-cols-3 sm:grid-cols-1 ${theme === "light" ? "bg-[#d1d1d1] text-black" : "bg-[#252525] text-white"} place-items-center gap-10 py-10 mt-48 lg:rounded-full sm:rounded-2xl`}>
        <h1 className="font-bold lg:text-3xl sm:text-2xl">Start a project</h1>
        <p className="lg:text-xl sm:text-sm text-center">Interested in working together? We should queue up a time to chat.</p>
        <button onClick={()=> setItem("contacts")} className={`${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} p-5 source font-bold lg:text-xl sm:text-sm`}>Let's do this</button>
      </div>
    </div>
  );
};

export default About;