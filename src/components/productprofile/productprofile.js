import React from "react";
import './productprofile.css'
import b1 from '../../img/book-icon-file-8.jpg'
function Productprofile() {
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
      <div className="prod">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <img className="w-100" src={b1} alt="jh"/>
            </div>
            <div className="col-md-6 col-xs-12">
              <h1>name : </h1>
              <h2>prise : </h2>
              <hr />
              <button className="addpr ripple-effect" onClick={()=>addToCart()}>
                Add to cart 
              </button>
              <hr />
              <h1>description</h1>
              <p>
                Creating high quality, an attractive social presence, and
                functional sportswear is why we’re here.
                <br />
                <br />
                Gorilla Outfit is a digitally founded brand in 2017 by 2
                childhood friends who immensely wanted to bring a lot more to
                the sportswear industry by adding a sense of style and high
                functionality to boost confidence and performance. Now, with
                over 50K valued customers worldwide and opening our First
                physical store in Egypt. We are dedicated more than ever to help
                everyone styling up and feeling confident by the way they dress
                while exercising.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Productprofile;
