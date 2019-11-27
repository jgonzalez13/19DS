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

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  insert(n, node = this.node) {
    if (!node.left) {
      node.left = n;
    } else if (!node.right) {
      node.right = n;
    } else if (node.right && !node.left.right) {
      this.insert(n, node.left);
    } else if (node.left && !node.right.left) {
      this.insert(n, node.right);
    } else if (node.right && !node.right.right) {
      this.insert(n, node.right);
    } else {
      this.insert(n, node.left);
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

tree.removeNode(2);

console.log('preOrden');
tree.preOrder();

tree;
