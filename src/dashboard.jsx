import React from 'react'
import Menu from './menu'
import SearchBar from "./searchBar";
import WordsDisplay from './wordsDisplay';
import { getRanWordList } from './genWordsList';

const dashboard = () => {
  const exampleWords = ['bandits', 
  'bankcard', 'sample', 'demo', 'trial', 'prototype', 'mockup', 'illustration', 
  'representation','example', 'test', 'sample', 'demo', 'trial', 'prototype', 
  'mockup', 'illustration', 'representation','example', 'test', 'sample', 'demo', 
  'trial', 'prototype', 'mockup', 'illustration', 'representation'];

  const ranExampleWords = getRanWordList(50);

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
        <div className="wordDisplay-Container">
          <WordsDisplay wordList={ranExampleWords}/>
        </div>
      </div>
    </div>
  )
}

export default dashboard