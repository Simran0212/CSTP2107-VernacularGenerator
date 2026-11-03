import React from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'


const login = () => {
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
        <button type="submit">Log In</button>
      </form>
    </div>

  )
}

export default login