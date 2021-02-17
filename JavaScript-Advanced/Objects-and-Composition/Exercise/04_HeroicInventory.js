function solve(input) {
    let result = [];
  while (input.length) {
    let hero = input.shift();
    let [name, level, itemsString] = hero.split(' / ');
    level = Number(level);
    const items = itemsString ? itemsString.split(', ') : [];

    result.push({name, level, items});
  }
  return JSON.stringify(result);
}

// “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
