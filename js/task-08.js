const orderedCount = function (text) {
  const arr = text.split("");
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const ind = result.findIndex((elem) => elem[0] === arr[i]);
    if (ind === -1) {
      result.push([arr[i], 1]);
    } else {
      result[ind][1] = result[ind][1] + 1;
    }
  }

  return result;
};

console.log('orderedCount("abracadabra"): ', orderedCount("abracadabra"));
console.log('orderedCount("Code Wars"): ', orderedCount("Code Wars"));
console.log('orderedCount("233312"): ', orderedCount("233312"));
