import React from "react";
import memberbg from "../Assets/memberbg.png";
import membercard from "../Assets/membershipcard.png";

const Membership = () => {
  return (
    <div className="relative">
      <div className="w-full h-auto">
        <img src={memberbg} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 mt-16 ml-4 membertext sm:mt-32 md:mt-[9em] sm:ml-8 md:ml-16">
        <h4 className="text-2xl text-white sm:text-3xl md:text-4xl">Get Our</h4>
        <h1 className="text-4xl text-white sm:text-5xl md:text-6xl">
          Membership
        </h1>
        <p className="text-lg text-white sm:text-xl md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
        </p>
        <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent">
          Book Now
        </button>
      </div>
      <div className="absolute top-0 mt-12 ml-12 membercards sm:mt-24 md:mt-[5em] sm:ml-32 md:ml-[60em]">
        <img
          className="h-[21em] w-[30em] sm:h-[28em] sm:w-[40em] md:h-[18em] md:w-[26em]"
          src={membercard}
          alt=""
        />
      </div>
    </div>
  );
};

export default Membership;
