/**
 * @param {string[]} words
 * @return {string[]}
 */

 //i: array of strings
 //o: array of strings, the strings being a subset of at least one other in the set
 //e: only strings with letters, and every string is at least length 1 and not empty

 /*
 1) create result array empty
 2) loop through words array and sort alphabetically
 3) loop again. For each word, compare with the next word in the array that has equal or less length
    a)Loop through both checking that letters match, with the loop's length ending at the smaller word's length
        i) if they don't match, break out of loop
        ii) if the loop ends, add the the current word to results.
 4) return results array
 */

 var stringMatching = function(words) {
  let results = [];
  words.forEach((e) => {
      e = e.split('');
      e.sort((a, b) => {
          return a - b;
      })
      e.join('');
      console.log('did sorting work? ', e);
  })
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length && j !== i; j++) {
          if (words[i].length <= words[j].length) {
              let match = false;
              for (let k = 0; k < words[i].length; k++) {
                  if (words[i][k] !== words[j][k]) {
                      break;
                  }
                  if (k === words[i].length) {
                      results.push(words[i]);
                  }
              }
          }
      }
  }
  return results;
};