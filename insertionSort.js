const insertionSort = (arr) => {
  let leftHalf = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    for (let j = leftHalf.length+1; j >= 0; j--) {
    	if (j === 0) {
      	leftHalf.unshift(item);
      }
      if (item > leftHalf[j]) {
      	console.log('----------------')
      	console.log('leftHalf');
      	console.log('item: ', item);
      	console.log('leftHalf[j]: ', leftHalf[j]);

        leftHalf.splice(j+1, 0, item);
        break;
      }
    }
  }
  return leftHalf;
}

console.log(insertionSort([1,5,8,12,4,21,9,3]));
console.log(insertionSort([10,4,2,13,31,7,41]));
console.log(insertionSort([2,1]));
console.log();
