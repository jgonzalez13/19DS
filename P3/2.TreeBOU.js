/*
  uobTree Class//unbalanced, ordered, binary
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeBOU {
  constructor(node) {
    this.node = node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  insert(n, node = this.node) {
    if (n.data < node.data && node.left === null) {
      node.left = n;
      return;
    } else if (n.data > node.data && node.right === null) {
      node.right = n;
      return;
    } else if (n.data < node.data && node.left) {
      this.insert(n, node.left);
    } else if (n.data > node.data && node.right) {
      this.insert(n, node.right);
    }

    return;
  }

  removeNode(key, node = this.node) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(key, node.left);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(key, node.right);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(aux.data, node.right);
      return node;
    }
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
const papa = new Node(5);

const child1 = new Node(2);
const child2 = new Node(10);
const child3 = new Node(7);

const tree = new TreeBOU(papa);

tree.insert(child1);

tree.insert(child2);

tree.insert(child3);

tree.preOrder();

tree.removeNode(2);

console.log(tree);
