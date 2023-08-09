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
    <div className="m-3 p-2">
      <h2 className="flex justify-center text-center text-red-600 text-2xl m-3">
        Our top five meals
      </h2>
      <p className="flex justify-center text-center m-3">
        Try our five best meals today.
      </p>
      <div className="flex justify-center gap-6">
        {meals.map(({ id, title, src, price }) => (
          <div
            key={id}
            class="max-w-[15rem] rounded overflow-hidden shadow-lg w-[292px] h-[350px] "
          >
            <img className="w-[292px] h-[180px]" src={src} alt="" />

            <div class="px-4 py-4">
              <div class="font-bold text-[1rem] mb-2 flex justify-between">
                {title}
              </div>
              <div class="mb-2 flex justify-between items-center	 ">
                <h4>{price}</h4>
                <button className="bg-orange-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500  hover:border-transparent rounded-full ">
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
