import React from 'react'
import { useNavigate } from 'react-router-dom';

function login(){

  const navigate = useNavigate();

  const buttonClickDashboard = (e) =>{
    navigate("/dashboard");

  }
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label> Email: </label>
          <input type="text" placeholder="Enter email"/>
        </div>
          <div>
          <label> Password: </label>
          <input type="password" placeholder="Enter password"/>
        </div>
        <button type="submit" onClick={buttonClickDashboard}>Log In</button>
      </form>
    </div>

  )
}
export default login