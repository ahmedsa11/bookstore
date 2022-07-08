import React from 'react'
function BookDetails({info}) {
  return (
    <>
    <h1>Datails</h1>

   {Object.keys(info).length>0 ?(
    <ul >

        <li>title: {info.title}</li>
        <li>author: {info.author}</li>
        <li>published: {info.published}</li>
        <li>pages: {info.pages}</li>
        <li>price: {info.price}</li>
    </ul>):('No book to show')}
    </>
  )
}

export default BookDetails