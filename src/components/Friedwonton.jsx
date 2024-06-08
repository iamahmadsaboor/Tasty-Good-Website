import React from "react";
import friedWonton from "../Assets/friedwonton.png";

const Friedwonton = () => {
  const backgroundStyle = {
    backgroundImage: `url(${friedWonton})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
  };

  return (
    <div className="relative">
      <div style={backgroundStyle} className="relative"></div>
      <div className="absolute inset-0 flex items-center justify-center md:justify-start bg-black bg-opacity-50">
        <div className="text-center text-white md:text-left md:pl-8">
          <h3 className="text-2xl md:text-4xl lg:text-6xl">Get Free</h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl">Fried Wonton</h1>
          <h4 className="mt-2 font-serif text-lg md:text-xl lg:text-2xl">
            For every purchase
            <b className="px-1">NUKE BURGERS</b>
            Variants
          </h4>
          <button className="px-4 py-2 mt-4 font-serif text-white bg-transparent border border-white rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friedwonton;
