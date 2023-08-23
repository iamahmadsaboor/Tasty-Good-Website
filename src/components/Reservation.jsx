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
      <div style={backgroundStyle} className="relative"></div>
      <div className="absolute top-[200em] right-0 md:top-[150em] lg:top-[128em] xl:top-[104em] md:right-[6em] mainText">
        <h1 className="text-2xl text-white mainText">Get Your</h1>
        <h1 className="md:text-[4em] text-[2em] text-white mainText">
          Reservations
        </h1>
        <button className="px-4 py-2 font-mono font-semibold text-white bg-transparent border border-black rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Reservation;
