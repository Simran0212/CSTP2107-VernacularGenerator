import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase.config";

function Login(){
 const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();


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
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label for="email"> Email: </label>
          <input type="text" placeholder="Enter email" onChange={handleEmail}/>
        </div>
          <div>
          <label for="password"> Password: </label>
          <input type="password" onChange={handlePassword} placeholder="Enter password"/>
        </div>
        <button type="submit" onClick={handleSubmit}>Log In</button>
      </form>
    </div>

  )
}

export default Login