import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";

const createBoard = () => {
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
        <div className="page-body">
          <h1>Create Board</h1>
          <form action="/import" method="post" encType="multipart/form-data">
            <input type="file" id="fileInput" name="fileInput" accept=".doc, .txt" />
            <button className="button blue" type="submit">Create from File</button>
          </form>
          <button className="button blue">Create from Scratch</button>
        </div>
      </div>
    </div>
  )
}

export default createBoard