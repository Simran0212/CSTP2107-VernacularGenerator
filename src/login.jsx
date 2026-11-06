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
  <div className="login-full-screen">
  <div className="login">
  <div className='leftHand'>

    <h1>Welcome to Vernaculator Generator</h1>
    <h2>Don't have an account?</h2>
    <button name="signUp" onClick={handleSignup}>Sign Up</button>
  </div>
  <div className="rightHand">
    <h1>Sign In</h1>
    <form>
      <div>
       <label for="email"> Email </label>
       <br></br>
          <input type="text" placeholder="Enter email" onChange={handleEmail}/>
    </div>
    <div>
      <br></br>
          <label for="password"> Password </label>

    <br></br>
          <input type="password" onChange={handlePassword} placeholder="Enter password"/>
        </div>
  <br></br>
        <button name="submit" onClick={handleSubmit}>Log In</button>
    </form>
  </div>
</div>
</div>
    
  )
}

export default Login