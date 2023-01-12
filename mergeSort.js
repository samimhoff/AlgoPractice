const mergeArrays = (arrL, arrR) => {
	let newArr = [];
	let l = 0;
  let r = 0;
  while (l < arrL.length && r < arrR.length) {
  	if (arrL[l] < arrR[r]) {
    	newArr.push(arrL[l]);
      l++;
    } else {
    	newArr.push(arrR[r]);
      r++;
    }
  }
  while (l < arrL.length) {
  	newArr.push(arrL[l])
    l++
  }
  while (r < arrR.length) {
  	newArr.push(arrR[r])
    r++
  }
  return newArr;
}

const mergeSort = (arr) => {
	if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));
  return mergeArrays(left, right);
}

console.log(mergeSort([1,5,8,12,4,21,9,3]));
console.log(mergeSort([10,4,2,13,31,7,41]));

