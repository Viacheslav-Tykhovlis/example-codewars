function getMiddle(s) {
  if (s.length % 2 === 0) {
    const middle1 = s[Math.ceil(s.length / 2)];
    const middle2 = s[Math.ceil(s.length / 2) - 1];
    return middle2 + middle1;
  } else if (s.length % 2 !== 0) {
    const middle = s[Math.ceil(s.length / 2) - 1];
    return middle;
  }
}

console.log('getMiddle("test"): ', getMiddle("test"));
console.log('getMiddle("testing"): ', getMiddle("testing"));
console.log('getMiddle("middle"): ', getMiddle("middle"));
console.log('getMiddle("A"): ', getMiddle("A"));
