function reduce(arr, fn, initial) {
  return (function helper(index) {
    if (index < 0) return initial;
    return fn(helper(index - 1), arr[index], index, arr);
  }(arr.length - 1));
}

module.exports = reduce;
