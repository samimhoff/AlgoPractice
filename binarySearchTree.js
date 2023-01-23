class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(val){
    let dog = new Node(val);
    let node = this.root;
    if(this.root === null){
          this.root = dog;
          return this;
      }
    while (true) {
      if (val === node.value) return null;
      if (val > node.value) {
        if (node.right === null) {
          node.right = dog;
          return this;
        } else {
          node = node.right;
        }
      } else {
        if (node.left === null) {
          node.left = dog;
          return this;
        } else {
          node = node.left;
        }
      }
    }
  }
  BFS(val) {
    if (this.root === null) return null;
    let stack = [this.root];
    let index = 0;
    while (stack.length > index) {
      let item = stack[index];
      if (val === item.value) return true;
      if (val > item.value) {
      ...
      }
    }
  }
  DFS(val) {
    if (this.root === null) return null;
    let stack = [this.root];
    while (stack.length) {

    }
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree);