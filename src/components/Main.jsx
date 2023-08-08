import React from "react";
import MainImg from "../Assets/mainbanner.png";

const Main = () => {
  return (
    <div>
      <div>
        <img src={MainImg} alt="Mainimg" className="h-[25em] w-[100%]" />
      </div>
      <div className="absolute top-[10em] left-[56em]">
        <p className="text-white">Try Out Our New Meal</p>
        <h2 className="text-red-700 text-2xl font-bold">DOUBLE</h2>
        <h2 className="text-yellow-500">NUKE</h2>
        <h2 className="text-white">BURGER</h2>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full ">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Main;
