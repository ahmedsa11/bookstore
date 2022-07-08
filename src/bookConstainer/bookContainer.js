import React from 'react'
import {useEffect,useState} from 'react'
import {useDispatch,useSelector}from 'react-redux'
import { getBooks,deleteBooks } from '../redusers/bookSlice'
import BookDetails from './BookDetails';
import BookList from './BookList';

function Bookcontainer() {
    const {isLoading,books} = useSelector(state => state.books);
    const {isLogin} = useSelector(state => state.auth);
    const [selectedBook,setSelectedBook] = useState({});
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBooks());
    },[dispatch])
    const getbookid=(id)=>{
        const select=books.find(book=>book.id===id);
        setSelectedBook((prev)=>{return{ ...prev,...select}})
    }
  return (
    <>
    <div className='row'>
    <div className='col-md-6'>
        <BookList isLoading={isLoading}books={books}isLogin={isLogin}deleteBooks={deleteBooks}dispatch={dispatch} getbookid={getbookid}/>
    </div>
    <div className='col-md-6'>
            <BookDetails info={selectedBook}/>
    </div>
    </div>
    </>
  )
}

export default Bookcontainer