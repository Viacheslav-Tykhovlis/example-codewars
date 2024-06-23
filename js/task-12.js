function tripleTrouble(one, two, three) {
  const result = [];
  for (let i = 0; i < one.length; i++) {
    result.push(one[i] + two[i] + three[i]);
  }
  return result.join("");
}

console.log(
  'tripleTrouble("aaa","bbb","ccc"): ',
  tripleTrouble("aaa", "bbb", "ccc")
);
console.log(
  'tripleTrouble("aaaaaa","bbbbbb","cccccc"): ',
  tripleTrouble("aaaaaa", "bbbbbb", "cccccc")
);
console.log(
  'tripleTrouble("burn", "reds", "roll"): ',
  tripleTrouble("burn", "reds", "roll")
);
console.log(
  'tripleTrouble("LLh","euo","xtr"): ',
  tripleTrouble("LLh", "euo", "xtr")
);
