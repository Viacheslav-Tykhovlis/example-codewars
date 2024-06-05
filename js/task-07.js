function hamming(a, b) {
  const aArr = a.split("");
  const bArr = b.split("");

  if (aArr.length === 0 || bArr.length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < aArr.length; i++) {
    if (aArr[i] !== bArr[i]) {
      result++;
    }
  }
  return result;
}

console.log(
  'hamming("I like turtles", "I like turkeys") ',
  hamming("I like turtles", "I like turkeys")
);
console.log(
  'hamming("Hello World", "Hello World") ',
  hamming("Hello World", "Hello World")
);
console.log(
  'hamming("espresso", "Expresso") ',
  hamming("espresso", "Expresso")
);
