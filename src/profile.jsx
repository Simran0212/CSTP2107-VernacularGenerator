import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import {auth} from "./firebase.config";
import {db} from "./firebase.config";
import  { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import {onAuthStateChanged} from 'firebase/auth';

function Profile() {
  const [userData, setuserData] = useState(null);
  const [boardNumber, setboardNumber] = useState(0);
  const [pinNumber, setpinNumber] = useState(0);
  const [pageState, setpageState] = useState(true);

  useEffect( ()=> {
      const userProfile = onAuthStateChanged(auth, async (currentUser) => 
        {
        if(currentUser){
            setboardNumber(0);
            setpinNumber(0);
        }
   } catch(error){
              console.log(error);
          }
          finally {
            setpageState(false);
          }
        }
        return () => userProfile();
      },
    )})
  return (
    <div className="page-container">
      <div className="menu-container">
        <Menu />
      </div>
      <div className="page-content">
        <div className="page-header">
          <div className="search-container">
            <SearchBar />
          </div>
          <div className="profile-container">
            <a className="profileLink" href="/profile">Profile</a>
          </div>
        </div>
        <div>
          <h1>Profile</h1>
            <br></br>
          <div className="profile">
          <div className="profilePhoto-container">
            <img src = {userData?.photoURL} alt = "Profile photo does not exist"></img>
            <br></br>
            <br></br>
          <p>{auth.currentUser?.displayName}</p>
            <br></br>
          </div>
          <ul>
            <li>Number of Boards: {boardNumber}</li>
              <br></br>
            <li>Number of Pins: {pinNumber}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
