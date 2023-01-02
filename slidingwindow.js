/*
  Max Array Sum
  i: array of ints, n
  o: int that is the max sum of a combination of n consecutive integers
*/

const maxArraySum = (arr, n) => {
  if (n > arr.length);
  let i = 0;
  let max = null;
  //solve with simple solution first, then come up with most efficient answer
  while ((i + n) <= arr.length) {
    let tot = 0;
    for (let j = i; j < n+i; j++) {
      tot += arr[j];
    }
    if (tot > max || max === null) {
      max = tot;
    }
    i++;
  }
  return max;
}

let arr1 = [1,2,5,2,8,1,9]; //n=2 / n=4
let arr2 = [4,2,1,6] // n=1
let arr3 = [4,2,1,6,4] //n=4
let arr4 = [] //n=4