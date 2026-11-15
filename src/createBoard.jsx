import React from 'react'
// page for generating board with imported file

const genBoard = () => {
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
          <h1>Create Board</h1>
          <p>Create a board by importing a file or create a new one from scratch by choosing your selected preferences and browsing with those filters in the explore section.</p>
        </div>
      </div>
    </div>
  )
}

export default genBoard