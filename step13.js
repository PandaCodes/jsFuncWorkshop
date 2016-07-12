function repeat(operation, num) {
  if (num <= 0) return;
  operation();

  setTimeout(() => repeat(operation, num - 1), 0);
}

module.exports = repeat;
