import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {loginout} from '../redusers/auth';
function Header() {
    const {error} = useSelector(state => state.books);
    const {isLogin} = useSelector(state => state.auth);
    const dispatch = useDispatch();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#e">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#e">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#e">Link</a>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#f">Action</a>
          <a className="dropdown-item" href="#f">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#f">Something else here</a>
        </div>
      </li> */}
    </ul>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>dispatch(loginout())}>{isLogin?'Logout':'Login'}</button>
  </div>
</nav>
    {error&&
      <div className="alert alert-primary" role="alert">{error}</div>
    }
    </>
  );
}

export default Header;
