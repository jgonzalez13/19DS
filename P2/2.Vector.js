class Vector {
  constructor(data) {
    this.data = data;
  }

  sum(vector) {
    if (this.data.length !== vector.length) {
      return console.log('//ERROR: No se pueden SUMAR los vectores');
    }

    return this.data.map((item, i) => item + vector[i]);
  }

  subt(vector) {
    if (this.data.length !== vector.length) {
      return console.log('//ERROR: No se pueden RESTAR los vectores');
    }

    return this.data.map((item, i) => item - vector[i]);
  }

  mul(vector) {
    if (this.data.length !== vector.length) {
      return console.log('//ERROR: No se pueden MULTIPLICAR los vectores');
    }

    return this.data.map((item, i) => item * vector[i]);
  }

  getVector() {
    return this.data;
  }
}

(function useVector(c) {
  const a = [1, 2, 3, 4, 5, 6];

  const b = [6, 5, 4, 3, 2, 1];

  c('|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|');
  c('|                                   |');
  c('|---------- TEST - Vector ----------|');
  c('|                                   |');
  c('|___________________________________|\n');

  const vector = new Vector(a);

  c('----- sum(b) -----');
  c(vector.sum(b));

  c('----- subt(b) -----');
  c(vector.subt(b));

  c('----- mul(b) -----');
  c(vector.mul(b));

  c('----- getVector() -----');
  c(vector.getVector());
})(console.log);
