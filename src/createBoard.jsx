import React, { useState } from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import SingleBoard from './singleBoard'
import { addBoard, getBoards } from './boards'

const MAX_FILE_SIZE_BYTES = 1024 * 1024; // 1 MB

const extractUniqueWords = (text) => {
  const words = text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) || [];
  return [...new Set(words)];
};

const createBoard = () => {
  const [isCreatingFromScratch, setIsCreatingFromScratch] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [boards, setBoards] = useState(getBoards());
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileErrorMessage, setFileErrorMessage] = useState("");

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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0] || null);
    setFileErrorMessage("");
  };

  const handleFileSubmit = (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    if (!selectedFile) {
      setFileErrorMessage("Please choose a .txt file first.");
      return;
    }
    if (!selectedFile.name.toLowerCase().endsWith(".txt")) {
      setFileErrorMessage("Only .txt files are supported for now.");
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setFileErrorMessage("That file is too large (max 1 MB).");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const uniqueWords = extractUniqueWords(fileReader.result);
      if (uniqueWords.length === 0) {
        setFileErrorMessage("No words were found in that file.");
        return;
      }
      const newBoardName = selectedFile.name.replace(/\.txt$/i, "");
      addBoard(newBoardName, uniqueWords);
      setBoards(getBoards());
      setSelectedFile(null);
      setFileErrorMessage("");
      formElement.reset();
    };
    fileReader.onerror = () => {
      setFileErrorMessage("Could not read that file.");
    };
    fileReader.readAsText(selectedFile);
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
          <form onSubmit={handleFileSubmit}>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              accept=".txt"
              onChange={handleFileChange}
            />
            <button className="button blue" type="submit">Create from File</button>
            {fileErrorMessage && <p>{fileErrorMessage}</p>}
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