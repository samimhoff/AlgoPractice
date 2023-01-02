/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)

*/

function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let longest = 0;
  //This might not be the most optimal solution. Maybe using array of objects would be better.
  //For now, let's solve this way.
  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
      if (!hashMap[str[i]]) {
        hashMap[str[i]] = i;
      } else {
        //Here is where we'll count because we're at the end of the substring.
        hashMap[str[i]] = i;
      }
  }
}
