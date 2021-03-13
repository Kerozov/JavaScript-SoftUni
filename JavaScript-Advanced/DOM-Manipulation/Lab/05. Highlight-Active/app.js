function focused() {
 const inputs = document.querySelectorAll("input");
  
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
  }
  function onBlur(ev) {
      ev.target.parentNode.className = ''
  }

  function onFocus(ev) {
    ev.target.parentNode.className = 'focused'
  }
}
