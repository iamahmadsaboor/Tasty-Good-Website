import React from "react";
import map from "../Assets/map.png";

const Location = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-around text-center md:text-left py-8 px-4"
      id="Blog"
    >
      {/* Text Section */}
      <div className="w-full md:w-[30vw] pt-4">
        <h4 className="text-2xl text-black font-bold mb-2">Our Restaurant</h4>
        <h1 className="text-4xl text-red-600 font-bold mb-4">Locations</h1>
        <p className="text-base md:text-lg mb-4">
          We are available in{" "}
          <b className="text-red-500">JAKARTA, BANDUNG, SURABAYA, and BALI</b>.
        </p>
        <button className="px-6 py-2 mt-4 font-semibold text-black bg-transparent border border-black rounded-full hover:bg-orange-500 hover:text-white hover:border-transparent transition-colors duration-300">
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[40vw] pt-4 md:pt-0">
        <img src={map} alt="Map" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Location;
