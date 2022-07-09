import React from "react";
import './checkout.css'
function Checkout() {
  return (
    <>
      <div className="prod">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <img className="w-100" src="images/css.png" alt="sd"/>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="pay">
                <a href="#data">Paiement when recieving</a>{" "}
                <a href="payp" id="paypal">
                  <i className="fab fa-cc-paypal"></i>
                </a>
              </div>
              <div className="paydel" id="data">
                <h4>name : </h4>
                <label for="totalprice">total prise : </label>{" "}
                <input id="totalprice" type="text" />
                <hr />
                <form>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                      phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      quantity
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                      Total price
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="mb-3">
                    <h5>Size:</h5>
                    <div className="radio">
                      <input className="ra" type="radio" name="size" id="rd1" />{" "}
                      <label for="rd1">M</label>
                      <input
                        className="ra"
                        type="radio"
                        name="size"
                        id="rd2"
                      />{" "}
                      <label for="rd2">L</label>
                      <input
                        className="ra"
                        type="radio"
                        name="size"
                        id="rd3"
                      />{" "}
                      <label for="rd3">X</label>
                      <input className="ra" type="radio" name="size" id="rd4" />
                      <label for="rd4">XL</label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">
                      your address
                    </label>
                    <textarea
                      required
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button className="button" type="submit">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
