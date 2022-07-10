import React,{useEffect} from 'react'
import About from '../about/about'
import Book from '../books/books'
import Contact from '../contact/contact'
import Search from '../search/search'
import Slider from '../slider/slider'
import WOW from 'wowjs';
function Home() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
    <Slider/>
    <hr/>
    <Search/>
    <hr/>
    <Book/>
    <hr/>
    <About/>
    <hr/>
    <Contact/>
    </>
  )
}

export default Home