import React from "react";
import MainImg from "../Assets/mainbanner.png";

const Main = () => {
  return (
    <div
      className="bg-cover bg-center h-[35em] md:h-[50vh] lg:h-[75vh] w-full relative "
      style={{ backgroundImage: `url(${MainImg})` }}
    >
      <div className="absolute left-[calc(50%+2em)] md:left-[calc(50%+8em)] lg:left-[calc(50%+12em)] transform -translate-x-1/2 top-[7em]  md:top-22 lg:top-26 pl-12 md:p-0 ">
        <p className="text-white font-Anton text-lg md:text-xl">
          Try Out Our New Meal
        </p>
        <h2 className="text-3xl md:text-4xl text-red-700 font-bold">DOUBLE</h2>
        <h2 className="text-3xl md:text-4xl text-yellow-800 font-bold">NUKE</h2>
        <h2 className="text-3xl md:text-4xl text-white font-Anton font-bold">
          BURGER
        </h2>
        <button className="px-4 py-2 mt-2 text-white bg-transparent border border-white rounded-full hover:bg-orange-500 hover:text-white transition duration-300 text-md md:text-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Main;
