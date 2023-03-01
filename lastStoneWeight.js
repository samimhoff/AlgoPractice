/**
 * @param {number[]} stones
 * @return {number}
 */

var veryFastLastStoneWeight = function(stones) {
   stones.sort((a,b) => {
       return a - b;
   })
   function recurse(stones) {
       if (stones.length === 0) return 0;
       if (stones.length === 1) return stones[0];
       if (stones[stones.length-1] === stones[stones.length-2]) {
           stones.pop();
           stones.pop();
           return recurse(stones);
       } else {
           stones[stones.length-2] = stones[stones.length-1] - stones[stones.length-2];
           stones.pop();
           return lastStoneWeight(stones);
       }
   }
   return recurse(stones);
};


var slowerLastStoneWeight = function(stones) {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];
  let big1 = {
      val: stones[0],
      i: 0
  }
  let big2 = {
      val: stones[1],
      i: 1
  }
  if (stones[0] > stones[1]) {
      big1.val = stones[0];
      big1.i = 0;
      big2.val = stones[1];
      big2.i = 1;
  } else {
      big2.val = stones[0];
      big2.i = 0;
      big1.val = stones[1];
      big1.i = 1;
  }
  console.log('stones at beginning ----: ', stones);
  for (let i = 2; i < stones.length; i++) {
      if (stones[i] > big2.val && stones[i] <= big1.val) {
          big2.val = stones[i];
          big2.i = i;
      } else if (stones[i] > big1.val) {
          big2.val = big1.val;
          big2.i = big1.i;
          big1.val = stones[i];
          big1.i = i;
      }
      console.log('stones[i], big1, big2', stones[i], big1, big2);
  }
  if (big1.val === big2.val) {
      let firstIndex = Math.max(big1.i, big2.i);
      let secondIndex = Math.min(big2.i, big1.i);
      stones.splice(firstIndex, 1);
      console.log('first slice: ', stones);
      stones.splice(secondIndex, 1);
      return lastStoneWeight(stones);
  };
  stones[big1.i] = big1.val - big2.val;
  stones.splice(big2.i, 1);
  return lastStoneWeight(stones);
};