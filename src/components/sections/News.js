import React, { Component } from "react";
import moment from "moment";

export default class News extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="bg-light section" id="news">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Recent News</h2>
              <h3 className="section-subheading text-muted">
                Last updated June 16, 2018
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item card text-center" style={{ width: "25rem" }}>
                <img
                  className="card-img-top"
                  alt="Thor"
                  src="./images/news/thor_adoption.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">Thor is available to adoption</h5>
                  <p className="card-text" style={{ fontSize: "14px" }}>
                    2 year old Chihuahua mix who was hit by a car a few weeks
                    ago. 14 lbs. He underwent left hip surgery with titanium
                    plate and screws on May 21st 2018.
                  </p>
                  <p className="card-text" style={{ fontSize: "14px" }}>
                    Any proceeds from the adoption can go to Henry's hope.
                  </p>
                  <a
                    href="https://henryshopefoundation.com/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Henry's Hope Foundation
                  </a>
                </div>
                <div className="card-footer text-muted">
                  {moment().from("2018-06-15", true)} ago
                </div>
              </div>
              <div className="item" style={{ width: "250px" }}>
                <h4>1</h4>
              </div>
              <div className="item" style={{ width: "100px" }}>
                <h4>2</h4>
              </div>
              <div className="item" style={{ width: "500px" }}>
                <h4>3</h4>
              </div>
              <div className="item" style={{ width: "100px" }}>
                <h4>4</h4>
              </div>
              <div className="item" style={{ width: "50px" }}>
                <h4>6</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
