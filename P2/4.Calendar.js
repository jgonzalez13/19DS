class Calendar {
  constructor() {}

  printCalendar(m, y) {}

  isLeapYear(y) {
    if (y % 4 == 0 && (y % 100 != 0 || y % 400 == 0)) {
      return true;
    }

    return false;
  }

  todayPlus(d, n) {
    return (d + n) % 7;
  }

  firstDayYear(y) {
    return (
      (y +
        Math.floor((y - 1) / 4) -
        Math.floor((y - 1) / 100) +
        Math.floor((y - 1) / 400)) %
      7
    );
  }
}

(function useCalendar(c) {
  c("|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|");
  c("|                                     |");
  c("|---------- TEST - Calendar ----------|");
  c("|                                     |");
  c("|_____________________________________|\n");

  const calendar = new Calendar();

  c("----- isLeapYear(2020) -----");
  c(calendar.isLeapYear(2020));

  c("----- isLeapYear(2018) -----");
  c(calendar.isLeapYear(2018));

  c("----- todayPlus(2, 9) -----");
  c(calendar.todayPlus(2, 9));

  c("----- firstDayYear(2019) -----");
  c(calendar.firstDayYear(2019));
})(console.log);
