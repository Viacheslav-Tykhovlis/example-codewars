function isLeapYear(year) {
  if (year % 4 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("isLeapYear(2000): ", isLeapYear(2000));
console.log("isLeapYear(2020): ", isLeapYear(2020));
console.log("isLeapYear(2015): ", isLeapYear(2015));
console.log("isLeapYear(2100): ", isLeapYear(2100));
