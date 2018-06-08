import React from "react";

export default () => (
  <section className="section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center text-uppercase">About Us</h2>
          <hr className="star-light mb-5" />
          <p className="lead text-center">
            Caring Songs for All Creatures is a small non-profit animal rescue
            that seeks to provide “unadoptable” cats and dogs with a stable and
            loving forever home. The elderly, the infirmed, the unwanted and the
            misunderstood are selected from area animal shelters, nursed back to
            health and happiness and placed for adoption.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className={`row mx-auto`}>
            <div className={`col-lg-6`}>
              <div className={`text-center mt-5 mb-3`}>
                <img
                  className={`img-fluid`}
                  src="./images/about/animal_mission.png"
                  alt="animal mission"
                />
              </div>
              <h4 className={`text-center text-uppercase`}>Mission</h4>
              <p className={`lead text-center`}>
                We seek to help those animals whose chances of being adopted are
                slim.
              </p>
            </div>
            <div className={`col-lg-6`}>
              <div className={`text-center mt-5 mb-3`}>
                <img
                  className={`img-fluid`}
                  src="./images/about/animal_vision.png"
                  alt="animal vision"
                />
              </div>
              <h4 className={`text-center text-uppercase`}>Vision</h4>
              <p className={`lead text-center`}>
                Help give an ‘ugly’ animal a beautiful life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
