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
    <div className="bg-red-500">
      <div className="flex md:flex justify-around pt-[3em]">
        <img className="h-[48px] w-[93px]" src={whitelogo} alt="" />
        <div className="flex">
          {icons.map(({ id, src, href }) => (
            <div id={id} className="flex pl-[0.2em]">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} alt="logo" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[95%] flex-wrap-reverse flex justify-around mt-[3em] md:flex-nowrap">
        <div>
          <h1>Reach Us</h1>
          <span className="flex gap-4 p-1">
            <img className="w-[24px] h-[24px]" src={phone} alt="" />
            <p>+92 3044202755</p>
          </span>
          <span className="flex gap-4 p-1">
            <img className="w-[24px] h-[24px]" src={email} alt="" />
            <p>iamahmadsaboor@gmail.com</p>
          </span>
          <span className="flex gap-4 p-1">
            <img className="w-[24px] h-[24px]" src={location} alt="" />
            <p>Faisalabad, Pakistan</p>
          </span>
        </div>
        <div>
          <h2>Quick Links</h2>
          <p>Contact Us</p>
          <p>Payment Shipping</p>
          <p>FAQs</p>
          <p>Tracking Orders</p>
        </div>
        <div className="w-[25em] h-[10em] bg-white">
          <span className="flex">
            <h1>Join Our</h1>
            <h1 className="font-extrabold text-red-500 ">NewsLetter</h1>
          </span>
          <form action="POST" className="flex">
            <input type="text" placeholder="Enter Your Email" />
            <button className="bg-black color-white">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
