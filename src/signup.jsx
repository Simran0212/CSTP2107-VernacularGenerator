import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase.config';
import "./signup.css"

const Signup = () => {

    const [signupData, setSignupData] = useState({});
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setSignupData({
            ...signupData,
            email: event.target.value
        })
    }

    const handlePassword = (event) => {
        setSignupData({
            ...signupData,
            password: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            if (user) {
                alert('User Created Succesfully');
                // Navigate the user to login page
                navigate('/');
            }
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/email-already-in-use') {
                alert('User already exists, use a different email');
            }
        }
    }

    return (
        <div className='signup-full-screen'>
        <div className="signup-container">
 <div className="signUp">
    <h1>Sign Up</h1>
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
        <button name="submit" onClick={handleSubmit}>Sign Up</button>
  <p>Already have an account? <Link to={'/'} href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link> </p>
    </form>
  </div>
</div>
</div>
    )
}

export default Signup

