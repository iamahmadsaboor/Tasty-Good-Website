import React from "react";
import reservation from "../Assets/reservation.png";

const Reservation = () => {
  const backgroundStyle = {
    backgroundImage: `url(${reservation})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <div>
      <div style={backgroundStyle}></div>
      <div className="absolute md:top-[90em] right-[11em]">
        <h4 className="text-white text-2xl">Get Your</h4>
        <h1 className="text-white text-2xl">Reservations</h1>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Reservation;
