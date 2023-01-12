const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > item; j--) {
      arr[j+1] = arr[j];
    }
  }
  return arr;
}

console.log(insertionSort([1,5,8,12,4,21,9,3]));
console.log(insertionSort([10,4,2,13,31,7,41]));
console.log(insertionSort([2,1]));
console.log();
