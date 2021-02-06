function sort(array) {
  const smallest = array
    .sort(function (a, b) {
      return a - b;
    })
    .slice(0, Math.ceil(array.length / 2));
  const biggest = array
    .sort(function (a, b) {
      return a - b;
    })
    .slice(Math.ceil(array.length / 2), array.length)
    .reverse();
  const res = [];
  for (let i = 0; i < Math.ceil(array.length / 2); i++) {
      if (smallest.length > i) {
          const smallElement = smallest[i];
          res.push(smallElement);
      }
      if (biggest.length > i) {
          const biggestElement = biggest[i];
          res.push(biggestElement);
      }
  }
  return res;
}

sort([0, 2]);
