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

var postorderTraversal = function(root) {
  const results = [];
  function recurse(node) {
      if (node) {
          if (node.left) recurse(node.left);
          if (node.right) recurse(node.right);
          results.push(node.val);
      }
  }
  recurse(root);
  return results;
};

//Return to this one. Remember we don't need the depth, just to return in format like [[1], [2,3], [4,5,6]];
var levelOrder = function(root) {
  let results = [];
  let queue = [root];
  let level = 0;
  while(queue.length) {
      let currentSize = queue.length;
      for (let i = 0; i < currentSize; i++) {
          let pop = queue.shift();
          results.push({
              val: pop.val,
              depth: level
          });
          if (pop.left !== null) queue.push(pop.left);
          if (pop.right !== null) queue.push(pop.right);
      }
  }
  return results;
};