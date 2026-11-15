import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase.config";
import "./login.css"

function Login(){
 const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("button clicked");
      navigate('/signup');
  }


  const handleEmail = (event) => {
    setLoginData({
      ...loginData,
      email: event.target.value
    })
  }

  const handlePassword = (event) => {
    setLoginData({
      ...loginData,
      password: event.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      if(user) {
        alert('User Logged in Successfully');
        navigate('/dashboard');
      }
      } catch (error){
        console.log(error.code)
        if(error.code === 'auth/invalid-credential'){
          alert('Incorrect password or user does not exist');
        }
    }
  }
  return (
  <div className="login-screen-container">
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>  
      <div className="shape"></div>
    </div>
  <form>
    <h1>Welcome to Vernacular Generator</h1>

  <label htmlFor="email">Email</label>

  <input type="text" placeholder="Email" id="email" onChange={handleEmail} />
  
  <label htmlFor="password">Password</label>

  <input type="password" placeholder="Password" id="password" onChange={handlePassword} />

  <button type="submit" onClick={handleSubmit}>Log In</button>
  <p>Don't have an account? Sign up!</p>
     <button name="signUp" onClick={handleSignup}>Sign Up</button>
  </form>
    </div>
    
  )
}

export default Login