import React from "react";
import reservation from "../Assets/reservation.png";

const Reservation = () => {
  const backgroundStyle = {
    backgroundImage: `url(${reservation})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "95vh",
  };

  return (
    <div className="relative">
      <div style={backgroundStyle} className="relative"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white px-4 md:px-8 lg:px-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Get Your
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 md:mt-4">
            Reservations
          </h1>
          <button className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-transparent border border-white rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
