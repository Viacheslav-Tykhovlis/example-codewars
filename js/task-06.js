function isTriangle(a, b, c) {
  const maxCount = Math.max(a, b, c);
  switch (maxCount) {
    case a:
      if (b + c > maxCount) {
        return true;
      } else {
        return false;
      }
    case b:
      if (a + c > maxCount) {
        return true;
      } else {
        return false;
      }
    case c:
      if (a + b > maxCount) {
        return true;
      } else {
        return false;
      }
  }
  return false;
}

console.log("isTriangle(1,2,2) ", isTriangle(1, 2, 2));
console.log("isTriangle(4,2,3) ", isTriangle(4, 2, 3));
console.log("isTriangle(2,2,2) ", isTriangle(2, 2, 2));
console.log("isTriangle(1,2,3) ", isTriangle(1, 2, 3));
console.log("isTriangle(-5,1,3) ", isTriangle(-5, 1, 3));
console.log("isTriangle(0,2,3) ", isTriangle(0, 2, 3));
console.log("isTriangle(1,2,9) ", isTriangle(1, 2, 9));
console.log("isTriangle(7,2,2) ", isTriangle(7, 2, 2));
