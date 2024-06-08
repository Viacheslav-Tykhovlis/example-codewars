function squares(x, n) {
  const result = [];

  if (n <= 0) {
    return result;
  }

  result.push(x);
  for (let i = 0; i < n - 1; i++) {
    const addNum = Math.pow(result[i], 2);
    result.push(addNum);
  }

  return result;
}

console.log("squares(2,5): ", squares(2, 5));
console.log("squares(3,3): ", squares(3, 3));
console.log("squares(5,3): ", squares(5, 3));
console.log("squares(10,4): ", squares(10, 4));
