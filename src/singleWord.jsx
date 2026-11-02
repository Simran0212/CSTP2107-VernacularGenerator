import React from 'react'
// i.	Word + Definition using imput fields
const SingleWord = (word, definition) => {
  return (
    <div>
      <h3>{word}</h3>
      <p>{definition}</p>
    </div>
  )
}

export default SingleWord