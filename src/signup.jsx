import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase.config';
import "./style/login.css"

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
                setErrorMessage('User already exists, please use a different email');
            }
            else if (error.code === 'auth/weak-password') {
                setErrorMessage('Password is too weak, try again');
            }
            else if(error.code === 'auth/invalid-email'){
                setErrorMessage('Invalid email, please enter a valid email');
            } else if(error.code === 'auth/admin-restricted-operation'){
                setErrorMessage('Enter email and password');
            }
            else {
                setErrorMessage('Failed to sign up, please try again later');
            }
        }
    }

    return (
        <div className='login-screen-container'>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>  
        <div className="shape"></div>
        </div>
  <form className='log-form'>
    <h1>Sign Up</h1>
       <label className="log-label" htmlFor="email">Email</label>
       <br></br>
         <input className="log-input" type="text" placeholder="Email" id="email" onChange={handleEmail} />
      <br></br>
          <label className="log-label" htmlFor="password">Password</label>
    <br></br>
          <input className="log-input" type="password" placeholder="Password" id="password" onChange={handlePassword} />
  <br></br>
  <br></br>
        <p className='errorMessage'>{errorMessage}</p>
      <br></br>
        <button className='submitButton' onClick={handleSubmit}>Sign Up</button>
  <br></br>
  <br></br>
  <p className='accountMade'>Already have an account? <Link to={'/'} href="#">Login here</Link> </p>
    </form>
  </div>
    )
}

export default Signup

