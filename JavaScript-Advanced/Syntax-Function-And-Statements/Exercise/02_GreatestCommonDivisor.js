function solve(a, b){
const small = Math.min(a,b);
let gcs = 1;

for (let i = 0; i <= small; i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
}

console.log(gcd);
}

solve(15, 5)