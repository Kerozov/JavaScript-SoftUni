function magicMatrix(matrix) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = matrix[0].reduce(reducer);
  for (let row = 0; row < matrix.length; row++) {
    const currSum = matrix[row].reduce(reducer);
    if (currSum !== sum) {
      return false;
    }
  }

  const colSums = []
  for (let i = 0; i < matrix.length; i++) {
      let newRow = [];
      for (let y = 0; y < matrix.length; y++) {
          newRow.push(matrix[y][i]);
      }
      const sum = newRow.reduce(reducer);
     colSums.push(sum)
  }

const isFalse = colSums.every((el, i, arr) => el === arr[0]);
    if(!isFalse){
return false;
    }

  return true;
}

console.log(magicMatrix([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));
