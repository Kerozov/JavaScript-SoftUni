function solve(werkerAsObj) {
  const requredWater = werkerAsObj['weight'] * werkerAsObj['experience'] * 0.1;
  if (requredWater > werkerAsObj["levelOfHydrated"] && werkerAsObj["dizziness"]) {
    werkerAsObj["levelOfHydrated"] += requredWater;
    werkerAsObj["dizziness"] = false;
  }
  return werkerAsObj;
}

let worker = solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
);

console.log(worker);
// { weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true }
