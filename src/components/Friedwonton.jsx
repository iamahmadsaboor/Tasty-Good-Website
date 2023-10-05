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
      <div className="absolute md:left-8 top-[142em] md:top-[87em] pl-[2em] lg:top-[85em] xl:top-[70em] mainText">
        <h3 className="text-xl text-white md:text-6xl ">Get Free</h3>
        <h1 className="text-xl text-white md:text-5xl ">Fried Wonton</h1>
        <h4 className="font-serif text-xl text-white md:text-l">
          For every purchase{" "}
          <b className="pl-[0.1em] pr-[0.1em]">NUKE BURGERS</b> Variants
        </h4>
        <button className="px-4 py-2 font-serif text-white bg-transparent border border-black rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent md:mt-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Friedwonton;
