function getDependencies(root) {
  function helper(tree, props) {
    if (props.length === 0) return [];
    const current = `${props[0]}@${tree[props[0]].version}`;
    const deps = getDependencies(tree[props[0]]).filter(item =>
      item !== current).concat(current);
    return helper(tree, props.slice(1)).filter(item =>
      !deps.some(dItem => dItem === item)).concat(deps);
  }

  return root && root.dependencies ?
    helper(root.dependencies,
    Object.getOwnPropertyNames(root.dependencies)).sort() : [];
}

module.exports = getDependencies;
