import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={`py-5`}>
        <div className={`container`}>
          <div className={`row`}>
            <div className={`col-lg-6 col-md-6`}>
              <div className={`row`}>
                <div className={`col-lg-6 col-md-12`}>
                  <div className="footer-address">
                    <div className="info_title">Address</div>
                    <div className="info_text">
                      Manhattan Beach, CA 90267<br />
                      PO BOX 2020
                    </div>
                  </div>
                </div>
                <div className={`col-lg-6 col-md-12`}>
                  <div className="touch">
                    <div className="info_title">Get in Touch</div>
                    <div className="info_text">
                      (657) UGLY DOG, (657) 845-9364<br />
                      support@caringsongsforallcreatures.org
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 col-md-6 text_container`}>
              <div className="text">
                <div>
                  Caring Songs For All Creatures is a non-profit 501(c)(3)
                  organization.
                </div>
                <div>
                  Gifts are tax-deductible to the full extent allowable under
                  the law.
                </div>
                <div>Copyright 2018 Caring Songs For All Creatures.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
