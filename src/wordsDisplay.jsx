import React from 'react'
import SingleWord from "./singleWord";
import { floor } from 'firebase/firestore/pipelines';

const exampleWords = ['example', 'test', 'sample', 'demo', 'trial', 'prototype', 'mockup', 'illustration', 'representation','example', 'test', 'sample', 'demo', 'trial', 'prototype', 'mockup', 'illustration', 'representation','example', 'test', 'sample', 'demo', 'trial', 'prototype', 'mockup', 'illustration', 'representation'];

// takes a list of single words from import and turns it into a list of SingleWord components for display
// You can use this: https://dev.to/okonkwomandy/the-easiest-way-to-build-the-pinterest-layout-without-using-a-framework-3i0g
// tutorial on how to make a pinterest layout using css as a guiding point
const wordsDisplay = () => {
  // split the exampleWords array into three columns for display
  const thirds = Math.floor(exampleWords.length/3);
  //console.log(thirds);
  const column1 = exampleWords.slice(0, thirds);
  const column2 = exampleWords.slice(thirds, thirds*2);
  const column3 = exampleWords.slice(thirds*2, exampleWords.length);
  
  return (
    <div className="words-Container">
      <div className="words-column">
        {column1.map((word, index) => (
          <SingleWord key={index} word={word} />
        ))}
      </div>
      <div className="words-column">
        {column2.map((word, index) => (
          <SingleWord key={index} word={word} />
        ))}
      </div>
      <div className="words-column">
        {column3.map((word, index) => (
          <SingleWord key={index} word={word}  />
        ))}
      </div>
    </div>
  )
}

export default wordsDisplay
        