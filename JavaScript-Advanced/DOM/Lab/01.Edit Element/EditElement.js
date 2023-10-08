function editElement(ref, match, replacer) {
  const matcher = new RegExp(match, 'g');
  const result = ref.textContent.replace(matcher.substring(1, match.length - 1), replacer);
  ref.textContent = result;
}
const submit = document.getElementById("submitButton")
submit.addEventListener("click", editElement(document.getElementById("e1"),'%insert you text here%',document.getElementById("inputText")))

