class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor(node) {
    this.head = new Node(null);
    this.head.next = node;
    this.tail = new Node(null);
    this.tail.next = node;
    this.length = 1;
  }

  insertHead(node) {
    node.next = this.head.next;
    this.head.next = node;
    this.length++;
  }

  insertTail(node) {
    this.tail.next.next = node;
    this.tail.next = node;
    this.length++;
  }

  deleteHead() {
    this.head.next = this.head.next.next;
    this.length--;
  }

  deleteTail() {
    let temp = this.head.next;
    for (let i = 1; i < this.length - 1; i++) {
      temp = temp.next;
    }
    temp.next = null;
    this.tail.next = temp;
    this.length--;
  }

  size() {
    return this.length;
  }

  toString() {
    let tempString = "";
    let tempNode = this.head.next;
    for (let i = 1; i <= this.length; i++) {
      tempString += tempNode.data + " ";
      tempNode = tempNode.next;
    }
    return tempString;
  }
}

let node0 = new Node("node0");
let node1 = new Node("node1");
let node2 = new Node("node2");
let node3 = new Node("node3");

let list = new List(node1);
console.log(list.toString());

list.insertHead(node0);
list.insertTail(node2);
console.log(list.toString());

list.deleteHead();
list.deleteTail();
console.log(list.toString());
