class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);

    //First Case: root is null
    if(this.root === null) {
      this.root = newNode;
    }

    var curr = this.root;
    while(true) {
      if(newNode.value > curr.value) {
        if(!curr.right) {
          curr.right = newNode;
          return true;
        }
        curr = curr.right;
      } else if(newNode.value < curr.value) {
        if(!curr.left) {
          curr.left = newNode;
          return true;
        }
        curr = curr.left;
      } else {
        return false;
      }
    }
  }
  lookup(value){
    var curr = this.root;
    while(curr) {
      if(value === curr.value) {
        return true;
      }
      if(value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
  remove(value) {
    if(!lookup(value)) {
      return false;
    }
    
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(12));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





