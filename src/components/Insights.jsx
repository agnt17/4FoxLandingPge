import React from "react";
import News from "./News";

const Insights = () => {
  return (
    <>
      <div id="tech" className="bg-gray-200 hidden sm:block w-fit p-6 rounded-md m-5">
        <div className="flex flex-col items-center justify-center text-center mt-10 text-black text-6xl lg:text-6xl font-bold">
          Latest Insights
        </div>

        <div className="flex flex-col items-center">
          <p className="text-black text-3xl mt-20 font-bold w-[500px] text-center ">
            <span className="bg-orange-500 w-fit text-white py-1 px-4 rounded-sm border-2 border-white flex flex-col items-center mx-auto text-2xl cursor-pointer">
              Latest Posts
            </span>{" "}
            The latest news from the world of social marketing, advertising,
            influencers and paid social
          </p>
        </div>

        <News />
      </div>

      <div className="sm:hidden flex-col justify-center items-center w-sm bg-gray-200 p-6">
        <div className="flex flex-col items-center justify-center text-center mt-10 text-4xl font-bold">
          Latest Insights
        </div>
        <p className="text-black text-xl mt-20 font-bold mx-auto ">
          <span className="bg-orange-500 w-fit text-white py-1 px-4 rounded-sm border-2 border-white ml-8 text-sm">
            Latest Posts
          </span>{" "}
          The latest news from the world of social marketing, advertising,
          influencers and paid social
        </p>
        <News />
      </div>
    </>
  );
};

export default Insights;
