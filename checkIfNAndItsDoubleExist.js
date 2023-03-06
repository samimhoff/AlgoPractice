/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  let sortedArr = arr.sort((a,b) => a -b);
  let firstNegative = null;
  //find first index thats not negative
//. 0 1 2 3 4 5 6 7 8 9
//. i h j
//. 5 4 0 1 2 3 4 5 6 7
  let half;
  if (sortedArr[0] < 0) {
      let seeking = true;
      let i = 0;
      let j = arr.length;
      let half;
      let n = 0;
      while (seeking && n < 20) {
          half = Math.floor((j-i)/2);
          if (j-i < 3) {
              half
          }
          if (sortedArr[half] < 0) {
              i = half;
          } else {
              j = half;
          }
      }
  }
  console.log('half: ', firstNegative, arr[firstNegative]);


  console.log('sortedArr: ', sortedArr);
  let i = 0, j = arr.length - 1;
  while (i < j) {
      if (arr[i] * 2 === arr[j]) return true;
      if (arr[i] * 2 < arr[j]) {
          i++;
      } else {
          j--;
      }
  }
  return false;
};

