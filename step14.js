function repeat(operation, num) {
  return () => {
    if (num <= 0) return 0;
    operation();
    return repeat(operation, num - 1);
  };
}

function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}


module.exports = (operation, num) => {
  trampoline(() => repeat(operation, num));
};
