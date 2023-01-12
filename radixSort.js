const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const mostDigits = (arr) => {
	let longest = 0;
	for (let i = 0; i < arr.length; i++) {
  	if (digitCount(arr[i]) > longest) {longest = digitCount(arr[i])};
  }
  return longest;
}

const digitCount = (num) => {
	if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const radixSort = (arr) => {
	let len = mostDigits(arr);
  let newArr = arr;
  for (let i = 0; i < len; i++) {
  	//loop through every digit
    let bucket = Array.from({length: 10}, () => []);
    for (let j = 0; j < newArr[i].length; j++) {
    	bucket[getDigit(newArr[j], i)] = newArr[j];
    }
    newArr = [];
    for (let i = 0; i < bucket.length; i++) { //problem probably from the array being empty or something and .length not working?
    	bucket[i].forEach((e) => {
      	newArr.push(e);
      })
    }
  }
  return newArr;
}


console.log(radixSort([50,2,51,4,8,18,20,19,66,3,2837,54,8,5,33,4823,28,1,11,400]));



console.log(mostDigits([5000,23,1,49999,233, 4000]));
console.log(digitCount(5000))
console.log(getDigit(4352,0));

//Old solution
/* const getDigit1 = (num, i) => {
  let str = num.toString().split('');
  let dog = str[str.length - (i+1)];
  return parseInt(dog);
}
 */
