let numbers = [1,2,3,4,5]
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  
  console.log(sum);