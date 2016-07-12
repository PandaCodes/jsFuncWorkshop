function getShortMessages(messages) {
  return messages.map(o => o.message).filter(s => s.length < 50);
      // SOLUTION GOES HER
}

module.exports = getShortMessages;
