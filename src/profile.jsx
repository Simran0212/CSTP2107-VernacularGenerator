import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import {auth} from "./firebase.config";
import {db} from "./firebase.config";
import  { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import {onAuthStateChanged} from 'firebase/auth';

function profile() {
  const [userData, setuserData] = useState(null);
  const [boardNumber, setboardNumber] = useState(0);
  const [pinNumber, setpinNumber] = useState(0);
  const [pageState, setpageState] = useState(true);

  useEffect( ()=> {
      const userProfile = onAuthStateChanged(auth, async (currentUser) => 
      {
        if(currentUser){
          try{
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setuserData(docSnap.data())
            }
            const boardsQuery = query(collection(db, "boards"), where("userId", "==", currentUser.uid));
            const boardsSize = await getDocs(boardsQuery);
            setboardNumber(boardsSize.size);

            const pinsQuery = query(collection(db, "pins"), where("userId", "==", currentUser.uid));
            const pinSize = await getDocs(pinsQuery);
            setpinNumber(pinSize.size);

          } catch(error){
              console.log(error);
          }
          finally {
            setpageState(false);
          }
        }
          else
          {
            setpageState(false);
          }
        });
        userProfile();
      }, []);
      if(pageState){
        return <p>Profile is Loading..</p>;
      }
    
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
          <div className="profile">
          <div className="profilePhoto-container">
            <img src = {userData?.photoURL} alt = "Profile"></img>
          <p>{userData?.displayName || auth.currentUser?.email}</p>
          </div>
          <ul>
            <li>Number of Boards: {boardsSize}</li>
            <li>Number of Pins: {pinSize}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile