function countWords(inputWords) {
  return inputWords.reduce(function(stringNumbersObject, str) {
    if (stringNumbersObject.hasOwnProperty(str)) {
      stringNumbersObject[str]++;
    } else {
      stringNumbersObject[str] = 1;
    }
  }, new Object());
}
    
module.exports = countWords
