import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import { useState } from 'react'
import { applyTheme, getSavedTheme } from './theme'
import {auth} from "./firebase.config";
import { updatePassword } from 'firebase/auth';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const settings = () => {
 const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState(getSavedTheme());
  const password = useRef(null);
 
const handleThemeChange = (event) => {
  setSelectedTheme(event.target.value);
  applyTheme(event.target.value);
};
const handlePasswordChange = async (event) => {
  event.preventDefault();
  console.log(password.current.value);
  const user = auth.currentUser;
  const passwordChanged = password.current.value;
  try  {
    await updatePassword(user, passwordChanged);
    alert("Password has been changed");
    password.current.value = "";
  } catch (error){
    console.log(error);
    if(error.code === 'auth/requires-recent-login') {
      alert("Error encountered, please log out and then log in to change password");
    }
    else {
      alert('Error encountered, please try again' +  error.message);
    }
  }
}
function changePassword() {
         navigate('/CreatePassword');
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
          <h1>Settings</h1>
          <label htmlFor="theme-select">Theme: </label>
          <select id="theme-select" value={selectedTheme} onChange={handleThemeChange}>
            <option value="system">System default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
              <div className="passwordChangeContainer">
                <br></br>
              <button className="changePassword" onClick={changePassword}>Change password</button>
             </div>
              <br></br>
              <button className="changeEmail">Change email</button>  
              <br></br>
              <br></br>
            <ul>
              <li>Change username</li>
              <li>Change profile picture</li>
              </ul>
            Need to decide on what other settings to impliment as a group.
        </div>
      </div>
        </div>
  )

     }

export default settings
