function addandRemove(array) {
  const numbers = [];
  for (let i = 1; i <= array.length; i++) {
    const element = array[i - 1];
    if (element === "add") {
      numbers.push(i);
    } else {
      numbers.pop();
    }
  }
  if (numbers.length == 0) {
    console.log("Empty");
  } else {
    numbers.forEach((element) => {
      console.log(element);
    });
  }
}

addandRemove(["remove", "remove", "remove"]);
