import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import {Routes,Route} from "react-router-dom";
import Home from "./components/home/home";
import Category from "./components/category/category";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Notfound from "./components/notfound/notfound";
import Mybooks from "./components/mybooks/mybooks";
import Productprofile from "./components/productprofile/productprofile";
import Cardicon from "./components/cardicon/cardicon";
import Profile from "./components/profile/profile";
import Signin from "./components/form/signin";
import Signup from "./components/form/signup";
import Footer from "./components/footer/footer";
import Checkout from "./components/checkout/checkout";
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
          <Route path="signin" element={<Signin/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="mybooks" element={<Mybooks/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="productprofile" element={<Productprofile/>} />
          <Route path="notfound" element={<Notfound/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
