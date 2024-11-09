function wave(str) {
  const result = [];
  if (str.length < 1) {
    return [];
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }

    result.push(
      str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
    );
  }
  return result;
}

console.log("wave('hello'): ", wave("hello"));
console.log("wave(''): ", wave(""));
console.log("wave('two words'): ", wave("two words"));
console.log("wave(' gap '): ", wave(" gap "));
