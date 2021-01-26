function calorieObject(params){
    const calorie = {};
for (let i = 0; i < params.length; i+= 2) {
    const propName = params[i];
    const value = Number(params[i + 1]);
    calorie[propName] = value;
}
console.log(calorie)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);