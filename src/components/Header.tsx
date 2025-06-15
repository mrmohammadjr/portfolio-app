import { useState, useRef,use } from "react";
import Logo from "../media/photostudio_1744969368304.png"
import {ThemeContext,ThemeProvider} from "../context/ThemeContext"
interface Props { 
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ setItem }) => {
  const { theme,toggleTheme } = use(ThemeContext)
  return (
    <div className={`lg:flex z-10 fixed lg:top-0 justify-between items-center p-8 sm:hidden w-full ${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} frank`}>
      <div>
        <img onClick={()=> setItem("home")} src={Logo} className={`w-1/12 ${theme === "light" ? "border-none" :"border-2 border-white"}`} />
      </div>
      <div className="flex justify-center w-auto gap-11 font-bold text-2xl">
        <h1 onClick={()=> setItem("about")}>about</h1>
        <h1 onClick={()=> setItem("skills")}>skills</h1>
        <h1 onClick={()=> setItem("projects")}>projects</h1>
        <h1 onClick={()=> setItem("contacts")}>contacts</h1>
        <i onClick={toggleTheme} className={`pi ${theme === "light" ? "pi-sun" : "pi-moon"} text-2xl`}></i>
      </div>
    </div>
  );
};

const SmallHeader: React.FC<Props> = ({ setItem }) => {
  const [menu, setMenu] = useState<boolean>(false)
  const element = useRef<HTMLDivElement>(null);
  const { theme,toggleTheme } = use(ThemeContext)
  function menuEvent(prop: string) : void{
    setItem(prop)
    setMenu((l)=> !l)
  }
  return (
    <div className={`p-3 lg:hidden sm:fixed top-0 w-full ${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} frank z-10`}>
      <div className="flex gap-5 justify-between items-center">
        <div className="flex gap-5 items-center">
        <i 
          className={`pi pi-bars text-2xl`} 
          onClick={() => setMenu((l) => !l)} 
        ></i>
        <img onClick={()=> setItem("home")} src={Logo} className={`w-[2.5rem] ${theme === "light" ? "border-none" :"border-2 border-white"}`} />
        </div>
        <i onClick={toggleTheme} className={`pi ${theme === "light" ? "pi-sun" : "pi-moon"} text-2xl`}></i>
      </div>
      {menu && (
        <div 
          className="backdrop-blur-sm transition delay-150 duration-1000 ease-in-out fixed inset-0 h-screen w-full z-50 p-3">
                <i className={`pi pi-times text-2xl ${menu === true ? "block" : "hidden"}`} onClick={()=> setMenu((l)=> !l)}></i>
          <ul className={`${theme === "light" ? "text-[rgb(102,102,102)] border-[#161616]" : "text-white border-[rgb(102,102,102)]"} text-white pl-3 pt-3`}>
            <li className={`my-4 border-l-4 ${theme === "light" ? "text-[rgb(102,102,102)] border-[#161616]" : "text-white border-white"}`}><p className="pl-2" onClick={()=> menuEvent("about")}>About</p></li>
            <li className={`my-4 border-l-4 ${theme === "light" ? "text-[rgb(102,102,102)] border-[#161616]" : "text-white border-white"}`}><p className="pl-2" onClick={()=> menuEvent("skills")}>Skills</p></li>
            <li className={`my-4 border-l-4 ${theme === "light" ? "text-[rgb(102,102,102)] border-[#161616]" : "text-white border-white"}`}><p className="pl-2" onClick={()=> menuEvent("projects")}>Projects</p></li>
            <li className={`my-4 border-l-4 ${theme === "light" ? "text-[rgb(102,102,102)] border-[#161616]" : "text-white border-white"}`}><p className="pl-2" onClick={()=> menuEvent("contacts")}>Contacts</p></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export {Header,SmallHeader};