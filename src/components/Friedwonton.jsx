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
      <div style={backgroundStyle} className="relative"></div>
      <div className="absolute left-8 top-[160em] md:top-[120em] pl-[2em] lg:top-[90em] xl:top-[72em] mainText">
        <h3 className="text-xl text-white md:text-6xl ">Get Free</h3>
        <h1 className="text-xl text-white md:text-5xl ">Fried Wonton</h1>
        <h4 className="font-mono text-xl text-white md:text-l">
          For every purchase NUKE BURGERS Variants
        </h4>
        <button className="px-4 py-2 bg-orange-500 border border-blue-500 rounded-full text-black-700 hover:bg-blue-500 hover:text-white hover:border-transparent ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Friedwonton;
