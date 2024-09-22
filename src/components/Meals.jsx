import React from "react";
import meal1 from "../Assets/meal1.png";
import meal2 from "../Assets/meal2.png";
import meal3 from "../Assets/meal3.png";
import meal4 from "../Assets/meal4.png";
import meal5 from "../Assets/meal5.png";

const Meals = () => {
  const meals = [
    { id: 1, src: meal1, title: "Beaf Fenzy Burger", price: "Rs1000" },
    { id: 2, src: meal2, title: "Nuke Burger", price: "Rs1100" },
    { id: 3, src: meal3, title: "Pizzeria", price: "Rs1200" },
    { id: 4, src: meal4, title: "Nuke Burger Madness", price: "Rs1400" },
    { id: 5, src: meal5, title: "Penne Pasta Tomato Sauce", price: "Rs1800" },
    { id: 6, src: meal1, title: "Beaf Special Burger", price: "Rs1600" },
  ];

  return (
    <div className="p-4 m-6" id="Menu">
      <h2 className="text-center text-4xl font-bold text-red-600 mb-4">
        Our top Six meals
      </h2>
      <p className="text-center mb-6">Try our best meals today.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {meals.map(({ id, title, src, price }) => (
          <div
            key={id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-600 hover:shadow-md hover:scale-105 transition-transform duration-700 "
          >
            <img
              className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
              src={src}
              alt={title}
            />
            <div className="p-4">
              <div className="font-bold text-lg mb-2">{title}</div>
              <div className="flex justify-between items-center">
                <h4>{price}</h4>
                <button className="px-4 py-2 font-mono font-semibold text-white bg-slate-600 border border-black rounded-full hover:bg-orange-500 hover:text-black hover:border-transparent transition-colors duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
