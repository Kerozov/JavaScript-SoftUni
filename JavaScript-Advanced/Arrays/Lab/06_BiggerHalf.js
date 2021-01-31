function biggerHalf(array) {
  array.sort(function (a, b) {
    return a - b;
  }).reverse()
  ;
  let numbers = array.slice(0, array.length /2 + 1);
  numbers.sort(function (a, b) {
    return a - b;
  })
  console.log(numbers);
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);
