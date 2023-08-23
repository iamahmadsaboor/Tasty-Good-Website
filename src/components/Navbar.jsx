import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
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
      style: {
        background: "#F03153",
        color: "white",
        padding: "10px",
        borderRadius: "1.2em",
      },
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex justify-around items-center p-[1em]">
      <div>
        <img src={logo} alt="Logo" className="w-[6em] h-[2em]" />
      </div>
      <div className="hidden gap-6 md:flex">
        <ul className="flex gap-6">
          {navLinks.map(({ id, link, style }) => (
            <li key={id} className="cursor-pointer">
              <Link to={link} style={link === "Order Now" ? style : {}}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        {isNavOpen ? (
          <FaTimes onClick={toggleNav} className="text-2xl cursor-pointer" />
        ) : (
          <FaBars onClick={toggleNav} className="text-2xl cursor-pointer" />
        )}
      </div>
      {isNavOpen && (
        <div className="font-a md:hidden absolute top-[3.5em] right-0 bg-white w-full text-center cursor-pointer z-10">
          <ul className="py-4">
            {navLinks.map(({ id, link, style }) => (
              <li key={id} className="py-2">
                <Link
                  to={link}
                  onClick={toggleNav}
                  style={link === "Order Now" ? style : {}}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
