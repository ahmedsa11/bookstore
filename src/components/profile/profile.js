import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="pr">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <form>
              <img
                src="images/fluter.png"
                className="rounded-circle"
                width="100"
                alt="avatar"
              />
              <button type="submit" className="button d-block">
                update your picture
              </button>
            </form>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="st">
              <h3>Personal Information</h3>
              <p>user name: </p>
              <p>email: </p>
              <form>
                <p htmlFor="firstname">first name: </p>
                <input className="d-inline" id="firstname" type="text" />
                <p htmlFor="lastname">last name: </p>
                <input className="d-inline" id="lastname" type="text" />
                <button type="submit" className="reset">
                  save changes
                </button>
              </form>
            </div>
            <br />
            <hr />
            <h3>Change the password</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  currently password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword3" className="form-label">
                  confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword3"
                  required
                />
              </div>
              <button type="submit" className="reset">
                reset password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
