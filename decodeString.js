/**
 * @param {string} s
 * @return {string}
 * LeetCode Medium Problem 394.
 * Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 */
var decodeString2 = function(s) {
  let arr = s.split(/\[|\]/);
  let result = '';
  let prev = null;
  for (let i = 0; i < arr.length - 1; i++) {
      let parsed = parseInt(arr[i]);
      if (Number.isInteger(parsed)) {
          prev = parsed;
      } else {
          for (let j = 0; j < prev; j++) {
              result = result.concat(arr[i])
          }
      }
  }
  return result;
};
