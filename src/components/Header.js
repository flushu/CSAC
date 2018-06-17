import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        Caring Songs for All Creatures
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse text-uppercase navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-1">
            <a className="nav-link js-scroll-trigger" href="#news">
              news <span className="badge badge-light">1</span>
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link js-scroll-trigger" href="#profile">
              Profile
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link js-scroll-trigger" href="#story">
              Story
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link js-scroll-trigger" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item px-1">
            <a
              className="nav-link bg-warning text-white"
              href="https://www.paypal.me/caringsongs"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
