import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section className="cont text-center" id="contact">
      <div className="us">
        <div className="container">
          <i className="fa fa-headphones fa-5x"></i>
          <h1>contact us</h1>
          <p>write the filds to contact</p>
          <form className="form">
            <div className="row">
            {/* <ReactWOW animation='fadeIn'>sdsdsd</ReactWOW> */}
              <div
                className="col-md-6 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-offset="200"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your phone"
                    required
                  />
                </div>
              </div>
              <div
                className="col-md-6 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-offset="200"
              >
                <div className="form-group">
                  <textarea
                    className="form-control input-lg "
                    placeholder="your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btnn btn-primary btn-lg btn-block"
                >
                  contact
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
