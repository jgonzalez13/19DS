class Factorial {
  constructor(n) {
    this.number = n;
    this.count = 0;
    this.values = [];
    this.costs = [];
  }

  value(n = this.number) {
    this.count += 1;
    if (n === 0) {
      return 1;
    }
    return n * this.value(n - 1);
  }

  cost(n = this.number) {
    this.count = 0;
    this.value(n);

    return this.count;
  }

  succession() {
    for (let i = 1; i <= this.number; i++) {
      this.values.push(this.value(i));
    }
    return this.values;
  }

  table() {
    for (let i = 1; i <= this.number; i++) {
      this.costs.push(this.cost(i));
    }
    return this.costs;
  }
}

(function useFactorial(c) {
  c('|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|');
  c('|                                      |');
  c('|---------- TEST - Factorial ----------|');
  c('|                                      |');
  c('|______________________________________|\n');

  c('\n//---------- Factorial - 5 ----------//\n');
  const factorial = new Factorial(5);

  c('----- value() -----');
  c(factorial.value());

  c('----- cost() -----');
  c(factorial.cost());

  c('----- succession() -----');
  c(factorial.succession());

  c('----- table() -----');
  c(factorial.table());
})(console.log);
