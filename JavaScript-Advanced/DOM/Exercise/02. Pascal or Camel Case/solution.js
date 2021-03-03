function solve() {
  const textInput = document.getElementById("text").value;
  const parserInput = document.getElementById("naming-convention").value;
  const parser = parserInput.split(" ");
  let textOutput;
  if (parser.length == 2 && parser[0] === "Camel") {
    textOutput = camalize(textInput);
  } else if (parser.length == 2 && parser[0] === "Pascal") {
    textOutput = textInput.replace(/\w+/g,
      function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
     textOutput = textOutput.split(' ').join(''); 
  } else {
    textOutput = "Error!";
  }

  document.getElementById("result").textContent = textOutput;

  function camalize(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  function toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, "g"), " ")
      .replace(new RegExp(/[^\w\s]/, "g"), "")
      .replace(
        new RegExp(/\s+(.)(\w+)/, "g"),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, "g"), "")
      .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  }
}
