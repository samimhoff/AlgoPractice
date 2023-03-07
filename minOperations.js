/**
 * @param {string[]} logs
 * @return {number}
 * https://leetcode.com/problems/crawler-log-folder/description/
 */
var minOperations = function(logs) {
  let depth = 0;
  const inputConversion = {
      '../': -1,
      './': 0,
  }
  for (let i = 0; i < logs.length; i++) {
      if (inputConversion.hasOwnProperty(logs[i])) {
          let addition = inputConversion[logs[i]];
          if (addition === -1 && depth > 0) {
              depth--;
          }
      } else {
          depth++;
      }
  }
  return depth;
};