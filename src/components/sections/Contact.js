import React from "react";

class BootstrapContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        name: false,
        email: false,
        phone: false,
        message: false
      },
      sent: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let name_value = e.target.elements.name.value;
    let email_value = e.target.elements.email.value;
    let phone_value = e.target.elements.phone.value;
    let message_value = e.target.elements.message.value;
    console.log(name_value, email_value, phone_value, message_value);
    // const error = {
    //   name: !name_value,
    //   email: !email_value,
    //   phone: !phone_value,
    //   message: !message_value
    // };
    // this.setState(prevState => ({
    //   error
    // }));
    alert(`Thank you, ${name_value}. We will contact you by tonight :)`);
    e.target.reset();
  }
  render() {
    return (
      <section
        id="contact"
        className="section"
        style={{
          backgroundColor: "#212529",
          backgroundImage: "url(./images/contact/map-image.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        className="form-control p-3 mb-4"
                        placeholder="Your Name *"
                        required
                      />
                      <p className="text-uppercase text-danger">
                        {this.state.error.name
                          ? "Please enter your name."
                          : undefined}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control p-3 mb-4"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                    <p className="text-uppercase text-danger">
                      {this.state.error.email
                        ? "Please enter your email address."
                        : undefined}
                    </p>
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        className="form-control p-3"
                        placeholder="Your Phone *"
                        required
                      />
                      <p className="text-uppercase text-danger">
                        {this.state.error.phone
                          ? "Please enter your phone number"
                          : undefined}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        id="message"
                        className="form-control p-3"
                        placeholder="Your Message *"
                        required
                      />
                      <p className="text-uppercase text-danger">
                        {this.state.error.message
                          ? "Please enter your message."
                          : undefined}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 text-center">
                  <button
                    className="btn btn-warning p-3 text-white btn-xl text-uppercase mt-4"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BootstrapContact;

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: {
        name: false,
        email: false,
        phone: false,
        message: false
      },
      sent: false
    };
  }
  onSubmit(e) {
    e.preventDefault();
    let name_value = e.target.elements.name.value;
    let email_value = e.target.elements.email.value;
    let phone_value = e.target.elements.phone.value;
    let message_value = e.target.elements.message.value;
    const error = {
      name: !name_value,
      email: !email_value,
      phone: !phone_value,
      message: !message_value
    };
    this.setState(prevState => ({
      error
    }));
  }
  render() {
    return (
      <section
        id="contact"
        className="section"
        style={{
          backgroundColor: "#212529",
          backgroundImage: "url(./images/contact/map-image.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger">
                        {this.state.error.email
                          ? "Please enter your name"
                          : undefined}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger">
                        {this.state.error.email
                          ? "Please enter your email address."
                          : undefined}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger">
                        {this.state.error.phone
                          ? "Please enter your phone number."
                          : undefined}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      />
                      <p className="help-block text-danger">
                        {this.state.error.message
                          ? "Please enter a message."
                          : undefined}
                      </p>
                    </div>
                  </div>
                  <div className="clearfix" />
                  <div className="col-lg-12 text-center">
                    <button
                      id="sendMessageButton"
                      className="btn btn-warning p-3 text-white btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
