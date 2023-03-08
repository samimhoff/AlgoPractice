/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
 */
var countElements = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let prev = sorted[0];
  let left = 1;
  console.log(sorted);
  while (sorted[left] === prev && left < nums.length - 1) {
      prev = sorted[left];
      left++;
  }
  console.log(left);
  let aft = sorted[nums.length-1];
  let right = nums.length - 2;
  while (sorted[right] === aft && right > 0) {
      aft = sorted[right];
      right--;
  }
  console.log(right);
  return nums.length - left - (nums.length-(right+1));
};