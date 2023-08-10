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
    <div>
      <div style={backgroundStyle}></div>
      <div className="absolute left-8 top-[150em] md:top-[110em] pl-[2em] lg:top-[90em] xl:top-[72em]">
        <h3 className="text-xl md:text-6xl text-white ">Get Free</h3>
        <h1 className="text-xl md:text-5xl text-white ">Fried</h1>
        <h1 className="text-xl md:text-4xl text-white ">Wonton</h1>
        <h4 className="text-xl md:text-l text-white ">
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
