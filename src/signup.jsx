import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, googleAuthProvider } from '../firebase.config';
import GoogleSignin from '../components/GoogleSignin';

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
                navigate('/login');
            }
        } catch (error) {
            console.log(error.code)
            if (error.code === 'auth/email-already-in-use') {
                alert('User already exists, use a differnet email');
            }
        }

    
    }
}
