import React from 'react'
import Menu from './menu'
import SearchBar from './searchbar'

const dashboard = () => {
  return (
    <div className="dashboard-container">
      <div>
        <Menu />
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div className="search-container">
            <SearchBar />
          </div>
          <div className="search-container">
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