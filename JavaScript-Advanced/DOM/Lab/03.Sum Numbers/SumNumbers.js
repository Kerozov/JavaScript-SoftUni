function calc() {
  const firstNum = document.getElementById("num1");
  const secondNum = document.getElementById("num2");
  let result = document.getElementById("sum");
  result.value = Number(firstNum.value) + Number(secondNum.value);
}
