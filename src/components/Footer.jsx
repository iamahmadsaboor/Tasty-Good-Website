import React from "react";
import whitelogo from "../Assets/whitelogo.png";
import facebook from "../Assets/icons/facebook.png";
import youtube from "../Assets/icons/youtube.png";
import twitter from "../Assets/icons/twitter.png";
import github from "../Assets/icons/github.png";
import instagram from "../Assets/icons/instagram.png";

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
      {/* Logo and Text First row */}
      <div className="flex justify-around pt-[3em]">
        <img className="h-[48px] w-[93px]" src={whitelogo} alt="" />
        <div className="flex justify-between">
          {icons.map(({ id, src, href }) => (
            <div id={id} className="flex pl-[0.2em]">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={src} alt="logo" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] flex justify-around mt-[3em]">
        <div>
          <h2>Reach Us</h2>
          <h5>number</h5>
          <h5>Email</h5>
          <h5>Location</h5>
        </div>
        <div>
          <h2>Quick Links</h2>
          <p>Contact Us</p>
          <p>Payment Shipping</p>
          <p>FAQs</p>
          <p>Tracking Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
