/**            1
              1 1
             1 2 1
            1 3 3 1
           1 4 6 4 1
         1 5 10 10 5 1
        1 6 15 20 15 6 1
      1 7 21 35 35 21 7 1
     1 8 28 56 70 56 28 8 1

 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1,1];
  if (rowIndex === 2) return [1,2,1];
  let prev = [1,2,1];
  if (rowIndex > 2) {
      for (let i = 2; i < rowIndex; i++) {
          let current = [1];
          for (let j = 0; j < i; j++) {
              current.push(prev[j] + prev[j+1]);
          }
          current.push(1);
          console.log(current);
          prev = current;
      }
  return prev;
  }
};