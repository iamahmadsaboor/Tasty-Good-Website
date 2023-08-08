import React from "react";
import { Link } from "react-scroll";
import logo from "../Assets/TASTY GOOD-5.png";
const Navbar = () => {
  let navLinks = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Menu",
    },
    {
      id: 3,
      link: "Blog",
    },
    {
      id: 4,
      link: "About Us",
    },
    {
      id: 5,
      link: "Order Now",
    },
  ];
  return (
    <div className="flex justify-around p-[1em]">
      <div>
        <img src={logo} alt="Logo" className="w-[6em] h-[2em] " />
      </div>

      <div>
        <ul className="flex gap-6">
          {navLinks.map(({ id, link }) => (
            <li key={id}>
              <Link to={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
