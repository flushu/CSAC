import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <section className="section" id="story">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Successful Stories</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="./images/story/story1.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2018</h4>
                  <h4 className="subheading">Puffy was adopted</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    This little senior terrier was in the Downey animal shelter,
                    shivering. She had "major dental issues" and a possible
                    hernia. She was found as a stray. She is adorable and very
                    content. After she was rescued by Caring Songs and her teeth
                    taken care of, she went to a beautiful home.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="./images/story/story2_lj.jpeg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>April 2018</h4>
                  <h4 className="subheading">Lady Jane was rescued</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lady Jane is a senior dog from Long Beach Animal Services.
                    She is such the lady: she gets along with dogs, cats, humans
                    and does not bark!!! Voracious appetite, and very friendly,
                    just grows on you. VERY low maintenance.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="./images/story/story4_kittens.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>May 2018</h4>
                  <h4 className="subheading">
                    Kittens from Long Beach Animal Services
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Most of the 11 have found forever homes! More are available.
                    Cute, friendly...a bundle of joy
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <a className="contractLink" href="/images/contract.pdf" download>
                <div className="timeline-image">
                  <h4>
                    Download
                    <br />Foster
                    <br />Contract!
                  </h4>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
