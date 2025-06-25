import React,{ use } from 'react';
import {ThemeContext,ThemeProvider} from "../context/ThemeContext"
import Form from './Form';
interface Props {
  // Define your props here
}

const Contacts = (props: Props) => {
  const { theme,toggleTheme } = use(ThemeContext)
  return (
    <div className={`contacts ${theme === "light" ? "bg-[#FDFFFC] text-black" : "bg-[#161616] text-white"} lg:py-20 sm:py-16 flex flex-col items-center frank`}>
      <h1 className={`lg:text-[3rem] sm:text-[1.5rem] border-b-2 font-bold ${theme === "light" ? "border-black" :"border-white"} text-center`}>Communication manners</h1>
      <h1 className="lg:text-[1.5rem] sm:text-[1rem] font-bold text-center my-10">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h1>
        <div className="grid lg:pl-[5%] sm:pl-[5%] lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[100%] items-center">
          <div className="flex flex-col w-[50%] animateContact">
            <div className={`flex items-center rounded-full transition delay-150 duration-300 ease-in-out w-auto hover:bg-n ${theme === "light" ? "text-[#FDFFFC] hover:text-[#161616]" : "text-[#161616] hover:text-[#FDFFFC]"} px-5`}>
               <a href="mailto:mr.mohammadjavadrasooli@gmail.com" className="">
                <i className={`${theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"} pi pi-envelope lg:p-5 sm:p-3 lg:text-5xl sm:text-3xl cursor-pointer`}></i>
               </a>
               <p className="sm:text-sm">mr.mohammadjavadrasooli@gmail.com</p>
            </div>
            <div className={`flex items-center rounded-full transition delay-150 duration-300 ease-in-out w-full ${theme === "light" ? "text-[#FDFFFC] hover:text-[#161616]" : "text-[#161616] hover:text-[#FDFFFC]"} px-5 `}>
               <a href="https://www.linkedin.com/in/mohammad-javad-rasooli-282505260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="">
                <i className={`${theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"} pi pi-linkedin lg:p-5 sm:p-3 lg:text-5xl sm:text-3xl cursor-pointer`}></i>
               </a>
               <p className="">mohammad javad rasooli</p>
            </div>
            <div className={`flex items-center rounded-full transition delay-150 duration-300 ease-in-out w-auto ${theme === "light" ? "text-[#FDFFFC] hover:text-[#161616]" : "text-[#161616] hover:text-[#FDFFFC]"} px-5 `}>
               <a href="https://www.instagram.com/mr_mohammadjr?utm_source=qr&igsh=eGFteGFjM3UyM2pn" className="">
                <i className={`${theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"} pi pi-instagram lg:p-5 sm:p-3 lg:text-5xl sm:text-3xl cursor-pointer`}></i>
               </a>
               <p className="">mr_mohammadjr</p>
            </div>
            <div className={`flex items-center rounded-full transition delay-150 duration-300 ease-in-out w-auto ${theme === "light" ? "text-[#FDFFFC] hover:text-[#161616]" : "text-[#161616] hover:text-[#FDFFFC]"} px-5 `}>
               <a href="https://github.com/mrmohammadjr" className="">
                <i className={`${theme === "light" ? "text-[#161616]" : "text-[#FDFFFC]"} pi pi-github lg:p-5 sm:p-3 lg:text-5xl sm:text-3xl cursor-pointer`}></i>
               </a>
               <p className="">mrmohammadjr</p>
            </div>
          </div>
          <Form />
        </div>
    </div>
  );
};

export default Contacts;