import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div className="gallery-page">
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        <img
          src="./images/gallery/chevron-circle-left.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="mx-4">Back to Caring Songs for All Creatures...</span>
      </NavLink>
    </nav>
    <div className="container gallery">
      <h1>Caring Songs for All Creatures Gallery</h1>
      <p className={`text-center`}>Thumbnails With Title And Description</p>
      <div className="card-columns">
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/1348.jpeg" />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/1352.jpeg" />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/1356.jpeg" />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/1358.jpeg" />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/1360.jpeg" />
        </div>
        <div className="card m-2">
          <img
            className="card-img"
            src="./images/gallery/gallery_puffy_alice.jpg"
          />
        </div>
        <div className="card m-2">
          <img
            className="card-img"
            src="./images/gallery/gallery_puffy_mike_2.jpeg"
          />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/gallery_puffy" />
        </div>
        <div className="card m-2">
          <img
            className="card-img"
            src="./images/gallery/profile_kittens.jpeg"
          />
        </div>
        <div className="card m-2">
          <img
            className="card-img"
            src="./images/gallery/profile_story_lj2.jpg"
          />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/profile_thor.jpeg" />
        </div>
        <div className="card m-2">
          <img className="card-img" src="./images/gallery/puffy_profile.jpg" />
        </div>
      </div>
    </div>
  </div>
);
