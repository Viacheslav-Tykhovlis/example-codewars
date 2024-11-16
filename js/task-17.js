function gimme(triplet) {
  const max = triplet.findIndex(Math.max(triplet[0], triplet[1], triplet[2]));
  const min = triplet.findIndex(Math.min(triplet[0], triplet[1], triplet[2]));
}

console.log("gimme([2, 3, 1]): ", gimme([2, 3, 1]));
console.log("gimme([2.1, 3.2, 1.4]): ", gimme([2.1, 3.2, 1.4]));
console.log("gimme([-2, -3.2, 1]): ", gimme([-2, -3.2, 1]));
