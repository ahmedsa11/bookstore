import React from 'react'
import Book from '../books/books'
import Search from '../search/search'
import Slider from '../slider/slider'

function Home() {
  return (
    <>
    <Slider/>
    <hr/>
    <Search/>
    <hr/>
    <Book/>
    </>
  )
}

export default Home