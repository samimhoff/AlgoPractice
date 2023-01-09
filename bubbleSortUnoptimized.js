//let's try to do this optimized with stack.
function bubbleSortUnoptimized(arr) {
  let sorted = true;
  while (sorted) {
    sorted = false;
    let item = arr.shift();
    for (let i = 1; i < arr.length; i++) {
      if (item > arr[i]) {
        sorted = true;
        let newItem = arr[i];
        arr[i-1] = newItem;
        arr[i] = item;
      } else {
        //move to the next set;
        item = arr[i];
      }
    }
    return arr;
  }
  return arr;
}

let arr1 = [5,0,1,5,10,238, 24929, 11, 12, 72];
let arr2 = [5,2,4,9,6,8,0,1,6,532,4];

//Attempt at solution with stacks:
function bubbleSortStack(arr) {
  let head = makeStack(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let new = makeStack(arr[i]);
    current.next = new;
    current = new;
  }
  let sort = true;
  let current2 = head;
  while (sort) {
    sort = false;
    if (!current2.next) {
      if (sort === false ) {
        while ()
        //form back into array and return that.
      }
    }
  }
}

function makeStack (sheet) {
  this.val = sheet || null;
  this.next = null;
}


