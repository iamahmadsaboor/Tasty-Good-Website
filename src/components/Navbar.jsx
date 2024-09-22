import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/TASTY GOOD-5.png";

const Navbar = () => {
  const navLinks = [
    { id: 1, link: "Home" },
    { id: 2, link: "Menu" },
    { id: 3, link: "Blog" },
    { id: 4, link: "About-Us" },
    {
      id: 5,
      link: "Order Now",
      style: "bg-red-500 text-white rounded-full px-4 py-2",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full px-4 py-2 bg-white shadow-md fixed top-0 z-50">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24 h-auto" />

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-30" onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? (
          <FaTimes className="text-2xl text-black" />
        ) : (
          <FaBars className="text-2xl text-black" />
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row md:static absolute top-0 left-0 w-full h-screen md:h-auto md:w-auto bg-white md:bg-transparent justify-center md:justify-end items-center transition-transform duration-500 ease-in-out ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {navLinks.map(({ id, link, style }) => (
          <li key={id} className="my-6 md:my-0 md:ml-6">
            <Link
              to={link}
              className={`text-lg md:text-base hover:text-red-600 ${
                style || ""
              }`}
              onClick={() => setIsNavOpen(false)} // Close the menu on link click
              smooth={true}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
