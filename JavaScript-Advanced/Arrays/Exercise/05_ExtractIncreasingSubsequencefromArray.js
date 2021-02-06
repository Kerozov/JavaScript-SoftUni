function biggest(array) {
  for (let i = 0; i < array.length; i++) {
      const element = array[i];
    if (element > array[i + 1]) {
    array.splice(i + 1,1);
    i--;
    }
  }
  return array
}

biggest([1, 3, 8, 4, 10, 12, 3, 2, 24]);
