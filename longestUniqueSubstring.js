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

//findLongestSubstring('thisishowwedoit') // 6
function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  let longest = 0;
  let current = 0;
  //This might not be the most optimal solution. Maybe using array of objects would be better.
  //For now, let's solve this way.
  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashMap[str[i]] && (i !== str.length - 1)) {
      hashMap[str[i]] = i;
    } else {
      //Here is where we'll count because we're at the end of the substring.
      //When getting here:
        //1) we count the length not including this last section
        //1.5) if this is more than the longest, then we update longest
        //2) we update the character hashMap entry with the new index
        //3) we remove all characters from hashMap with indices lower than the one we removed above
      /* console.log('-------');
      console.log('i, str[i]', i, str[i]);
      console.log('hashMap', hashMap); */
      if (current > longest) {
        longest = current;
      }
      current = current - str[i];
      hashMap[str[i]] = i;
      for (const key in hashMap) { //This is slow, is there a faster way?
        if (hashMap[key] < i) {
          delete hashMap[key];
        }
      }
    }
    current++;
  }
  console.log(longest);
  return longest;
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
