import React, { useEffect , useState} from 'react'
// i.	Word + Definition using imput fields
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const SingleWord = ( {word} ) => {
  //const {keyword} = word;
  const [definition, setDefinition] = useState(null);
  const [type, setType] = useState(null);
  const [varieties, setVarieties] = useState(null);


  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(`${URL}${word}`);
        const data = await response.json();
        if (data[0]) {
          setDefinition(data[0].meanings[0].definitions[0].definition);
          setType(data[0].meanings[0].partOfSpeech);
          setVarieties(data[0].meanings.length);
        } else {
          setDefinition("Definition not found");
          setType("N/A");
          setVarieties("N/A");
        }
        
        //console.log(definition);
      } catch (error) {
        console.error('Failed to fetch Word details:', error);
      }
    };

    fetchWord();
  }, [word]);

  if (!word) {
    <div className="word-box">
      <p>Finding Definition</p>
    </div>
  }
  
  return (
    <div className="word-box">
      <h3>{word}</h3>
      <p>{definition}</p>
    </div>
  )
}

export default SingleWord