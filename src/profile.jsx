import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";

const profile = () => {
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
          <p>
            <ul>
              <li>Profile photo</li>
              <li>Number of Boards</li>
              <li>Number of Pins</li>
            </ul>
            <br/>
            Need to decide on what other profile items to add as a group.
          </p>
        </div>
      </div>
    </div>
  )
}

export default profile