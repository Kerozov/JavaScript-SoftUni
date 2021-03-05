function solve() {
  const textArea = document.getElementById("input").value;
  let re = /[A-z]+/;
  let text = textArea.split(".").filter(t=>t.match(re));
  let counter = 0;
  let textToParagraf = "";
  for (let i = 0; i < text.length; i++) {
    counter++;
    textToParagraf += `${text[i]} .`;
    if (text.length <= 3) {
      document.getElementById(
        "output"
      ).innerHTML += `<p>${[...textArea].join('')}</p>`;
      return;
    }
    if (text.length - i < 2) {
      document.getElementById(
        "output"
      ).innerHTML += `<p>${textToParagraf}</p>`;
      return;
    }
    if (counter == 3) {
      document.getElementById(
        "output"
      ).innerHTML += `<p>${textToParagraf}</p>`;
      textToParagraf = [];
      counter = 0;
    } 
     
  }
}
