import React from 'react'
import {useRef}from 'react'
import {useDispatch}from 'react-redux'
import {insertBooks}from '../redusers/bookSlice'
import {useSelector}from 'react-redux'
function Form() {
    const title = useRef(null);
    const author = useRef(null);
    const published = useRef(null);
    const pages = useRef(null);
    const price = useRef(null);
    const dispatch = useDispatch();
    const {isLogin}=useSelector(state => state.auth);
   const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            title: title.current.value,
            author: author.current.value,
            published: published.current.value,
            pages: pages.current.value,
            price: price.current.value
    }
    dispatch(insertBooks(book));
    title.current.value = null;
    author.current.value = null;
    published.current.value = null;
    pages.current.value = null;
    price.current.value = null;
}
   
  return (
    <>
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="title">title</label>
    <input type="text" className="form-control" id="title"required ref={title}/>
  </div>
  <div className="form-group">
    <label htmlFor="author">author</label>
    <input type="text" className="form-control" id="author"required ref={author}/>
  </div>
  <div className="form-group">
    <label htmlFor="published">published</label>
    <input type="text" className="form-control" id="published"required ref={published}/>
  </div>
  <div className="form-group">
    <label htmlFor="pages">pages</label>
    <input type="text" className="form-control" id="pages" required ref={pages}/>
  </div>
  <div className="form-group">
    <label htmlFor="price">price</label>
    <input type="text" className="form-control" id="price"required ref={price}/>
  </div>
    <button type='submit' className="btn btn-primary" disabled={!isLogin}>Submit</button>
  </form>
    </>
  )
}

export default Form