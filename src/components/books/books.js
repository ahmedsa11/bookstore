import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./book.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../search/search.css";
import { getBooks, getBook, addBooktocart } from "../redusers/bookSlice";
import { useSelector, useDispatch } from "react-redux";
function Book() {
  const navigate = useNavigate();
  const { books, isLoading, error } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();
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
   const addToCart = (book) => {
    dispatch(addBooktocart(book));
  };
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const getbookid = (book) => {
    dispatch(getBook(book));
    navigate("productprofile");
  };
  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <Carousel responsive={responsive}>
          {books.map((book) => (
            <div className="book" key={book.id}>
              {/* <FontAwesomeIcon icon={faHeartCirclePlus} /> */}
              <div className="imgbook">
                <img src={book.img} alt="s" />
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p className="price">
                  {" "}
                  <ins> {book.price} </ins>
                  <del> {book.oldprice} </del>
                </p>
              </div>
              <div className="book-price">
                <button onClick={() => addToCart(book)}>buy</button>
                <button onClick={() => getbookid(book)}>read</button>
              </div>
            </div>
          ))}
        </Carousel>
      )}
      {error && (
        <div className="alert alert-primary" role="alert">
          Please try again
        </div>
      )}
    </>
  );
}

export default Book;
