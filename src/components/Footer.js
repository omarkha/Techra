import React from "react";
import linkedin from "../media/linkedin.png";
import twitter from "../media/twitter.png";
import youtube from "../media/youtube.png";
import facebook from "../media/facebook.png";
import { Fade } from "react-reveal";
const Footer = () => {
  return (
    <footer>
      <Fade>
        <hr className="text-light mb-5" />
        <div className="container">
          <div className="footer-content">
            <ul>
              <li>Home</li>
              <li>Our Services</li>
              <li>About Us</li>
              <li>Policies</li>
              <li>Contact</li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.794232807074!2d-74.07150162430825!3d41.746530973642095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd22827ae31ebf%3A0xac483fb4df876f87!2s902%20Meadowbrook%20Cir%2C%20New%20Paltz%2C%20NY%2012561!5e0!3m2!1sen!2sus!4v1683067999642!5m2!1sen!2sus"
              width="233"
              height="144"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="footer-contact">
              <p>
                902 Meadowbrook Cir., <br />
                New Paltz, NY, USA <br />
                1-315-452-6132 <br />
                support@techra.com
              </p>
              <div className="footer-social-media ">
                <div style={{ backgroundImage: `url(${youtube})` }}></div>
                <div style={{ backgroundImage: `url(${twitter})` }}></div>
                <div style={{ backgroundImage: `url(${linkedin})` }}></div>
                <div style={{ backgroundImage: `url(${facebook})` }}></div>
              </div>
            </div>

            <div className="footer-brand">
              <div className="techra">
                <h1 style={{ fontSize: "55px" }}>Techra</h1>
              </div>

              <h6>Software Solutions LLC.</h6>
              <h6>All rights reserved.</h6>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
