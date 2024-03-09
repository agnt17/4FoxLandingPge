import React from "react";

const Globe = () => {
  // this page is dedicated to channels section

  return (
    <>
    
      <div className="flex flex-col items-center justify-center text-center p-10" style={{ background: 'linear-gradient(to top, #ff4500, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))' }} >
        <div className="flex flex-col items-center justify-center text-center lg:text-7xl text-2xl text-black mt-20 font-extrabold">
          Our Channels
        </div>
        <div>
          <img src="./channels.png" alt="channels" className="w-8/12 flex mx-auto mt-10" />
        </div>
        <div className="relative flex flex-col items-center justify-center text-center mt-52 text-black m-10">
          <img src="./earth.png" alt="earth" className="  w-1/2" />
          <div className="absolute left-[8%] bottom-[60%]" >
            <img src="./UAE-flag.jpeg"    className="sm:w-[100px] w-9 " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-9 font-bold text-sm" >U.A.E</h1>
          </div>

          <div className="absolute left-[10%] bottom-[85%] sm:left-[20%] sm:bottom-[90%]" >
            <img src="./american-flag.png"    className="sm:w-[100px] w-9  " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-9 font-bold text-sm" >U.S.A</h1>
          </div>

          <div className="absolute left-[43%] sm:left-[47%] bottom-[105%]" >
            <img src="./indian-flag.jpeg"   className="sm:w-[100px] w-9 " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-9  font-bold text-sm " >INDIA</h1>
          </div>

          <div className="absolute right-[10%] bottom-[85%] sm:right-[20%] sm:bottom-[90%]" >
            <img src="./uk-image.jpeg"    className="sm:w-[100px] w-10  " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-10  font-bold text-sm " >U.K</h1>
          </div>

          <div className="absolute right-[10%] bottom-[60%] text-center" >
            <img src="./australia-flag.jpeg"    className="sm:w-[100px] w-10 " alt="UAE flag" />
            <h1 className="sm:w-[100px] w-10  font-bold text-xs sm:text-sm " >AUSTRALIA</h1>
          </div>
          
          <p className=" mt-20 text-3xl sm:text-8xl sm:font-extrabold mb-6 font-bold sm:absolute sm:bottom-[10%] sm:mt-0 ">
            Amazon Global SPN certified
          </p>

          <p className=" text-lg lg:text-2xl text-white ">
            At Socially Powerful, we have built a{" "}
            <span className="text-black">global social</span> marketing
            <span className="text-black"> agency</span>. Our social excels in
            social marketing campaigns across, influencer marketing, paid social
            and startegy, that engage global audiences.
          </p>
        </div>
        
      </div>
      <div className="flex mt-10" >
        <button className="bg-black text-white px-10 py-2 mx-auto" >LEARN MORE</button>
      </div>

      
      
    </>
  );
};

export default Globe;
