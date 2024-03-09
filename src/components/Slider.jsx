import React, { useState, useEffect, useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSidebar);
    return () => document.removeEventListener("click", closeSidebar);
  }, []);

  return (
    <>
      <button
        onClick={(e) => {
          toggleSidebar();
          e.stopPropagation();
        }}
        className=" text-black p-2  rounded-md m-4 fixed right-0"
      >
        {isOpen ? <FiAlignJustify /> : <FiAlignJustify />}
      </button>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-fit bg-white w-64 flex flex-col justify-between transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <ul className="mt-4">
            <li className="py-2">
              <a href="#home">HOME</a>
            </li>
            <li className="py-2">
              <a href="#whyUs">WHY US</a>
            </li>
            <li className="py-2">
              <a href="#ourWork">OUR WORK</a>
            </li>
            <li className="py-2">
              <a href="#services">SERVICES</a>
            </li>
            <li className="py-2">
              <a href="#insights">INSIGHTS</a>
            </li>
            <li className="py-2">
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
