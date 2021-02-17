function solve(carObj) {
  const power = carObj["power"];
  let engine = {};
  let model = carObj["model"];
  if (power <= 90) {
    engine = { power: 90, volume: 1800 };
  } else if (power <= 120) {
    engine = { power: 120, volume: 2400 };
  } else {
    engine = { power: 200, volume: 3500 };
  }

  const type = carObj["carriage"];
  const color = carObj["color"];

  const carriage = { type: type, color: color };

  let wheelsize = Math.round(carObj["wheelsize"]);

  if (wheelsize % 2 == 0) {
    wheelsize--;
  }
  const wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

  const car = {
    model: model,
    engine: engine,
    carriage: carriage,
    wheels: wheels,
  };
  return car;
}

const car = {
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
};

console.log(solve(car));
