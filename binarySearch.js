//Retry solution:

function binarySearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  console.log('running');
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left+right)/2);
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle-1;
    } else {
      left = middle+1;
    }
    middle = Math.floor((left+right)/2);
  }
  if (arr[middle] === val) {
  	return middle;
  }
  return -1;
}


console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
binarySearch([  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,  40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 100) // -1



// function binarySearch(arr, val){
//   // add whatever parameters you deem necessary - good luck!
//   let indexCount = 0;
//   while (arr.length) {
//     let middle = Math.ceil(arr.length/2);
//     if (arr[middle] === val) return indexCount + middle;
//     if (arr.length === 1) return -1;
//     if (val > arr[middle]) {
//       arr = arr.slice(middle);
//       indexCount += middle;
//       console.log('above arr ', arr);
//     } else {
//       arr = arr.slice(0, middle);
//       console.log('below arr ', arr);
//     }
//   }
//   return -1;
// }