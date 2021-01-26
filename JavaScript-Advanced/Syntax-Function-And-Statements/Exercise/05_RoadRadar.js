function radar(speed, area){
let overLimit;
let areaLimit;

 switch (area) {
     case 'motorway' :
         areaLimit = 130;
         overLimit = Number(speed) - areaLimit;
         break;
         case 'interstate' :
            areaLimit = 90;
            overLimit = Number(speed) - 90;
            break;
            case 'city' :
                areaLimit = 50;
            overLimit = Number(speed) - 50;
            break;
            case 'residential' :
                areaLimit = 20;
                overLimit = Number(speed) - 20;
                break
     default:
         break;
 }

 if (overLimit > 40) {
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${areaLimit} - reckless driving`);
 }
 else if (overLimit <= 40 && overLimit > 20) {
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${areaLimit} - excessive speeding`);
 }
 else if (overLimit <= 20 && overLimit > 0) {
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${areaLimit} - speeding`);
}
else{
    console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
}
}

radar([40, 'city'])
radar([21, 'residential'])
radar([120, 'interstate'])
radar([200, 'motorway'])
