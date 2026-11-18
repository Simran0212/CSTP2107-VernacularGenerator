import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
// page for creating new board or 
// generating board with imported file



const createBoard = () => {
  return (
    <>
    
    <div className="page-container">
      
      <div className="menu-container">
        <Menu />
      </div>
      <div className="page-content">
        <div className="brief" id="board-brief">
          <h3>What's a Board?</h3>
          <p>You can create a collection of words that you think is fitting for a piece you are writing, or a character.</p>
          <button onClick={() => { document.getElementById('board-brief').style.visibility = "hidden" }}>Okay</button>
        </div>
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
          <form action="" method="post" encType="text/plain">
            <input type="file" id="fileInput" name="fileInput" accept=".doc, .txt" />
            <button type="submit">Import File</button>
          </form>
          <button>Create from Scratch</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default createBoard