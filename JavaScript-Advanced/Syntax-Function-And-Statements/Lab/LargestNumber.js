function getLagestNumber(firstNum, secondNum, thirtNum){
    let largestNum;

    if(firstNum > secondNum && firstNum > thirtNum){
        largestNum = firstNum;
    }
    else if(secondNum > firstNum && secondNum > thirtNum){
        largestNum = secondNum;
    }
    else{
        largestNum = thirtNum;
    }
    console.log(`The largest number is ${largestNum}.`)
}

getLagestNumber(5, -3, 16);