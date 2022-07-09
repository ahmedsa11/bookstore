import React from "react";
import "./productprofile.css";
import { useSelector } from "react-redux";
function Productprofile() {
  const { bookinfo,error } = useSelector((state) => state.books);
  const addToCart = () => {
    var elements = document.querySelectorAll(".ripple-effect");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function(e) {
        e.preventDefault();
        var elm = document.querySelector(".wrapper");

        if (elm.className !== "marked") elm.classList.add("marked");

        elm.classList.remove("active");
        void elm.offsetWidth;
        elm.classList.add("active");
      });
    }
  };
  return (
    <>
    {Object.keys(bookinfo).length>0 ?(
      <div className="prod">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <img className="w-100" src={bookinfo.img} alt="jh" />
            </div>
            <div className="col-md-6 col-xs-12">
              <h1>name : {bookinfo.title} </h1>
              <h2>prise : {bookinfo.price}</h2>
              <hr />
              <button
                className="addpr ripple-effect"
                onClick={() => addToCart()}
              >
                Add to cart
              </button>
              <hr />
              <h1>description</h1>
              <p>{bookinfo.description}</p>
            </div>
          </div>
        </div>
      </div> 
    )
      :
      <div>no book to show beacouse {error}</div>
}
    </>
  );
}

export default Productprofile;
