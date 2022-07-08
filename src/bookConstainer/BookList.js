import React from 'react'
function BookList({isLoading,books,isLogin,deleteBooks,dispatch,getbookid}) {
    
    const bookList =books.length>0?( books.map(book => ( <li className="list-group-item" key={book.id}>
        {book.title} <button disabled={!isLogin}onClick={()=>getbookid(book.id)}>Read</button> <button disabled={!isLogin} onClick={()=>dispatch(deleteBooks(book)).unwrap()
    .then((originalPromiseResult) => {
      alert("asd")
      console.log(
        originalPromiseResult
      )
    })
    .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError)
      // handle error here
    })}>Delete</button></li>))):('No books to show')
  return (
    <>
        <h1>Books</h1>
    {isLoading?(<div>Loading...</div>):(
    <ul className="list-group list-group-flush">
        {bookList}
</ul>)}
    </>
  )
}

export default BookList