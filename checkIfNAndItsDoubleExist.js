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
      let j = arr.length-1;
      let n = 0;
      while (seeking && n < 20) {
          half = Math.floor((j+i)/2);
          console.log('i, half, j: ', i, half, j);
          console.log('sortedarr[i], ...: ', sortedArr[i], sortedArr[half], sortedArr[j]);
          if (j-i < 3) {
              let x = i;
              while(sortedArr[x] > -1) {
                  x--;
              }
              firstNegative = x;
              seeking = false;
          }
          if (sortedArr[half] <= 0) {
              i = half;
          } else {
              j = half;
          }
      }
  }
  console.log('half: ', firstNegative, sortedArr[firstNegative]);
  if (checkHalf(sortedArr.slice(0, firstNegative), true) === true) return true;
  if (checkHalf(sortedArr.slice(firstNegative, sortedArr.length-1), false) === true) return true;
  return false;
};

const checkHalf = (arr, isPositive) => {
  let i = 0, j = arr.length - 1;
  if (isPositive) {
      while (i < j) {
          if (arr[i] * 2 === arr[j]) return true;
          if (arr[i] * 2 < arr[j]) {
              i++;
          } else {
              j--;
          }
      }
  } else { // determine how to check negative.
      while (i < j) {
          if (arr[i] * 2 === arr[j]) return true;
          if (arr[i] * 2 > arr[j]) {
              i++;
          } else {
              j--;
          }
      }
  }
  return false;
}

