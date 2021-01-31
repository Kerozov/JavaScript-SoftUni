function smallestTwoNumber(array){
    array.sort(function(a, b){return a- b});
   const numbers = array.slice(0, 2);
console.log(numbers);
}

smallestTwoNumber([30, 15, 50, 5]);