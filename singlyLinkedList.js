class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
  }
  shift() { //remove 1st and return it
  	let prevHead = this.head;
    this.head = this.head.next;
    this.length--;
    return prevHead;
  }
  unshift(val) {
  	let newNode = Node(val);
  	let prevHead = this.head;
    this.head = newNode;
    this.head.next = prevHead;
    this.length++;
    return this;
  }
  get(index) {
  	if (index < 0 || index > this.length) return null;
    let item = this.head;
    while (index > 0) {
    	item = item.next;
      index--;
    }
    return item;
  }
  set(index, val) {
  	if (index < 0 || index > this.length) return null;
    let item = this.head;
    while (index > 0) {
    	item = item.next;
      index--;
    }
    item.val = val;
    return item;
  }
  //not done
  insert(index, val) {
  	if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index-1);
    let formerNext = prev.next;
    prev.next = newNode;
    newNode.next = formerNext;
    return this;
  }
  //not tested
  remove(index) {
  	if (index < 0 || index > this.length) return null;
    let item = this.head;
    while (index > 0) {
    	item = item.next;
      index--;
    }
    let prevNext = item.next;
    let nextNextItem = item.next.next;
    item.next = nextNextItem;
    return prevNext;
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list1 = new SinglyLinkedList();
console.log(list1);
list1.push(1);
list1.push(2);
list1.push(3);
console.log('dog');
list1.push(4);
list1.push(5);
list1.push(6);
list1.push(7);
console.log(list1);
console.log(list1.get(3));
console.log(list1.get(0));
console.log(list1.set(3,10));
console.log(list1.get(3));
console.log(list1.get(4));
console.log(list1.get(4));
console.log(list1.get(6));
console.log(list1.pop());
console.log(list1.get(6));
console.log(list1.get(5));
console.log(list1.shift());
console.log(list1.get(5));
console.log(list1.get(0));
console.log(list1.get(6));
console.log(list1.insert(2,30));
console.log(list1.get(2));
console.log(list1.get(6));













