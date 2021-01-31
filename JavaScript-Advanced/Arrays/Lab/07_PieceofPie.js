function pieceOfPie(array, firstArg, secondArg){
const firstIndex = array.indexOf(firstArg);
const secondIndex = array.indexOf(secondArg);
const flavours = array.slice(firstIndex, secondIndex + 1);
console.log(flavours);
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)