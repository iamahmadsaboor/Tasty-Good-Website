import React from "react";
import whitelogo from "../Assets/whitelogo.png";

const Footer = () => {
  return (
    <div className="bg-red-500">
      {/* Logo and Text First row */}
      <div className="flex justify-around pt-[3em]">
        <img src={whitelogo} alt="" />
        <div className="flex justify-between">
          <p>Youtube</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Github</p>
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
      {/*  */}
    </div>
  );
};

export default Footer;
