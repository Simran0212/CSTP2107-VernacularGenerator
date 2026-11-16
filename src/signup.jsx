import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase.config';
import "./signup.css"

const Signup = () => {

    const [signupData, setSignupData] = useState({});
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmail = (event) => {
        setSignupData({
            ...signupData,
            email: event.target.value
        })
        setErrorMessage('');
    }

    const handlePassword = (event) => {
        setSignupData({
            ...signupData,
            password: event.target.value
        })
        setErrorMessage('');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        try {
            const user = await createUserWithEmailAndPassword(auth, signupData.email, signupData.password);
            if (user) {
                //alert('User Created Succesfully');
                // Navigate the user to login page
                navigate('/');
            }
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('User already exists, use a different email');
            }
            else if (error.code === 'auth/weak-password') {
                setErrorMessage('Password is too weak, try again');
            }
            else {
                setErrorMessage(`Error: ${error.code}`);
            }
        }
    }

    return (
        <div className='signup-screen-container'>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>  
        <div className="shape"></div>
        </div>
  <form>
    <h1>Sign Up</h1>
       <label htmlFor="email">Email</label>
       <br></br>
         <input type="text" placeholder="Email" id="email" onChange={handleEmail} />
      <br></br>
          <label htmlFor="password">Password</label>
    <br></br>
          <input type="password" placeholder="Password" id="password" onChange={handlePassword} />
  <br></br>
  <br></br>
        <p className='errorMessage'>test</p>
      <br></br>
        <button name="submit" onClick={handleSubmit}>Sign Up</button>
  <p className='accountMade'>Already have an account? <Link to={'/'} href="#">Login here</Link> </p>
    </form>
  </div>
    )
}

export default Signup

