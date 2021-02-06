function print(array, n) {
  const arr = [];
  for (let i = 0; i < array.length; i += n) {
    arr.push(array[i]);
  }
  return arr;
}

console.log(print(["1", "2", "3", "4", "5"], 6));
