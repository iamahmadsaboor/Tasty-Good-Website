import React from "react";
import meal1 from "../Assets/meal1.png";
import meal2 from "../Assets/meal2.png";
import meal3 from "../Assets/meal3.png";
import meal4 from "../Assets/meal4.png";
import meal5 from "../Assets/meal5.png";

const Meals = () => {
  const meals = [
    {
      id: 1,
      src: meal1,
      title: "Beaf Fenzy Burger",
      price: "Rs1000",
    },
    {
      id: 2,
      src: meal2,
      title: "Nuke Burger",
      price: "Rs1100",
    },
    {
      id: 3,
      src: meal3,
      title: "Pizzeria",
      price: "Rs1200",
    },
    {
      id: 4,
      src: meal4,
      title: "Nuke Burger Madness",
      price: "Rs1400",
    },
    {
      id: 5,
      src: meal5,
      title: "Penne Pasta Tomato Sauce",
      price: "Rs1800",
    },
  ];

  return (
    <div className="p-2 m-3 " id="Menu">
      <h2 className="flex justify-center m-3 text-4xl font-bold text-center text-red-600 ">
        Our top five meals
      </h2>
      <p className="flex justify-center m-3 text-center">
        Try our five best meals today.
      </p>
      <div className="flex flex-wrap justify-center gap-6 ">
        {meals.map(({ id, title, src, price }) => (
          <div
            key={id}
            class="max-w-[15rem] rounded overflow-hidden shadow-lg w-[292px] h-[268px] hover:shadow-indigo-600 hover:shadow-md hover:duration-700"
          >
            <img
              className="w-[292px] h-[140px] hover:scale-110 overflow-hidden hover:duration-500"
              src={src}
              alt=""
            />

            <div class="px-4 py-4">
              <div class="font-bold text-[1rem] mb-2 flex justify-between">
                {title}
              </div>
              <div class="mb-2 flex justify-between items-center	 ">
                <h4>{price}</h4>
                <button className="px-4 py-2 font-mono font-semibold text-white border border-black rounded-full bg-slate-600 hover:bg-orange-500 hover:text-black hover:border-transparent ">
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
