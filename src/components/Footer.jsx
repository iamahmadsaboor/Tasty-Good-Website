import React from "react";
import whitelogo from "../Assets/whitelogo.png";
import facebook from "../Assets/icons/facebook.png";
import youtube from "../Assets/icons/youtube.png";
import twitter from "../Assets/icons/twitter.png";
import github from "../Assets/icons/github.png";
import instagram from "../Assets/icons/instagram.png";
import phone from "../Assets/icons/phone-logo.png";
import location from "../Assets/icons/location-logo.png";
import email from "../Assets/icons/email-logo.png";

const Footer = () => {
  const icons = [
    {
      id: 1,
      src: facebook,
      href: "https://www.facebook.com/iamahmadsaboor",
    },
    {
      id: 2,
      src: youtube,
      href: "https://www.youtube.com/iamahmadsaboor",
    },
    {
      id: 3,
      src: twitter,
      href: "https://www.twitter.com/iamahmadsaboor",
    },
    {
      id: 4,
      src: instagram,
      href: "https://www.instagram.com/iamahmadsaboor",
    },
    {
      id: 5,
      src: github,
      href: "https://www.github.com/iamahmadsaboor",
    },
  ];

  return (
    <div className="bg-red-500 text-white py-8" id="About-Us">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        <img
          className="h-[48px] w-[93px] mb-4 md:mb-0"
          src={whitelogo}
          alt="White Logo"
        />
        <div className="flex space-x-4">
          {icons.map(({ id, src, href }) => (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer">
              <img className="h-6 w-6" src={src} alt="social media icon" />
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row md:justify-between md:space-x-8">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h1 className="text-2xl font-bold">Reach Us</h1>
          <div className="flex items-center mt-4 space-x-2">
            <img className="w-6 h-6" src={phone} alt="phone icon" />
            <p>+92 3044202755</p>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <img className="w-6 h-6" src={email} alt="email icon" />
            <p>iamahmadsaboor@gmail.com</p>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <img className="w-6 h-6" src={location} alt="location icon" />
            <p>Faisalabad, Pakistan</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <p className="mt-2">Contact Us</p>
          <p className="mt-2">Payment Shipping</p>
          <p className="mt-2">FAQs</p>
          <p className="mt-2">Tracking Orders</p>
        </div>
        <div className="bg-white text-black w-full md:w-auto p-4 rounded-md">
          <h1 className="text-2xl font-bold text-center md:text-left">
            Join Our <span className="text-red-500">Newsletter</span>
          </h1>
          <form className="mt-4 flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 flex-1 mb-4 md:mb-0 md:mr-2 border border-gray-300 rounded-md"
            />
            <button className="p-2 bg-black text-white rounded-md hover:bg-green-300 hover:text-black">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
