import React from "react";
import map from "../Assets/map.png";
const Location = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="w-[40%] pt-6  ">
        <h4>Our Resturant</h4>
        <h1>Locations</h1>
        <p>We are available in JAKARTA, BANDUNG, SURABAYA, and BALI.</p>
        <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent ">
          Learn More
        </button>
      </div>
      <div className="w-[40%] pt-[4em]  ">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Location;
