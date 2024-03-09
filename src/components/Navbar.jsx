import React from "react";
import Sidebar from "./Slider";

const Navbar = () => {
  return (
    <div id="home" className="fixed top-0 left-0 right-0 z-50 flex justify-around items-center bg-orange-300 sm:bg-white p-2 sm:p-0" >
      <div className="flex items-center sm:hidden" >
        <img className="w-52" src="./fox-logo.png" alt="logo" />
        <Sidebar />
      </div>
      <img className="w-52 hidden sm:block " src="./fox-logo.png" alt="logo" />
      
      <div className="hidden sm:flex gap-12" >
        <a href="#home" className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600" >HOME</a>
        <a href="#whyUs" className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 " >WHY US</a>
        <a href="#ourWork" className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 " >OUR WORK</a>
        <a href="#services" className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 " >SERVICES</a>
        <a href="#tech" className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 " >INSIGHTS</a>
      </div>
      <button className="hidden sm:block bg-orange-600 text-white py-2 px-6 rounded-sm " >CONTACT US</button>
    </div>
  );
};

export default Navbar;
