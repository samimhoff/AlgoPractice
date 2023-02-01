var preorderTraversal = function(root) {
  let result = [];
  const recurse = (node) => {
      if (node) {
          result.push(node.val);
          if (node.left) recurse(node.left);
          if (node.right) recurse(node.right);
      }
  }
  recurse(root);
  return result;
};