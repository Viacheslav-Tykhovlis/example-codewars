function descendingOrder(n) {
  const num = n
    .toString()
    .split("")
    .map((elem) => +elem)
    .sort((a, b) => b - a)
    .join("");

  return Number.parseInt(num);
}

console.log("descendingOrder(42145): ", descendingOrder(42145));
console.log("descendingOrder(145263): ", descendingOrder(145263));
console.log("descendingOrder(1021): ", descendingOrder(1021));
console.log("descendingOrder(123456789): ", descendingOrder(123456789));
console.log("descendingOrder(0): ", descendingOrder(0));
