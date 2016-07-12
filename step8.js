function duckCount(...args) {
  return (Array.prototype.filter.call(args, arg =>
    Object.prototype.hasOwnProperty.call(arg, 'quack'))).length;
}

module.exports = duckCount;
