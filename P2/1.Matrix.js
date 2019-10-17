class Matrix {
  constructor(row, columns) {
    this.row = row;
    this.columns = columns;
    this.data = this.init();
  }

  init() {
    const temp = [];

    for (let i = 0; i < this.row; i++) {
      temp[i] = new Array(this.columns);

      for (let j = 0; j < this.columns; j++) {
        temp[i][j] = 0;
      }
    }

    return temp;
  }

  initRandom() {
    for (let i = 0; i < this.row; i++) {
      this.data[i] = new Array(this.columns);

      for (let j = 0; j < this.columns; j++) {
        this.data[i][j] = Math.random();
      }
    }

    return this.data;
  }

  getRow(r) {
    if (r > this.row) {
      return console.log("//ERROR: Fila fuera del rango de la Matrix");
    }

    return this.data[r];
  }

  getColumn(c) {
    const temp = [];

    if (c > this.columns) {
      return console.log("//ERROR: Fila fuera del rango de la Matrix");
    }

    for (let i = 0; i < this.row; i++) {
      temp.push(this.data[i][c]);
    }

    return temp;
  }

  isSquared() {
    if (this.columns === this.row) {
      return true;
    }

    return false;
  }

  isSymmetric() {
    this.isSquared();

    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.data[i][j] != this.data[j][i]) {
          return false;
        }
      }
    }

    return true;
  }

  isIdentity() {
    this.isSymmetric();

    for (let i = 0; i < this.row; i++) {
      if (this.data[i][i] !== 1) {
        return false;
      }
    }

    return true;
  }

  getMatrix() {
    return this.data;
  }
}

(c => {
  c("|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|");
  c("|                                   |");
  c("|---------- TEST - Matrix ----------|");
  c("|                                   |");
  c("|___________________________________|\n");

  // !  Test - Matrix ( Randow )

  const matrix = new Matrix(4, 3);
  c("\n//---------- Matrix Randow ----------//\n");
  c(matrix.getMatrix());

  c("----- initRandow() -----");
  c(matrix.initRandom());

  c("----- getRow(2) -----");
  c(matrix.getRow(2));

  c("----- getColumn(2) -----");
  c(matrix.getColumn(2));

  c("----- isSquared() -----");
  c(matrix.isSquared());

  c("----- isSymmetric() -----");
  c(matrix.isSymmetric());

  c("----- isIdentity() -----");
  c(matrix.isIdentity());

  // ! Test - Matrix ( Identity )

  const matrixI = new Matrix(3, 3);

  for (let i = 0; i < matrixI.row; i++) {
    matrixI.data[i][i] = 1;
  }

  c("\n//---------- Matrix Identity ----------//\n");
  c(matrixI.getMatrix());

  c("----- isSquared() -----");
  c(matrixI.isSquared());

  c("----- isSymmetric() -----");
  c(matrixI.isSymmetric());

  c("----- isIdentity() -----");
  c(matrixI.isIdentity());
})(console.log);
