class Graph {
  constructor(n) {
    this.rows = n;
    this.columns = n;
    this.data = this.init();
  }

  init() {
    let init = [];

    for (let i = 0; i < this.rows; i++) {
      init[i] = new Array(this.rows);

      for (let j = 0; j < this.columns; j++) {
        init[i][j] = 0;
      }
    }
    return init;
  }

  printGraph() {
    return this.data;
  }

  addVertex() {
    this.rows++;
    this.columns++;
    this.data.length++;

    for (let i = 0; i < this.data.length - 1; i++) {
      this.data[i].length++;
    }
    for (let i = this.data.length - 1; i < this.data.length; i++) {
      this.data[i] = new Array(this.data.length - 1);

      for (let j = 0; j < this.data.length; j++) {
        this.data[i][j] = 0;
        this.data[j][i] = 0;
      }
    }
  }

  addEdege(v1, v2, boolean) {
    this.data[v1][v2]++;
    if (boolean == true) {
      this.data[v2][v1]++;
    }
  }

  isComplete() {
    let temp = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[i][i] != 0) {
          return false;
        } else if (this.data[i][j] == 1) {
          temp++;
        }
      }
    }
    if (temp == this.data.length * this.data.length - this.data.length) {
      return true;
    } else {
      return false;
    }
  }

  isMultigraph() {
    let temp = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[i][i] != 0 || this.data[i][j] > 1) {
          temp++;
        }
      }
    }
    if (temp != 0) {
      return true;
    } else {
      return false;
    }
  }

  isSubgraph(g) {
    if (this.rows > g.rows || this.columns > g.rows) {
      return false;
    }
    let temp = 0;
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data.length; j++) {
        if (this.data[i][j] <= g.data[i][j]) {
          temp++;
        }
      }
    }
    if (temp == this.data.length * this.data.length) {
      return true;
    } else {
      return false;
    }
  }

  isDirected() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.data[i][j] != this.data[j][i]) {
          return false;
        }
      }
    }

    return true;
  }

  isIsomorphic(graph) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.data[i][j] != graph.data[i][j]) {
          return false;
        }
      }
    }

    return true;
  }
}
graph2 = new Graph(2);
graph3 = new Graph(3);
graph4 = new Graph(4);

graph2.addEdege(0, 1, true);

graph3.addEdege(2, 0, true);
graph3.addEdege(1, 0, true);
graph3.addEdege(2, 1, true);

graph4.addEdege(1, 0, true);
graph4.addEdege(0, 0);
console.log(' Create Graph');
graph1 = new Graph(5);
console.log(graph1.printGraph());
console.log(' ');

console.log('addVertex');
graph1.addVertex();
console.log(graph1.printGraph());
console.log(' ');

console.log('addEdges');
graph1.addEdege(1, 0, true);
graph1.addEdege(2, 0, true);
console.log(graph1.printGraph());
console.log(' ');

console.log('isComplete (Boolean-False)');
console.log(graph1.printGraph());
console.log(graph1.isComplete());
console.log(' ');

console.log('isComplete (Boolean-True)');
console.log(graph3.printGraph());
console.log(graph3.isComplete());
console.log(' ');

console.log('isMultigraph (Boolean-False)');
console.log(graph1.printGraph());
console.log(graph1.isMultigraph());
console.log(' ');

console.log('isMultigraph (Boolean-True)');
console.log(graph4.printGraph());
console.log(graph4.isMultigraph());
console.log(' ');

console.log('isSubgraph (Boolean-false)');
console.log('graph 1');
console.log(graph1.printGraph());
console.log('graph 2');
console.log(graph2.printGraph());
console.log(graph1.isSubgraph(graph2));
console.log(' ');

console.log('isSubgraph (Boolean-True)');
console.log('graph 2');
console.log(graph2.printGraph());
console.log('graph 1');
console.log(graph1.printGraph());
console.log(graph2.isSubgraph(graph1));
