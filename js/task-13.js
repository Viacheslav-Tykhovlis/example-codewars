function fibonacci(max) {
  let result = 0;
  let k = 0;
  let j = 1;

  for (let i = 0; i < max; i = k) {
    if (i % 2 === 0) {
      result = result + i;
    }
    k = j;
    j = j + i;
  }
  return result;
}

console.log("fibonacci(2147483647): ", fibonacci(2147483647));
console.log("fibonacci(1000000000): ", fibonacci(1000000000));
console.log("fibonacci(100000000): ", fibonacci(100000000));
console.log("fibonacci(1): ", fibonacci(1));
console.log("fibonacci(5): ", fibonacci(5));
console.log("fibonacci(8): ", fibonacci(8));
console.log("fibonacci(10): ", fibonacci(10));
