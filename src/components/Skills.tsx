import React,{useState,useEffect,use} from 'react';
import {ThemeContext,ThemeProvider} from "../context/ThemeContext"
import HtmlLogo from "../media/icons/htmlLogo.png"
import CssLogo from "../media/icons/cssLogo.png"
import JsLogo from "../media/icons/jsIcon.png"
import NextLogo from "../media/icons/nextIcon.png"
import ReactIcon from "../media/icons/reactIcon.png"
import TailwindIcon from "../media/icons/tailwindLogo.png"
import ReduxIcon from "../media/icons/reduxLogo.png"
import GitHubLogo from "../media/icons/githubLogo.png"
import TSLogo from "../media/icons/typescriptLogo.png"
interface Hardskills {
  id: number
  title: string
  mastery: number
  icon: string
}
const Skills = () => {
  const { theme,toggleTheme } = use(ThemeContext)
    const skill: Hardskills[] = [{
      id: 1,
      title: "HTML",
      mastery: 100,
      icon: HtmlLogo
    },{
      id: 2,
      title: "CSS",
      mastery: 100,
      icon: CssLogo
    },{
      id: 3,
      title: "JavaScript",
      mastery: 100,
      icon: JsLogo
    },{
      id: 4,
      title: "React",
      mastery: 100,
      icon: ReactIcon
    },{
      id: 5,
      title: "Next JS",
      mastery: 90,
      icon: NextLogo
    },{
      id: 6,
      title: "TypeScript",
      mastery: 80,
      icon: TSLogo
    },{
      id: 7,
      title: "Tailwind",
      mastery: 100,
      icon: TailwindIcon
    },{
      id: 8,
      title: "Redux",
      mastery: 100,
      icon: ReduxIcon
    }]
  
  return (
    <div className={`skills ${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} lg:py-20 sm:py-16 flex flex-col items-center frank`}>
      <h1 className={`lg:text-[3rem] sm:text-[1.5rem] border-b-2 ${theme === "light" ? "border-black" :"border-white"} font-bold text-center`}>My skills</h1>
      <p className="font-bold lg:text-3xl md:text-md sm:text-sm my-10">Get to know my skills</p>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 place-items-center mt-12">
        {skill.slice(0,8).map((item:Hardskills)=>(
          <div key={item?.id} className={`lg:w-[60%] flex flex-col items-center p-5 rounded-3xl ${theme === "light" ? "bg-[#d1d1d1] text-black" : "bg-[#252525] text-white"} lg:m-0 sm:m-4 animate-wiggle`}>
          <img src={item?.icon} className="w-1/2 lg:my-5 sm:my-2" />
            <h1 className="lg:my-5 sm:my-2 lg:text-2xl sm:text-xl source">{item?.title}</h1>
            <h1 className={`${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} p-3 rounded-2xl`}>{item?.mastery} %</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;