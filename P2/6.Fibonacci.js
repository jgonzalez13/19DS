class Fibonacci {
  constructor(n) {
    this.number = n;
    this.count = 0;
    this.values = [];
    this.costs = [];
  }

  value(n = this.number) {
    this.count += 1;
    if (n < 2) {
      return n;
    }
    return this.value(n - 1) + this.value(n - 2);
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

(function useFibonacci(c) {
  c('|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|');
  c('|                                      |');
  c('|---------- TEST - Fibonacci ----------|');
  c('|                                      |');
  c('|______________________________________|\n');

  c('\n//---------- Fibonacci - 6 ----------//\n');
  const fibonacci = new Fibonacci(6);

  c('----- value() -----');
  c(fibonacci.value());

  c('----- cost() -----');
  c(fibonacci.cost());

  c('----- succession() -----');
  c(fibonacci.succession());

  c('----- table() -----');
  c(fibonacci.table());
})(console.log);
