/**
 * @param {string} s
 * @return {string}
 */

//Faster approach with singly-linked list
//In progress
var removeDuplicates = function(s) {
  s = s.split('');
  let prev = null;
  let radius = 1;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === prev) {
          //need to figure out
          let j = i - 1;
          while(j>=0 && s[i]===s[j]) {
              i++;
              j--;
              radius++;
          }
          s.splice(j, radius*2);
          i-= radius;
      }
  }
  s.join('');
  console.log(s);
  return s;
};

/**
 * @param {string} s
 * @return {string}
 */

//Faster approach with singly-linked list
//In progress
var removeDuplicates = function(s) {
  s = s.split('');
  let prev = null;
  let radius = 1;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === prev) {
          //need to figure out
          let j = i - 1;
          if (j >= 0 && i <= s.length) {
              while(s[i] === s[j]) {
                  radius++;
                  i++;
                  j--;
              }
          }
          s.splice(j, radius*2);
          radius = 1;
          console.log('s, s[i], s[j]', s, s[i], s[j]);
          break;
      }
      prev = s[i];
  }
  s = s.join('');
  console.log(s);
  return s;
};


//Naive brute-force approach first
var removeDuplicatesNaive = function(s) {
  s = s.split('');
  let noAlterations = false;
  while (!noAlterations) {
      noAlterations = true;
      let prev = null;
      for (let i = 0; i < s.length; i++) {
          if (s[i] === prev) {
              s.splice(i-1, 2);
              i-=2;
              noAlterations = false;
          }
          prev = s[i];
      }
  }
  s = s.join('');
  return s;
};


//Naive brute-force approach first
var removeDuplicatesNaive = function(s) {
  s = s.split('');
  let noAlterations = false;
  while (!noAlterations) {
      noAlterations = true;
      let prev = null;
      for (let i = 0; i < s.length; i++) {
          if (s[i] === prev) {
              s.splice(i-1, 2);
              i-=2;
              noAlterations = false;
          }
          prev = s[i];
      }
  }
  s = s.join('');
  return s;
};