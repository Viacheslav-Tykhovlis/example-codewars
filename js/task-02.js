function XO(str) {
  let lettX = 0;
  let lettO = 0;

  const strCase = str.toLowerCase();

  for (let i = 0; i < strCase.length; i++) {
    if (strCase[i] === "x") {
      lettX++;
    }
    if (strCase[i] === "o") {
      lettO++;
    }
  }

  if (lettX === lettO) {
    return true;
  }
  return false;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
