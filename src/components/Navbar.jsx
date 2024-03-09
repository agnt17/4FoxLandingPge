import React, { useEffect, useState } from "react";
import Sidebar from "./Slider";

const Navbar = () => {
  const handleLogoClick = () => {
    // Redirect to the home page
    window.location.href = "/"; // Replace "/" with the actual path of your home page
  };
  const [showLinks, setShowLinks] = useState(window.innerWidth > 1080);

  useEffect(() => {
    const handleResize = () => {
      setShowLinks(window.innerWidth > 1080);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="home"
      className="fixed top-0 left-0 right-0 z-50 flex justify-around items-center bg-orange-300 sm:bg-white p-2 sm:p-0"
    >
      <div className="flex items-center sm:hidden">
        <img
          className="w-52 p-4 cursor-pointer"
          src="./fox-logo.png"
          alt="logo"
          onClick={handleLogoClick}
        />
        <Sidebar />
      </div>
      <img
        className="w-52 hidden sm:block p-4 cursor-pointer"
        src="./fox-logo.png"
        alt="logo"
        onClick={handleLogoClick}
      />

      {showLinks && (
        <div className="hidden sm:flex md:flex gap-12">
          <a
            href="#hero"
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600"
          >
            HOME
          </a>
          <a
            href="#whyUs"
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 "
          >
            WHY US
          </a>
          <a
            href="#ourWork"
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 "
          >
            OUR WORK
          </a>
          <a
            href="#services"
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 "
          >
            SERVICES
          </a>
          <a
            href="#tech"
            className="hover:scale-110 transition-all ease-in-out duration-300 hover:text-orange-600 "
          >
            INSIGHTS
          </a>
        </div>
      )}

      <button className="hidden sm:block bg-orange-600 text-white py-2 px-6 rounded-sm">
        CONTACT US
      </button>
    </div>
  );
};

export default Navbar;
