import React from "react";
import "./navbar.css";
import {useEffect}from "react";
import {useDispatch,useSelector}from 'react-redux'
import {english,arabic} from'../redusers/optionSlise'
import {NavLink,useNavigate} from 'react-router-dom'
function Navbar() {
    const dispatch = useDispatch();
    const {en,ar} = useSelector(state => state.option);
    const navigate = useNavigate();
    const login=()=>{
        navigate('/login')
    }
  const togglenavebar = () => {

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("shownav");
    menu.classList.toggle("showmenu");
  };
  useEffect(() => {
        if(ar){
            document.querySelector("html").dir = "rtl";
            localStorage.setItem("lang","arabic");
        }
        else if(en){ 
            document.querySelector("html").dir = "ltr";
            localStorage.setItem("lang","arabic");
        }
    
  }, [ar,en])
  return (
    <>
      <nav>
        <div className="main"> 
          <h1>Book Store</h1>
          <div className="menu">
            <NavLink to='/' >
            {ar ?"الصفحه الرئيسيه" : "Home"}
            </NavLink>
            <NavLink to='category' href="#s">{ar?"الفئات": "Category"}</NavLink>
            <NavLink to='about'>{ar? "عن الشركه ":"About"}</NavLink>
            <NavLink to="contact">{ar ? "اتصل بنا ":"Contact"}</NavLink>
            <NavLink to="profile">{ar ? "الصفحه الشخصيه":"Profile"}</NavLink>
            <div className="language">
            <span className="en"onClick={()=>dispatch(english())}>EN </span>|<span className="ar" onClick={()=>dispatch(arabic())}> AR</span>
          </div>
          <button onClick={login}>{ar ?"تسجيل الدخول":"Login"}</button>
          </div>
      
          <button className="hamburger" onClick={togglenavebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
