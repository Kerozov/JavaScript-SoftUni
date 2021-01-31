function biggestElement(matrix){
const arr = matrix.flat();
arr.sort(function(a, b) {return a -b});
const element = arr.pop();
console.log(element);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );