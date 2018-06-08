import React from "react";

export default () => (
  <div
    id="carouselExampleControls"
    className="carousel slide"
    data-ride="carousel"
    style={{ paddingTop: "30px" }}
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          className="d-block w-100"
          src="./images/carousel/banner_1900.jpg"
          alt="First slide"
        />
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src="./images/carousel/banner2_1900.jpg"
          alt="Second slide"
        />
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src="./images/carousel/banner3_1900.jpg"
          alt="Third slide"
        />
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);
