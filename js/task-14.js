function isIsogram(str) {
  if (str == "") {
    return true;
  }

  const normalaseStr = str.toLowerCase();
  for (let i = 0; i < normalaseStr.length; i++) {
    if (normalaseStr.indexOf(normalaseStr[i]) === i) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log("isIsogram(Dermatoglyphics): ", isIsogram("Dermatoglyphics"));
console.log("isIsogram(isogram): ", isIsogram("isogram"));
console.log("isIsogram(moOse): ", isIsogram("moOse"));
console.log("isIsogram(isIsogram): ", isIsogram("isIsogram"));
console.log("isIsogram(''): ", isIsogram(""));
