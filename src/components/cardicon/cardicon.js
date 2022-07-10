import React,{useEffect} from 'react'
import {Link}from 'react-router-dom'
import './cardicon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {useSelector}from 'react-redux'
function Cardicon() {
  const { bookcart} = useSelector((state) => state.books);
  const dot=()=>{
    var elm = document.querySelector(".wrapper");
    if(Object.keys(bookcart).length>0){
      elm.classList.add("marked");
    }
    if(Object.keys(bookcart).length===0){
      elm.classList.remove("marked");
    }
    elm.classList.remove("active");
    void elm.offsetWidth;
    elm.classList.add("active");
  }
  useEffect(() => {
    dot()
  }, [bookcart])
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