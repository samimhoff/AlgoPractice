/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  let tSort = target.sort((a,b) => a - b);
  let aSort = arr.sort((a,b) => a - b);
  for (let i = 0; i < tSort.length; i++) {
      if (tSort[i] !== aSort[i]) return false;
  }
  return true;
};
