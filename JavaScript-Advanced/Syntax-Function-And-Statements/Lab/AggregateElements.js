function aggregateElements(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });

  console.log(sum);
  sum = 0.0;
  array.forEach((element) => {
    sum = 1 / element + sum;
  });

  console.log(sum);
  console.log(array.join(""));
}

aggregateElements([1, 2, 3]);