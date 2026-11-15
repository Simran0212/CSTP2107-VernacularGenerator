import React from 'react'
import SingleWord from "./singleWord";

// takes a list of single words from import and turns it into a list of SingleWord components for display
// You can use this: https://dev.to/okonkwomandy/the-easiest-way-to-build-the-pinterest-layout-without-using-a-framework-3i0g
// tutorial on how to make a pinterest layout using css as a guiding point
const wordsDisplay = () => {
  return (
    <div className="words-Container">
      <div className="words-column">
        <SingleWord word="example" definition="This is an example definition." />
        <SingleWord word="test" definition="This is a test definition." />
        <SingleWord word="sample" definition="This is a sample definition." />
        <SingleWord word="demo" definition="This is a demo definition." />
        <SingleWord word="trial" definition="This is a trial definition." />
        <SingleWord word="prototype" definition="This is a prototype definition." />
      </div>
      <div className="words-column">
        <SingleWord word="demo" definition="This is a demo definition." />
        <SingleWord word="trial" definition="This is a trial definition." />
        <SingleWord word="prototype" definition="This is a prototype definition." />
        <SingleWord word="test" definition="This is a test definition." />
        <SingleWord word="sample" definition="This is a sample definition." />
        <SingleWord word="demo" definition="This is a demo definition." />
        <SingleWord word="trial" definition="This is a trial definition." />
        <SingleWord word="prototype" definition="This is a prototype definition." />
      </div>
      <div className="words-column">
        <SingleWord word="mockup" definition="This is a mockup definition." />
        <SingleWord word="illustration" definition="This is an illustration definition." />
        <SingleWord word="representation" definition="This is a representation definition." />
        <SingleWord word="test" definition="This is a test definition." />
        <SingleWord word="sample" definition="This is a sample definition." />
        <SingleWord word="demo" definition="This is a demo definition." />
        <SingleWord word="trial" definition="This is a trial definition." />
        <SingleWord word="prototype" definition="This is a prototype definition." />
      </div>
    </div>
  )
}

export default wordsDisplay