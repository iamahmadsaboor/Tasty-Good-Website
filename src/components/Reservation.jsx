import React from "react";
import reservation from "../Assets/reservation.png";

const Reservation = () => {
  return (
    <div className="relative w-full h-[95vh]">
      {/* Image section without black overlay */}
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${reservation})` }}
      >
        {/* Text over the image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8 lg:px-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold shadow-lg">
            Get Your
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 md:mt-4 shadow-lg">
            Reservations
          </h1>
          <button className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-transparent border border-white rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
