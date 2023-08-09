import React from "react";
import memberbg from "../Assets/memberbg.png";
import membercard from "../Assets/membershipcard.png";
const Membership = () => {
  return (
    <div>
      <div>
        <img src={memberbg} alt="" />
      </div>
      <div className="membertext absolute top-0 mt-[137em] ml-[8em]">
        <h4 className="text-white text-2xl ">Get Our</h4>
        <h1 className="text-white text-4xl">Membership</h1>
        <p className="text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed.
        </p>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full ">
          Book Now
        </button>
      </div>
      <div className="membercards absolute top-0 mt-[130em] ml-[55em]">
        <img className="h-[21em] w-[30em]" src={membercard} alt="" />
      </div>
    </div>
  );
};

export default Membership;
