import React from 'react'
import './singleBoard.css'
// gives a preview of a board with inputted words list

const MAX_PREVIEW_WORDS = 4;

const singleBoard = ({ board }) => {
  const words = board.words || [];
  const previewWords = words.slice(0, MAX_PREVIEW_WORDS);
  const hasMoreWords = words.length > MAX_PREVIEW_WORDS;

  return (
    <div className="word-box board-card">
      <h3>{board.name}</h3>
      {previewWords.length > 0 ? (
        <p>{previewWords.join(", ")}{hasMoreWords ? ", ..." : ""}</p>
      ) : (
        <p>No words yet</p>
      )}
      <p>{words.length} {words.length === 1 ? "word" : "words"}</p>
    </div>
  )
}

export default singleBoard