/**
 * @param {string} s
 * @return {number}
 https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
 */
 var maxDepth = function(s) {
  let depth = 0;
  let maxDepth = 0;
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          depth++;
          if (depth > maxDepth) {
              maxDepth = depth;
          }
      } else if (s[i] === ')') {
          depth--;
      }
  }
  return maxDepth;
};