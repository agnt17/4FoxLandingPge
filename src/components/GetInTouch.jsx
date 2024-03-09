function GetInTouch() {
  return (
    <>
      <hr className="w-5/6 border-b-4 flex items-center mx-auto mt-10 mb-10" />
      <div className="flex flex-col gap-10 mt-10 lg:m-1">
        <h1 className="text-center text-5xl  font-semibold lg:text-7xl lg:font-bold  text-extrabold">
          GET IN TOUCH
        </h1>

        <p className="mx-10 lg:mx-auto text-center  max-w-4xl font-semibold  ">
          We'll show you how to start powerful conversation, drive social
          engagement, build your brand, hit sales targets or meet other goals
          you have, wherever you are in the world.
        </p>
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-400 w-fit p-4 rounded-md flex justify-center mx-auto px-5 cursor-pointer">
          WORK WITH US
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
