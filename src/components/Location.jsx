import React from "react";
import map from "../Assets/map.png";
const Location = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="w-[40%] pt-6  ">
        <h4>Our Resturant</h4>
        <h1>Locations</h1>
        <p>We are available in JAKARTA, BANDUNG, SURABAYA, and BALI.</p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full ">
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
