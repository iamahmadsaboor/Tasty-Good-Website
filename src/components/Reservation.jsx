import React from "react";
import reservation from "../Assets/reservation.png";

const Reservation = () => {
  const backgroundStyle = {
    backgroundImage: `url(${reservation})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "95vh",
  };
  const font = {
    fontFamily: "a",
  };
  return (
    <div>
      <div style={backgroundStyle}></div>
      <div className="absolute md:top-[110em] right-[11em] font-a">
        <h4 className="text-2xl text-white" style={font}>
          Get Your
        </h4>
        <h1 className="text-2xl text-white">Reservations</h1>
        <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Reservation;
