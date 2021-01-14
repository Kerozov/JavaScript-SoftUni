function length(firstWord, secondWord, thirtWord){
    let sum = firstWord.length + secondWord.length + thirtWord.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}

length('chocolate', 'ice cream', 'cake');