import React from "react";
import map from "../Assets/map.png";
const Location = () => {
  return (
    <div className="flex flex-wrap items-center justify-around text-center md:flex-nowrap md:text-left">
      <div className="w-[100vw] pt-2 md:w-[30vw] md:pt-2  ">
        <h4 className="text-2xl text-black mainText">Our Resturant</h4>
        <h1 className="text-4xl text-red-600 mainText ">Locations</h1>

        <p>
          We are available in{" "}
          <b className="text-red-500"> JAKARTA, BANDUNG, SURABAYA, and BALI</b>.
        </p>

        <button className="px-4 py-2 font-semibold text-white bg-transparent border border-black rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent ">
          Learn More
        </button>
      </div>
      <div className="w-[90vw] md:w-[40%] pt-[2em] mb-[3em] ">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Location;
