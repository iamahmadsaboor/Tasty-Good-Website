import React from "react";
import friedWonton from "../Assets/friedwonton.png";

const Friedwonton = () => {
  return (
    <div className="relative w-full h-[70vh]">
      {/* Image section without black overlay */}
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${friedWonton})` }}
      >
        {/* Text over the image */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="text-center text-white md:text-left md:pl-8">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-poppins animate-fadeIn shadow-lg">
              Get Free
            </h3>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins animate-fadeIn shadow-lg">
              Fried Wonton
            </h1>
            <h4 className="mt-2 font-roboto text-lg md:text-xl lg:text-2xl animate-fadeIn shadow-lg">
              For every purchase <b className="px-1">NUKE BURGERS</b> Variants
            </h4>
            <button className="px-4 py-2 mt-4 font-roboto text-white bg-transparent border border-white rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friedwonton;
