import React from "react";
// import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div id="whyUs" className="flex flex-col items-center justify-center text-center lg:text-6xl text-3xl text-black">
        <div className="m-10 font-extrabold " id="trust">TRUSTED PARTNERS</div>
        <div className="mb-16 w-10 lg:w-fit flex flex-row justify-around items-center space-x-6 lg:space-x-20">
          <img className="w-28"  src="./dhl.png" alt="DHL" />
          <img className="w-28" src="./lucria.png" alt="Lucria" />
          <img className="w-28" src="./ping-pong.png" alt="Ping Pong" />
          <img className="w-28" src="./meta-partner.png" alt="Meta Partner" />
          <img className="w-28" src="./google-partner.png" alt="Google Partner" />
          <img className="w-28" src="./shopify.png" alt="shopify Partner" />
        </div>
      </div>

        <div className="flex p-5 justify-between">
          <div className=" w-fit sm:w-1/2" >

            <h2 className="text-black lg:text-4xl text-xl font-bold">
              <span className="p-1 bg-orange-500 text-white lg:text-4xl text-xl">
                Who we are?
              </span>{" "}
              We are a global social media and influencer marketing agency
              <span className="text-orange-400 p-1">powered by technology</span>
            </h2>

            <div className="mt-10">
              <p>
                Socially Powerful, founded in 2017, stood as pioneers of the
                industry. Today, we are a global, award-winning leading social and{" "}
                <span className="text-orange-400 ">influencer marketing</span>{" "}
                agency with offices in the UK, US, Europe and Middle-East.
              </p>
              <p className="mt-5">
                Embodying a social-first ethos, our social marketing agency
                  simplifies the complexities of social media platforms, influencer
                  marketing, paid social and advertising with technology and
                  performance at our core to find solutions to brand problems.
              </p>
              <p className="mt-5">
                Recognising that brand success goes beyond surface-level metrics,
                  our social agency prioritises connections to culture, marketing
                  performance, and guaranteed results. By cutting out social media
                  noise, we create authentic relationships and craft multi-dimensional
                  social marketing narratives for global brands across all geographies
                  and platforms.
              </p>
              <p className="mt-5">
                Welcome to Socially Powerful,{" "}
                <span className="text-orange-500 font-semibold ">
                  where attention meets guaranteed impact.
                </span>
              </p>
            </div>

            <div className="flex sm:hidden flex-col justify-between gap-8 mt-6" >

            <div className="flex justify-between w-fit border-2 border-gray-300 p-5 rounded-md gap-7" >
              <div >
                <h1 className="text-4xl font-semibold" >Forbes</h1>
                <p className="text-2xl" >Featured Founders</p>
              </div>
              <img className="w-28 h-16" src="./f-logo.png" alt="Forbes" />

            </div>

            <div className="flex justify-between w-fit border-2 border-gray-300 p-5 rounded-md gap-7" >
              <div >
                <h1 className="text-4xl font-semibold" >Global</h1>
                <p className="text-2xl" >Award-Winning Agency</p>
              </div>
              <img className="w-28 h-16 bg-black" src="./global-awards-winner.png" alt="award" />

            </div>

            <div className="flex justify-between w-fit border-2 border-gray-300 p-5 rounded-md gap-7" >
              <div >
                <h1 className="text-4xl font-semibold" >Creative</h1>
                <p className="text-2xl" >Featured Founders</p>
              </div>
              <img className="w-28 h-16 bg-black p-2" src="./creative-ideas.png" alt="ideas" />
            </div>

          </div>


          </div>

          <div className="hidden sm:flex flex-col justify-between" >

            <div className="flex justify-between w-fit border-2 border-gray-300 p-5 rounded-md gap-7" >
              <div >
                <h1 className="text-4xl font-semibold" >Forbes</h1>
                <p className="text-2xl" >Featured Founders</p>
              </div>
              <img className="w-28 h-16" src="./f-logo.png" alt="Forbes" />

            </div>

            <div className="flex justify-between w-fit border-2 border-gray-300 p-5 rounded-md gap-7" >
              <div >
                <h1 className="text-4xl font-semibold" >Global</h1>
                <p className="text-2xl" >Award-Winning Agency</p>
              </div>
              <img className="w-28 h-16 bg-black" src="./global-awards-winner.png" alt="award" />

            </div>

            <div className="flex justify-between w-fit border-2 border-gray-300 p-5 rounded-md gap-7" >
              <div >
                <h1 className="text-4xl font-semibold" >Creative</h1>
                <p className="text-2xl" >Featured Founders</p>
              </div>
              <img className="w-28 h-16 bg-black p-2" src="./creative-ideas.png" alt="ideas" />
            </div>

          </div>

        </div>

        <button className=" ml-5 border-2 border-black text-bold py-2 px-10 ">
          Read More
        </button>
        
        
      
      
    </>

  );
};

export default Analytics;
