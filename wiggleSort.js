/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  //solution needs slight tuning.
  let sorted = nums.sort((a, b) => a - b);
  let half = Math.floor(sorted.length-1/2) - 1;
  let j = half+1;
  console.log(sorted);
  for (let i = 1; i < half-1; i+=2) {
      let prev = sorted[i];
      sorted[i] = sorted[j];
      sorted[j] = prev;
      j+=2;
  }
  console.log(sorted);
  return sorted;
  //[5274163809]
};
