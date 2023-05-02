import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div
            className="navlogo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          Techra
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-bs-controls="navbarTogglerDemo02"
          aria-bs-expanded="false"
          aria-bs-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policies">
                Policies
              </Link>
            </li>
          </ul>
          <Link to="/contact" id="nav-button">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
