import React from "react";
import "./mybooks.css";
import { useSelector,useDispatch } from "react-redux";
import {deleteBook}from '../redusers/bookSlice'
import { useNavigate } from "react-router-dom";
function Mybooks() {
  const { bookcart} = useSelector((state) => state.books);
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const chickout =()=>{
    navigate('/checkout')
  }
  return (
    <>
    <table className="table mybooks">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">img</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(bookcart).length>0 ?
    bookcart.map((book)=>
    <>
    <tr key={book.id}>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.price}</td>
      <td><img src={book.img} alt="as"/></td>
      <td><button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button></td>
    </tr>
   </>
    )
    :<tr><td>no books to show</td></tr>
    }
    <tr><td><button onClick={chickout} disabled={Object.keys(bookcart).length===0?true:false}>Checkout</button></td></tr>

  </tbody>
</table>
    </>
  );
}

export default Mybooks;
