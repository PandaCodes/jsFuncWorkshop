module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((acc, item, index) =>
    acc.concat([fn.call(thisArg, item, index, arr)]), []);
};
