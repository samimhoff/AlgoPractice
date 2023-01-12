//Unoptimal space usage
const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  const left = [];
  const right = [];
  let mid = arr.pop();
  arr.forEach((e) => {
    if (e > mid) right.push(e);
    else left.push(e);
  });
  return quickSort(left).concat(mid, quickSort(right));
}

const arr1 = [4,20,3,9,21,2,4,5];
const arr2 = [4,3,8,5];
const arr3 = [10,15,3,6,27];

console.log(quickSort(arr1));
console.log(quickSort(arr2));
console.log(quickSort(arr3));