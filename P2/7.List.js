class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor(node) {
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  insertHead(node) {
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insertTail(node) {
    this.tail.next = node;
    this.tail = this.tail.next;
    this.length++;
  }

  deleteHead() {
    this.head = this.head.next;
    this.length--;
  }

  deleteTail() {
    let temp = this.head;
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
    let tempString = '';
    let tempNode = this.head;
    for (let i = 1; i <= this.length; i++) {
      tempString += tempNode.data + ' ';
      tempNode = tempNode.next;
    }
    return tempString;
  }
}

(function useList(c) {
  c('|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|');
  c('|                                 |');
  c('|---------- TEST - List ----------|');
  c('|                                 |');
  c('|_________________________________|\n');

  c('\n//---------- List ----------//\n');

  let node0 = new Node('node0');
  let node1 = new Node('node1');
  let node2 = new Node('node2');
  let node3 = new Node('node3');

  let list = new List(node1);
  c('----- toString() -----');
  c(list.toString());

  c('----- insertHead(node0) -----');
  list.insertHead(node0);

  c('----- insertTail(node2) -----');
  list.insertTail(node2);

  c('\n----- toString() -----\n');
  c(list.toString());

  c('\n----- deleteHead() -----');
  list.deleteHead();

  c('----- deleteTail() -----');
  list.deleteTail();

  c('\n----- toString() -----\n');
  c(list.toString());
})(console.log);
