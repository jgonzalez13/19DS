class Factorial {
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

    if (n === 0) {
      return 1;
    }
    return n * this.value(n - 1);
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

(function useFactorial(c) {
  c("|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|");
  c("|                                      |");
  c("|---------- TEST - Factorial ----------|");
  c("|                                      |");
  c("|______________________________________|\n");

  c("\n//---------- Factorial - 5 ----------//\n");
  const factorial = new Factorial(5);

  c("----- value() -----");
  c(factorial.value());

  c("----- cost() -----");
  c(factorial.cost());

  c("----- succession() -----");
  c(factorial.succession());

  c("----- table() -----");
  c(factorial.table());
})(console.log);
