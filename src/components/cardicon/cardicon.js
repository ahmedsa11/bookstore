import React from 'react'
import {Link}from 'react-router-dom'
import './cardicon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
function Cardicon() {
  return (
    <div className="wrapper">
    <Link to="mybooks"><button className="btn shop d-flex align-items-center justify-content-center">
     <FontAwesomeIcon icon={faCartPlus} />
    </button></Link>
    <div className="target d-flex align-items-center justify-content-center"><i className="fas fa-box"></i></div>
  </div>
  )
}

export default Cardicon