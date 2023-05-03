import React from "react";
import linkedin from "../media/linkedin.png";
import twitter from "../media/twitter.png";
import youtube from "../media/youtube.png";
import facebook from "../media/facebook.png";
const Contactpage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="h2">REACH OUT TO US</h1>
        <section>
          <div className="info">
            <h3>Contact Information</h3>
            <p>
              902 Meadowbrook Cir.,
              <br /> New Paltz, NY, USA
              <br /> 1-315-452-6132 <br />
              support@techra.com
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.794232807074!2d-74.07150162430825!3d41.746530973642095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd22827ae31ebf%3A0xac483fb4df876f87!2s902%20Meadowbrook%20Cir%2C%20New%20Paltz%2C%20NY%2012561!5e0!3m2!1sen!2sus!4v1683067999642!5m2!1sen!2sus"
              width="377px"
              height="233px"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="contact-social-media ">
              <div style={{ backgroundImage: `url(${youtube})` }}></div>
              <div style={{ backgroundImage: `url(${twitter})` }}></div>
              <div style={{ backgroundImage: `url(${linkedin})` }}></div>
              <div style={{ backgroundImage: `url(${facebook})` }}></div>
            </div>
          </div>
          <div className="form">
            <div className="contact-header">
              <h2 className="h6">
                We are here around the clock to answer all your questions,
                inquiries and concerns.
              </h2>
            </div>
            <form>
              <div className="names">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Subject Line" />
              <textarea placeholder="Your message..."></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactpage;
