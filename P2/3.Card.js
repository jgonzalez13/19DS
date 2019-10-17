// ! Cards: 0 = clubs, 1= diamonds, 2 = hearts, and 3 = spades(pica)
class Card {
  constructor() {}

  printCard(n) {
    return [Math.floor(n % 13), Math.floor(n / 13)];
  }

  printNumber(k, n) {
    return k + n * 13;
  }
}

(function useCard(c) {
  c("|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|");
  c("|                                 |");
  c("|---------- TEST - Card ----------|");
  c("|                                 |");
  c("|_________________________________|\n");

  const card = new Card();

  c(card.printCard(36));
  c(card.printNumber(10, 2));
})(console.log);
