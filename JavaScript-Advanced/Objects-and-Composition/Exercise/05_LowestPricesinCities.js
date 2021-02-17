function solve(array) {
  const bestOffer = [];
  while (array.length) {
    let row = array.shift();
    let [town, product, price] = row.split(" | ");
    const currIndex = bestOffer.findIndex((el) => el.product == product);

    if (currIndex == -1) {
      let obj = {
        town,
        product,
        price,
      };

      bestOffer.push(obj);
    } else if (Number(bestOffer[currIndex].price) > price) {
      let obj = {
        town,
        product,
        price,
      };
      bestOffer[currIndex] = obj;
    }
   
  }

  bestOffer.forEach((element) => {
    console.log(`${element.product} -> ${element.price} (${element.town})`);
  });
}

solve([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "New York City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Mexico City | Audi | 100000",
  "Washington City | Mercedes | 1000",
]);
