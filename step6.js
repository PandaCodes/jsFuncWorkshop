function countWords(inputWords) {
  return inputWords.reduce((wordCountMap, str) => {
    const tmp = {};
    tmp[str] = wordCountMap[str] + 1 || 1;
    return Object.assign(wordCountMap, tmp);
  }, {});
}

module.exports = countWords;
