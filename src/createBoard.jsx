import React, { useState } from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import { addBoard, getBoards } from './boards'
import SingleBoard from './singleBoard'

const createBoard = () => {
  const [isCreatingFromScratch, setIsCreatingFromScratch] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [boards, setBoards] = useState(getBoards());

  const handleStartCreate = () => {
    setIsCreatingFromScratch(true);
  };

  const handleCancelCreate = () => {
    setIsCreatingFromScratch(false);
    setBoardName("");
    setErrorMessage("");
  };

  const handleSubmitBoard = (event) => {
    event.preventDefault();
    const trimmedBoardName = boardName.trim();
    if (trimmedBoardName === "") {
      setErrorMessage("Please enter a board name.");
      return;
    }
    addBoard(trimmedBoardName);
    setBoards(getBoards());
    handleCancelCreate();
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
        <div className="page-body">
          <h1>Create Board</h1>
          <form action="/import" method="post" encType="multipart/form-data">
            <input type="file" id="fileInput" name="fileInput" accept=".doc, .txt" />
            <button className="button blue" type="submit">Create from File</button>
          </form>

          {isCreatingFromScratch ? (
            <form onSubmit={handleSubmitBoard}>
              <label htmlFor="boardName">Board name</label>
              <input
                id="boardName"
                type="text"
                value={boardName}
                onChange={(event) => setBoardName(event.target.value)}
                placeholder="e.g. 1920s dockworker"
                maxLength={50}
              />
              <button className="button green" type="submit">Create</button>
              <button className="button red" type="button" onClick={handleCancelCreate}>Cancel</button>
              {errorMessage && <p>{errorMessage}</p>}
            </form>
          ) : (
            <button className="button blue" onClick={handleStartCreate}>Create from Scratch</button>
          )}
          <h2>Your boards</h2>
            <div className="boards-container">
              {boards.map((board) => (
                <SingleBoard key={board.id} board={board} />
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default createBoard