function buyFruit(product, grams, price){
    let kilogram = grams / 1000;
    price *= kilogram;

console.log(`I need $${price.toFixed(2)} to buy ${kilogram.toFixed(2)} kilograms ${product}.`);
}

buyFruit('orange', 2500, 1.80);