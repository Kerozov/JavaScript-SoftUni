function listOfName(names) {
 let result = names.sort((a, b) => a.localeCompare(b)).map((name, index) =>{
     return `${index + 1}.${name}`
 });
  result.forEach(function (element, index) {
    console.log(element);
  });
}

listOfName(["John", "Bob", "Christina", "Ema"]);
