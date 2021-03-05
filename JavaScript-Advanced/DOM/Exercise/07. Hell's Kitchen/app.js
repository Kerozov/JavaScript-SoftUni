function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  function onClick() {
     const input = JSON.parse(document.querySelector("textarea").value);
    let bestAvg = 0;
    let bestHotelName;
    let bestSalary = 0;
    let bestWorkers;
    let resturants = [];

    for (let i = 0; i < input.length; i++) {
      let currResturant = input[i].split(" - ");
      const nameResturant = currResturant[0];
      const workersInput = currResturant[1];
      if (
        resturants.length > 0 &&
        resturants.find((r) => r.nameResturant == nameResturant)
      ) {
        resturants.find(
          (r) => r.nameResturant == nameResturant
        ).workersInput = workersInput;
      } else {
        resturants.push({
          nameResturant,
          workersInput,
        });
      }
    }

    for (let i = 0; i < resturants.length; i++) {
      const nameResturant = resturants[i].nameResturant;
      const workersInput = resturants[i].workersInput.split(", ");
      let currSalary = 0;
      let workers = [];

      for (const worker of workersInput) {
        const input = worker.split(" ");
        const name = input[0];
        const salary = Number(input[1]);
        if (currSalary < salary) {
          currSalary = salary;
        }
        workers.push({ name, salary: Number(salary) });
      }

      let total = 0;
      for (const value of workers) {
        total += value.salary;
      }

      const avg = total / workersInput.length;
      if (avg > bestAvg) {
        bestAvg = avg;
        bestHotelName = nameResturant;
        bestWorkers = workers;
        bestSalary = currSalary;
      }
    }

    document.querySelector(
      "#bestRestaurant p"
    ).textContent = `Name: ${bestHotelName} Average Salary: ${bestAvg.toFixed(
      2
    )} Best Salary: ${bestSalary.toFixed(2)}`;
  const outputWorkers = bestWorkers.sort(function (a, b) {
    return  b.salary - a.salary;
    });
    const output = outputWorkers
      .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
      .join(" ");
    document.querySelector("#workers p").textContent = output;
  }
}
