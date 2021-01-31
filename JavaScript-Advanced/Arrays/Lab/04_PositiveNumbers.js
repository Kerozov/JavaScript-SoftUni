function order(arr){
    const positiveNumber = [];
    const negativeNumber = [];

arr.forEach(element => {
   if(element< 0){
    negativeNumber.push(element);
   }
   else{
       positiveNumber.push(element);
   }
});;
negativeNumber.reverse().forEach((el)=>{
    console.log(el);
});
positiveNumber.forEach(el => {
    console.log(el);
})
}

order([7, -2, 8, 9])