import React from "react";
import "./productprofile.css";
import { useSelector ,useDispatch} from "react-redux";
import { addBooktocart } from "../redusers/bookSlice";
function Productprofile() {
  const { bookinfo,error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const addToCart = (book) => {
    dispatch(addBooktocart(book));
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
                onClick={() => addToCart(bookinfo)}
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
