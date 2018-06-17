import React from "react";
import { NavLink } from "react-router-dom";

export default props => (
  <section id="profile" className={`bg-light section`}>
    <div className={`container`}>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className={`text-uppercase section-heading`}>Profile</h2>
          <h3 className={`text-muted section-subheading`}>
            Profiles of Animals Alice and Julia Song took care of
          </h3>
        </div>
      </div>
      <div className={`row`}>
        <div className={`col-lg-4 col-md-6 col-sm-12`}>
          <div className="card xb-3">
            <div className="card-header">
              <h5 className="card-title">Puffy</h5>
            </div>
            <div className="card-body">
              <img
                className="card-img-top"
                src="./images/profile/puffy_profile.jpg"
                alt="Card image cap"
              />
            </div>
            <div className="card-footer">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
                data-target="#profileModal"
                onClick={() => props.profileIndex(0)}
              >
                Check My Story...
              </a>
            </div>
          </div>
        </div>
        <div className={`col-lg-4 col-md-6 col-sm-12`}>
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="card-title">Lady Jane</h5>
            </div>
            <div className="card-body">
              <img
                className="card-img-top"
                src="./images/profile/profile_lj.jpeg"
                alt="Card image cap"
              />
            </div>
            <div className="card-footer">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal2"
                data-target="#profileModal"
                onClick={() => props.profileIndex(1)}
              >
                Check My Story...
              </a>
            </div>
          </div>
        </div>
        <div className={`col-lg-4 col-md-6 col-sm-12`}>
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="card-title">Thor</h5>
            </div>
            <div className="card-body">
              <img
                className="card-img-top"
                src="./images/profile/profile_thor.jpeg"
                alt="Card image cap"
              />
            </div>
            <div className="card-footer">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal3"
                data-target="#profileModal"
                onClick={() => props.profileIndex(2)}
              >
                Check My Story...
              </a>
            </div>
          </div>
        </div>
        <div className={`col-lg-4 col-md-6 col-sm-12`}>
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="card-title">Kittens</h5>
            </div>
            <div className="card-body">
              <img
                className="card-img-top"
                src="./images/profile/profile_kittens.jpeg"
                alt="Card image cap"
              />
            </div>
            <div className="card-footer">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal4"
                data-target="#profileModal"
                onClick={() => props.profileIndex(3)}
              >
                Check My Story...
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`row`}>
        <div className="col-lg-12 text-center">
          <NavLink to="/gallery">
            <button
              id="sendMessageButton"
              className={`btn btn-warning text-white btn-xl text-uppercase p-3`}
              type="submit"
            >
              Go to Gallery
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

const oldProfileTemplate = props => (
  <section id="profile" className={`bg-light section`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className={`text-uppercase profile-heading`}>Profile</h2>
          <h3 className={`text-muted profile-subheading`}>
            Profiles of Animals Alice and Julia Song took care of
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            className="portfolio-link"
            data-toggle="modal"
            href="#portfolioModal1"
            data-target="#profileModal"
            onClick={() => this.props.profileIndex(0)}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="./images/profile/puffy_profile.jpg"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Puffy</h4>
            <p className="text-muted">Female 4 years old</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            className="portfolio-link"
            data-toggle="modal"
            href="#portfolioModal2"
            data-target="#profileModal"
            onClick={() => this.props.profileIndex(1)}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="./images/profile/profile_lj.jpeg"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Lady Jane</h4>
            <p className="text-muted">Female ? years old</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            className="portfolio-link"
            data-toggle="modal"
            href="#portfolioModal3"
            data-target="#profileModal"
            onClick={() => this.props.profileIndex(2)}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="./images/profile/profile_thor.jpeg"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Thor</h4>
            <p className="text-muted">Male ? years old</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a
            className="portfolio-link"
            data-toggle="modal"
            href="#portfolioModal4"
            data-target="#profileModal"
            onClick={() => this.props.profileIndex(3)}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="./images/profile/profile_kittens.jpeg"
              alt=""
            />
          </a>
          <div className="portfolio-caption">
            <h4>Dizzy and Goldie Sisters (?)</h4>
            <p className="text-muted">Twin sisters ? years old</p>
          </div>
        </div>
      </div>
      <div className={`row`}>
        <div className="col-lg-12 text-center">
          <NavLink to="/gallery">
            <button
              id="sendMessageButton"
              className={`btn btn-primary btn-xl text-uppercase myBtn`}
              type="submit"
            >
              Go to Gallery
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);
