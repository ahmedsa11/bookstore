import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./book.css";
import b1 from "../../img/book-icon-file-8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../search/search.css";
function Book() {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const addToCart = () => {
var elements = document.querySelectorAll('.ripple-effect');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function (e) { 
    e.preventDefault();
    var elm =  document.querySelector('.wrapper');
    
    if(elm.className  !== 'marked')
      elm.classList.add('marked');
       
    
    elm.classList.remove("active");
    void elm.offsetWidth;
    elm.classList.add("active");
  });
}
  }

  return (
    <>
      <Carousel responsive={responsive}>
        <div className="book">
          <FontAwesomeIcon icon={faHeartCirclePlus} />
          <div className="imgbook">
            <img src={b1} alt="s" />
          </div>
          <div className="book-info">
            <h3>Book Title</h3>
            <p>Book Description</p>
          </div>
          <div className="book-price">
            {" "}
            <button className="ripple-effect"onClick={()=>addToCart()}>buy</button>
            <button onClick={()=> navigate("/productprofile")}>read</button>
          </div>
        </div>
        <div className="book">
          <div className="imgbook">
            <img src={b1} alt="s" />
          </div>
          <div className="book-info">
            <h3>Book Title</h3>
            <p>Book Description</p>
          </div>
          <div className="book-price">
            {" "}
            <button>buy</button>
            <button>read</button>
          </div>
        </div>
        <div className="book">
          <div className="imgbook">
            <img src={b1} alt="s" />
          </div>
          <div className="book-info">
            <h3>Book Title</h3>
            <p>Book Description</p>
          </div>
          <div className="book-price">
            {" "}
            <button>buy</button>
            <button>read</button>
          </div>
        </div>
        <div className="book">
          <div className="imgbook">
            <img src={b1} alt="s" />
          </div>
          <div className="book-info">
            <h3>Book Title</h3>
            <p>Book Description</p>
          </div>
          <div className="book-price">
            {" "}
            <button>buy</button>
            <button>read</button>
          </div>
        </div>
        <div className="book">
          <div className="imgbook">
            <img src={b1} alt="s" />
          </div>
          <div className="book-info">
            <h3>Book Title</h3>
            <p>Book Description</p>
          </div>
          <div className="book-price">
            {" "}
            <button>buy</button>
            <button>read</button>
          </div>
        </div>
        <div className="book">
          <div className="imgbook">
            <img src={b1} alt="s" />
          </div>
          <div className="book-info">
            <h3>Book Title</h3>
            <p>Book Description</p>
          </div>
          <div className="book-price">
            {" "}
            <button>buy</button>
            <button>read</button>
          </div>
        </div>
      </Carousel>
      ;
    </>
  );
}

export default Book;
