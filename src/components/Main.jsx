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
        <div className="absolute right-[1em] top-[9em] md:top-[10em] md:right-[14em] lg:right-[29em] mainText">
          <p className="text-white font-Anton">Try Out Our New Meal</p>
          <h2 className="text-4xl text-red-700 font-a">DOUBLE</h2>
          <h2 className="text-4xl text-yellow-800 border-l-amber-400">NUKE</h2>
          <h2 className="text-4xl text-white font-Anton">BURGER</h2>
          <button className="px-4 py-2 mt-2 font-serif text-white bg-transparent border border-black rounded-full hover:bg-orange-500 hover:text-white hover:border-transparent">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
