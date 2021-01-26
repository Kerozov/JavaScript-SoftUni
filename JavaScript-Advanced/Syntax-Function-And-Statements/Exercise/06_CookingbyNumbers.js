function cooking(num, ...params){
let number = Number(num);

for (let i = 0; i < params.length; i++) {
    const func = params[i];
     
    if (func == 'chop') {
    number /= 2;
    }
   else  if (func == 'dice') {
        number = Math.sqrt(number);
     }
    else  if (func == 'spice') {
        number++;
     }
     else  if (func == 'bake') {
        number *=3;
     }
     else  if (func == 'fillet') {
        number *= 0.8;
     }
     console.log(number);
     
}
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);