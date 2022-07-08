import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./components/home/home";
import Category from "./components/category/category";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Notfound from "./components/notfound/notfound";
import Form from "./components/form/form";
import Mybooks from "./components/mybooks/mybooks";
import Productprofile from "./components/productprofile/productprofile";
import Cardicon from "./components/cardicon/cardicon";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cardicon/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Form/>} />
          <Route path="mybooks" element={<Mybooks/>} />
          <Route path="productprofile" element={<Productprofile/>} />
          <Route path="notfound" element={<Notfound/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
    </div>
  );
}

export default App;
