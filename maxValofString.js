/**
 * @param {string[]} strs
 * @return {number}
 */

 //i: array of strings
 //   strings feature alphanumeric characters
 //o: int: maximum value alphanumerically
 //e: none

 //1) find out how to parse 0001 to an integer
 //2) establish maxval variable
 //3) loop and compare each value to prev max
 //4) return o: int
 var maximumValue = function(strs) {
  let max = 0;
  for (let i = 0; i < strs.length; i++) {
      console.log(strs[i]);
      let num = parseInt(strs[i]);
      let str = strs[i].length;
      if (!isNan(num)) {
          console.log(num, str);
          console.log('is number');
          max = Math.max(num, max);
      } else {
          consolel.log(str);
          max = Math.max(str, max);
      }
      console.log('max: ', max);
  }
  return max;
};