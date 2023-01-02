const countUniqueValues = (arr) => {
	let count = 0;
	if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let prevDif = false;
	let l = 0;
  let r = 1;
  while (r <= arr.length) {
  	if (arr[l] !== arr[r]) {
    	if (l === 0 || prevDif === true) {
        console.log(arr[l]);
     		count++;
      }
      prevDif = true;
    } else {
    	prevDif = false;
    }
    l++;
    r++;
  }
  return count;
}

					//                 l,r
let arr1 = [1,1,1,1,2,2,3,4,6,6,6,7,8,8,9,10];

console.log(countUniqueValues(arr1));