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
    <div>
      <div style={backgroundStyle}></div>
      <div className="absolute md:top-[150em] lg:top-[110em] right-[11em] mainText">
        <h1 className="text-4xl text-white mainText">Get Your</h1>
        <h1 className="text-4xl text-white mainText">Reservations</h1>
        <button className="px-4 py-2 text-blue-700 bg-transparent border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Reservation;
