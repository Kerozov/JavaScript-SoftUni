function checkNumber(num){
    let numAsString = num.toString();
    let same = numAsString[0];
    let sum = 0;
    let isSame = true;

for (let i = 0; i < numAsString.length; i++) {
   if (numAsString[i] != same) {
       isSame = false;
   }

sum += Number(numAsString[i]);
}

console.log(isSame);
console.log(sum)
}

checkNumber(2222222)