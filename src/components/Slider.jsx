import React, { useState, useEffect, useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
    document.addEventListener('click', closeSidebar);
    return () => document.removeEventListener('click', closeSidebar);
  }, []);

  return (
    <>
      <button onClick={(e) => { toggleSidebar(); e.stopPropagation(); }} className=" text-black p-2  rounded-md m-4 fixed right-0">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div ref={sidebarRef} className={`fixed top-0 right-0 h-fit bg-white w-64 flex flex-col justify-between transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <ul className="mt-4 mt-3">
            <li className="py-2"><a href="#home">HOME</a></li>
            <li className="py-2"><a href="#whyUs">WHY US</a></li>
            <li className="py-2"><a href="#ourWork">OUR WORK</a></li>
            <li className="py-2"><a href="#services">SERVICES</a></li>
            <li className="py-2"><a href="#tech">INSIGHTS</a></li>
            <li className="py-2 bg-orange-500 p-2 text-white"><a href="#tech">CONTACT US</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
