import React from "react";
import memberbg from "../Assets/memberbg.png";
import membercard from "../Assets/membershipcard.png";

const Membership = () => {
  return (
    <div className="relative">
      <div className="w-full h-auto">
        <img src={memberbg} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 left-0 mt-8 ml-4 sm:ml-8 md:ml-16 md:mt-16 lg:mt-32">
        <h4 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl">
          Get Our
        </h4>
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Membership
        </h1>
        <p className="text-base text-white sm:text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
        </p>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 border border-blue-500 rounded-full hover:bg-blue-700">
          Book Now
        </button>
      </div>
      <div className="absolute top-0 right-0 mt-8 mr-8 sm:mt-16 sm:mr-16 md:mt-24 md:mr-24 lg:mt-32 lg:mr-32">
        <img
          className="w-64 h-auto sm:w-80 sm:h-auto md:w-96 md:h-auto lg:w-96 lg:h-auto"
          src={membercard}
          alt=""
        />
      </div>
    </div>
  );
};

export default Membership;
