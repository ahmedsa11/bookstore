import React from 'react'
import About from '../about/about'
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
    <hr/>
    <About/>
    </>
  )
}

export default Home