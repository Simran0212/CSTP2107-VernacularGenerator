import React from 'react'
// side bar menu for the app. Sideways navbar with buttons for each page. When clicked, it will navigate to that page.
// seperate buttons for when logged in and not logged in
// Page icon becomes different color when on that page (ex. home page turns filled in when in home page)
import { useNavigate } from 'react-router-dom';

const menu = () => {
  const navigate = useNavigate();

  const buttonClickSettings = (e) =>{
    navigate("/settings");
  }
  const buttonClickCreate = (e) =>{
    navigate("/genBoard");
  }
  
  return (
    <>
    <nav className="menu">
        <div>Logo</div>
        <a href="/dashboard" className="menu-item">Dashboard</a>
        <a href="/settings" className="menu-item">Settings</a>
        <a href="/genBoard" className="menu-item">Create</a>
    </nav>
    </>
  )
}

export default menu