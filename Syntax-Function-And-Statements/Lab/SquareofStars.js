function squarePrint(num){
    if (num <= 0) {
        return
    }
    let starLength = '';
for (let index = 0; index < num; index++) {
    starLength += ' *'
}
for (let index = 0; index < num; index++) {
    console.log(starLength);
}
}

squarePrint(0);