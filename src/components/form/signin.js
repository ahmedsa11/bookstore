import React from 'react'
import { useState } from "react";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";
import { register, handleerror } from "../redusers/userslice";
import { Link } from 'react-router-dom';
function Signin() {
  const dispatch = useDispatch();
  let { error } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validsignin = () => {
    const error = {};
    if (password === "") {
      error.password = "password is require";
    } 
    if (email === "")
    {
     error.email = "email is require";
    }
    dispatch(handleerror(error))
    return Object.keys(error).length === 0 ? null : error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    error= validsignin()
    if (error) return
    const users = {
      email,
      password,
    };
    dispatch(register(users))
  };
  return (
    <div className='signin'id='signin'>
    <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' value={email}onChange={(e)=>setEmail(e.target.value)}/>
        {error&& error.email && <span>{error.email}</span>}
        <label>Password</label>
        <input type='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {error&& error.password && <span>{error.password}</span>}
        <button type='submit'>Login</button>
        <Link to='signup'>Signup</Link>
    </form>
</div>
  )
}

export default Signin