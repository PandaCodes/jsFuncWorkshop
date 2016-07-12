function curryN(fn, nArg) {
  let n = nArg || fn.length;
  if (n === 0) return fn(); 
  return (arg) => curryN(fn.bind(this, arg), n - 1);
}

module.exports = curryN;
