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

var inorderTraversal = function(root) {
  let results = []
  function recurse (node) {
      if (node) {
          if (node.left) recurse(node.left);
          results.push(node.val);
          if (node.right) recurse(node.right);
      }
  }
  recurse(root);
  return results;
};