var isSameTree = function(p, q) {
  if (!p && !q) {
      return true
  }

  return p?.val === q?.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};