import React from "react";
import "./footer.css";
// import GoogleMapReact from 'google-map-react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul>
                <li>
                  <a href="index.html">
                    <i className="fas fa-chevron-right"></i>Home
                  </a>
                </li>

                <li>
                  <a href="category.html">
                    <i className="fas fa-chevron-right"></i>Category
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>follow us</h2>
              <a href="#e">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#e">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#e">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#e">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#e">
                <i className="fab fa-pinterest"></i>
              </a>
              <hr />
              <h2>payment </h2>
              <a href="#w">
                <i className="fab fa-cc-paypal"></i>
              </a>
              <a href="#ee">
                <i className="fab fa-cc-visa"></i>
              </a>
              <a href="#t">
                <i className="fab fa-cc-mastercard"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <h3>copy right &copy; developed by Ahmed salama</h3>
      </div>
    </>
  );
}

export default Footer;
