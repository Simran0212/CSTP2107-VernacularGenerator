import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import { useState } from 'react'
import { applyTheme, getSavedTheme } from './theme'

const settings = () => {

  const [selectedTheme, setSelectedTheme] = useState(getSavedTheme());

const handleThemeChange = (event) => {
  setSelectedTheme(event.target.value);
  applyTheme(event.target.value);
};

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
          <p>
            <ul>
              <li>Change password</li>
              <li>Change email</li>
              <li>Change username</li>
              <li>Change profile picture</li>
              <li>Change theme</li>
            </ul>
            <br/>
            Need to decide on what other settings to impliment as a group.
          </p>
        </div>
      </div>
    </div>
  )
}

export default settings