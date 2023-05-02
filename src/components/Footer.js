import React from "react";
import logo from "../media/logo.png";
const Footer = () => {
  return (
    <footer>
      <hr className="text-light mb-5" />
      <div className="container">
        <div className="footer-content">
          <div
            id="footer-logo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>About Us</li>
            <li>Policies</li>
            <li>Contact</li>
          </ul>
          <div className="footer-brand">
            <h1>Techra</h1>
            <h6>Software Solutions LLC.</h6>
            <h6>All rights reserved.</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
