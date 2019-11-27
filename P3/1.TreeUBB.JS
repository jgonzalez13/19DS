/*
  ubbTree Class//unsorted, binary, balanced
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeUBB {
  constructor(node) {
    this.node = node;
  }

  insert(n, node = this.node) {
    if (!node.left) {
      node.left = n;
      return node;
    } else if (!node.right) {
      node.right = n;
      return node;
    } else if (node.right && !node.left.right) {
      return this.insert(n, node.left);
    } else if (node.left && !node.right.left) {
      return this.insert(n, node.right);
    } else if (node.right && !node.right.right) {
      return this.insert(n, node.right);
    } else {
      return this.insert(n, node.left);
    }
  }

  removeNode(key, node = this.node) {
    if (node == null) {
      return null;
    }
    if (node.left.data === key) {
      node.left = null;
      return node;
    } else if (node.right.data === key) {
      node.right = null;
      return node;
    } else if (node.right && !node.left.right) {
      return this.removeNode(key, node.left);
    } else if (node.left && !node.right.left) {
      return this.removeNode(key, node.right);
    } else if (node.right && !node.right.right) {
      return this.removeNode(key, node.right);
    } else {
      return this.removeNode(key, node.left);
    }
  }

  bft(node = this.node) {
    let queue = [];
    let print = [];

    queue.push(node);

    while (queue.length) {
      let nodeTemp = queue.shift();

      print.push(nodeTemp.data);

      if (nodeTemp.left) {
        queue.push(nodeTemp.left);
      }

      if (nodeTemp.right) {
        queue.push(nodeTemp.right);
      }
    }

    return print;
  }

  preOrder(node = this.node) {
    console.log(node.data);

    if (node.left) {
      this.preOrder(node.left);
    }

    if (node.right) {
      this.preOrder(node.right);
    }
  }
}

const papa = new Node(1);

const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const child4 = new Node(5);
const child5 = new Node(6);
const child6 = new Node(7);
const child7 = new Node(8);
const child8 = new Node(9);
const child9 = new Node(10);

const tree = new TreeUBB(papa);

tree.insert(child1);

tree.insert(child2);

tree.insert(child3);

tree.insert(child4);

tree.insert(child5);

tree.insert(child6);

tree.insert(child7);

tree.insert(child8);

tree.insert(child9);

console.log('BTF');
console.log(tree.bft());

console.log('preOrden');
tree.preOrder();

tree.removeNode(2);

console.log('preOrden');
tree.preOrder();

tree;
