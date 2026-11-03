import React from 'react'

function login(){
  const buttonClickDashboard = (e) =>{
    Navigate("/dashboard");

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