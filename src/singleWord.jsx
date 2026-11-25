import React, { useEffect , useState} from 'react'
import { data } from 'react-router-dom';
// i.	Word + Definition using imput fields
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const SingleWord = ( {word} ) => {
  //const {keyword} = word;
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(`${URL}${word}`);
        const data = await response.json();
        setDefinition(data[0].meanings[0].definitions[0].definition);
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

  if (!definition) {
    <div className="word-box">
      <h3>{word}</h3>
      <p>Definition not found.</p>
    </div>
  }
  
  //console.log(definitionVar);
  //const definition = definitionVar === "" ? definitionVar : "Definition not found";
  
  return (
    <div className="word-box">
      <h3>{word}</h3>
      <p>{definition}</p>
    </div>
  )
}

export default SingleWord