function evenPosition(arr){
 const filterArray = arr.filter((value, index) => index % 2 == 0);  
 console.log(filterArray.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);