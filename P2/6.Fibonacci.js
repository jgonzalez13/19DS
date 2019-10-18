class Fibonacci {
  constructor(n) {
    this.number = n;
    this.count = 0;
    this.values = [];
    this.costs = [];
  }

  value(n = this.number) {
    this.values[this.count] = n;
    this.count += 1;
    this.costs[this.count] = this.count;
    if (n < 2) {
      return n;
    }
    return this.value(n - 1) + this.value(n - 2);
  }

  cost() {
    return this.count;
  }

  succession() {
    return this.values;
  }

  table() {
    return this.costs;
  }
}

(function useFibonacci(c) {
  c("|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|");
  c("|                                      |");
  c("|---------- TEST - Fibonacci ----------|");
  c("|                                      |");
  c("|______________________________________|\n");

  c("\n//---------- Fibonacci - 5 ----------//\n");
  const fibonacci = new Fibonacci(5);

  c("----- value() -----");
  c(fibonacci.value());

  c("----- cost() -----");
  c(fibonacci.cost());

  c("----- succession() -----");
  c(fibonacci.succession());

  c("----- table() -----");
  c(fibonacci.table());
})(console.log);
