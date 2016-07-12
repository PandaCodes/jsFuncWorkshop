function Spy(target, method) {
  const o = { count: 0 };
  const oldMethod = target[method];
  target[method] = (...args) => {
    o.count++;
    return oldMethod.apply(target, args);
  };
  return o;
}

module.exports = Spy;
