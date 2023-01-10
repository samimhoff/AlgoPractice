function selectionSort(arr){
	let swap = true;
  let start = 0;
  while (swap) {
    swap = false;
    let smallestI = start;
  	for (let i = start+1; i < arr.length; i++) {
      if (arr[i] < arr[smallestI]) {
        smallestI = i;
        swap=true;
      }
    }
    if (start !== smallestI) {
      let startVal = arr[start];
      arr[start] === arr[smallestI];
      arr[smallestI] = startVal;
    }
    start++;
  }
  return arr;
}

let arr1 = []