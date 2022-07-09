import React from "react";
import { useState } from "react";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";
import { handleerror } from "../redusers/userslice";
import {insetrUser} from '../redusers/userslice'
import {Link}from 'react-router-dom'
function Signup() {
  const dispatch = useDispatch();
  let { error } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const validsignup = () => {
    const error = {};
    if (name === "") {
      error.name = "username is require";
    }
    else if (name.length < 3) {
      error.name = "username must be bigger than 2";
    }
    if (password === "") {
      error.password = "password is require";
    } 
    else if (password.length < 8) {
      error.password = "password must be bigger than 8";
    }
    if (confirmPassword !== password)
    {
      error.confirmPassword = "must enter the same pass";
    }
    else if (email === "")
    {
     error.email = "email is require";
    }
    dispatch(handleerror(error))
    return Object.keys(error).length === 0 ? null : error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    error= validsignup()
    if (error) return
    const users = {
      name,
      email,
      password,
      confirmPassword,
    };
    dispatch(insetrUser(users))
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("");
    
  };
  return (
    <div className="signup" id="signup">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        {error&& error.name && <span>{error.name}</span>}
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        {error&& error.email && <span>{error.email}</span>}
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}value={password} />
        {error&& error.password && <span>{error.password}</span>}
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}value={confirmPassword}
        />
        {error&& error.confirmPassword && (
          <span> { error.confirmPassword}</span>
        )}
        <button type="submit">Register</button>
        <Link to='signin'>Signin</Link>
      </form> 
    </div>
  );
}

export default Signup;
