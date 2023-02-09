/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

 //i: two strings
 //o: array of ints pointing to first index of start of anagram
 //e: s and p are lowercase & s and p are at least of length 1
    //Are letters in p repeated? could be?!

 /*
 0.5)Add result array empty
 1)Add dictionary of all values in p for quick access, with values set to count of that digit
 2)Loop through first string until character matches any values in dictionary
 3)Loop through first string at this index, checking for match with keys in dictionary. If they match set false to true. Make loop as long as length of p.
    //if they don't match, break out of loop.
        //set values to false in dictionary
    //if length is reached push index of start of second loop into results array
        //set dictionary values to false
 4) return results array
 */
 var findAnagrams = function(s, p) {
  let results = [];
  let dict = new Map();
  p.forEach((e) => {
      dict.set(e, false);
  })
  console.log('dict: ', dict);
  for (let i = 0; i < s.length; i++) {
      if (dict.has(s[i])) {
          for (let j = i; i < j+p.length; j++) {
              if (!dict.has[s[j]]) {
                  resetDict();
              } else {

              }
          }
      }
  }
};

const resetDict = (dict) => {
  for (const value of person.values()) {
      value = false;
  };
  console.log('check if reset worked: ', dict);
}