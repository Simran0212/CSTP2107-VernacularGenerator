import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";

const dashboard = () => {
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
          <p>Dashboard</p>
        </div>
      </div>
    </div>
  )
}

export default dashboard