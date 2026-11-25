import dictionaryJSON from './data/dictionary.json';
const dictionary = [];
fillDictionary();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//console.log(dictionary);
function fillDictionary() {
    for (var key in dictionaryJSON) {
        dictionary.push(key);
    }
}

export const getRanWordList = (listLen) => {
    const wordList = [];
    const maximum = dictionary.length;

    for (let i = 0; i < listLen; i++) {
        //console.log(dictionary);
        wordList.push(dictionary[getRandomInt(maximum)]);
    }
    return wordList;
};
