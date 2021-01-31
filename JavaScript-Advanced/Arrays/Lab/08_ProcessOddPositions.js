function oddPosition(array){
    const oddArray = []
array.forEach(function(element, index) {
    if(index % 2 == 1){
        oddArray.push(Number(element) * 2);
    }
});
console.log(oddArray.reverse().join(' '));
}

oddPosition([10, 15, 20, 25]);