import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase.config";
import "./style/login.css"

function Login(){
 const [loginData, setLoginData] = useState({});
 const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleEmail = (event) => {
    setLoginData({
      ...loginData,
      email: event.target.value
    })
    setErrorMessage('');
  }

  const handlePassword = (event) => {
    setLoginData({
      ...loginData,
      password: event.target.value
    })
    setErrorMessage('');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setErrorMessage('');
    try {
      const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      if(user) {
        //alert('User Logged in Successfully');
        navigate('/dashboard');
      }
      } catch (error){
        //console.log(error.code)
        if(error.code === 'auth/invalid-credential' || 'auth/wrong-password' || 'auth/user-not-found'){
          setErrorMessage('Incorrect password or email');
        }
        else if(error.code === 'auth/invalid-email'){
          setErrorMessage('Invalid email, please enter a valid email');
        }
        else {
            setErrorMessage('Failed to login, please try again later');
        }
    }
  }
  return (
  <div className="login-screen-container">
  <form className="log-form">
    <h1>Welcome to Vernacular Generator</h1>

  <label className="log-label" htmlFor="email">Email</label>

  <input className="log-input" type="text" placeholder="Email" id="email" onChange={handleEmail} />
  
  <label className="log-label" htmlFor="password">Password</label>

  <input className="log-input" type="password" placeholder="Password" id="password" onChange={handlePassword} />
  <br></br>
   <p className='errorMessage'>{errorMessage}</p>
  <br></br>
  <button type="submit" onClick={handleSubmit} className="login">Log In</button>
  <br></br>
  <br></br>
  <p>Don't have an account? <Link to={'/signup'} href="#">Sign Up</Link></p>
  <br></br>

  </form>
    </div>
  
  )
}

export default Login
