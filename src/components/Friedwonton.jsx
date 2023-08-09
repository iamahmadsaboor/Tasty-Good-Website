import React from "react";
import friedWonton from "../Assets/friedwonton.png";
const Friedwonton = () => {
  return (
    <div>
      <div>
        <img src={friedWonton} alt="" />
      </div>
      <div className="absolute top-5 left-8 pt-[66em] pl-[2em]">
        <h3 className="text-6xl text-white ">Get Free</h3>
        <h1 className="text-5xl text-white ">Fried</h1>
        <h1 className="text-4xl text-white ">Wonton</h1>
        <h4 className="text-l text-white ">
          For every purchase <b>NUKE BURGERS</b> Variants
        </h4>
        <button className="bg-orange-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Friedwonton;
