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

  remove(key, node = this.node) {
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
      return this.remove(key, node.left);
    } else if (node.left && !node.right.left) {
      return this.remove(key, node.right);
    } else if (node.right && !node.right.right) {
      return this.remove(key, node.right);
    } else {
      return this.remove(key, node.left);
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

(function useTreeUBB(c) {
  const papa = new Node(56);

  const child1 = new Node(76);
  const child2 = new Node(3);
  const child3 = new Node(25);
  const child4 = new Node(20);
  const child5 = new Node(10);
  const child6 = new Node(18);
  const child7 = new Node(9);
  const child8 = new Node(100);
  const child9 = new Node(43);

  const tree = new TreeUBB(papa);

  c('insert - 76');
  tree.insert(child1);

  c('insert - 3');
  tree.insert(child2);

  c('insert - 25');
  tree.insert(child3);

  c('insert - 20');
  tree.insert(child4);

  c('insert - 10');
  tree.insert(child5);

  c('insert - 18');
  tree.insert(child6);

  c('insert - 9');
  tree.insert(child7);

  c('insert - 100');
  tree.insert(child8);

  c('insert - 43');
  tree.insert(child9);

  c('BTF');
  c(tree.bft());

  c('preOrden');
  tree.preOrder();

  c('remove - 2');
  tree.remove(2);

  c('print tree');
  c(tree);
})(console.log);
