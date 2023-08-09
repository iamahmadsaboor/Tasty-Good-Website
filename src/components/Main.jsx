import React from "react";
import MainImg from "../Assets/mainbanner.png";

const Main = () => {
  const mainStyle = {
    backgroundImage: `url(${MainImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "29em",
    width: "100%",
  };

  return (
    <div>
      <div style={mainStyle}>
        <div className="absolute top-[10em] left-[56em]">
          <p className="text-white">Try Out Our New Meal</p>
          <h2 className="text-red-700 text-4xl font-bold">DOUBLE</h2>
          <h2 className="text-yellow-800 text-4xl border-l-amber-400">NUKE</h2>
          <h2 className="text-white text-4xl">BURGER</h2>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
