function AddNumber(number){
    return function(secondNum){
        return number + secondNum;
    }
}

let add5 = AddNumber(5);
console.log(add5(3));