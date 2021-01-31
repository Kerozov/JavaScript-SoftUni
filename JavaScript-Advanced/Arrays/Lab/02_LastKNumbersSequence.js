function sum(n, k){
let arr = [1];
for (let i = 1; i < n; i++) {
    let startIndex = Math.max(0, i-k);
    let currElement = arr.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
    arr.push(currElement);
}
console.log(arr);
}

sum(6, 3);