import React from "react";
import "./navbar.sass";
import PropTypes from "prop-types";

const Navbar = ({ className }) => {
  return (
    <nav className={`nav ${className}`}>
      <ul className="navbar-menu">
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Home
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Photos
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Videos
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Ships
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            AIS
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Forum
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            News
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Support
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Contact
          </a>
        </li>
        <li className="navbar-menu__item">
          <a href="#" className="navbar-menu__link">
            Shiptrax
          </a>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
