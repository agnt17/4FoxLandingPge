import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen text-center flex flex-col justify-center items-center mx-auto" style={{ background: 'linear-gradient(to top, #ff4500, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))' }}>
        <h1 className="w-fit md:text-9xl sm:text-5xl text-6xl font-extrabold select-none">
          BUISNESS SOLUTIONS
        </h1>
        <div className="flex justify-center items-center pr-3">
          <p className="md:text-5xl sm:text-2xl text-l font-bold py-4">
            THAT TRULY <span className="text-orange-500" >INSPIRING</span> GROWTH
          </p>
        </div>
        <div className="flex lg:flex-row flex-col">
          <button className="bg-black mt-[3rem] lg:mr-10 my-6 mx-auto py-3 px-8 text-white hover:scale-105 duration-300 ease-in-out">
            Services
          </button>
          <button className="mt-[3rem] lg:mr-10 my-6 mx-auto py-3 px-8 text-black border-2 border-black hover:scale-105 duration-300 ease-in-out">
           SEND US A BRIEF
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
